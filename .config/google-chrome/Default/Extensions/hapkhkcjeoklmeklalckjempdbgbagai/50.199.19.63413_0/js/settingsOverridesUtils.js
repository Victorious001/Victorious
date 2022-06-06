"use strict";
var SettingsOverridesUtils = (function () {
    function SettingsOverridesUtils() {
    }
    SettingsOverridesUtils.getOnBeforeNavigateHandler = function () {
        var queryParamsFromVisibleSearchUrl = UrlUtils.parseUrlForQueryString(SettingsOverridesUtils.getVisibleSearchUrl());
        var cobrandFromVisibleSearchUrl = queryParamsFromVisibleSearchUrl.getParam(SettingsOverridesUtils.redirectQueryParamKey);
        Logger.log("SettingsOverridesUtils: getOnBeforeNavigateHandler: cobrand of redirect= param from visible search URL: " + cobrandFromVisibleSearchUrl);
        return function (details) {
            var urlStrIn = details.url;
            var queryParamsFromUrlIn = UrlUtils.parseUrlForQueryString(urlStrIn);
            var cobrandFromUrlIn = queryParamsFromUrlIn.getParam(SettingsOverridesUtils.redirectQueryParamKey);
            if (cobrandFromUrlIn !== cobrandFromVisibleSearchUrl) {
                Logger.log("SettingsOverridesUtils: getOnBeforeNavigateHandler: NO tab update.");
                return;
            }
            Logger.log("SettingsOverridesUtils: getOnBeforeNavigateHandler: YES, update the tab.");
            SettingsOverridesUtils.createRedirectUrl(urlStrIn)
                .then(function (redirectUrl) {
                Logger.log("SettingsOverridesUtils: getOnBeforeNavigateHandler: update tab \nFROM: " + urlStrIn + " \nTO " + redirectUrl, details);
                chrome.tabs.update(details.tabId, { url: redirectUrl }, function (tab) {
                    if (chrome.runtime.lastError) {
                        UnifiedLogging.fireErrorEvent({
                            message: "on-error",
                            topic: "redirect to SERP",
                            data1: "failed to update the tab after the omnibox search",
                        }).catch(Logger.warn);
                        Logger.warn(chrome.runtime.lastError);
                    }
                });
            })
                .catch(Logger.warn);
        };
    };
    SettingsOverridesUtils.redirectQueryParamKey = "redirect";
    SettingsOverridesUtils.minBrowserVersionToShowThePromptAgain = 86;
    SettingsOverridesUtils.dsAssistKey = "dsassist";
    SettingsOverridesUtils.getWebNavigationFilterForSearch = function () {
        var getSearchParamName = function (search) {
            var result = "";
            if (!search)
                return result;
            var matchSearchQuery = search.match(/[^&?]+={searchTerms}/i);
            if (!matchSearchQuery || !matchSearchQuery.length)
                return result;
            var splitMatchSearchQuery = matchSearchQuery[0].split("=");
            if (!splitMatchSearchQuery || !splitMatchSearchQuery.length)
                return result;
            return splitMatchSearchQuery[0];
        };
        var searchUrl = new URL(SettingsOverridesUtils.getVisibleSearchUrl());
        var searchParamName = getSearchParamName(searchUrl.search);
        var prefix = "", suffix = "";
        var splitSearchParams = searchUrl.search.split(new RegExp("(\\?|&)" + searchParamName + "=[^&]+", "i"));
        if (splitSearchParams.length) {
            prefix = splitSearchParams[0].slice(1);
        }
        if (splitSearchParams.length === 3) {
            suffix = splitSearchParams[2].slice(1);
        }
        return {
            url: [{
                    schemes: [searchUrl.protocol.slice(0, -1)],
                    hostEquals: searchUrl.hostname,
                    pathEquals: searchUrl.pathname,
                    queryPrefix: prefix,
                    querySuffix: suffix
                }]
        };
    };
    SettingsOverridesUtils.getVisibleSearchUrl = function () {
        var manifest = chrome.runtime.getManifest();
        return manifest.chrome_settings_overrides.search_provider.search_url;
    };
    SettingsOverridesUtils.createRedirectUrl = function (urlStrIn) {
        return StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) {
            var internalSearchUrlStr = state.configVars.settingsOverrides.searchUrlWithParamsToReplace;
            Logger.log("SettingsOverridesUtils: createRedirectUrl: internalSearchUrlStr before adjusting domain: " + internalSearchUrlStr);
            internalSearchUrlStr = InternationalSearchUtils.getDomain(state, internalSearchUrlStr);
            Logger.log("SettingsOverridesUtils: createRedirectUrl: internalSearchUrlStr after adjusting domain: " + internalSearchUrlStr);
            var internalSearchUrlWithReplacedParams = UrlUtils.parseUrl(TextTemplate.parse(internalSearchUrlStr, state.replaceableParams));
            Logger.log("SettingsOverridesUtils: createRedirectUrl: internalSearchUrlStr after replacing placeholders: " + internalSearchUrlWithReplacedParams);
            var urlOut = UrlUtils.parseUrl(urlStrIn);
            var browserMajorVersion = parseInt(BrowserUtils.getBrowserVersion(), 10);
            urlOut.setScheme(internalSearchUrlWithReplacedParams.getScheme());
            urlOut.setDomain(internalSearchUrlWithReplacedParams.getDomain());
            urlOut.setPath(internalSearchUrlWithReplacedParams.getPath());
            urlOut.setParamsFromObject(internalSearchUrlWithReplacedParams.getParamsObject());
            urlOut.removeParam(SettingsOverridesUtils.redirectQueryParamKey);
            if (!state.serpAssistWasShown && !isNaN(browserMajorVersion) && browserMajorVersion >= SettingsOverridesUtils.minBrowserVersionToShowThePromptAgain) {
                urlOut.setFragmentId(SettingsOverridesUtils.dsAssistKey + browserMajorVersion);
                state.serpAssistWasShown = true;
                StateStorage.set(ExtensionSetUp.extensionStateKey, state).catch(Logger.warn);
            }
            var urlStrOut = urlOut.toString();
            Logger.log("SettingsOverridesUtils: createRedirectUrl: final URL: " + urlStrOut);
            return urlStrOut;
        });
    };
    return SettingsOverridesUtils;
}());
