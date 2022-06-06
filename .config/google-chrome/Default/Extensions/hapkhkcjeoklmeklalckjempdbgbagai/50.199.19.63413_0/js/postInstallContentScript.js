var PostInstallContentScript = (function () {
    function PostInstallContentScript() {
    }
    PostInstallContentScript.setLocalStorageSEState = function () {
        window.localStorage.setItem("SEState", "installed");
    };
    PostInstallContentScript.firePixel = function () {
        StateStorage.get("state")
            .then(function (state) {
            if (!state || !Object.keys(state).length || !state.toolbarData.pixelUrl)
                return;
            var pixelURL = state.toolbarData.pixelUrl;
            var iframe = document.createElement("iframe");
            iframe.addEventListener("load", function (e) {
                iframe.parentNode.removeChild(iframe);
                Logger.log("UnifiedLogging: pixel fired " + pixelURL);
            }, true);
            iframe.setAttribute("src", pixelURL);
            document.body.appendChild(iframe);
            state.toolbarData.pixelUrl = null;
            StateStorage.set("state", state).catch(Logger.warn);
        });
    };
    return PostInstallContentScript;
}());
PostInstallContentScript.firePixel();
PostInstallContentScript.setLocalStorageSEState();
