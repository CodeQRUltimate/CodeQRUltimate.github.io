(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact-us"],{"6c34":function(t,o,e){"use strict";var a=e("8446"),r=e.n(a);o["default"]=r.a},8446:function(t,o){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"body":"Message","contactUs":"Contact us","send":"Send","subject":"Subject"},"fr":{"body":"Message","contactUs":"Contactez-nous","send":"Envoyer","subject":"Sujet"}}'),delete t.options._Ctor}},"905f":function(t,o,e){"use strict";var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.url?e("style",{tag:"component"},[t._v(" body { background-image: url("+t._s(t.url)+"); background-color: #000 !important; background-position-x: center; background-position-y: 30%; background-size: cover; background-attachment: fixed; background-blend-mode: luminosity; "),t._v(" } ")]):t._e()},r=[],c={name:"BodyBackgroundImage",props:{url:String}},s=c,i=e("2877"),n=Object(i["a"])(s,a,r,!1,null,"6006183d",null);o["a"]=n.exports},e9bb:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mx-auto",staticStyle:{"max-width":"600px"}},[e("BodyBackgroundImage",{attrs:{url:t.resolveUrl(t.data.teamImageUrl)}}),e("div",{staticClass:"my-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white",staticStyle:{"backdrop-filter":"blur(8px)"}},[e("h1",{staticClass:"text-center text-2xl md:text-3xl mb-5"},[t._v(" "+t._s(t.$t("contactUs"))+" ")]),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"inline-block mb-1",attrs:{for:"subject"}},[t._v(t._s(t.$t("subject")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"border border-white border-opacity-50 rounded bg-white bg-opacity-10 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:border-opacity-100 focus:bg-opacity-20 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-25 transition-colors transition-shadow duration-200 w-full px-3 py-2",attrs:{id:"subject",type:"text"},domProps:{value:t.subject},on:{input:function(o){o.target.composing||(t.subject=o.target.value)}}})]),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"inline-block mb-1",attrs:{for:"body"}},[t._v(t._s(t.$t("body")))]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"border border-white border-opacity-50 rounded bg-white bg-opacity-10 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:border-opacity-100 focus:bg-opacity-20 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-25 transition-colors transition-shadow duration-200 w-full px-3 py-2",attrs:{id:"body",rows:"5"},domProps:{value:t.body},on:{input:function(o){o.target.composing||(t.body=o.target.value)}}})]),e("a",{staticClass:"border border-white border-opacity-50 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:border-opacity-100 focus:bg-opacity-20 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-25 transition-colors duration-200 inline-block px-3 py-2 rounded",attrs:{href:"mailto:"+t.data.contactEmail+"?subject="+t.subject+"&body="+t.body,target:"_blank"}},[t._v(t._s(t.$t("send")))])])],1)},r=[],c=e("5530"),s=e("2f62"),i=e("905f"),n={name:"ContactUs",data:function(){return{subject:"",body:""}},computed:Object(c["a"])(Object(c["a"])({},Object(s["d"])(["route","data"])),Object(s["c"])(["resolveUrl","getString"])),components:{BodyBackgroundImage:i["a"]}},u=n,d=e("2877"),b=e("6c34"),l=Object(d["a"])(u,a,r,!1,null,"72cbd5fc",null);"function"===typeof b["default"]&&Object(b["default"])(l);o["default"]=l.exports}}]);
//# sourceMappingURL=contact-us.5a435c82.js.map