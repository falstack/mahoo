(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{366:function(t,e,r){},407:function(t,e,r){"use strict";var n=r(366);r.n(n).a},408:function(t,e,r){"use strict";var n=r(361),l=r(372),o=r(399),c=r(417),f={name:"UserRelationItem",components:{UserAvatar:n.a,UserNickname:l.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},d=(r(407),r(21)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"user-rel-item clearfix"},[r("div",{staticClass:"avatar"},[r("UserAvatar",{attrs:{user:t.user,size:60}})],1),t._v(" "),r("div",{staticClass:"intro"},[r("UserNickname",{attrs:{user:t.user}}),t._v(" "),r("p",{staticClass:"oneline intro",domProps:{textContent:t._s(t.user.signature)}})],1),t._v(" "),r("div",{staticClass:"control"},[r("UserFollowBtn",{attrs:{slug:t.user.slug}}),t._v(" "),r("SendMailBtn",{attrs:{slug:t.user.slug,nickname:t.user.nickname}})],1)])}),[],!1,null,null,null);e.a=component.exports},765:function(t,e,r){"use strict";r.r(e);r(164),r(39);var n=r(359),l=r.n(n),o={name:"UserSocialFollowing",components:{UserRelationItem:r(408).a,ElAlert:l.a},props:{slug:{type:String,required:!0}},computed:{query:function(){return{$axios:this.$axios,slug:this.slug,relation:"following",changing:"slug"}},isMine:function(){return this.$store.getters.isMine(this.slug)}},methods:{detectUserRelation:function(t){var e=this,r=t.data.result;r.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:r.map((function(t){return t.slug})).join(",")}}).then((function(data){e.$store.commit("social/set",{type:"user-follow",data:data}),e.$refs.loader.patch(data)})).catch((function(){}))}}},c=r(21),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-social-following"}},[t.isMine?r("ElAlert",{attrs:{title:"如果你并不关注TA，那么就取关吧",type:"success"}}):t._e(),t._v(" "),r("FlowLoader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:t.query,callback:t.detectUserRelation},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,(function(t){return r("UserRelationItem",{key:t.slug,attrs:{user:t}})})),1)}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);