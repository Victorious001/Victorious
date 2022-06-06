(()=>{"use strict";var e,t={1706:(e,t,i)=>{var o=i(3357),n=i(6613),s=i(8098),r=i(5693);const a=e=>Object.fromEntries(Object.entries(e).map((([e,t])=>[e,"string"==typeof t?(0,r.Z)(t):a(t)]))),l=a,c="\np, ul, ol, td, th{\n  padding: 0;\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nul, ol{\n  list-style: none;\n}\n";var d=i(7584);const p=l({help:"help",addSettingFor:"add_smart_setting_for_X",deleteSettingFor:"delete_smart_setting_for_X",editSmartSettings:"edit_smart_settings"}),u=(e,t)=>p[e].replace(/XXX/g,t);function h(){return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    position: absolute;
    bottom: 40px;
    font-size: 12px;
    color: var( --brand-blue );
  }
  :host > .In{
    position: relative;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #bcbcbc;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.35);
  }

  .Element{
    padding: 0 12px;
    line-height: 34px;
    white-space: nowrap;
    cursor: pointer;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Element:hover{
    background: var( --brand-blue );
    color: #fff;
  }
  .Element ~ .Element{
    border-top: 1px solid #e6e6e6;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .Element:last-child{
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  </style>

  <div class="In">
  ${(()=>this.domain?this.containsFilter?d.dy`
    <div class="Element" @click="${this.removeFilter}">
      ${u("deleteSettingFor",this.unicodeDomain)}
    </div>`:d.dy`
    <div class="Element" @click="${this.addFilter}">
      ${u("addSettingFor",this.unicodeDomain)}
    </div>`:"")()}

  ${(()=>this.showEditSmartSettings?d.dy`
    <div class="Element" @click="${this.editSettings}">
      ${p.editSmartSettings}
    </div>`:"")()}
    <div class="Element" @click="${this.openHelp}">${p.help}</div>
  </div>`}var g=i(8897),m=i(5517),x=i(7679);class v extends((0,x.$)(m.Z)(d.oi)){render(){return h.call(this)}static get properties(){return{containsFilter:{type:Boolean},domain:{type:String},showEditSmartSettings:{type:Boolean},unicodeDomain:{type:String}}}constructor(){super(),this.containsFilter=null,this.domain="",this.unicodeDomain=""}async updated(e){if(e.has("domain")){if(!this.domain)return;this.unicodeDomain=s.ZP.toUnicode(this.domain)}}stateChanged({page:e}){const t=e.split(":");this.showEditSmartSettings="index"!==t[0]||"filters"!==t[1]}addFilter(){let{pac:{filters:e},user:{premium:t}}=m.Z.getStateSync();t||!e.length?m.Z.dispatch({type:"Page: set",page:"index:filters:"+this.domain}):this.showPremiumPopup(),this.remove()}editSettings(){(0,g.Z)({type:"сounters.increase",property:"popup: smart settings: open list"}),m.Z.dispatch({type:"Page: set",page:"index:filters"}),this.remove()}openHelp(){(0,g.Z)({type:"сounters.increase",property:"popup: smart settings: open help"}),(0,g.Z)({type:"create tab",options:"/pages/help/help.html"}),this.remove()}removeFilter(){n.Z.siteFilters.remove(this.domain),this.remove()}async showPremiumPopup(){const e=document.createElement("popup-premium-onerule");e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});const t=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((e=>{t.onfinish=e})),e.style.cssText=""}}customElements.define("context-menu",v);class f extends d.oi{constructor(){super(),this.bottom=0}render(){return d.dy`
    <style>
    ${c}
    :host{
      display:block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    :host > .In{
      position: absolute;
      bottom: ${this.bottom}px;
      left: 0;
      right: 0;
      text-align: center;
    }
    :host > .In > .In{
      text-align: left;
      display: inline-block;
      vertical-align: top;
    }
    .Text{
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      color: #fff;
      margin-bottom: -12px;
    }
    .Arrow{
      background: url( '/images/tip_arrow.svg' ) 0 0 no-repeat;
      width: 50px;
      padding-top: 100px;
      height: 0;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      margin-left: auto;
    }

    .Close{
      width: 16px;
      height: 16px;
      position: absolute;
      cursor: pointer;
      font-size: 0;
      right: 20px;
      top: 20px;
      transform: rotate(45deg)
    }
    .Close::before,
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      overflow: hidden;
    }
    .Close::before{
      top: 0;
      left: calc( 50% - 1px );
      height: 100%;
      width: 2px;
    }
    .Close::after{
      left: 0;
      top: calc( 50% - 1px );
      width: 100%;
      height: 2px;
    }
    .Close:hover::before,
    .Close:hover::after{
      background: #ddd;
    }
    </style>

    <div class="In"><div class="In">
      <div class="Text">
        Click on this button<br/>
        to Start VPN
      </div>
      <div class="Arrow"></div>
    </div></div>
    <div class="Close" @click="${this.close}"></div>`}close(){this.dispatchEvent(new CustomEvent("close"))}}customElements.define("first-start-tips-button",f);class b extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display:block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      text-align: center;
    }
    :host > .In{
      position: absolute;
      top: 55px;
      bottom: 40px;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
    }
    :host > .In > .In{
      width: 300px;
      margin: 0 auto;
    }

    .Title{
      font-size: 18px;
      font-weight: 600;
    }
    .Text{
      padding-top: 25px;
    }

    .Close{
      width: 16px;
      height: 16px;
      position: absolute;
      cursor: pointer;
      font-size: 0;
      right: 20px;
      top: 20px;
      transform: rotate(45deg)
    }
    .Close::before,
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      overflow: hidden;
    }
    .Close::before{
      top: 0;
      left: calc( 50% - 1px );
      height: 100%;
      width: 2px;
    }
    .Close::after{
      left: 0;
      top: calc( 50% - 1px );
      width: 100%;
      height: 2px;
    }
    .Close:hover::before,
    .Close:hover::after{
      background: #ddd;
    }
    </style>

    <div class="In"><div class="In">
      <div class="Title">
        Your VPN connection is now <br/>
        protected by Browsec
      </div>
      <div class="Text">
        You can visit any site now.<br/>
        All your traffic will route through our VPN server.
      </div>
    </div></div>
    <div class="Close" @click="${this.close}"></div>`}close(){this.dispatchEvent(new CustomEvent("close"))}}customElements.define("first-start-tips-protected",b);class y extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      position: absolute;
    }
    :host > .Bg{
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    :host > .Bg::after{
      content: '';
      display: block;
      position: absolute;
      top:0px;left:0px;
      width: 100%;
      height: 100%;
      background: var( --brand-blue );
      border-radius: 4px;
      overflow: hidden;
      text-indent: -9999px;
    }
    :host > .Bg > .Corner{
      position: absolute;
      left: 16px;
      bottom: 100%;
      width: 10px;
      height: 5px;
      overflow: hidden;
    }
    :host > .Bg > .Corner::after{
      content: '';
      display: block;
      border: 5px solid transparent;
      border-bottom-color: var( --brand-blue );
      width: 0;
      height: 0;
      overflow: hidden;
      margin-top: -5px;
    }
    :host > .In{
      position: relative;
      padding: 5px 14px;
      color: #fff;
      font-size: 12px;
    }
    </style>

    <div class="Bg"><div class="Corner"></div></div>
    <div class="In">${this.text}</div>`}static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}}customElements.define("general-tooltip",y);const w={add:e=>(0,g.Z)({type:"actions.favorites.add",country:e}),remove:e=>(0,g.Z)({type:"actions.favorites.remove",country:e})},k=async({email:e,password:t})=>{let i=await(0,g.Z)({type:"actions.login",data:{email:e,password:t}});if(i.success)return i.success;if(i.error){let{status:e,responseText:t,message:o}=i.error,n=new Error(o);throw void 0!==e&&(n.status=e),void 0!==t&&(n.responseText=t),n}},_=()=>(0,g.Z)({type:"actions.logout"}),E=l({goBack:"go_back",signIn:"sign_in",signOut:"sign_out"});function C(){return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    height: 56px;
    line-height: 56px;
    border: 1px solid var( --brand-blue );
    border-width: 0 5px 0 5px;
    background: var( --brand-blue );
    color: #fff;
    overflow: hidden;
    position: relative;
  }
  :host::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  :host > .In{
    overflow: hidden;
    height: 100%;
    text-align: right;
  }

  .GoBack{
    cursor: pointer;
    display:inline-block;
    vertical-align:middle;
    position:relative;
    color:#b3becf;
    font-size:14px;
    text-decoration: underline;
    padding: 0 5px 0 18px;
    background: url( '/images/back_hover.svg' ) no-repeat 0 -5000px;
  }
  .GoBack:hover{
    color: white;
    text-decoration: none;
  }

  .GoBack::before{
    content:'';
    background: url( '/images/back.svg' ) no-repeat 50% 50%;
    background-size: 100% 100%;
    width: 13px;
    height: 13px;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
  }
  .GoBack:hover::before{
    background-image: url( '/images/back_hover.svg' );
  }

  .LoginGuest{
    color: #fff;
    cursor: pointer;
    text-decoration: underline;
    display: inline-block;
    vertical-align: top;
    padding: 0 5px 0 5px;
  }
  .LoginGuest:hover{
    text-decoration: none;
  }

  .Logined{
    height: 24px;
    line-height: 24px;
    width: 100%;
    display:inline-block;
    vertical-align:top;
    vertical-align: middle;
  }
  .Logined::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }

  .Logout{
    float: right;
    cursor: pointer;
    width: 20px;
    padding-top: 20px;
    overflow: hidden;
    height: 0;
    background: url( '/images/logout_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    border: 2px solid transparent;
    position: relative;
  }
  .Logout:hover{
    background-image: url( '/images/logout_white.svg' );
  }
  .Logout::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    background: url( '/images/logout_white.svg' ) 0 -5000px no-repeat;
  }

  .Mail{
    vertical-align: middle;
    padding: 0 8px 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  </style>

  <head-logo .premium="${this.user.premium}"></head-logo>
  <div class="In">
  ${(()=>this.indexPage?this.user.email?d.dy`
    <div class="Logined">
      <div class="Logout" @click="${this.logout}" title="${E.signOut}"></div>
      <div class="Mail" title="${this.user.email}">${this.user.email}</div>
    </div>`:d.dy`
      <div class="LoginGuest" @click="${this.login}">
        ${E.signIn}
      </div>`:d.dy`
      <div class="GoBack" @click="${this.back}">${E.goBack}</div>`)()}
  </div>`}class P extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      padding: 5px 5px 0 5px;
      float: left;
    }

    :host > .In{
      display: table;
    }
    :host > .In > .L{
      display: table-cell;
      vertical-align: middle;
    }
    :host > .In > .R{
      display: table-cell;
      vertical-align: middle;
      padding-left: 10px;
    }

    .Ball{
      background: url( '/images/logo_ball.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 46px;
      padding-top: 46px;
      height: 0;
      overflow: hidden;
    }

    .Premium,
    .NoPremium{
      height: 0;
      overflow: hidden;
    }
    .Premium{
      background: url( '/images/logo_text_premium.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 85px;
      padding-top: 29px;
    }
    .NoPremium{
      background: url( '/images/logo_text.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 85px;
      padding-top: 14px;
    }

    img{
      display: block;
    }
    </style>

    <div class="In">
      <div class="L"><div class="Ball"></div></div>
      <div class="R">
        <div class="${this.premium?"Premium":"NoPremium"}"></div>
      </div>
    </div>`}static get properties(){return{premium:{type:Boolean}}}constructor(){super(),this.premium=!1}}customElements.define("head-logo",P);class S extends((0,x.$)(m.Z)(d.oi)){render(){return C.call(this)}static get properties(){return{user:{type:Object},indexPage:{type:Boolean}}}stateChanged({user:e,page:t}){this.user=e,this.indexPage="index"===t.split(":")[0]}constructor(){super(),this.user={type:"guest",premium:!1},this.indexPage=!0}back(){m.Z.dispatch({type:"Page: set",page:"index:home"})}login(){m.Z.dispatch({type:"Page: set",page:"login"})}logout(){_()}}customElements.define("main-head",S);const $=class{constructor(){this.listeners=[],this.word="",this.keydownListener=this.keydownListener.bind(this)}addChar(e){let t=this.word,i=performance.now();(!this.lastTimestamp||i-this.lastTimestamp>700)&&(t=""),t+=e,this.lastTimestamp=i,t!==this.word&&(this.word=t,this.listeners.forEach((e=>{e(t)})))}addListener(e){this.listeners.push(e)}removeListener(e){this.listeners=this.listeners.filter((t=>t!==e))}keydownListener(e){let{code:t,key:i}=e;" "===i&&e.preventDefault();let o=t?t.replace(/^key/i,""):i;"Space"===o&&(o=" "),o&&1===o.length&&/[ a-z]/i.test(o)&&(o=o.toLowerCase(),this.addChar(o))}},B=l({browsecOff:"browsec_off",off:"off"});function L(){return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    overflow: auto;
    position: absolute;
    background: #fff;
    border: 1px solid #bcbcbc;
    padding: 4px 0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .E{
    padding: 4px 10px;
    cursor: pointer;
    user-select: none;
  }
  .E.highlighted{
    background: #f5f5f5;
  }
  .E > .In{
    display: table;
    width: 100%;
  }

  .Name{
    display: table-cell;
    vertical-align: middle;
  }
  .Flag{
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
    width: 1px;
  }
  .Flag img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Flag_Off{
    width: 30px;
    line-height: 20px;
    font-size: 14px;
    color: var( --brand-burgundy );
    text-align: center;
  }

  .Off{
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #cccccc;
  }
  </style>

  <div class="Off">
    <div
      class="E${null===this.country?" highlighted":""}"
      @click="${this.offClick}"
      @mousemove="${this.elementHighlight(null)}">
      <div class="In">
        <div class="Name">${B.browsecOff}</div>
        <div class="Flag"><div class="Flag_Off">${B.off}</div></div>
      </div>
    </div>
  </div>
  ${this.countries.map((e=>{return d.dy`
    <div
      class="E${this.country===e.code?" highlighted":""}"
      @click="${this.elementClick(e.code)}"
      @mousemove="${this.elementHighlight(e.code)}">
      <div class="In">
        <div class="Name">${e.name}</div>
        <div class="Flag">
          <img src="${t=e.code,"usw"===t&&(t="us"),"uk"===t&&(t="gb"),t?`/images/flags/${t}.svg`:"/images/empty.png"}" width="30" height="20" alt=""/>
        </div>
      </div>
    </div>`;var t}))}`}class I extends d.oi{render(){return L.call(this)}static get properties(){return{countries:{type:Array},country:{type:String}}}constructor(){super(),this.keydownListener=this.keydownListener.bind(this),this.countries=[],this.country=null}connectedCallback(){super.connectedCallback(),this.charsBuffer=new $,document.addEventListener("keydown",this.keydownListener)}firstUpdated(){var e,t,i;let o=this.countries.map((({code:e,name:t})=>({code:e,name:t.toLowerCase()})));const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.children,s=[];for(const e of n)"div"===e.tagName.toLowerCase()&&s.push(e);this.namesList=s.slice(1).map(((e,t)=>{let{code:i,name:n}=o[t];return{element:e,code:i,name:n}})),this.namesList.unshift({code:null,element:null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelector)||void 0===i?void 0:i.call(t,"div.Off > div.E"),name:"OFF"}),this.charsBuffer.addListener((e=>{const t=this.namesList.find((({code:t,name:i})=>t&&i.startsWith(e)));if(!t)return;const{element:i,code:o}=t;this.country=o,this.scrollTop=i.offsetTop-2}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownListener)}elementClick(e){return()=>{this.dispatchEvent(new CustomEvent("select",{detail:e})),this.remove()}}elementHighlight(e){return t=>{Boolean(t.movementX||t.movementY)&&(this.country=e)}}keydownListener(e){let{key:t}=e;if("ArrowDown"!==t&&"ArrowUp"!==t){if("Enter"===t)return this.country?this.dispatchEvent(new CustomEvent("select",{detail:this.country})):this.dispatchEvent(new CustomEvent("disable")),void this.remove();this.charsBuffer.keydownListener(e)}else{e.preventDefault();let i=(()=>{let e=this.namesList.length,i=this.namesList.findIndex((({code:e})=>e===this.country));return i+="ArrowDown"===t?1:-1,(i+e)%e})(),o=this.namesList[i];this.country=o.code;let n=this.scrollTop,s=this.offsetHeight,r=n+s,a=o.element.offsetHeight,l=o.element.offsetTop,c=l+a;if(l>=n&&c<=r)return;let d=l>=n?c-s+2:l-2;this.scrollTop=d}}offClick(){this.dispatchEvent(new CustomEvent("disable")),this.remove()}}customElements.define("filters-country-list",I);var z=i(1031);const T=({action:e=(e=>e),url:t,storeState:i})=>(0,z.Z)(t,(t=>Object.assign(e(t),{instd:i.daysAfterInstall})));var Z=i(6194);function D(){return d.dy`
  <style>
  ${c}
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  a:hover{
    text-decoration: none;
  }

  :host{
    display: block;
  }

  .Login{
    padding: 38px 12px 2px;
    font-size: 14px;
    min-height: 140px;
    height: 318px;
    font-size: 11px;
  }

  .Title{
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  .Title::after{
    display: block;
    content: '';
    width: 100px;
    margin: 0 auto;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:20px;
    border-bottom: 4px solid var( --brand-green );
  }

  .Notice {
    position: absolute;
    font-size: 13px;
    color: #090;
    top: -24px;
    width: 100%;
    left: -2px;
  }
  .Error {
    position: absolute;
    bottom: calc(100% + 6px);
    left: 20px;
    right: 20px;
    font-size: 13px;
    color: var( --brand-burgundy );
    text-align: center;
  }

  .Login input[type="text"],
  .Login input[type="password"] {
    font:100% arial,sans-serif;
    vertical-align:middle;
    outline:none;
    width: 315px;
    margin: 1px 0px;
    height: 36px;
    border-radius: 5px;
    padding: 1px 10px;
    font-size: 15px;
    outline: none;
    background: #f5f5f5;
    border: 1px #7b7c80 solid;
    color: #1c304e;
  }
  .Login input[type="text"]::placeholder,
  .Login input[type="password"]::placeholder {
    color: #9b9c9e;
  }
  .Login input[type="text"].invalid,
  .Login input[type="password"].invalid{
    border: 1px solid var( --brand-burgundy );
  }
  .Login input[type="text"].invalid:focus,
  .Login input[type="password"].invalid:focus{
    outline: none;
  }

  .Login_Form{
    margin:0;
    padding:0;
    border-style:none;
    margin-top: 46px;
    text-align: center;
    padding: 0 20px;
    position:relative;
  }

  .Login_Row{
    width:100%;
    padding: 0 0 14px;
  }
  .Login_Row::after{
    display:block;
    clear:both;
    content:'';
  }
  .Login_Row label{
    box-sizing: border-box;
    display: inline-block;
    min-width: 100px;
    padding: 6px 5px 0 0;
  }

  .Login_ForgotPassword {
    color: #1c304e;
    font-size: 12px;
    line-height: 1;
    margin-top: 3px;
    float: right;
  }

  .Login_Button{
    margin-top: 18px;
  }
  .Login_Button > .In{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .Login_Button.loading > .In::after{
    content: '';
    display: block;
    position: absolute;
    left: 12px;
    top: calc(50% - 12px);
    width: 24px;
    padding-top: 24px;
    overflow: hidden;
    height: 0;
  }
  .Login_Button_Overlay{
    display: none;
    position: absolute;
    left: 9px;
    top: calc(50% - 15px);
    width: 24px;
    padding-top: 24px;
    height: 0;
    overflow: hidden;
    background:
      #fff radial-gradient(circle at 80% 80%, #1c304e 0, #1c304e 13%, transparent 90%, transparent 100%);
    border-radius: 50%;
    border: 3px solid #1c304e;
    animation: rotating 1.2s linear infinite;
  }
  .Login_Button.loading .Login_Button_Overlay{
    display: block;
  }
  .Login_Button_Overlay::after{
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    padding-top: 16px;
    height: 0;
    overflow: hidden;
    top: calc( 50% - 16px / 2 );
    left: calc( 50% - 16px / 2 );
    background: #1c304e;
    border-radius: 50%;
  }

  .Login_Button button{
    box-sizing: border-box;
    display: inline-block;
    border: 0;
    border-radius: 5px;
    position:relative;
    background-color: #1c304e;
    color:#fff;
    text-align:center;
    font-family: inherit;
    font-weight: 400;
    padding: 2px 12px;
    font-size: 18px;
    line-height: 30px;
    height: 45px;
    cursor:pointer;
    min-width: 190px;
  }

  .Login_Register {
    margin-top: 7px;
    font-size: 12px;
  }
  .Login_Register a {
    color: #1c304e;
  }
  </style>

  <div class="Login">
    <div class="Title">${this.translations.signIn}</div>
    <form class="Login_Form" action="#" @submit="${this.formSubmit}">

    ${(()=>this.notice?d.dy`<div class="Notice">${this.notice}</div>`:"")()}
    ${(()=>this.error?d.dy`<div class="Error"></div>`:"")()}

      <div class="Login_Row">
        <input class="${this.error?"invalid":""}" type="text" size="30" name="email" autofocus placeholder="${this.translations.email}">
      </div>
      <div class="Login_Row">
        <input class="${this.error?"invalid":""}" type="password" size="30" name="password" placeholder="${this.translations.password}">
        <a href="${this.links.resetPassword}" class="Login_ForgotPassword" target="_blank">
          ${this.translations.forgotYourPassword}
        </a>
      </div>

      <div class="Login_Row">
        <div class="Login_Button${this.loading?" loading":""}"><div class="In">
          <button>${this.translations.logIn}</button>
          <div class="Login_Button_Overlay"></div>
        </div></div>

        <div class="Login_Register">
          ${this.translations.dontHaveAnAccount}
          <a href="${this.links.signUp}" target="_blank">
            ${this.translations.signUp}
          </a>
        </div>
      </div>
    </form>
  </div>`}let O=l({dontHaveAnAccount:"dont_have_an_account",email:"email",forgotYourPassword:"forgot_your_password",logIn:"log_in",password:"password",signIn:"sign_in",signUp:"sign_up",welcomeBack:"welcome_back",errors:{incorrectEmailOrPassword:"incorrect_email_or_password",noConnection:"authentication_error_no_connection",thisAccountIsLocked:"this_account_is_locked_please_contact_us"}});class F extends((0,x.$)(m.Z)(d.oi)){render(){return D.call(this)}static get properties(){return{links:{type:Object},loading:{type:Boolean},translations:{type:Object},error:{type:Boolean},notice:{type:String}}}get links(){const e=m.Z.getStateSync();return{resetPassword:T({url:Z.Z.resetPassword,storeState:e}),signUp:T({url:Z.Z.newUser,storeState:e})}}get translations(){return O}constructor(){super(),this.loading=!1,this.error=!1}firstUpdated(e){var t,i;super.firstUpdated(e);const o=e=>{var t,i;return null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelector)||void 0===i?void 0:i.call(t,e)},n=o('input[type="text"][name="email"]'),s=o('input[type="password"][name="password"]');if(!n||!s)throw new Error("No input elements in main-login");this.elements={mail:n,password:s};const r=null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelectorAll)||void 0===i?void 0:i.call(t,"a");for(const e of r)e.addEventListener("click",(async()=>{var e;await new Promise((e=>{setTimeout(e,50)})),null!==(e=self)&&void 0!==e&&e.close&&self.close()}));this.elements.mail.focus()}async formSubmit(e){if(e.preventDefault(),this.loading)return;if(this.loading=!0,this.errorView){Array.from(this.errorView.childNodes).forEach((e=>{this.errorView.removeChild(e)}))}this.error=!1,this.notice=null;let t=this.elements.mail.value,i=this.elements.password.value;try{await k({email:t,password:i}),this.notice=O.welcomeBack,(async()=>{var e,t;await this.requestUpdate();let i=null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector)||void 0===t?void 0:t.call(e,"div.Notice");if(!i)throw new Error("No notiveCiew in main-login");i.style.cssText="opacity: 0";let o=i.animate([{opacity:0},{opacity:1}],{duration:200,easing:"linear"});await new Promise((e=>{o.onfinish=e})),i.style.cssText=""})(),await new Promise((e=>{setTimeout(e,1e3)})),m.Z.dispatch({type:"Page: set",page:"index:home"})}catch(e){var o,n;let{status:t,responseText:i}=e,s={};try{i&&(s=JSON.parse(i))}catch(e){}let r=401!==t?"noConnection":8===s.error_code?"thisAccountIsLocked":"incorrectEmailOrPassword",a=O.errors[r];this.error=!0,401===t&&(this.elements.password.value=""),await this.requestUpdate();let l=null===(o=this.shadowRoot)||void 0===o||null===(n=o.querySelector)||void 0===n?void 0:n.call(o,"div.Error");if(!l)throw new Error("No errorView in main-login");this.errorView=l;a.split(/\n/g).flatMap(((e,t,i)=>{let o=[];return e.trim()&&o.push(document.createTextNode(e)),t!==i.length-1&&o.push(document.createElement("br")),o})).forEach((e=>{this.errorView.appendChild(e)}));this.errorView.style.cssText="opacity: 0";let c=this.errorView.animate([{opacity:0},{opacity:1}],{duration:200,easing:"linear"});await new Promise((e=>{c.onfinish=e})),this.errorView.style.cssText=""}this.loading=!1}onAnimationComplete(){this.elements.mail.focus()}}customElements.define("main-login",F);var A=i(6492),N=i.n(A),R=i(9328);const M=l({help:"help"});function V(){return d.dy`
  <style>
  ${c}
  .Foot{
    height: 38px;
    padding: 0 10px;
    border-top: 1px solid #bcbcbc;
    background: #f5f5f5;
    position: absolute;
    right:0px;bottom:0px;left:0px;
  }
  .Foot::after{
    content:' ';
    display:block;
    clear:both;
    width:0;height:0;
    overflow:hidden;
    font-size:0;
  }
  .Foot c-switch{
    margin: 7px 0 0;
    float: right;
  }

  .Switch{
    position: absolute;
    top:0px;bottom:38px;left:0px;
    width: 100%;
    white-space: nowrap;
  }
  .Switch > *{
    display:inline-block;
    vertical-align:top;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    white-space: normal;
  }

  .Help{
    float: right;
    position: relative;
    margin-top: 12px;
    padding-left: 19px;
    cursor: pointer;
    font-size: 12px;
    line-height: 18px;
    color: var( --brand-green );
    background: url( '/images/menu/help_green.svg' ) 0 -5000px no-repeat;
  }
  .Help::after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -7px;
    background: url( '/images/menu/help_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    padding-top:14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
  }
  .Help:hover::after{
    background-image: url( '/images/menu/help_green.svg' );
  }
  </style>

  <div class="Switch"></div>

  <div class="Foot">
  ${(()=>"help"===this.preMenuView?d.dy`
    <div class="Help" @click="${this.openHelp}">${M.help}</div>`:"switch"===this.preMenuView?d.dy`
    <c-switch @click="${this.switchClick}" .on="${this.switchOn}"></c-switch>`:"")()}
    <index-menu></index-menu>
  </div>`}const H=({defaultCountry:e,country:t,countries:i})=>{let o=i.includes(t)?t:e;return"usw"===o&&(o="us"),"uk"===o&&(o="gb"),`/images/flags/${o}.svg`},U=N().proxy.defaultCountry||"nl";function j(e){return d.dy`
  <style>
  ${c}
  .Off{
    width: 30px;
    line-height: 22px;
    padding-left: 1px;
    color: var( --brand-burgundy );
    font-size: 14px;
    text-align: center;
  }

  .ChangeRule_Country{
    position: relative;
    width: 56px;
    border: 1px solid #bcbcbc;
    height: 22px;
    border-radius: 4px;
    padding: 1px 2px;
    background: url( '/images/smart_settings/arrow_up.svg' ) 0 -5000px no-repeat;
  }
  .ChangeRule_Country img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .ChangeRule_Country::after{
    content: '';
    display: block;
    background: url( '/images/smart_settings/arrow_down.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 9px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 5px;
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -2px;
  }
  .ChangeRule_Country.open{
    border-color: var( --brand-green );
  }
  .ChangeRule_Country.open::after{
    background-image: url( '/images/smart_settings/arrow_up.svg' );
    /* margin-top: -3px; */
  }

  .ChangeRule_Button{
    width: 46px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:24px;
    background: var( --brand-green ) url( '../images/smart_settings/agree_white.svg' ) 0 -5000px no-repeat;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }
  .ChangeRule_Button::after{
    content: '';
    display: block;
    width: 14px;
    overflow: hidden;
    font-size:0;
    text-indent: -9999px;
    height: 0;
    padding-top:14px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -7px 0 0 -7px;
    background: url( '/images/smart_settings/plus_white.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .ChangeRule_Button.save::after{
    width: 16px;
    padding-top: 11px;
    background-image: url( '/images/smart_settings/agree_white.svg' );
    margin: -5px 0 0 -8px;
  }

  .List{
    position: absolute;
    top:65px;
    right:0px;
    bottom:0px;
    left:0px;
    overflow: auto;
    background: url( '/images/smart_settings/trash_green.svg' ) 0 -5000px no-repeat;
  }
  .List > .E{
    position: relative;
    line-height: 34px;
    transition: opacity 0.2s;
  }
  .List > .E:hover{
    background: #fafafa;
  }
  .List > .E.active,
  .List > .E.active:hover{
    background: #f5f5f5;
  }
  .List > .E.inactive,
  .List > .E.inactive:hover{
    background: transparent;
    opacity: 0.33;
  }
  .List > .E.inactive.disabled,
  .List > .E.inactive.disabled:hover{
    background: transparent;
    opacity: 1;
  }
  .List > .E > .In{
    padding: 0 7px 0 14px;
    cursor: pointer;
    height: 34px;
  }
  .List > .E > .In::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }

  .List_Remove{
    float: right;
    background: url( '/images/smart_settings/trash_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 11px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:14px;
    margin: 3px 0 0 6px;
    cursor: pointer;
    border: 7px solid transparent;
  }
  .List_Remove:hover{
    background-image: url( '/images/smart_settings/trash_green.svg' );
  }
  .List_Flag{
    float: right;
    width: 30px;
    padding: 7px 0 0 13px;
  }
  .List_Flag img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }

  .ChangeRule{
    padding: 19px 14px;
    border-bottom: 1px solid #bcbcbc;
    display: flex;
    align-items: center;
  }
  .ChangeRule > .E{
    flex-grow: 0;
    flex-shrink: 0;
  }
  .ChangeRule > .E ~ .E{
    padding-left: 10px;
  }
  .ChangeRule > .E.input{
    flex-grow: 1;
  }

  .List_Favicon{
    width: 16px;
    float: left;
    padding: 9px 7px 0 0;
    transition: opacity 0.2s;
  }
  .List > .E.disabled .List_Favicon{
    opacity: 0.3;
  }
  .List_Favicon img{
    display: block;
  }

  .List_Name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: opacity 0.2s;
  }
  .List > .E.disabled .List_Name{
    opacity: 0.3;
  }

  .List_Deleted{
    display: none;
    background: #fff;
    position: absolute;
    top:0px;right:0px;bottom:0px;left:0px;
    padding: 0 14px 0 22px;
    border-left: 14px solid transparent;
    color: var( --brand-green );
  }
  .List_Deleted::after{
    content: '';
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    background: url('/images/smart_settings/check.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6px;
  }
  .List > .E.deleted .List_Deleted{
    display: block;
  }

  .List_Delete_Link{
    cursor: pointer;
    color: var( --brand-blue );
    border-bottom: 1px dashed var( --brand-blue );
  }
  .List_Delete_Link:hover{
    border-bottom-color: transparent;
  }

  .List_Select{
    float: right;
    padding: 4px 0 0 5px;
  }
  .List_Select_Button{
    line-height: 24px;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid var( --brand-green );
    color: var( --brand-green );
    padding: 0 8px;
    border-radius: 4px;
    font-size: 12px;
  }
  .List_Select_Button:hover{
    background: var( --brand-green );
    color: #fff;
  }

  .List_InactiveOverlay{
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    text-indent: -9999px;
  }
  .List > .E.inactive .List_InactiveOverlay{
    display: block;
  }
  </style>

  <div class="ChangeRule">
    <div class="E text">${e.on}</div>
    <div class="E input">
      <filters-domain
        .value="${this.domain}"
        @save="${this.save}"
        @value-changed="${this.inputListener}"
      ></filters-domain>
    </div>
    <div class="E text">${e.use}</div>
    <div class="E flag">
      <div 
        data-role="country selector"
        class="ChangeRule_Country" 
        @click="${this.openCountryList}"
      >
      ${(()=>{if(!this.country)return d.dy`
          <div class="Off">${e.off}</div>`;const t=H({countries:this.countries,country:this.country,defaultCountry:U});return d.dy`
          <img src="${t}" width="30" height="20" alt=""/>`})()}
      </div>
    </div>
    <div class="E button">
      <div 
        class="ChangeRule_Button${this.selectedDomain?" save":""}" 
        @click="${this.save}"
      ></div>
    </div>
  </div>

  <div class="List" @click="${this.listClick}">
  ${this.filters.map((t=>{return d.dy`
    <div class="E ${(({deleted:e,disabled:t,value:i},o)=>{let n=[];return e&&n.push("deleted"),t&&n.push("disabled"),o&&n.push(i===o?"active":"inactive"),n.join(" ")})(t,this.selectedDomain)}">
      <div class="In" @click="${this.listElementClick(t)}">
        <div class="List_Remove" title="${e.removeSmartSetting}"></div>
        ${(()=>t.disabled?d.dy`
        <div class="List_Select">
          <div class="List_Select_Button">${e.select}</div>
        </div>`:d.dy`
        <div class="List_Flag">
    ${(()=>{if(!t.country)return d.dy`
          <div class="Off">${e.off}</div>`;const i=H({countries:this.countries,country:t.country,defaultCountry:U});return d.dy`
          <img src="${i}" width="30" height="20" alt=""/>`})()}
        </div>`)()}
        <div class="List_Favicon">
          <img src="${i=t.value,i?`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${i}&size=16`:"/images/empty.png"}" width="16" height="16" alt=""/>
        </div>
        <div class="List_Name">${t.view}</div>
      </div>
      <div class="List_Deleted">
        ${e.settingWasDeleted}
        <span class="List_Delete_Link" @click="${this.cancelRemove(t)}">
          ${e.undo}
        </span>
      </div>
      <div class="List_InactiveOverlay" @click="${this.resetSelection}">&nbsp;</div>
    </div>`;var i}))}
  </div>`}const W=l({pleaseEnterDomain:"please_enter_domain"});class q extends HTMLElement{render(){const e=this.shadowRoot,t=document.createElement("style");t.textContent=`\n    ${c}\n    :host{\n      display: block;\n    }\n\n    input[type="text"]{\n      display: block;\n      width: 100%;\n      border: 1px solid #bcbcbc;\n      line-height: 24px;\n      height: 24px;\n      box-sizing: border-box;\n      padding: 0 8px;\n      border-radius: 4px;\n      outline: none;\n    }\n    input[type="text"]:focus{\n      border-color: var( --brand-blue );\n    }`;const i=document.createElement("input");i.type="text",i.placeholder=W.pleaseEnterDomain,i.addEventListener("input",(({target:e})=>{let{value:t}=e;t=t.replace(/\s+/g,"").toLowerCase();const o=i.selectionEnd;i.value=t;const n=o>t.length?t.length:o;i.setSelectionRange(n,n),this.inputValue=t,this._value=t,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t}}))})),i.addEventListener("paste",(e=>{e.stopPropagation(),e.preventDefault();const t=(e.clipboardData||window.clipboardData).getData("text/plain").trim();if(!t)return;let i;try{i=new URL(t).hostname}catch(e){i=t.toLowerCase()}this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i}}))})),i.addEventListener("keypress",(e=>{let{code:t,which:o}=e;"Enter"!==t&&13!==o||(e.preventDefault(),this.dispatchEvent(new CustomEvent("save")),i.blur())})),this.input=i,e.append(t,i)}constructor(){super(),this._value="",this.inputValue="",this.attachShadow({mode:"open"}),this.render()}get value(){return this._value}set value(e){e!==this._value&&(this.inputValue=e,this._value=e,this.input.value=e)}}customElements.define("filters-domain",q);const{_:X}=self,G="undefined"!=typeof browser?browser:chrome,Y=l({cancelEditing:"cancel_editing",off:"off",on:"on",pleaseEnterDomain:"please_enter_domain",pleaseEnterValidDomain:"please_enter_valid_domain",removeSmartSetting:"remove_smart_setting",select:"select",settingWasDeleted:"setting_was_deleted",thisDomainAlreadyInList:"this_domain_already_in_list",undo:"undo",use:"use"}),J=({view:e},{view:t})=>e<t?-1:e>t?1:0,Q=({dimensionElement:e,text:t})=>{const i=document.createElement("tooltip-error");i.text=t;const o=e.getBoundingClientRect(),n=o.top+e.offsetHeight-1;i.style.cssText=`top:${n}px;left:${o.left}px;`,document.body.append(i);const s=(()=>{let e=!0;return()=>{e?e=!1:(i.remove(),document.removeEventListener("click",s))}})();document.addEventListener("click",s)};class K extends((0,x.$)(m.Z)(d.oi)){render(){return j.call(this,Y)}static get properties(){return{country:{type:String},countries:{type:Array},domain:{type:String},filters:{type:Array},premium:{type:Boolean},selectedDomain:{type:String}}}constructor(){super(),this.countries=[],this.country=null,this.domain="",this.filters=[],this.premium=null,this.selectedDomain=null}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.removeStoreListener)||void 0===e||e.call(this),delete this.removeStoreListener,this.documentClick&&document.removeEventListener("mousedown",this.documentClick)}async firstUpdated(e){super.firstUpdated(e);const t=this.shadowRoot,i=t.querySelector("div.List");if(!i)throw new Error("No list element in index-filters");this.nodes={list:i};{const e=[];for(const t of m.Z.getStateSync().pac.filters){if("domain"!==t.format)continue;const i=t.proxyMode?t.country:null,{disabled:o,value:n}=t,r=s.ZP.toUnicode(n);e.push({country:i,deleted:!1,disabled:o,value:n,view:r})}this.filters=e.sort(J)}const o=t.querySelector("div.ChangeRule filters-domain");if(!o)throw new Error("No domainInput element in index-filters");this.domainInput=o;const n=t.querySelector('[data-role="country selector"]');if(!n)throw new Error("No countryElement element in index-filters");this.countryElement=n,this.removeStoreListener=m.Z.onChange((({pac:{filters:e}})=>e),(async(e,t,i)=>{if(e.length===t.length)return;const o=e.length>t.length?"addition":"deletion";if("addition"===o){const i=X.differenceBy(e,t,X.isEqual)[0];if(!i)return;if(this.filters.some((({value:e})=>e===i.value)))return;let o=X.cloneDeep(this.filters);if("string"!=typeof i.value)throw new Error("Addition error for index-filters, not string provided before punicode");let n=s.ZP.toUnicode(i.value);return o.push({country:i.country,deleted:!1,value:i.value,view:n}),void(this.filters=o.sort(J))}if("deletion"===o){if(!Boolean(i.user.email)&&!e.length&&t.length-e.length>=2)return void(this.filters=[]);const o=X.differenceBy(t,e,X.isEqual)[0];if(!o)return;if(!this.filters.some((({deleted:e,value:t})=>t===o.value&&!e)))return;const n=X.cloneDeep(this.filters).filter((({value:e})=>e!==o.value));this.filters=n}}))}stateChanged({proxyServers:e,user:t}){this.countries=Array.from(t.premium?e.premiumCountries():e.freeCountries()),this.premium=t.premium}cancelRemove({country:e,value:t}){return()=>{if(this.filters.some((({deleted:e,disabled:t})=>!e&&!t))&&!m.Z.getStateSync().user.premium)return void this.showPremiumPopup();let i=X.cloneDeep(this.filters);const o=i.find((e=>e.value===t));o&&(o.deleted=!1),this.filters=i;const s={domain:t,type:e?"proxy":"direct"};e&&(s.country=e),n.Z.siteFilters.add(s)}}inputListener({detail:{value:e}}){this.domain=e}listClick({target:e}){}listElementClick({country:e,disabled:t,value:i,view:o}){return({target:s})=>{if(s instanceof HTMLElement){if(s.classList.contains("List_Remove")){const e=X.cloneDeep(this.filters),t=e.find((e=>e.value===i));return t&&(t.deleted=!0),this.filters=e,n.Z.siteFilters.remove(i),void this.resetSelection()}if(s.classList.contains("List_Select_Button")){{const e=X.cloneDeep(this.filters);{const t=e.find((({disabled:e})=>!e));t&&(t.disabled=!0)}{const t=e.find((({value:e})=>i===e));t&&delete t.disabled}this.filters=e}(0,g.Z)({type:"select disabled site filter",value:i})}else t?this.resetSelection():(this.country=e,this.domain=o,this.selectedDomain=i)}}}openCountryList(){this.countryElement.classList.add("open");const e=document.createElement("filters-country-list");e.countries=this.countries.map((e=>({code:e,name:G.i18n.getMessage("country_name_"+e.toUpperCase())}))).sort((({name:e},{name:t})=>e<t?-1:e>t?1:0)),e.country=this.country,e.addEventListener("select",(({detail:e})=>{this.country=e,this.countryElement.classList.remove("open")})),e.addEventListener("disable",(()=>{this.country=null,this.countryElement.classList.remove("open")}));const{left:t,top:i}=this.countryElement.getBoundingClientRect(),o=this.countryElement.offsetHeight,n=i+o,s=self.innerWidth-t-this.countryElement.offsetWidth,r=self.innerHeight-i-o;e.style.cssText=`top:${n}px;right:${s}px;max-height:${r}px;`,document.body.append(e),this.documentClick=({target:t})=>{t instanceof HTMLElement&&(e.contains(t)||t===e)||(e.remove(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick,this.countryElement.classList.remove("open")))},document.addEventListener("mousedown",this.documentClick)}resetSelection(){this.country=null,this.domain="",this.selectedDomain=null}async save(){const e=this.domain;if(!e)return void Q({dimensionElement:this.domainInput,text:Y.pleaseEnterDomain});const t=s.ZP.toASCII(e);if(void 0!==t)if(1!==t.split(".").length){{const e=t.split("."),i=4===e.length&&e.every((e=>/^[0-9]+$/.test(e)&&Number(e)>=0&&Number(e)<=255));if(!i&&e.some((e=>!/^[a-zA-Z0-9-_]+$/.test(e))))return void Q({dimensionElement:this.domainInput,text:Y.pleaseEnterValidDomain});if(!i){const e=t.split(".").pop();if(!self.domainZoneList.includes(e))return void Q({dimensionElement:this.domainInput,text:Y.pleaseEnterValidDomain})}}if(!this.selectedDomain){if(this.filters.map((({value:e})=>e)).includes(t))return void Q({dimensionElement:this.domainInput,text:Y.thisDomainAlreadyInList})}if(this.selectedDomain){{const i=this.filters.filter((({value:e})=>e!==this.selectedDomain));i.push({country:this.country,deleted:!1,value:t,view:e}),i.sort(J),this.filters=i}(0,g.Z)({type:"change site filter",country:this.country,domain:t,selectedDomain:this.selectedDomain})}else{if(this.filters.some((({deleted:e,disabled:t})=>!e&&!t))&&!m.Z.getStateSync().user.premium)return void this.showPremiumPopup();(0,g.Z)({type:"сounters.increase",property:"popup: smart settings: add rule"});const i=this.country?{country:this.country,domain:t,type:"proxy"}:{domain:t,type:"direct"},o=this.filters.slice();o.unshift({country:this.country,deleted:!1,value:t,view:e}),this.filters=o,n.Z.siteFilters.add(i)}this.resetSelection()}else Q({dimensionElement:this.domainInput,text:Y.pleaseEnterValidDomain})}async showPremiumPopup(){if(this.popupPremiumFreeze)return;this.popupPremiumFreeze=!0;const e=document.createElement("popup-premium-onerule");e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});const t=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((e=>{t.onfinish=e})),e.style.cssText="",this.popupPremiumFreeze=!1}}customElements.define("index-filters",K);var ee=i(2338);const te=async({experiments:e,promotions:t,showSpeedPromo:i,user:o})=>{if("logined"===o.type&&o.premium){const e=o.loginData.subscription.paidUntil,t=e?new Date(e):void 0,i=await ee.Z.get("userClosedWarnToPremiumEndDate");if(!(!t||o.loginData.subscription.auto_renewal||i===String(t)||Date.now()<t.getTime()-1728e5))return{type:"premium expiration"}}const n=o.premium,s=Date.now();if(2===await ee.Z.get("Experiment 254: phase")&&!n&&"1"===e[N().experiments.pollBanner.id])return{type:"poll banner"};const r=await(async()=>{const e=t.filter((({banner:e,from:t,till:i})=>e&&t<=s&&s<=i)).filter((({kind:e})=>"personal"===e||!n)).sort((({kind:e},{kind:t})=>e===t?0:"personal"===e?-1:1));if(!e.length)return;const{id:i}=e[0];let{banner:o}=e[0];return{id:i,banner:o}})();if(r)return{banner:r.banner,promotionId:r.id,type:"custom"};return!!i&&!n?{type:"speed"}:void 0},{_:ie}=self,oe=new class{constructor(){this._activeBanner=void 0,this._listeners=[],this._ready=(async()=>{const e=await m.Z.getStateAsync(),t="proxy"===e.pac.mode;this._showSpeedPromo=t;const i=this._activeBanner,o=await te(Object.assign({showSpeedPromo:t},e));if(!ie.isEqual(i,o)){this._activeBanner=o;for(const e of this._listeners)e(o,i)}})(),m.Z.onChange((({promotions:e,user:t})=>({user:Boolean(t.email),promotions:e})),(()=>{this.refresh()}))}addListener(e){this._listeners.push(e)}get(){return this._activeBanner}async getAsync(){return await this._ready,this._activeBanner}async refresh(){const e=await m.Z.getStateAsync(),t=this._activeBanner,i=await te(Object.assign({showSpeedPromo:this._showSpeedPromo},e));if(!ie.isEqual(t,i)){this._activeBanner=i;for(const e of this._listeners)e(i,t)}}removeListener(e){this._listeners=this._listeners.filter((t=>t!==e))}};var ne=i(2261);const se="undefined"!=typeof browser?browser:chrome,re=new class{constructor(){this._state=[],this._callbacks=[],se.runtime.connect({name:"permissions"}).onMessage.addListener((e=>{this._state=e,this._callbacks.forEach((t=>{t(e)}))})),(async()=>{this._state=await(0,g.Z)({type:"permissions.get"})})()}addListener(e){this._callbacks.push(e)}get(){return this._state}includes(e){return this._state.includes(e)}},ae=l({change:"change",connectionsNotEncrypted:"your_browsers_connections_are_not_encrypted",privacyProtected:"your_privacy_is_protected",protectionDisabled:"privacy_protection_disabled",startVpn:"start_vpn"});function le(){const{switchesView:e}=this;return d.dy`
  <style>
  ${c}
  :host > .In{
    width: 100%;
    height: 100%;
    white-space: nowrap;
    position: relative;
  }
  :host > .In.transition{
    transition: margin-left 0.25s;
  }
  :host > .In > .In{
    display: flex;
    width: 200%;
    height: 100%;
    align-items: center;
  }
  :host(.proxyEnabled) > .In{
    margin-left: -100%;
  }
  :host(.withPromo) > .In{
    height: auto;
  }

  :host index-home-switches{
    padding: 12px 22px 0;
    text-align: left;
  }
  :host index-home-promo{
    display: none;
  }
  :host(.withPromo) index-home-promo{
    display: block;
    border-bottom: 4px solid transparent;
  }

  .Inactive,
  .Active{
    flex: 1;
  }
  :host(.withPromo) .Inactive,
  :host(.withPromo) .Active{
    align-items: stretch;
  }

  .Inactive{
    text-align: center;
    white-space: normal;
  }
  :host(.withPromo) .Inactive{
    vertical-align: top;
  }
  .Inactive::before{
    content: '';
    display:block;
    background: url( '/images/global_protection_disabled.svg' ) 50% 0 no-repeat;
    background-size: auto 100%;
    width: 100%;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:114px;
  }
  :host(.withPromo) .Inactive::before{
    padding-top: 76px;
  }

  /** Active proxy */
  :host(.withPromo) .Active{
    padding-top: 9px;
  }
  .Active::before{
    content:' ';
    display:block;
    background: url( '/images/global_protection_enabled.svg' ) 50% 0 no-repeat;
    background-size: auto 100%;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:112px;
  }
  :host(.withPromo) .Active::before{
    padding-top: 91px;
  }

  .Inactive_Text{
    font-size: 14px;
    padding: 4px 28px 0;
    line-height: 17px;
  }
  .Inactive_Title{
    font-size: 18px;
    font-weight: 600;
    padding-top: 10px;
    color: var( --brand-burgundy );
  }
  :host(.withPromo) .Inactive_Title{
    padding-top: 0;
  }
  .Inactive_ButtonOut{
    padding-top: 24px;
  }
  :host(.withPromo) .Inactive_ButtonOut{
    padding-top: 10px;
  }
  .Inactive_Button{
    display:inline-block;
    vertical-align:top;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    min-width: 208px;
    height: 45px;
    line-height: 42px;
    border-radius: 4px;
    background: var( --brand-green );
    font-size: 17px;
    text-align: center;
    padding: 0 10px;
  }


  .Active_Text{
    font-size:18px;
    line-height: 1;
    padding: 27px 28px 0;
    color: var( --brand-green );
    text-align: center;
  }
  :host(.withPromo) .Active_Text{
    padding-top: 7px;
  }

  .Active_Country_Out{
    padding: 28px 20px 0;
  }
  :host(.withPromo) .Active_Country_Out{
    padding-top: 20px;
  }

  .Active_Country{
    cursor: pointer;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
    text-align: justify;
    height: 58px;
    padding: 0 20px;
    cursor:pointer;
  }
  .Active_Country:hover{
    background: #efefef;
  }
  .Active_Country > .In{
    display: table;
    height: 100%;
    width: 100%;
  }
  .Active_Country > .In > .E{
    display: table-cell;
    vertical-align: middle;
  }
  .Active_Country > .In > .E:first-child{
    width: 1px;
    padding-right: 12px;
  }
  .Active_Country > .In > .E:last-child{
    width: 1px;
  }
  .Active_Country img{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Active_Country_Name{
    font-size: 18px;
  }

  .ChangeButton{
    display:inline-block;
    vertical-align:top;
    font-size: 12px;
    border-radius: 4px;
    line-height: 18px;
    text-align: center;
    background: #fff;
    border: 1px solid #268328;
    color: #268328;
    padding: 0 8px;
  }

  .Rating{
    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 23px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    margin-left: auto;
    border-right: 15px solid transparent;
  }
  .Rating.r2{
    background-image: url( '/images/pings/2.svg' );
  }
  .Rating.r3{
    background-image: url( '/images/pings/3.svg' );
  }
  .Rating.r4{
    background-image: url( '/images/pings/4.svg' );
  }
  .Rating.r5{
    background-image: url( '/images/pings/5.svg' );
  }

  .SettingsIcon{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
  }
  :host(.withPromo) .SettingsIcon{
    top: calc(88px + 12px);
  }
  .SettingsIcon > .In{
    position: relative;
    border: 1px solid #bcbcbc;
    width: 38px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:38px;
    border-radius: 4px;
  }
  .SettingsIcon > .In::after{
    content: '';
    display: block;
    background: url( '/images/settings_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 17px;
    overflow:hidden;text-indent:-9999px;height:0;
    padding-top: 17px;
    top: calc(50% - 17px / 2);
    left: calc(50% - 17px / 2);
  }
  .SettingsIcon_GreenCircle{
    width: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:16px;
    background: var( --brand-green );
    border: 4px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: -11px;
    bottom: -11px;
  }
  .SettingsIcon_ClickArea{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    text-indent: -9999px;
    cursor: pointer;
  }

  </style>

  <index-home-promo .activeBanner="${this.activeBanner}"></index-home-promo>

  <div class="In ${"simple"!==e.type?"":"transition"}">
    <div class="In"><!--
   --><div class="Inactive">
        <div class="Inactive_Title">${ae.protectionDisabled}</div>
        <div class="Inactive_Text">${ae.connectionsNotEncrypted}</div>
  ${(()=>"simple"===e.type?d.dy`
        <div class="Inactive_ButtonOut"><!--
       --><div class="Inactive_Button" @click="${this.enableProxy}">
            ${ae.startVpn}
          </div><!--
     --></div>`:d.dy`
        <index-home-switches
          .proxyEnabled="${this.proxyEnabled}"
          .proxyCountry="${this.country}"
          .view="${e}"
          @proxyswitch="${this.proxySwitch}"
          @domainproxyswitch="${this.domainProxySwitch}"
          @countrychange="${this.countryChange}"
          @domaincountrychange="${this.domainCountryChange}">
        </index-home-switches>`)()}
      </div><!--
   --><div class="Active">
        <div class="Active_Text">${ae.privacyProtected}</div>
  ${(()=>"simple"!==e.type?d.dy`
          <index-home-switches
            .proxyEnabled="${this.proxyEnabled}"
            .proxyCountry="${this.country}"
            .view="${e}"
            @proxyswitch="${this.proxySwitch}"
            @domainproxyswitch="${this.domainProxySwitch}"
            @countrychange="${this.countryChange}"
            @domaincountrychange="${this.domainCountryChange}">
          </index-home-switches>`:d.dy`
          <div class="Active_Country_Out">
            <div class="Active_Country" @click="${this.openLocations}"><div class="In">
    ${(()=>{return this.country?d.dy`
              <div class="E"><!--
             --><img src="${e=this.country,"usw"===e&&(e="us"),"uk"===e&&(e="gb"),e?`/images/flags/${e}.svg`:"/images/empty.png"}" width="30" height="20" /><!--
           --></div>`:"";var e})()}
              <div class="E">
                <div class="Active_Country_Name">${this.countryName}</div>
              </div>
    ${e.rating?d.dy`
              <div class="E">
                <div class="Rating r${e.rating}"></div>
              </div>`:""}
              <div class="E"><div class="ChangeButton">${ae.change}</div></div>
            </div></div>
          </div>`)()}
      </div><!--
  --></div>
  </div>

  <div class="SettingsIcon">
    <div class="In"></div>
  ${(()=>this.settingsIconNewFeature?d.dy`
    <div class="SettingsIcon_GreenCircle"></div>`:"")()}
    <div class="SettingsIcon_ClickArea" @click="${this.openSettings}"></div>
  </div>`}class ce extends d.oi{render(){const e=(()=>{switch(this.state){case"bad":return"active";case"good":return"disabled";default:return""}})(),t=(()=>{switch(this.state){case"bad":return"disabled";case"good":return"active";default:return""}})();return d.dy`
    <style>
    :host{
      display: block;
      background: #3ab9ea; 
      top: 4px; 
      left: 4px;
      width: calc(100% - 8px); 
      height: 82px;
      position: absolute;
      z-index: 4;
      border-radius: 4px;
      color:#fff;
      text-align: center;
    }

    .PollBanner_Title{
      padding: 10px 5px 10px;
      font-size: 16px;
      font-weight: bold;
    }
    .PollBanner_Title a{
      color: #fff;
      text-decoration: underline;
    }
    .PollBanner_Title a:hover{
      text-decoration: none;
    }
    .PollBanner_Buttons{
      font-size: 13px;
      padding: 0 20px 0;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
    }
    .PollBanner_Button{
      min-width: 113px;
      text-transform: uppercase;
      cursor: pointer;
      border: 1px solid #fff;
      line-height: 24px;
      padding: 0 10px;
      border-radius: 4px;
      user-select: none;
    }
    .PollBanner_Button.active{
      background: #fff;
      color: #3ab9ea;
      cursor: default;
    }
    .PollBanner_Button.disabled{
      cursor: default;
      opacity: 0.5;
    }
    </style>

    <div class="PollBanner">
      <div class="PollBanner_Title">
        ${(()=>"bad"===this.state?d.dy`
            Oh no :( Please 
            <a 
              href="https://forms.gle/CEKgoPQTZqZEMQ427" 
              target="_blank"
              @click="${this.linkClick}"
            >tell us</a> 
            what’s wrong`:"good"===this.state?"Thank you for your feedback!":"How was your first experience with Browsec?")()}
      </div>
      <div class="PollBanner_Buttons">
        <div class="E"><div class="PollBanner_Button ${t}" @click="${this.clickGreat}">
          Great!
        </div></div>
        <div class="E"><div class="PollBanner_Button ${e}" @click="${this.clickBad}">
          Not so good
        </div></div>
      </div>
    </div>`}static get properties(){return{state:{type:String}}}constructor(){super(),this.state="open"}clickBad(){"open"===this.state&&(this.state="bad",o.Z.full({category:"Exp254_feedback_notgood"}))}clickGreat(){"open"===this.state&&(this.state="good",o.Z.full({category:"Exp254_feedback_great"}))}linkClick(){o.Z.full({category:"Exp254_feedback_tellus"})}}customElements.define("poll-banner",ce);var de=i(8669);const pe=Object.freeze(["autocomplete","colspan","height","href","name","rowspan","src","target","type","width"]);const ue=(e,t=(e=>e))=>{let i=(e=>Object.assign({},e,{type:"string"==typeof e.tag?"element":"node"}))(e);if("node"===i.type){if("string"!=typeof i.text)throw new Error("createElement called without text property");return document.createTextNode(i.text)}const{attributes:o,tag:n}=i;let s=document.createElement(n);if(i.class){let e=t(i.class);s.setAttribute("class",e)}if(i.style&&s.setAttribute("style",i.style),o)for(const[e,t]of Object.entries(o)){!pe.includes(e)&&!e.startsWith("data-")||("src"===e&&"img"!==n||s.setAttribute(e,t))}if(i.node&&i.node(s),i.text&&(s.textContent=i.text),i.children){i.children.map((e=>ue(e,t))).forEach((e=>{s.appendChild(e)}))}return s},he=ue,ge=e=>{if("number"!=typeof e)throw new Error(`Not numeric value ${e.toString()} passed to numberToAlphabetLetter function`);return String.fromCharCode(e+65)};class me extends HTMLElement{constructor(){super(),this.hasRenderedDom=!1;const e=this.attachShadow({mode:"open"}),t=de.dy`
    <style>
    ${c}
    :host{
      display:block;
      height: 82px;
      overflow: hidden;
      margin: 4px 4px 0;
      position: relative;
    }
    a{
      display: block;
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 3;
    }
    </style>`;(0,de.sY)(t,e)}renderDomFromJson({jsonStructure:e,link:t,promotionId:i}){const n=this.shadowRoot;if(this.hasRenderedDom)for(const e of n.children)"style"!==e.tagName.toLowerCase()&&e.remove();this.hasRenderedDom=!0;const s=he(e),r=document.createElement("a");r.href=t,r.target="_blank",i&&r.addEventListener("click",(()=>{o.Z.partial({category:"banner",action:"click",label:"banner_promo_"+i})})),(async()=>{const{experiments:e}=await m.Z.getStateAsync(),t=e[N().experiments.pollBanner.id];if(t){const e=ge(Number(t));r.addEventListener("click",(()=>{o.Z.full({category:"Exp254_redbannerclick",action:e})}))}})(),n.append(s),n.append(r)}}customElements.define("downloadable-promo",me);const xe=l({continueUsing:"continue_using_premium",goAheadAndRenewIt:"go_ahead_and_renew_it",premiumIsAboutToExpire:"your_premium_is_about_to_expire"});class ve extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      margin: 1px 0 0;
      background: #fcd0cb;
      border-bottom: 1px solid var( --brand-burgundy );
      padding: 10px 10px 10px;
    }
    .Close{
      position: absolute;
      top: -5px;
      right: -1px;
      color: var( --brand-burgundy );
      cursor: pointer;
      width: 10px;
      padding-top: 10px;
      border: 11px solid transparent;
      height: 0;
      overflow: hidden;
      background: url( '/images/popup_close_2.svg#pink' ) 0 0 no-repeat;
      background-size: 100% 100%;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_2.svg#white' );
    }
    .Close::after{
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 1px;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
    }
  
    .Title{
      color: var( --brand-burgundy );
      font-size: 14px;
      text-align: center;
    }
    .Description{
      color: #1c304e;
      font-size: 12px;
      text-align: center;
    }
  
    .Link_Out{
      text-align: center;
      font-size: 12px;
      padding-top: 5px;
    }
    .Link{
      display:inline-block;
      vertical-align:top;
      cursor:pointer;
    }
    .Link:link,
    .Link:visited{
      text-decoration: none;
      border-bottom:1px #1c304e solid;
      color: #1c304e;
    }
    .Link:hover{
      color: #fff;
      border-bottom:1px solid #fff;
    }
    </style>
    
    <div class="Close" @click="${this.expirationClose}"></div>
    <div class="Title">${xe.premiumIsAboutToExpire}</div>
    <div class="Description">${xe.goAheadAndRenewIt}</div>
    <div class="Link_Out"><!--
   --><a class="Link" href="${this.expirationPremiumLink}" target="_blank">
        ${xe.continueUsing}
      </a><!--
 --></div>`}get expirationPremiumLink(){return T({action:e=>Object.assign(e,{utm_source:"chromium extension",utm_campaign:"default_campaign"}),storeState:m.Z.getStateSync(),url:Z.Z.base+"/en/orders/new?plan_id=annual"})}expirationClose(){this.dispatchEvent(new CustomEvent("expirationclose"))}}customElements.define("premium-expiration-soon",ve);const fe=({prices:e,priceTrial:t})=>{const i=e.slice().sort(((e,t)=>e.value/e.duration-t.value/t.duration))[0],o=e.slice().sort(((e,t)=>t.value/t.duration-e.value/e.duration))[0];let{currency:n,oldValue:s}=o;"USD"===n&&(n="$");let r=Math.floor(100*i.value/i.duration)/100,a=s?Math.floor(100*s/o.duration)/100:0;const l=t||0;return{currency:n,duration:i.duration,oldPrice:a,price:r,trialDays:l}},be=l({getTurboSpeed:"get_turbo_speed",moneyBackGuarantee:"7_days_money_back_guarantee",upgradeConnectionSpeed:"upgrade_connection_speed"});class ye extends((0,x.$)(m.Z)(d.oi)){render(){const e=(0,r.Z)("from_only_X_per_month").replace(/XXX/g,String(this.price));return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      position: relative;
      background: #c0392b;
      margin: 6px 6px 0 6px;
      border-radius: 4px;
      height: 82px;
      color: #fff;
      text-align: center;
      line-height: 1;
    }
    :host > .In{
      display: table;
      height: 100%;
      width: 100%;
    }
    :host > .In > .In{
      display: table-cell;
      vertical-align: middle;
      padding: 0 7px;
    }
    .Title{
      text-transform: uppercase;
      font-size: 23px;
      font-weight: bold;
    }
    .Price{
      color: #f1c40f;
      font-size: 18px;
      font-weight: bold;
      padding: 3px 0 7px;
    }
    .Days{
      color: #e1afab;
      font-size: 12px;
    }
    .Link{
      display: block;
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      white-space: nowrap;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
    }
    </style>
    
    <div class="In"><div class="In">
      <div class="Title">${be.upgradeConnectionSpeed}</div>
      <div class="Price">${e}</div>
      <div class="Days">${be.moneyBackGuarantee}</div>
    </div></div>
    <a class="Link" @click=${this.linkClick} href="${this.premiumLink}" target="_blank">
      ${be.getTurboSpeed}
    </a>`}static get properties(){return{price:{type:Number}}}get premiumLink(){return T({action:e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"banner",utm_campaign:"default_campaign"}),storeState:m.Z.getStateSync(),url:Z.Z.premium})}stateChanged({prices:e,priceTrial:t}){this.price=fe({prices:e,priceTrial:t}).price}async linkClick(){var e,t;o.Z.partial({category:"banner",action:"click",label:"banner_speed_new"});const{experiments:i}=m.Z.getStateSync(),n=i[N().experiments.pollBanner.id];if(n){const e=ge(Number(n));o.Z.full({category:"Exp254_redbannerclick",action:e})}await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}}customElements.define("upgrade-speed-banner",ye);const{_:we}=self;class ke extends HTMLElement{constructor(){super(),this._activeBanner=null,this.expirationClose=this.expirationClose.bind(this);const e=this.attachShadow({mode:"open"}),t=de.dy`
    <style>
    ${c}
    :host{
      display: block;
      height:82px;
    }
    </style>`;(0,de.sY)(t,e)}get activeBanner(){return this._activeBanner}set activeBanner(e){we.isEqual(this._activeBanner,e)||(this._activeBanner=e,this.renderActivePromo(this.activeBanner))}async expirationClose(){var e,t;const{user:i}=await m.Z.getStateAsync(),o=null===(e=i.loginData)||void 0===e||null===(t=e.subscription)||void 0===t?void 0:t.paidUntil;if(!o)return;let n=new Date(o);await ee.Z.set("userClosedWarnToPremiumEndDate",String(n)),oe.refresh()}async renderActivePromo(e){const t=this.shadowRoot;for(const e of t.children)"style"!==e.tagName.toLowerCase()&&e.remove();const i=(()=>{if(e){if("premium expiration"===e.type){const e=document.createElement("premium-expiration-soon");return e.addEventListener("expirationclose",this.expirationClose),e}if("poll banner"===e.type){return document.createElement("poll-banner")}if("custom"===e.type){const t=document.createElement("downloadable-promo"),{promotionId:i,banner:{link:o,structure:n}}=e;return t.renderDomFromJson({link:o,jsonStructure:n,promotionId:i}),t}return"speed"===e.type?document.createElement("upgrade-speed-banner"):void 0}})();if(i&&t.append(i),"poll banner"===(null==e?void 0:e.type)){const{experiments:e}=await m.Z.getStateAsync(),t=e[N().experiments.pollBanner.id];if(t){const e=ge(Number(t));o.Z.full({category:"Exp254_2ndopen",action:e})}ee.Z.set("Experiment 254: phase",3)}if("custom"===(null==e?void 0:e.type)){const{promotionId:t}=e;o.Z.partial({category:"banner",action:"show",label:"banner_promo_"+t})}"speed"===(null==e?void 0:e.type)&&o.Z.partial({category:"banner",action:"show",label:"banner_speed_new"})}}customElements.define("index-home-promo",ke);const _e=l({otherWebsites:"other_websites"}),Ee=e=>("usw"===e&&(e="us"),"uk"===e&&(e="gb"),e?`/images/flags/${e}.svg`:"/images/empty.png");class Ce extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
    }
    .Row::after{
      content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
    }
    .Row + .Row{
      padding-top: 8px;
    }

    .Switch,
    .Flag_Out{
      float: right;
      width: 61px;
      padding-left: 11px;
      min-height: 1px;
    }

    .Name{
      white-space: nowrap;
      overflow: hidden;
      line-height: 26px;
      text-overflow: ellipsis;
    }

    .Flag{
      border: 1px solid #bcbcbc;
      border-radius: 3px;
      padding: 2px 27px 2px 2px;
      cursor: pointer;
      position: relative;
    }
    .Flag:hover{
      border-color: #888;
    }
    .Flag::after{
      content: '';
      display: block;
      background: url( '/images/flag_arrow_right.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 5px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:9px;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -4px;
    }
    .Flag img{
      display: block;
      border-radius: 4px;
      filter: saturate(135%);
      opacity:0.7;
      border: 1px solid rgba(0, 0, 0, 0.22);
    }
    </style>

    <div class="Row">
      <div class="Switch">
        <c-switch .on="${"complex on"===this.view.type}" @click="${this.domainProxySwitch}"></c-switch>
      </div>
      <div class="Flag_Out">
  ${(()=>{if(!("country"in this.view))return"";const e=this.view.country;return d.dy`
        <div class="Flag" @click="${this.domainCountryChange}">
          <img src="${Ee(e)}" width="30" height="20" alt="${e}"/>
        </div>`})()}
      </div>
      <div class="Name">${this.view.view}</div>
    </div>

    <div class="Row">
      <div class="Switch">
        <c-switch .on="${this.proxyEnabled}" @click="${this.proxySwitch}"></c-switch>
      </div>
      <div class="Flag_Out">
  ${(()=>this.proxyEnabled?d.dy`
        <div class="Flag" @click="${this.countryChange}">
          <img src="${Ee(this.proxyCountry)}" width="30" height="20" alt="${this.proxyCountry}"/>
        </div>`:"")()}
      </div>
      <div class="Name">${_e.otherWebsites}</div>
    </div>`}static get properties(){return{proxyEnabled:{type:Boolean},proxyCountry:{type:String},view:{type:Object}}}constructor(){super(),this.view={}}proxySwitch(){this.dispatchEvent(new CustomEvent("proxyswitch"))}domainProxySwitch(){this.dispatchEvent(new CustomEvent("domainproxyswitch"))}countryChange(){this.dispatchEvent(new CustomEvent("countrychange"))}domainCountryChange(){this.dispatchEvent(new CustomEvent("domaincountrychange"))}}customElements.define("index-home-switches",Ce);const Pe=N().proxy.defaultCountry||"nl",Se=async()=>{let e=await ee.Z.get("newSettingsFeatureTimezoneChange1");return!("boolean"==typeof e&&!e)||Boolean(m.Z.getStateSync().webrtcBlock&&!re.includes("privacy"))};class $e extends((0,x.$)(m.Z)(d.oi)){render(){return le.call(this)}static get properties(){return{activeBanner:{type:Object},countries:{type:Array},country:{type:String},countryName:{type:String},proxyEnabled:{type:Boolean},settingsIconNewFeature:{type:Boolean},switchesView:{type:Object}}}constructor(){super(),this.activeBanner=oe.get(),this.switchesView={type:"simple",rating:void 0},this.countries=[],this.proxyEnabled=!1,this.settingsIconNewFeature=!1,this.activeBannerListener=this.activeBannerListener.bind(this)}async connectedCallback(){super.connectedCallback(),oe.addListener(this.activeBannerListener),this.settingsIconNewFeature=await Se()}disconnectedCallback(){oe.removeListener(this.activeBannerListener)}firstUpdated(e){var t,i;if(super.firstUpdated(e),(async()=>{this.settingsIconNewFeature=await Se()})(),!(null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelector)||void 0===i?void 0:i.call(t,"index-home-promo")))throw new Error("index-home: index-home-promo element does not exist");this.classList.toggle("proxyEnabled",this.proxyEnabled),this.classList.toggle("withPromo",Boolean(this.activeBanner))}updated(e){e.has("activeBanner")&&this.classList.toggle("withPromo",Boolean(this.activeBanner)),e.has("proxyEnabled")&&this.classList.toggle("proxyEnabled",this.proxyEnabled)}stateChanged({domain:e,proxyServers:t,pac:i,ping:o,user:n}){const r=Array.from(n.premium?t.premiumCountries():t.freeCountries());this.countries=r,this.country=i.country,this.proxyEnabled="proxy"===i.mode,(()=>{const{country:t,filters:a}=i,{premium:l}=n,c=(()=>{var e;if(o.length&&t)return null===(e=o.find((({country:e,premium:i})=>e===t&&i===l)))||void 0===e?void 0:e.mark})();if(!e)return void(this.switchesView={type:"simple",rating:c});const d=(0,ne.Z)(a,e);if(d){const{country:e,proxyMode:t}=d,i=d.value instanceof RegExp?d.value.toString():d.value,o=s.ZP.toUnicode(i);if(!t)return void(this.switchesView={domain:i,type:"complex off",view:o});this.switchesView={country:r.includes(e)?e:Pe,domain:i,type:"complex on",view:o}}else this.switchesView={type:"simple",rating:c}})()}get countryName(){return this.country?(0,r.Z)("country_name_"+this.country.toUpperCase()):""}activeBannerListener(e){this.activeBanner=e||null}countryChange(){m.Z.dispatch({type:"Page: set",page:"index:locations"})}domainProxySwitch(){let{domain:e}=this.switchesView;n.Z.siteFilters.toggle(e)}domainCountryChange(){let{domain:e}=this.switchesView;m.Z.dispatch({type:"Page: set",page:"index:locations:"+e})}async enableProxy(){await n.Z.enable()}openLocations(){m.Z.dispatch({type:"Page: set",page:"index:locations"})}async openSettings(){await ee.Z.set("newSettingsFeatureTimezoneChange1",!1),m.Z.dispatch({type:"Page: set",page:"index:settings"})}proxySwitch(){this.proxyEnabled?n.Z.disable():n.Z.enable()}}customElements.define("index-home",$e);const Be=(e,t,i)=>e.premium&&!t?"premium":e.code===i?"current":"change";function Le(e){let{key:t}=e;if("ArrowDown"!==t&&"ArrowUp"!==t)if("Enter"!==t)this.charsBuffer.keydownListener(e);else{if(!this.highlightedCountry)return;let{code:e}=this.highlightedCountry,t=Be(this.highlightedCountry,this.premiumUser,this.country);if("current"===t)return;this.countryClick({detail:{mode:t,country:e}})}else{e.preventDefault();let i=(()=>{let e=this.namesList.length;const i=this.highlightedCountry;if(!i)return"ArrowUp"===t?e-1:0;let o=this.namesList.findIndex((({code:e,premium:t})=>i.code===e&&i.premium===t));return o+="ArrowDown"===t?1:-1,(o+e)%e})(),o=this.namesList[i];this.highlightedCountry={code:o.code,premium:o.premium};let n=this.scrollElement.scrollTop,s=this.scrollElement.offsetHeight,r=n+s,a=o.element.offsetHeight,l=o.element.offsetTop,c=l+a;if(l>=n&&c<=r)return;let d=l>=n?c-s+4:l-2;this.scrollElement.scrollTop=d}}var Ie=i(9174);const ze=l({virtualLocations:"virtual_locations",serversInVirtualLocations:"N_servers_in_N_virtual_Locations"});function Te(){const e=ze.serversInVirtualLocations.replace(/AAA/g,"600+").replace(/BBB/g,String(this.countries.filter((({premium:e})=>e)).length));return d.dy`
  <style>
  ${c}
  :host > .In{
    overflow: auto;
    height: 100%;
  }

  .Head{
    padding: 11px 12px;
    text-align: center;
    position: relative;
  }
  .Head > .T{
    display:inline-block;
    vertical-align:top;
    position: relative;
  }
  .Head_Title{
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  .ServerCount{
    font-size: 12px;
    line-height: 1.25;
    padding-top: 2px;
  }

  .Back{
    position: absolute;
    left: 12px;
    top: 16px;
    font-size: 14px;
    line-height: 1.2;
    padding: 0 0 0 18px;
    cursor: pointer;
  }
  .Back::before{
    content: '';
    display: block;
    background: url('/images/arrow_left.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    width: 9px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 16px;
    position: absolute;
    left: 0;
    top: calc(50% - 8px);
  }

  .Helper{
    position: absolute;
    left: calc(100% + 5px);
    top: calc(50% - 8px);
    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 16px;
    cursor: pointer;
    text-align: left;
  }
  .Helper:hover{
    background-image: url( '/images/information_green.svg' );
  }
  .Helper::after{
    content: '';
    display: block;
    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .MissingLocation{
    color: var( --brand-green );
    padding: 5px 0 0;
    font-size: 13px;
  }
  .MissingLocation a{
    color: var( --brand-green );
    text-decoration: none;
    border-bottom: 1px solid var( --brand-green );
  }
  .MissingLocation a:hover{
    border-bottom-color: transparent;
  }

  .Sections{
    padding: 0px 12px 12px;
  }
  </style>

  <div class="In">
    <div class="Head"><!--
   --><div class="Back" @click="${this.back}">Back</div><!--
   --><div class="T">
        <div class="Head_Title">${ze.virtualLocations}</div>
        <div class="Helper" @click="${this.openHelp}">?</div>
      </div><!--
   --><div class="ServerCount">${e}</div>
    </div>
    <div class="Sections">
  ${this.countries.map((e=>d.dy`<index-locations-element
      @countryclick="${this.countryClick}"
      @favorite="${this.favorite}"
      @mousemove="${this.elementHighlight(e)}"
      .data="${e}"
      .highlighted="${((e,t)=>Boolean(t&&t.code===e.code&&t.premium===e.premium))(e,this.highlightedCountry)}"
      .mode="${Be(e,this.premiumUser,this.country)}"
    ></index-locations-element>`))}
    </div>
  </div>`}function Ze(){return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    padding: 0 7px 0 10px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  :host(.highlight){
    background: #f7f8fc;
  }
  :host(.current){
    cursor: default;
  }
  :host(.current),
  :host(.current.highlight){
    background: #f0f5f0;
  }
  
  :host > .In{
    display: flex;
    align-items: center;
    height: 40px;
    background: url( '/images/favorites/hovered.svg' ) 0 -5000px no-repeat;
  }
  :host > .In > .E:first-child{
    width: 32px;
    padding: 0 10px 0 0;
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host > .In > .E.country{
    padding-right: 5px;
    flex-grow: 1;
  }
  :host > .In > .E.mark{
    width: 23px;
    padding-left: 10px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  :host > .In > .E.favorite{
    width: 19px;
    padding-left: 10px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .Flag{
    display: block;
    border-radius: 4px;
    filter: saturate(135%);
    opacity:0.7;
    border: 1px solid rgba(0, 0, 0, 0.22);
  }
  .Country{
    font-size: 13px;
    line-height: 1.2;
    color: #333;
  }

  .Favorite{
    background: url( '/images/favorites/static.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 13px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 12px;
    cursor: pointer;
    border: 3px solid transparent;
  }
  .Favorite:hover{
    background-image: url( '/images/favorites/hovered.svg' );
  }
  .Favorite.favorited,
  .Favorite.favorited:hover{
    background-image: url( '/images/favorites/starred.svg' );
  }

  .Mark{
    display:inline-block;
    vertical-align: middle;
    width: 23px;
    overflow:hidden;
    font-size:0;text-indent:-9999px;height:0;
    padding-top: 12px;
    background: url( '/images/pings/1.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .Mark.mark2{
    background-image: url( '/images/pings/2.svg' );
  }
  .Mark.mark3{
    background-image: url( '/images/pings/3.svg' );
  }
  .Mark.mark4{
    background-image: url( '/images/pings/4.svg' );
  }
  .Mark.mark5{
    background-image: url( '/images/pings/5.svg' );
  }
  </style>

  <div class="In" @click="${this.fullElementClick}">
    <div class="E">
      <img class="Flag" src="${e=this.data.code,"usw"===e&&(e="us"),"uk"===e&&(e="gb"),e?`/images/flags/${e}.svg`:"/images/empty.png"}" width="30" height="20"/>
    </div>
    <div class="E country">
      <div class="Country">${this.data.name}</div>
    </div>
  ${(()=>this.data.delay?d.dy`
    <div class="E mark"><!--
   --><div class="Mark mark${this.data.mark}">${this.data.mark}</div><!--
 --></div>`:"")()}
  ${(()=>"boolean"!=typeof this.data.favorited?"":d.dy`
    <div class="E favorite">
      <div
        class="Favorite${this.data.favorited?" favorited":""}"
        @click="${this.favoritesClick}"></div>
    </div>`)()}
  </div>`;var e}class De extends d.oi{render(){return Ze.call(this)}static get properties(){return{data:{type:Object},highlighted:{type:Boolean},mode:{type:String}}}constructor(){super(),this.data={},this.highlighted=!1,this.mode=""}updated(e){if(e.has("highlighted")){let t=this.highlighted;t!==e.get("highlighted")&&this.classList.toggle("highlight",t)}e.has("mode")&&(this.classList.toggle("current","current"===this.mode),this.classList.toggle("premium","premium"===this.mode))}favoritesClick(){this.dispatchEvent(new CustomEvent("favorite",{detail:{country:this.data.code,favorited:!this.data.favorited}}))}fullElementClick(e){const t=e.target instanceof HTMLElement&&e.target.classList.contains("Favorite");"current"===this.mode||t||this.dispatchEvent(new CustomEvent("countryclick",{detail:{mode:this.mode,country:this.data.code}}))}}customElements.define("index-locations-element",De);const{_:Oe}=self,Fe="undefined"!=typeof browser?browser:chrome,Ae=e=>{const t=(0,r.Z)("country_name_"+e.toUpperCase());if(t)return t;const i=Fe.i18n.getUILanguage(),n=Fe.runtime.getManifest().version,s="failed to look up country name for: "+e+" with locale: "+i+" at popup.js";return Ie.Z.warn(s),o.Z.partial({category:"error",action:n,label:s,value:"0",noninteraction:!1}),e.toUpperCase()||"N/A"};class Ne extends((0,x.$)(m.Z)(d.oi)){render(){return Te.call(this)}static get properties(){return{countries:{type:Array},country:{type:String},domain:{type:String},highlightedCountry:{type:Object},premiumUser:{type:Boolean},proxyCountry:{type:String},proxyList:{type:Array}}}constructor(){super(),this.elementHighlight=this.elementHighlight.bind(this),this.keydownListener=Le.bind(this),this.country=null,this.domain="",this.highlightedCountry=null,this.proxyCountry="",this.proxyList=[]}async connectedCallback(){super.connectedCallback();const e=this.shadowRoot;this.charsBuffer=new $,document.addEventListener("keydown",this.keydownListener),await this.forceRenderAndGenerateNamesList();const t=e.children,i=t[t.length-1];if(!i)throw new Error("index-locations: scrollElement does not exist");this.scrollElement=i,this.charsBuffer.addListener((e=>{const t=this.namesList.find((({name:t})=>t.startsWith(e)));if(!t)return;const{code:i,element:o,premium:n}=t;this.highlightedCountry={code:i,premium:n},this.scrollElement.scrollTop=o.offsetTop-2}));const o=(()=>{const t=e.querySelector("div.Head");if(!t)throw new Error("index-locations: div.Head does not exist");return t.offsetHeight})();{const t=e.querySelector("div.Sections");if(!t)throw new Error("index-locations: div.Sections does not exist");t.style.cssText=`top:${o}px;`}this.domain||(0,g.Z)({type:"сounters.increase",property:"popup: location page shows"})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownListener)}updated(e){var t;const i=Array.from(e.keys());if(e.has("countries")&&this.forceRenderAndGenerateNamesList(),!i.some((e=>["domain","proxyCountry","proxyList"].includes(e))))return;const{domain:o,proxyCountry:n,proxyList:s}=this;this.country=o?(null===(t=s.find((e=>e.value===o)))||void 0===t?void 0:t.country)||"":n}stateChanged(e){const{pac:t,user:i}=e;this.countries=((e,t)=>{const{favorites:i,ping:o,proxyServers:n,user:s}=e,r=s.premium,a=[];for(const[e,s]of n){const n=t(e);if(!r){const t=s.free;if(Array.isArray(t)&&t.length){const t={id:e,code:e,name:n,premium:!1},i=o.find((({country:t,premium:i})=>t===e&&!i));if(i){const{delay:e,mark:o}=i;Object.assign(t,{delay:e,mark:o})}a.push(t)}}{const t=s.premium;if(Array.isArray(t)&&t.length){const t={id:e+"_premium",code:e,name:n+" (Premium)",premium:!0};r&&(t.favorited=i.includes(e));const s=o.find((({country:t,premium:i})=>t===e&&i));if(s){const{delay:e,mark:i}=s;Object.assign(t,{delay:e,mark:i})}a.push(t)}}}return a.sort(((e,t)=>Boolean(e.favorited)!==Boolean(t.favorited)?e.favorited?-1:1:e.premium!==t.premium?e.premium?1:-1:e.name<t.name?-1:e.name>t.name?1:0))})(e,Ae),this.premiumUser=i.premium,this.proxyCountry="proxy"===t.mode?t.country:null,this.proxyList=t.filters.filter((({disabled:e,proxyMode:t})=>!e&&t))}back(){m.Z.dispatch({type:"Page: set",page:"index:home"})}async countryClick({detail:{mode:e,country:t}}){if("change"===e)this.domain?await n.Z.siteFilters.changeCountry({domain:this.domain,country:t}):(await n.Z.setCountry(t),o.Z.partial({category:"extension",action:"change_country",label:t})),await new Promise((e=>{setTimeout(e,500)})),m.Z.dispatch({type:"Page: set",page:"index:home"});else if("premium"===e){const e=document.createElement("popup-premium");e.country=t,e.initiator="premium locations",e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});const i=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});await new Promise((e=>{i.onfinish=e})),e.style.cssText=""}}elementHighlight({premium:e,code:t}){return i=>{if(!Boolean(i.movementX||i.movementY))return;const o={premium:e,code:t};Oe.isEqual(this.highlightedCountry,o)||(this.highlightedCountry=o)}}favorite({detail:{favorited:e,country:t}}){e?w.add(t):w.remove(t)}async forceRenderAndGenerateNamesList(){const e=this.shadowRoot;await this.requestUpdate(),this.namesList=(()=>{var t;const i=this.countries.map((({code:e,name:t,premium:i})=>({code:e,name:t.toLowerCase(),premium:i}))),o=null===(t=e.querySelector("div.Sections"))||void 0===t?void 0:t.children,n=[];for(const e of o)"index-locations-element"===e.tagName.toLowerCase()&&n.push(e);return i.map(((e,t)=>Object.assign({element:n[t]},e)))})()}async openHelp(){const e=document.querySelector("div.MainContainer");if(!e)return;const t=document.createElement("popup-locations-information");t.style.cssText="opacity:0",e.appendChild(t);const i=t.animate([{opacity:0},{opacity:1}],{duration:400,easing:"linear"});await new Promise((e=>{i.onfinish=e})),t.style.cssText=""}}customElements.define("index-locations",Ne);const Re=e=>(0,g.Z)({type:"ShowedOffers.includes",offer:e}),Me=e=>(0,g.Z)({type:"ShowedOffers.push",offer:e}),Ve=l({changeLocation:"change_location",contactUs:"contact_us",home:"home",smartSettings:"smart_settings"});function He(){return d.dy`
  <style>
  ${c}
  a:link,
  a:visited{
    text-decoration: none;
    cursor: pointer;
    color: #7a7c7f;
  }
  a:hover{
    text-decoration: none;
    color: var( --brand-green );
  }

  :host{
    display: block;
    padding-top: 6px;
    margin-right: 70px;
  }
  :host > .E{
    display:inline-block;
    vertical-align:top;
    position: relative;
    color: #7a7c7f;
    cursor: pointer;
    font-size: 12px;
    line-height: 30px;
    margin: 0 0 0 17px;
  }
  :host > .E:hover{
    color: var( --brand-green );
  }
  :host > .E:first-of-type{
    margin-left: 0;
  }
  :host > .E.selected{
    color: var( --brand-green );
    cursor: default;
  }

  :host > .E::before{
    font-size: 14px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 30px;
  }

  :host > .E.home::before{
    content: '';
    display:inline-block;
    vertical-align:middle;
    background: url( '/images/menu/home.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 10px;
    position: static;
    margin-top: -3px;
    border-right: 3px solid transparent;
  }
  :host > .E.home.selected::before,
  :host > .E.home:hover::before{
    background-image: url( '/images/menu/home.svg#green' );
  }

  :host > .E.smartSettings{
    position: relative;
    padding-right: 21px;
    background: url( '/images/menu/settings_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.smartSettings::before{
    content: '';
    display:inline-block;vertical-align:middle;
    background: url( '/images/menu/settings_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:11px;
    position: static;
    margin-top: -3px;
    padding-right: 3px;
  }
  :host > .E.smartSettings:after{
    content: '';
    display: block;
    background: url( '/images/beta.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -16px;
    width: 18px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:18px;
  }
  :host > .E.smartSettings.selected::before,
  :host > .E.smartSettings:hover::before{
    background-image: url( '/images/menu/settings_green.svg' );
  }

  :host > .E.icon{
    width: 32px;
    min-height: 30px;
  }
  :host > .E.icon a{
    display: block;
    width: 32px;
    height: 0;
    padding-top: 32px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: calc(50% - 16px);
    margin-top: -1px;
    border-radius: 50%;
  }
  :host > .E.icon a::before{
    content: '';
    display: block;
    position: absolute;
  }
  :host > .E.icon a:focus{
    background-color: #e6e6e6;
  }

  :host > .E.support{
    margin-left: 7px;
    background: url( '/images/menu/mail_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.support a::before{
    background: url('/images/menu/mail_grey.svg') 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow: hidden;
    padding-top: 9px;
    height: 0;
    top: calc(50% - 4px);
    left: calc(50% - 6px);
    margin-top: 1px;
  }
  :host > .E.support a:hover::before{
    background-image: url( '/images/menu/mail_green.svg' );
  }

  :host > .E.facebook{
    margin-left: 0;
    background: url( '/images/menu/facebook_green.svg' ) 0 -5000px no-repeat;
  }
  :host > .E.facebook a::before{
    background: url( '/images/menu/facebook_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 8px;
    overflow: hidden;
    padding-top: 14px;
    height: 0;
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 4px);
    margin-top: 1px;
  }
  :host > .E.facebook a:hover::before{
    background-image: url( '/images/menu/facebook_green.svg' );
  }
  </style><!--
--><div class="E home ${this.homePage?"selected":""}" @click="${this.goHome}"><!--
 -->${Ve.home}<!--
--></div><!--
--><div
    class="E smartSettings ${this.filtersPage?"selected":""}"
    @click="${this.openSettings}"
    @contextmenu="${this.openSettings}"><!--
 -->${Ve.smartSettings}<!--
--></div><!--
--><div class="E icon support">
    <a href="${this.contactUsUrl}" target="_blank">
      ${Ve.contactUs}
    </a>
  </div><!--
--><div class="E icon facebook">
    <a href="${this.facebookUrl}" target="_blank">Facebook</a>
  </div>`}class Ue extends((0,x.$)(m.Z)(d.oi)){render(){return He.call(this)}static get properties(){return{containsFilter:{type:Boolean},domain:{type:String},facebookUrl:{type:String},filtersPage:{type:Boolean},homePage:{type:Boolean}}}constructor(){super(),this.domain=null,this.filtersPage=!1,this.homePage=!1}connectedCallback(){super.connectedCallback();const e=this.shadowRoot;for(const t of e.childNodes)t.nodeType!==Node.ELEMENT_NODE&&t.remove();const t=e.querySelectorAll("a");for(const e of t)e.addEventListener("click",(async()=>{var e,t;await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}))}disconnectedCallback(){super.disconnectedCallback(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick)}stateChanged({domain:e,pac:t,page:i}){this.containsFilter=(()=>{if(!e)return!1;return t.filters.filter((e=>!e.disabled&&"regex"!==e.format)).map((e=>e.value)).some((t=>t===e||e.endsWith("."+t)))})(),this.domain=(()=>{if(!e)return null;let i=t.filters.filter((e=>{let{disabled:t,format:i}=e;return!t&&"regex"!==i}));if(i.some((({value:t})=>t===e)))return e;let o=i.find((({format:t,value:i})=>"domain"===t&&e.endsWith("."+i)));if(o)return o.value;let n=self.domainZoneList.find((t=>e.endsWith("."+t)));return n?e.slice(0,-(n.length+1)).split(".").pop()+"."+n:e})(),this.filtersPage=(()=>{const e=i.split(":");return"index"===e[0]&&"filters"===e[1]})(),this.homePage=(()=>{const e=i.split(":");return"index"===e[0]&&"home"===e[1]})()}get contactUsUrl(){return T({storeState:m.Z.getStateSync(),url:Z.Z.contactUs})}get facebookUrl(){return"https://www.facebook.com/BrowsecVPN"}goHome(){this.homePage||m.Z.dispatch({type:"Page: set",page:"index:home"})}async openSettings(e){if(e.preventDefault(),this.documentClick)return;(0,g.Z)({type:"сounters.increase",property:"popup: menu: smart settings click"}),(async()=>{if(await Re("smart settings"))return;Me("smart settings");const{pac:e}=await m.Z.getStateAsync();e.filters.length||document.body.append(document.createElement("popup-help"))})();const{left:t}=e.target.getBoundingClientRect(),i=document.body.clientWidth-t,o=document.createElement("context-menu");o.style.cssText=`left:${t}px;max-width:${i}px;`,o.containsFilter=this.containsFilter,o.unicodeDomain=s.ZP.toUnicode(this.domain||""),o.domain=this.domain,document.body.append(o),this.documentClick=({target:e})=>{if(!(e instanceof HTMLElement))return;const t=!e.matches("div.Element");t&&(e===o||o.contains(e))||e.matches("popup-help, popup-help *")||(t&&o.remove(),this.documentClick&&(document.removeEventListener("mousedown",this.documentClick),delete this.documentClick))},document.addEventListener("mousedown",this.documentClick)}}customElements.define("index-menu",Ue);const je=l({changeTimezoneByVirtualLocation:"change_timezone_according_to_virtual_location",dontShowPromoOffers:"dont_show_promo_offers",useBrowsecForWebrtcConnections:"use_browsec_for_webrtc_connections",webrtcSettingsControlledByAnotherExtension:"webrtc_settings_controlled_by_another_extension"});function We(){return d.dy`
  <style>
  ${c}
  .Checkboxes{
    padding: 17px 0 25px;
    font-size: 16px;
  }
  .Checkboxes > .E{
    position: relative;
    padding: 8px 20px;
  }
  .Checkboxes > .E.disabled{
    opacity: 0.5;
  }
  .Checkboxes > .E.highlighted{
    background: #f0f5f0;
  }
  .Checkboxes > .E > .In{
    display:inline-block;vertical-align:top;
    padding-right: 25px;
  }
  .Checkboxes > .E > .In::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  .Checkboxes > .E > .In > checkbox-switch{
    float: left;
  }
  .Checkboxes > .E > .In > .R{
    display: block;
    margin-left: 55px;
  }

  .Information{
    display: inline-block;
    vertical-align: top;
    background: url( '/images/information_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 16px;
    padding-top: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    cursor: pointer;
    margin: 4px 0 0 10px;
    position: relative;
  }
  .Information:hover{
    background-image: url( '/images/information_green.svg' );
  }
  .Information::after{
    content: '';
    display: block;
    background: url( '/images/information_green.svg' ) 0 -5000px no-repeat;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .Crown{
    background: url( '/images/crown.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 18px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 18px;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .Error{
    clear: both;
    padding: 2px 0 0 55px;
    color: #c00;
    font-size: 12px;
  }


  .HealthCheck{
    position: absolute;
    bottom: 25px;
    left: 25px;
    right: 25px;
    text-align: center;
  }
  .HealthCheck_Button{
    display: inline-block;
    vertical-align: top;
    position: relative;
    font-size: 14px;
    line-height: 2.714;
    padding: 0 30px 0 50px;
    border: 1px solid var( --brand-blue );
    border-radius: 4px;
    color: #494b4d;
    cursor: pointer;
    text-align: left;
  }
  .HealthCheck_Button::after{
    content: '';
    display: block;
    background: url( '/images/diagnostics.svg#health_blue' ) 0 0 no-repeat;
    width: 19px;
    padding-top: 16px;
    height: 0;
    overflow: hidden;
    position: absolute;
    top: calc(50% - 16px / 2);
    left: 23px;
  }
  </style>

  <div class="Checkboxes">
  ${(()=>this.webrtcAvailable?d.dy`
    <div class="E ${this.webrtcNotEnoughPermissions?"highlighted":""}"><div class="In">
      <checkbox-switch
        .checked="${this.webrtcBlocked}"
        @click="${this.changeWebrtc}">
      </checkbox-switch>
      <div class="R">
        <label @click="${this.changeWebrtc}">${je.useBrowsecForWebrtcConnections}</label><!--
     --><div class="Information" @click="${this.showWebrtcHelp}"></div>
      </div>
        ${(()=>this.webrtcBlockedByOtherExtension?d.dy`
      <div class="Error">
        ${je.webrtcSettingsControlledByAnotherExtension}
      </div>`:"")()}
    </div></div>`:"")()}

    <div class="E ${this.changeDateDisabledClass} ${this.changeDateFirstTimeClass}"><div class="In">
      <checkbox-switch
        .checked="${this.hideDate}"
        data-changedate="true"
        @mouseover="${this.changeDateMouseover}"
        @click="${this.changeDate}">
      </checkbox-switch>
      <div class="R">
        <label
          data-changedate="true"
          @mouseover="${this.changeDateMouseover}"
          @click="${this.changeDate}"><!--
       -->${je.changeTimezoneByVirtualLocation}<!--
     --></label><!--
     --><div class="Information" @click="${this.showDateHelp}"></div>
      </div>
      <div class="Crown"></div>
    </div></div>

    <div class="E"><div class="In">
      <checkbox-switch
        .checked="${this.blockPromos}"
        data-changedate="true"
        @click="${this.changeBlockPromos}">
      </checkbox-switch>
      <div class="R">
        <label
          data-changedate="true"
          @click="${this.changeBlockPromos}"><!--
       -->${je.dontShowPromoOffers}<!--
     --></label>
      </div>
    </div></div>
  </div>

  <div class="HealthCheck"><!--
 --><div class="HealthCheck_Button" @click="${this.openDiagnostics}">Health check</div><!--
--></div>`}const qe=e=>(0,g.Z)({type:"timezoneChange.set",value:e}),Xe=new class{constructor(){(async()=>{this.available=await(0,g.Z)({type:"webrtc.available"})})()}async disable(e){return e&&await e(),(0,g.Z)({type:"webrtc.disable"})}async enable(e){return e&&await e(),(0,g.Z)({type:"webrtc.enable"})}getControlState(){return(0,g.Z)({type:"webrtc.getControlState"})}};class Ge extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      width: 41px;
      height: 24px;
      cursor: pointer;
      position: relative;
    }
    :host::before{
      content: '';
      display: block;
      background: #e6e6e6;
      position: absolute;
      top: 3px;
      left: 0;
      right: 3px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:16px;
      border-radius: 8px;
      transition: background-color 0.15s ease-out 0s;
      box-shadow: inset 0 1px 2px rgba( 0, 0, 0, 0.2 );
    }
    :host(.checked)::before{
      background: var( --brand-green );
    }

    :host::after{
      content: '';
      display: block;
      width: 20px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:20px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid #e8e8e8;
      box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      transition: left 0.15s ease-out 0s;
    }
    :host(.checked)::after{
      left: 17px;
    }
    </style>`}static get properties(){return{checked:{type:Boolean}}}updated(e){e.has("checked")&&this.classList.toggle("checked",this.checked)}}customElements.define("checkbox-switch",Ge);const Ye=async()=>{if("undefined"!=typeof browser)return;if(!await new Promise(((e,t)=>{chrome.permissions.request({permissions:["privacy"]},(i=>{chrome.runtime.lastError?t(chrome.runtime.lastError):e(i)}))})))throw new Error("Management permission is not granted")};class Je extends((0,x.$)(m.Z)(d.oi)){render(){return We.call(this)}static get properties(){return{blockPromos:{type:Boolean},changeDateDisabledClass:{type:String},changeDateFirstTimeClass:{type:String},hideDate:{type:Boolean},storeWebrtcBlocked:{type:Boolean},premiumUser:{type:Boolean},webrtcAvailable:{type:Boolean},webrtcBlocked:{type:Boolean},webrtcBlockedByOtherExtension:{type:Boolean},webrtcNotEnoughPermissions:{type:Boolean}}}stateChanged({promotionsBlock:e,timezoneChange:t,user:i,webrtcBlock:o}){this.changeDateDisabledClass=t&&!i.premium?"disabled":"",this.blockPromos=e,this.hideDate=t,this.premiumUser=i.premium,this.storeWebrtcBlocked=o}constructor(){super(),this.computeWebrtcNotEnoughPermissions=this.computeWebrtcNotEnoughPermissions.bind(this),this.changeDateFirstTimeClass="",(async()=>{let e=await ee.Z.get("newSettingsFeatureTimezoneChange2");this.changeDateFirstTimeClass=e?"":"highlighted"})(),this.storeWebrtcBlocked=null,this.premiumUser=null,this.webrtcAvailable=Xe.available,this.webrtcBlocked=!1,this.webrtcBlockedByOtherExtension=!1,this.webrtcNotEnoughPermissions=!1}async connectedCallback(){super.connectedCallback(),await ee.Z.set("newSettingsFeatureTimezoneChange2",!0)}disconnectedCallback(){super.disconnectedCallback(),this.tooltipElement&&(this.tooltipElement.remove(),delete this.tooltipElement),this.documentMouseMove&&(document.removeEventListener("mousemove",this.documentMouseMove),delete this.documentMouseMove)}firstUpdated(e){var t,i;super.firstUpdated(e),this.changeDateElements=Array.from((null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelectorAll)||void 0===i?void 0:i.call(t,'[data-changedate="true"]'))||[]),(async()=>{"not controlled"===await Xe.getControlState()&&(this.webrtcBlockedByOtherExtension=!0)})(),this.webrtcBlocked=!!m.Z.getStateSync().webrtcBlock&&re.includes("privacy"),this.computeWebrtcNotEnoughPermissions(re.get()),re.addListener(this.computeWebrtcNotEnoughPermissions)}updated(e){e.has("webrtcBlocked")&&this.computeWebrtcNotEnoughPermissions(re.get())}computeWebrtcNotEnoughPermissions(e){this.webrtcNotEnoughPermissions=(()=>null!==this.storeWebrtcBlocked&&(this.storeWebrtcBlocked&&!e.includes("privacy")))()}changeBlockPromos(){let e=!this.blockPromos;var t;t=e,(0,g.Z)({type:"promotionsBlock.set",value:t})}async changeDate(){if(!this.premiumUser&&this.hideDate)return;if(!this.premiumUser){const e=document.createElement("popup-premium");e.initiator="timezone change",e.style.cssText="top:-100%;",document.body.append(e),o.Z.partial({category:"premium",action:"show"});const t=e.animate([{top:"-100%"},{top:"0"}],{duration:800,easing:"linear"});return await new Promise((e=>{t.onfinish=e})),void(e.style.cssText="")}const e=!this.hideDate;await qe(e),this.hideDate=e}changeDateMouseover({target:e}){if(this.premiumUser||!this.hideDate)return;if(this.changeDateTooltipShown)return;if(!(e instanceof HTMLElement))return;this.changeDateTooltipShown=!0;let{top:t,left:i,height:o}=e.getBoundingClientRect();t+=o+7,i-=14,i<10&&(i=10);let n=document.createElement("general-tooltip");n.text=(0,r.Z)("this_option_is_available_only_for_premium"),n.style.cssText=`top:${t}px;left:${i}px;`,this.tooltipElement=n,document.body&&document.body.append(n);let s=this.changeDateElements.concat([n]);this.documentMouseMove=e=>{let t=e.composedPath?e.composedPath():e.deepPath?e.deepPath():e.path||[e.target];s.some((e=>t.includes(e)))||(n.remove(),document.removeEventListener("mousemove",this.documentMouseMove),delete this.documentMouseMove,delete this.tooltipElement,this.changeDateTooltipShown=!1)},document.addEventListener("mousemove",this.documentMouseMove)}async changeWebrtc(){if(this.webrtcBlockedByOtherExtension)return;let e=!this.webrtcBlocked;try{e?await Xe.enable(Ye):await Xe.disable(Ye),this.webrtcBlocked=e}catch(e){Ie.Z.warn("WebRTC setup in popup failed")}}async openDiagnostics(){await(0,g.Z)({type:"Diagnostics.open"}),"undefined"!=typeof browser&&self.close()}showDateHelp(){this.showInformationPopup("date")}showWebrtcHelp(){this.showInformationPopup("webrtc")}async showInformationPopup(e){let t=document.querySelector("div.MainContainer");if(!t)return;const i=document.createElement("popup-description");i.theme=e,i.style.cssText="opacity:0",t.appendChild(i);const o=i.animate([{opacity:0},{opacity:1}],{duration:400,easing:"linear"});await new Promise((e=>{o.onfinish=e})),i.style.cssText=""}}customElements.define("index-settings",Je);const Qe=l({on:"on",off:"off"});class Ke extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      width: 61px;
      height: 26px;
      cursor: pointer;
      position: relative;
    }
    :host *{
      cursor: pointer;
    }
    .BackgroundText{
      display: block;
      background: var( --brand-burgundy );
      border-radius: 13px;
      width: 61px;
      height: 26px;
      line-height: 26px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset, 0 0 2px rgba(0, 0, 0, 0.15) inset;
      font-size: 13px;
      height: inherit;
      position: relative;
      text-transform: uppercase;
      transition: all 0.15s ease-out 0s;
    }
    .BackgroundText_Off,
    .BackgroundText_On{
      position: absolute;
      top: 0;
      transition: inherit;
    }
    .BackgroundText_Off{
      color: #fff;
      right: 8px;
    }
    .BackgroundText_On{
      color: white;
      left: 11px;
      opacity: 0;
      text-shadow: 0 1px rgba(0, 0, 0, 0.2);
    }
    :host(.on) .BackgroundText{
      background: var( --brand-green );
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15) inset, 0 0 3px rgba(0, 0, 0, 0.2) inset;
    }
    :host(.on) .BackgroundText_Off{
      opacity: 0;
    }
    :host(.on) .BackgroundText_On{
      opacity: 1;
    }

    .Circle{
      background: #fff;
      border-radius: 11px;
      height: 22px;
      width: 22px;
      left: 2px;
      position: absolute;
      top: 2px;
      transition: left 0.15s ease-out 0s;
    }
    .Circle:before{
      content: "";
      background: #f9f9f9 linear-gradient(to bottom, #eeeeee, white) repeat scroll 0 0;
      border-radius: 6px;
      box-shadow: 0 1px rgba(0, 0, 0, 0.02) inset;
      height: 12px;
      left: 50%;
      margin: -6px 0 0 -6px;
      position: absolute;
      top: 50%;
      width: 12px;
    }
    :host(.on) .Circle{
      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
      left: 37px; /* left: auto; right: 2px; */
    }
    </style>

    <div class="BackgroundText">
      <div class="BackgroundText_Off">${this.translations.off}</div>
      <div class="BackgroundText_On">${this.translations.on}</div>
    </div>
    <div class="Circle"></div>`}static get properties(){return{on:{type:Boolean,observer:"observeOn"},translations:{type:Object}}}get translations(){return Qe}updated(e){e.has("on")&&this.classList.toggle("on",this.on)}}customElements.define("c-switch",Ke);const et=N().proxy.defaultCountry||"nl";class tt extends((0,x.$)(m.Z)(d.oi)){render(){return V.call(this)}static get properties(){return{page:{type:String},preMenuView:{type:String},switchOn:{type:Boolean}}}constructor(){super(),this.page=m.Z.getStateSync().page,this.preMenuView="",this.switchOn=!1}firstUpdated(e){super.firstUpdated(e);const t=this.shadowRoot.querySelector("div.Switch");if(!t)throw new Error("main-index shadowRoot is empty");this.switch=t,this.switch.append(document.createElement(m.Z.getStateSync().page.replace(/\:/g,"-")))}async updated(e){if(!e.has("page"))return;const t=this.page,i=e.get("page");if(!i)return;const o=t.split(":"),n=i.split(":");if("index"!==o[0])return;const s=m.Z.getStateSync().pac.mode,r=o.slice(1),a=n.slice(1),l="home"===r[0]?"left":"right",c=r[0]===a[0],d=this.switch.firstElementChild;if(!d)throw new Error("main-index has no child elements");if(c){if("filters"===r[0]&&r[1]){const e=r[1];d.country="proxy"===s?null:et,d.domain=e,d.selectedDomain=null}}else{const e=(()=>{switch(r[0]){case"filters":return"index-filters";case"home":return"index-home";case"locations":return"index-locations";case"settings":return"index-settings";case"smart settings hint":return"smart-settings-hint"}})();if(!e)return;const t=document.createElement(e);"locations"===r[0]&&r[1]&&(t.domain=r[1]),"filters"===r[0]&&r[1]&&(t.domain=r[1],t.country="proxy"===s?null:et),"left"===l?(this.switch.prepend(t),this.switch.style.cssText="margin-left:-100%;"):this.switch.append(t),"undefined"==typeof browser&&await new Promise((e=>{setTimeout(e,0)}));const i=this.switch.animate([{marginLeft:"left"===l?"-100%":"0%"},{marginLeft:"left"===l?"0%":"-100%"}],{duration:250,easing:"linear"});if(await new Promise(((e,t)=>{i.onfinish=e})),d.remove(),this.switch.style.cssText="","undefined"!=typeof browser&&"index-locations"===e){var p,u,h;const e=null===(p=t.shadowRoot)||void 0===p||null===(u=p.querySelector)||void 0===u?void 0:u.call(p,".In");null==e||null===(h=e.focus)||void 0===h||h.call(e)}}}stateChanged({domain:e,pac:t,page:i}){this.page=i,this.preMenuView=(()=>{const[o,n]=i.split(":");if("index"===o&&"filters"===n)return"help";if("index"===o&&"smart settings hint"===n)return"help";if(!e)return"switch";const s=[];for(const e of t.filters)e.disabled||"regex"===e.format||s.push(e.value);return s.includes(e)?"":"switch"})(),this.switchOn="proxy"===t.mode}openHelp(){(0,g.Z)({type:"сounters.increase",property:"popup: smart settings: open help"}),(0,g.Z)({type:"create tab",options:"/pages/help/help.html"})}async switchClick(){const e=new R.Z("Big switch from "+(this.switchOn?"on":"off"));this.switchOn?await n.Z.disable():await n.Z.enable(),e.end()}}customElements.define("main-index",tt);class it extends((0,x.$)(m.Z)(HTMLElement)){constructor(){super(),this.animation=!1,this.indexPage="index"===m.Z.getStateSync().page.split(":")[0];const e=this.attachShadow({mode:"open"}),t=de.dy`
    <style>
    ${c}
    :host{
      display: block;
      overflow: hidden;
      position: absolute;
      top:56px;
      width: 100%;
      bottom:0px;
      left:0px;
      text-align: left;
    }
    :host > .In{
      width: 100%;
      height: 100%;
      white-space: nowrap;
    }
    :host > .In > *{
      width: 100%;
      height: 100%;
      position: relative;
      display:inline-block;
      vertical-align:top;
      white-space:normal;
      overflow: hidden;
    }
    </style>

    <div class="In"></div>`;(0,de.sY)(t,e),this.ribbon=e.querySelector("div.In"),this.ribbon.append(document.createElement("main-index"))}async stateChanged({page:e}){const t=this.indexPage,i="index"===e.split(":")[0];if(i===t)return;var o,n;(this.indexPage=i,this.animation)?null===(o=this.animationObject)||void 0===o||null===(n=o.cancel)||void 0===n||n.call(o):this.animation=!0;for(const e of this.ribbon.children)"true"===e.dataset.old&&e.remove();const s=this.ribbon.lastElementChild;s.dataset.old="true";const r=document.createElement(i?"main-index":"main-login");r.style.cssText="visibility:hidden;",i?this.ribbon.prepend(r):this.ribbon.append(r),await r.updateComplete,i&&(this.ribbon.style.cssText="margin-left:-100%;"),await new Promise((e=>{setTimeout(e,0)})),r.style.cssText="";try{var a;const e=this.ribbon.animate([{marginLeft:i?"-100%":"0%"},{marginLeft:i?"0%":"-100%"}],{duration:250,easing:"linear"});this.animationObject=e,await new Promise(((t,i)=>{e.onfinish=t,e.oncancel=()=>{i(new Error("page-switch animation is broken"))}})),s.remove(),this.ribbon.style.cssText="",null===(a=r.onAnimationComplete)||void 0===a||a.call(r),this.animation=!1}catch(e){}}}customElements.define("page-switch",it);const ot=l({changeTimezone:{p1:"change_timezone_text_1",p2:"change_timezone_text_2",p3:"change_timezone_text_3"},whatIsWebrtc:{title:"what_is_webrtc_title",p1:"what_is_webrtc_text_1",p2:"what_is_webrtc_text_2",p3:"what_is_webrtc_text_3"}});class nt extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      position: absolute;
      left: 20px;
      right: 20px;
      top: 25px;
      bottom: 20px;
      overflow: auto;
    }
    :host > .In > .In > .In::-webkit-scrollbar{
      width: 6px;
    }
    :host > .In > .In > .In::-webkit-scrollbar-track{
      border-radius: 3px;
      background: rgba(255,255,255,0);
    }
    :host > .In > .In > .In::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background: #aaa;
    }

    .Text{
      color: var( --brand-blue );
      font-size: 14px;
      line-height: 1.375;
    }
    .Title{
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .Text p + p{
      padding-top: 1em;
    }

    .Close{
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      position: absolute;
      right: 11px;
      top: 11px;
      border: 5px solid transparent;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay" @click="${this.close}">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="In Text">
  ${(()=>"date"===this.theme?d.dy`
          <p>${ot.changeTimezone.p1}</p>
          <p>${ot.changeTimezone.p2}</p>
          <p>${ot.changeTimezone.p3}</p>`:"webrtc"===this.theme?d.dy`
          <div class="Title">${ot.whatIsWebrtc.title}</div>
          <p>${ot.whatIsWebrtc.p1}</p>
          <p>${ot.whatIsWebrtc.p2}</p>
          <p>${ot.whatIsWebrtc.p3}</p>`:"")()}
        </div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>
    `}static get properties(){return{theme:{type:String}}}constructor(){super(),this.theme=""}async close(){const e=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}}customElements.define("popup-description",nt);const st=l({okIGotIt:"ok_i_got_it",smartSettingsControl:"smart_settings_allow_you_to_control",smartSettingsFeatures1:"smart_settings_features_1",smartSettingsFeatures2:"smart_settings_features_2",smartSettingsFeatures3:"smart_settings_features_3",withSmartSettingsYouCan:"with_smart_settings_you_can"});class rt extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 4;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }
    :host > .In > .In{
      position: relative;
      padding: 27px 20px;
    }

    .Title{
      font-size: 18px;
      padding-bottom: 15px;
      font-weight: 600;
    }
    .Description{
      padding-bottom: 20px;
    }
    ul{
      list-style: none;
    }
    ul > li{
      padding-left: 20px;
      position: relative;
    }
    ul > li::after{
      content: '';
      display: block;
      background: url('/images/popup-help/check.svg') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 14px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:10px;
      position: absolute;
      top: 5px;
      left: 0;
    }
    ul > li + li{
      border-top: 7px solid transparent;
    }
    .Button{
      text-align: center;
      padding-top: 15px;

    }
    .Button input{
      display:inline-block;
      vertical-align:top;
      box-sizing: content-box;
      height: 45px;
      line-height: 45px;
      border: 0;
      cursor: pointer;
      min-width: 200px;
      padding: 0 15px;
      background: var( --brand-green );
      text-align: center;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }

    .Close{
      position: absolute;
      top: 16px;
      right: 16px;
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="Title">${st.smartSettingsControl}</div>
        <div class="Description">${st.withSmartSettingsYouCan}</div>
        <div class="Features">
          <ul>
            <li>${st.smartSettingsFeatures1}</li>
            <li>${st.smartSettingsFeatures2}</li>
            <li>${st.smartSettingsFeatures3}</li>
          </ul>
        </div>
        <div class="Button"><input type="button" value="${st.okIGotIt}" @click="${this.close}"/></div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>
    `}async close(e){e.stopPropagation();const t=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((e=>{t.onfinish=e})),this.style.cssText="display:none"}}customElements.define("popup-help",rt);const at=l({text1:"locations_help_1",text2:"locations_help_2",text3:"locations_help_3"});class lt extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      position: absolute;
      left: 20px;
      right: 20px;
      top: 25px;
      bottom: 20px;
      overflow: auto;
    }
    :host > .In > .In > .In::-webkit-scrollbar{
      width: 6px;
    }
    :host > .In > .In > .In::-webkit-scrollbar-track{
      border-radius: 3px;
      background: rgba(255,255,255,0);
    }
    :host > .In > .In > .In::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background: #aaa;
    }

    .Text{
      color: var( --brand-blue );
      font-size: 14px;
      line-height: 1.375;
    }
    .Title{
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 15px;
    }
    .Text p + p{
      padding-top: 1em;
    }

    .Close{
      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
      background-size: 100% 100%;
      width: 12px;
      overflow:hidden;font-size:0;text-indent:-9999px;height:0;
      padding-top:12px;
      position: absolute;
      right: 11px;
      top: 11px;
      border: 5px solid transparent;
      cursor: pointer;
    }
    .Close:hover{
      background-image: url( '/images/popup_close_black.svg' );
    }
    .Close::after{
      content: '';
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
    }
    </style>

    <div class="Overlay" @click="${this.close}">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In">
        <div class="In Text">
          <p>${at.text1}</p>
          <p>${at.text2}</p>
          <p>${at.text3}</p>
        </div>
        <div class="Close" @click="${this.close}">X</div>
      </div>
    </div>
    `}async close(){const e=this.animate([{opacity:1},{opacity:0}],{duration:400,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}}customElements.define("popup-locations-information",lt);function ct(){const e="v"+this.view;return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100%;
    background: rgba(255,255,255,0.7);
  }
  .Parent{
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .Parent.v1,
  .Parent.v4,
  .Parent.v7{
    background: linear-gradient(-20deg, #bedcbf, #f8fef8);
  }
  .Parent.v2,
  .Parent.v5{
    background: linear-gradient(-20deg, #f5d4c0, #b8b8b8);
  }
  .Parent.v3,
  .Parent.v6{
    background: #fff;
  }
  .Parent > .B{
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0 10px 5px;
  }

  .Title{
    flex-grow: 0;
    flex-shrink: 0;
    text-align: center;
    padding: 15px 10px 0px;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
  }

  .Close{
    position: absolute;
    top: 0px;
    right: 0;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Steps{
    padding: 0 50px;
  }
  .Steps > .E + .E{
    padding-top: 25px;
  }
  .StepTitle{
    font-size: 15px;
    font-weight: bold;
  }
  .StepText{
    font-size: 12px;
  }

  .DontRemind{
    overflow: hidden;
    padding: 0 0 5px;
  }
  .DontRemind > input[type="checkbox"]{
    float: left;
    margin: 3px 0 0;
    width: 13px;
    height: 13px;
    opacity: 0.5;
  }
  .DontRemind > label{
    display: block;
    margin: 0 0 0 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  }

  .TwoButtons{
    display: flex;
    
    width: 100%;
    justify-content: space-between;
    padding: 0 0 5px;
  }

  .TwoButtons > .E{
    box-sizing: border-box;
  }
  .TwoButtons > .E:first-child{
    width: 50%;
    padding: 0 7px 0 0;
  }
  .TwoButtons > .E:last-child{
    width: 50%;
    padding: 0 0 0 7px;
  }

  .TwoButtons_Button{
    display: block;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  .TwoButtons_Button.continue{
    border: 1px solid #69726a;
  }
  .TwoButtons_Button.upgrade{
    border: 1px solid var( --brand-green );
    color: #000;
    font-weight: bold;
    font-size: 16px;
  }
  .Parent.v1 .TwoButtons_Button.upgrade,
  .Parent.v6 .TwoButtons_Button.upgrade,
  .Parent.v7 .TwoButtons_Button.upgrade{
    background: var( --brand-green );
    border-color: var( --brand-green );
  }
  .Parent.v2 .TwoButtons_Button.upgrade{
    background: #efa524;
    border-color: #efa524;
  }
  .Parent.v6 .TwoButtons_Button.upgrade{
    color: #fff;
  }
  
  .OneButton{
    display: block;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
    color: #fff;
    padding: 8px 0;
    cursor: pointer;
    text-decoration: none;
  }
  .Parent.v5 .OneButton{
    background: #efa524;
    color: #000;
  }

  .OneButton_Title{
    display: block;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
  .OneButton_Price{
    display: block;
    font-size: 14px;
  }
  .Guarantee{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }

  .Features{
    padding: 0px 35px 0px 35px;
    color: #7a7c7f;
  }
  .Features > .E{
    min-height: 72px;
    box-sizing: border-box;
    padding: 2px 0 0px 90px;
    position: relative;
  }
  .Features > .E::before{
    content: "";
    overflow:hidden;
    font-size:0;
    text-indent:-9999px;
    height:0;
    width: 60px;
    padding-top:60px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .Features > .E.countries::before{
    background-image: url( '/images/promos/circles.svg#countries' );
  }
  .Features > .E.speed::before{
    background-image: url( '/images/promos/circles.svg#speed' );
  }
  .Features > .E.servers::before{
    background-image: url( '/images/promos/circles.svg#servers' );
  }

  .Feature_Name{
    color: #28334e;
    font-size: 15px;
    margin: 9px 0 2px;
    line-height: 1.29;
  }
  .Feature_Text{
    font-size: 13px;
    line-height: 1.25;
  }
  </style>

  <div class="Parent ${e}">
    <div class="Title">
      Upgrade to Browsec Premium
    </div>
    <div class="C">
      ${(()=>["1","2","4","5","7"].includes(this.view)?d.dy`
      <div class="Steps">
        <div class="E">
          <div class="StepTitle">Speed up your internet connection</div>
          <div class="StepText">${(()=>"7"===this.view?d.dy`enjoy your favorite shows and channels while abroad`:d.dy`to enjoy streaming services`)()}</div>
        </div>
        <div class="E">
          <div class="StepTitle">Get access to more virtual locations</div>
          <div class="StepText">to unblock more websites</div>
        </div>
        <div class="E">
          <div class="StepTitle">Get priority support</div>
          <div class="StepText">
            Requests from premium users are always processed first
          </div>
        </div>
      </div>`:d.dy`
      <div class="Features">
        <div class="E countries">
          <div class="Feature_Name">Premium locations</div>
          <div class="Feature_Text">
            Access the Internet via additional Premium locations.
          </div>
        </div>
        <div class="E speed">
          <div class="Feature_Name">Turbo speed</div>
          <div class="Feature_Text">
            Premium users enjoy dedicated traffic lanes.
          </div>
        </div>
        <div class="E servers">
          <div class="Feature_Name">Premium servers</div>
          <div class="Feature_Text">
            Our best-in-class servers guarantee top performance.
          </div>
        </div>
      </div>`)()}
    </div>
    
    <div class="B">
      <div class="DontRemind">
        <input 
          type="checkbox" 
          id="DontRemind" 
          ?checked="${this.dontRemindChecked}" 
          @change="${this.dontRemindClick}"/>
        <label for="DontRemind">Don't remind me again</label>
      </div>

      ${(()=>["1","2","6","7"].includes(this.view)?d.dy`
      <div class="TwoButtons">
        <div class="E">
          <div 
            class="TwoButtons_Button continue" 
            @click="${this.freeClick}"
          >Continue in free mode</div>
        </div>
        <div class="E">
          <a 
            class="TwoButtons_Button upgrade"
            href="${this.payLink}"
            target="_blank"
            @click="${this.premiumClick}"
          >Upgrade now</a>
        </div>
      </div>`:"")()}

      ${(()=>["3","4","5"].includes(this.view)?d.dy`
      <a
        class="OneButton"
        href="${this.payLink}"
        target="_blank"
        @click="${this.premiumClick}"
      >
        <span class="OneButton_Title">Get Premium Now!</span>
        <span class="OneButton_Price">only ${this.price} per month</span>
      </a>
      <div class="Guarantee">7 days money back guarantee</div>`:"")()}
      
    </div>

    <div class="Close" @click="${this.close}">x</div>
  </div>`}const dt=N().experiments.premiumOverlayOnPopupOpen.id;class pt extends((0,x.$)(m.Z)(d.oi)){render(){return ct.call(this)}static get properties(){return{_showCount:{type:Number},dontRemindChecked:{type:Boolean},payLink:{type:String},price:{type:String},view:{type:String}}}get showCount(){return this._showCount}set showCount(e){this._showCount=e,(async()=>{const{daysAfterInstall:e,experiments:t}=m.Z.getStateSync(),i=t[dt],o=i?ge(Number(i)):void 0;this.letterVariant=o;const n=o?"252"+o.toLowerCase():void 0,s={utm_source:"chromium extension",utm_campaign:"default_campaign",utm_medium:"premium_openoffer",plan_id:"biennial",instd:e,offernum:String(this.showCount)};n&&Object.assign(s,{expvarid:n}),this.payLink=((e,t=(e=>e))=>(0,z.Z)(e,(e=>Object.assign(t(e),{instd:m.Z.getStateSync().daysAfterInstall}))))(Z.Z.premium,(e=>Object.assign(e,s)))})()}constructor(){super(),this.dontRemindChecked=!1,this.price="$2.99",this.view="1"}stateChanged({prices:e,priceTrial:t}){this.price="$"+fe({prices:e,priceTrial:t}).price}async close(){await ee.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),this.remove()}dontRemindClick(){this.dontRemindChecked=!this.dontRemindChecked}async freeClick(){await ee.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),this.remove()}async premiumClick(){const e=this.letterVariant;"number"==typeof this.showCount&&e&&o.Z.full({category:"Exp252_Get_premium",action:e,label:String(this.showCount-1)}),await ee.Z.set("Experiment 252: checkbox checked",this.dontRemindChecked),self.close()}}customElements.define("onstart-premium-overlay",pt);function ut(){const e=m.Z.getStateSync(),t={expvarid:(()=>{switch(this.mode){case"standard":return"262b";case"with price":return"262c";case"continue":return"262d"}})(),utm_source:"chromium extension",utm_medium:"chooseplan",utm_campaign:"default_campaign",instd:e.daysAfterInstall},i=T({action:e=>Object.assign(e,t,{plan_id:"monthly"}),storeState:e,url:Z.Z.premium}),o=T({action:e=>Object.assign(e,t,{plan_id:"annual"}),storeState:e,url:Z.Z.premium}),n=T({action:e=>Object.assign(e,t,{plan_id:"biennial"}),storeState:e,url:Z.Z.premium});return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    font-size: 14px;
    line-height: 1.3;
    color: var( --brand-blue );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  :host > .Overlay{
    position: absolute;
    top:0px;right:0px;bottom:0px;left:0px;
    overflow: hidden;
    text-indent: -9999px;
    font-size: 0;
    background: rgba(255, 255, 255, 0.5);
  }
  :host > .In{
    position: absolute;
    top: 56px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border: 1px solid transparent;
    border-width: 6px 5px 5px;
  }
  :host > .In::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.99);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    font-size: 0;
    overflow: hidden;
  }

  :host > .In > .In{
    position: relative;
    height: 100%;
  }

  .Description{
    color: var( --brand-blue );
    font-size: 16px;
    line-height: 1.375;
    padding: 0 25px;
    text-align: center;
  }

  .Close{
    position: absolute;
    top: 16px;
    right: 16px;
    background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:12px;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_black.svg' );
  }
  .Close::after{
    content: '';
    display: block;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;
  }

  .Title{
    text-align: center;
    padding: 10px 5px 15px;
    font-weight: bold;
    font-size: 18px;
  }

  .Columns{
    display: flex;
    padding: 0 0 0;
  }
  .Columns > .E{
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
    width: calc( 100% / 3 );
    padding: 0 5px;
  }
  .Columns > .E ~ .E{
    border-left: 1px solid #e6e6e6;
  }

  .Icon{
    margin: 0 auto;
    position: relative;
    box-sizing: content-box;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: calc( 204px * 0.2 );
  }
  .Icon::after{
    content: '';
    display: block;
    width: calc( 90px * 0.2 );
    padding-top: calc( 90px * 0.2 );
    height: 0;
    overflow: hidden;
    background: url('/images/buy_premium_sprite.svg#star') 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
  }

  .Icon.speed{
    background-image: url('/images/buy_premium_sprite.svg#speed');
    width: calc( 203px * 0.2 );
    border-right: calc( 6px * 0.2 ) solid transparent;
  }
  .Icon.speed::after{
    right: calc( -6px * 0.2 );
  }

  .Icon.servers{
    background-image: url('/images/buy_premium_sprite.svg#servers');
    width: calc( 208px * 0.2 );
    border-right: calc( 11px * 0.2 ) solid transparent;
  }
  .Icon.servers::after{
    right: calc( -11px * 0.2 );
  }

  .Icon.locations{
    background-image: url('/images/buy_premium_sprite.svg#locations');
    width: calc( 142px * 0.2 );
    border-right: calc( 39px * 0.2 ) solid transparent;
  }
  .Icon.locations::after{
    right: calc( -39px * 0.2 );
  }

  .ColumnTitle{
    font-weight: bold;
    text-align: center;
    padding: 10px 0 3px;
    font-size: 12px;
    letter-spacing: -0.5px;
    margin: 0 -5px;
    text-transform: uppercase;
  }
  .ColumnDescription{
    text-align: center;
    font-size: 11px;
    line-height: 1.3;
    min-height: 43px;
  }
  .Separator{
    width: calc( 100% / 3 );
    height: 1px;
    overflow: hidden;
    background: #1c304e;
    margin: 10px auto 10px;
  }

  .FreePremiumSpeed{
    margin-right: -5px;
  }
  .FreePremiumSpeed > table > tbody > tr:last-child > td{
    vertical-align: middle;
  }
  .FreePremiumSpeed > table > tbody > tr > td ~ td{
    padding-left: 3px;
  }
  .FreePremiumSpeed_Title{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
  }
  .FreePremiumSpeed_Title.feature{
    color: var( --brand-green );
  }

  .FreePremiumSpeed_Value_Number{
    display: inline-block;
    vertical-align: baseline;
    font-weight: bold;
    font-size: 15px;
  }
  .FreePremiumSpeed_Value_Text{
    display: inline-block;
    vertical-align: baseline;
    font-size: 11px;
    padding-left: 1px;
  }
  .FreePremiumSpeed_Value_Number.feature{
    color: var( --brand-green );
    font-size: 19px;
  }
  .FreePremiumSpeed_Value_Text.feature{
    color: var( --brand-green );
  }
  .FreePremiumSpeed_Arrow{
    width: calc( 45px * 0.35 );
    height: calc( 33px * 0.35 );
    background: url( '/images/buy_premium_sprite.svg#arrow_right' ) 0 0 no-repeat
  }

  .ServerCount{
    margin: 0 -2px;
    text-align: center;
  }
  .ServerCount > .E{
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
  .ServerCount > .E.free{
    padding-right: 2px;
  }
  .ServerCount > .E.premium{
    padding-left: 2px;
    color: var( --brand-green );
  }

  .Servers_Icons{
    margin-right: -5px;
  }
  .Servers_Icons > .E{
    display: inline-block;
    vertical-align: top;
  }
  .Servers_Icons > .E ~ .E{
    padding-left: 8px;
  }
  .Servers_Icons_Title{
    padding-bottom: 5px;
    font-size: 11px;
    line-height: 1;
    font-weight: bold;
    color: #494b4d;
    text-transform: uppercase;
  }
  .Servers_Icons_Title.premium{
    color: var( --brand-green );
  }
  .Servers_Icon{
    height: calc( 119px * 0.43 );
    display: flex;
    align-items: flex-end;
  }
  .Servers_Icon::after{
    content: '';
    display: block;
    width: calc( 120px * 0.43 );
    height: 0;
    overflow: hidden;
  }
  .Servers_Icon.free::after{
    background: url( '/images/buy_premium_sprite.svg#free_user' ) 0 0 no-repeat;
    background-size: 100% 100%;
    padding-top: calc( 109px * 0.43 );
  }
  .Servers_Icon.premium::after{
    background: url( '/images/buy_premium_sprite.svg#premium_user' ) 0 0 no-repeat;
    background-size: 100% 100%;
    padding-top: calc( 116px * 0.43 );
  }

  .ExtraDescription{
    font-size: 11px;
    line-height: 1.3;
    padding-top: 6px;
    text-align: center;
  }

  .Buttons{
    position: absolute;
    left: 15px;
    bottom: 15px;
    right: 15px;
    display: flex;
    justify-content: space-between;
  }
  .Buttons > .E{
    flex-grow: 0;
  }

  .ButtonFree{
    display: inline-flex;
    align-items: center;
    height: calc(100% - 2px);
    border: 1px solid transparent;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    color: #9b9b9b;
    border-color: #9b9b9b;
  }
  .ButtonFree > .In{}
  .ButtonPremium{
    display: inline-block;
    vertical-align: top;
    padding: 7px 21px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.1;
    color: #fff;
    background: var( --brand-green );
    text-align: center;
    text-decoration: none;
  }
  .ButtonPremium_Price{
    display: block;
    font-size: 13px;
    font-weight: normal;
    padding-top: 2px;
  }

  .Plans{
    padding: 0 5px 0;
  }
  .Plans > .In{
    margin: 0 0 0 -2px;
    display: flex;
  }
  .Plans > .In > .E{
    width: calc(100% / 3 - 2px);
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0 0 0 2px;
  }

  .Plan{
    background: #E5EBEF;
    padding: 15px 10px 15px;
  }
  .Plan.monthly{
    margin: 26px 0 0;
  }
  .Plan.annual{
    border: 1px solid var( --brand-green );
    padding: 0 10px 15px;
    border-radius: 3px;
  }
  .Plan.biennial{
    margin: 26px 0 0;
  }

  .Plan_Head{
    margin: 0 -10px;
    overflow: hidden;
    text-align: center;
    padding: 0 0 15px;
  }
  .Plan_Head > .In{
    padding: 0 2px 0;
    background: var( --brand-green );
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 -3px 4px 5px rgba(0,0,0,0.3);
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
  }

  .Plan_Title{
    text-align: center;
    text-transform: uppercase;
    font-size: 17px;
    line-height: 1.3588;
    color: #494b4d;
  }
  .Plan.annual .Plan_Title{
    font-size: 21px;
    line-height: 1.1;
  }

  .Plan_Price{
    text-align: center;
    padding: 12px 0 12px;
    margin: 0 -10px;
    line-height: 34px;
  }
  .Plan_Price_Value{
    display: inline-block;
    vertical-align: middle;
    font-size: 17px;
    color: var( --brand-green );
  }
  .Plan_Price_Period{
    display: inline-block;
    vertical-align: middle;
    font-size: 11px;
    padding: 4px 0 0 1px;
    color: var( --brand-green );
  }

  .Plan_Percent{
    display: inline-block;
    vertical-align: middle;
    width: 34px;
    background: url( '/images/discount_other.svg#green' ) 50% 50% no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 11px;
    margin-right: 4px;
  }
  .Plan_Percent::after{
    content: '%';
  }

  .Plan_Button{
    display: block;
    text-align: center;
    color: #fff;
    background: #1C304E;
    border-radius: 2px;
    font-size: 14px;
    line-height: 28px;
    margin-top: 2px;
    text-decoration: none;
  }
  .Plan.annual .Plan_Button{
    background: var( --brand-green );
    line-height: 32px;
  }

  .SecurePayment{
    display: flex;
    justify-content: center;
    padding: 12px 0 0;
  }
  .SecurePayment_Text{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-size: 11px;
  }
  .SecurePayment_Text::after{
    content: '';
    display: block;
    background: url( '/images/account_locked_grey.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: calc( 40px * 0.27 );
    height: calc( 53px * 0.27 );
    overflow: hidden;
    position: absolute;
    top: calc( 50% - 53px * 0.27 / 2 - 2px );
    left: calc( -40px * 0.27 - 5px );
  }

  .PaymentSystems{
    display: inline-block;
    vertical-align: middle;
    padding: 0 0 0 6px;
    margin: -2px 0 0;
  }
  .PaymentSystems > .E{
    display: inline-block;
    vertical-align: middle;
    height: 0;
    overflow:hidden;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
  }
  .PaymentSystems > .E ~ .E{
    margin-left: 7px;
  }
  .PaymentSystems > .E.paypal{
    width: calc(100px * 0.45);
    padding-top: calc(27px * 0.45);
    background-image: url( '/images/payment_systems.svg#paypal' );
  }
  .PaymentSystems > .E.visa{
    width: calc(62px * 0.45);
    padding-top: calc(20px * 0.45);
    background-image: url( '/images/payment_systems.svg#visa' );
  }
  .PaymentSystems > .E.mastercard{
    width: calc(50px * 0.45);
    padding-top: calc(30px * 0.45);
    background-image: url( '/images/payment_systems.svg#mastercard' );
  }
  .PaymentSystems > .E.americanExpress{
    width: calc(30px * 0.45);
    padding-top: calc(30px * 0.45);
    background-image: url( '/images/payment_systems.svg#american_express' );
  }

  .YouWontBeCharged{
    text-align: center;
    padding: 12px 7px 0;
    font-size: 14px;
  }

  .Back{
    position: absolute;
    left: 15px;
    bottom: 15px;
    padding: 0 0 0 20px;
    cursor: pointer;
    font-size: 17px;
  }
  .Back::after{
    content: '';
    display: block;
    background: url( '/images/arrow_left.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: calc(50% - 16px / 2);
    width: 9px;
    height: 16px;
    overflow: hidden;
  }
  </style>

  <div class="Overlay">&nbsp;</div>
  <div class="In"><div class="In">
    ${(()=>"main"===this.view?d.dy`
        <div class="Title">
          Get the most out of Browsec<br/>
          with Premium account
        </div>
        <div class="Columns">
          <div class="E">
            <div class="Icon speed"></div>
            <div class="ColumnTitle">TURBO SPEED</div>
            <div class="ColumnDescription">
              Premium Users Enjoy Dedicated
              Traffic Lanes
            </div>
            <div class="Separator"></div>
            <div class="FreePremiumSpeed"><table><tbody>
              <tr>
                <td><div class="FreePremiumSpeed_Title">Free:</div></td>
                <td></td>
                <td><div class="FreePremiumSpeed_Title feature">Premium:</div></td>
              </tr>
              <tr>
                <td><div class="FreePremiumSpeed_Value"><!--
                --><div class="FreePremiumSpeed_Value_Number">1</div><!--
                --><div class="FreePremiumSpeed_Value_Text">mbps</div><!--
              --></div></td>
                <td><div class="FreePremiumSpeed_Arrow"></div></td>
                <td><div class="FreePremiumSpeed_Value"><!--
                --><div class="FreePremiumSpeed_Value_Number feature">100</div><!--
                --><div class="FreePremiumSpeed_Value_Text feature">mbps</div><!--
              --></div></td>
              </tr>
            </tbody></table></div>
          </div>
          <div class="E">
            <div class="Icon locations"></div>
            <div class="ColumnTitle">PREMIUM LOCATIONS</div>
            <div class="ColumnDescription">
              Access the Internet via Additional
              Premium Locations
            </div>
            <div class="Separator"></div>
            <div class="ServerCount"><!--
            --><div class="E">4<br/>free locations</div><!--
            --><div class="E premium">42<br/>premium locations</div><!--
          --></div>
          </div>
          <div class="E">
            <div class="Icon servers"></div>
            <div class="ColumnTitle">PREMIUM SERVERS</div>
            <div class="ColumnDescription">
              Our Best-in-Class Servers Guarantee
              Top Perfomance
            </div>
            <div class="Separator"></div>
            <div class="Servers_Icons"><!--
            --><div class="E">
                <div class="Servers_Icons_Title">Free:</div>
                <div class="Servers_Icon free"></div>
              </div><!--
            --><div class="E">
                <div class="Servers_Icons_Title premium">Premium:</div>
                <div class="Servers_Icon premium"></div>
              </div><!--
          --></div>
          </div>
        </div>
        <div class="Buttons">
          <div class="E L">
            <div class="ButtonFree" @click="${this.freeClick}"><div class="In">
              Start with free
            </div></div>
          </div>
          <div class="E R">
            ${(()=>"continue"===this.mode?d.dy`
            <div class="ButtonPremium" @click="${this.premiumClick}">
              Continue
            </div>`:d.dy`
            <a 
              href="${n}" 
              target="_blank"
              class="ButtonPremium" 
              @click="${this.premiumClick}"
            >
              <span>Get Premium</span>
              ${(()=>"standard"===this.mode?"":d.dy`
              <span class="ButtonPremium_Price">for $2.99 a month</span>`)()}
            </a>`)()}
          </div>
        </div>

        <div class="Close" @click="${this.close}">X</div>`:d.dy`
      <div class="Title">Pick the right Premium plan for you</div>
      <div class="Plans"><div class="In">
        <div class="E">
          <div class="Plan monthly">
            <div class="Plan_Title">Monthly</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Price_Value">$6.99</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${i}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
        <div class="E">
          <div class="Plan annual">
            <div class="Plan_Head"><div class="In">Most Popular</div></div>
            <div class="Plan_Title">Annual</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Percent">-52</span><!--
           --><span class="Plan_Price_Value">$3.33</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${o}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
        <div class="E">
          <div class="Plan biennial">
            <div class="Plan_Title">2 Years</div>
            <div class="Plan_Price"><!--
           --><span class="Plan_Percent">-57</span><!--
           --><span class="Plan_Price_Value">$2.99</span><!--
           --><span class="Plan_Price_Period">/mo</span><!--
         --></div>
            <a 
              href="${n}" 
              target="_blank" 
              class="Plan_Button"
              @click="${this.planClick}"
            >Choose Plan</a>
          </div>
        </div>
      </div></div>
      <div class="SecurePayment">
        <div class="SecurePayment_Text">Secure payment using:</div>
        <div class="PaymentSystems"><!--
       --><div class="E paypal"></div><!--
       --><div class="E visa"></div><!--
       --><div class="E mastercard"></div><!--
       --><div class="E americanExpress"></div><!--
     --></div>
      </div>
      <div class="YouWontBeCharged">
        You won’t be charged at this point. 
        Selecting one of the above will get you on our site for checkout.
      </div>
      <div class="Back" @click="${this.back}">Back</div>`)()}
  </div></div>`}const ht=N().experiments.premiumComparisonOnFirstPopup.id;class gt extends d.oi{render(){return ut.call(this)}static get properties(){return{mode:{type:String},view:{type:String}}}constructor(){super(),this.mode="standard",this.view="main"}back(){this.view="main"}async close(){await ee.Z.set("Experiment 262: shown",!0),this.remove()}async freeClick(){await ee.Z.set("Experiment 262: shown",!0),this.remove()}async planClick(){const{experiments:e}=m.Z.getStateSync(),t=e[ht];if(!t)return;const i=ge(Number(t));o.Z.full({category:"Exp262_Get_premium",action:i}),await ee.Z.set("Experiment 262: shown",!0),self.close()}async premiumClick(){const{experiments:e}=m.Z.getStateSync(),t=e[ht];if(!t)return;const i=ge(Number(t));"continue"===this.mode?(o.Z.full({category:"Exp262_Screen1_continue",action:i}),this.view="prices"):(o.Z.full({category:"Exp262_Get_premium",action:i}),await ee.Z.set("Experiment 262: shown",!0),self.close())}}customElements.define("popup-buy-premium",gt);const mt=[{currency:"USD",value:71.99,duration:24}];let xt=l({browsecPremium:"browsec_premium",cancelSubscriptionAtAnyTime:"cancel_subscription_at_any_time",forOnly:"for_only",moneyBackGuarantee:"7_days_money_back_guarantee",oneSmartSettingDescription1:"one_smart_setting_description_1",oneSmartSettingDescription2:"one_smart_setting_description_2",oneSmartSettingDescriptionList1:"one_smart_setting_description_list_1",oneSmartSettingDescriptionList2:"one_smart_setting_description_list_2",youCanHaveOnlyOneSmartSetting:"you_can_have_only_1_smart_setting"});function vt(){const e=(0,r.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price);return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top:0px;right:0px;left:0px;
    height: 100%;
    background: #fff;
  }

  .Head{
    background: var( --brand-blue );
    color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 36px;
    font-weight: 500;
    position: relative;
    padding: 9px 10px 9px;
  }

  .Close{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -16px;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Text{
    padding: 20px 25px;
    color: var( --brand-blue );
    line-height: 1.35;
  }
  .Title{
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 15px;
  }
  .Description{
    font-size: 16px;
  }
  .Description p{
    padding-bottom: 1em;
  }
  .Description ul{
    list-style: none;
  }
  .Description ul > li{
    position: relative;
    padding-left: 20px;
  }
  .Description ul > li::after{
    content: '';
    background: url( '/images/popup-help/check.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 12px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 9px;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    left: 0;
  }

  .Button_Out{
    /* position: absolute;right:5px;bottom:5px;left:5px; */
    padding: 0 5px;
  }
  .Button{
    display: table;
    width: 100%;
    height: 60px;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
  }
  .Button:link,
  .Button:visited,
  .Button:hover,
  .Button:active{
    color: #fff;
    text-decoration: none;
  }
  .Button *{
    cursor: pointer;
  }
  .Button > .In{
    display: table-cell;
    vertical-align: middle;
  }

  .Button_Name{
    display: block;
    font-size: 16px;
    font-weight: 600;
  }
  .Button_Name.uppercase{
    text-transform: uppercase;
  }

  .Button_Price{
    display: block;
    font-size: 14px;
  }
  .Button_Price_Value{
    font-size: 14px;
    font-weight: bold;
  }
  .Button_Price_OldValue{
    font-size: 12px;
    text-decoration: line-through;
    color: #9aca9f;
    margin-left: 3px;
  }

  .Button_Discount{
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 25px;
  }
  .Button_Discount > .In{
    width: 54px;
    height: 54px;
    background: url( '/images/discount.svg' ) 0 0 no-repeat;
    display: table;
    position: absolute;
    right: 0;
    top: calc(50% - 54px / 2);
  }
  .Button_Discount > .In > .In{
    display: table-cell;
    vertical-align: middle;
  }
  .Button_Discount_Minus{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
  }
  .Button_Discount_Value{
    display: inline-block;
    vertical-align: middle;
    font-size: 23px;
    font-weight: bold;
  }
  .Button_Discount_Percent{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    font-weight: bold;
  }

  .ExtraText{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }
  </style>

  <div class="Head">
    ${xt.browsecPremium}
    <div class="Close" @click="${this.close}"></div>
  </div>
  <div class="Text">
    <div class="Title">${xt.youCanHaveOnlyOneSmartSetting}</div>
    <div class="Description">
      <p>${xt.oneSmartSettingDescription1}</p>
      <p>${xt.oneSmartSettingDescription2}</p>
      <ul>
        <li>${xt.oneSmartSettingDescriptionList1}</li>
        <li>${xt.oneSmartSettingDescriptionList2}</li>
      </ul>
    </div>
  </div>
  <div class="Button_Out">
    <a href="${this.premiumLink}" class="Button" @click="${this.linkClick}" target="_blank">
      <span class="In">
        <span class="Button_Name ${this.trialDays&&!this.withPrice?"uppercase":""}">
          ${this.buttonText}
        </span>
      ${(()=>!this.withPrice||this.trialDays?"":d.dy`
        <span class="Button_Price">
        ${(()=>this.discount?d.dy`
          ${xt.forOnly}
          <span class="Button_Price_Value">${this.currency}${this.price}</span>
          <span class="Button_Price_OldValue">${this.currency}${this.oldPrice}</span>`:e)()}
        </span>`)()}
      </span>
      ${(()=>this.withPrice&&this.discount?d.dy`
      <span class="Button_Discount"><span class="In"><span class="In"><!--
     --><span class="Button_Discount_Minus">-</span><!--
     --><span class="Button_Discount_Value">${this.discount}</span><!--
     --><span class="Button_Discount_Percent">%</span><!--
   --></span></span></span>`:"")()}
    </a>
  </div>
  ${(()=>{if(!this.withPrice)return"";const e=this.trialDays?xt.cancelSubscriptionAtAnyTime:xt.moneyBackGuarantee;return d.dy`
    <div class="ExtraText">${e}</div>`})()}`}class ft extends((0,x.$)(m.Z)(d.oi)){render(){return vt.call(this)}static get properties(){return{buttonText:{type:String},currency:{type:String},discount:{type:Number},ignoredExperiments:{type:Array},oldPrice:{type:Number},premiumLink:{type:String},price:{type:Number},trialDays:{type:Number}}}constructor(){super(),this.ignoredExperiments=[],this.removeStorageListener=ee.Z.onChange({for:["Experiment 262: ignore"],do:e=>{e["Experiment 262: ignore"]&&[].push(262)}}),this.withPrice=1===Math.floor(2*Math.random()),(async()=>{await ee.Z.get("Experiment 262: ignore")&&(this.ignoredExperiments=[262])})(),(async()=>{this.daysAfterInstall=await(async()=>{const e=Date.now(),t=await ee.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})()})()}connectedCallback(){if(super.connectedCallback(),this.firstConnect)return;this.firstConnect=!0;let e=this.extraText;e&&(e=". "+e),o.Z.partial({category:"extension",action:"show_premium_div",label:"premium_div_"+this.buttonText+e})}disconnectedCallback(){super.disconnectedCallback(),this.removeStorageListener()}stateChanged({prices:e,priceTrial:t}){const{currency:i,price:o,oldPrice:n,trialDays:s}=fe({prices:e,priceTrial:t});this.currency=i,this.price=o,this.oldPrice=n,this.trialDays=s}get buttonText(){return this.withPrice?this.trialDays?(0,r.Z)("get_N_days_free_premium_trial").replace(/XXX/g,String(this.trialDays)):this.discount?(0,r.Z)("get_monthly_premium"):(0,r.Z)("upgrade_to_premium"):(0,r.Z)("get_premium_now")}get discount(){return this.oldPrice?Math.floor(100*(this.oldPrice-this.price)/this.oldPrice):0}get extraText(){return!this.withPrice||this.trialDays?"":this.discount?(0,r.Z)("for_only")+" "+this.currency+this.price:(0,r.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price)}get premiumLink(){var e;let t=this.extraText;t&&(t=". "+t);const i=m.Z.getStateSync(),{experiments:o}=i,n=Date.now(),s=i.promotions.find((({from:e,till:t,tariffs:i})=>e<=n&&n<=t&&i)),r=null!==(e=null==s?void 0:s.id)&&void 0!==e?e:"default_campaign",a=(()=>{if(!s)return mt;const{tariffs:e}=s;if(!e)throw new Error('No "tariffs" property in tariff');return e.map((({price:{currency:e,value:t},duration:i})=>({currency:e,duration:i,value:t})))})(),l={feature:"smartsettings",plan_id:(()=>{const e=a.map((({duration:e,value:t})=>({duration:e,pricePerMonth:t/e}))).sort((({pricePerMonth:e},{pricePerMonth:t})=>e-t)),{duration:t}=e[0];switch(t){case 1:return"monthly";case 12:return"annual";case 24:return"biennial";default:throw new Error("Incorrect duration")}})(),utm_source:"chromium extension",utm_medium:"premium_div",utm_campaign:r,utm_term:this.buttonText+t},c=[];{const e=o[N().experiments.premiumOverlayOnPopupOpen.id];if(e){const t=ge(Number(e)).toLowerCase();c.push("252"+t)}}{const e=o[N().experiments.pollBanner.id];if(e){const t=ge(Number(e)).toLowerCase();c.push("254"+t)}}if(!this.ignoredExperiments.includes(262)){switch(o[N().experiments.premiumComparisonOnFirstPopup.id]){case"1":c.push("262b");break;case"2":c.push("262c");break;case"3":c.push("262d")}}switch(o[N().experiments.promotionPageAfterInstall.id]){case"0":c.push("284_a");break;case"1":c.push("284_b")}return c.length&&(l.expvarid=c.join(",")),T({action:e=>Object.assign(e,l),storeState:i,url:(null==s?void 0:s.clickUrl)||Z.Z.premium})}async close(){const e=this.animate([{top:0},{top:"-100%"}],{duration:800,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}async linkClick(){var e,t;(0,g.Z)({type:"popup-premium-onerule button click"}),await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}}customElements.define("popup-premium-onerule",ft);const bt=l({accessInternet:"access_internet_via_premium_locations",browsecPremium:"browsec_premium",cancelSubscriptionAtAnyTime:"cancel_subscription_at_any_time",dedicatedLanes:"dedicated_traffic_lanes",forOnly:"for_only",moneyBackGuarantee:"7_days_money_back_guarantee",premiumLocations:"premium_locations",premiumServers:"premium_servers",performanceGuaranteed:"top_performance_guaranteed",turboSpeed:"turbo_speed"});function yt(){const e=(0,r.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price);return d.dy`
  <style>
  ${c}
  :host{
    display: block;
    position: absolute;
    z-index: 3;
    top:0px;
    right:0px;
    left:0px;
    height: 100%;
    background: #fff;
  }

  .Head{
    background: var( --brand-blue );
    color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 36px;
    font-weight: 500;
    position: relative;
    padding: 9px 10px 9px;
    height: auto;
    overflow: visible;
  }

  .Close{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -16px;
    width: 10px;
    padding-top: 10px;
    border: 11px solid transparent;
    height: 0;
    overflow: hidden;
    background: url( '/images/popup_close_2.svg#grey' ) 0 0 no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .Close:hover{
    background-image: url( '/images/popup_close_2.svg#white' );
  }
  .Close::after{
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: url( '/images/popup_close_2.svg#white' ) 0 -5000px no-repeat;
  }

  .Features{
    padding: 10px 35px 15px 10px;
    color: #7a7c7f;
  }
  .Features > .E{
    min-height: 95px;
    box-sizing: border-box;
    padding: 2px 0 0px 90px;
    position: relative;
  }
  :host(.withPrice) .Features > .E{
    min-height: 82px;
  }
  .Features > .E::before{
    content: "";
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    width: 67px;
    padding-top:67px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .Features > .E.countries::before{
    background-image: url( '/images/promos/circles.svg#countries' );
  }
  .Features > .E.speed::before{
    background-image: url( '/images/promos/circles.svg#speed' );
  }
  .Features > .E.servers::before{
    background-image: url( '/images/promos/circles.svg#servers' );
  }

  .Feature_Name{
    color: #28334e;
    font-size: 17px;
    margin: 9px 0 2px;
    line-height: 1.29;
  }
  .Feature_Text{
    font-size: 15px;
    line-height: 1.25;
  }

  .Button_Out{
    padding: 0 5px;
  }
  .Button{
    display: table;
    width: 100%;
    height: 45px;
    background: var( --brand-green );
    text-align: center;
    border-radius: 4px;
    position: relative;
  }
  :host(.withPrice) .Button{
    height: 60px;
  }
  .Button:link,
  .Button:visited,
  .Button:hover,
  .Button:active{
    color: #fff;
    text-decoration: none;
  }
  .Button *{
    cursor: pointer;
  }
  .Button > .In{
    display: table-cell;
    vertical-align: middle;
  }

  .Button_Name{
    display: block;
    font-size: 17px;
  }
  .Button_Name.uppercase{
    text-transform: uppercase;
  }
  :host(.withPrice) .Button_Name{
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
  .Button_Price{
    display: block;
    font-size: 14px;
  }
  .Button_Price_Value{
    font-size: 14px;
    font-weight: bold;
  }
  .Button_Price_OldValue{
    font-size: 12px;
    text-decoration: line-through;
    color: #9aca9f;
    margin-left: 3px;
  }

  .Button_Discount{
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 25px;
  }
  .Button_Discount > .In{
    width: 54px;
    height: 54px;
    background: url( '/images/discount.svg' ) 0 0 no-repeat;
    display: table;
    position: absolute;
    right: 0;
    top: calc(50% - 54px / 2);
  }
  .Button_Discount > .In > .In{
    display: table-cell;
    vertical-align: middle;
  }
  .Button_Discount_Minus{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
  }
  .Button_Discount_Value{
    display: inline-block;
    vertical-align: middle;
    font-size: 23px;
    font-weight: bold;
  }
  .Button_Discount_Percent{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    font-weight: bold;
  }

  .ExtraText{
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding-top: 7px;
  }
  </style>

  <div class="Head">
    Browsec Premium
    <div class="Close" @click="${this.close}"></div>
  </div>
  <div class="Features">
    <div class="E countries">
      <div class="Feature_Name">${bt.premiumLocations}</div>
      <div class="Feature_Text">${bt.accessInternet}</div>
    </div>
    <div class="E speed">
      <div class="Feature_Name">${bt.turboSpeed}</div>
      <div class="Feature_Text">${bt.dedicatedLanes}</div>
    </div>
    <div class="E servers">
      <div class="Feature_Name">${bt.premiumServers}</div>
      <div class="Feature_Text">${bt.performanceGuaranteed}</div>
    </div>
  </div>
  <div class="Button_Out">
    <a href="${this.premiumLink}" class="Button" @click="${this.linkClick}" target="_blank">
      <span class="In">
        <span class="Button_Name ${this.trialDays&&!this.withPrice?"uppercase":""}">
          ${this.buttonText}
        </span>
  ${(()=>!this.withPrice||this.trialDays?"":d.dy`
        <span class="Button_Price">
        ${(()=>this.discount?d.dy`
          ${bt.forOnly}
          <span class="Button_Price_Value">${this.currency}${this.price}</span>
          <span class="Button_Price_OldValue">${this.currency}${this.oldPrice}</span>`:e)()}
        </span>`)()}
      </span>
  ${(()=>this.withPrice&&this.discount?d.dy`
      <span class="Button_Discount"><span class="In"><span class="In"><!--
     --><span class="Button_Discount_Minus">-</span><!--
     --><span class="Button_Discount_Value">${this.discount}</span><!--
     --><span class="Button_Discount_Percent">%</span><!--
   --></span></span></span>`:"")()}
    </a>
  </div>
  ${(()=>{if(!this.withPrice)return"";let e=this.trialDays?bt.cancelSubscriptionAtAnyTime:bt.moneyBackGuarantee;return d.dy`
  <div class="ExtraText">${e}</div>`})()}`}class wt extends((0,x.$)(m.Z)(d.oi)){render(){return yt.call(this)}static get properties(){return{buttonText:{type:String},country:{type:String},currency:{type:String},discount:{type:Number},extraText:{type:String},gaCid:{type:String},ignoredExperiments:{type:Array},oldPrice:{type:Number},premiumLink:{type:String},price:{type:Number},trialDays:{type:Number},withPrice:{type:Boolean}}}constructor(){super(),this.country="",this.ignoredExperiments=[],this.gaCid=(()=>{if("undefined"!=typeof browser||!document.cookie)return"";let e=document.cookie.split("; ").find((e=>e.startsWith("_ga")));return e?e.slice(10):void 0})(),this.removeStorageListener=ee.Z.onChange({for:["Experiment 262: ignore"],do:e=>{e["Experiment 262: ignore"]&&[].push(262)}}),this.withPrice=1===Math.floor(2*Math.random()),(async()=>{await ee.Z.get("Experiment 262: ignore")&&(this.ignoredExperiments=[262])})(),(async()=>{this.daysAfterInstall=await(async()=>{const e=Date.now(),t=await ee.Z.get("daysAfterInstall")||e;return Math.round((e-t)/864e5)})()})()}connectedCallback(){if(super.connectedCallback(),this.firstConnect)return;this.firstConnect=!0;let e=this.extraText;e&&(e=". "+e),o.Z.partial({action:"show_premium_div",category:"extension",label:"premium_div_"+this.buttonText+e})}disconnectedCallback(){super.disconnectedCallback(),this.removeStorageListener()}updated(e){if(e.has("withPrice")){let e=this.classList;this.withPrice?e.add("withPrice"):e.remove("withPrice")}}stateChanged({prices:e,priceTrial:t}){const{currency:i,price:o,oldPrice:n,trialDays:s}=fe({prices:e,priceTrial:t});this.currency=i,this.price=o,this.oldPrice=n,this.trialDays=s}get buttonText(){if(this.withPrice){if(this.trialDays)return(0,r.Z)("get_N_days_free_premium_trial").replace(/XXX/g,String(this.trialDays));if(this.discount)return(0,r.Z)("get_monthly_premium")}return(0,r.Z)("get_premium_now")}get discount(){return this.oldPrice?Math.floor(100*(this.oldPrice-this.price)/this.oldPrice):0}get extraText(){return!this.withPrice||this.trialDays?"":this.discount?(0,r.Z)("for_only")+" "+this.currency+this.price:(0,r.Z)("only_X_per_month").replace(/XXX/g,this.currency+this.price)}get premiumLink(){var e;let t=this.extraText;t&&(t=". "+t);const i=m.Z.getStateSync(),o=Date.now(),n=i.promotions.find((({from:e,till:t,tariffs:i})=>e<=o&&o<=t&&i)),s=null!==(e=null==n?void 0:n.id)&&void 0!==e?e:"default_campaign",r=(()=>{if(!n)return mt;const{tariffs:e}=n;if(!e)throw new Error('No "tariffs" property in tariff');return e.map((({price:{currency:e,value:t},duration:i})=>({currency:e,duration:i,value:t})))})(),a={plan_id:(()=>{const e=r.map((({duration:e,value:t})=>({duration:e,pricePerMonth:t/e}))).sort((({pricePerMonth:e},{pricePerMonth:t})=>e-t)),{duration:t}=e[0];switch(t){case 1:return"monthly";case 12:return"annual";case 24:return"biennial";default:throw new Error("Incorrect duration")}})(),utm_source:"chromium extension",utm_medium:"premium_div",utm_campaign:s,utm_term:this.buttonText+t};this.initiator&&(a.feature=(()=>{switch(this.initiator){case"premium locations":return"countries";case"smart settings":return"smartsettings";case"timezone change":return"browser_tz"}})());const l=[],{experiments:c}=i;{const e=c[N().experiments.premiumOverlayOnPopupOpen.id];if(e){const t=ge(Number(e)).toLowerCase();l.push("252"+t)}}{const e=c[N().experiments.pollBanner.id];if(e){const t=ge(Number(e)).toLowerCase();l.push("254"+t)}}if(!this.ignoredExperiments.includes(262)){switch(c[N().experiments.premiumComparisonOnFirstPopup.id]){case"1":l.push("262b");break;case"2":l.push("262c");break;case"3":l.push("262d")}}switch(c[N().experiments.promotionPageAfterInstall.id]){case"0":l.push("284_a");break;case"1":l.push("284_b")}return l.length&&(a.expvarid=l.join(",")),T({action:e=>Object.assign(e,a),url:(null==n?void 0:n.clickUrl)||Z.Z.premium,storeState:m.Z.getStateSync()})}async close(){const e=this.animate([{top:0},{top:"-100%"}],{duration:800,easing:"linear"});await new Promise((t=>{e.onfinish=t})),this.remove()}async linkClick(){var e,t;(0,g.Z)({type:"popup-premium button click"}),await new Promise((e=>{setTimeout(e,50)})),null===(e=self)||void 0===e||null===(t=e.close)||void 0===t||t.call(e)}}customElements.define("popup-premium",wt);let kt=l({cantStartBecauseYourProxySettingsBlocked:"cant_start_because_your_proxy_settings_blocked",fixIt:"fix_it"});class _t extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      font-size: 14px;
      line-height: 1.3;
      color: var( --brand-blue );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    :host > .Overlay{
      position: absolute;
      top:0px;right:0px;bottom:0px;left:0px;
      overflow: hidden;
      text-indent: -9999px;
      font-size: 0;
      background: rgba(255, 255, 255, 0.5);
    }
    :host > .In{
      position: absolute;
      top:56px;
      right:0px;
      bottom:40px;
      left:0px;
      border: 1px solid transparent;
      border-width: 6px 5px 5px;
    }
    :host > .In > .Bg{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-size: 0;
      overflow: hidden;
    }

    :host > .In > .In{
      position: relative;
      display: table;
      width: 100%;
      height: 100%;
    }
    :host > .In > .In > .In{
      display: table-cell;
      vertical-align: middle;
    }

    .Description{
      color: var( --brand-blue );
      font-size: 16px;
      line-height: 1.375;
      padding: 0 25px;
      text-align: center;
    }
    .Button{
      text-align: center;
      padding-top: 25px;
    }
    .Button input{
      display:inline-block;
      vertical-align:top;
      box-sizing: content-box;
      height: 45px;
      line-height: 45px;
      border: 0;
      cursor: pointer;
      min-width: 200px;
      padding: 0 15px;
      background: #3b9946;
      text-align: center;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
    </style>

    <div class="Overlay">&nbsp;</div>
    <div class="In">
      <div class="Bg"></div>
      <div class="In"><div class="In">
        <div class="Description">
          ${kt.cantStartBecauseYourProxySettingsBlocked}
        </div>
        <div class="Button"><!--
       --><input type="button" value="${kt.fixIt}" @click="${this.fixIt}"/><!--
     --></div>
      </div></div>
    </div>
    `}async fixIt(){await(0,g.Z)({type:"create tab",options:"/pages/unblock_proxy/unblock_proxy.html"}),self.close()}}customElements.define("popup-proxy-blocked",_t);class Et extends d.oi{render(){return d.dy`
    <style>
    ${c}
    :host{
      display: block;
      position: absolute;
    }
    :host > .Bg{
      position: absolute;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
      background: #faf5f5;
      border-radius: 4px;
      border: 1px solid #8e3c33;
      font-size: 0;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    }
    :host > .Bg::before,
    :host > .Bg::after{
      content: '';
      display: block;
      position: absolute;
      left: 16px;
      width: 0;
      height: 0;
      overflow: hidden;
      border: 5px solid transparent;
    }
    :host > .Bg:before{
      top: -10px;
      border-bottom-color: #8e3c33;
    }
    :host > .Bg:after{
      top: -9px;
      border-bottom-color: #faf5f5;
    }
    :host > .In{
      position: relative;
      color: var( --brand-burgundy );
      font-size: 12px;
      padding: 4px 11px;
      line-height: 19px;
      min-height: 19px; /* NOTE border in .Bg */
      min-width: 12px;
    }
    </style>

    <div class="Bg"></div>
    <div class="In">${this.text}</div>`}static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}}customElements.define("tooltip-error",Et);const Ct=async e=>{const t=e.animate([{opacity:1},{opacity:0}],{duration:300,easing:"linear"});await new Promise((e=>{t.onfinish=e})),e.remove()},Pt=({setValue:e,setEndValue:t})=>new Promise((i=>{const o=performance.now(),n=s=>{if(s-o>=300)return t(),void i();e(`filter: blur(${3*(1-(s-o)/300)}px);`),requestAnimationFrame(n)};requestAnimationFrame(n)})),St=({button:e,destroyOnButtonClick:t,parent:i})=>new Promise((n=>{const s=self.innerWidth,r=self.innerHeight,a=e.getBoundingClientRect(),l=e.offsetHeight,c=e.offsetWidth,d=e.offsetHeight+46,p=(({block:e,ellipse:t})=>{const i=t.width/2,o=t.height/2,n="data:image/svg+xml;base64,"+btoa(`<svg viewBox="0 0 ${e.width} ${e.height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <mask id="clip">\n          <rect id="bg" x="0" y="0" width="100%" height="100%" fill="#fff"/>\n          <ellipse cx="${t.centerX}" cy="${t.centerY}" rx="${i}" ry="${o}" fill="#000" />\n        </mask>\n\n        <rect x="0" y="0" width="100%" height="100%" mask="url(#clip)" fill="#000"/>\n      </svg>\n      `.replace(/(\n|\r)/g,"").trim());return`-webkit-mask: url('${n}') 0 0 no-repeat;mask: url('${n}') 0 0 no-repeat;`})({block:{width:s,height:r},ellipse:{centerX:s/2,centerY:a.y+e.offsetHeight/2,height:d,width:e.offsetWidth+40}}),u=document.createElement("div");u.textContent=e.textContent;const h=getComputedStyle(e);u.style.cssText=`background-color: ${h.getPropertyValue("background-color")};border-radius: ${h.getPropertyValue("border-radius")};color: ${h.getPropertyValue("color")};font-family: ${h.getPropertyValue("font-family")};font-size: ${h.getPropertyValue("font-size")};height: ${l}px;line-height: ${h.getPropertyValue("line-height")};width: ${c}px;text-align: center;position: absolute;top: ${a.y}px;left: ${(s-c)/2}px;cursor: pointer;`;const g=document.createElement("first-start-tips-button");g.style.cssText=p,g.bottom=r-a.y+(d-l)/2+6,u.addEventListener("click",(async()=>{o.Z.full({category:"onboarding",action:"onboarding1",label:"vpn_on"}),ee.Z.set("startup tips shown",!0),e.click(),t?(i.style.cssText="",g.remove(),u.remove(),n(!1)):(g.remove(),u.remove(),n(!0))})),g.addEventListener("close",(async()=>{o.Z.full({category:"onboarding",action:"onboarding1",label:"close"}),await Promise.all([Ct(g),Pt({setValue:e=>{i.style.cssText=e+p},setEndValue:()=>{i.style.cssText=""}})]),u.remove(),n(!1)})),i.style.cssText="filter: blur(3px);"+p,document.body.append(g),document.body.append(u)})),$t=async e=>{o.Z.full({category:"onboarding",action:"onboarding1",label:"show"});const t=document.querySelector("div.MainContainer");let i;try{const e=document.querySelector("page-switch");await e.updateComplete;const t=e.shadowRoot.querySelector("main-index");await t.updateComplete,i=t.shadowRoot.querySelector("index-home"),await i.updateComplete}catch(e){return}const n=(()=>{try{return i.shadowRoot.querySelector(".Inactive_Button")}catch(e){return null}})();if(!t||!n)return;await St({button:n,destroyOnButtonClick:"1"===e,parent:t})&&await(e=>new Promise((t=>{o.Z.full({category:"onboarding",action:"onboarding2",label:"show"});const i=document.createElement("first-start-tips-protected");i.addEventListener("close",(async()=>{await Promise.all([Ct(i),Pt({setValue:t=>{e.style.cssText=t},setEndValue:()=>{e.style.cssText=""}})]),t()})),e.style.cssText="filter: blur(3px);",document.body.append(i)})))(t)};var Bt=i(5221),Lt=i.n(Bt),It=i(3355),zt=i(1690);(async()=>{const e=new zt.Z("Popup: page load"),t={domainZoneList:new It.Z,storeState:m.Z.ready};{const e=new zt.Z("Popup: domainZoneList");t.domainZoneList.then((()=>{e.end()}))}{const e=new zt.Z("Popup: store.ready");t.storeState.then((()=>{e.end()}))}let i;(async()=>{const e=await Lt().storage.local.get(null);i=e,Array.isArray(e.domainZoneList)&&t.domainZoneList.resolve(e.domainZoneList),m.Z.initiate({type:"storage",value:e})})(),(async()=>{const e=await(0,g.Z)({type:"domain zone list"});t.domainZoneList.resolve(e)})(),(async()=>{const e=await(0,g.Z)({type:"store: get state"});m.Z.initiate({type:"store state",value:e})})();const s=await t.domainZoneList,r=await t.storeState;Object.assign(self,{domainZoneList:s});const a=new zt.Z("Popup: firstPopupOpen"),l=i?i.firstPopupOpen:await ee.Z.get("firstPopupOpen");a.end();const c=new zt.Z("Popup: get control state"),d=await(async()=>{if("undefined"!=typeof browser||!r.pac.broken)return!0;return!!await n.Z.getControlState()&&(await n.Z.setState({broken:!1}),!0)})();if(c.end(),(0,g.Z)({type:"popup open"}),"index:home"!==m.Z.getStateSync().page&&m.Z.dispatch({type:"Page: set",page:"index:home"}),"installed"===l){o.Z.partial({category:"extension",action:"first_popup_open"});const e=i?i.installVersion:await ee.Z.get("installVersion");if("string"==typeof e&&((e,t,i)=>{const o=(()=>{if(e===i)return 0;let t=e.split(".").map((e=>Number(e))),o=i.split(".").map((e=>Number(e))),n=Math.min(t.length,o.length);for(let e=0;e<n;e++){if(t[e]>o[e])return 1;if(t[e]<o[e])return-1}return t.length>o.length?1:t.length<o.length?-1:0})();switch(t){case"<":return o<0;case">":return o>0;case"<=":return o<=0;case">=":return o>=0;case"===":return 0===o}})(e,">=","3.28.6")){o.Z.full({category:"onboarding",action:"first_popup_open",label:Lt().runtime.getManifest().version});const{experiments:e}=r,t=e[N().experiments.premiumComparisonOnFirstPopup.id],i=await ee.Z.get("Experiment 262: ignore");t&&!i&&o.Z.full({category:"Exp262_first_popup_open",action:ge(Number(t)),label:Lt().runtime.getManifest().version})}ee.Z.set("firstPopupOpen","fulfilled")}(async()=>{(i?i.emptyReserveDomains:await ee.Z.get("emptyReserveDomains"))&&ee.Z.set("emptyReserveDomains",!1)})(),(()=>{const t=document.querySelector("div.MainContainer");if(!t)return;const i=new zt.Z("Popup: append elements"),n=["main-head","page-switch"];d||n.push("popup-proxy-blocked"),n.forEach((e=>{t.append(document.createElement(e))})),(async()=>{if(!d)return;const e=r.experiments[N().experiments.startupTips.id];if(!e||"0"===e)return;await ee.Z.get("startup tips shown")||$t(e)})(),i.end(),e.end(),(async()=>{const{experiments:e,pac:i}=r,n=e[N().experiments.premiumOverlayOnPopupOpen.id];if(!n)return;const s=n?ge(Number(n)):void 0,{"Experiment 252: checkbox checked":a,"Experiment 252: ignore":l}=await Lt().storage.local.get(["Experiment 252: ignore","Experiment 252: checkbox checked"]);if(l)return;if("direct"!==i.mode)return;let c=await ee.Z.get("Experiment 252: show count")||0;if(c++,ee.Z.set("Experiment 252: show count",c),o.Z.full({category:"Exp252_Popup_open",action:s}),a)return;if(c<2)return;if("0"===n)return;o.Z.full({category:"Exp252_Openoffer_show",action:s,label:String(c-1)});const d=document.createElement("onstart-premium-overlay");d.view=n,d.showCount=c,t.append(d)})(),(async()=>{const e=N().experiments.premiumComparisonOnFirstPopup.id,{experiments:i}=r,n=i[e];if(!n||"0"===n)return;if(await ee.Z.get("Experiment 262: ignore"))return;if(await ee.Z.get("Experiment 262: shown"))return;const s=ge(Number(n));o.Z.full({category:"Exp262_Screen1_show",action:s});const a=document.createElement("popup-buy-premium");a.mode=(()=>{switch(n){case"1":return"standard";case"2":return"with price";case"3":return"continue"}})(),t.append(a)})()})()})(),self.onerror=(e,t,i)=>((0,g.Z)({type:"popup error",data:{message:e,fileName:t,lineNumber:i}}),!1),oe.addListener((e=>{(async e=>{"custom"===(null==e?void 0:e.type)&&(await new Promise((e=>{setTimeout(e,2e3)})),(0,g.Z)({type:"personal banner view",id:e.promotionId}))})(e)}))}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var s=i[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,i,n,s)=>{if(!i){var r=1/0;for(d=0;d<e.length;d++){for(var[i,n,s]=e[d],a=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((e=>o.O[e](i[l])))?i.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=42,(()=>{var e={42:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,s,[r,a,l]=i,c=0;if(r.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var d=l(o)}for(t&&t(i);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},i=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=o.O(void 0,[592],(()=>o(1706)));n=o.O(n)})();