(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64f59a18"],{"0c47":function(t,e,n){var r=n("da84"),i=n("d44e");i(r.JSON,"JSON",!0)},"131a":function(t,e,n){var r=n("23e7"),i=n("d2bb");r({target:"Object",stat:!0},{setPrototypeOf:i})},"1f68":function(t,e,n){"use strict";var r=n("83ab"),i=n("edd0"),o=n("861d"),a=n("7b0b"),s=n("1d80"),c=Object.getPrototypeOf,l=Object.setPrototypeOf,u=Object.prototype,f="__proto__";if(r&&c&&l&&!(f in u))try{i(u,f,{configurable:!0,get:function(){return c(a(this))},set:function(t){var e=s(this);(o(t)||null===t)&&o(e)&&l(e,t)}})}catch(h){}},"23dc":function(t,e,n){var r=n("d44e");r(Math,"Math",!0)},"2c5a":function(t,e,n){},3410:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("7b0b"),a=n("e163"),s=n("e177"),c=i((function(){a(1)}));r({target:"Object",stat:!0,forced:c,sham:!s},{getPrototypeOf:function(t){return a(o(t))}})},4346:function(t,e,n){},"43b2":function(t,e,n){},5362:function(t,e,n){"use strict";n("b0c0");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"musicList"},[t.list.length>0?[e("div",{staticClass:"list-item list-header"},[e("span",{staticClass:"list-name"},[t._v("歌曲")]),e("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?e("span",{staticClass:"list-time"},[t._v("时长")]):e("span",{staticClass:"list-album"},[t._v("专辑")])]),e("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(e){return t.listScroll(e)}}},[t._l(t.list,(function(n,r){return e("div",{key:n.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===n.id},on:{dblclick:function(e){return t.selectItem(n,r,e)}}},[e("span",{staticClass:"list-num",domProps:{textContent:t._s(r+1)}}),e("div",{staticClass:"list-name"},[e("span",[t._v(t._s(n.name))]),e("div",{staticClass:"list-menu"},[e("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(n),size:40},on:{click:function(e){return e.stopPropagation(),t.selectItem(n,r)}}})],1)]),e("span",{staticClass:"list-artist"},[t._v(t._s(n.singer))]),t.isDuration?e("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(n.duration%3600))+" "),e("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(e){return e.stopPropagation(),t.deleteItem(r)}}})],1):e("span",{staticClass:"list-album"},[t._v(t._s(n.album))])])})),t._t("listBtn")],2)]:e("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},i=[],o=n("5530"),a=(n("ac1f"),n("00b4"),n("2f62")),s=n("ca00"),c=n("5af1"),l="album",u="duration",f="pullup",h=100,p={name:"MusicList",components:{MmNoResult:c["a"]},filters:{format:s["b"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:l}},data:function(){return{lockUp:!0}},computed:Object(o["a"])({isDuration:function(){return this.listType===u}},Object(a["c"])(["playing","currentMusic"])),watch:{list:function(t,e){this.listType===f&&(t.length!==e.length||t[t.length-1].id!==e[e.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:Object(o["a"])({listScroll:function(t){var e=t.target.scrollTop;if(this.scrollTop=e,this.listType===f&&!this.lockUp){var n=t.target,r=n.scrollHeight,i=n.offsetHeight;e+i>=r-h&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,e,n){n&&/list-menu-icon-del/.test(n.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,e))},getPlayIconType:function(t){var e=t.id,n=this.playing,r=this.currentMusic.id;return n&&r===e?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},Object(a["d"])({setPlaying:"SET_PLAYING"}))},d=p,m=(n("c587"),n("2877")),v=Object(m["a"])(d,r,i,!1,null,"0747800e",null);e["a"]=v.exports},"5af1":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mm-no-result"},[e("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},i=[],o={name:"MmNoResult",props:{title:{type:String,default:""}}},a=o,s=(n("d478"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,null,null);e["a"]=c.exports},"650b":function(t,e,n){"use strict";n.r(e);n("498a");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),e("div",{staticClass:"search-head"},[t._l(t.Artists,(function(n,r){return e("span",{key:r,on:{click:function(e){return t.clickHot(n.first)}}},[t._v(" "+t._s(n.first)+" ")])})),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:"音乐/歌手"},domProps:{value:t.searchValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter.apply(null,arguments)},input:function(e){e.target.composing||(t.searchValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})],2),e("music-list",{ref:"musicList",attrs:{list:t.list,"list-type":"pullup"},on:{select:t.selectItem,pullUp:t.pullUpLoad}})],1)},i=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("d9e2"),n("3410"),n("14d9"),n("159b"),n("b0c0"),n("131a"),n("1f68"),n("fb6a");function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,o=Object.create(i.prototype),a=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return C()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h={};function p(){}function d(){}function m(){}var v={};l(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&n.call(g,i)&&(v=g);var b=m.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(i,a,s,c){var l=f(t[i],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==o(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=m,l(b,"constructor",m),l(m,"constructor",d),d.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(_.prototype),l(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new _(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function s(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))}}var l=n("2909"),u=n("5530"),f=(n("ac1f"),n("5319"),n("99af"),n("2f62")),h=n("365c"),p=n("eb4d"),d=n("f904"),m=n("5362"),v=n("ac0d"),y=n("ca00"),g={name:"Search",components:{MmLoading:d["a"],MusicList:m["a"]},mixins:[v["a"]],data:function(){return{searchValue:"",Artists:[],list:[],page:0,lockUp:!0}},computed:Object(u["a"])({},Object(f["c"])(["playing","currentMusic"])),watch:{list:function(t,e){(t.length!==e.length||t[t.length-1].id!==e[e.length-1].id)&&(this.lockUp=!1)}},created:function(){var t=this;Object(h["i"])().then((function(e){var n=e.result;t.Artists=n.hots.slice(0,5),t.mmLoadShow=!1}))},methods:Object(u["a"])(Object(u["a"])({clickHot:function(t){this.searchValue=t,this.onEnter()},onEnter:function(){var t=this;""!==this.searchValue.replace(/(^\s+)|(\s+$)/g,"")?(this.mmLoadShow=!0,this.page=0,this.list.length>0&&this.$refs.musicList.scrollTo(),Object(h["h"])(this.searchValue).then((function(e){var n=e.result;t.list=Object(p["b"])(n.songs),t._hideLoad()}))):this.$mmToast("搜索内容不能为空！")},pullUpLoad:function(){var t=this;this.page+=1,Object(h["h"])(this.searchValue,this.page).then((function(e){var n=e.result;n.songs?t.list=[].concat(Object(l["a"])(t.list),Object(l["a"])(Object(p["b"])(n.songs))):t.$mmToast("没有更多歌曲啦！")}))},selectItem:function(t){var e=this;return c(a().mark((function n(){var r;return a().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e._getMusicDetail(t.id);case 3:r=n.sent,t.image=Object(y["f"])(r),e.selectAddPlay(t),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),e.$mmToast("哎呀，出错啦~");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},_getMusicDetail:function(t){return Object(h["c"])(t).then((function(t){return t.songs[0].al.picUrl}))}},Object(f["d"])({setPlaying:"SET_PLAYING"})),Object(f["b"])(["selectAddPlay"]))},b=g,w=(n("9a41"),n("2877")),_=Object(w["a"])(b,r,i,!1,null,"6f1b86f6",null);e["default"]=_.exports},"71de":function(t,e,n){},"944a":function(t,e,n){var r=n("d066"),i=n("e065"),o=n("d44e");i("toStringTag"),o(r("Symbol"),"Symbol")},"9a41":function(t,e,n){"use strict";n("2c5a")},ac0d:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("5530"),i=n("2f62"),o=(Object(r["a"])({},Object(i["c"])(["playing","currentMusic"])),Object(r["a"])(Object(r["a"])({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(i["d"])({setPlaying:"SET_PLAYING"})),Object(i["b"])(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}})},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},c587:function(t,e,n){"use strict";n("4346")},d478:function(t,e,n){"use strict";n("43b2")},dce3:function(t,e,n){"use strict";n("71de")},edd0:function(t,e,n){var r=n("13d2"),i=n("9bf2");t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},f904:function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[e("div",{staticClass:"mm-loading-content"},[e("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[e("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},i=[],o={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},a=o,s=(n("dce3"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-64f59a18.49cd4d80.js.map