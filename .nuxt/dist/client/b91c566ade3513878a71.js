(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{371:function(t,e,n){t.exports={game:"game_3Zz4J",name:"name_3l0-N","skeleton-loading":"skeleton-loading_3URmW",skeletonLoading:"skeleton-loading_3URmW",skeleton:"skeleton_1pKMc"}},428:function(t,e,n){"use strict";var r=n(371),c=n.n(r);e.default=c.a},448:function(t,e,n){},471:function(t,e,n){"use strict";var r={name:"GameItem",props:{item:{type:Object,required:!0}}},c=n(428),l=n(7);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.game},[n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"150",height:"150",alt:t.item.name}}),t._v(" "),n("p",{staticClass:"oneline fade-link",class:t.$style.name,domProps:{innerHTML:t._s(t.item.name)}})],1)],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.a=component.exports},565:function(t,e,n){"use strict";var r=n(448);n.n(r).a},609:function(t,e,n){"use strict";n.r(e);n(13),n(173),n(53),n(42),n(14);var r=n(471),c=n(176),l={name:"UserGame",components:{GameItem:r.a},asyncData:function(t){var e=t.app,n=t.error,r=t.params;return Object(c.a)(e,r).then((function(t){return{list:t.game}})).catch(n)},data:function(){return{list:[]}},beforeMount:function(){this.batchPatch()},methods:{batchPatch:function(){var t=this;this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map((function(t){return t.slug})).join(",")}}).then((function(data){t.list.forEach((function(e,n){Object.keys(data).forEach((function(r){e.slug===r&&(t.$set(t.list,n,Object.assign(e,data[r])),t.$refs.list[n].$forceUpdate())}))}))})).catch((function(){}))}}},o=(n(565),n(7)),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-game"}},[e("ul",this._l(this.list,(function(t){return e("GameItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);