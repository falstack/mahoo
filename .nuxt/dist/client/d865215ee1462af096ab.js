(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{363:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(128);var o=n(179);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},378:function(t,e,n){"use strict";var r=n(3),o=n(379);r({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return o(this,"a","href",t)}})},379:function(t,e,n){var r=n(24),o=/"/g;t.exports=function(t,e,n,l){var c=String(r(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(l).replace(o,"&quot;")+'"'),d+">"+c+"</"+e+">"}},380:function(t,e,n){var r=n(6);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},383:function(t,e,n){},384:function(t,e,n){},440:function(t,e,n){"use strict";var r=n(383);n.n(r).a},441:function(t,e,n){"use strict";var r=n(384);n.n(r).a},459:function(t,e,n){"use strict";e.a=[{type:"douga",main:!0,left:{slug:1,name:"动画",type:"MainFlowTab"},right:{slug:1,name:"特别推荐",type:"RecommendedSwipe"}},{type:"bangumi",main:!0,left:{slug:5,name:"番剧",type:"BangumiSwitcher"},right:{slug:5,type:"RankSwitcher"}},{type:"bangumi-about",main:!1,left:{slug:8,name:"番剧动态",type:"MainFlowTab"},right:{slug:8,type:"RankDaily"}},{type:"manga",main:!0,left:{slug:4,name:"漫画",type:"MainFlowTab"},right:{slug:4,type:"RankSwitcher"}},{type:"game",main:!0,left:{slug:2,name:"游戏",type:"MainFlowTab"},right:{slug:2,type:"RankSwitcher"}},{type:"novel",main:!0,left:{slug:6,name:"帖子",type:"MainFlowTab"},right:{slug:6,type:"RankDaily"}},{type:"music",main:!0,left:{slug:7,name:"音乐",type:"MainFlowTab"},right:{slug:7,type:"RankSwitcher"}},{type:"life",main:!0,left:{slug:3,name:"生活",type:"MainFlowTab"},right:{slug:3,type:"RankSwitcher"}}]},471:function(t,e,n){},472:function(t,e,n){},473:function(t,e,n){},474:function(t,e,n){},475:function(t,e,n){},476:function(t,e,n){},477:function(t,e,n){},478:function(t,e,n){},479:function(t,e,n){},480:function(t,e,n){},481:function(t,e,n){},482:function(t,e,n){},483:function(t,e,n){},484:function(t,e,n){},485:function(t,e,n){},487:function(t,e,n){"use strict";var r={name:"HeaderPopover",components:{},props:{className:{type:String,default:""}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=(n(440),n(7)),l=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-popover"},[e("div",{staticClass:"trigger"},[this._t("trigger")],2),this._v(" "),e("div",{staticClass:"content",class:this.className},[this._t("content")],2)])}),[],!1,null,null,null).exports,c=n(17),d={name:"PageHeader",components:{HeaderPopover:l},props:{background:{type:String,default:""}},data:function(){return{}},computed:{hasBg:function(){return!!this.background},isAuth:function(){return this.$store.state.isAuth},user:function(){return this.$store.state.user}},watch:{},created:function(){},mounted:function(){},methods:{handleSignIn:function(){this.$channel.$emit("sign-in")},handleLogout:function(){Object(c.f)(this),this.$cookie.remove("JWT-TOKEN"),this.$channel.socketDisconnect(),window.location="/"}}},v=(n(441),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:{"with-bg":t.hasBg},attrs:{id:"page-header"}},[t.hasBg?n("div",{staticClass:"mask-wrap"},[n("div",{staticClass:"mask-bg",style:{backgroundImage:"url("+t.background+")"}})]):t._e(),t._v(" "),n("div",{staticClass:"mask-shim"}),t._v(" "),n("div",{staticClass:"text-wrap v-layout"},[n("ul",{staticClass:"header-left"},[n("li",[n("NLink",{staticClass:"nav-link home-link",attrs:{to:"/"}},[n("i",{staticClass:"iconfont ic-calibur"}),t._v(" "),n("span",[t._v("主站")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("游戏中心")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("直播")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("会员购")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("漫画")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("赛事")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("i",{staticClass:"iconfont ic-phone"}),t._v(" "),n("span",[t._v("下载APP")])])],1)]),t._v(" "),n("ul",{staticClass:"header-right"},[t.isAuth?[n("li",{staticClass:"user-panel"},[n("HeaderPopover",{attrs:{"class-name":"user-popover"},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("NLink",{staticClass:"avatar",attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{attrs:{src:t.$resizeImage(t.user.avatar,{width:60}),alt:""}})])]},proxy:!0},{key:"content",fn:function(){return[n("p",{staticClass:"nickname oneline",domProps:{innerHTML:t._s(t.user.nickname)}}),t._v(" "),n("NLink",{attrs:{to:t.$alias.user(t.user.slug,"setting")}},[n("div",{staticClass:"field"},[n("div",{staticClass:"label"},[n("i",{staticClass:"iconfont ic-setup_fill"}),t._v(" "),n("span",[t._v("设置")])])])]),t._v(" "),n("button",{staticClass:"sign-out",on:{click:t.handleLogout}},[t._v("\n                退出\n              ")])]},proxy:!0}],null,!1,1277139557)})],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("大会员")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("消息")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("动态")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("稍后在看")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("收藏")])])],1)]:[n("li",[n("button",{staticClass:"nav-link",on:{click:t.handleSignIn}},[t._v("\n            登录\n          ")])]),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("动态")])])],1)],t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("历史")])])],1),t._v(" "),n("li",[n("NLink",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",[t._v("创作中心")])])],1),t._v(" "),n("li",[n("Button",{staticClass:"create-btn"},[t._v("\n          投稿\n        ")])],1)],2)])])}),[],!1,null,null,null));e.a=v.exports},574:function(t,e,n){"use strict";var r=n(471);n.n(r).a},575:function(t,e,n){"use strict";var r=n(472);n.n(r).a},576:function(t,e,n){"use strict";var r=n(473);n.n(r).a},577:function(t,e,n){"use strict";var r=n(474);n.n(r).a},578:function(t,e,n){"use strict";var r=n(475);n.n(r).a},579:function(t,e,n){"use strict";var r=n(476);n.n(r).a},580:function(t,e,n){"use strict";var r=n(477);n.n(r).a},581:function(t,e,n){"use strict";var r=n(478);n.n(r).a},582:function(t,e,n){"use strict";var r=n(479);n.n(r).a},583:function(t,e,n){"use strict";var r=n(480);n.n(r).a},584:function(t,e,n){"use strict";var r=n(481);n.n(r).a},585:function(t,e,n){"use strict";var r=n(482);n.n(r).a},586:function(t,e,n){"use strict";var r=n(483);n.n(r).a},587:function(t,e,n){"use strict";var r=n(484);n.n(r).a},588:function(t,e,n){"use strict";var r=n(485);n.n(r).a},599:function(t,e,n){"use strict";n.r(e);var r=n(487),o={name:"PageBanner",props:{background:{required:!0,type:String}},data:function(){return{keyword:""}},methods:{handleSearch:function(){this.keyword&&window.open("https://search.bilibili.com/all?keyword=".concat(encodeURIComponent(this.keyword),"&from_source=calibur"))}}},l=(n(574),n(7)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{style:{backgroundImage:"url("+t.background+")"},attrs:{id:"page-banner"}},[n("div",{staticClass:"v-layout"},[n("img",{staticClass:"logo",attrs:{src:t.$resizeImage("logo-border.png",{width:220,rule:2}),alt:"logo"}}),t._v(" "),n("div",{staticClass:"search-box"},[t._m(0),t._v(" "),n("form",{staticClass:"search-wrap",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.handleSearch(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{placeholder:"搜索 bilibili",type:"text",name:"keyword","aria-autocomplete":"both","aria-haspopup":"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",role:"combobox",spellcheck:"false",maxlength:"50"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),n("button",{staticClass:"submit-btn",attrs:{type:"submit"}})])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"rank",attrs:{href:"https://www.bilibili.com/ranking"}},[e("span",[this._v("排行榜")])])}],!1,null,null,null).exports,d={name:"PageFooter",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},v=(n(575),Object(l.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"page-footer"}},[n("div",{staticClass:"v-layout"},[n("div",{staticClass:"links-wrap"},[n("div",{staticClass:"links-item"},[n("p",[t._v("calibur")]),t._v(" "),n("ul",[n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("关于我们")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("联系我们")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("用户协议")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("加入我们")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("友情链接")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("隐私政策")])])]),t._v(" "),n("div",{staticClass:"links-item"},[n("p",[t._v("传送门")]),t._v(" "),n("ul",[n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("Excalibur")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("Dollars")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("Sword Art Online")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("SOS Dan")]),t._v(" "),n("a",{staticClass:"fade-link",attrs:{href:"javascript:;"}},[t._v("Death Note")])])]),t._v(" "),n("ul",{staticClass:"icons-wrap"},[n("li",{staticClass:"icons-item"},[n("i",{staticClass:"iconfont ic-qq"}),t._v(" "),n("p",{staticClass:"name"},[t._v("\n            QQ\n          ")]),t._v(" "),n("div",{staticClass:"qr"},[n("img",{attrs:{src:"https://m1.calibur.tv/qq_mini_app.png",alt:""}})])]),t._v(" "),n("li",{staticClass:"icons-item"},[n("i",{staticClass:"iconfont ic-v-chat"}),t._v(" "),n("p",{staticClass:"name"},[t._v("\n            微信\n          ")]),t._v(" "),n("div",{staticClass:"qr"},[n("img",{attrs:{src:"https://m1.calibur.tv/weixin_mini_app.jpg",alt:""}})])])])])]),t._v(" "),n("div",{staticClass:"v-layout"},[n("div",{staticClass:"text-con"},[n("p",[n("span",[t._v("互联网ICP备案："),n("a",{staticClass:"fade-link",attrs:{href:"http://beian.miit.gov.cn/",target:"_blank"}},[t._v("沪ICP备17050785号-1")])])]),t._v(" "),n("p",[t._v("违法不良信息举报邮箱："),n("a",{staticClass:"fade-link",attrs:{href:"mailto:im_bai@163.com"}},[t._v("im_bai@163.com")])]),t._v(" "),n("p",[n("a",{staticClass:"fade-link",attrs:{href:"http://www.shjbzx.cn",target:"_blank"}},[t._v("上海互联网举报中心")]),t._v(" |\n        "),n("a",{staticClass:"fade-link",attrs:{href:"http://jbts.mct.gov.cn/",target:"_blank"}},[t._v("12318全国文化市场举报网站")]),t._v(" |\n        "),n("a",{staticClass:"fade-link",attrs:{href:"mailto:userreport@bilibili.com"}},[t._v("儿童色情信息举报专区")])]),t._v(" "),n("p",[t._v("网上有害信息举报专区："),n("a",{staticClass:"fade-link",attrs:{href:"https://www.12377.cn/",target:"_blank"}},[t._v("中国互联网违法和不良信息举报中心")])]),t._v(" "),n("p",[t._v("公司名称：上海十六夜网络科技有限公司 | 公司地址：浦东新区 万祥镇宏祥北路83弄1-42号")])])])])}],!1,null,null,null).exports),f={name:"MenuBar",components:{},filters:{convertCount:function(t){return t?t>999?"999+":t:"- -"}},props:{},data:function(){return{}},computed:{menus:function(){return[{id:0,name:"动画",count:19,children:[{id:1,name:"MAD·AMV"},{id:2,name:"MMD·3D"},{id:3,name:"短片·手书·配音"},{id:4,name:"特摄"},{id:5,name:"综合"}]},{id:6,cunt:0,name:"番剧"}]}},watch:{},created:function(){},mounted:function(){},methods:{}},m=(n(576),Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"clearfix",attrs:{id:"menu-bar"}},[n("li",{staticClass:"menu-item"},[n("NuxtLink",{staticClass:"home-link menu-link",attrs:{to:"/"}},[n("div",{staticClass:"icon"}),t._v(" "),n("span",[t._v("首页")])])],1),t._v(" "),t._l(t.menus,(function(e){return n("li",{key:e.id,staticClass:"menu-item"},[n("NuxtLink",{staticClass:"menu-link",attrs:{to:"/"}},[n("div",{staticClass:"count-wrap"},[n("span",{staticClass:"count"},[t._v(t._s(t._f("convertCount")(e.count)))])]),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),n("ul",{staticClass:"sub-menu"},t._l(e.children,(function(menu){return n("li",{key:menu.id,staticClass:"sub-item"},[n("NuxtLink",{attrs:{to:"/"}},[n("span",{domProps:{textContent:t._s(menu.name)}})])],1)})),0)],1)}))],2)}),[],!1,null,null,null).exports),h=(n(378),{name:"VCarousel",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{activeIndex:0}},computed:{showTitle:function(){var t=this.list[this.activeIndex];return t?t.title:""},showUrl:function(){var t=this.list[this.activeIndex];return t?this.convertUrl(t.link):""}},watch:{},created:function(){},mounted:function(){},methods:{handleChange:function(t){this.activeIndex=t},convertUrl:function(t){return t}}}),_=(n(577),Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-carousel"}},[n("VSwitcher",{attrs:{"default-index":t.activeIndex,headers:t.list,swipe:!0,autoplay:5e3,align:"end"},on:{change:t.handleChange}},[t._l(t.list,(function(e,r){return n("a",{key:r,staticClass:"carousel-item",attrs:{slot:r,href:t.convertUrl(e.link),target:"_blank"},slot:r},[n("VImg",{attrs:{src:t.$resizeImage(e.image,{width:440,height:220})}})],1)})),t._v(" "),n("a",{staticClass:"title",attrs:{slot:"header-before",target:"_blank",href:t.showUrl},domProps:{textContent:t._s(t.showTitle)},slot:"header-before"}),t._v(" "),n("a",{staticClass:"more",attrs:{slot:"header-after",href:"javascript:;"},slot:"header-after"},[t._v("更多")])],2)],1)}),[],!1,null,null,null).exports),C={name:"AboutSite",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},k=(n(578),Object(l.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)("a",{attrs:{id:"about-site",href:"/"}},[this._v("\n  关于网站\n")])}),[],!1,null,null,null).exports),y=(n(13),n(91),n(53),n(363));function w(t,e,n,r){var o,l=!1,c=0;function d(){o&&clearTimeout(o)}function v(){var v=this,f=Date.now()-c,m=arguments;function h(){c=Date.now(),n.apply(v,m)}l||(r&&!o&&h(),d(),void 0===r&&f>t?h():!0!==e&&(o=setTimeout(r?function(){o=void 0}:h,void 0===r?t-f:t)))}return"boolean"!=typeof e&&(r=n,n=e,e=void 0),v.cancel=function(){d(),l=!0},v}var x={name:"VerticalNavBar",components:{},props:{menu:{required:!0,type:Array}},data:function(){return{atTop:!0,offsetTop:0,offsets:[],active:-1}},computed:{top:function(){return this.atTop?"232px":this.offsetTop}},watch:{},created:function(){},mounted:function(){this.calcOffset(),window.addEventListener("scroll",this.onScroll)},methods:{onScroll:w(100,(function(){var t=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(this.atTop=t<=220,t<=0)this.active=-1;else{var e=this.offsets.map((function(e){return Math.abs(e-t)}));this.active=e.indexOf(Math.min.apply(Math,Object(y.a)(e)))}})),calcOffset:function(){var t=this;this.offsets=[];var e=document.querySelectorAll(".anchor-module"),n=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);[].forEach.call(e,(function(e){var rect=e.getBoundingClientRect();t.offsets.push(n+rect.top)}));var r=this.$el.getBoundingClientRect().height,o=document.documentElement.clientHeight;this.offsetTop=r>=o?"0px":"".concat((o-r)/2|0,"px");var l=this.offsets.map((function(t){return Math.abs(t-n)}));this.active=l.indexOf(Math.min.apply(Math,Object(y.a)(l)))}}},S=(n(579),Object(l.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{top:t.top},attrs:{id:"vertical-nav-bar"}},[n("ul",{staticClass:"nav-list"},t._l(t.menu,(function(e,r){return n("li",{key:e.type},[n("a",{class:{"is-active":r===t.active},attrs:{href:"#"+e.type},domProps:{textContent:t._s(e.left.name)}})])})),0),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"back-top",attrs:{href:"#"}},[e("span")])}],!1,null,null,null).exports),j={name:"RollRecommended",components:{},props:{},data:function(){return{activeIndex:0}},computed:{leftText:function(){var t=this.activeIndex;return 0===t?"昨日":1===t?"三日":"一周"},rightText:function(){var t=this.activeIndex;return 0===t?"一周":1===t?"昨日":"三日"}},watch:{},created:function(){},mounted:function(){},methods:{handleChangeRecommended:function(t){this.activeIndex=t},getRandomColor:function(){var t=["rgba(21,174,103,.5)","rgba(245,163,59,.5)","rgba(255,230,135,.5)","rgba(194,217,78,.5)","rgba(195,123,177,.5)","rgba(125,205,244,.5)"];return t[~~(Math.random()*t.length)]},switchRecommended:function(t){t?this.$refs.switcher.next():this.$refs.switcher.prev()}}},$=(n(580),Object(l.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"roll-recommended"}},[n("VSwitcher",{ref:"switcher",attrs:{headers:["","",""]},on:{change:t.handleChangeRecommended}},[n("div",{staticClass:"r-item",staticStyle:{"background-color":"rgba(21,174,103,.5)"},attrs:{slot:"0"},slot:"0"},[t._v("\n      三日\n    ")]),t._v(" "),n("div",{staticClass:"r-item",staticStyle:{"background-color":"rgba(195,123,177,.5)"},attrs:{slot:"1"},slot:"1"},[t._v("\n      一周\n    ")]),t._v(" "),n("div",{staticClass:"r-item",staticStyle:{"background-color":"rgba(125,205,244,.5)"},attrs:{slot:"2"},slot:"2"},[t._v("\n      昨日\n    ")])]),t._v(" "),n("div",{staticClass:"indicator"},[n("button",{staticClass:"btn-prev",on:{click:function(e){return t.switchRecommended(!1)}}},[t._v("\n      "+t._s(t.leftText)+"\n    ")]),t._v(" "),n("button",{staticClass:"btn-next",on:{click:function(e){return t.switchRecommended(!0)}}},[t._v("\n      "+t._s(t.rightText)+"\n    ")])])],1)}),[],!1,null,null,null).exports),I={name:"BangumiIntroItem",props:{item:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},O=(n(581),{name:"BangumiSwitcher",components:{BangumiIntroItem:Object(l.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"bgm-intro-item"},[e("a",{staticClass:"poster",attrs:{href:"javascript:;"}},[e("img",{attrs:{src:this.$resizeImage(this.item.avatar,{width:72})}})]),this._v(" "),e("p",{staticClass:"intro"},[e("a",{staticClass:"title fade-link",attrs:{href:"javascript:;"},domProps:{textContent:this._s(this.item.name)}}),this._v(" "),e("span",{staticClass:"oneline"},[this._v("暂无")])])])}),[],!1,null,null,null).exports},computed:{defaultIndex:function(){return((new Date).getDay()||7)-1},resource:function(){return this.$store.getters["flow/getFlow"]({func:"getBangumiRelease",type:"page"})},list:function(){return this.resource?this.resource.result:[[],[],[],[],[],[],[]]},headers:function(){return[{text:"一","text-active":"周一"},{text:"二","text-active":"周二"},{text:"三","text-active":"周三"},{text:"四","text-active":"周四"},{text:"五","text-active":"周五"},{text:"六","text-active":"周六"},{text:"日","text-active":"周日"}]}},methods:{handleLazy:function(){this.$refs.loader.initData()},handleTabSwitch:function(){this.resource&&this.resource.error&&this.$refs.loader.initData()},handleRetry:function(){this.$refs.loader.retry()}}}),P=(n(582),Object(l.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.handleLazy,expression:"handleLazy"}],attrs:{id:"bangumi-switcher"}},[n("VSwitcher",{attrs:{"default-index":t.defaultIndex,headers:t.headers,"header-height":36,align:"around"},on:{change:t.handleTabSwitch}},[n("div",{staticClass:"header-before",attrs:{slot:"header-before"},slot:"header-before"},[n("i"),t._v(" "),n("a",{attrs:{href:"javascript:;"}},[t._v("番剧")])]),t._v(" "),n("a",{staticClass:"header-after",attrs:{slot:"header-after",href:"javascript:;"},slot:"header-after"},[n("span",[t._v("新番时间表")]),t._v(" "),n("i")]),t._v(" "),t._l(t.headers,(function(e,r){return n("template",{slot:r},[t.list[r]&&t.list[r].length?n("ul",{key:r,staticClass:"flow-content"},t._l(t.list[r],(function(t){return n("BangumiIntroItem",{key:t.id,attrs:{item:t}})})),1):n("div",{key:r,staticClass:"state-content"},[!t.resource||t.resource.loading?[n("i",{staticClass:"loading-img"}),t._v(" "),n("span",{staticClass:"loading-txt"},[t._v("正在加载...")])]:t.resource.error?[n("i",{staticClass:"error-img"}),t._v(" "),n("span",{on:{click:t.handleRetry}},[t._v("加载失败，"),n("em",[t._v("点击重试")])])]:[n("i",{staticClass:"nothing-img"})]],2)])}))],2),t._v(" "),n("FlowLoader",{ref:"loader",attrs:{func:"getBangumiRelease",type:"page",query:{$axios:t.$axios},auto:0}})],1)}),[],!1,null,null,null).exports),T={name:"RankSwitcher",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},M=(n(583),Object(l.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rank-switcher"},[e("VSwitcher",{attrs:{"header-height":23,headers:["全网","站内"],align:"start",animated:!0,"header-trigger":"hover"}},[e("div",{staticClass:"header-before",attrs:{slot:"header-before"},slot:"header-before"},[this._v("\n      热门\n    ")]),this._v(" "),e("div",{staticClass:"header-after",attrs:{slot:"header-after"},slot:"header-after"},[this._v("\n      三日\n    ")]),this._v(" "),e("div",{staticClass:"k-item",staticStyle:{"background-color":"rgba(21,174,103,.5)"},attrs:{slot:"0"},slot:"0"},[this._v("\n      0\n    ")]),this._v(" "),e("div",{staticClass:"k-item",staticStyle:{"background-color":"rgba(125,205,244,.5)"},attrs:{slot:"1"},slot:"1"},[this._v("\n      1\n    ")])])],1)}),[],!1,null,null,null).exports),L=(n(173),{name:"HomepageFlow",components:{},props:{func:{required:!0,type:String},type:{type:String,default:"page"},auto:{type:Number,default:1},query:{type:Object,default:function(){}}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}}),N=(n(584),Object(l.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowLoader",{staticClass:"homepage-flow",attrs:{func:t.func,type:t.type,query:Object.assign({},{$axios:t.$axios},t.query),auto:t.auto},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return[t._t("default",null,{flow:n})]}}],null,!0)},[t._v(" "),n("template",{slot:"loading"},[n("i"),t._v(" "),n("span",[t._v("正在加载...")])]),t._v(" "),n("template",{slot:"error"},[n("i"),t._v(" "),n("span",[t._v("加载失败，"),n("em",[t._v("点击重试")])])]),t._v(" "),n("template",{slot:"nothing"},[n("i")])],2)}),[],!1,null,null,null).exports),R={name:"BiliVideoItem",props:{item:{type:Object,required:!0}},computed:{href:function(){return"https://www.bilibili.com/av".concat(this.item.model_id)}}},E=(n(585),{name:"MainFlowTab",components:{HomepageFlow:N,BilbiliVideoItem:Object(l.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"bili-video-item"},[n("a",{staticClass:"poster",attrs:{target:"_blank",href:t.href}},[n("img",{staticClass:"cover",attrs:{src:t.$resizeImage(t.item.data.poster,{width:160,height:100})}}),t._v(" "),n("div",{staticClass:"mask"},[n("p",{staticClass:"duration",domProps:{textContent:t._s(t.$utils.formatDuration(t.item.data.duration))}})])]),t._v(" "),n("div",{staticClass:"text"},[n("a",{staticClass:"title fade-link",attrs:{target:"_blank",href:t.href},domProps:{innerHTML:t._s(t.item.data.title)}}),t._v(" "),n("div",{staticClass:"mask"},[n("div",[n("i",{staticClass:"view-count"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.visit_count)}})]),t._v(" "),n("div",[n("i",{staticClass:"danmu-count"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.danmu_count)}})])])])])}),[],!1,null,null,null).exports},props:{type:{required:!0,type:String},name:{required:!0,type:String},slug:{required:!0,type:Number}},data:function(){return{}},computed:{headers:function(){return["有新动态","最新投稿"]},backgroundPosition:function(){var t="";switch(this.type){case"douga":t="-141px -908px";break;case"bangumi":t="-141px -140px";break;case"game":t="-141px -203px";break;case"manga":t="-139px -1931px";break;case"music":t="-140px -266px";break;case"dance":t="-141px -461px";break;case"novel":t="-138px -1803px"}return t}}}),B=(n(586),Object(l.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-flow-tab"},[n("VSwitcher",{attrs:{headers:t.headers,"header-height":55}},[n("template",{slot:"header-before"},[t.backgroundPosition?[n("i",{style:{backgroundPosition:t.backgroundPosition}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.name)}})]:n("p",{domProps:{textContent:t._s(t.name)}})],2),t._v(" "),n("template",{slot:"header-after"},[n("a",{staticClass:"more",attrs:{href:"javascript:;"}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})])]),t._v(" "),n("HomepageFlow",{attrs:{slot:"0",func:"getMixinFlowData",query:{slug:t.slug,sort:"activity",take:10}},slot:"0",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return t._l(r,(function(t){return n("BilbiliVideoItem",{key:t.id,attrs:{item:t}})}))}}])}),t._v(" "),n("HomepageFlow",{attrs:{slot:"1",func:"getMixinFlowData",query:{slug:t.slug,sort:"newest",take:10}},slot:"1",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return t._l(r,(function(t){return n("BilbiliVideoItem",{key:t.id,attrs:{item:t}})}))}}])})],2)],1)}),[],!1,null,null,null).exports),F={name:"RecommendedSwipe",components:{},props:{name:{type:String,default:""}},data:function(){return{activeIndex:0}},computed:{list:function(){return[{title:"测试1"},{title:"测试2"}]}},watch:{},created:function(){},mounted:function(){},methods:{handleChange:function(t){this.activeIndex=t}}},D=(n(587),Object(l.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommended-swipe"},[n("p",{staticClass:"name",domProps:{textContent:t._s(t.name)}}),t._v(" "),n("VSwitcher",{attrs:{headers:t.list,"header-height":35,autoplay:2e3,animated:!0,"header-trigger":"hover"},on:{change:t.handleChange}},[n("div",{staticClass:"k-item",staticStyle:{"background-color":"rgba(21,174,103,.5)"},attrs:{slot:"0"},slot:"0"},[t._v("\n      0\n    ")]),t._v(" "),n("div",{staticClass:"k-item",staticStyle:{"background-color":"rgba(125,205,244,.5)"},attrs:{slot:"1"},slot:"1"},[t._v("\n      1\n    ")]),t._v(" "),n("template",{slot:"header-before"},[t._v("\n      "+t._s(t.list[t.activeIndex].title)+"\n    ")])],2)],1)}),[],!1,null,null,null).exports),A=n(459),V={name:"Homepage",components:{PageHeader:r.a,PageBanner:c,PageFooter:v,MenuBar:m,Carousel:_,AboutSite:k,VerticalNavBar:S,RollRecommended:$,BangumiSwitcher:P,RankSwitcher:M,MainFlowTab:B,RecommendedSwipe:D},props:{},asyncData:function(t){var e,n=t.app,r=t.error;t.params;return(e=n,e.$axios.$get("v1/flow/index_banner")).then((function(t){return{carousel:t}})).catch(r)},data:function(){return{carousel:[],banner:"https://m1.calibur.tv/default-banner"}},computed:{pageMenu:function(){return A.a}},watch:{},created:function(){},mounted:function(){alert("这个版本的 calibur 是一个娱乐向作品，仅供代码学习交流，请勿用作商用")},methods:{}},H=(n(588),Object(l.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"homepage"}},[n("PageHeader",{attrs:{background:t.banner}}),t._v(" "),n("PageBanner",{attrs:{background:t.banner}}),t._v(" "),n("div",{staticClass:"v-layout"},[n("MenuBar"),t._v(" "),n("div",{staticClass:"ssr-modules"},[n("Carousel",{attrs:{list:t.carousel}}),t._v(" "),n("RollRecommended")],1),t._v(" "),n("div",{staticClass:"page-modules"},t._l(t.pageMenu,(function(e){return n("a",{key:e.type,staticClass:"v-layout__row",class:{"anchor-module":e.main},attrs:{id:e.type}},[n(e.left.type,{tag:"component",staticClass:"v-layout__left",attrs:{slug:e.left.slug,type:e.type,name:e.left.name}}),t._v(" "),n(e.right.type,{tag:"component",staticClass:"v-layout__right",attrs:{slug:e.right.slug,type:e.type,name:e.right.name}})],1)})),0)],1),t._v(" "),n("VerticalNavBar",{attrs:{menu:t.pageMenu.filter((function(t){return t.main}))}}),t._v(" "),n("AboutSite"),t._v(" "),n("PageFooter")],1)}),[],!1,null,null,null));e.default=H.exports}}]);