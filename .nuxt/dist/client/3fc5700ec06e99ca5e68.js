(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{379:function(e,t,o){e.exports={container:"container_38LTS",header:"header_1m5og",title:"title_20O3t",close:"close_uLA1x",content:"content_37QpV",loading:"loading_32o64","no-more":"no-more_2gF1n",noMore:"no-more_2gF1n",footer:"footer_2bdAt",cancel:"cancel_3BYdT",submit:"submit_1MUgK","skeleton-loading":"skeleton-loading_O1luh",skeletonLoading:"skeleton-loading_O1luh",skeleton:"skeleton_3GqAO"}},403:function(e,t,o){"use strict";o(91);var dialog=o(431),n={name:"VDialog",components:{ElDialog:o.n(dialog).a},props:{value:{type:Boolean,default:!1,required:!0},customClass:{type:String,default:""},close:{type:Boolean,default:!0},width:{type:String,default:"620px"},height:{type:String,default:""},title:{type:String,default:"提示"},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},submitText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},scroll:{type:Function,default:null},fullscreen:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},theme:{type:String,validator:function(e){return~["success","danger"].indexOf(e)},default:"success"}},data:function(){return{dialogVisible:this.value}},computed:{computeDialogHeight:function(){return this.height?{height:this.height}:this.scroll?{height:"600px"}:{height:"auto"}}},mounted:function(){var e=this;this.$watch("value",(function(t){e.dialogVisible=t,window.__closeImageLazy__=t})),this.$watch("dialogVisible",(function(t){e.$emit("input",t),window.__closeImageLazy__=t}))},methods:{beforeClose:function(e){e(),this.$emit("cancel"),this.dialogVisible=!1},cancel:function(){this.$emit("cancel"),this.dialogVisible=!1},submit:function(){this.$emit("submit")},handleScroll:function(e){if(this.scroll&&!this.loading&&!this.noMore&&this.$refs.ul){var main=e.currentTarget||e.target;this.$refs.ul.clientHeight-main.clientHeight-main.scrollTop<30&&this.scroll()}}}},l=o(432),r=o(7);var component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ElDialog",{staticClass:"v-dialog",attrs:{width:e.width,"custom-class":e.customClass,"show-close":!1,visible:e.dialogVisible,"before-close":e.beforeClose,fullscreen:e.fullscreen,"modal-append-to-body":!1,"append-to-body":!1,"close-on-click-modal":e.clickClose,"close-on-press-escape":e.clickClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("section",{class:e.$style.container},[e.header?o("header",{class:e.$style.header,attrs:{slot:"header"},slot:"header"},[e._t("title",[o("h4",{class:e.$style.title,domProps:{textContent:e._s(e.title)}})])],2):e._e(),e._v(" "),!e.clickClose||e.close?o("button",{class:e.$style.close,on:{click:e.cancel}},[e._v("\n      ×\n    ")]):e._e(),e._v(" "),o("main",{class:e.$style.content,style:e.computeDialogHeight,on:{scroll:e.handleScroll}},[e.scroll?[o("ul",{ref:"ul"},[e._t("default")],2),e._v(" "),e.loading?e._t("loading",[o("p",[e._v("加载中...")])]):e.noMore?e._t("nomore",[o("p",[e._v("没有更多了")])]):e._e()]:e._t("default")],2),e._v(" "),e.footer?o("footer",{class:e.$style.footer},[e._t("footer",[e.cancelText?o("button",{class:e.$style.cancel,domProps:{textContent:e._s(e.cancelText)},on:{click:e.cancel}}):e._e(),e._v(" "),o("button",{class:[e.$style.submit,"btn-"+e.theme],attrs:{loading:e.loading},domProps:{textContent:e._s(e.submitText)},on:{click:e.submit}})])],2):e._e()])])}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.a=component.exports},431:function(e,t,o){e.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/dist/",o(o.s=89)}({0:function(e,t,o){"use strict";function n(e,t,o,n,l,r,c,d){var h,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=o,f._compiled=!0),n&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),c?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},f._ssrRegister=h):l&&(h=d?function(){l.call(this,this.$root.$options.shadowRoot)}:l),h)if(f.functional){f._injectStyles=h;var _=f.render;f.render=function(e,t){return h.call(t),_(e,t)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,h):[h]}return{exports:e,options:f}}o.d(t,"a",(function(){return n}))},11:function(e,t){e.exports=o(247)},15:function(e,t){e.exports=o(178)},4:function(e,t){e.exports=o(175)},89:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-dialog__wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleWrapperClick(t)}}},[o("div",{key:e.key,ref:"dialog",class:["el-dialog",{"is-fullscreen":e.fullscreen,"el-dialog--center":e.center},e.customClass],style:e.style,attrs:{role:"dialog","aria-modal":"true","aria-label":e.title||"dialog"}},[o("div",{staticClass:"el-dialog__header"},[e._t("title",[o("span",{staticClass:"el-dialog__title"},[e._v(e._s(e.title))])]),e.showClose?o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:e.handleClose}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]):e._e()],2),e.rendered?o("div",{staticClass:"el-dialog__body"},[e._t("default")],2):e._e(),e.$slots.footer?o("div",{staticClass:"el-dialog__footer"},[e._t("footer")],2):e._e()])])])};n._withStripped=!0;var l=o(15),r=o.n(l),c=o(11),d=o.n(c),h=o(4),f=o.n(h),_={name:"ElDialog",mixins:[r.a,f.a,d.a],props:{title:{type:String,default:""},modal:{type:Boolean,default:!0},modalAppendToBody:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},width:String,fullscreen:Boolean,customClass:{type:String,default:""},top:{type:String,default:"15vh"},beforeClose:Function,center:{type:Boolean,default:!1},destroyOnClose:Boolean},data:function(){return{closed:!1,key:0}},watch:{visible:function(e){var t=this;e?(this.closed=!1,this.$emit("open"),this.$el.addEventListener("scroll",this.updatePopper),this.$nextTick((function(){t.$refs.dialog.scrollTop=0})),this.appendToBody&&document.body.appendChild(this.$el)):(this.$el.removeEventListener("scroll",this.updatePopper),this.closed||this.$emit("close"),this.destroyOnClose&&this.$nextTick((function(){t.key++})))}},computed:{style:function(){var style={};return this.fullscreen||(style.marginTop=this.top,this.width&&(style.width=this.width)),style}},methods:{getMigratingConfig:function(){return{props:{size:"size is removed."}}},handleWrapperClick:function(){this.closeOnClickModal&&this.handleClose()},handleClose:function(){"function"==typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(e){!1!==e&&(this.$emit("update:visible",!1),this.$emit("close"),this.closed=!0)},updatePopper:function(){this.broadcast("ElSelectDropdown","updatePopper"),this.broadcast("ElDropdownMenu","updatePopper")},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}},mounted:function(){this.visible&&(this.rendered=!0,this.open(),this.appendToBody&&document.body.appendChild(this.$el))},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},m=o(0),component=Object(m.a)(_,n,[],!1,null,null,null);component.options.__file="packages/dialog/src/component.vue";var v=component.exports;v.install=function(e){e.component(v.name,v)};t.default=v}})},432:function(e,t,o){"use strict";var n=o(379),l=o.n(n);t.default=l.a},458:function(e,t,o){},560:function(e,t,o){"use strict";var n=o(458);o.n(n).a},610:function(e,t,o){"use strict";o.r(t);o(30),o(32),o(18);var n=o(2),l=o(17),r=o(65),c={name:"UserAuthSetting",components:{VDialog:o(403).a},data:function(){return{phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,showBiliForm:!1,loadingBindPhone:!1,biliUid:"",loadingBindBilibili:!1}},computed:{isAuth:function(){return this.$store.state.isAuth},user:function(){return this.$store.state.user}},methods:{bindUserQQ:function(){this.user.providers.bind_qq||(window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=bind&token=".concat(Object(r.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserWechat:function(){this.user.providers.bind_wechat||(window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=".concat(Object(r.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserPhone:function(){var e=this;this.user.providers.bind_phone||(this.timeout?this.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(o){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.value,e.phone=n,t.prev=2,t.next=5,Object(l.i)(e,{type:"bind_phone",phone_number:n});case 5:e.showInfoForm=!0,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),e.$toast.error(t.t0.message);case 11:return t.prev=11,e.timeout=60,r=setInterval((function(){--e.timeout||clearInterval(r)}),1e3),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[2,8,11,15]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(){})))},bindUserBilibili:function(){this.user.providers.bind_bilibili||(this.showBiliForm=!0)},submitBindBilibili:function(){var e=this;this.biliUid&&!this.loadingBindBilibili?(this.loadingBindBilibili=!0,this.$toast.success("验证中，请稍候..."),this.$axios.$post("v1/door/oauth_channel",{channel:"bilibili",id:this.biliUid}).then((function(t){if(!t)return e.$toast.info("认证失败，请填写正确的信息"),void(e.loadingBindBilibili=!1);e.$toast.success("认证成功！").then((function(){window.location.reload()}))})).catch((function(t){e.$toast.error(t.message),e.loadingBindBilibili=!1}))):this.$toast.info("请先填写uid")},submitBindPhone:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user.providers.bind_phone){t.next=2;break}return t.abrupt("return");case 2:if(6===e.authCode.length){t.next=4;break}return t.abrupt("return",e.$toast.warn("请输入正确的短信验证码"));case 4:if(!(e.password.length<6)){t.next=6;break}return t.abrupt("return",e.$toast.warn("密码不能小于6位"));case 6:if(!(e.password.length>16)){t.next=8;break}return t.abrupt("return",e.$toast.warn("密码不能大于16位"));case 8:if(!e.loadingBindPhone){t.next=10;break}return t.abrupt("return");case 10:return e.loadingBindPhone=!0,t.prev=11,t.next=14,Object(l.a)(e,{slug:e.user.slug,phone:e.phone,password:e.password,authCode:e.authCode});case 14:e.$toast.success("手机号绑定成功").then((function(){e.showInfoForm=!1,window.location.reload()})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(11),e.$toast.error(t.t0.message);case 20:return t.prev=20,e.loadingBindPhone=!1,t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[11,17,20,23]])})))()}}},d=(o(560),o(7)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"user-auth-setting"}},[e.isAuth?o("ul",{staticClass:"providers"},[o("li",{on:{click:e.bindUserQQ}},[o("i",{staticClass:"iconfont ic-qq",class:{"is-bind":e.user.providers.bind_qq}})]),e._v(" "),o("li",{on:{click:e.bindUserWechat}},[o("i",{staticClass:"iconfont ic-v-chat",class:{"is-bind":e.user.providers.bind_wechat}})]),e._v(" "),o("li",{on:{click:e.bindUserPhone}},[o("i",{staticClass:"iconfont ic-phone",class:{"is-bind":e.user.providers.bind_phone}})]),e._v(" "),o("li",{on:{click:e.bindUserBilibili}},[o("i",{staticClass:"iconfont ic-bilibili",class:{"is-bind":e.user.providers.bind_bilibili}})])]):e._e(),e._v(" "),o("VDialog",{attrs:{loading:e.loadingBindPhone,width:"400px",title:"填写信息"},on:{submit:e.submitBindPhone},model:{value:e.showInfoForm,callback:function(t){e.showInfoForm=t},expression:"showInfoForm"}},[o("ElInput",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:e.authCode,callback:function(t){e.authCode="string"==typeof t?t.trim():t},expression:"authCode"}}),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("ElInput",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:e.password,callback:function(t){e.password="string"==typeof t?t.trim():t},expression:"password"}})],1),e._v(" "),o("VDialog",{attrs:{loading:e.loadingBindBilibili,title:"绑定bilibili账号"},on:{submit:e.submitBindBilibili},model:{value:e.showBiliForm,callback:function(t){e.showBiliForm=t},expression:"showBiliForm"}},[o("div",{staticClass:"bind-bili-dialog"},[o("p",[o("i",[e._v("1. 访问 ")]),o("a",{attrs:{href:"https://space.bilibili.com/279662469/",target:"_blank"}},[e._v("calibur官方账号")])]),e._v(" "),o("p",[e._v("2. 关注该账号后，点击「发消息」按钮")]),e._v(" "),o("p",[o("i",[e._v("3. 在新打开的聊天窗页面，发送：")]),o("span",[e._v("我要认证calibur")])]),e._v(" "),o("p",[e._v("4. 把你在 bilibili 的用户 uid 填入下面的输入框中（在个人空间页面的右下角可以看到）")]),e._v(" "),o("p",[o("ElInput",{attrs:{type:"text",placeholder:"你自己的B站账号uid","auto-complete":"off"},model:{value:e.biliUid,callback:function(t){e.biliUid="string"==typeof t?t.trim():t},expression:"biliUid"}})],1),e._v(" "),o("p",[e._v("5. 点击「确定」按钮，等待验证完成")])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);