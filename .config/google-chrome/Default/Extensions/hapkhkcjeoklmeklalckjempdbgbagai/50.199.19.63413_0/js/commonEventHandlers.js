var CommonEventHandlers = (function () {
    function CommonEventHandlers() {
    }
    CommonEventHandlers.onAlarmHandler = function (alarm) {
        UlLivePingExecutor.alarmHandler(alarm);
        SurveyService.onSurveyAlarm(alarm);
        PTagService.alarmHandler(alarm);
    };
    return CommonEventHandlers;
}());
