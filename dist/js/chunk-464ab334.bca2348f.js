(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-464ab334"],{"01aa":function(t,s,i){},"01d5":function(t,s,i){"use strict";i("01aa")},4346:function(t,s,i){},"43b2":function(t,s,i){},5362:function(t,s,i){"use strict";i("b0c0");var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"musicList"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(i,e){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){return t.selectItem(i,e,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(e+1)}}),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),s("div",{staticClass:"list-menu"},[s("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(i),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(i,e)}}})],1)]),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t.isDuration?s("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(i.duration%3600))+" "),s("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(e)}}})],1):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])})),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},l=[],n=i("5530"),a=(i("ac1f"),i("00b4"),i("2f62")),c=i("ca00"),o=i("5af1"),r="album",u="duration",m="pullup",p=100,d={name:"MusicList",components:{MmNoResult:o["a"]},filters:{format:c["b"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:r}},data:function(){return{lockUp:!0}},computed:Object(n["a"])({isDuration:function(){return this.listType===u}},Object(a["c"])(["playing","currentMusic"])),watch:{list:function(t,s){this.listType===m&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:Object(n["a"])({listScroll:function(t){var s=t.target.scrollTop;if(this.scrollTop=s,this.listType===m&&!this.lockUp){var i=t.target,e=i.scrollHeight,l=i.offsetHeight;s+l>=e-p&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType:function(t){var s=t.id,i=this.playing,e=this.currentMusic.id;return i&&e===s?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},Object(a["d"])({setPlaying:"SET_PLAYING"}))},f=d,h=(i("c587"),i("2877")),y=Object(h["a"])(f,e,l,!1,null,"0747800e",null);s["a"]=y.exports},"5af1":function(t,s,i){"use strict";var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mm-no-result"},[s("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},l=[],n={name:"MmNoResult",props:{title:{type:String,default:""}}},a=n,c=(i("d478"),i("2877")),o=Object(c["a"])(a,e,l,!1,null,null,null);s["a"]=o.exports},8184:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"playList"},[s("music-list",{attrs:{list:t.playlist,"list-type":"duration"},on:{select:t.selectItem,del:t.deleteItem}},[s("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[s("span",{on:{click:function(s){return t.$refs.dialog.show()}}},[t._v("清空列表")])])]),s("mm-dialog",{ref:"dialog",attrs:{"body-text":"是否清空正在播放列表","confirm-btn-text":"清空"},on:{confirm:t.clearList}})],1)},l=[],n=i("2909"),a=i("5530"),c=(i("a434"),i("2f62")),o=i("5362"),r=i("093b"),u={name:"PlayList",components:{MusicList:o["a"],MmDialog:r["a"]},data:function(){return{show:!1}},computed:Object(a["a"])({},Object(c["c"])(["playing","playlist","currentMusic"])),methods:Object(a["a"])(Object(a["a"])({clearList:function(){this.clearPlayList(),this.$mmToast("列表清空成功")},selectItem:function(t,s){t.id!==this.currentMusic.id&&(this.setCurrentIndex(s),this.setPlaying(!0))},deleteItem:function(t){var s=Object(n["a"])(this.playlist);s.splice(t,1),this.removerPlayListItem({list:s,index:t}),this.$mmToast("删除成功")}},Object(c["d"])({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"})),Object(c["b"])(["removerPlayListItem","clearPlayList"]))},m=u,p=(i("01d5"),i("2877")),d=Object(p["a"])(m,e,l,!1,null,null,null);s["default"]=d.exports},c587:function(t,s,i){"use strict";i("4346")},d478:function(t,s,i){"use strict";i("43b2")}}]);
//# sourceMappingURL=chunk-464ab334.bca2348f.js.map