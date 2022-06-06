"use strict";
var Util = (function () {
    function Util() {
    }
    Util.getConfig = function () {
        return fetch(Util.extensionConfigUrl)
            .then(function (response) {
            if (!response.ok)
                return Promise.reject(new Error("error fetching \"" + Util.extensionConfigUrl + "\" status: " + response.status));
            return response.json();
        });
    };
    Util.generateGuid = function (prefix, length) {
        return (prefix || "") + Array.prototype.reduce.call((crypto).getRandomValues(new Uint32Array(length || 4)), function (p, i) {
            return (p.push(i.toString(36)), p);
        }, []).join("-");
    };
    Util.createInstallDate = function () {
        var today = new Date(), year = today.getFullYear(), month = today.getMonth() + 1, day = today.getDate(), hour = today.getHours(), pad = function (n) { return (n < 10 ? "0" : "") + n.toString(); };
        return "" + year + pad(month) + pad(day) + pad(hour);
    };
    Util.generateToolbarId = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = (c == "x" ? r : r & 0x3 | 0x8), hexString = v.toString(16);
            return hexString.toUpperCase();
        });
    };
    Util.getCobrandFromPartnerId = function (partnerId, defaultCobrand) {
        if (partnerId && partnerId.split("^")[1]) {
            return (partnerId.split("^")[1]);
        }
        return defaultCobrand;
    };
    Util.isNTExtension = function () {
        return (typeof chrome.runtime.getManifest().chrome_url_overrides !== "undefined");
    };
    Util.isBing = function (state) {
        var searchDomain = state.configVars.searchDomain;
        return searchDomain.toLowerCase().indexOf("bing.com") > -1;
    };
    Util.getCwsWindow = function () {
        return new Promise(function (resolve) {
            chrome.windows.getAll({
                populate: true
            }, function (windows) {
                var popUpWindow = windows.find(function (window) {
                    return window.type === "popup" && !!window.tabs.find(function (tab) {
                        return new RegExp("chrome\\.google\\.com\\/webstore.*" + chrome.runtime.id).test(tab.url);
                    });
                });
                resolve(popUpWindow);
            });
        });
    };
    Util.extensionConfigUrl = "/config/config.json";
    return Util;
}());
