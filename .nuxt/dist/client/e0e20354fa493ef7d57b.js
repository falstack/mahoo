(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{487:function(t,n,e){},488:function(t,n,e){},489:function(t,n,e){},619:function(t,n,e){"use strict";var o=e(487);e.n(o).a},620:function(t,n,e){"use strict";var o=e(488);e.n(o).a},621:function(t,n,e){"use strict";var o=e(489);e.n(o).a},674:function(t,n,e){"use strict";e.r(n);e(28),e(30),e(8),e(36),e(38);var o=e(163),r=e(412),c=e(413),l={name:"JoinZoneBtn",props:{slug:{type:String,required:!0}},data:function(){return{loading:!1}},computed:{state:function(){return this.$store.getters["social/get"]("tag",this.slug)}},methods:{handleClick:function(){var t=this;this.$store.state.isAuth?this.state.is_marked?this.$toast.info("暂不支持退出"):this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/begin",{slug:this.slug}).then((function(n){"reject"===n?t.$toast.info("该分区还未开放"):"resolve"===n?t.$toast.info("你已加入该分区"):"no_rule"===n?t.$toast.info("还没有答题规则"):"no_question"===n?t.$toast.info("分区题目数量不足"):t.getQuestions()})).catch((function(n){t.$toast.error(n.message)})).finally((function(){t.loading=!1}))):this.$channel.$emit("sign-in")},getQuestions:function(){this.$router.push({path:this.$alias.tag(this.slug,"atfield")})}}},h=e(19),d={name:"JoinCard",components:{JoinZoneBtn:Object(h.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.state?e("div",{staticClass:"join-zone-wrap"},[e("ElButton",{attrs:{loading:t.loading,type:"primary",size:"mini",round:"",plain:""},on:{click:t.handleClick}},[t._v("\n    "+t._s(t.state.is_marked?"已加入":"加入")+"\n  ")]),t._v("\n   \n  "),e("NLink",{attrs:{to:t.$alias.tag(t.slug,"qa")}},[e("ElButton",{attrs:{type:"success",size:"mini",round:"",plain:""}},[t._v("\n      出题\n    ")])],1)],1):t._e()}),[],!1,null,null,null).exports},props:{tag:{type:Object,required:!0}}},f=(e(619),Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"join-card"},[e("div",{staticClass:"bg"},[e("VImg",{staticClass:"poster",attrs:{src:t.tag.avatar,width:"250",height:"150"}})],1),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name oneline",domProps:{innerHTML:t._s(t.tag.name)}}),t._v(" "),e("p",{staticClass:"desc",domProps:{textContent:t._s(t.tag.intro||"暂无简介")}}),t._v(" "),e("JoinZoneBtn",{attrs:{slug:t.tag.slug}})],1),t._v(" "),e("div",{staticClass:"footer"},[e("span",[t._v("成员数："+t._s(t.tag.seen_user_count)+"人")])])])}),[],!1,null,null,null).exports),m=e(414),_=(e(235),{name:"TagControlPanel",props:{slug:{type:String,required:!0},parentSlug:{type:String,required:!0},isMaster:{type:Boolean,required:!0}},computed:{showQA:function(){return"uh4f"!==this.parentSlug},isAdmin:function(){return this.$store.getters.isAdmin},state:function(){return this.$store.getters["social/get"]("tag",this.slug)}},methods:{deleteTag:function(){var t=this;this.$confirm("真的要这么做吗?","删除分区").then((function(){Object(o.c)(t,{slug:t.slug}).then((function(){t.$toast.success("删除成功").then((function(){window.location.reload()}))})).catch((function(n){t.$toast.error(n.message)}))})).catch((function(){}))},inviteUser:function(){var t=this;this.$prompt("请输入受邀者的cc号","邀请用户",{confirmButtonText:"提交",cancelButtonText:"取消"}).then((function(n){var e=n.value.trim();if(e.length>16||e.length<2||!/^([a-z0-9]|_|-)+$/i.test(e))return t.$toast.error("错误的cc号");t.$axios.$post("v1/atfield/invite",{user_slug:e,tag_slug:t.slug}).then((function(){t.$toast.success("邀请成功")})).catch((function(n){t.$toast.error(n.message)}))})).catch((function(){}))},changeMaster:function(){var t=this;this.$prompt("请输入新班长的cc号","任命班长",{confirmButtonText:"提交",cancelButtonText:"取消"}).then((function(n){var e=n.value.trim();if(e.length>16||e.length<2||!/^([a-z0-9]|_|-)+$/i.test(e))return t.$toast.error("错误的cc号");t.$axios.$post("v1/atfield/change_master",{tag_slug:t.slug,user_slug:e}).then((function(){t.$toast.success("任命成功").then((function(){window.location.reload()}))})).catch((function(n){t.$toast.error(n.message)}))})).catch((function(){}))}}}),v=(e(620),Object(h.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isMaster||t.isAdmin?e("div",{staticClass:"tag-control-panel"},[e("h3",[t._v("控制台")]),t._v(" "),t.$hasRole("update_tag")?e("NLink",{attrs:{to:t.$alias.tag(t.slug,"edit")}},[e("ElButton",{attrs:{icon:"el-icon-edit",type:"info",round:""}},[t._v("\n      编辑分区\n    ")])],1):t._e(),t._v(" "),t.$hasRole("delete_tag")?e("ElButton",{attrs:{icon:"el-icon-delete",type:"danger",round:""},on:{click:t.deleteTag}},[t._v("\n    删除分区\n  ")]):t._e(),t._v(" "),t.$hasRole("invite_user")?e("ElButton",{attrs:{icon:"el-icon-user",type:"success",round:""},on:{click:t.inviteUser}},[t._v("\n    邀请用户\n  ")]):t._e(),t._v(" "),t.isMaster&&t.isAdmin?e("ElButton",{attrs:{icon:"el-icon-user",type:"warning",round:""},on:{click:t.changeMaster}},[t._v("\n    任命班长\n  ")]):t._e()],1):t._e()}),[],!1,null,null,null).exports),$={name:"TagShow",layout:"web",components:{Affix:r.a,JoinCard:f,PinFlowList:c.a,TagHotList:m.a,TagControlPanel:v},props:{slug:{type:String,required:!0}},asyncData:function(t){var n=t.app,e=t.error,r=t.params.slug;return Promise.all([Object(o.d)(n,{slug:r}),Object(o.e)(n,{slug:r})]).then((function(data){return{tag:data[0],children:data[1]}})).catch(e)},data:function(){return{tag:null,children:[],is_master:!1}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then((function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data)),t.$store.commit("social/set",{type:"tag",slug:t.slug,data:{is_marked:data.is_marked}}),t.is_master=data.is_master})).catch((function(){}))}},head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}}},C=(e(621),Object(h.a)($,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"tag-show"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{attrs:{xs:24,span:5}},[e("div",{staticClass:"left-aside"},[e("JoinCard",{attrs:{tag:t.tag}}),t._v(" "),e("Affix",{attrs:{top:70}},[e("TagHotList",{attrs:{slug:t.slug,children:t.children}})],1)],1)]),t._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[e("PinFlowList",{attrs:{slug:t.slug}})],1),t._v(" "),e("ElCol",{staticClass:"only-pc",attrs:{xs:24,span:5}},[e("div",{staticClass:"right-aside"},[e("TagControlPanel",{attrs:{"is-master":t.is_master,slug:t.slug,"parent-slug":t.tag.parent_slug}})],1)])],1)],1)}),[],!1,null,null,null));n.default=C.exports}}]);