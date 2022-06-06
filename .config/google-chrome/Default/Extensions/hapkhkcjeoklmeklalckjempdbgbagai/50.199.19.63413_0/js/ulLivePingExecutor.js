var UlLivePingExecutor = (function () {
    function UlLivePingExecutor() {
    }
    UlLivePingExecutor.startULPing = function (state) {
        Logger.log("UlLivePingExecutor: startULPing function has been called");
        var interval = state.configVars.livePing.interval;
        var lastPing = state.lastLivePing;
        var delta = Math.max(0, interval - (Date.now() - (lastPing || 0)));
        if (delta === 0) {
            UnifiedLogging.fireSearchExtActiveEvent()
                .then(function () {
                state.lastLivePing = Date.now();
                StateStorage.set(ExtensionSetUp.extensionStateKey, state).catch(Logger.warn);
            })
                .catch(Logger.warn);
            delta += interval;
        }
        chrome.alarms.create(UlLivePingExecutor.alarmName, {
            when: Date.now() + delta,
            periodInMinutes: interval / 1000 / 60
        });
    };
    UlLivePingExecutor.alarmHandler = function (alarm) {
        if (alarm.name === UlLivePingExecutor.alarmName) {
            UnifiedLogging.fireSearchExtActiveEvent().catch(Logger.warn);
            StateStorage.get(ExtensionSetUp.extensionStateKey)
                .then(function (state) {
                state.lastLivePing = Date.now();
                StateStorage.set(ExtensionSetUp.extensionStateKey, state).catch(Logger.warn);
            });
        }
    };
    ;
    UlLivePingExecutor.stopULPing = function () {
        chrome.alarms.get(UlLivePingExecutor.alarmName, function (alarmInfo) {
            if (!alarmInfo)
                return;
            chrome.alarms.clear(UlLivePingExecutor.alarmName);
        });
    };
    UlLivePingExecutor.alarmName = "livePing";
    return UlLivePingExecutor;
}());
