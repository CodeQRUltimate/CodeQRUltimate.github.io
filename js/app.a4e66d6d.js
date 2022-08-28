(function(){var e={86:function(e){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"contactUs":"Contact us","lineups":"Lineups","players":"Players"},"fr":{"contactUs":"Contactez-nous","lineups":"Alignements","players":"Joueurs"}}'),delete e.options._Ctor}},642:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shadow-md rounded-lg"},[t("div",{staticClass:"p-2 bg-yellow-500 rounded-lg"},[t("div",{staticClass:"border-2 border-primary bg-primary rounded-lg"},[e._t("default")],2)])])},r=[],o={name:"BaseStitchedContainer"},i=o,l=n(1),s=(0,l.Z)(i,a,r,!1,null,null,null),c=s.exports},770:function(e,t,n){"use strict";var a=n(144),r=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"text-shadow":"0 0 0.25rem #000"}},[t("div",{staticClass:"bg-black text-white overflow-y-scroll hidden"}),t("div",{staticClass:"flex items-center fixed top-0 right-0 left-0 bg-black text-graduate z-40 md:hidden"},[t("button",{staticClass:"p-4",on:{click:function(t){e.isMenuCollapsed=!1}}},[t("i",{staticClass:"fas fa-bars"})]),t("router-link",{staticClass:"inline-block text-xl",attrs:{to:{name:"home"}}},[e._v(e._s(e.generalData.teamName||"Code QR Ultimate"))])],1),t("div",{staticClass:"flex flex-col items-baseline fixed top-0 left-0 md:right-0 bottom-0 w-80 max-w-full bg-black shadow-xl text-graduate z-40 transform transition-transform md:flex-row md:w-auto md:bottom-auto md:-translate-x-0",class:{"-translate-x-full":e.isMenuCollapsed}},[t("div",{staticClass:"flex items-center w-full md:w-auto"},[t("router-link",{staticClass:"inline-block p-4 mr-4 text-xl flex-grow",attrs:{to:{name:"home"}}},[e._v("Code QR Ultimate")]),t("button",{staticClass:"ml-auto p-4 md:hidden",on:{click:function(t){e.isMenuCollapsed=!0}}},[t("i",{staticClass:"fas fa-arrow-left"})])],1),t("div",{staticClass:"flex flex-col flex-grow w-full md:flex-row md:w-auto"},[t("router-link",{staticClass:"inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200",attrs:{to:{name:"lineups"},"active-class":"text-opacity-100 border-r border-white md:border-r-0 md:border-b"}},[e._v(e._s(e.$t("lineups")))]),t("router-link",{staticClass:"inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200",attrs:{to:{name:"players"},"active-class":"text-opacity-100 border-r border-white md:border-r-0 md:border-b"}},[e._v(e._s(e.$t("players")))]),t("router-link",{staticClass:"inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200",attrs:{to:{name:"contact-us"},"active-class":"text-opacity-100 border-r border-white md:border-r-0 md:border-b"}},[e._v(e._s(e.$t("contactUs")))]),t("div",{staticClass:"md:ml-auto"},["en"===e.locale?t("button",{staticClass:"inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200",on:{click:function(t){return e.setLocale("fr")}}},[e._v(" Français ")]):e._e(),"fr"===e.locale?t("button",{staticClass:"inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200",on:{click:function(t){return e.setLocale("en")}}},[e._v(" English ")]):e._e()])],1)]),t("div",{staticClass:"h-20",staticStyle:{height:"62px"}}),t("transition",{attrs:{name:"page",mode:"out-in"}},[t("router-view")],1)],1)},o=[],i=n(629),l={name:"App",data(){return{isMenuCollapsed:!0}},watch:{$route(){this.isMenuCollapsed=!0}},computed:{...(0,i.rn)(["locale"]),...(0,i.Se)(["generalData"])},methods:{...(0,i.nv)(["getData","setLocale"])},async mounted(){await this.getData()}},s=l,c=n(1),u=n(86),d=n.n(u),p=d(),f=(0,c.Z)(s,r,o,!1,null,"095e6aee",null);"function"===typeof p&&p(f);var m=f.exports,h=n(345);a.ZP.use(h.Z);const b=[{path:"/",name:"home",component:()=>Promise.all([n.e(995),n.e(177)]).then(n.bind(n,839))},{path:"/lineups",name:"lineups",component:()=>n.e(806).then(n.bind(n,407))},{path:"/lineups/:lineupKey",name:"lineup",component:()=>n.e(144).then(n.bind(n,690))},{path:"/players",name:"players",component:()=>n.e(935).then(n.bind(n,102))},{path:"/players/:playerNumber",name:"player",component:()=>Promise.all([n.e(995),n.e(35)]).then(n.bind(n,385))},{path:"/players/:playerNumber/meme",name:"playerMeme",component:()=>Promise.all([n.e(995),n.e(35)]).then(n.bind(n,385))},{path:"/contact-us",name:"contact-us",component:()=>n.e(477).then(n.bind(n,124))}],v=new h.Z({routes:b});var y=v,g=n(152);a.ZP.use(g.Z);var w=new g.Z({locale:"fr"}),x=n(484),C=n.n(x),_=n(110),k=n.n(_),O=n(176),S=n.n(O),P=n(486),L=n(105);C().extend(k()),C().extend(S()),a.ZP.use(i.ZP);var j=new i.ZP.Store({state:{defaultLocale:"fr",locale:"fr",route:{params:{},name:""},data:{general:[],players:[],lineups:[],zodiacSigns:[]}},getters:{generalData:e=>e.data.general[0]||{},playerNumber:e=>Number(e.route.params.playerNumber),player:(e,t)=>e.data.players.find((e=>e.number==t.playerNumber)),shouldRedirectToMemeUrl:e=>"playerMeme"===e.route.name,lineupsByYear:e=>(0,P.uniq)(e.data.lineups.map((e=>e.year))).map((t=>({year:t,lineups:e.data.lineups.filter((e=>e.year===t))}))),getDataList:()=>e=>(e.toString()||"").split(",").map((e=>e.trim())),resolveUrl:(e,t)=>e=>e?.replace("~",t.generalData.dataOrigin)??"",getString:e=>(t,n)=>t[n+"_"+(e.locale||e.defaultLocale).toUpperCase()]||t[n+"_"+e.defaultLocale.toUpperCase()],getZodiacSign:e=>t=>e.data.zodiacSigns.find((e=>e.key===t))},mutations:{LOCALE_SET:(e,t)=>{e.locale=t},DATA_SET:(e,t)=>{e.data=t}},actions:{setLocale({commit:e},t){t=t.toLowerCase(),e("LOCALE_SET",t),w.locale=t,C().locale(t)},async getData({commit:e,dispatch:t}){const n=await fetch("https://raw.githubusercontent.com/CodeQRUltimate/CodeQRUltimate.github.io/data/data.xlsx"),a=await n.arrayBuffer(),r=L.ij(a),o={};r.SheetNames.forEach((e=>{const t=r.Sheets[e];o[e]=L.P6.sheet_to_json(t)})),e("DATA_SET",E(o)),await t("checkMemeRedirection")},checkMemeRedirection({getters:e}){e.player&&e.shouldRedirectToMemeUrl&&(window.location=e.player.memeUrl)}}});const E=e=>{var t,n,a,r;if(e instanceof Array)return e.map((function(e){return"object"===typeof e&&(e=E(e)),e}));for(n in t={},e)e.hasOwnProperty(n)&&(a=(n.charAt(0).toLowerCase()+n.slice(1)||n).toString(),r=e[n],(r instanceof Array||null!==r&&r.constructor===Object)&&(r=E(r)),t[a]=r);return t};var T=n(678);const Z=n(917);Z.keys().forEach((e=>{const t=Z(e),n=(0,P.upperFirst)((0,P.camelCase)(e.split("/").pop().replace(/\.\w+$/,"")));a.ZP.component(n,t.default||t)}));n(23);C().locale("fr"),a.ZP.config.productionTip=!1,(0,T.Z)(j,y),new a.ZP({router:y,store:j,i18n:w,render:e=>e(m)}).$mount("#app")},917:function(e,t,n){var a={"./BaseStitchedContainer.vue":642};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=917}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({35:"player",144:"lineup",177:"home",477:"contact-us",806:"lineups",935:"players"}[e]||e)+"."+{35:"aecfd887",144:"ac3f045e",177:"df2ef7a2",477:"910eab47",806:"17e587fa",935:"f1d9a11e",995:"58a9799c"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="code-qr-ultimate:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=a),e[a]=[r];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),l=new Error,s=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],l=a[1],s=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(a);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkcode_qr_ultimate"]=self["webpackChunkcode_qr_ultimate"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(770)}));a=n.O(a)})();
//# sourceMappingURL=app.a4e66d6d.js.map