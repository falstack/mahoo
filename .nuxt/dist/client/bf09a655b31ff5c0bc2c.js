(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{373:function(t,n,e){t.exports={topic:"topic_-gkYU",name:"name_3XaYR","skeleton-loading":"skeleton-loading_23JMb",skeletonLoading:"skeleton-loading_23JMb",skeleton:"skeleton_RElLn"}},431:function(t,n,e){"use strict";var c=e(373),o=e.n(c);n.default=o.a},450:function(t,n,e){},471:function(t,n,e){"use strict";var c={name:"TopicItem",props:{item:{type:Object,required:!0}}},o=e(431),r=e(7);var component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{class:t.$style.topic},[e("NLink",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[e("VImg",{attrs:{src:t.item.avatar,width:"40",height:"40",alt:t.item.name}})],1),t._v(" "),e("p",{staticClass:"oneline",class:t.$style.name},[e("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1)],1)}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);n.a=component.exports},563:function(t,n,e){"use strict";var c=e(450);e.n(c).a},608:function(t,n,e){"use strict";e.r(n);e(13),e(173),e(53),e(42),e(14);var c=e(471),o=e(176),r={name:"UserBangumi",components:{TopicItem:c.a},asyncData:function(t){var n=t.app,e=t.error,c=t.params;return Object(o.a)(n,c).then((function(t){return{list:t.topic}})).catch(e)},data:function(){return{list:[]}},beforeMount:function(){this.batchPatch()},methods:{batchPatch:function(){var t=this;this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map((function(t){return t.slug})).join(",")}}).then((function(data){t.list.forEach((function(n,e){Object.keys(data).forEach((function(c){n.slug===c&&(t.$set(t.list,e,Object.assign(n,data[c])),t.$refs.list[e].$forceUpdate())}))}))})).catch((function(){}))}}},l=(e(563),e(7)),component=Object(l.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"user-topic"}},[n("ul",this._l(this.list,(function(t){return n("TopicItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,null,null,null);n.default=component.exports}}]);