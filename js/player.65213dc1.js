(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["player"],{8089:function(e,t,r){"use strict";var a=r("9b48"),i=r.n(a);t["default"]=i.a},"825c":function(e,t,r){},"99af":function(e,t,r){"use strict";var a=r("23e7"),i=r("d039"),o=r("e8b5"),s=r("861d"),n=r("7b0b"),l=r("07fa"),c=r("8418"),d=r("65f0"),u=r("1dde"),m=r("b622"),p=r("2d00"),b=m("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",y=p>=51||!i((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=u("concat"),g=function(e){if(!s(e))return!1;var t=e[b];return void 0!==t?!!t:o(e)},x=!y||!v;a({target:"Array",proto:!0,forced:x},{concat:function(e){var t,r,a,i,o,s=n(this),u=d(s,0),m=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?s:arguments[t],g(o)){if(i=l(o),m+i>f)throw TypeError(h);for(r=0;r<i;r++,m++)r in o&&c(u,m,o[r])}else{if(m>=f)throw TypeError(h);c(u,m++,o)}return u.length=m,u}})},"9b48":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"age":"Age","backToLineup":"Back to lineup","backToPlayers":"Back to players","emojis":"Emojis","favoriteThrow":"Favourite throw","favoriteUltimateMemory":"Ultimate memory","recommendedArtist":"Recommended artist","recommendedRestaurant":"Recommended restaurant","zodiacSign":"Zodiac sign"},"fr":{"age":"Âge","backToLineup":"Retour à l\'alignement","backToPlayers":"Retour aux joueurs","emojis":"Emojis","favoriteThrow":"Lancer de choix","favoriteUltimateMemory":"Souvenir d\'Ultimate","recommendedArtist":"Artiste recommandé","recommendedRestaurant":"Restaurant recommandé","zodiacSign":"Signe du Zodiac"}}'),delete e.options._Ctor}},a15b:function(e,t,r){"use strict";var a=r("23e7"),i=r("44ad"),o=r("fc6a"),s=r("a640"),n=[].join,l=i!=Object,c=s("join",",");a({target:"Array",proto:!0,forced:l||!c},{join:function(e){return n.call(o(this),void 0===e?",":e)}})},bbd5:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"border border-white border-opacity-50 hover:border-opacity-100 transition-colors duration-200 inline-block backdrop-blur my-5 px-3 py-2 rounded router-link-active",attrs:{to:e.to}},[r("i",{staticClass:"fa fa-chevron-left mr-2",attrs:{"aria-hidden":"true"}}),e._t("default")],2)},i=[],o={name:"LinkBack",props:{to:Object}},s=o,n=r("2877"),l=Object(n["a"])(s,a,i,!1,null,"2b44a63a",null);t["a"]=l.exports},bf5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mx-auto",staticStyle:{"max-width":"800px"}},[e.player?r("BodyBackgroundImage",{attrs:{url:e.resolveUrl(e.player.imageUrl)}}):e._e(),e.lineupKey?r("LinkBack",{attrs:{to:{name:"lineup",params:{lineupKey:e.lineupKey}}}},[e._v(e._s(e.$t("backToLineup")))]):r("LinkBack",{attrs:{to:{name:"players"}}},[e._v(e._s(e.$t("backToPlayers")))]),r("div",{staticClass:"mb-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white",staticStyle:{"backdrop-filter":"blur(8px)"}},[e.player?r("div",[r("div",{staticClass:"flex flex-col md:flex-row"},[r("div",{staticClass:"self-center flex-shrink-0 bg-white rounded-lg text-center p-1 mb-6 md:mb-0 md:mr-6 max-w-full"},[r("div",{staticClass:"relative rounded-lg w-full h-full bg-cover bg-center max-w-full",style:{"background-image":"url('"+e.resolveUrl(e.player.imageUrl)+"')",width:"4in",height:"6in"}},[r("div",{staticClass:"flex flex-col h-full text-graduate text-left"},[r("div",{staticClass:"mt-auto mb-8"},[r("div",{staticClass:"border-t-2 border-b-2 border-white"},[r("div",{staticClass:"bg-primary text-lg md:text-xl pl-3"},[e._v(" "+e._s(e.player.firstName)+" ")]),r("div",{staticClass:"bg-black pl-3"},[e.player.lastName.length<=10?r("div",{staticClass:"text-2xl md:text-4xl leading-tight"},[e._v(" "+e._s(e.player.lastName)+" ")]):r("div",{staticClass:"text-xl md:text-2xl leading-loose"},[e._v(" "+e._s(e.player.lastName)+" ")])])])]),r("div",{staticClass:"absolute bottom-0 right-0 flex items-center justify-around text-5xl md:text-5xl leading-none mb-6 mr-2 rounded-full border-2 border-white bg-black w-20 h-20 md:w-24 md:h-24"},[e._v(" "+e._s(e.player.number)+" ")]),r("div",{staticClass:"absolute top-0 right-0 flex items-center justify-around text-5xl md:text-5xl leading-none rounded-bl-lg border-l-2 border-b-2 border-white"},[r("a",{attrs:{href:e.qrCodeUrl,target:"_blank"}},[r("QrCode",{attrs:{value:e.qrCodeUrl,options:{errorCorrectionLevel:"high",width:125}}})],1)])])])]),r("div",{staticClass:"text-lg"},e._l(e.descriptionItems,(function(t){return r("div",{key:t[0],staticClass:"item mb-4"},[r("div",{staticClass:"font-semibold"},[e._v(" "+e._s(t[0])+" ")]),r("div",{domProps:{innerHTML:e._s(t[1])}})])})),0)])]):e._e()])],1)},i=[],o=r("5530"),s=(r("99af"),r("a15b"),r("5a0c")),n=r.n(s),l=r("2f62"),c=r("b2e5"),d=r.n(c),u=r("905f"),m=r("bbd5"),p={name:"Player",computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["d"])(["route"])),Object(l["c"])(["player","resolveUrl"])),{},{qrCodeUrl:function(){return"".concat(window.location.origin,"/#/players/").concat(this.player.number,"/meme")},playerAge:function(){return n()().diff(n()(this.player.birthDate),"years")},descriptionItems:function(){var e=[];return this.player.birthDate&&e.push([this.$t("age"),this.playerAge]),this.player.zodiacSign&&e.push([this.$t("zodiacSign"),this.player.zodiacSign]),this.player.topEmojis&&this.player.topEmojis.length>0&&e.push([this.$t("emojis"),this.player.topEmojis.join(" ")]),this.player.recommendedRestaurant&&e.push([this.$t("recommendedRestaurant"),this.player.recommendedRestaurant]),this.player.recommendedArtist&&e.push([this.$t("recommendedArtist"),this.player.recommendedArtist]),this.player.favoriteThrow&&e.push([this.$t("favoriteThrow"),this.player.favoriteThrow]),this.player.favoriteUltimateMemory&&e.push([this.$t("favoriteUltimateMemory"),this.player.favoriteUltimateMemory]),e},lineupKey:function(){return this.route.query.lineup}}),methods:Object(o["a"])({},Object(l["b"])(["checkMemeRedirection"])),mounted:function(){this.checkMemeRedirection()},components:{LinkBack:m["a"],BodyBackgroundImage:u["a"],QrCode:d.a}},b=p,f=(r("eae2"),r("2877")),h=r("8089"),y=Object(f["a"])(b,a,i,!1,null,"1a680330",null);"function"===typeof h["default"]&&Object(h["default"])(y);t["default"]=y.exports},eae2:function(e,t,r){"use strict";r("825c")}}]);
//# sourceMappingURL=player.65213dc1.js.map