var portNamePrefix = "localStorageContentScript";
var channel;
var commands = {
    getLocalStorage: function (data) {
        var storage = window.localStorage;
        var key = data && data.key;
        return Promise.resolve(storage.getItem(key));
    }
};
function init() {
    var port = chrome.runtime.connect({ name: Util.generateGuid(portNamePrefix + "-" + chrome.runtime.id + "-") });
    channel = {
        id: port.name,
        port: port,
        callbacks: new Map()
    };
    port.onMessage.addListener(onConnectMessage);
}
function onConnectMessage(message) {
    var command = commands[message.name] || channel.callbacks.get(message.name);
    if (command) {
        command(message.data || message.error).then(function (response) {
            if (message.reply) {
                channel.port.postMessage({ name: message.reply, data: response });
            }
        }).catch(function (err) {
            if (message.reply) {
                try {
                    channel.port.postMessage({ name: message.reply, error: err });
                }
                catch (error) {
                    Logger.warn("localStorageContentScript: Error In onConnectMessage postMessage: " + error);
                }
            }
        });
    }
}
init();
