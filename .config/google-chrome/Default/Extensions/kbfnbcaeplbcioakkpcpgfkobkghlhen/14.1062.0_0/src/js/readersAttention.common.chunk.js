(self.webpackChunk=self.webpackChunk||[]).push([[9923],{75003:(e,t,i)=>{i.d(t,{aH:()=>s,D$:()=>l,_z:()=>p});var s,a=i(7309),n=i(90361),o=i(14601),r=i(78674),h=i(85985),c=i(38983);!function(e){let t,i,s;!function(e){e.default="default",e.emogenie="emogenie",e.readersAttention="readersAttention",e.readersAttentionHelp="readersAttentionHelp",e.feedback="feedback",e.settings="settings",e.proofitRequest="proofitRequest",e.proofitReview="proofitReview",e.popup="popup",e.startupPlaceholder="startupPlaceholder"}(t=e.Type||(e.Type={})),function(e){let t;!function(e){let t;!function(e){e.predictionWidget="predictionWidget",e.navigation="navigation",e.readersAttentionItem="readersAttentionItem"}(t=e.Type||(e.Type={}))}(t=e.Caller||(e.Caller={}))}(i=e.ReadersAttention||(e.ReadersAttention={})),function(e){let t;!function(e){e.none="none"}(t=e.Type||(e.Type={}))}(s=e.Popup||(e.Popup={})),e.isDefault=function(t){return t.type===e.Type.default},e.isEmogenie=function(t){return t.type===e.Type.emogenie},e.isReadersAttention=function(t){return t.type===e.Type.readersAttention},e.isReadersAttentionHelp=function(t){return t.type===e.Type.readersAttentionHelp},e.isFeedback=function(t){return t.type===e.Type.feedback},e.isSettings=function(t){return t.type===e.Type.settings},e.isProofitRequest=function(t){return t.type===e.Type.proofitRequest},e.isProofitReview=function(t){return t.type===e.Type.proofitReview},e.isPopup=function(t){return t.type===e.Type.popup}}(s||(s={}));class l{constructor(e,t,i,s,a,l,p){this._defaultView=i,this.browser=l,this.layout=p,this._sub=new o.w,this.viewHistory=[],this._activeView=c.h.create(s),this._sub.add(e.subscribe((e=>{if(e.length>0)for(;!this.activeViewHasAlerts();)this.popActiveView()}))),a&&this._sub.add(t.pipe(r.b(100),h.h(n.fQ)).subscribe((()=>{if(a.has(this._activeView.get().type))for(;this._activeView.get().type!==this._defaultView.type;)this.popActiveView()})))}activeViewHasAlerts(){return!1}get activeView(){return this._activeView.view()}get lastView(){return this.viewHistory[this.viewHistory.length-1]||this._defaultView}pushActiveView(e){const t=this._activeView.get();e.type!==t.type&&(this.viewHistory.push(t),this._activeView.set(e))}popActiveView(){const e=this.viewHistory.pop()||this._defaultView;this._activeView.set(e)}replaceActiveView(e){e.type!==this._activeView.get().type&&this._activeView.set(e)}dispose(){this._sub.unsubscribe()}}class p extends l{constructor(e,t,i,n,o=a.V.classicAssistantLayout){super(t,i,{type:s.Type.default},{type:s.Type.startupPlaceholder},new Set([s.Type.readersAttention,s.Type.emogenie]),n,o),this.isHeaderNavigationEnabled=this._activeView.view((e=>e.type!==s.Type.feedback)),this._sub.add(this._activeView.subscribe((t=>{switch(t.type){case s.Type.settings:return void e.assistantSettingsShow();case s.Type.proofitRequest:return void e.proofitRequestFormShow();default:return}})))}activeViewHasAlerts(){switch(this._activeView.get().type){case s.Type.default:case s.Type.emogenie:case s.Type.readersAttention:return!0;default:return!1}}pushActiveView(e){const t=this._activeView.get();e.type!==t.type&&(t.type!==s.Type.startupPlaceholder&&this.viewHistory.push(t),this._activeView.set(e))}popActiveView(){const e=this.viewHistory.pop()||this._defaultView;e.type===s.Type.readersAttention?this._activeView.set({...e,caller:{type:s.ReadersAttention.Caller.Type.navigation}}):this._activeView.set(e)}}},51308:(e,t,i)=>{i.r(t),i.d(t,{ReadersAttentionFeatureImpl:()=>se,ReadersAttentionGnarTrackingImpl:()=>J,ReadersAttentionHeatmap:()=>q,ReadersAttentionHeatmapImpl:()=>Z,attentionCardDetails:()=>ie,attentionCardTitle:()=>te,attentionScoreDescription:()=>ee});var s,a=i(17771),n=i(71249),o=i(40327),r=i(32243),h=i(32426),c=i(27378),l=i(48439),p=i(5114),d=i(38983),g=i(14601),u=i(66310),m=i(76974),f=i(28043),y=i(85985),_=i(93508),w=i(93640),v=i(76331),b=i(34311),k=i(74850),C=i(77496),I=i(62337);!function(e){e.stitchAdjacent=function(e,t=1,i=.5,s=.5){const a=function(e,t=.5){const i=e.length>0?[{rects:[e[0]],top:e[0].rect.top,bottom:e[0].rect.top+e[0].rect.height}]:[];for(let s=1;s<e.length;++s){const a=i[i.length-1],n=e[s].rect;a.bottom-n.top>=t*Math.min(a.bottom-a.top,n.height)?(a.rects.push(e[s]),a.top=n.top<a.top?n.top:a.top,a.bottom=n.top+n.height>a.bottom?n.top+n.height:a.bottom):i.push({rects:[e[s]],top:n.top,bottom:n.top+n.height})}return i}(e,s);for(let e=0;e<a.length;++e){if(e>0){const t=a[e].top-a[e-1].bottom,s=a[e].bottom-a[e].top,n=a[e-1].bottom-a[e-1].top;t<Math.min(s,n)*i&&(a[e].top=a[e-1].bottom)}if(e<a.length-1){const t=a[e+1].top-a[e].bottom,s=a[e].bottom-a[e].top,n=a[e+1].bottom-a[e+1].top,o=.5*t;t<Math.min(s,n)*i&&(a[e].bottom=a[e].bottom+o)}for(let t=0;t<a[e].rects.length;++t)a[e].rects[t].rect={...a[e].rects[t].rect,top:a[e].top,height:a[e].bottom-a[e].top};for(let i=1;i<a[e].rects.length;++i){const s=a[e].rects[i-1].rect.left+a[e].rects[i-1].rect.width,n=a[e].rects[i].rect.left-s,o=.5*n;n>0&&n<Math.min(a[e].rects[i].rect.height,a[e].rects[i-1].rect.height)*t&&(a[e].rects[i-1].rect={...a[e].rects[i-1].rect,width:a[e].rects[i-1].rect.width+o},a[e].rects[i].rect={...a[e].rects[i].rect,left:s+o,width:a[e].rects[i].rect.left+a[e].rects[i].rect.width-s-o})}}return a.flatMap((e=>e.rects))},e.getMinDistanceBetween=function(e,t){if(I.UL.intersects(e,t))return 0;const i=e.left+e.width<t.left,s=e.top>t.top+t.height,a=e.left>t.left+t.width,n=e.top+e.height<t.top;return(i||a)&&(n||s)?1/0:i?t.left-(e.left+e.width):a?e.left-(t.left+t.width):n?t.top-(e.top+e.height):e.top-(t.top+t.height)},e.getBoundingBox=function(e){return e.slice(1).reduce(((e,t)=>{const i=Math.min(t.top,e.top),s=Math.min(t.left,e.left);return{top:i,left:s,width:Math.max(e.left+e.width,t.left+t.width)-s,height:Math.max(e.top+e.height,t.top+t.height)-i}}),e[0])}}(s||(s={}));var T=i(10760),x=i(25122);class S{constructor(e,t,i,s,a,n,o){this._geometryProvider=e,this._geometryLayout=t,this._textFieldRectInvalidated=i,this._formattingChanged=s,this._getTextMap=a,this._felog=o,this._highlightsCollection=new v.C(this._geometryProvider,this._geometryLayout,this._getTextMap,b.qH.everything,this._textFieldRectInvalidated,void 0,void 0,void 0,void 0,k.Y.create((0,C.w)(S.name)),this._felog.highlightGeometryUpdateTime),this._sub=new g.w,this.geometry=this._highlightsCollection.geometry.view(A),this._sub.add(n.subscribe((e=>this._onRangeChanges(e)))),this._sub.add(this._formattingChanged.subscribe((e=>{this._highlightsCollection.maintainConsistency([],(e=>e),!0)})))}_onRangeChanges(e){const t=this._felog.highlightUpdateTime.startMeasure();this._highlightsCollection.removeHighlights(e.removed.map(b.y$.Id.createFromMark)),"update"===e.kind&&(e.changed.forEach((e=>{this._highlightsCollection.updateHighlight(b.y$.Id.createFromMark(e.id),e.range,{intensity:e.intensity,range:e.range,isLocal:p.isSome(e.localInfo)})})),this._highlightsCollection.maintainConsistency(e.changed.map((e=>b.y$.Id.createFromMark(e.id))))),t.endMeasure()}dispose(){this._sub.unsubscribe(),this._highlightsCollection.dispose()}}function A(e){const t=function(e){const t=e.map((e=>({...e,boundingBox:s.getBoundingBox(e.rects)}))),i=[...t.slice(0,1).map((e=>({ranges:[e],boundingBox:e.boundingBox})))];for(const e of t.slice(1)){let t=!1;const a=1*T.C.mean(e.rects.map((e=>e.height)));for(let n=i.length-1;n>=0;--n){const o=i[n];if(s.getMinDistanceBetween(o.boundingBox,e.boundingBox)<=a&&o.ranges.some((t=>s.getMinDistanceBetween(t.boundingBox,e.boundingBox)<=a))){t=!0,o.boundingBox=s.getBoundingBox([o.boundingBox,e.boundingBox]),o.ranges.push(e);break}}t||i.push({ranges:[e],boundingBox:e.boundingBox})}return i.map((e=>e.ranges))}([...e.entries()].filter((e=>!!e[1])).map((([e,{rects:t,meta:{range:i,isLocal:s}}])=>({id:x.f.Range.Id.create(e),range:i,rects:t,isLocal:s}))).sort(((e,t)=>e.range.start-t.range.start))).map(((e,t)=>e.flatMap((({id:e,rects:i,isLocal:s})=>i.map((i=>({id:e,rect:i,groupIdx:t,isLocal:s}))))).map(((e,t)=>({...e,rectIdx:t}))))).flatMap((e=>s.stitchAdjacent(e))).reduce(((e,{id:t,rect:i,rectIdx:s,groupIdx:a,isLocal:n})=>{var o;return e.has(t)?null===(o=e.get(t))||void 0===o||o.rects.push({...i,rectIdx:s}):e.set(t,{id:t,rects:[{...i,rectIdx:s}],intensities:[],groupIdx:a,isLocal:n}),e}),new Map);for(const[i,s]of t.entries())s.intensities=M(e.get(b.y$.Id.createFromMark(i)).meta.intensity,s.rects);return t}function M(e,t){const[i,s]=e,a=(s-i)/t.reduce(((e,t)=>e+t.width),0),n=[];let o=i;for(const e of t){const t=e.width*a;n.push([o,o+t]),o+=t}return t.length>0&&(n[n.length-1][1]=s),n}class H{constructor(e,t,i,s,a,n,o,r){this._heatmapRangeManager=e,this._textChanges=t,this._geometryInvalidated=i,this._geometryProvider=s,this._geometryLayout=a,this._heatmapVisible=n,this._highlightsCollection=d.h.create(null),this._sub=new g.w,this.heatmapHighlights=this._highlightsCollection.pipe(u.w((e=>{var t;return null!==(t=null==e?void 0:e.geometry)&&void 0!==t?t:m.of(new Map)}))),this._sub.add(this._heatmapVisible.pipe(f.x()).subscribe((e=>{var t;null===(t=this._highlightsCollection.get())||void 0===t||t.dispose(),e&&this._highlightsCollection.set(new S(this._geometryProvider,this._geometryLayout,this._geometryInvalidated,this._textChanges.pipe(y.h((e=>w.x.isFormattingChange(e)||e.deltaChange.isEmpty))),o,this._heatmapRangeManager.heatmapChanges.pipe(_.O({kind:"update",removed:[],changed:this._heatmapRangeManager.heatmapRanges,textMap:o()})),r))})))}dispose(){var e;null===(e=this._highlightsCollection.get())||void 0===e||e.dispose(),this._sub.unsubscribe()}}var R=i(5739),V=i(67521),F=i(2844),O=i(20491);const E=({heatmap:e,size:t,style:i,className:s,felog:a,debug:n=!1})=>{const o=c.useRef(null);return(0,V.A)(F.aj(e,t,((e,{width:t,height:i})=>{const s=null==a?void 0:a.canvasRenderTime.startMeasure(),r=o.current,h=null==r?void 0:r.getContext("2d");if(r&&h){r.width=t,r.height=i,h.clearRect(0,0,t,i);for(const t of e.values())t.rects.forEach(((e,i)=>{L(h,t,e,t.intensities[i],n)}));null==s||s.endMeasure()}else null==s||s.cancelMeasure()}))),c.createElement("canvas",{ref:o,style:i,className:s,"data-grammarly-part":"heatmap"})};function L(e,t,i,s,a){const[n,o]=O.a.toColors(s);if(n!==o){const t=e.createLinearGradient(i.left,0,i.left+i.width,0);t.addColorStop(0,n),t.addColorStop(1,o),e.fillStyle=t}else e.fillStyle=n;if(e.fillRect(i.left,i.top,i.width,i.height),a){e.strokeStyle="black",e.lineWidth=1,e.strokeRect(i.left,i.top,i.width,i.height);const s=`${t.id}-${t.groupIdx}-${i.rectIdx}`,a=12;e.font=`normal normal bold ${a}px Arial`,e.fillStyle="white",e.fillRect(i.left+1,i.top+i.height-1-a,Math.min(i.width,e.measureText(s).width),Math.min(i.height,a)),e.fillStyle="red",e.fillText(s,i.left+1,i.top+i.height-1)}}var B=i(77176);const P=({heatmap:e,className:t,style:i,debug:s})=>c.createElement(R.F.div,{className:t,style:i},e.pipe((0,B.U)((e=>Array.from(e.values()).flatMap((e=>e.rects.map(((t,i)=>({...t,intensity:e.intensities[i],id:`${e.id}-${i}`,highlightId:e.id,groupIdx:e.groupIdx,isLocal:e.isLocal}))))).map((e=>c.createElement("div",{"data-name":"heatmap-range",...s?{"data-highlight-id":e.highlightId,"data-group-idx":e.groupIdx,"data-rect-idx":e.rectIdx}:{},key:e.id,style:{position:"absolute",width:e.width,height:e.height,left:e.left,top:e.top,background:U(e.intensity),...s?{border:"1px solid "+(e.isLocal?"red":"black")}:{}}})))))));function U(e){const[t,i]=O.a.toColors(e);return`linear-gradient(to right, ${t}, ${i})`}var D=i(23866);class ${constructor(e,t,i,s,a){this._useHeatmapCanvas=e,this._heatmapHighlights=t,this._visible=i,this._textFieldLayout=s,this._felog=a,this._debug=!1,this.view=c.createElement(R.F.Fragment,null,this._visible.view((e=>e?this._useHeatmapCanvas?c.createElement(E,{debug:this._debug,felog:this._felog,heatmap:this._heatmapHighlights,size:this._textFieldLayout.scrollSize.behavior,className:D.heatmap}):c.createElement(P,{debug:this._debug,heatmap:this._heatmapHighlights,className:D.heatmap}):null)))}}var W=i(84966);class N{constructor(){this._takeawaysFeedback=new Map,this._log=k.Y.create("TakeawayFeedbackStore")}registerFeedback(e,t){this._takeawaysFeedback.get(e)!==t&&(this._takeawaysFeedback.set(e,t),this._log.debug(`Feedback "${t}" stored for alert #${e}]`))}get addFeedbackToRawAlertTransformer(){return e=>{if(W.wQ.isTakeaway(e)){const t=this._takeawaysFeedback.get(e.id);return t?{...e,extra_properties:{...e.extra_properties,takeawayFeedback:t}}:e}return e}}}var Y,q,K=i(75003),G=i(90361),z=i(15646),j=i(83078);function Q(e){switch(e){case K.aH.ReadersAttention.Caller.Type.predictionWidget:return"predictionWidget";case K.aH.ReadersAttention.Caller.Type.navigation:return"navigation";case K.aH.ReadersAttention.Caller.Type.readersAttentionItem:return"readersAttentionItem";default:(0,G.vE)(e)}}function X(e,t){switch(e.type){case K.aH.ReadersAttention.Caller.Type.predictionWidget:return t;case K.aH.ReadersAttention.Caller.Type.navigation:return"";case K.aH.ReadersAttention.Caller.Type.readersAttentionItem:return e.item.title;default:(0,G.vE)(e)}}!function(e){e.Mock=class{onOpen(){}onClose(){}onHelpScreenShow(){}onTakeawayUserAction(){}onKeyTakeawayCardShow(){}onChecklistItemExpand(){}}}(Y||(Y={}));class J{constructor(e,t,i,s){this._gnar=e,this._statistics=t,this._getAttentionScore=i,this._getSessionUuid=s,this._statsOnOpen=p.none}_getBasicOpenMetrics(e,t){return{textScore:l.T.prism.reverseGet(this._getAttentionScore()),numWords:this._statistics.wordsCount.get(),alertCounts:this._statistics.alertCounts.get(),launchSource:Q(t.type),launchSourceLabel:X(t,e)}}onOpen(e,t,i,s){(0,o.pipe)(this._statsOnOpen,p.fold((()=>p.some({...this._getBasicOpenMetrics(t,s),numCards:i,checklist:e,time:performance.now(),numParagraphs:this._statistics.paragraphsCount.get(),numFormattingSpans:this._statistics.formattingSpansCount.get()})),(()=>p.none)),j.bw((e=>{const t=e.alertCounts.expandedViewSupported,s=e.alertCounts.freeClarity,a=e.alertCounts.critical,n=e.alertCounts.filter((e=>"priority"===e.assistantView)).expandedViewSupported,r=e.checklist.filter((e=>e.checked)).length;this._gnar.attentionPanelShow(Array.from(e.checklist),e.launchSource,e.launchSourceLabel,t,s,a,r,i.takeaway,n,i.nonTakeaway,e.numWords,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),e.textScore),this._statsOnOpen=p.some(e)})))}onClose(e,t){(0,o.pipe)(this._statsOnOpen,j.bw((i=>{const s=performance.now()-i.time,a=i.checklist.filter((e=>e.checked)).length,n=e.filter((e=>e.checked)).length;this._gnar.attentionPanelHide(Array.from(e),Array.from(i.checklist),this._statistics.wordsCount.get(),l.T.prism.reverseGet(this._getAttentionScore()),i.numWords,i.textScore,i.launchSource,i.launchSourceLabel,this._statistics.formattingSpansCount.get(),i.numFormattingSpans,n,a,t.takeaway,i.numCards.takeaway,this._statistics.paragraphsCount.get(),i.numParagraphs,t.nonTakeaway,i.numCards.nonTakeaway,s,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>"")))),this._statsOnOpen=p.none})))}onHelpScreenShow(){this._gnar.attentionHelpScreenShow((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))))}onTakeawayUserAction(e,t,i,s){switch(i.type){case z.lY.Type.takeawayCorrectlyDetected:return this._gnar.attentionKeyTakeawayFeedbackClick((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,t,"up");case z.lY.Type.takeawayIncorrectlyDetected:return this._gnar.attentionKeyTakeawayFeedbackClick((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,t,"down");case z.lY.Type.takeawayDismiss:return this._gnar.attentionKeyTakeawayIgnored(e,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,t);case z.lY.Type.takeawayResolve:return this._gnar.attentionKeyTakeawayAcknowledged(e,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),s.end,s.start,t);default:(0,G.vE)(i)}}onKeyTakeawayCardShow(e,t){this._gnar.attentionKeyTakeawayCardShow((0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),t.end,t.start,e)}onChecklistItemExpand(e){this._gnar.attentionChecklistItemExpand(e.checked,e.id,e.numAlerts,(0,o.pipe)(this._getSessionUuid(),p.getOrElse((()=>""))),e.title)}}!function(e){e.Mock=class{constructor(){this.visible=d.h.create(!1),this.view=c.createElement("div")}dispose(){}}}(q||(q={}));class Z{constructor(e,t,i,s,a,n,o,r){this._heatmapRangeManager=e,this._useHeatmapCanvas=t,this._textObserver=i,this._geometryInvalidated=s,this._geometryProvider=a,this._geometryLayout=n,this._textFieldLayout=o,this._felog=r,this._heatmapVisible=d.h.create(!1),this._heatmapHighlightsWiring=new H(this._heatmapRangeManager,this._textObserver.contentChanges.async,this._geometryInvalidated,this._geometryProvider,this._geometryLayout,this._heatmapVisible,(()=>this._textObserver.getCurrentTextMap()),this._felog.attentionHeatmap),this._heatmapViewController=new $(this._useHeatmapCanvas,this._heatmapHighlightsWiring.heatmapHighlights,this._heatmapVisible,this._textFieldLayout,this._felog.attentionHeatmap),this.visible=this._heatmapVisible,this.view=this._heatmapViewController.view}dispose(){this._heatmapHighlightsWiring.dispose()}}const ee="Highlighted text is more likely to be read",te="Capture your reader's attention",ie="Grammarly predicts where readers may lose focus by comparing the complexity of a sentence to the information it contains. The prediction also considers the length and formatting of the email as a whole.";class se{constructor(e,t,i){this._heatmapFactory=e,this._gnarTrackingFactory=t,this._isReadersAttentionItemSupported=i,this._state=d.h.create({panelInfo:p.none,feedItemInfo:p.none,attentionScore:p.none,feedItemDismissed:!1,featureHidden:!1}),this.tracking=this._gnarTrackingFactory((()=>(0,o.pipe)(this._state.get().attentionScore,p.getOrElse((()=>l.T.unsafeFromNumber(0)))))),this.takeawaysFeedbackStore=new N,this.heatmap=this._heatmapFactory(),this.feedItemInfo=this._state.view((e=>(0,o.pipe)(a.Y(p.option)({panelInfo:e.panelInfo,feedItemInfo:e.feedItemInfo}),p.filter((t=>!e.featureHidden&&!e.feedItemDismissed&&r.dp(t.panelInfo.checklist)>0&&this._isReadersAttentionItemSupported)),p.map((e=>e.feedItemInfo))))),this.panelInfo=this._state.view((e=>(0,o.pipe)(a.Y(p.option)({panelInfo:e.panelInfo,attentionScore:e.attentionScore}),p.filter((t=>r.dp(t.panelInfo.checklist)>0&&!e.featureHidden)),p.map((e=>({headerMessage:e.panelInfo.headerMessage,predictionMessage:e.panelInfo.predictionMessage,checklist:e.panelInfo.checklist,wordsCount:e.panelInfo.wordsCount,attentionScore:e.attentionScore,attentionScoreDescription:ee}))))))}onDismissFeedItem(){this._state.modify((e=>({...e,feedItemDismissed:!0})))}onAttentionHeatmapMessage(e){const t={...e,title:te,description:ee,details:p.some(ie)};this._state.modify((e=>({...e,attentionScore:t.attentionScore,feedItemInfo:(0,o.pipe)(e.feedItemInfo,p.map((()=>({title:t.title,description:t.description,details:t.details}))),p.alt((()=>(0,o.pipe)(t.showAttentionCard,p.filter((e=>!0===e)),p.map((()=>({title:t.title,description:t.description,details:t.details})))))),p.chain((e=>(0,o.pipe)(t.attentionScore,p.map((t=>({...e,attentionScore:t})))))))})))}onAttentionInfoMessage(e){const t=e.checklist.map((e=>[e.id,e]));this._state.modify((i=>({...i,panelInfo:p.some({headerMessage:e.headerMessage,predictionMessage:e.predictionMessage,checklist:(0,o.pipe)(i.panelInfo,p.fold((()=>t),(e=>[...r.AO(e.checklist),...t])),r.sQ((0,h.getLastSemigroup)(),n.IX)),wordsCount:e.wordsCount}),featureHidden:e.hidden})))}dispose(){this.heatmap.dispose()}}},23866:e=>{e.exports={heatmap:"_2rx7l",fadeIn:"_3nM-b"}}}]);