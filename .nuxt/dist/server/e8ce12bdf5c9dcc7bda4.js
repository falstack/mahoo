exports.ids=[54],exports.modules={102:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},103:function(t,e,n){t.exports=n.p+"img/3251725.png"},109:function(t,e,n){"use strict";n.r(e);var o=n(92),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},110:function(t,e,n){"use strict";var o={name:"SkeletonArticle",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},r=n(1);var component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton-article"},[this._ssrNode('<div class="only-pc"><div class="header"><div class="title gray"></div> <div class="area gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div> <div class="metas"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div></div></div> <div class="only-h5"><div class="header"><div class="avatar gray"></div> <div class="title gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div></div></div> <div class="footer"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div>')])}),[],!1,(function(t){var e=n(109);e.__inject__&&e.__inject__(t)}),null,"53cbe552");e.a=component.exports},115:function(t,e){t.exports={"tag-question":"tag-question_35lHX",tagQuestion:"tag-question_35lHX",content:"content_2PlmD",title:"title_3fNiX",selectable:"selectable_3kiyA",meta:"meta_UlNhL","skeleton-loading":"skeleton-loading_2qj6g",skeletonLoading:"skeleton-loading_2qj6g",skeleton:"skeleton_2oUiD"}},161:function(t,e,n){"use strict";n.r(e);var o=n(115),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},162:function(t,e){t.exports={undefined:void 0}},245:function(t,e,n){"use strict";var o={name:"TagQuestion",mixins:[n(91).a],props:{showControl:{type:Boolean,default:!1},number:{type:Number,default:-1}},data:()=>({loading:!1,submitting:!1}),computed:{vote(){return this.item.content?this.item.content.filter(t=>"vote"===t.type)[0]:null},showPass(){return this.$hasRole("trial_qa")},showRemove(){return this.$hasRole("delete_qa")}},methods:{order:t=>["A","B","C","D"][t],handleDelete(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/delete",{slug:this.item.slug}).then(()=>{this.$toast.success("删除成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}).catch(()=>{})},handlePass(){this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/recommend",{slug:this.item.slug}).then(()=>{this.$toast.success("入库成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))},handleSelect(option){this.showControl||this.submitting||(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.item.slug,answer_hash:[option.id]}).then(()=>{this.$emit("select",{id:this.item.slug,result:option.id})}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1}))}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["tag-question"]},[t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+">","</div>",[t._ssrNode("<h2"+t._ssrClass(null,t.$style.title)+">","</h2>",[t._ssrNode("<p>"+t._s((t.number>-1?t.number+". ":"")+t.item.title.text)+"</p> "),t.showZone?[t.item.area?n("NLink",{attrs:{to:t.$alias.tag(t.item.area.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):t.item.topic?n("NLink",{attrs:{to:t.$alias.tag(t.item.topic.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):t._e()]:t._e()],2),t._ssrNode(" "+(t.vote&&t.vote.data?"<main>"+t._ssrList(t.vote.data.items,(function(option,e){var n;return"<p"+t._ssrClass(null,((n={})[t.$style.selectable]=!t.showControl,n))+">"+(t.item.selected_id&&t.item.selected_id===option.id?'<i class="iconfont ic-right"></i>':t.vote.data.right_ids&&~t.vote.data.right_ids.indexOf(option.id)?'<i class="iconfont ic-right"></i>':"\x3c!----\x3e")+" <span>"+t._ssrEscape(t._s(t.order(e))+". "+t._s(option.text))+"</span></p>"}))+"</main>":"\x3c!----\x3e")+" "),t._ssrNode("<footer>","</footer>",[t._ssrNode("<div"+t._ssrClass(null,t.$style.meta)+">","</div>",[t._ssrNode('<span class="only-pc">出题人：</span> '),n("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n           \n          "),n("span",{staticClass:"only-pc",domProps:{innerHTML:t._s(t.item.author.nickname)}})],1),t._ssrNode(" <span>  ·  </span> <time>"+t._ssrEscape(t._s(t.$utils.timeAgo(t.item.created_at)))+"</time>")],2),t._ssrNode(" "),t.showControl?t._ssrNode("<div>","</div>",[t.showRemove?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"primary"},on:{click:t.handleDelete}},[t._v("\n          删除\n        ")]):t._e(),t._ssrNode(" "),!t.item.recommended_at&&t.showPass?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"success"},on:{click:t.handlePass}},[t._v("\n          通过\n        ")]):t._e()],2):t._e()],2)],2)])}),[],!1,(function(t){var e=n(161);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"4f83b16f");e.a=component.exports},272:function(t,e,n){"use strict";n.r(e);var o=n(162),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},358:function(t,e,n){"use strict";n.r(e);var o=n(110),r={name:"ATField",layout:"web",components:{TagQuestion:n(245).a,SkeletonArticle:o.a},data:()=>({sort:"newest"}),computed:{sortOpts:()=>[{label:"待入库",value:"newest"},{label:"最多赞",value:"like_desc"},{label:"最多踩",value:"like_asc"}],query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10,changing:"slug"}},slug(){return this.$route.query.slug}},methods:{changeSort(t){t!==this.sort&&(this.sort=t,this.$nextTick(()=>{this.$refs.loader.refresh()}))},handleRemove(t){this.$refs.loader.delete(t)}}},l=n(1);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"atfield"}},[o("ElRow",{staticClass:"container"},[o("ElCol",{staticClass:"only-pc",attrs:{span:5}},[o("br")]),t._v(" "),o("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[o("ul",{staticClass:"sortable"},t._l(t.sortOpts,(function(e){return o("li",{key:e.value,class:{"is-active":e.value===t.sort},domProps:{textContent:t._s(e.label)},on:{click:function(n){return t.changeSort(e.value)}}})})),0),t._v(" "),o("FlowLoader",{ref:"loader",attrs:{func:"getATField",type:"page",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{staticClass:"flows"},t._l(n,(function(e){return o("TagQuestion",{key:e.slug,attrs:{"show-zone":!t.slug,"show-control":!0,item:e},on:{remove:function(n){return t.handleRemove(e.slug)}}})})),1)}}])},[t._v(" "),o("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),o("template",{slot:"nothing"},[o("img",{attrs:{src:n(102)}}),t._v(" "),o("p",[t._v("这里什么都没有")])]),t._v(" "),o("template",{slot:"error"},[o("img",{attrs:{src:n(103)}}),t._v(" "),o("p",[t._v("遇到错误了，点击重试")])])],2)],1),t._v(" "),o("ElCol",{staticClass:"only-pc",attrs:{span:5}},[o("br")])],1)],1)}),[],!1,(function(t){var e=n(272);e.__inject__&&e.__inject__(t)}),null,"cd6ed1f0");e.default=component.exports},91:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},92:function(t,e){t.exports={undefined:void 0}}};