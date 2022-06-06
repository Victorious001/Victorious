var StateStorage = (function () {
    function StateStorage() {
    }
    StateStorage.set = function (key, state, sync) {
        if (!key) {
            return Promise.reject(new Error("StateStorage: set: key is missing"));
        }
        return new Promise((function (resolve, reject) {
            var item = {};
            item[key] = state;
            var storage = sync
                ? chrome.storage.sync
                : chrome.storage.local;
            storage.set(item, function () {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                resolve();
            });
        }));
    };
    ;
    StateStorage.get = function (key, sync) {
        if (!key) {
            return Promise.reject(new Error("StateStorage: get: key is missing"));
        }
        var storage = sync
            ? chrome.storage.sync
            : chrome.storage.local;
        return new Promise((function (resolve, reject) {
            storage.get(key, function (state) {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                resolve(state[key]);
            });
        }));
    };
    ;
    return StateStorage;
}());
