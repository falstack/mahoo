(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{360:function(t,n,e){"use strict";e(31);n.a={layout:"web",head(){var{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:()=>({tag:null,children:null}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},398:function(t,n,e){},533:function(t,n,e){"use strict";var l=e(398);e.n(l).a},650:function(t,n,e){"use strict";e.r(n);e(15),e(9),e(19);var l=e(360),r=e(123),c=e(369),o=e(370),h=e(371),d={name:"ZoneTopic",components:{PinFlowList:o.a,TagHotList:h.a,Affix:c.a},mixins:[l.a],asyncData(t){var{app:n,error:e}=t;return Promise.all([Object(r.d)(n,{slug:"3p6"}),Object(r.e)(n,{slug:"3p6"})]).then(data=>({tag:data[0],children:data[1]})).catch(e)},data:()=>({slug:"3p6"})},m=(e(533),e(11)),component=Object(m.a)(d,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-topic"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?n("TagHotList",{attrs:{slug:this.slug,title:"热门话题",children:this.children}}):this._e()],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{xs:24,span:5}},[n("br")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);