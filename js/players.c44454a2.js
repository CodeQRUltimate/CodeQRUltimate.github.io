(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["players"],{"3a4b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("BodyBackgroundImage",{attrs:{url:e.playerHovered?e.resolveUrl(e.playerHovered.imageUrl):e.resolveUrl(e.data.teamImageUrl)}}),r("div",{staticClass:"mx-auto mt-5 mb-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white",staticStyle:{"max-width":"600px","backdrop-filter":"blur(8px)"}},e._l(e.players,(function(t){return r("div",{key:t.number,on:{mouseover:function(r){e.playerHovered=t}}},[r("router-link",{staticClass:"block text-graduate hover:bg-white hover:bg-opacity-25 rounded transition-colors duration-200",attrs:{to:{name:"player",params:{playerNumber:t.number}}}},[r("span",{staticClass:"inline-block text-2xl md:text-4xl w-8 md:w-12 text-right mr-4"},[e._v(e._s(t.number))]),r("span",{staticClass:"md:text-xl mr-2"},[e._v(e._s(t.firstName))]),r("span",{staticClass:"md:text-xl"},[e._v(e._s(t.lastName))])])],1)})),0)],1)},n=[],o=r("5530"),l=r("2f62"),s=r("905f"),i={name:"Home",data:function(){return{playerHovered:null}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["d"])(["data"])),Object(l["c"])(["resolveUrl"])),{},{lineups:function(){return this.data.lineups},players:function(){return this.data.players}}),components:{BodyBackgroundImage:s["a"]}},u=i,c=r("2877"),d=r("e9e9"),p=Object(c["a"])(u,a,n,!1,null,"cacb5cf6",null);"function"===typeof d["default"]&&Object(d["default"])(p);t["default"]=p.exports},"905f":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.url?r("style",{tag:"component"},[e._v(" body { background-image: url("+e._s(e.url)+"); background-color: #000 !important; background-position: center; background-size: cover; background-attachment: fixed; background-blend-mode: luminosity; "),e._v(" } ")]):e._e()},n=[],o={name:"BodyBackgroundImage",props:{url:String}},l=o,s=r("2877"),i=Object(s["a"])(l,a,n,!1,null,"1086321f",null);t["a"]=i.exports},bba3:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"lineup":"Lineup","players":"Players"},"fr":{"lineup":"Alignement","players":"Joueurs"}}'),delete e.options._Ctor}},e9e9:function(e,t,r){"use strict";var a=r("bba3"),n=r.n(a);t["default"]=n.a}}]);
//# sourceMappingURL=players.c44454a2.js.map