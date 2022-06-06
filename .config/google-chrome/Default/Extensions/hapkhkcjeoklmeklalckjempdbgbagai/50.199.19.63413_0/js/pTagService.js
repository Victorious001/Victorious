var PTagService = (function () {
    function PTagService() {
    }
    PTagService.alarmHandler = function (alarm) {
        if (alarm.name !== PTagService.alarmName) {
            return;
        }
        StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (extensionState) {
            var url = PTagService.getPTagServiceUrl(extensionState);
            PTagService.requestPTagService(url)
                .then(function (response) {
                return PTagService.handlePTagServiceResponse(response);
            })
                .catch(function (err) {
                Logger.warn(err);
                UnifiedLogging.fireInfoEvent({
                    message: "on-error",
                    topic: "ptag-service",
                    data1: url,
                    data2: err.message || err.toString()
                }).catch(Logger.warn);
                return Promise.resolve();
            })
                .finally(function () {
                PTagService.scheduleAlarm();
            });
        });
    };
    ;
    PTagService.updateToolbarDataWithDefaultSearchParamsIfMissing = function (state) {
        if (!state.toolbarData.vendorId) {
            state.toolbarData.vendorId = PTagService.getDefaultVendorId();
        }
        if (!state.toolbarData.searchParams) {
            state.toolbarData.searchParams = PTagService.getDefaultSearchParams();
        }
    };
    PTagService.getDefaultVendorId = function () {
        return "";
    };
    PTagService.getSourceValue = function () {
        return Util.isNTExtension() ? "WTT" : "OMNI";
    };
    PTagService.getDefaultSearchParams = function () {
        var searchParams = Util.isNTExtension()
            ? { PC: "IAWT", FROM: "IAW000", PTAG: "IAC10000000019" }
            : { PC: "IASE", FROM: "IASE01", PTAG: "IAC10000000029" };
        return JSON.stringify(searchParams);
    };
    PTagService.alarmName = "pTagServiceCheck";
    PTagService.scheduleAlarm = function () {
        var getRetryInterval = function (retryCounter) {
            var maxRetryIntervalMS = 3600 * 24 * 1000;
            var initialRetryIntervalMS = 1000;
            if (retryCounter === 0) {
                return 0;
            }
            return Math.min(initialRetryIntervalMS * Math.pow(2, retryCounter), maxRetryIntervalMS);
        };
        var isValidDateInFuture = function (when) {
            return when && (when - Date.now() >= 0);
        };
        StateStorage.get("pTagService")
            .then(function (ptagState) {
            if (!ptagState.hasOwnProperty("retryCounter")) {
                ptagState.retryCounter = 0;
            }
            var when = isValidDateInFuture(ptagState.nextCall)
                ? ptagState.nextCall
                : Date.now() + getRetryInterval(ptagState.retryCounter);
            chrome.alarms.get(PTagService.alarmName, function (alarm) {
                if (alarm)
                    return;
                chrome.alarms.create(PTagService.alarmName, { when: when });
            });
        });
    };
    PTagService.getPTagServiceUrl = function (state) {
        var url = state.configVars.pTagServiceUrl;
        var cobrand = Util.getCobrandFromPartnerId(state.toolbarData.partnerId, state.toolbarData.coId);
        var vendorId = state.toolbarData.vendorId || PTagService.getDefaultVendorId();
        var installDateForPTagService = PTagService.getFormattedInstallDate(state.toolbarData.installDate);
        var source = PTagService.getSourceValue();
        var track = state.replaceableParams && state.toolbarData.dataSource === "extension"
            ? "VRLTRK"
            : state.replaceableParams.trackID;
        return url + "?cobrand=" + cobrand + "&vendor=" + vendorId + "&installDate=" + installDateForPTagService + "&source=" + source + "&track=" + track;
    };
    PTagService.getFormattedInstallDate = function (installDate) {
        return installDate.slice(0, 8);
    };
    PTagService.requestPTagService = function (ptagServiceURL) {
        return fetch(ptagServiceURL)
            .then(function (response) {
            if (!response.ok)
                return Promise.reject(new Error("error fetching pTag service"));
            return response.json();
        });
    };
    PTagService.handlePTagServiceResponse = function (pTagServiceResponse) {
        if (!pTagServiceResponse || !pTagServiceResponse.searchParams || typeof pTagServiceResponse.ttl !== "number") {
            return Promise.reject(new Error("Invalid response from server: \"" + pTagServiceResponse + "\""));
        }
        var newPtagState = {
            nextCall: Date.now() + pTagServiceResponse.ttl * 1000,
            ttl: pTagServiceResponse.ttl
        };
        return Promise.all([StateStorage.get("pTagService"), StateStorage.get(ExtensionSetUp.extensionStateKey)])
            .then(function (stateArr) {
            var savedPtagState = stateArr[0];
            var extensionState = stateArr[1];
            var newSearchParams = JSON.stringify(pTagServiceResponse.searchParams);
            var isTTLChanged = newPtagState.ttl !== savedPtagState.ttl;
            var searchParamsChanged = newSearchParams !== extensionState.toolbarData.searchParams;
            extensionState.toolbarData.searchParams = newSearchParams;
            extensionState.replaceableParams.searchParams;
            if (isTTLChanged || searchParamsChanged) {
                UnifiedLogging.fireInfoEvent({
                    message: "success-search-params-update",
                    topic: "ptag-service",
                    data1: newSearchParams,
                    data2: pTagServiceResponse.ttl.toString()
                }).catch(Logger.warn);
            }
            if (searchParamsChanged) {
                var data = {
                    data: pTagServiceResponse.searchParams,
                    destination: "searchParams",
                };
                ConnectionManager.sendMessageToOpenWTT(data);
            }
            return Promise.all([StateStorage.set(ExtensionSetUp.extensionStateKey, extensionState), StateStorage.set("pTagService", newPtagState)]);
        });
    };
    return PTagService;
}());
