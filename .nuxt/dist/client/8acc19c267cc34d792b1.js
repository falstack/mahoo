(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{314:function(t,e,n){"use strict";var r=n(12),o=n(32),l=n(189),c=n(5),h=n(41),d=n(124),m=n(190),_=n(23);r({target:"Promise",proto:!0,real:!0,forced:!!l&&c((function(){l.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=d(this,h("Promise")),n="function"==typeof t;return this.then(n?function(n){return m(e,t()).then((function(){return n}))}:t,n?function(n){return m(e,t()).then((function(){throw n}))}:t)}}),o||"function"!=typeof l||l.prototype.finally||_(l.prototype,"finally",h("Promise").prototype.finally)},441:function(t,e,n){},442:function(t,e,n){},443:function(t,e,n){},571:function(t,e,n){"use strict";var r=n(441);n.n(r).a},572:function(t,e,n){"use strict";var r=n(442);n.n(r).a},573:function(t,e,n){"use strict";var r=n(443);n.n(r).a},632:function(t,e,n){"use strict";n.r(e);n(15),n(31),n(9),n(19);var r=n(123),o=n(369),l=n(370),c=(n(314),{name:"JoinZoneBtn",props:{slug:{type:String,required:!0}},data:()=>({loading:!1}),computed:{state(){return this.$store.getters["social/get"]("tag",this.slug)}},methods:{handleClick(){this.$store.state.isAuth?this.state.is_marked?this.$toast.info("暂不支持退出"):this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/begin",{slug:this.slug}).then(t=>{"reject"===t?this.$toast.info("该分区还未开放"):"resolve"===t?this.$toast.info("你已加入该分区"):"no_rule"===t?this.$toast.info("还没有答题规则"):"no_question"===t?this.$toast.info("分区题目数量不足"):this.getQuestions()}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1})):this.$channel.$emit("sign-in")},getQuestions(){this.$router.push({path:this.$alias.tag(this.slug,"atfield")})}}}),h=n(11),d={name:"JoinCard",components:{JoinZoneBtn:Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.state?n("div",{staticClass:"join-zone-wrap"},[n("ElButton",{attrs:{loading:t.loading,type:"primary",size:"mini",round:"",plain:""},on:{click:t.handleClick}},[t._v("\n    "+t._s(t.state.is_marked?"已加入":"加入")+"\n  ")]),t._v("\n   \n  "),n("NLink",{attrs:{to:t.$alias.tag(t.slug,"qa")}},[n("ElButton",{attrs:{type:"success",size:"mini",round:"",plain:""}},[t._v("\n      出题\n    ")])],1)],1):t._e()}),[],!1,null,null,null).exports},props:{tag:{type:Object,required:!0}}},m=(n(571),Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"join-card"},[n("div",{staticClass:"bg"},[n("VImg",{staticClass:"poster",attrs:{src:t.tag.avatar,width:"250",height:"150"}})],1),t._v(" "),n("div",{staticClass:"content"},[n("h1",{staticClass:"name oneline",domProps:{innerHTML:t._s(t.tag.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{textContent:t._s(t.tag.intro||"暂无简介")}}),t._v(" "),n("JoinZoneBtn",{attrs:{slug:t.tag.slug}})],1),t._v(" "),n("div",{staticClass:"footer"},[n("span",[t._v("成员数："+t._s(t.tag.seen_user_count)+"人")])])])}),[],!1,null,null,null).exports),_=n(371),f=(n(188),{name:"TagControlPanel",props:{slug:{type:String,required:!0},parentSlug:{type:String,required:!0},isMaster:{type:Boolean,required:!0}},computed:{showQA(){return"uh4f"!==this.parentSlug},isAdmin(){return this.$store.getters.isAdmin},state(){return this.$store.getters["social/get"]("tag",this.slug)}},methods:{deleteTag(){this.$confirm("真的要这么做吗?","删除分区").then(()=>{Object(r.c)(this,{slug:this.slug}).then(()=>{this.$toast.success("删除成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},inviteUser(){this.$prompt("请输入受邀者的cc号","邀请用户",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{var{value:e}=t,n=e.trim();if(n.length>16||n.length<2||!/^([a-z0-9]|_|-)+$/i.test(n))return this.$toast.error("错误的cc号");this.$axios.$post("v1/atfield/invite",{user_slug:n,tag_slug:this.slug}).then(()=>{this.$toast.success("邀请成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},changeMaster(){this.$prompt("请输入新班长的cc号","任命班长",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{var{value:e}=t,n=e.trim();if(n.length>16||n.length<2||!/^([a-z0-9]|_|-)+$/i.test(n))return this.$toast.error("错误的cc号");this.$axios.$post("v1/atfield/change_master",{tag_slug:this.slug,user_slug:n}).then(()=>{this.$toast.success("任命成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}}),v=(n(572),Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isMaster||t.isAdmin?n("div",{staticClass:"tag-control-panel"},[n("h3",[t._v("控制台")]),t._v(" "),t.$hasRole("update_tag")?n("NLink",{attrs:{to:t.$alias.tag(t.slug,"edit")}},[n("ElButton",{attrs:{icon:"el-icon-edit",type:"info",round:""}},[t._v("\n      编辑分区\n    ")])],1):t._e(),t._v(" "),t.$hasRole("delete_tag")?n("ElButton",{attrs:{icon:"el-icon-delete",type:"danger",round:""},on:{click:t.deleteTag}},[t._v("\n    删除分区\n  ")]):t._e(),t._v(" "),t.$hasRole("invite_user")?n("ElButton",{attrs:{icon:"el-icon-user",type:"success",round:""},on:{click:t.inviteUser}},[t._v("\n    邀请用户\n  ")]):t._e(),t._v(" "),t.isMaster&&t.isAdmin?n("ElButton",{attrs:{icon:"el-icon-user",type:"warning",round:""},on:{click:t.changeMaster}},[t._v("\n    任命班长\n  ")]):t._e()],1):t._e()}),[],!1,null,null,null).exports),$={name:"TagShow",layout:"web",components:{Affix:o.a,JoinCard:m,PinFlowList:l.a,TagHotList:_.a,TagControlPanel:v},props:{slug:{type:String,required:!0}},asyncData(t){var{app:e,error:n,params:o}=t,{slug:l}=o;return Promise.all([Object(r.d)(e,{slug:l}),Object(r.e)(e,{slug:l})]).then(data=>({tag:data[0],children:data[1]})).catch(n)},data:()=>({tag:null,children:[],is_master:!1}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data)),this.$store.commit("social/set",{type:"tag",slug:this.slug,data:{is_marked:data.is_marked}}),this.is_master=data.is_master}).catch(()=>{})}},head(){var{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}}},y=(n(573),Object(h.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-show"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("div",{staticClass:"left-aside"},[n("JoinCard",{attrs:{tag:t.tag}}),t._v(" "),n("Affix",{attrs:{top:70}},[n("TagHotList",{attrs:{slug:t.slug,children:t.children}})],1)],1)]),t._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:t.slug}})],1),t._v(" "),n("ElCol",{staticClass:"only-pc",attrs:{xs:24,span:5}},[n("div",{staticClass:"right-aside"},[n("TagControlPanel",{attrs:{"is-master":t.is_master,slug:t.slug,"parent-slug":t.tag.parent_slug}})],1)])],1)],1)}),[],!1,null,null,null));e.default=y.exports}}]);