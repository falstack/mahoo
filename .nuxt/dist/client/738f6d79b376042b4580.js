(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{360:function(t,e,n){},365:function(t,e,n){"use strict";n(173);var o={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(378),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)}),[],!1,null,null,null);e.a=component.exports},366:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){window.location.href=t.$alias.sign()}))}))}}},367:function(t,e,n){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu","skeleton-loading":"skeleton-loading_3wvbo",skeletonLoading:"skeleton-loading_3wvbo",skeleton:"skeleton_3yQuF"}},368:function(t,e,n){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk","skeleton-loading":"skeleton-loading_W_WF0",skeletonLoading:"skeleton-loading_W_WF0",skeleton:"skeleton_3dcSj"}},369:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2","skeleton-loading":"skeleton-loading_3Hgsp",skeletonLoading:"skeleton-loading_3Hgsp",skeleton:"skeleton_2H5RA"}},370:function(t,e,n){t.exports={list:"list_rxwoA","skeleton-loading":"skeleton-loading_hADmg",skeletonLoading:"skeleton-loading_hADmg",skeleton:"skeleton_3a9b2"}},371:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5","skeleton-loading":"skeleton-loading_1lzJ0",skeletonLoading:"skeleton-loading_1lzJ0",skeleton:"skeleton_jIhh3"}},372:function(t,e,n){t.exports={checklist:"checklist_35Trq","skeleton-loading":"skeleton-loading_2NnRn",skeletonLoading:"skeleton-loading_2NnRn",skeleton:"skeleton_RKAJg"}},373:function(t,e,n){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1","skeleton-loading":"skeleton-loading_Q1SbS",skeletonLoading:"skeleton-loading_Q1SbS",skeleton:"skeleton_13H0b"}},374:function(t,e,n){t.exports={video:"video_1Ktgc",wrap:"wrap_3iFmj","skeleton-loading":"skeleton-loading_DCN-u",skeletonLoading:"skeleton-loading_DCN-u",skeleton:"skeleton_1YNsK"}},375:function(t,e,n){t.exports={music:"music_1aU_y","skeleton-loading":"skeleton-loading_3yST_",skeletonLoading:"skeleton-loading_3yST_",skeleton:"skeleton_3Zagh"}},376:function(t,e,n){t.exports={baidu:"baidu_3yD19",logo:"logo_3fZIb",content:"content_2vYlq","skeleton-loading":"skeleton-loading_2_Vpm",skeletonLoading:"skeleton-loading_2_Vpm",skeleton:"skeleton_Yoxzs"}},377:function(t,e,n){t.exports={vote:"vote_1AMl_",selected:"selected_1h5XP",count:"count_3bLzQ",active:"active_2YTSY","skeleton-loading":"skeleton-loading_2BuFl",skeletonLoading:"skeleton-loading_2BuFl",skeleton:"skeleton_3B0sO"}},378:function(t,e,n){"use strict";var o=n(360);n.n(o).a},398:function(t,e,n){"use strict";n(19),n(31),n(70);e.a={beforeMount:function(){var t=this,e=function(){t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}})};if(this.$store.state.isAuth)e();else var n=this.$watch("$store.state.isAuth",(function(t){t&&(e(),n())}))}}},402:function(t,e,n){"use strict";var o={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){var e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style["h".concat(e)],domProps:{innerHTML:this.item.data.text}})}},r=n(409),l=n(7);var header=Object(l.a)(o,void 0,void 0,!1,(function(t){this.$style=r.default.locals||r.default}),null,null).exports,c={name:"JsonImage",props:{item:{type:Object,required:!0}}},d=n(410);var h=Object(l.a)(c,(function(){var t,e,n=this,o=n.$createElement,r=n._self._c||o;return r("div",{class:n.$style.image},[r("div",{class:[(t={},t[n.$style.border]=n.item.data.withBorder,t),(e={},e[n.$style.bg]=n.item.data.withBackground,e)]},[r("div",[r("VImg",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._v(" "),n.item.data.caption?r("p",{domProps:{textContent:n._s(n.item.data.caption)}}):n._e()])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null).exports,m={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},f=n(411);var v=Object(l.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}})}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null).exports,_={name:"JsonList",props:{item:{type:Object,required:!0}}},y=n(412);var k=Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,(function(li,e){return n("li",{key:e,domProps:{innerHTML:t._s(li)}})})),0):n("ul",t._l(t.item.data.items,(function(li,e){return n("li",{key:e,domProps:{innerHTML:t._s(li)}})})),0)])}),[],!1,(function(t){this.$style=y.default.locals||y.default}),null,null).exports,$={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},x=n(413);var C=Object(l.a)($,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null).exports,w={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},M=n(414);var S=Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,(function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{innerHTML:t._s(option.text)}})])})),0)}),[],!1,(function(t){this.$style=M.default.locals||M.default}),null,null).exports,O={name:"JsonLink",props:{item:{type:Object,required:!0}}},L=n(415);var j=Object(l.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("a",{attrs:{target:"_blank",href:t.item.data.link}},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])])}),[],!1,(function(t){this.$style=L.default.locals||L.default}),null,null).exports,E={name:"JsonVideo",props:{item:{type:Object,required:!0}}},T=n(416);var video=Object(l.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.video},[n("div",{class:t.$style.wrap},[n("iframe",{attrs:{src:t.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true"}})]),t._v(" "),t.item.data.caption?n("p",{domProps:{textContent:t._s(t.item.data.caption)}}):t._e()])}),[],!1,(function(t){this.$style=T.default.locals||T.default}),null,null).exports,R={name:"JsonMusic",props:{item:{type:Object,required:!0}}},H=n(417);var A=Object(l.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.music},[e("iframe",{attrs:{src:this.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true",width:"330",height:"86"}}),this._v(" "),this.item.data.caption?e("p",{domProps:{textContent:this._s(this.item.data.caption)}}):this._e()])}),[],!1,(function(t){this.$style=H.default.locals||H.default}),null,null).exports,D={name:"JsonBaidu",props:{item:{type:Object,required:!0},reward:{type:Boolean,required:!0}}},P=n(418);var J=Object(l.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.baidu},[n("a",{attrs:{href:t.item.data.url,target:"_blank"}},[n("i",{staticClass:"iconfont ic-baidu-cloud",class:t.$style.logo}),t._v(" "),n("div",{class:t.$style.content},[0===t.item.data.visit_type||t.reward?[t._v(" 密码："+t._s(t.item.data.password)+" ")]:[t._v("\n        密码投食后可见\n      ")]],2)])])}),[],!1,(function(t){this.$style=P.default.locals||P.default}),null,null).exports,U=(n(91),n(53),n(176),n(9),n(419),n(363)),W={name:"JsonVote",props:{item:{type:Object,required:!0},vote:{type:Array,required:!0},slug:{type:String,required:!0}},data:function(){return{selected:[],submitting:!1,voted:!1,stat:[],maxCount:0}},watch:{vote:function(t){this.selected=t.map((function(t){return t})),t.length&&(this.voted=!0,this.getVoteStat())}},methods:{getVoteStat:function(){var t=this;this.$axios.$get("v1/pin/vote_stat",{params:{slug:this.slug}}).then((function(data){t.stat=data,t.maxCount=Math.max.apply(Math,Object(U.a)(Object.values(t.stat)))})).catch((function(){}))},handleSelect:function(option){var t=this.selected;if(!this.voted){var e=t.indexOf(option.id);if(~e)t.splice(e,1);else{var n=this.item.data.max_select;n<=t.length?1===n&&t.splice(e,1,option.id):t.push(option.id)}}},checkSelected:function(option){return~this.selected.indexOf(option.id)},submit:function(){var t=this;this.submitting||this.voted||(this.selected.length?this.item.data.expired_at&&1e3*this.item.data.expired_at<Date.now()?this.$toast.info("投票已截止"):(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.slug,answer_hash:this.selected}).then((function(){t.$toast.success("投票成功"),t.voted=!0,t.getVoteStat()})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.submitting=!1}))):this.$toast.info("至少选择一项"))},computeItemStyle:function(option,t){var e=this.stat[option.id]||0;return{width:e?"".concat(75*e/this.maxCount,"%"):"0%",backgroundColor:this.getRandomColor(t)}},getRandomColor:function(t){return["rgba(255,170,170,.5)","rgba(255,148,39,.5)","rgba(252,196,25,.5)","rgba(32,201,151,.5)","rgba(18,183,245,.5)","rgba(173,181,189,.5)"][t%6]}}},N=n(420);var B=Object(l.a)(W,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$style.vote},[o("div",[o("header",[e._v("投票（"+e._s(1===e.item.data.max_select?"单选":"最多选"+e.item.data.max_select+"个")+"）")]),e._v(" "),o("ul",e._l(e.item.data.items,(function(option,t){var n;return o("li",{key:option.id,staticClass:"oneline",class:(n={},n[e.$style.selected]=e.checkSelected(option),n),on:{click:function(t){return e.handleSelect(option)}}},[o("span",{class:e.$style.count,style:e.computeItemStyle(option,t),domProps:{innerHTML:e._s(e.stat[option.id]?e.stat[option.id]+"票&nbsp;&nbsp;":"")}}),e._v(" "),o("span",{domProps:{innerHTML:e._s(t+1+". "+option.text)}}),e._v(" "),o("i")])})),0),e._v(" "),o("footer",[o("span",[e._v("截止时间："+e._s(e.item.data.expired_at?e.$utils.timeAgo(e.item.data.expired_at):"无限期"))]),e._v(" "),o("button",{class:(t={},t[e.$style.active]=e.selected.length&&!e.voted,t),on:{click:e.submit}},[e._v("\n        "+e._s(e.submitting?"提交中":e.voted?"已投过票":"确认")+"\n      ")])])])])}),[],!1,(function(t){this.$style=N.default.locals||N.default}),null,null).exports,I=(n(30),n(174),n(31),n(37),n(71),n(359),n(393),n(32),n(88)),K=n(89),F=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.minLength,o=e.shareLink;Object(I.a)(this,t),this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:n||140,shareLink:o||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}return Object(K.a)(t,[{key:"bind",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.minLength,r=n.authorNickname,l=n.shareLink,c=n.appendStr;t.addEventListener("copy",(function(t){var n=o||e.config.minLength,d=l||e.config.shareLink,h=c||e.config.appendStr,m=window.getSelection().getRangeAt(0),f=e.getHTMLParser("");f&&f.appendChild(m.cloneContents());var v=m.toString().trim(),_=f?f.innerHTML:e.getRangeHtml(m);if(document.createElement("div").innerHTML=_,v.length>=n){var y=e.getCopyHtml(_,d,r,h),k=e.getCopyText(v,d,r,h);void 0===t.clipboardData&&e.hack(y,m);try{t.clipboardData.setData("text/plain",k),t.clipboardData.setData("text/html",y),t.preventDefault()}catch(t){e.hack(y,m)}}}))}},{key:"abort",value:function(t){t.addEventListener("copy",(function(t){return t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1}))}},{key:"hack",value:function(text,t){var e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout((function(){try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)}),0)}},{key:"getCopyHtml",value:function(html,t,e,n){var o=this.getExtraCopyright(t,e,n).join("<br>");return"<div><div>".concat(html,"</div>").concat(o,"</div>")}},{key:"getCopyText",value:function(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}},{key:"getExtraCopyright",value:function(t,e,n){return e?["","","".concat(this.prefix.author,"：").concat(e),"".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]:["","","".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]}},{key:"getRangeHtml",value:function(text){var div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}},{key:"getHTMLParser",value:function(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(n){var e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body}}}]),t}(),z={name:"JsonContent",components:{"v-header":header,"v-image":h,"v-paragraph":v,"v-list":k,"v-delimiter":C,"v-checklist":S,"v-link":j,"v-video":video,"v-music":A,"v-baidu":J,"v-vote":B},props:{content:{required:!0,type:Array},reward:{type:Boolean,default:!1},vote:{type:Array,default:function(){return[]}},slug:{type:String,default:""}},mounted:function(){(new F).bind(this.$el)}},V=Object(l.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"json-content"},t._l(t.content,(function(e,o){return n("v-"+e.type,{key:o,tag:"component",attrs:{item:e,reward:t.reward,vote:t.vote,slug:t.slug}})})),1)}),[],!1,null,null,null);e.a=V.exports},409:function(t,e,n){"use strict";var o=n(367),r=n.n(o);e.default=r.a},410:function(t,e,n){"use strict";var o=n(368),r=n.n(o);e.default=r.a},411:function(t,e,n){"use strict";var o=n(369),r=n.n(o);e.default=r.a},412:function(t,e,n){"use strict";var o=n(370),r=n.n(o);e.default=r.a},413:function(t,e,n){"use strict";var o=n(371),r=n.n(o);e.default=r.a},414:function(t,e,n){"use strict";var o=n(372),r=n.n(o);e.default=r.a},415:function(t,e,n){"use strict";var o=n(373),r=n.n(o);e.default=r.a},416:function(t,e,n){"use strict";var o=n(374),r=n.n(o);e.default=r.a},417:function(t,e,n){"use strict";var o=n(375),r=n.n(o);e.default=r.a},418:function(t,e,n){"use strict";var o=n(376),r=n.n(o);e.default=r.a},420:function(t,e,n){"use strict";var o=n(377),r=n.n(o);e.default=r.a},422:function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},450:function(t,e,n){},451:function(t,e,n){},452:function(t,e,n){},453:function(t,e,n){},454:function(t,e,n){},455:function(t,e,n){},543:function(t,e,n){"use strict";var o=n(450);n.n(o).a},546:function(t,e,n){"use strict";var o=n(451);n.n(o).a},547:function(t,e,n){"use strict";var o=n(452);n.n(o).a},550:function(t,e,n){"use strict";var o=n(453);n.n(o).a},551:function(t,e,n){"use strict";var o=n(454);n.n(o).a},552:function(t,e,n){"use strict";var o=n(455);n.n(o).a},601:function(t,e,n){"use strict";n.r(e);n(30),n(19),n(13),n(14);var o=n(541),r=n.n(o),l=(n(18),n(2)),c=n(218),d={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:function(){return{menuWatcher:null,timeWatcher:null,friends:[]}},computed:{menu:function(){return this.$store.state.messageMenu.list}},mounted:function(){var t=this;this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",(function(e,n){e>n&&!t.$store.state.socket.isConnected&&t.$store.dispatch("getMessageMenu")})),this.timeWatcher=this.$watch("$store.state.messageMenu.time",(function(){t.$store.dispatch("updateMessageMenu")})),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy:function(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{initChatRoom:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.a.service({target:t.$el}),e.next=3,t.getUserFriends();case 3:return e.next=5,t.$store.dispatch("getMessageMenu");case 5:n.close();case 6:case"end":return e.stop()}}),e)})))()},getUserFriends:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(){Object(c.getUserRelation)({$axios:t.$axios,slug:t.slug,relation:"friend"}).then((function(data){data.result.forEach((function(e){return t.$cache.setUserSessionStore(e)})),t.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))}))},e.prev=1,o=sessionStorage.getItem("user-friends-list")){e.next=7;break}return e.next=6,n();case 6:return e.abrupt("return");case 7:(r=JSON.parse(o)).forEach((function(e){return t.$cache.setUserSessionStore(e)})),t.friends=r,e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,n();case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()},deleteChannel:function(t){var e=this;this.$axios.$post("v1/message/delete_channel",{channel:t.channel}).then((function(){e.$store.commit("DELETE_MESSAGE_MENU",t.channel)})).catch((function(){}))},emitClick:function(t){this.$emit("open",t)}}},h=(n(543),n(7)),m=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"message-menu"},t._l(t.menu,(function(e){return n("li",{key:e.channel},[n("div",{staticClass:"room-item clearfix",on:{click:function(n){return t.emitClick(e)}}},[e.user.avatar?n("img",{staticClass:"avatar",attrs:{src:t.$resizeImage(e.user.avatar,{width:42}),alt:e.user.nickname}}):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nickname oneline",domProps:{innerHTML:t._s(e.user.nickname)}}),t._v(" "),n("div",{staticClass:"footer"},[e.count?n("div",{staticClass:"read-badge",domProps:{textContent:t._s(e.count)}}):t._e()])])]),t._v(" "),n("div",{staticClass:"close",on:{click:function(n){return t.deleteChannel(e)}}},[t._v("\n      ×\n    ")])])})),0)}),[],!1,null,null,null).exports,f=(n(43),n(53),n(9),n(37),n(359),n(544)),v=n.n(f),_=(n(545),{name:"ChatAvatar",components:{UserAvatar:n(365).a},props:{item:{type:Object,required:!0}},computed:{isMine:function(){return this.$store.state.user.slug===this.item.slug}}}),y=(n(546),Object(h.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("UserAvatar",{attrs:{user:this.item,size:36}})],1)}),[],!1,null,null,null).exports),k={name:"ChatMessage",components:{JsonContent:n(402).a},props:{item:{type:Object,required:!0}}},$=(n(547),Object(h.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("JsonContent",{attrs:{content:this.item.content}})],1)}),[],!1,null,null,null).exports),x=(n(173),n(32),n(548)),C=n(549),w={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data:function(){this.refresh()}},mounted:function(){var t=this;setTimeout((function(){t._initScroll()}),20)},beforeDestroy:function(){this.scroll&&this.scroll.destroy()},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(x.a.use(C.a),this.scroll=new x.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",(function(){t.scroll.y>-50&&t.$emit("top"),t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("bottom")})))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){var t=this;return new Promise((function(e){t.$nextTick((function(){setTimeout((function(){t.scroll&&t.scroll.refresh(),t.$nextTick((function(){e()}))}),20)}))}))},scrollTo:function(){var t=arguments,e=this;setTimeout((function(){e.scroll&&e.scroll.scrollTo.apply(e.scroll,t)}),0)},scrollToElement:function(){var t=arguments,e=this;setTimeout((function(){e.scroll&&e.scroll.scrollToElement.apply(e.scroll,t)}),0)}}},M=(n(550),{name:"MessageRoom",components:{Scroll:Object(h.a)(w,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)}),[],!1,null,null,null).exports,ChatRoom:v.a},props:{mailto:{type:String,required:!0},name:{type:String,required:!0},slug:{type:String,required:!0}},data:function(){return{message:"",target:null,chatsHeight:0,stopWatcher:null,noMore:!1}},computed:{query:function(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:function(){return y},messageComps:function(){return{message:$}},computeHelperTxt:function(){return"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"}},watch:{$route:function(){this.initRoom()}},beforeMount:function(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted:function(){this.initRoom()},methods:{initRoom:function(){var t=this;this.$nextTick(Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.room&&t.$refs.room.clearMessage(),t.$refs.loader&&t.$refs.loader.forceCallback(),e.next=4,t.$refs.loader.initData({is_up:1});case 4:return e.next=6,t.$refs.loader.loadMore({force:!0});case 6:t.clearUnreadCount(),t.watchMessageLoop();case 8:case"end":return e.stop()}}),e)}))))},clearUnreadCount:function(){var t=this,menu=this.$store.state.messageMenu.list.filter((function(e){return e.channel===t.mailto}))[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},watchMessageLoop:function(){this.stopWatcher&&this.stopWatcher();var t=this,e=t.mailto;this.stopWatcher=this.$watch((function(){return t.$store.state.messageRoom[t.mailto].time}),(function(){if(e===t.mailto){var n=t.$store.state.messageRoom[t.mailto].data;t.$store.state.socket.isConnected&&n?t.appendMessage(n):t.$refs.loader.loadMore({force:!0}),t.screenScroll(),t.clearUnreadCount()}else this.stopWatcher()}))},handleScrollUp:function(){this.noMore||this.$refs.loader.loadBefore({force:!0})},handleMessageLoad:function(t){var e=this,data=t.data,n=t.params;0!==n.is_up||data.result.length||(this.noMore=!0),this.$nextTick((function(){1===n.is_up?(data.result.map((function(t){return t})).reverse().map((function(t){e.appendMessage(t,!1)})),e.screenScroll(!1)):(data.result.map((function(t){e.appendMessage(t)})),e.screenScroll())}))},screenScroll:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.scroll&&this.$refs.scroll.refresh().then((function(){var n=t.$refs.room.$el.clientHeight,o=t.$refs.wrap.clientHeight;n<o||(t.lastChatsHeight&&!e?t.$refs.scroll.scrollTo(0,t.lastChatsHeight-n):t.$refs.scroll.scrollTo(0,o-n),t.lastChatsHeight=n)}))},appendMessage:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.$refs.room.addMessage({id:t.id,type:"message",float:t.user.slug===this.slug?"right":"left",color:2===t.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:t},e)},handleAddBubble:function(){var t=this;if(this.message.trim()){var e=[{type:"paragraph",data:{text:this.message.trim()}}],n=Math.random().toString(10).substring(3,6);this.appendMessage({id:n,user:this.$store.state.user,content:e,created_at:Date.now()}),this.screenScroll(),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:e}).then((function(e){t.$refs.room.updateMessage(n,{id:e.id}),t.$refs.loader.append(e)})).catch((function(){t.$refs.room.updateMessage(n,{status:"error"})}))}},handleNewLine:function(){this.message&&(this.message+="\n")}}}),S=(n(551),Object(h.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room"},[n("div",{staticClass:"room-header"},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),n("FlowLoader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",query:t.query,callback:t.handleMessageLoad,"callback-once":!1,"cache-timeout":86400,auto:0},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("div",{ref:"wrap",staticClass:"room-chats"},[n("Scroll",{ref:"scroll",attrs:{data:o},on:{top:t.handleScrollUp}},[n("ChatRoom",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}})],1)],1)}}])}),t._v(" "),n("div",{staticClass:"room-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{maxlength:"500",placeholder:"say it..."},domProps:{value:t.message},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e))},function(e){return e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e)):null}],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.handleNewLine(e)):null},input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("div",{staticClass:"helper"},[n("span",{domProps:{textContent:t._s(t.computeHelperTxt)}}),t._v(" "),n("button",{on:{click:t.handleAddBubble}},[t._v("\n        发送\n      ")])])])],1)}),[],!1,null,null,null).exports),O=n(398),L={name:"UserMessage",components:{MessageMenu:m,MessageRoom:S},mixins:[n(366).a,O.a],props:{slug:{type:String,required:!0}},computed:{mailto:function(){return this.$route.query.mailto},name:function(){return this.$route.query.name}},methods:{handleOpen:function(t){this.$router.push(this.$alias.user(this.slug,"message/?mailto=".concat(t.channel,"&name=").concat(t.user.nickname)))}}},j=(n(552),Object(h.a)(L,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"user-message"}},[o("ElRow",{staticClass:"column-wrap"},[o("ElCol",{attrs:{span:6}},[o("MessageMenu",{attrs:{slug:t.slug},on:{open:t.handleOpen}}),t._v("\n       \n    ")],1),t._v(" "),o("ElCol",{attrs:{span:18}},[o("div",{staticClass:"room-adjust"},[t.mailto?o("MessageRoom",{attrs:{mailto:t.mailto,name:t.name,slug:t.slug}}):o("div",{staticClass:"need-pick"},[o("img",{attrs:{src:n(422)}}),t._v(" "),o("p",[t._v("未选择聊天")])])],1)])],1)],1)}),[],!1,null,null,null));e.default=j.exports}}]);