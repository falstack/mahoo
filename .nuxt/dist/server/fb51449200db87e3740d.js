exports.ids=[40],exports.modules={134:function(t,e){t.exports={topic:"topic_-gkYU",name:"name_3XaYR","skeleton-loading":"skeleton-loading_23JMb",skeletonLoading:"skeleton-loading_23JMb",skeleton:"skeleton_RElLn"}},213:function(t,e,n){"use strict";n.r(e);var r=n(134),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},232:function(t,e){t.exports={undefined:void 0}},249:function(t,e,n){"use strict";var r={name:"TopicItem",props:{item:{type:Object,required:!0}}},o=n(1);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.topic},[n("NLink",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"40",height:"40",alt:t.item.name}})],1),t._ssrNode(" "),t._ssrNode("<p"+t._ssrClass("oneline",t.$style.name)+">","</p>",[n("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1)],2)}),[],!1,(function(t){var e=n(213);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"443fcfd1");e.a=component.exports},326:function(t,e,n){"use strict";n.r(e);var r=n(232),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},392:function(t,e,n){"use strict";n.r(e);var r=n(249),o=n(25),c={name:"UserBangumi",components:{TopicItem:r.a},asyncData:({app:t,error:e,params:n})=>Object(o.a)(t,n).then(t=>({list:t.topic})).catch(e),data:()=>({list:[]}),beforeMount(){this.batchPatch()},methods:{batchPatch(){this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map(t=>t.slug).join(",")}}).then(data=>{this.list.forEach((t,e)=>{Object.keys(data).forEach(n=>{t.slug===n&&(this.$set(this.list,e,Object.assign(t,data[n])),this.$refs.list[e].$forceUpdate())})})}).catch(()=>{})}}},l=n(1);var component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-topic"}},[this._ssrNode("<ul>","</ul>",this._l(this.list,(function(t){return e("TopicItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,(function(t){var e=n(326);e.__inject__&&e.__inject__(t)}),null,"12ba16c7");e.default=component.exports}};