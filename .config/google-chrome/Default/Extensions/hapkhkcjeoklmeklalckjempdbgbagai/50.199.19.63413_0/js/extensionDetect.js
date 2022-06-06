var ExtensionDetect = (function () {
    function ExtensionDetect() {
    }
    ExtensionDetect.fromExtension = "EXTENSION";
    ExtensionDetect.requestStatus = "GET_INFO";
    ExtensionDetect.toolbarReadyStatus = "TOOLBAR_READY";
    ExtensionDetect.init = function () {
        var gettingState = StateStorage.get("state");
        var listenForDomLoad = new Promise(function (resolve) {
            window.addEventListener("DOMContentLoaded", function loadListener(e) {
                window.removeEventListener("DOMContentLoaded", loadListener);
                resolve();
            });
        });
        gettingState.then(function (state) {
            if (!state || !Object.keys(state).length)
                return;
            ExtensionDetect.setInstalledCookies(state && state.replaceableParams && state.replaceableParams.definitionID || "");
        });
        Promise.all([gettingState, listenForDomLoad])
            .then(function (results) {
            var state = results[0];
            if (!state || !Object.keys(state).length)
                return;
            window.addEventListener("message", ExtensionDetect.getMessageListener(state));
            var message = ExtensionDetect.getMessage(state, ExtensionDetect.toolbarReadyStatus);
            window.postMessage(JSON.stringify(message), document.location.origin);
        })
            .catch(Logger.warn);
    };
    ExtensionDetect.getMessageListener = function (state) {
        return function (message) {
            if (message.origin !== document.location.origin)
                return;
            var data = typeof message.data === "string"
                ? JSON.parse(message.data)
                : message.data;
            if (data.from !== ExtensionDetect.fromExtension && data.status === ExtensionDetect.requestStatus) {
                var data_1 = {
                    toolbarId: state.toolbarData.toolbarId,
                    partnerId: state.toolbarData.partnerId,
                    partnerSubId: state.toolbarData.partnerSubId,
                    installDate: state.toolbarData.installDate,
                    toolbarVersion: state.replaceableParams.toolbarVersion,
                    toolbarBuildDate: state.replaceableParams.buildDate,
                };
                window.postMessage(JSON.stringify(ExtensionDetect.getMessage(state, ExtensionDetect.requestStatus, data_1)), document.location.origin);
            }
        };
    };
    ExtensionDetect.getMessage = function (state, messageStatus, data) {
        var msg = {
            toolbarId: state.replaceableParams.definitionID,
            from: ExtensionDetect.fromExtension,
            status: messageStatus
        };
        if (data && Object.keys(data).length) {
            msg.message = data;
        }
        return msg;
    };
    ExtensionDetect.setInstalledCookies = function (toolbarId) {
        var hourFromNow = new Date(Date.now() + (1 * 60 * 60 * 1000)).toUTCString();
        document.cookie = "mindsparktb_" + toolbarId + "=true; expires=" + hourFromNow + "; path=/";
        document.cookie = "mindsparktbsupport_" + toolbarId + "=true; expires=" + hourFromNow + "; path=/";
    };
    return ExtensionDetect;
}());
ExtensionDetect.init();
