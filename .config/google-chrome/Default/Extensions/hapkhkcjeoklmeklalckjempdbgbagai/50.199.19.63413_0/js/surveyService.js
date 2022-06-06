"use strict";
var SurveyService = (function () {
    function SurveyService() {
    }
    SurveyService.alarmName = "surveyAlarm";
    SurveyService.oneDayInMs = 1000 * 60 * 60 * 24;
    SurveyService.timeToShowNotificationInMs = 7 * SurveyService.oneDayInMs;
    SurveyService.checkServicePrerequisites = function (state) {
        if (!chrome.notifications) {
            Logger.log("SurveyService: missing notifications permission");
            return Promise.resolve(false);
        }
        if (!state.configVars.surveyURL) {
            Logger.log("SurveyService: survey URL is not set");
            return Promise.resolve(false);
        }
        if (!state.showSurveyNotification) {
            Logger.log("SurveyService: survey notification has been already shown or this is not a new install");
            return Promise.resolve(false);
        }
        return new Promise(function (resolve) {
            chrome.permissions.contains({ permissions: ["notifications"] }, resolve);
        });
    };
    SurveyService.scheduleAlarm = function () {
        var getHumanReadableDateFromMs = function (milliseconds) {
            var date = new Date(milliseconds);
            return date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        };
        chrome.alarms.get(SurveyService.alarmName, function (alarm) {
            if (alarm) {
                Logger.log("SurveyService: " + SurveyService.alarmName + " was already created and it'll fire " + getHumanReadableDateFromMs(alarm.scheduledTime));
                return;
            }
            var when = Date.now() + SurveyService.timeToShowNotificationInMs;
            Logger.log("SurveyService: alarm is created and it'll fire " + getHumanReadableDateFromMs(when));
            chrome.alarms.create(SurveyService.alarmName, { when: when });
        });
    };
    SurveyService.onSurveyAlarm = function (alarm) {
        if (alarm.name !== SurveyService.alarmName)
            return;
        StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) {
            if (!state.showSurveyNotification)
                return;
            var notification = SurveyService.getSurveyNotification(state);
            SurveyService.showNotification(notification).then(function () {
                state.showSurveyNotification = false;
                StateStorage.set(ExtensionSetUp.extensionStateKey, state).catch(Logger.warn);
            });
        });
    };
    SurveyService.notificationOnClick = function (notificationId) {
        StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) {
            var notification = SurveyService.getSurveyNotification(state);
            if (notificationId.startsWith(notification.id)) {
                chrome.tabs.create({ url: notification.linkUrl }, function () {
                    UnifiedLogging.fireInfoEvent({
                        message: "on-click",
                        topic: "survey-notification-show",
                        data1: notificationId,
                        data2: notification.linkUrl
                    }).catch(Logger.warn);
                });
            }
        });
    };
    SurveyService.showNotification = function (notification) {
        return new Promise(function (resolve) {
            chrome.notifications.create(notification.id + Date.now(), notification.notificationOptions, function (notificationId) {
                UnifiedLogging.fireInfoEvent({
                    message: "on-after",
                    topic: "survey-notification-show",
                    data1: notification.linkUrl,
                    data2: notificationId
                }).catch(Logger.warn);
                resolve(notificationId);
            });
        });
    };
    SurveyService.getSurveyNotification = function (state) {
        return {
            id: "survey-notification-",
            linkUrl: TextTemplate.parse(state.configVars.surveyURL, state.replaceableParams),
            notificationOptions: {
                type: "basic",
                iconUrl: chrome.runtime.getURL("/icons/icon48.png"),
                title: "Thank you for using our extension!",
                message: state.replaceableParams.productName + " survey.",
                contextMessage: "Click here to tell us how we're doing."
            }
        };
    };
    return SurveyService;
}());
