var UnifiedLogging = (function () {
    function UnifiedLogging() {
    }
    UnifiedLogging.getParamsFromData = function (data) {
        return Object.keys(data).reduce(function (acc, curr) {
            if (!curr || typeof data[curr] === "object")
                return acc;
            if (data[curr] === undefined || data[curr] === null)
                return acc + "&" + curr;
            return acc + "&" + curr + "=" + data[curr];
        }, "");
    };
    UnifiedLogging.fireInfoEvent = function (eventSpecificData) {
        return StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) { return UnifiedLogging.fireEvent("Info", state && state.configVars && state.configVars.unifiedLoggingUrl, state, eventSpecificData); });
    };
    UnifiedLogging.fireErrorEvent = function (eventSpecificData) {
        return StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) { return UnifiedLogging.fireEvent("Error", state && state.configVars && state.configVars.unifiedLoggingUrl, state, eventSpecificData); });
    };
    UnifiedLogging.fireSearchExtActiveEvent = function () {
        return StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) {
            return UnifiedLogging.fireEvent("SearchExtActive", state && state.configVars && state.configVars.livePing.url, state, { cwsid: state.replaceableParams.cwsid });
        });
    };
    UnifiedLogging.createStandardData = function (eventName, state) {
        return {
            anxa: "CAPNative",
            anxv: state.replaceableParams.toolbarVersion,
            anxe: eventName,
            anxt: state.toolbarData.toolbarId,
            anxtv: state.replaceableParams.toolbarVersion,
            anxp: state.toolbarData.partnerId,
            anxsi: state.toolbarData.partnerSubId,
            anxd: state.replaceableParams.buildDate,
            f: "00400000",
            anxr: +new Date(),
            coid: state.toolbarData.coId,
            userSegment: state.toolbarData.userSegment
        };
    };
    UnifiedLogging.fireEvent = function (eventName, url, state, eventSpecificData) {
        return new Promise(function (resolve, reject) {
            if (!eventName || !url || !state) {
                reject(new Error("UnifiedLogging: one of the required params is not set"));
                return;
            }
            var data = eventSpecificData
                ? Object.assign(UnifiedLogging.createStandardData(eventName, state), eventSpecificData)
                : UnifiedLogging.createStandardData(eventName, state);
            var searchParamsFromData = UnifiedLogging.getParamsFromData(data);
            url += ~url.indexOf("?")
                ? searchParamsFromData
                : searchParamsFromData.replace("&", "?");
            fetch(url)
                .then(function (response) {
                if (!response.ok) {
                    reject(new Error("UnifiedLogging: failed to fire Event " + url));
                    return;
                }
                resolve();
            })
                .catch(function (err) {
                Logger.error("failed to fetch url " + url, err);
            });
        });
    };
    return UnifiedLogging;
}());
