(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{450:function(n,t,e){},588:function(n,t,e){"use strict";var r=e(450);e.n(r).a},699:function(n,t,e){"use strict";e.r(t);var r=e(171),l={name:"EditBangumi",layout:"app",components:{ElSwitch:e.n(r).a},asyncData:function(n){var t=n.app,e=n.error,r=n.query.slug;if(r)return t.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then((function(n){return{bangumi:n}})).catch(e)},data:function(){return{bangumi:null}},methods:{handleParentChange:function(n){this.$axios.$post("v1/bangumi/update/set_parent",{bangumi_slug:this.bangumi.slug,result:n})},handleSetParent:function(){var n=this;this.$axios.$post("v1/bangumi/update/set_parent",{child_slug:this.bangumi.slug,parent_slug:this.bangumi.parent_slug}).then((function(){n.$toast.info("设置成功")})).catch((function(t){n.$toast.error(t.message)}))}},head:{title:"番剧关系"}},o=(e(588),e(19)),component=Object(o.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.bangumi?e("div",{attrs:{id:"relation-bangumi"}},[e("p",[e("span",[n._v("作为父节点：")]),n._v(" "),e("ElSwitch",{on:{change:n.handleParentChange},model:{value:n.bangumi.is_parent,callback:function(t){n.$set(n.bangumi,"is_parent",t)},expression:"bangumi.is_parent"}})],1),n._v(" "),e("p",[e("span",[n._v("设置父节点：")]),n._v(" "),e("ElInput",{model:{value:n.bangumi.parent_slug,callback:function(t){n.$set(n.bangumi,"parent_slug",t)},expression:"bangumi.parent_slug"}}),n._v(" "),e("button",{on:{click:n.handleSetParent}},[n._v("确认")])],1)]):n._e()}),[],!1,null,null,null);t.default=component.exports}}]);