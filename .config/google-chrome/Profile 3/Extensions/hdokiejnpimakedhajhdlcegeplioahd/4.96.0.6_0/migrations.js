var __extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),Migration=function(){function e(){}return e}(),Migrator=function(){function u(e){this.migrations=[],this.progress=0,this.hasLinkedAccount=!!u.migrationBackground.getLinkedUsername(),this.migrations=e.sort(function(e,t){if(e.version<t.version)return-1;if(e.version>t.version)return 1;throw new Error("Duplicate migrations!")})}return u.executeMigrations=function(r,i){var n=this;void 0===i&&(i=!1);var e=[];if(!u.migrationsRunning)if("loading"!=document.readyState){(i||u.formfillMigrationBackground.isEnabled())&&e.push(new FormfillAndNotesMigration);var o=new u(e);this.migrationBackground.getLinkedBlobVersion(function(e){var t=i?0:n.migrationBackground.getBlobVersion();(i||null!==t&&(o.hasPendingMigrations(t)||null!==e&&o.hasPendingMigrations(e)))&&(u.setMigrationInProgress(),r&&o.setProgressCallback(r),!i&&null!==e&&o.hasPendingMigrations(e)?o.migrateLinked(e,function(){o.hasPendingMigrations(t)?o.migrate(t,function(){u.setMigrationFinished()}):u.setMigrationFinished()}):o.migrate(t,function(){u.setMigrationFinished()}))})}else document.addEventListener("DOMContentLoaded",function(){u.executeMigrations()})},Object.defineProperty(u,"migrationBackground",{get:function(){return u.getBg().MigrationBackground},enumerable:!0,configurable:!0}),u.getBg=function(){return"undefined"!=typeof bg?bg:getBG()},u.setMigrationInProgress=function(){u.migrationsRunning=!0,this.migrationBackground.publishState(!0)},u.setMigrationFinished=function(){u.migrationsRunning=!1,this.migrationBackground.publishState(!1),location.reload()},Object.defineProperty(u,"formfillMigrationBackground",{get:function(){return u.getBg().FormfillMigrationBackground},enumerable:!0,configurable:!0}),u.prototype.setProgressCallback=function(e){this.progressCallback=e},u.prototype.hasPendingMigrations=function(e){for(var t=0,r=this.migrations;t<r.length;t++){var i;if(e<r[t].version)return!0}return!1},u.prototype.migrateLinked=function(t,r){var i=this;if(this.hasLinkedAccount){this.updateProgress();for(var e=function(e){if(t<e.version)return e.migrateLinked(function(){i.progress+=100,i.migrateLinked(e.version,r)},function(e,t){i.updateProgress(Math.floor(e/Math.max(t,1)*100))}),{value:void 0}},n=0,o=this.migrations;n<o.length;n++){var a,s=e(o[n]);if("object"==typeof s)return s.value}u.migrationBackground.saveLinkedBlobVersion(t,function(){r&&r(t)})}else r(t)},u.prototype.migrate=function(t,r){var i=this;this.updateProgress();for(var e=function(e){if(t<e.version)return e.migrate(function(){i.progress+=100,i.migrate(e.version,r)},function(e,t){i.updateProgress(Math.floor(e/Math.max(t,1)*100))}),{value:void 0}},n=0,o=this.migrations;n<o.length;n++){var a,s=e(o[n]);if("object"==typeof s)return s.value}u.migrationBackground.saveBlobVersion(t,function(){r&&r(t)})},u.prototype.updateProgress=function(e){void 0===e&&(e=0),this.progressCallback&&this.progressCallback(this.progress+Math.min(e,100),100*this.migrations.length*(this.hasLinkedAccount?2:1))},u.migrationsRunning=!1,u}(),ObservableState=function(){function e(){this.stateSubscribers=[],this.temporarySubscribers=[],this.isRunning=!1,this._wasMigration=!1}return e.prototype.subscribeToState=function(e){e&&-1===this.stateSubscribers.indexOf(e)&&(this.stateSubscribers.push(e),this.isRunning&&e(this.isRunning))},e.prototype.subscribeToStateOnce=function(e){e&&-1===this.stateSubscribers.indexOf(e)&&this.temporarySubscribers.push(e)},e.prototype.wasMigration=function(e){e(this._wasMigration)},e.prototype.publishState=function(e){this.isRunning&&!e&&(this._wasMigration=!0),this.isRunning=e;for(var t=0,r=this.stateSubscribers;t<r.length;t++){var i;(0,r[t])(e)}var n=this.temporarySubscribers;this.temporarySubscribers=[];for(var o=0,a=n;o<a.length;o++){var s;(0,a[o])(e)}},e.prototype.setStateWasMigration=function(e){this._wasMigration=e},e}(),MigrationBackgroundBase=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.targetBlobVersion=20170404140712,e._shouldStartMigration=!1,e._reduxApp="undefined"!=typeof reduxApp?reduxApp:top.reduxApp,e}return __extends(e,t),Object.defineProperty(e.prototype,"apiUrl",{get:function(){var e="/lmiapi";return"string"==typeof base_url&&(e=base_url.replace(/\/$/,"")+e),e},enumerable:!0,configurable:!0}),e.prototype.setOmarFlagsTrue=function(){this._reduxApp&&(this._reduxApp.setFeatures({omar_ia:!0,ziggy:!0,omar_password_generator:!0}),this._reduxApp.setBlobVersion(!0))},e.prototype.getShouldStartMigration=function(e){e&&e(this._shouldStartMigration)},e.prototype.setShouldStartMigration=function(e){this._shouldStartMigration=e},e.prototype.getBlobVersion=function(){return void 0!==this._reduxApp&&this._reduxApp.getState().user.blobVesionSet?this.targetBlobVersion:0},e.prototype.hasFormFills=function(){return"undefined"!=typeof g_formfills&&0<g_formfills.length},e.prototype.hasBeenMigrated=function(){return this.getBlobVersion()>=this.targetBlobVersion},e.prototype.getLinkedUsername=function(){for(var e=0,t=g_shares;e<t.length;e++){var r=t[e];if(void 0!==r.associative&&1==r.associative)return r.decsharename}return null},e.prototype.saveBlobVersion=function(e,t){this.setOmarFlagsTrue(),this.saveVersionRequest(this.apiUrl+"/users/me/blobversion",e,t)},e.prototype.saveLinkedBlobVersion=function(e,t){this.setOmarFlagsTrue(),this.saveVersionRequest(this.apiUrl+"/users/me/blobversion/linked",e,t)},e.prototype.saveProperBlobVersion=function(e,t){this.getLinkedUsername()&&this.saveLinkedBlobVersion(e,t),this.saveBlobVersion(e,t)},e.prototype.shouldShowMigrationNotification=function(){return this.hasFormFills()&&!this.hasBeenMigrated()&&void 0!==this._reduxApp&&this._reduxApp.getState().settings.features.omar_migration_opt_in},e.prototype.alertForMigration=function(){this.hasBeenMigrated()||void 0!==this._reduxApp&&!this._reduxApp.getState().settings.features.omar_migration_opt_in||(this.hasFormFills()?this.showMigrationAlert():(this.setMigrationState(!0),this.saveProperBlobVersion(this.targetBlobVersion,function(){openvault(!0,!1,!1,function(){})})))},e.prototype.postponeMigration=function(e){var t=this;setTimeout(function(){t.alertForMigration()},e)},e.prototype.sendSegmentEvent=function(e,t){sendLpImprove(e,t)},e.prototype.setMigrationState=function(e){this.setStateWasMigration(e)},e}(ObservableState),MigrationBackgroundWeb=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){var e=this;"undefined"!=typeof Topics&&Topics.get(Topics.BLOB_UPDATED).subscribeFirst(function(){e._reduxApp.getState().user.blobVesionSet||e.alertForMigration()})},e.prototype.getLinkedBlobVersion=function(t){this.getLinkedUsername()?$.get(this.apiUrl+"/users/me/blobversion/linked").done(function(e){t(e.version)}).fail(function(){t(null)}):t(null)},e.prototype.saveVersionRequest=function(t,r,i){this.getToken(function(e){$.ajax({url:t,method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({version:r}),headers:{"x-csrf-token":e},success:function(){i&&i()}})})},e.prototype.getToken=function(t){$.post(this.apiUrl+"/csrf",function(e){t(e)})},e.prototype.showMigrationAlert=function(){},e}(MigrationBackgroundBase),MigrationBackgroundExtension=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){var e=this;"undefined"!=typeof Topics&&Topics.get(Topics.LOGIN_FINISHED).subscribeFirst(function(){e._reduxApp.getState().user.blobVesionSet||e.alertForMigration()})},e.prototype.getLinkedBlobVersion=function(r){this.getLinkedUsername()?LP.lpMakeRequestReallyReal(this.apiUrl+"/users/me/blobversion/linked","",function(e){if(4===e.readyState&&200===e.status){var t=JSON.parse(e.responseText);r(t.version)}else 4===e.readyState&&lpmakerequesterror("invalidresponse",{url:e.responseURL},!1)},void 0,{method:"GET"}):r(null)},e.prototype.getServerBlobVersion=function(r){var i=this;this._serverReqCallback=r,LP.lpMakeRequestReallyReal(this.apiUrl+"/users/me/blobversion","",function(e){if(4===e.readyState&&200===e.status){var t=JSON.parse(e.responseText);r(t.version)}else 4===e.readyState&&setTimeout(i._serverReqCallback,1e3)},void 0,{method:"GET"})},e.prototype.saveVersionRequest=function(t,r,i){this.getToken(function(e){LP.lpMakeRequestReallyReal(t,JSON.stringify({version:r}),function(e){4===e.readyState&&200===e.status?i&&i():4===e.readyState&&lpmakerequesterror("invalidresponse",{url:e.responseURL},!1)},void 0,{"x-csrf-token":e,"Content-Type":"application/json"})})},e.prototype.getToken=function(t){LP.lpMakeRequestReallyReal(this.apiUrl+"/csrf","",function(e){4===e.readyState&&200===e.status?t(JSON.parse(e.responseText)):4===e.readyState&&lpmakerequesterror("invalidresponse",{url:e.responseURL},!1)})},e.prototype.showMigrationAlert=function(){g_badgedata={cmd:"migration"},"undefined"!=typeof drawIconAtRotation&&drawIconAtRotation()},e}(MigrationBackgroundBase),FormfillStore=function(){function e(){}return e.prototype.getLinkedFormfills=function(){return this.useShareKey=!0,this.decrypt(this.linkedEncryptedFormfills)},e.prototype.getFormfills=function(){return this.useShareKey=!1,this.decrypt(this.encryptedFormfills)},e.prototype.decrypt=function(e){for(var t=[],r=0,i=e;r<i.length;r++){var n=i[r],o=new FormFillType;for(var a in n)if(n.hasOwnProperty(a)){var s=void 0;if(o[a]=n[a],"custom_fields"===a)for(var u in o[a]=[],n[a]){o[a][u]=this.objectAssign({},n[a][u]);var p=o[a][u];for(var c in p)p[c]&&(s=this.decryptString(p[c],!0))&&(p[c]=s)}else o[a]&&(s=this.decryptString(o[a],!0))&&(o[a]=s)}o.decprofilename||(o.decprofilename=o.profilename),t.push(o)}return t},e.prototype.objectAssign=function(e,t){for(var r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},e}(),FormFillType=function(){function e(){this.monthNames=["","January","February","March","April","May","June","July","August","September","October","November","December"]}return e.prototype.hasSocialSecurityNumber=function(){return!!this.ssn},e.prototype.hasAddressData=function(){return!!(this.title||this.firstname||this.middlename||this.lastname||this.username||this.gender||this.birthday||this.company||this.address1||this.address2||this.address3||this.city||this.county||this.timezone||this.email||this.phone||this.mobilephone||this.evephone||this.fax||this.faxphone||this.eve3lcc||this.mobile3lcc||!this.hasSocialSecurityNumber()&&!this.hasPaymentCardData()&&!this.hasBankNoteData()&&this.notes)},e.prototype.hasPaymentCardData=function(){return!!(this.ccname||this.ccnum||this.ccstart||this.ccexp||this.cccsc||this.ccissuenum)},e.prototype.hasBankNoteData=function(){return!!(this.bankname||this.bankroutingnum||this.bankacctnum)},e.prototype.hasCustomFields=function(){return!!this.custom_fields.length},e.prototype.getSerializedPhone=function(){return this.phone?JSON.stringify({num:this.phone,ext:this.phoneext,cc3l:this.phone3lcc}):""},e.prototype.getSerializedEveningPhone=function(){return this.evephone?JSON.stringify({num:this.evephone,ext:this.eveext,cc3l:this.evephone3lcc||this.eve3lcc}):""},e.prototype.getSerializedMobilePhone=function(){return this.mobilephone?JSON.stringify({num:this.mobilephone,ext:this.mobileext,cc3l:this.mobilephone3lcc||this.mobile3lcc}):""},e.prototype.getSerializedFax=function(){return this.fax||this.faxphone?JSON.stringify({num:this.fax||this.faxphone,ext:this.faxext,cc3l:this.fax3lcc}):""},e.prototype.getBirthdayLastpassFormat=function(){var e=/([^-]*)-([^-]*)-([^-]*)/g.exec(this.birthday);return e&&3<=e.length?this.monthNames[Number(e[2])]+","+e[3]+","+e[1]:",,"},e.prototype.getCreditCardStartLastpassFormat=function(){var e=/([^-]*)-([^-]*)/g.exec(this.ccstart);return e&&2<=e.length?this.monthNames[Number(e[2])]+","+e[1]:","},e.prototype.getCreditCardExpireLastpassFormat=function(){var e=/([^-]*)-([^-]*)/g.exec(this.ccexp);return e&&2<=e.length?this.monthNames[Number(e[2])]+","+e[1]:","},e}(),NoteType=function(){function e(){}return e}(),FormfillAndNotesMigration=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fieldMaxLength=50,e.migrationQueue=[],e.successCallback=function(){},e.progress=-1,e.startSegmentEventSent=!1,e.noteAdditionHandler=function(){e.executeNextMigration()},e}return __extends(e,t),Object.defineProperty(e.prototype,"version",{get:function(){return 20170404140712},enumerable:!0,configurable:!0}),e.prototype.migrateLinked=function(e,t){this.successCallback=e,this.progressCallback=t,this.sendStartSegmentEventOnce();var r=this.formfillMigrationBackground.getLinkedFormfills();this.migrateFormfills(r),this.attachMigrationQueueExecutor()},e.prototype.migrate=function(e,t){this.successCallback=e,this.progressCallback=t,this.sendStartSegmentEventOnce();var r=this.formfillMigrationBackground.getFormfills();this.migrateFormfills(r),this.attachMigrationQueueExecutor()},e.prototype.sendStartSegmentEventOnce=function(){this.startSegmentEventSent||(this.migrationBackground.sendSegmentEvent("migration::formfill::started"),this.startSegmentEventSent=!0)},e.prototype.migrateFormfills=function(e){for(var t=this,r=function(e){e.hasSocialSecurityNumber()&&i.migrationQueue.push(function(){t.saveSocialSecurityNumberNote(e)}),e.hasAddressData()&&i.migrationQueue.push(function(){t.saveAddressNote(e)}),e.hasPaymentCardData()&&i.migrationQueue.push(function(){t.savePaymentCardNote(e)}),e.hasBankNoteData()&&i.migrationQueue.push(function(){t.saveBankAccountNote(e)}),e.hasCustomFields()&&i.migrationQueue.push(function(){t.saveCustomFields(e)})},i=this,n=0,o=e;n<o.length;n++){var a;r(o[n])}},e.prototype.saveSocialSecurityNumberNote=function(e){var t={group:e.group,name:e.decprofilename,notetype:this.getNoteTypes().SSN,pwprotect:e.pwprotect,fav:"0",language:e.profilelanguage,extra:{Name:e.firstname+" "+e.middlename+" "+e.lastname,Number:e.ssn,Notes:e.notes?""+e.notes:""}};this.saveNote(t,e.ffid)},e.prototype.saveAddressNote=function(e){var t={group:e.group,name:e.decprofilename,notetype:this.getNoteTypes().ADDRESS,pwprotect:e.pwprotect,fav:"0",language:e.profilelanguage,extra:{Title:e.title,"First Name":e.firstname,"Middle Name":e.middlename,"Last Name":e.lastname,Username:e.username,Gender:e.gender,Birthday:e.getBirthdayLastpassFormat(),Company:e.company,"Address 1":e.address1,"Address 2":e.address2,"Address 3":e.address3,"City / Town":e.city,County:e.county,State:e.state,"Zip / Postal Code":e.zip,Country:e.country,Timezone:e.timezone,"Email Address":e.email,Phone:e.getSerializedPhone(),"Evening Phone":e.getSerializedEveningPhone(),"Mobile Phone":e.getSerializedMobilePhone(),Fax:e.getSerializedFax(),Notes:e.notes?e.notes:""}};this.saveNote(t,e.ffid)},e.prototype.savePaymentCardNote=function(e){var t={group:e.group,name:e.decprofilename,notetype:this.getNoteTypes().CREDIT,pwprotect:e.pwprotect,fav:"0",language:e.profilelanguage,extra:{"Name on Card":e.ccname,Type:"",Number:e.ccnum,"Security Code":e.cccsc,"Start Date":e.getCreditCardStartLastpassFormat(),"Expiration Date":e.getCreditCardExpireLastpassFormat(),Notes:(e.notes?e.notes+"\n":"")+(e.ccissuenum?"Issue number: "+e.ccissuenum:"")}};this.saveNote(t,e.ffid)},e.prototype.saveBankAccountNote=function(e){var t={group:e.group,name:e.decprofilename,notetype:this.getNoteTypes().BANK,pwprotect:e.pwprotect,fav:"0",language:e.profilelanguage,extra:{"Bank Name":e.bankname,"Account Type":"","Routing Number":e.bankroutingnum,"Account Number":e.bankacctnum,"SWIFT Code":"","IBAN Number":"",Pin:"","Branch Address":"","Branch Phone":"",Notes:e.notes}};this.saveNote(t,e.ffid)},e.prototype.saveCustomFields=function(r){for(var i=this,n=this.escape("Formfill "+r.decprofilename),o=[],e=[],t="",a={},s=0,u=r.custom_fields;s<u.length;s++){var p=u[s],c=this.escape(p.text);c.length>this.fieldMaxLength&&(c=c.substring(0,this.fieldMaxLength)),c=c||"empty",-1!==p.text.indexOf("\n")||-1!==p.value.indexOf("\n")?t+=p.text+":"+p.value+"\n":-1===e.indexOf(c)&&(o.push({text:c,type:"text",options:null}),a[c]=p.value,e.push(c))}""!==t&&(o.push({text:"Notes",type:"textarea",options:null}),a.Notes=t),this.formfillMigrationBackground.createCustomNoteType(n,o,function(e){var t={group:r.group,name:r.decprofilename,notetype:"Custom_"+e,pwprotect:r.pwprotect,fav:"0",language:r.profilelanguage,extra:a,template:JSON.stringify({id:e,title:n,fields:o})};i.saveNote(t,r.ffid)})},e.prototype.escape=function(e){return e.replace(/&/g,"").replace(/</g,"").replace(/>/g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/;/g,"").replace(/:/g,"").replace(/~/g,"").replace(/`/g,"").replace(/"/g,"").replace(/'/g,"")},e.prototype.saveNote=function(e,t){"undefined"!=typeof Note?this.saveInForeground(e,t):this.saveInBackground(e,t)},e.prototype.saveInForeground=function(e,t){var r=e.group;r=r||Strings.Consts.NONE_GROUP;var i=LPProxy.getGroupByName(r);if(!i&&r){var n=LPProxy.getExistingGroupParent(r);i=new DummyGroup(r,n?n.getSharedGroup():null)}var o=new Note;o.add=this.getNotePatchedAddFunction(t),o.addFromDialog(e,i,{source:"vault"})},e.prototype.saveInBackground=function(e,t){var r=this;void 0===t&&(t="0"),this.formfillMigrationBackground.saveNote(e,function(e){e&&"0"!==t&&r.saveIdentityInfo(e.aid,t),r.noteAdditionHandler()},t)},e.prototype.saveIdentityInfo=function(e,t){for(var r,i=0,n=LPProxy.getIdentities();i<n.length;i++){var o=n[i],a;if(o&&o.ffids)o.ffids.split(",").includes(t)&&(o.aids=o.aids?o.aids+","+e:e,LPRequest.makeUpdateRequest(LPProxy.saveIdentity,{params:{identity:o},success:function(){}}))}},e.prototype.getNotePatchedAddFunction=function(p){return function(a,e){var s,u;u=(s=this)._data.attacharraychanges,LPRequest.makeUpdateRequest(LPProxy.addNote,{parameters:[s,a,e],success:function(e){s.update(e,a,u),LPProxy.addItem(s),Topics.get(Topics.NOTE_ADDED).publish(s,a);var t=bg.get("g_identities");if(t)for(var r=0,i=t;r<i.length;r++){var n=i[r],o;n&&n.ffids&&n.ffids.split(",").includes(p)&&(n.aids=n.aids?n.aids+","+e.aid:e.aid,LPRequest.makeUpdateRequest(LPProxy.saveIdentity,{params:{identity:n},success:function(){}}))}}})}},e.prototype.getNoteTypes=function(){return{ADDRESS:"Address",BANK:"Bank Account",CREDIT:"Credit Card",GENERIC:"Generic",SSN:"Social Security"}},e.prototype.attachMigrationQueueExecutor=function(){Topics.get(Topics.NOTE_ADDED).subscribe(this.noteAdditionHandler),this.progressMax=this.migrationQueue.length,this.executeNextMigration()},e.prototype.executeNextMigration=function(){var e;(this.progress+=1,this.progressCallback&&this.progressCallback(this.progress,this.progressMax),this.migrationQueue.length)?this.migrationQueue.pop()():(Topics.get(Topics.NOTE_ADDED).unsubscribe(this.noteAdditionHandler),this.migrationBackground.sendSegmentEvent("migration::formfill::completed"),this.successCallback())},e.prototype.getBg=function(){return"undefined"!=typeof bg?bg:getBG()},Object.defineProperty(e.prototype,"formfillMigrationBackground",{get:function(){return this.getBg().FormfillMigrationBackground},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"migrationBackground",{get:function(){return this.getBg().MigrationBackground},enumerable:!0,configurable:!0}),e}(Migration),FormfillMigrationBackgroundWeb=function(t){function e(){var e=t.call(this)||this;return e.apiUrl="/lmiapi","string"==typeof base_url&&(e.apiUrl=base_url.replace(/\/$/,"")+e.apiUrl),e}return __extends(e,t),e.prototype.isEnabled=function(){return reduxApp.getState().settings.features.migration_opt_in||reduxApp.getState().settings.features.omar_migration_opt_in},e.prototype.createCustomNoteType=function(t,r,i){var n=this;this.getToken(function(e){$.ajax({url:n.apiUrl+"/note-templates",type:"POST",dataType:"json",contentType:"application/json",headers:{"X-CSRF-TOKEN":e},data:JSON.stringify({title:t,method:"web",fields:r}),success:function(e){i(e.id)}})})},e.prototype.saveNote=function(e,t,r){throw new Error("Migrate in the foreground!")},Object.defineProperty(e.prototype,"linkedEncryptedFormfills",{get:function(){return g_formfills.filter(function(e){return!!e.sharefolderid})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"encryptedFormfills",{get:function(){return g_formfills.filter(function(e){return!e.sharefolderid})},enumerable:!0,configurable:!0}),e.prototype.decryptString=function(e,t){var r=void 0;return this.useShareKey&&(r=this.getShareKey()),lpmdec(e,t,r)},e.prototype.getToken=function(t){$.post(this.apiUrl+"/csrf",function(e){t(e)})},e.prototype.getShareKey=function(){for(var e=0,t=g_shares;e<t.length;e++){var r=t[e];if(void 0!==r.associative&&1==r.associative)return r.key}},e}(FormfillStore),FormfillMigrationBackgroundExtension=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"apiUrl",{get:function(){var e="/lmiapi";return"string"==typeof base_url&&(e=base_url.replace(/\/$/,"")+e),e},enumerable:!0,configurable:!0}),t.prototype.isEnabled=function(){return reduxApp.getState().settings.features.migration_opt_in||reduxApp.getState().settings.features.omar_migration_opt_in},t.prototype.createCustomNoteType=function(r,i,n){var o=this;this.getToken(function(e){var t={title:r,method:"web",fields:i};LP.lpMakeRequestReallyReal(o.apiUrl+"/note-templates",JSON.stringify(t),function(e){4===e.readyState&&200===e.status?n(JSON.parse(e.responseText).id):4===e.readyState&&lpmakerequesterror("invalidresponse",{url:e.responseURL},!1)},void 0,{"x-csrf-token":e,"Content-Type":"application/json"})})},t.prototype.saveNote=function(e,t,r){var i={action:"",aid:"0",basic_auth:"0",captcha_id:"",custom_js:"",extra:"",fields:[],group:"",fiid:"",getpw:!1,individualshare:!1,last_touch:"0",method:"",newvalues:[],realm_data:"",sharedfromuid:"",submit_id:"",urid:"0",fav:"0",username:"",password:"",sn:1,url:"http://sn"},n=this.localKey;e.encname=lpmenc(e.name,!0,n);var o="NoteType:"+e.notetype+"\nLanguage:"+(e.language?e.language:"en-US");for(var a in e.extra)o+="\n"+a+":"+e.extra[a];for(var s in e.extra=lpmenc(o,!0,n),i)void 0===e[s]&&(e[s]=i[s]);e.group&&(e.sharedfolderid=this.getShareId()),this.saveSite(e,t)},Object.defineProperty(t.prototype,"linkedEncryptedFormfills",{get:function(){return g_formfills.filter(function(e){return!!e.sharefolderid})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"encryptedFormfills",{get:function(){return g_formfills.filter(function(e){return!e.sharefolderid})},enumerable:!0,configurable:!0}),t.prototype.decryptString=function(e,t){var r=void 0;return this.useShareKey&&(r=this.getShareKey()),lpmdec(e,t,r)},t.prototype.saveSite=function(e,t){var r=this,i=this.createPostData(e);saveSite(this.serializePostData(i),e,t,function(){setTimeout(function(){r.saveSite(e,t)},3e4)})},t.prototype.createPostData=function(e){var t={extjs:1,localupdate:1,ajax:1,source:"vault"};return t.aid=e.aid,t.name=lpenc(e.name,this.localKey),t.extra=crypto_btoa(e.extra),e.pwprotect&&(t.pwprotect="on"),"1"===e.fav&&(t.fav="on"),e.sharedfolderid&&(t.sharedfolderid=e.sharedfolderid,t.grouping=""),t.url=AES.url2hex(e.url),t.username="",t.password="",e.template&&(t.template=e.template),t.hexName=AES.url2hex(e.name),t.notetype=e.notetype,t},t.prototype.serializePostData=function(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&").replace(/%20/g,"+")},Object.defineProperty(t.prototype,"localKey",{get:function(){return this.useShareKey?this.getShareKey():g_local_key},enumerable:!0,configurable:!0}),t.prototype.getToken=function(t){LP.lpMakeRequestReallyReal(this.apiUrl+"/csrf","",function(e){4===e.readyState&&200===e.status?t(JSON.parse(e.responseText)):4===e.readyState&&lpmakerequesterror("invalidresponse",{url:e.responseURL},!1)})},t.prototype.getShareKey=function(){for(var e=0,t=g_shares;e<t.length;e++){var r=t[e];if(void 0!==r.associative&&1==r.associative)return r.key}return""},t.prototype.getShareId=function(){for(var e=0,t=g_shares;e<t.length;e++){var r=t[e];if(void 0!==r.associative&&1==r.associative)return r.id}return""},t}(FormfillStore);