exports.ids=[16],exports.modules={173:function(t,e){t.exports={}},228:function(t,e,r){"use strict";r.r(e);var o=r(173),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},260:function(t,e,r){"use strict";r.r(e);var o={name:"UserSocialLayout",props:{user:{type:Object,required:!0},slug:{type:String,required:!0}},computed:{headers(){const{user:t,slug:e}=this,r=this.$utils.convertTA(t.sex,this.$store.getters.isMine(e));return[{name:`${r}的关注`,route:`/user/${e}/social/following`,count:t.following_count},{name:`${r}的粉丝`,route:`/user/${e}/social/followers`,count:t.followers_count},{name:`${r}的朋友`,route:`/user/${e}/social/friends`,count:t.friends_count}]}}},n=r(1);var component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-social-layout"}},[r("ElRow",{staticClass:"column-wrap"},[r("ElCol",{attrs:{span:6}},[r("VSwitcher",{attrs:{headers:t.headers,routable:!0,align:"vertical"}},t._l(t.headers,(function(e,o){return r("NLink",{key:o,staticClass:"tab-item",attrs:{slot:"tab-"+o,to:e.route},slot:"tab-"+o},[r("span",{domProps:{textContent:t._s(e.name)}}),t._v(" "),e.count?r("span",{domProps:{textContent:t._s(e.count)}}):t._e()])})),1)],1),t._v(" "),r("ElCol",{attrs:{span:18}},[r("NuxtChild",{attrs:{slug:t.slug}})],1)],1)],1)}),[],!1,(function(t){var e=r(228);e.__inject__&&e.__inject__(t)}),null,"d283ecbc");e.default=component.exports}};