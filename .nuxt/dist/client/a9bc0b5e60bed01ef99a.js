(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{364:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){window.location.href=t.$alias.sign()}))}))}}},383:function(t,e,n){"use strict";n(19),n(31),n(70);e.a={beforeMount:function(){var t=this,e=function(){t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}})};if(this.$store.state.isAuth)e();else var n=this.$watch("$store.state.isAuth",(function(t){t&&(e(),n())}))}}},439:function(t,e,n){},545:function(t,e,n){"use strict";var r=n(439);n.n(r).a},595:function(t,e,n){"use strict";n.r(e);var r=n(364),o=n(383),c={name:"UserSettingLayout",mixins:[r.a,o.a],props:{slug:{type:String,required:!0}},computed:{headers:function(){return[{name:"基础设置",route:"/user/".concat(this.slug,"/setting/basic")},{name:"认证设置",route:"/user/".concat(this.slug,"/setting/oauth2")}]}}},l=(n(545),n(7)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-setting-layout"}},[n("ElRow",{staticClass:"column-wrap"},[n("ElCol",{attrs:{span:6}},[n("VSwitcher",{attrs:{headers:t.headers,routable:!0,align:"vertical"}},t._l(t.headers,(function(e,r){return n("NLink",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("span",{domProps:{textContent:t._s(e.name)}})])})),1)],1),t._v(" "),n("ElCol",{attrs:{span:18}},[n("NuxtChild")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);