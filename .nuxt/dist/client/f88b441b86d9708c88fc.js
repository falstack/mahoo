(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{359:function(e,t,r){},383:function(e,t,r){"use strict";var n=r(359);r.n(n).a},384:function(e,t,r){"use strict";var n=r(362),l=r(373),o=r(377),c=r(389),f={name:"UserRelationItem",components:{UserAvatar:n.a,UserNickname:l.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},d=(r(383),r(10)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"user-rel-item clearfix"},[r("div",{staticClass:"avatar"},[r("UserAvatar",{attrs:{user:e.user,size:60}})],1),e._v(" "),r("div",{staticClass:"intro"},[r("UserNickname",{attrs:{user:e.user}}),e._v(" "),r("p",{staticClass:"oneline intro",domProps:{textContent:e._s(e.user.signature)}})],1),e._v(" "),r("div",{staticClass:"control"},[r("UserFollowBtn",{attrs:{slug:e.user.slug}}),e._v(" "),r("SendMailBtn",{attrs:{slug:e.user.slug,nickname:e.user.nickname}})],1)])}),[],!1,null,null,null);t.a=component.exports},600:function(e,t,r){"use strict";r.r(t);r(172),r(53);var n=r(361),l=r.n(n),o={name:"UserSocialFollowers",components:{UserRelationItem:r(384).a,ElAlert:l.a},props:{slug:{type:String,required:!0}},computed:{query:function(){return{$axios:this.$axios,slug:this.slug,relation:"follower",changing:"slug"}},isMine:function(){return this.$store.getters.isMine(this.slug)}},methods:{detectUserRelation:function(e){var t=this,r=e.data.result;r.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:r.map((function(e){return e.slug})).join(",")}}).then((function(data){t.$store.commit("social/set",{type:"user-follow",data:data}),t.$refs.loader.patch(data)})).catch((function(){}))}}},c=r(10),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-social-followers"}},[e.isMine?r("ElAlert",{attrs:{title:"不用在意粉丝的多少，做自己就好",type:"success"}}):e._e(),e._v(" "),r("FlowLoader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:e.query,callback:e.detectUserRelation},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.flow;return r("ul",{},e._l(n,(function(e){return r("UserRelationItem",{key:e.slug,attrs:{user:e}})})),1)}}])})],1)}),[],!1,null,null,null);t.default=component.exports}}]);