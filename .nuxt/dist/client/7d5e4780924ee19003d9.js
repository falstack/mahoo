(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{441:function(t,e,o){},552:function(t,e,o){"use strict";var n=o(441);o.n(n).a},598:function(t,e,o){"use strict";o.r(e);var n={name:"UserSocialLayout",props:{user:{type:Object,required:!0},slug:{type:String,required:!0}},computed:{headers:function(){var t=this.user,e=this.slug,o=this.$utils.convertTA(t.sex,this.$store.getters.isMine(e));return[{name:"".concat(o,"的关注"),route:"/user/".concat(e,"/social/following"),count:t.following_count},{name:"".concat(o,"的粉丝"),route:"/user/".concat(e,"/social/followers"),count:t.followers_count},{name:"".concat(o,"的朋友"),route:"/user/".concat(e,"/social/friends"),count:t.friends_count}]}}},r=(o(552),o(10)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"user-social-layout"}},[o("ElRow",{staticClass:"column-wrap"},[o("ElCol",{attrs:{span:6}},[o("VSwitcher",{attrs:{headers:t.headers,routable:!0,align:"vertical"}},t._l(t.headers,(function(e,n){return o("NLink",{key:n,staticClass:"tab-item",attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[o("span",{domProps:{textContent:t._s(e.name)}}),t._v(" "),e.count?o("span",{domProps:{textContent:t._s(e.count)}}):t._e()])})),1)],1),t._v(" "),o("ElCol",{attrs:{span:18}},[o("NuxtChild",{attrs:{slug:t.slug}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);