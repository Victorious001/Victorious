"use strict";
var InternationalSearchUtils = (function () {
    function InternationalSearchUtils() {
    }
    InternationalSearchUtils.DEFAULT_COUNTRY_CODE = "99";
    InternationalSearchUtils.getDomain = function (extensionState, urlIn) {
        var getDomainForCountry = function () {
            return (extensionState.configVars.internationalSearchCountryCodes || [])
                .map(function (cc) { return cc.toUpperCase(); })
                .indexOf(InternationalSearchUtils.DEFAULT_COUNTRY_CODE || "") !== -1
                ? new URL(extensionState.configVars.internationalSearchSpecifiedDomain)
                : new URL(extensionState.configVars.internationalSearchDefaultDomain);
        };
        var url = new URL(urlIn);
        var useDomain = extensionState.configVars.internationalSearchDefaultDomain
            ? getDomainForCountry()
            : new URL(SettingsOverridesUtils.getVisibleSearchUrl());
        if ((SettingsOverridesUtils.getVisibleSearchUrl()) && url.hostname === new URL(SettingsOverridesUtils.getVisibleSearchUrl()).hostname) {
            url.protocol = useDomain.protocol;
            url.hostname = useDomain.hostname;
        }
        return url.toString();
    };
    return InternationalSearchUtils;
}());
