(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{424:function(t,e,n){},529:function(t,e,n){"use strict";var r=n(424);n.n(r).a},591:function(t,e,n){"use strict";n.r(e);n(30);var r=n(361),o=n.n(r),l=n(15),c=n(362),_=n(373),h={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:function(){return{loading:!1}},computed:{isMine:function(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign:function(){var t=this;this.$store.state.isAuth?this.isMine?this.loading||(this.value.daily_signed?this.$toast.info("今天已签过到"):(this.loading=!0,this.$axios.$post("v1/user/daily_sign").then((function(data){t.value.daily_signed=!0,t.$toast.success(data.message),t.loading=!1;try{t.value.sign.continuous_sign_count=data.continuous_sign_count,t.value.sign.latest_signed_at=data.sign_at,t.value.sign.total_sign_count++,t.$store.commit("UPDATE_USER_INFO",{key:"wallet_coin",value:t.$store.state.user.wallet_coin+1})}catch(t){}})).catch((function(e){t.$toast.error(e.message),t.loading=!1})))):this.$toast.info("不能替别人签到"):this.$channel.$emit("sign-in")}}},d=n(10),v=Object(d.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("ElButton",{staticClass:"daily-sign-btn",attrs:{loading:this.loading},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.daily_signed?"已签到":"未签到")+"\n")])}),[],!1,null,null,null).exports,f=n(377),m=n(389),C={name:"UserLayout",components:{ElAlert:o.a,UserAvatar:c.a,UserNickname:_.a,DailySignBtn:v,UserFollowBtn:f.a,SendMailBtn:m.a},props:{slug:{type:String,required:!0}},asyncData:function(t){var e=t.app,n=t.error,r=t.params;return Object(l.d)(e,r).then((function(t){return{user:t}})).catch(n)},data:function(){return{user:null}},computed:{showBirthday:function(){var t=Date.now();return t>=15711552e5&&t<=1571241599e3&&"cc-a18jd"===this.slug},isMine:function(){return this.$store.getters.isMine(this.slug)},self:function(){return this.$store.state.user},avatar:function(){return this.isMine?this.self.avatar:this.user.avatar},banner:function(){return this.isMine?this.self.banner:this.user.banner},nickname:function(){return this.isMine?this.self.nickname:this.user.nickname},signature:function(){return this.isMine?this.self.signature:this.user.signature},sex:function(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers:function(){var t=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:"/user/".concat(this.slug,"/timeline")},{name:"爱好",icon:"like_fill",color:"#fb7299",route:"/user/".concat(this.slug,"/emotion")},{name:"圈子",icon:"group_fill",color:"#02b5da",route:"/user/".concat(this.slug,"/social")}];return this.isMine&&(t=t.concat([{name:"草稿",icon:"document_fill",color:"#f3a034",route:"/user/".concat(this.slug,"/draft")},{name:"消息",icon:"remind_fill",color:"#ff5d47",route:"/user/".concat(this.slug,"/message")},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/setting")}])),t}},beforeMount:function(){this.patchUser()},methods:{patchUser:function(){var t=this;this.$axios.$get("v1/user/patch",{params:{slug:this.slug}}).then((function(data){t.user=t.$set(t,"user",Object.assign(t.user,data)),t.$store.commit("social/set",{type:"user-follow",slug:t.slug,data:{is_following:data.is_following,is_followed_by:data.is_followed_by}})})).catch((function(){}))},handleFollowAction:function(t){this.user.followers_count-=-t}},head:function(){var t=this.user;return{title:"".concat(t.nickname,"的个人空间"),meta:[{hid:"keywords",name:"keywords",content:t.nickname},{hid:"description",name:"description",content:"".concat(t.nickname,",").concat(t.signature)},{hid:"share-image",name:"share-image",content:t.avatar}]}}},y=(n(529),Object(d.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-layout"}},[n("div",{staticClass:"container",attrs:{id:"user-panel"}},[n("div",{staticClass:"banner",style:{backgroundImage:"url("+t.$resizeImage(t.banner,{height:200,mode:2})+")"}},[n("div",{staticClass:"user"},[n("UserAvatar",{attrs:{user:t.user,avatar:t.avatar,size:68}}),t._v(" "),t.user?n("div",{staticClass:"actions only-pc"},[n("UserFollowBtn",{attrs:{slug:t.slug},on:{change:t.handleFollowAction}}),t._v(" "),n("SendMailBtn",{attrs:{slug:t.slug,nickname:t.nickname}})],1):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("UserNickname",{attrs:{user:t.user,nickname:t.nickname,sex:t.sex}}),t._v(" "),n("p",{staticClass:"signature oneline",domProps:{textContent:t._s(t.signature)}})],1)],1)]),t._v(" "),n("VSwitcher",{attrs:{headers:t.headers,routable:!0,"header-height":66,"anchor-trigger":"hover",align:"start"}},[t._l(t.headers,(function(e,r){return n("NLink",{key:r,staticClass:"only-pc",attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon,style:{color:e.color}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])})),t._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[t._v("\n            访问数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.visit_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            关注数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.following_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            粉丝数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.followers_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            活跃度\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.stat_activity)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            曝光度\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.stat_exposure)}})])])],2)],1),t._v(" "),n("div",{staticClass:"container"},[t.showBirthday?[n("br"),t._v(" "),n("ElAlert",{attrs:{title:"祝这位不愿透露姓名的御坂妹妹生日快乐~！",type:"success"}}),t._v(" "),n("br")]:t._e(),t._v(" "),n("ElRow",{staticClass:"h5-no-margin",attrs:{gutter:10}},[n("ElCol",{staticClass:"h5-no-margin",attrs:{span:17,xs:24}},[n("section",{staticClass:"user-section"},[n("NuxtChild",{attrs:{user:t.user}})],1)]),t._v(" "),t.user?n("ElCol",{attrs:{xs:0,span:7}},[n("aside",{staticClass:"user-section"},[n("h3",{staticClass:"title"},[t._v("\n            签到\n          ")]),t._v(" "),n("DailySignBtn",{model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),[n("p",[t._v("总签到次数："+t._s(t.user.total_sign_count)+"次")]),t._v(" "),n("p",[t._v("连续签到数："+t._s(t.user.continuous_sign_count)+"次")]),t._v(" "),n("p",[t._v("最后签到于："+t._s(t.user.latest_signed_at?t.$utils.timeAgo(t.user.latest_signed_at):"未签到"))])]],2),t._v(" "),t.isMine?n("aside",{staticClass:"user-section"},[n("h3",{staticClass:"title"},[t._v("\n            钱包\n          ")]),t._v(" "),[n("p",[t._v("团子："+t._s(parseFloat(t.self.wallet_coin).toFixed(2)))]),t._v(" "),n("p",[t._v("光玉："+t._s(parseFloat(t.self.wallet_money).toFixed(2)))])]],2):t._e()]):t._e()],1)],2)])}),[],!1,null,null,null));e.default=y.exports}}]);