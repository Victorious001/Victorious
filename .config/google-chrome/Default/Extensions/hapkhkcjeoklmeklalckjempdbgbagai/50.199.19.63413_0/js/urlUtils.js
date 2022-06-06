'use strict';
var UrlUtils;
(function (UrlUtils) {
    var ParsedUrl = (function () {
        function ParsedUrl(parts) {
            this.parts = parts;
            this.params = parseQueryString(this.parts.queryString);
        }
        ParsedUrl.prototype.toString = function () {
            var out = this.parts.scheme + '://' + this.parts.domain;
            if (this.parts.port) {
                out += ':' + this.parts.port;
            }
            out += '/';
            if (this.parts.path) {
                out += this.parts.path;
            }
            if (this.parts.queryString) {
                out += '?' + this.parts.queryString;
            }
            if (this.parts.fragmentId) {
                out += '#' + this.parts.fragmentId;
            }
            return out;
        };
        ParsedUrl.prototype.getScheme = function () { return this.parts.scheme; };
        ParsedUrl.prototype.getDomain = function () { return this.parts.domain; };
        ParsedUrl.prototype.getPort = function () { return this.parts.port; };
        ParsedUrl.prototype.getPath = function () { return this.parts.path; };
        ParsedUrl.prototype.getQueryString = function () { return this.parts.queryString; };
        ParsedUrl.prototype.getParam = function (name) { return this.params.getParam(name); };
        ParsedUrl.prototype.getParamsObject = function () { return this.params.getParamsObject(); };
        ParsedUrl.prototype.getFragmentId = function () { return this.parts.fragmentId; };
        ParsedUrl.prototype.setScheme = function (scheme) { this.parts.scheme = scheme; };
        ParsedUrl.prototype.setDomain = function (domain) { this.parts.domain = domain; };
        ParsedUrl.prototype.setPort = function (port) { this.parts.port = port; };
        ParsedUrl.prototype.setPath = function (path) { this.parts.path = path; };
        ParsedUrl.prototype.setQueryString = function (queryString) { this.params = parseQueryString(queryString); this.parts.queryString = this.params.toString(); };
        ParsedUrl.prototype.setParam = function (name, val) { this.params.setParam(name, val); this.parts.queryString = this.params.toString(); };
        ParsedUrl.prototype.removeParam = function (name) { this.params.removeParam(name); this.parts.queryString = this.params.toString(); };
        ParsedUrl.prototype.setParamsFromObject = function (obj) { this.params.setParamsFromObject(obj); this.parts.queryString = this.params.toString(); };
        ParsedUrl.prototype.setFragmentId = function (fragmentId) { this.parts.fragmentId = fragmentId; };
        return ParsedUrl;
    }());
    UrlUtils.ParsedUrl = ParsedUrl;
    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, 'findIndex', {
            value: function (predicate) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);
                var len = o.length >>> 0;
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var thisArg = arguments[1];
                var k = 0;
                while (k < len) {
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return k;
                    }
                    k++;
                }
                return -1;
            }
        });
    }
    var ParsedQueryString = (function () {
        function ParsedQueryString(nameValues) {
            this.nameValues = nameValues;
        }
        ParsedQueryString.prototype.getParamIndex = function (name) {
            return this.nameValues.findIndex(function (nv) { return nv.name === name; });
        };
        ParsedQueryString.prototype.hasParam = function (name) {
            var index = this.getParamIndex(name);
            return index !== -1;
        };
        ParsedQueryString.prototype.getParam = function (name) {
            var index = this.getParamIndex(name), value = index === -1 ? undefined : this.nameValues[index].value;
            return value;
        };
        ParsedQueryString.prototype.setParam = function (name, decodedValueIn) {
            var index = this.getParamIndex(name), decodedValue = typeof decodedValueIn === 'undefined' ? '' : decodedValueIn, nv = {
                name: name,
                value: decodedValue,
                encodedName: encodeURIComponent(name),
                encodedValue: encodeURIComponent(decodedValue)
            };
            if (index === -1) {
                this.nameValues.push(nv);
            }
            else {
                this.nameValues[index] = nv;
            }
        };
        ParsedQueryString.prototype.removeParam = function (name) {
            var index = this.getParamIndex(name);
            if (index !== -1) {
                this.nameValues.splice(index, 1);
            }
        };
        ParsedQueryString.prototype.getParamsObject = function () {
            return this.nameValues.reduce(function (obj, nv) {
                obj[nv.name] = nv.value;
                return obj;
            }, {});
        };
        ParsedQueryString.prototype.setParamsFromObject = function (obj) {
            var _this = this;
            Object.keys(obj).forEach(function (key) {
                _this.setParam(key, obj[key]);
            });
        };
        ParsedQueryString.prototype.toString = function () {
            var out = this.nameValues.map(function (nv) { return nv.encodedName + "=" + nv.encodedValue; });
            return out.join('&');
        };
        return ParsedQueryString;
    }());
    UrlUtils.ParsedQueryString = ParsedQueryString;
    function parseUrlForQueryString(url) {
        var queryString = parseUrl(url).parts.queryString;
        if (!queryString) {
            return undefined;
        }
        return parseQueryString(queryString);
    }
    UrlUtils.parseUrlForQueryString = parseUrlForQueryString;
    function parseUrl(url) {
        var parts = {
            scheme: "",
            domain: "",
            port: undefined,
            path: "",
            queryString: undefined,
            fragmentId: undefined,
        };
        var RFC_URL = /^(.*?):\/\/(.*?)(:[0-9]+)?\/(.*?)(\?.*?)?(#.*)?$/, SCHEME_DOMAIN = /^(.*?):\/\/(.*?)(:[0-9]+)?$/, results = RFC_URL.exec(url);
        if (!results) {
            results = SCHEME_DOMAIN.exec(url);
        }
        if (results) {
            parts.scheme = results[1];
            parts.domain = results[2];
            parts.port = results[3] ? results[3].substring(1) : undefined;
            parts.path = results[4];
            parts.queryString = results[5] ? results[5].substring(1) : undefined;
            parts.fragmentId = results[6] ? results[6].substring(1) : undefined;
        }
        return new ParsedUrl(parts);
    }
    UrlUtils.parseUrl = parseUrl;
    function parseQueryString(queryString) {
        var tmpNameValueArr = [];
        var nvs = queryString ? queryString.split('&') : [];
        for (var _i = 0, nvs_1 = nvs; _i < nvs_1.length; _i++) {
            var nameValue = nvs_1[_i];
            var nvp = nameValue.split('='), encodedValue = nvp.length === 1 ? '' : nvp[1], nv = {
                name: decodeURIComponent(nvp[0]),
                value: decodeURIComponent(encodedValue),
                encodedName: nvp[0],
                encodedValue: encodedValue
            };
            if (nv.name) {
                tmpNameValueArr.push(nv);
            }
        }
        return new ParsedQueryString(tmpNameValueArr);
    }
    UrlUtils.parseQueryString = parseQueryString;
    function appendParamToUrl(url, paramName, paramValue) {
        var parsedQueryString = parseUrlForQueryString(url);
        var paramToAdd = paramName + "=" + paramValue;
        if (parsedQueryString) {
            if (parsedQueryString.hasParam(paramName)) {
                return url;
            }
            return url + "&" + paramToAdd;
        }
        return url + (url.indexOf("?") === -1 ? "?" + paramToAdd : paramToAdd);
    }
    UrlUtils.appendParamToUrl = appendParamToUrl;
})(UrlUtils || (UrlUtils = {}));
