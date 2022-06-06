var BabClick = (function () {
    function BabClick() {
    }
    BabClick.babClickHandler = function (tab) {
        StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) {
            if (state.configVars.homepageURLForBabClick) {
                chrome.tabs.create({
                    url: TextTemplate.parse(state.configVars.homepageURLForBabClick, state.replaceableParams),
                    active: true
                });
            }
        });
    };
    return BabClick;
}());
