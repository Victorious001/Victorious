var SiteDialog=function(A){EditableFieldsDialog.call(this,A,{closeButtonEnabled:!0,maximizeButtonEnabled:!0,dynamicHeight:!0,type:Account}),this.changePasswordButton=null,this.addTotpSecretButton=null,this.deleteTotpSecretButton=null};SiteDialog.prototype=Object.create(EditableFieldsDialog.prototype),SiteDialog.prototype.constructor=SiteDialog,function(){var o=function(A){var e=A.domain;return""!==A.a&&(e=A.a+" ("+A.domain+")"),e};SiteDialog.prototype.initialize=function(A){var e,s;EditableFieldsDialog.prototype.initialize.apply(this,arguments),this.changePasswordButton=$("#autoChangePassword"),this.addTotpSecretButton=$("#siteDialogAddTotpSecret"),this.deleteTotpSecretButton=$("#siteDialogDeleteTotpSecret"),this.inputFields.password.getElement().LP_addPasswordMeter(this.inputFields.unencryptedUsername.getElement()),this.inputFields.url=new BloodhoundDropdown(document.getElementById("siteDialogURL"),{identify:function(A){return A.domain},remote:{url:LPProxy.getBaseURL()+"typeahead_addsite.php?q=%QUERY",wildcard:"%QUERY"}},{optionLabel:function(A){return o(A)},elementTemplate:{template:function(A){var e=""!==A.favicon?A.favicon:"R0lGODlhEAAQAIcAAAAAAExnf1BpgWR0iHZ6hHeBkX+GkYiOmpeaopucoaSlqqWmqrm9w7q+xL+/wry/xcXGyc3Oz9HS1NPU1tnZ2d/h4+Di5OLj5uPl5+Tk5OXm6O7u7+7v8O/w8e/w8vDw8fHx8vLy8/Pz8/Pz9PT09fX19fX29vb29vf39/f3+Pj4+Pj4+fn5+vr6+/v7/Pz8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAiQAAEIHEiw4MAFCBEmQCjBIIAFMiLK8CBjA4QIBiFu2Fgh4oYJDgpq5Chxw4KCCiqSlKigIAKVGyowYNDgAYGCB2BWsHABgwYDBQvA/CCiBAoVBQoOUNlBhAkVLV4MKCigIgenK1zAiCGgYICKIEhAhRExgFcZHEKcYEG27NkOI1K0aCvDLMEAePPqteuwr8CAADs=",t=LPTools.createElement("li","siteTypeaheadOption"),a=LPTools.createElement("div","itemIcon"),i=LPTools.createElement("img",{src:"data:image/gif;base64,"+e});return t.appendChild(a),t.appendChild(LPTools.createElement("span","siteTypeaheadOptionText",o(A))),a.appendChild(i),t},value:function(A){return A.url},hint:function(A){return o(A)}}}),this.addFavButton().appendChild(this.editFormFieldsButton.get(0)),(s=this).userGroupOverride=!1,s.inputFields.url.onChange(function(A){var e=LPProxy.getDomain(A.domain),t=e.indexOf("."),a=e.charAt(0).toUpperCase()+e.substring(1,0<t?t:e.length);if(s.inputFields.name.setValue(a),!bg.get("g_nofolder_feature_enabled")){var i=bg.get("siteCats");i&&i[e]&&s.inputFields.group.setValue(i[e])}var o=bg.Policies.getSaveSiteToPersonal();if(o){var n=LPProxy.getLinkedAccount();n&&i&&i[e]&&-1===o.indexOf(e)&&s.inputFields.group.setValue(n._data.group+"\\"+i[e])}}),s.inputFields.unencryptedUsername.onChange(function(A){if(bg.Policies.getAccountSelectionBasedOnEmail()&&!s.userGroupOverride){var e=LPProxy.getLinkedAccount();if(e&&A===e._shareInfo.decsharename&&-1===s.inputFields.group.getValue().indexOf(A)){var t=s.inputFields.group.getValue(),a=t?A+"\\"+t:A;s.inputFields.group.setValue(a)}}}),s.inputFields.group.onChange(function(A){}),A.find("#siteDialogPasswordHistory").bind("click",function(){s.vaultItem.canViewPassword()?LPProxy.reprompt(function(){LPRequest.makeRequest(LPProxy.getPasswordHistory,{params:{aid:s.vaultItem.getID(),shareId:s.vaultItem.getShareID()},success:function(A){t(A,s.vaultItem,Constants.HISTORY_TYPES.PASSWORD)},requestSuccessOptions:{closeDialog:!1}}),bg.loglogin(s.vaultItem.getID())},{types:AccountBaseWithFields.prototype.REPROMPT_TYPE_VIEW_PW}):Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to view the password."))}),A.find("#siteDialogAddTotpSecret").bind("click",function(){dialogs.addTotpDialog.open()}),A.find("#siteDialogDeleteTotpSecret").bind("click",function(){dialogs.confirmation.open({title:Strings.translateString("Confirm Deletion"),text:[Strings.translateString("Are you sure?")],nextButtonText:Strings.Vault.DELETE,backButtonText:Strings.Vault.CANCEL,handler:function(){A.find("#siteDialogTotp")[0].value="",A.find("#siteDialogTotpCode")[0].value="",A.find("#siteDialogDeleteTotpSecret").hide(),A.find("#siteDialogAddTotpSecret").show()}})}),A.find("#siteDialogUsernameHistory").bind("click",function(){LPRequest.makeRequest(LPProxy.getUsernameHistory,{params:{aid:s.vaultItem.getID(),shareId:s.vaultItem.getShareID()},success:function(A){t(A,s.vaultItem,Constants.HISTORY_TYPES.USERNAME)},requestSuccessOptions:{closeDialog:!1}})}),A.find("#siteDialogNoteHistory").bind("click",function(){LPRequest.makeRequest(LPProxy.getNoteHistory,{params:{aid:s.vaultItem.getID(),shareId:s.vaultItem.getShareID()},success:function(A){t(A,s.vaultItem,Constants.HISTORY_TYPES.NOTE)},requestSuccessOptions:{closeDialog:!1}})}),s.changePasswordButton.bind("click",function(){var A=function(){LPProxy.autoChangePassword(s.vaultItem.getID()),s.close(!0)};s.vaultItem.canViewPassword()?s.isModified()?dialogs.confirmation.open({title:Strings.translateString("Auto Change Password"),text:Strings.translateString("Changes you have made have not been saved. Are you sure you want to continue?"),handler:A}):A():Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to view the password."))})};var t=function(A,e,t){dialogs.fieldHistory.open({history:A,vaultItem:e,historyType:t})};SiteDialog.prototype.preSetup=function(A){var e=null;if(this.siteTypeName=null,LPFeatures.allowOmarIA()){var t=LPProxy.getConfigTypeObject("Password");t&&(this.siteTypeName=t.name,e=A&&A.vaultItem?Strings.translateString("Edit "+t.id):Strings.translateString("Add "+t.id))}e=e||(A&&A.vaultItem?Strings.translateString("Edit Site"):Strings.translateString("Add Site")),A?A.title=e:A={title:e}},SiteDialog.prototype.open=function(t){if((t=$.extend(t,{sourceFunction:LPProxy.getSiteModel})).saveAllData){var A=t.saveAllData;delete t.saveAllData,t.defaultData={url:A.url,save_all:!0},u(A.formdata,t.defaultData)}else t.defaultData&&t.defaultData.formdata&&(u(t.defaultData.formdata,t.defaultData),delete t.defaultData.formdata);if(t.defaultData&&t.defaultData.url){var e=LPProxy.getDomain(t.defaultData.url),a=bg.get("siteCats");void 0===t.defaultData.group&&a[e]&&(bg.get("g_nofolder_feature_enabled")||(t.defaultData.group=a[e])),void 0===t.defaultData.name&&(t.defaultData.name=e)}if(bg.Policies.getSaveSiteToPersonal()){var i=LPProxy.getLinkedAccount();i&&(t.defaultData={group:i._data.group})}if(t.saveOptions&&t.saveOptions.checkForReplacement){for(var e=LPProxy.getDomain(t.defaultData.url),o=[],n=LPProxy.getSiteModels(t.defaultData.url),s=0,l=n.length;s<l;++s){var r=n[s];LPProxy.getDomain(r.getURL())===e&&t.defaultData.unencryptedUsername===r.getUsername()&&o.push(r)}if(0<o.length)return void dialogs.vaultItemSelect.open({title:this.siteTypeName?Strings.translateString("Replace %s",this.siteTypeName):Strings.translateString("Replace Site"),nextButtonText:Strings.translateString("Replace"),backButtonText:Strings.Vault.NO,text:Strings.translateString("Would you like to replace an existing entry you have for %s?",e),items:o,closeHandler:this.createHandler(EditableFieldsDialog.prototype.open,t),handler:this.createDynamicHandler(function(A){var e=t.defaultData;delete t.defaultData,EditableFieldsDialog.prototype.open.call(this,$.extend(t,{vaultItem:A[0],postSetup:function(A){A.populateFields(e)}}))}),buildOptions:{multiSelect:!1}})}if(("object"==typeof t.vaultItem||"string"==typeof t.vaultItem)&&"object"==typeof reduxApp&&reduxApp.getState().settings.features.react_save_site_dialog){if("string"==typeof t.vaultItem){var d=LPProxy.getSiteModel(t.vaultItem);t.vaultItem=d}if(!t.vaultItem._data.save_all)return $("#dialogLoadingOverlay").removeClass("overlay"),void reduxApp.openReactSaveSiteDialog(t,"Vault")}EditableFieldsDialog.prototype.open.call(this,t)},SiteDialog.prototype.setup=function(A,e){EditableFieldsDialog.prototype.setup.call(this,A,e),this.changePasswordButton.hide(),this.deleteTotpSecretButton.hide(),this.addTotpSecretButton.show(),this.vaultItem?(A.find(".history").show(),"1"===this.vaultItem._data.pwch&&this.changePasswordButton.show(),this.inputFields.url.disableDropdown()):(A.find(".history").hide(),this.inputFields.url.enableDropdown()),!e.vaultItem&&LPFeatures.allowOmarIA()?A.find(".dialogAllSitesButton").show():A.find(".dialogAllSitesButton").hide(),""==A.find("#siteDialogTotp")[0].value?(A.find("#siteDialogDeleteTotpSecret").hide(),A.find("#siteDialogAddTotpSecret").show()):(A.find("#siteDialogDeleteTotpSecret").show(),A.find("#siteDialogAddTotpSecret").hide()),LPProxy.isEnterpriseUser()&&LPFeatures.allowTwoFactorCode()||(A.find("#totpBlock").hide(),this.setDynamicHeight())},SiteDialog.prototype.validate=function(A){var e=EditableFieldsDialog.prototype.validate.apply(this,arguments);if(""===A.name&&(this.addError("name",Strings.translateString("Name is required.")),e=!1),bg.Policies.getAccountSelectionBasedOnEmail()){var t=LPProxy.getLinkedAccount();t&&A.unencryptedUsername===bg.get("g_username")&&-1!==A.group.indexOf(t._shareInfo.decsharename)&&(this.addError("group",Strings.translateString("Cannot save to folder, restricted by a policy")),e=!1)}return e},SiteDialog.prototype.handleSubmit=function(A){"object"==typeof bg&&"function"==typeof bg.disableDropDownNotification&&"function"==typeof bg.setSecurityScoreAlertBadge&&bg.setSecurityScoreAlertBadge(),VaultItemDialog.prototype.handleSubmit.call(this,A)};var u=function(A,e){e.fields=[];for(var t=A.split("\n"),a=0,i=t.length;a<i;++a){var o=t[a].split("\t"),n=decodeURIComponent(o[0]),s=decodeURIComponent(o[1]),l=decodeURIComponent(o[2]),r=decodeURIComponent(o[3]);if("action"===r)e.action=l;else if("method"===r)e.method=l;else if(s)switch(r){case"email":case"text":case"url":case"tel":case"password":case"checkbox":case"radio":case"select":case"select-one":var d={formname:n,name:s,type:r,value:l};if("checkbox"===r)d.value="-1"===l.substring(l.length-2),d.valueAttribute=l.substring(0,l.length-2);else if("radio"===r){if("-1"!==l.substring(l.length-2))continue;d.value=l.substring(0,l.length-2)}e.fields.push(d)}}}}();