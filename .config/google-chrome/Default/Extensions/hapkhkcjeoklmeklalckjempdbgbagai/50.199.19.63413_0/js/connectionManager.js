var ConnectionManager = (function () {
    function ConnectionManager() {
    }
    ConnectionManager.init = function () {
        chrome.management.getSelf(function (extensionInto) {
            ConnectionManager.extensionInfo = extensionInto;
        });
    };
    ConnectionManager.contentScriptMessageHandler = function (message, sender, response) {
        if (!message.name) {
            Logger.warn("ConnectionManager: contentScriptMessageHandler: message does not have \"name\" property");
            if (response)
                response({ destination: message.data.sender, error: "message name is not set" });
            return false;
        }
        switch (message.name) {
            case "getExtensionInfo":
                response(ConnectionManager.getExtensionInfo(message));
                break;
            default:
                if (response)
                    response({ destination: message.data.sender, error: "unknown message " + message.name });
        }
        return true;
    };
    ConnectionManager.sendMessageToOpenWTT = function (data) {
        var message = {
            name: "webtooltab",
            data: data
        };
        chrome.tabs.query({}, function (tabs) {
            tabs
                .filter(function (tab) { return tab.url.indexOf("chrome-extension://" + chrome.runtime.id) === 0; })
                .forEach(function (wttTab) {
                chrome.tabs.sendMessage(wttTab.id, message);
            });
        });
    };
    ConnectionManager.getExtensionInfo = function (message) {
        var replyMessage = {
            name: message.name,
            data: {
                info: ConnectionManager.extensionInfo,
                messagingApiV2: true
            }
        };
        if (!ConnectionManager.extensionInfo) {
            Logger.warn("ConnectionManager: contentScriptMessageHandler: extensionInfo is not initialized");
            replyMessage.error = "extensionInfo is not initialized";
        }
        return replyMessage;
    };
    return ConnectionManager;
}());
ConnectionManager.init();
