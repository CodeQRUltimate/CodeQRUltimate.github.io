(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["player"],{8089:function(e,t,r){"use strict";var i=r("9b48"),a=r.n(i);t["default"]=a.a},"99af":function(e,t,r){"use strict";var i=r("23e7"),a=r("d039"),o=r("e8b5"),s=r("861d"),n=r("7b0b"),l=r("07fa"),c=r("8418"),d=r("65f0"),m=r("1dde"),u=r("b622"),h=r("2d00"),p=u("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",b=h>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),y=m("concat"),g=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},x=!b||!y;i({target:"Array",proto:!0,forced:x},{concat:function(e){var t,r,i,a,o,s=n(this),m=d(s,0),u=0;for(t=-1,i=arguments.length;t<i;t++)if(o=-1===t?s:arguments[t],g(o)){if(a=l(o),u+a>f)throw TypeError(v);for(r=0;r<a;r++,u++)r in o&&c(m,u,o[r])}else{if(u>=f)throw TypeError(v);c(m,u++,o)}return m.length=u,m}})},"9b48":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"age":"Age","emojis":"Emojis","favoriteThrow":"Favourite throw","favoriteUltimateMemory":"Ultimate memory","recommendedArtist":"Recommended artist","recommendedRestaurant":"Recommended restaurant","zodiacSign":"Zodiac sign"},"fr":{"age":"Âge","emojis":"Emojis","favoriteThrow":"Lancer de choix","favoriteUltimateMemory":"Souvenir d\'Ultimate","recommendedArtist":"Artiste recommandé","recommendedRestaurant":"Restaurant recommandé","zodiacSign":"Signe du Zodiac"}}'),delete e.options._Ctor}},a15b:function(e,t,r){"use strict";var i=r("23e7"),a=r("44ad"),o=r("fc6a"),s=r("a640"),n=[].join,l=a!=Object,c=s("join",",");i({target:"Array",proto:!0,forced:l||!c},{join:function(e){return n.call(o(this),void 0===e?",":e)}})},bf5c:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-primary mx-auto px-3",staticStyle:{"max-width":"800px"}},[r("router-link",{staticClass:"font-bold p-2 inline-block",attrs:{to:{name:"players"}}},[e._v("Retour aux joueurs")]),e.player?r("div",[r("div",{staticClass:"flex items-end text-graduate mr-10"},[r("div",{staticClass:"text-shadow-swag text-9xl leading-none"},[e._v(" "+e._s(e.player.number)+" ")]),r("div",{staticClass:"flex-grow ml-2"},[r("div",{staticClass:"text-3xl -mb-4"},[e._v(e._s(e.player.firstName))]),e.player.lastName.length<=10?r("div",{staticClass:"text-6xl -mb-3"},[e._v(" "+e._s(e.player.lastName)+" ")]):r("div",{staticClass:"text-5xl -mb-1"},[e._v(e._s(e.player.lastName))])])]),r("div",{staticClass:"border-t border-b-4 border-white pb-1 mb-6"}),r("div",{staticClass:"flex flex-col md:flex-row"},[r("div",{staticClass:"self-center flex-shrink-0 bg-white rounded-lg text-center p-3 mb-6 mr-6 max-w-full"},[r("div",{staticClass:"rounded-lg w-full h-full bg-cover bg-center max-w-full",style:{"background-image":"url('"+e.resolveUrl(e.player.imageUrl)+"')",width:"4in",height:"6in"}}),r("a",{staticClass:"inline-block rounded hover:bg-gray-100 mt-3",attrs:{href:e.qrCodeUrl}},[r("QrCode",{attrs:{value:e.qrCodeUrl,options:{errorCorrectionLevel:"high"}}})],1)]),r("div",e._l(e.descriptionItems,(function(t){return r("div",{key:t[0],staticClass:"flex mb-2"},[r("div",{staticClass:"font-semibold w-32 mr-2 flex-shrink-0"},[e._v(" "+e._s(t[0])+" ")]),r("div",{domProps:{innerHTML:e._s(t[1])}})])})),0)])]):e._e()],1)},a=[],o=r("5530"),s=(r("99af"),r("a15b"),r("5a0c")),n=r.n(s),l=r("2f62"),c=r("b2e5"),d=r.n(c),m={name:"Player",computed:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["player","resolveUrl"])),{},{qrCodeUrl:function(){return"".concat(window.location.origin,"/#/players/").concat(this.player.number,"/meme")},playerAge:function(){return n()().diff(n()(this.player.birthDate),"years")},descriptionItems:function(){var e=[];return this.player.birthDate&&e.push([this.$t("age"),this.playerAge]),this.player.zodiacSign&&e.push([this.$t("zodiacSign"),this.player.zodiacSign]),this.player.topEmojis&&this.player.topEmojis.length>0&&e.push([this.$t("emojis"),this.player.topEmojis.join(" ")]),this.player.recommendedRestaurant&&e.push([this.$t("recommendedRestaurant"),this.player.recommendedRestaurant]),this.player.recommendedArtist&&e.push([this.$t("recommendedArtist"),this.player.recommendedArtist]),this.player.favoriteThrow&&e.push([this.$t("favoriteThrow"),this.player.favoriteThrow]),this.player.favoriteUltimateMemory&&e.push([this.$t("favoriteUltimateMemory"),this.player.favoriteUltimateMemory]),e}}),watch:{$route:function(){this.checkMemeRedirection()}},methods:Object(o["a"])({},Object(l["b"])(["checkMemeRedirection"])),components:{QrCode:d.a}},u=m,h=r("2877"),p=r("8089"),f=Object(h["a"])(u,i,a,!1,null,"1333c701",null);"function"===typeof p["default"]&&Object(p["default"])(f);t["default"]=f.exports}}]);
//# sourceMappingURL=player.0536015e.js.map