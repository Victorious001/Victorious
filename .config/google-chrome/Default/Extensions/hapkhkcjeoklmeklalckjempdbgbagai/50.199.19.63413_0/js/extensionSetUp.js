var ExtensionSetUp = (function () {
    function ExtensionSetUp() {
    }
    ExtensionSetUp.setUninstallUrl = function (state) {
        var url = state.toolbarData.uninstallSurveyUrl || state.configVars.uninstallSurveyUrl;
        if (chrome.runtime.setUninstallURL && url) {
            chrome.runtime.setUninstallURL(TextTemplate.parse(url, state.replaceableParams));
        }
    };
    ExtensionSetUp.extensionStateKey = "state";
    ExtensionSetUp.initExtensionState = function (config) {
        var initialSetup = function () {
            return ExtensionSetUp.initExtensionStateForNewInstall(config)
                .then(function (state) {
                if (state.configVars.pTagServiceUrl && Util.isBing(state)) {
                    PTagService.scheduleAlarm();
                    PTagService.updateToolbarDataWithDefaultSearchParamsIfMissing(state);
                }
                return StateStorage.set(ExtensionSetUp.extensionStateKey, state).then(function () { return state; });
            })
                .then(ExtensionSetUp.doOneTimeEvents);
        };
        return StateStorage.get(ExtensionSetUp.extensionStateKey)
            .then(function (state) {
            if (state && state.toolbarData && state.toolbarData.hasOwnProperty("newTabURL")) {
                return ExtensionSetUp.convertMV2State(config, state)
                    .then(function (mv3State) {
                    return ExtensionSetUp.addStateValuesFromConfig(config, mv3State);
                })
                    .catch(function (err) {
                    Logger.warn(err);
                    return initialSetup();
                });
            }
            if (state && Object.keys(state).length) {
                return ExtensionSetUp.addStateValuesFromConfig(config, state);
            }
            return initialSetup();
        });
    };
    ExtensionSetUp.initExtensionStateForNewInstall = function (config) {
        var timeoutToGetToolbarDataFromLocalStorage = 5000;
        var state = {};
        var defaultToolbarData = {
            installDate: Util.createInstallDate(),
            partnerId: config.buildVars.defaultPartnerId,
            pixelUrl: null,
            toolbarId: Util.generateToolbarId(),
        };
        return ExtensionSetUpDLP.getToolBarData(config, defaultToolbarData, timeoutToGetToolbarDataFromLocalStorage)
            .catch(function (err) {
            Logger.warn("ExtensionSetUp: Could't get DLP data. Fallback to default build values", err);
            defaultToolbarData.dataSource = ExtensionSetUpDLP.dataSourceExtension;
            return defaultToolbarData;
        })
            .then(function (toolbarData) {
            state.toolbarData = toolbarData;
            state.showSurveyNotification = true;
            return ExtensionSetUp.addStateValuesFromConfig(config, state);
        });
    };
    ExtensionSetUp.getReplaceableParams = function (config, state) {
        var partnerId = GlobalPartnerIdFactory.parse(state.toolbarData.partnerId, state.toolbarData.partnerSubId);
        return {
            affiliateID: partnerId.getCampaign() || state.toolbarData.campaign,
            cobrandID: partnerId.getCobrand() || state.toolbarData.cobrand,
            countryCode: partnerId.getCountry() || state.toolbarData.countryCode,
            coID: state.toolbarData.coId,
            definitionID: config.buildVars.configDefId,
            installDate: state.toolbarData.installDate,
            installDateHex: new Number(state.toolbarData.installDate).toString(16),
            languageISO: self.navigator.language,
            partnerID: partnerId.toString() || state.toolbarData.partnerId,
            partnerParams: partnerId.appendQueryParameters("ptnrS"),
            partnerParamsConfig: partnerId.appendQueryParameters("p"),
            partnerParamsSearch: partnerId.appendQueryParameters("id", "ptnrS"),
            partnerSubID: state.toolbarData.partnerSubId,
            productName: config.buildVars.toolbarDisplayName,
            si: state.toolbarData.partnerSubId,
            toolbarID: state.toolbarData.toolbarId,
            toolbarVersion: config.buildVars.version,
            toolbarVersionNew: config.buildVars.version,
            trackID: partnerId.getTrack() || config.buildVars.track,
            cwsid: chrome.runtime.id,
            buildDate: config.buildVars.buildDate,
            searchParams: state.toolbarData.searchParams
        };
    };
    ExtensionSetUp.getConfigVars = function (config) {
        return {
            uninstallSurveyUrl: config.buildVars.uninstallSurveyUrl,
            homepageURLForBabClick: config.buildVars.homepageURLForBabClick,
            unifiedLoggingUrl: config.buildVars.unifiedLoggingUrl,
            downloadDomain: config.buildVars.downloadDomain,
            livePing: {
                url: config.buildVars.livePing.url,
                interval: config.buildVars.livePing.interval
            },
            pTagServiceUrl: config.buildVars.pTagServiceUrl,
            surveyURL: config.buildVars.surveyURL,
            searchDomain: config.buildVars.searchDomain,
            settingsOverrides: {
                searchUrl: config.buildVars.settingsOverrides.searchUrl,
                searchUrlWithParamsToReplace: config.buildVars.settingsOverrides.searchUrlWithParamsToReplace,
                faviconUrl: config.buildVars.settingsOverrides.faviconUrl,
                searchSuggestUrl: config.buildVars.settingsOverrides.searchSuggestUrl,
            },
            internationalSearchDefaultDomain: config.buildVars.internationalSearchDefaultDomain,
            internationalSearchSpecifiedDomain: config.buildVars.internationalSearchSpecifiedDomain,
            internationalSearchCountryCodes: config.buildVars.internationalSearchCountryCodes
        };
    };
    ExtensionSetUp.doOneTimeEvents = function (state) {
        Util.getCwsWindow().then(function (popUpWindowToClose) {
            if (!popUpWindowToClose || !popUpWindowToClose.tabs.length) {
                return;
            }
            chrome.tabs.remove(popUpWindowToClose.tabs[0].id);
        });
        ExtensionSetUpDLP.loadPostInstallContentScript(state);
        return Promise.resolve(state);
    };
    ExtensionSetUp.run = function (state) {
        ExtensionSetUp.setUninstallUrl(state);
        UlLivePingExecutor.startULPing(state);
        SurveyService.checkServicePrerequisites(state)
            .then(function (shouldShowNotification) {
            if (shouldShowNotification) {
                SurveyService.scheduleAlarm();
            }
        });
        return Promise.resolve(state);
    };
    ExtensionSetUp.convertMV2State = function (config, mv2State) {
        var convertToolbarData = function (mv2ToolbarData) {
            return {
                campaign: mv2ToolbarData.campaign,
                cobrand: mv2ToolbarData.cobrand,
                coId: mv2ToolbarData.coId,
                countryCode: mv2ToolbarData.countryCode,
                dataSource: ExtensionSetUpDLP.dataSourceManifestUpgrade,
                dlput: mv2ToolbarData.dlput,
                installDate: mv2ToolbarData.installDate,
                language: mv2ToolbarData.language,
                partnerId: mv2ToolbarData.partnerId,
                pixelUrl: null,
                partnerSubId: mv2ToolbarData.partnerSubId,
                toolbarId: mv2ToolbarData.toolbarId,
                uninstallSurveyUrl: mv2ToolbarData.uninstallSurveyUrl,
                userSegment: mv2ToolbarData.userSegment,
                searchParams: mv2ToolbarData.searchParams,
                vendorId: mv2ToolbarData.vendorId
            };
        };
        Logger.log("ExtensionSetUp. Called convertMV2State. MV2 state: ", mv2State);
        var mv3State = {
            toolbarData: convertToolbarData(mv2State.toolbarData),
            lastLivePing: mv2State.lastLivePing,
            showSurveyNotification: mv2State.showSurveyNotification,
            serpAssistWasShown: !!mv2State.dSKeepChangeAssistBrowserVersion
        };
        return Promise.resolve(mv3State);
    };
    ExtensionSetUp.addStateValuesFromConfig = function (config, state) {
        state.configVars = ExtensionSetUp.getConfigVars(config);
        state.replaceableParams = ExtensionSetUp.getReplaceableParams(config, state);
        return state;
    };
    return ExtensionSetUp;
}());
