chrome.runtime.onInstalled.addListener((reason) => {
    if (reason.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
            url: 'https://vodextended.com/hbo?utm_source=chrome_extension&utm_medium=netflix_extended&utm_campaign=install'
        });
    }
});
