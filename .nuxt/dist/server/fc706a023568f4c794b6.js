exports.ids=[38],exports.modules={133:function(t,e){t.exports={game:"game_3Zz4J",name:"name_3l0-N","skeleton-loading":"skeleton-loading_3URmW",skeletonLoading:"skeleton-loading_3URmW",skeleton:"skeleton_1pKMc"}},212:function(t,e,n){"use strict";n.r(e);var r=n(133),c=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=c.a},231:function(t,e){t.exports={undefined:void 0}},248:function(t,e,n){"use strict";var r={name:"GameItem",props:{item:{type:Object,required:!0}}},c=n(1);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.game},[n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"150",height:"150",alt:t.item.name}}),t._v(" "),n("p",{staticClass:"oneline fade-link",class:t.$style.name,domProps:{innerHTML:t._s(t.item.name)}})],1)],1)}),[],!1,(function(t){var e=n(212);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"04273206");e.a=component.exports},325:function(t,e,n){"use strict";n.r(e);var r=n(231),c=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=c.a},390:function(t,e,n){"use strict";n.r(e);var r=n(248),c=n(25),l={name:"UserGame",components:{GameItem:r.a},asyncData:({app:t,error:e,params:n})=>Object(c.a)(t,n).then(t=>({list:t.game})).catch(e),data:()=>({list:[]}),beforeMount(){this.batchPatch()},methods:{batchPatch(){this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map(t=>t.slug).join(",")}}).then(data=>{this.list.forEach((t,e)=>{Object.keys(data).forEach(n=>{t.slug===n&&(this.$set(this.list,e,Object.assign(t,data[n])),this.$refs.list[e].$forceUpdate())})})}).catch(()=>{})}}},o=n(1);var component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-game"}},[this._ssrNode("<ul>","</ul>",this._l(this.list,(function(t){return e("GameItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,(function(t){var e=n(325);e.__inject__&&e.__inject__(t)}),null,"7037c1ec");e.default=component.exports}};