var DEBUG = false;
var WARN = true;
var Logger;
(function (Logger) {
    var globalScope = (function () {
        if (typeof window !== 'undefined') {
            return window;
        }
        if (typeof self !== 'undefined') {
            return self;
        }
    })();
    var blankFunc = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    Logger.error = WARN
        ? console.error.bind(globalScope.console)
        : blankFunc;
    Logger.log = DEBUG
        ? console.log.bind(globalScope.console)
        : blankFunc;
    Logger.warn = WARN
        ? console.warn.bind(globalScope.console)
        : blankFunc;
})(Logger || (Logger = {}));
