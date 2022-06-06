var ExtensionSetUpDLP = (function () {
    function ExtensionSetUpDLP() {
    }
    ExtensionSetUpDLP.dataSourceCookies = "DLP cookies";
    ExtensionSetUpDLP.dataSourceLocalStorage = "DLP local storage";
    ExtensionSetUpDLP.dataSourceExtension = "extension";
    ExtensionSetUpDLP.dataSourceManifestUpgrade = "manifest upgrade";
    ExtensionSetUpDLP.localStorageContentScriptScopeName = "localStorageContentScript";
    ExtensionSetUpDLP.getToolBarData = function (config, defaultToolbarData, timeoutToGetToolbarDataFromLocalStorage) {
        var key = "toolbarData";
        return ExtensionSetUpDLP.getDataFromCookies(config.buildVars.downloadDomain)
            .then(function (cookieToolbarData) {
            if (!cookieToolbarData) {
                return Promise.reject(new Error("Failed to get DLP data from cookies"));
            }
            cookieToolbarData.dataSource = ExtensionSetUpDLP.dataSourceCookies;
            Logger.log("ExtensionSetUpDLP: Successfully got DLP data from splash page: \n" + JSON.stringify(cookieToolbarData));
            return cookieToolbarData;
        })
            .catch(function (err) {
            Logger.warn("ExtensionSetUpDLP: getToolBarData failed to get data from cookies " + (err.message || err));
            return ExtensionSetUpDLP.getDataFromLocalStorage(config.buildVars.localStorageUrl, key, timeoutToGetToolbarDataFromLocalStorage)
                .then(function (localStorageDLPData) {
                localStorageDLPData = ExtensionSetUpDLP.cleanToolbarData(localStorageDLPData);
                localStorageDLPData.dataSource = ExtensionSetUpDLP.dataSourceLocalStorage;
                Logger.log("ExtensionSetUpDLP: Successfully got DLP data from local storage: \n" + JSON.stringify(localStorageDLPData));
                return localStorageDLPData;
            });
        });
    };
    ExtensionSetUpDLP.loadPostInstallContentScript = function (state) {
        chrome.tabs.query({ url: "*://*" + state.configVars.downloadDomain + "/*" }, function (tabs) {
            if (!tabs.length)
                return;
            ["/js/logger.js", "/js/stateStorage.js", "/js/postInstallContentScript.js"]
                .forEach(function (file) {
                chrome.scripting.executeScript({
                    files: [file],
                    target: {
                        tabId: tabs[0].id
                    }
                }, function () {
                    if (chrome.runtime.lastError) {
                        Logger.warn(chrome.runtime.lastError);
                        UnifiedLogging.fireInfoEvent({
                            message: "on-after",
                            topic: "localStorage-SEState",
                            data1: "error setting local storage state for " + tabs[0].url,
                        }).catch(Logger.warn);
                        return;
                    }
                    Logger.log("ExtensionSetUpDLP: loadPostInstallContentScript " + file + " injected on " + tabs[0].url);
                });
            });
        });
    };
    ExtensionSetUpDLP.cleanToolbarData = function (dirtyDLPData) {
        while (typeof dirtyDLPData === "string") {
            dirtyDLPData = JSON.parse(dirtyDLPData);
        }
        return Object.keys(ExtensionSetUpDLP.getSkeletonToolbarData()).reduce(function (clean, key) {
            if (dirtyDLPData[key]) {
                var typeConflictExists = (typeof clean[key] === "boolean" && typeof dirtyDLPData[key] !== "boolean");
                clean[key] = typeConflictExists ? (dirtyDLPData[key] === "true") : dirtyDLPData[key];
            }
            return clean;
        }, ExtensionSetUpDLP.getSkeletonToolbarData());
    };
    ExtensionSetUpDLP.getDataFromLocalStorage = function (url, key, timeout) {
        return new Promise(function (resolve, reject) {
            chrome.tabs.create({ url: url, active: false }, function (tab) {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                    return;
                }
                var cleanUp = function () {
                    !timeoutId || clearTimeout(timeoutId);
                    chrome.tabs.remove(tab.id);
                    chrome.runtime.onConnect.removeListener(onLocalStorageContentScriptConnect);
                };
                var onLocalStorageContentScriptConnect = function (port) {
                    Logger.log("ExtensionSetUpDLP: onLocalStorageContentScriptConnect: connection from " + port.name);
                    if (port.sender.tab.windowId === tab.windowId &&
                        port.sender.tab.id === tab.id &&
                        port.name.indexOf(ExtensionSetUpDLP.localStorageContentScriptScopeName) === 0) {
                        requestDataFromLocalStorageContentScript(port, key)
                            .then(function (data) {
                            cleanUp();
                            if (!data) {
                                return reject(new Error("Failed to retrieve data from localStorage. keys:" + key + " urL:" + url));
                            }
                            resolve(data);
                        })
                            .catch(function (err) {
                            cleanUp();
                            reject(err);
                        });
                    }
                };
                var requestDataFromLocalStorageContentScript = function (port, key) {
                    return new Promise(function (resolveOnData) {
                        var request = {
                            name: "getLocalStorage",
                            reply: Util.generateGuid("getLocalStorage.response"),
                            data: { key: key }
                        };
                        port.onMessage.addListener(function (message) {
                            if (message.name !== request.reply) {
                                return;
                            }
                            Logger.log("ExtensionSetUpDLP: requestDataFromLocalStorageContentScript: received responce from " + port.name + " message: ", message);
                            while (typeof message.data === "string") {
                                message.data = JSON.parse(message.data);
                            }
                            resolveOnData(message.data);
                        });
                        port.postMessage(request);
                    });
                };
                var timeoutId = setTimeout(function () {
                    cleanUp();
                    reject(new Error("Failed to retrieve data from localStorage within timeout"));
                }, timeout);
                chrome.runtime.onConnect.addListener(onLocalStorageContentScriptConnect);
            });
        });
    };
    ExtensionSetUpDLP.getDataFromCookies = function (domain) {
        var parseCookies = function (cookies) {
            var cookiesObj = cookies.reduce(function (obj, cookie) {
                obj[cookie.name] = cookie.value;
                return obj;
            }, {});
            var toolbarData = ExtensionSetUpDLP.cleanToolbarData(cookiesObj);
            Logger.log("ExtensionSetUpDLP: The fetched DLP data looks like: " + JSON.stringify(toolbarData));
            return toolbarData;
        };
        return new Promise(function (resolve, reject) {
            chrome.cookies.getAll({ domain: domain }, function (cookies) {
                if (cookies.some(function (cookie) { return cookie.name === "toolbarId"; })) {
                    resolve(parseCookies(cookies));
                }
                else {
                    reject(new Error("ExtensionSetUpDLP: getDataFromCookies: FAILED to find DLP data cookies in domain: " + domain));
                }
            });
        });
    };
    ExtensionSetUpDLP.getSkeletonToolbarData = function () {
        return {
            language: "",
            partnerId: "",
            installDate: "",
            coId: "",
            toolbarId: "",
            partnerSubId: "",
            dlput: "",
            pixelUrl: "",
            countryCode: "",
            campaign: "",
            cobrand: "",
            userSegment: "",
            uninstallSurveyUrl: "",
            dataSource: "extension",
            searchParams: "",
            vendorId: ""
        };
    };
    return ExtensionSetUpDLP;
}());
