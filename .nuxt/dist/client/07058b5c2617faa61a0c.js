(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{364:function(e,t,n){"use strict";t.a={beforeMount:function(){var e=this;this.$channel.$when("user-not-sign",(function(){e.$toast.error("继续操作前请先登录").then((function(){window.location.href=e.$alias.sign()}))}))}}},386:function(e,t,n){"use strict";n(19),n(31),n(70);t.a={beforeMount:function(){var e=this,t=function(){e.$store.getters.isMine(e.$route.params.slug)||e.$router.replace({name:e.$route.name,params:{slug:e.$store.state.user.slug}})};if(this.$store.state.isAuth)t();else var n=this.$watch("$store.state.isAuth",(function(e){e&&(t(),n())}))}}},433:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){},436:function(e,t,n){},437:function(e,t,n){},438:function(e,t,n){},541:function(e,t,n){"use strict";var r=n(433);n.n(r).a},544:function(e,t,n){"use strict";var r=n(434);n.n(r).a},545:function(e,t,n){"use strict";var r=n(435);n.n(r).a},548:function(e,t,n){"use strict";var r=n(436);n.n(r).a},549:function(e,t,n){"use strict";var r=n(437);n.n(r).a},550:function(e,t,n){"use strict";var r=n(438);n.n(r).a},598:function(e,t,n){"use strict";n.r(t);n(30),n(19),n(13),n(14);var r=n(539),o=n.n(r),c=(n(18),n(2)),l=n(218),h={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:function(){return{menuWatcher:null,timeWatcher:null,friends:[]}},computed:{menu:function(){return this.$store.state.messageMenu.list}},mounted:function(){var e=this;this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",(function(t,n){t>n&&!e.$store.state.socket.isConnected&&e.$store.dispatch("getMessageMenu")})),this.timeWatcher=this.$watch("$store.state.messageMenu.time",(function(){e.$store.dispatch("updateMessageMenu")})),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy:function(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{initChatRoom:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.a.service({target:e.$el}),t.next=3,e.getUserFriends();case 3:return t.next=5,e.$store.dispatch("getMessageMenu");case 5:n.close();case 6:case"end":return t.stop()}}),t)})))()},getUserFriends:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(){Object(l.getUserRelation)({$axios:e.$axios,slug:e.slug,relation:"friend"}).then((function(data){data.result.forEach((function(t){return e.$cache.setUserSessionStore(t)})),e.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))}))},t.prev=1,r=sessionStorage.getItem("user-friends-list")){t.next=7;break}return t.next=6,n();case 6:return t.abrupt("return");case 7:(o=JSON.parse(r)).forEach((function(t){return e.$cache.setUserSessionStore(t)})),e.friends=o,t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(1),t.next=16,n();case 16:case"end":return t.stop()}}),t,null,[[1,12]])})))()},deleteChannel:function(e){var t=this;this.$axios.$post("v1/message/delete_channel",{channel:e.channel}).then((function(){t.$store.commit("DELETE_MESSAGE_MENU",e.channel)})).catch((function(){}))},emitClick:function(e){this.$emit("open",e)}}},m=(n(541),n(7)),f=Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"message-menu"},e._l(e.menu,(function(t){return n("li",{key:t.channel},[n("div",{staticClass:"room-item clearfix",on:{click:function(n){return e.emitClick(t)}}},[t.user.avatar?n("img",{staticClass:"avatar",attrs:{src:e.$resizeImage(t.user.avatar,{width:42}),alt:t.user.nickname}}):e._e(),e._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nickname oneline",domProps:{innerHTML:e._s(t.user.nickname)}}),e._v(" "),n("div",{staticClass:"footer"},[t.count?n("div",{staticClass:"read-badge",domProps:{textContent:e._s(t.count)}}):e._e()])])]),e._v(" "),n("div",{staticClass:"close",on:{click:function(n){return e.deleteChannel(t)}}},[e._v("\n      ×\n    ")])])})),0)}),[],!1,null,null,null).exports,d=(n(43),n(53),n(9),n(37),n(359),n(542)),v=n.n(d),$=(n(543),{name:"ChatAvatar",components:{UserAvatar:n(374).a},props:{item:{type:Object,required:!0}},computed:{isMine:function(){return this.$store.state.user.slug===this.item.slug}}}),C=(n(544),Object(m.a)($,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[t("UserAvatar",{attrs:{user:this.item,size:36}})],1)}),[],!1,null,null,null).exports),y={name:"ChatMessage",components:{JsonContent:n(468).a},props:{item:{type:Object,required:!0}}},M=(n(545),Object(m.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat-message"},[t("JsonContent",{attrs:{content:this.item.content}})],1)}),[],!1,null,null,null).exports),_=(n(173),n(32),n(546)),w=n(547),x={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data:function(){this.refresh()}},mounted:function(){var e=this;setTimeout((function(){e._initScroll()}),20)},beforeDestroy:function(){this.scroll&&this.scroll.destroy()},methods:{_initScroll:function(){var e=this;this.$refs.wrapper&&(_.a.use(w.a),this.scroll=new _.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",(function(){e.scroll.y>-50&&e.$emit("top"),e.scroll.y<=e.scroll.maxScrollY+50&&e.$emit("bottom")})))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){var e=this;return new Promise((function(t){e.$nextTick((function(){setTimeout((function(){e.scroll&&e.scroll.refresh(),e.$nextTick((function(){t()}))}),20)}))}))},scrollTo:function(){var e=arguments,t=this;setTimeout((function(){t.scroll&&t.scroll.scrollTo.apply(t.scroll,e)}),0)},scrollToElement:function(){var e=arguments,t=this;setTimeout((function(){t.scroll&&t.scroll.scrollToElement.apply(t.scroll,e)}),0)}}},k=(n(548),{name:"MessageRoom",components:{Scroll:Object(m.a)(x,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)}),[],!1,null,null,null).exports,ChatRoom:v.a},props:{mailto:{type:String,required:!0},name:{type:String,required:!0},slug:{type:String,required:!0}},data:function(){return{message:"",target:null,chatsHeight:0,stopWatcher:null,noMore:!1}},computed:{query:function(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:function(){return C},messageComps:function(){return{message:M}},computeHelperTxt:function(){return"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"}},watch:{$route:function(){this.initRoom()}},beforeMount:function(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted:function(){this.initRoom()},methods:{initRoom:function(){var e=this;this.$nextTick(Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$refs.room&&e.$refs.room.clearMessage(),e.$refs.loader&&e.$refs.loader.forceCallback(),t.next=4,e.$refs.loader.initData({is_up:1});case 4:return t.next=6,e.$refs.loader.loadMore({force:!0});case 6:e.clearUnreadCount(),e.watchMessageLoop();case 8:case"end":return t.stop()}}),t)}))))},clearUnreadCount:function(){var e=this,menu=this.$store.state.messageMenu.list.filter((function(t){return t.channel===e.mailto}))[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},watchMessageLoop:function(){this.stopWatcher&&this.stopWatcher();var e=this,t=e.mailto;this.stopWatcher=this.$watch((function(){return e.$store.state.messageRoom[e.mailto].time}),(function(){if(t===e.mailto){var n=e.$store.state.messageRoom[e.mailto].data;e.$store.state.socket.isConnected&&n?e.appendMessage(n):e.$refs.loader.loadMore({force:!0}),e.screenScroll(),e.clearUnreadCount()}else this.stopWatcher()}))},handleScrollUp:function(){this.noMore||this.$refs.loader.loadBefore({force:!0})},handleMessageLoad:function(e){var t=this,data=e.data,n=e.params;0!==n.is_up||data.result.length||(this.noMore=!0),this.$nextTick((function(){1===n.is_up?(data.result.map((function(e){return e})).reverse().map((function(e){t.appendMessage(e,!1)})),t.screenScroll(!1)):(data.result.map((function(e){t.appendMessage(e)})),t.screenScroll())}))},screenScroll:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.scroll&&this.$refs.scroll.refresh().then((function(){var n=e.$refs.room.$el.clientHeight,r=e.$refs.wrap.clientHeight;n<r||(e.lastChatsHeight&&!t?e.$refs.scroll.scrollTo(0,e.lastChatsHeight-n):e.$refs.scroll.scrollTo(0,r-n),e.lastChatsHeight=n)}))},appendMessage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.$refs.room.addMessage({id:e.id,type:"message",float:e.user.slug===this.slug?"right":"left",color:2===e.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:e},t)},handleAddBubble:function(){var e=this;if(this.message.trim()){var t=[{type:"paragraph",data:{text:this.message.trim()}}],n=Math.random().toString(10).substring(3,6);this.appendMessage({id:n,user:this.$store.state.user,content:t,created_at:Date.now()}),this.screenScroll(),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:t}).then((function(t){e.$refs.room.updateMessage(n,{id:t.id}),e.$refs.loader.append(t)})).catch((function(){e.$refs.room.updateMessage(n,{status:"error"})}))}},handleNewLine:function(){this.message&&(this.message+="\n")}}}),S=(n(549),Object(m.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room"},[n("div",{staticClass:"room-header"},[e._v("\n    "+e._s(e.name)+"\n  ")]),e._v(" "),n("FlowLoader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",query:e.query,callback:e.handleMessageLoad,"callback-once":!1,"cache-timeout":86400,auto:0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("div",{ref:"wrap",staticClass:"room-chats"},[n("Scroll",{ref:"scroll",attrs:{data:r},on:{top:e.handleScrollUp}},[n("ChatRoom",{ref:"room",attrs:{"avatar-component":e.avatarComp,"message-components":e.messageComps}})],1)],1)}}])}),e._v(" "),n("div",{staticClass:"room-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{maxlength:"500",placeholder:"say it..."},domProps:{value:e.message},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.handleAddBubble(t))},function(t){return t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),e.handleAddBubble(t)):null}],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.metaKey?(t.preventDefault(),e.handleNewLine(t)):null},input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("div",{staticClass:"helper"},[n("span",{domProps:{textContent:e._s(e.computeHelperTxt)}}),e._v(" "),n("button",{on:{click:e.handleAddBubble}},[e._v("\n        发送\n      ")])])])],1)}),[],!1,null,null,null).exports),E=n(386),T={name:"UserMessage",components:{MessageMenu:f,MessageRoom:S},mixins:[n(364).a,E.a],props:{slug:{type:String,required:!0}},computed:{mailto:function(){return this.$route.query.mailto},name:function(){return this.$route.query.name}},methods:{handleOpen:function(e){this.$router.push(this.$alias.user(this.slug,"message/?mailto=".concat(e.channel,"&name=").concat(e.user.nickname)))}}},R=(n(550),Object(m.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-message"}},[r("ElRow",{staticClass:"column-wrap"},[r("ElCol",{attrs:{span:6}},[r("MessageMenu",{attrs:{slug:e.slug},on:{open:e.handleOpen}}),e._v("\n       \n    ")],1),e._v(" "),r("ElCol",{attrs:{span:18}},[r("div",{staticClass:"room-adjust"},[e.mailto?r("MessageRoom",{attrs:{mailto:e.mailto,name:e.name,slug:e.slug}}):r("div",{staticClass:"need-pick"},[r("img",{attrs:{src:n(480)}}),e._v(" "),r("p",[e._v("未选择聊天")])])],1)])],1)],1)}),[],!1,null,null,null));t.default=R.exports}}]);