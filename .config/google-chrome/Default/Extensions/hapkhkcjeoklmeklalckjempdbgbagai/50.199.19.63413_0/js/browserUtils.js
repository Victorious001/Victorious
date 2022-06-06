"use strict";
var BrowserUtils;
(function (BrowserUtils) {
    function getBrowserName() {
        if (~navigator.userAgent.indexOf("Edg/")) {
            return "Edg";
        }
        if (~navigator.userAgent.indexOf("Chrome")) {
            return "Chrome";
        }
        if (~navigator.userAgent.indexOf("Firefox")) {
            return "Firefox";
        }
    }
    BrowserUtils.getBrowserName = getBrowserName;
    BrowserUtils.getBrowserVersion = function () {
        return new RegExp(getBrowserName() + "\\/([0-9\\.]+)").exec(navigator.userAgent)[1];
    };
})(BrowserUtils || (BrowserUtils = {}));
