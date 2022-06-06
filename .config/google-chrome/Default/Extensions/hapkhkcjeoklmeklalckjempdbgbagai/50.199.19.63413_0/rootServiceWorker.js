var serviceWorker = self;
var scriptsUsedByRootSW = [
    "/js/logger.js",
    "/js/templateParser.js",
    "/js/PartnerId.js",
    "/js/util.js",
    "/js/browserUtils.js",
    "/js/ulLivePingExecutor.js",
    "/js/stateStorage.js",
    "/js/ul.js",
    "/js/babClick.js",
    "/js/pTagService.js",
    "/js/surveyService.js",
    "/js/urlUtils.js",
    "/js/internationalSearchUtils.js",
    "/js/settingsOverridesUtils.js",
    "/js/commonEventHandlers.js",
    "/js/connectionManager.js",
    "/js/extensionSetUpDLP.js",
    "/js/extensionSetUp.js"
];
scriptsUsedByRootSW.forEach(function (script) {
    self.importScripts(script);
});
var replaceParamsPlaceholdersInRightBABClick = function (tabId, changeInfo, tab) {
    var currentUrl = tab.url || tab.pendingUrl;
    if (!currentUrl)
        return;
    if (decodeURI(currentUrl) !== decodeURI(chrome.runtime.getManifest().homepage_url))
        return;
    StateStorage.get(ExtensionSetUp.extensionStateKey).then(function (state) {
        if (!state || !Object.keys(state).length)
            return;
        var redirectUrl = TextTemplate.parse(currentUrl, state.replaceableParams);
        chrome.tabs.update(tabId, { url: redirectUrl }, function (tab) {
            if (chrome.runtime.lastError) {
                Logger.warn(chrome.runtime.lastError);
            }
        });
    });
};
chrome.alarms.onAlarm.addListener(CommonEventHandlers.onAlarmHandler);
chrome.runtime.onMessage.addListener(ConnectionManager.contentScriptMessageHandler);
chrome.action.onClicked.addListener(BabClick.babClickHandler);
if (chrome.notifications) {
    chrome.notifications.onClicked.addListener(SurveyService.notificationOnClick);
}
chrome.webNavigation.onBeforeNavigate.addListener(SettingsOverridesUtils.getOnBeforeNavigateHandler(), SettingsOverridesUtils.getWebNavigationFilterForSearch());
chrome.tabs.onUpdated.addListener(replaceParamsPlaceholdersInRightBABClick);
Util.getConfig()
    .then(ExtensionSetUp.initExtensionState)
    .then(function (state) {
    return StateStorage.set(ExtensionSetUp.extensionStateKey, state).then(function () { return state; });
})
    .then(ExtensionSetUp.run)
    .catch(Logger.error);
