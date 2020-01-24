(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{523:function(n,t,e){},660:function(n,t,e){"use strict";var o=e(523);e.n(o).a},678:function(n,t,e){"use strict";e.r(t);var o=e(659),c=e.n(o),r=e(225),h=e(537),l=e(538),w=e(539),d={name:"SignDialog",components:{SignUpForm:l.a,SignInForm:h.a,ResetPasswordForm:w.a},data:function(){return{canRender:!1,showModal:!1,showSignIn:!1,showSignUp:!1,showReset:!1}},computed:{isGuest:function(){return!this.$store.state.isAuth}},mounted:function(){var n=this;this.canRender=!0,this.$channel.$on("sign-in",(function(){window.screen.width<=768?window.location.href=n.$alias.sign():n.showLogin()})),this.$channel.$on("sign-up",(function(){n.showRegister()}))},methods:{showLogin:function(){this.showReset=!1,this.showModal=!0,this.showSignIn=!0,this.showSignUp=!1},showRegister:function(){this.showModal=!0,this.showSignUp=!0,this.showSignIn=!1},hiddenSign:function(){this.showModal=!1,this.showSignIn=!1,this.showSignUp=!1,this.showReset=!1}}},v=(e(660),e(19)),m=Object(v.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.canRender?e("div",{staticClass:"sign-container"},[n.isGuest?e("div",{class:[n.showModal?"space-enter":"space-leave"],attrs:{id:"space3D"},on:{click:n.hiddenSign}},[e("div",{ref:"wrap",staticClass:"sign-modal-wrap"},[e("div",{staticClass:"sign-modal sign-in-modal",class:{"sign-in-init":!n.showSignIn&&!n.showSignUp,"sign-in-show":n.showSignIn&&!n.showSignUp,"sign-in-turn":!n.showSignIn&&n.showSignUp},on:{click:function(n){n.stopPropagation()}}},[n._m(0),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.showReset,expression:"showReset"}],staticClass:"form-container"},[e("ResetPasswordForm",{on:{"to-login":function(t){n.showReset=!1},"to-register":n.showRegister}})],1),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!n.showReset,expression:"!showReset"}],staticClass:"form-container"},[e("SignInForm",{on:{"to-reset":function(t){n.showReset=!0},"to-register":n.showRegister}})],1)]),n._v(" "),e("div",{staticClass:"sign-modal sign-up-modal",class:{"sign-up-init":!n.showSignUp&&!n.showSignIn,"sign-up-show":n.showSignUp&&!n.showSignIn,"sign-up-turn":!n.showSignUp&&n.showSignIn},on:{click:function(n){n.stopPropagation()}}},[n._m(1),n._v(" "),e("div",{staticClass:"form-container"},[e("SignUpForm",{on:{"to-login":n.showLogin}})],1)])])]):n._e()]):n._e()}),[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"https://file.calibur.tv/logo.png",alt:"logo"}})])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"https://file.calibur.tv/logo.png",alt:"logo"}})])}],!1,null,null,null).exports,f=e(410),S=(e(45),{beforeMount:function(){var n=this;this.$channel.$when("user-signed",(function(){var t=function(){return Date.now()-n.$cache.get("socket-connect-heartbeat",0)<=1e3};setTimeout((function(){var e,o=function(){n.$channel.socketConnect();var t=setInterval((function(){n.$store.state.socket.isConnected?n.$cache.set("socket-connect-heartbeat",Date.now()):clearInterval(t)}),1e3);window.addEventListener("beforeunload",(function(){n.$channel.socketDisconnect()}))};t()||"visible"!==document.visibilityState?(n.$store.commit("SOCKET_AUTO_CONNECT"),e=setInterval((function(){t()?Date.now()-n.$cache.get("socket-on-message-time",0)<=1e3&&n.$store.commit("SOCKET_ONMESSAGE",n.$cache.get("socket-on-message-data")):"visible"===document.visibilityState&&(o(),clearInterval(e))}),2e3)):o()}),2e3)}))},beforeDestroy:function(){this.$store.state.socket.isConnected&&this.$channel.socketDisconnect()}}),$={name:"WebLayout",components:{VHeader:r.a,ElBacktop:c.a,SignDialog:m},mixins:[f.a,S]},_=Object(v.a)($,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"layout-web"}},[t("VHeader"),this._v(" "),t("nuxt"),this._v(" "),t("SignDialog"),this._v(" "),t("ElBacktop",{staticClass:"only-pc"},[t("i",{staticClass:"el-icon-caret-top"})])],1)}),[],!1,null,null,null);t.default=_.exports}}]);