(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(t,e,n){"use strict";n(25);var o,r=n(2),h=n(73);e.a={beforeMount:(o=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",(function(){o.$store.state.isAuth?(o.$channel.$fire("user-signed"),e()):(o.$cookie.remove("JWT-TOKEN"),o.$channel.$fire("user-not-sign"))})),t.next=10;break;case 4:return n=Object(h.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?(this.$channel.$fire("user-signed"),this.$store.dispatch("getUserRoles")):(this.$cookie.remove("JWT-TOKEN"),this.$channel.$fire("user-not-sign"));case 10:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})}},249:function(t,e,n){},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){},253:function(t,e,n){},273:function(t,e,n){"use strict";var o=n(249);n.n(o).a},274:function(t,e,n){},275:function(t,e,n){},276:function(t,e,n){t.exports=function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=49)}({0:function(t,e,i){"use strict";function s(t,e,i,s,n,a,o,r){var h,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),s&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=h):n&&(h=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),h)if(c.functional){c._injectStyles=h;var l=c.render;c.render=function(t,e){return h.call(e),l(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,h):[h]}return{exports:t,options:c}}i.d(e,"a",(function(){return s}))},11:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i(3);function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var n=function(){function t(e){var i=this;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrap=e.wrap,this.loop=e.loop,this.index=e.index,this.animated=e.animated,this.duration=e.duration,this.callback=e.callback,this._calcCssPrefix(),this._setupConst(),this.loop?setTimeout((function(){i._useAnimate(),i._cloneShadow(),i._bindEvents()}),0):(this._useAnimate(),this._cloneShadow(),this._bindEvents()),this}var e,i;return e=t,(i=[{key:"slide",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t===this.index||this.move||(this._lockEvent(1.2),this._animateSlide(t,this.index,e))}},{key:"next",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.slides.length;1===e||this.touching||this.move||this.index===e-1&&!this.loop||t&&Date.now()-this.lastNextAt<t||this.slide(this.index+1,!0)}},{key:"destroy",value:function(){var t=this.el,e=this.events;t&&(t.removeEventListener("touchstart",e.touchstart,{passive:!0}),t.removeEventListener("touchmove",e.touchmove,{passive:!0}),t.removeEventListener("touchend",e.touchend,{passive:!0}))}},{key:"_updateEvents",value:function(t){this.destroy(),this.el=this.slides[t],this.index=t,this.events={},this._bindEvents()}},{key:"_setupConst",value:function(){this.slides=function(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(this.wrap.children),this.startAt=0,this.lastNextAt=0,this.move=!1,this.touching=!1,this.isMoveSlide=!1,this.maxDeltaPoint={x:0,y:0},this.deltaPoint={x:0,y:0},this.el=this.slides[this.index],this.events={}}},{key:"_cloneShadow",value:function(){var t=this.slides,e=this.index,i=this.offsetWidth;if(this.loop&&1!==t.length){var s=t[t.length-1].cloneNode(!0),n=t[0].cloneNode(!0);this.wrap.appendChild(s),this.wrap.appendChild(n),s.style.transform="translateX(".concat((-1-e)*i,"px)"),n.style.transform="translateX(".concat((t.length-e)*i,"px)"),this.beforeShadow=s,this.afterShadow=n}}},{key:"_useAnimate",value:function(){var t=this,e=this.wrap,i=e.offsetWidth;if(i||setTimeout((function(){t._useAnimate()}),100),this.offsetWidth=i,this.animated){var s=this.slides,n=this.index,a=s.length;if(a<=1)return e.style.visibility="visible",void[].forEach.call(s,(function(t){t.style.transform="translateX(0px)"}));e.style.width="".concat(100*a,"%");var o="".concat(100/a,"%");[].forEach.call(s,(function(t,e){t.style.width=o,t.style.transform="translateX(".concat((e-n)*i,"px)")})),e.style.visibility="visible"}else e.style.visibility="visible"}},{key:"_bindEvents",value:function(){var t=this.el,e=this.events;t&&(e.touchstart=this._start.bind(this),e.touchmove=this._move.bind(this),e.touchend=this._end.bind(this),t.addEventListener("touchstart",e.touchstart,{passive:!0}),t.addEventListener("touchmove",e.touchmove,{passive:!0}),t.addEventListener("touchend",e.touchend,{passive:!0}))}},{key:"_start",value:function(t){this.touching=!0;var e=t.touches[0];this.startPoint={x:e.pageX,y:e.pageY},this.startAt=+new Date}},{key:"_move",value:function(t){var e=t.touches[0],i=this.startPoint,s=this.maxDeltaPoint,n={x:e.pageX-i.x,y:e.pageY-i.y};if(this.maxDeltaPoint={x:Math.max(s.x,Math.abs(n.x)),y:Math.max(s.y,Math.abs(n.y))},this.deltaPoint=n,this.isMoveSlide=!0,this._lockedSwipeEvents(),!this._isVerticalScroll(this.maxDeltaPoint)&&this.animated&&!this._isEnded(n)){var a=n.x,o=a>0,r=this.slides,h=this.index,c=this.offsetWidth;this._translate(r[h],a),o?this._translate(r[h-1],a-c):this._translate(r[h+1],c+a),this._loopAdjust(o,h,a)}}},{key:"_end",value:function(){if(this.touching=!1,this.startAt&&this.isMoveSlide){this.isMoveSlide=!1,this._unlockSwipeEvents();var t=this.maxDeltaPoint,e=this.deltaPoint,i=this.offsetWidth,s=e.x>0;if(this.maxDeltaPoint={x:0,y:0},this._isVerticalScroll(t)||this._isEnded(e)||!this._isValidSlide(e)){if(!this.animated)return;var n=this.slides,a=this.index,o=this.duration;return this._translate(n[a],0,o),s?(this._translate(n[a-1],-i,o),this._translate(n[a+1],i)):(this._translate(n[a+1],i,o),this._translate(n[a-1],-i)),this.loop&&(s&&0===a?this._translate(this.beforeShadow,-i,o):s||a!==n.length-1||this._translate(this.afterShadow,i,o)),void this._lockEvent()}var r=s?this.index-1:this.index+1;if(this.animated){var h=this.slides,c=this.index,l=this.duration;this._translate(h[c],s?i:-i,l),this._translate(h[c-1],s?0:-i,s?l:0),this._translate(h[c+1],s?i:0,s?0:l),this.loop&&(r=this._loopJump(s,c,r))}this.callback&&this.callback(r),this._updateEvents(r),this._lockEvent()}}},{key:"_animateSlide",value:function(t,e,i){var s=this;if(this.animated){var n=this.offsetWidth,a=this.slides,o=this.duration,r=t<e;this._loopAdjust(r,t),this._translate(a[t],r?-n:n);var h=t;setTimeout((function(){s._translate(a[t],0,o),s._translate(a[e],r?n:-n,o),e!==t+1&&s._translate(a[t+1],n),e!==t-1&&s._translate(a[t-1],-n),s.loop&&(h=s._loopJump(r,e,t)),s._updateEvents(h),i&&setTimeout((function(){s.callback&&s.callback(h)}),s.duration)}),0)}}},{key:"_loopJump",value:function(t,e,i){var s,n=this.slides,a=this.duration,o=this.offsetWidth;return t&&0===e?(s=n.length-1,this._translate(this.beforeShadow,0,a),this._translate(this.afterShadow,o),this._loopReset(!0)):t||e!==n.length-1?s=i:(s=0,this._translate(this.afterShadow,0,a),this._translate(this.beforeShadow,-o),this._loopReset(!1)),s}},{key:"_loopAdjust",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(this.loop){var s=this.offsetWidth,n=this.slides;t&&0===e?this._translate(this.beforeShadow,i-s):t||e!==n.length-1||this._translate(this.afterShadow,s+i)}}},{key:"_loopReset",value:function(t){var e=this,i=this.offsetWidth,s=this.slides;setTimeout((function(){t?(e._translate(s[s.length-1],0,0),e._translate(s[s.length-2],-i,0),e._translate(e.beforeShadow,i,0)):(e._translate(s[0],0,0),e._translate(s[1],i,0),e._translate(e.afterShadow,-i,0))}),this.duration)}},{key:"_lockEvent",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.lastNextAt=Date.now(),this.move=!0,setTimeout((function(){t.move=!1}),this.duration*e)}},{key:"_lockedSwipeEvents",value:function(){this.animated&&(this.el.style["touch-action"]="none")}},{key:"_unlockSwipeEvents",value:function(){this.animated&&(this.el.style["touch-action"]="auto")}},{key:"_isVerticalScroll",value:function(t){return Math.abs(t.x)<1.5*Math.abs(t.y)}},{key:"_isValidSlide",value:function(t){var e=Math.abs(t.x),i=Number(+new Date-this.startAt)<250&&e>20||e>this.offsetWidth/2;return this.startAt=0,i}},{key:"_translate",value:function(t,e){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t&&(t.style["".concat(this.cssPrefix,"transition-duration")]=s?"".concat(s,"ms"):"",requestAnimationFrame((function(){t.style["".concat(i.cssPrefix,"transform")]="translateX(".concat(e,"px)")})))}},{key:"_isEnded",value:function(t){if(this.loop)return!1;var e=t.x>0;return e&&0===this.index||!e&&this.index===this.slides.length-1}},{key:"_calcCssPrefix",value:function(){this.animated&&(this.cssPrefix=Object(s.c)())}}])&&a(e.prototype,i),t}()},12:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i(3);function n(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e.el,this.vertical=e.vertical||!1,this.disabled=e.disabled||!1,this.maxOffset=Math.abs(e.maxOffset||0),this.minOffset=-Math.abs(e.minOffset||0),this.startCallback=e.startCallback||null,this.moveCallback=e.moveCallback||null,this.endCallback=e.endCallback||null,this.lastOffset=0,this.offset=0,this.delta=0,this.prefix=Object(s.c)(),this.events={},this._bind(),this}var e,i;return e=t,(i=[{key:"disable",value:function(t){this.disabled=t}},{key:"scroll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=t;t>this.maxOffset?i=this.maxOffset:t<this.minOffset&&(i=this.minOffset),this.el.style["".concat(this.prefix,"transition-duration")]=e?"".concat(e,"ms"):"",this.el.style["".concat(this.prefix,"transform")]=this.vertical?"translateY(".concat(i,"px)"):"translateX(".concat(i,"px)"),this.offset=i,e&&(this.lastOffset=i)}},{key:"destroy",value:function(){var t=this.el,e=this.events;t&&(t.removeEventListener("touchstart",e.touchstart),t.removeEventListener("touchmove",e.touchmove),t.removeEventListener("touchend",e.touchend))}},{key:"_bind",value:function(){var t=this.el,e=this.events;t&&(e.touchstart=this._start.bind(this),e.touchmove=this._move.bind(this),e.touchend=this._end.bind(this),t.addEventListener("touchstart",e.touchstart),t.addEventListener("touchmove",e.touchmove),t.addEventListener("touchend",e.touchend))}},{key:"_start",value:function(t){if(t.stopPropagation(),!this.disabled){var e=t.touches[0];this.delta=this.vertical?e.pageY:e.pageX,this.startCallback&&this.startCallback()}}},{key:"_move",value:function(t){if(t.stopPropagation(),!this.disabled){var e=t.touches[0],i=(this.vertical?e.pageY:e.pageX)-this.delta,s=this.lastOffset+i;this.scroll(s),this.moveCallback&&this.moveCallback(this.offset)}}},{key:"_end",value:function(t){t.stopPropagation(),this.disabled||(this.lastOffset=this.offset,this.endCallback&&this.endCallback(this.offset))}}])&&n(e.prototype,i),t}()},14:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-affix"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showFixedShim,expression:"showFixedShim"}],style:this.fixedShimStyle}),this._v(" "),e("div",{ref:"wrap",class:{"v-affix--fixed":!this.disabled&&this.isFixed},style:this.fixedSlotStyle},[this._t("default")],2)])};s._withStripped=!0,i(24);var n=i(3),a=i(2),o={name:"VAffix",props:{fixedTop:{type:Number},disabled:{type:Boolean,default:!1}},data:function(){return{isFixed:!1,showFixedShim:!1,fixedShimStyle:{},fixedSlotStyle:{}}},mounted:function(){var t=this;if(void 0!==this.fixedTop){var e=Object(a.e)(this.$el);Object(n.b)(e,"scroll",this.handleScroll),Object(n.b)(e,"resize",this.handleScroll),this.$nextTick((function(){t.handleScroll()}))}},beforeDestroy:function(){if(void 0!==this.fixedTop){var t=Object(a.e)(this.$el);Object(n.a)(t,"scroll",this.handleScroll),Object(n.a)(t,"resize",this.handleScroll)}},methods:{handleScroll:function(){var t=this.isFixed,e=Object(a.d)(window,!0),i=Object(a.c)(this.$el);if(i.top-this.fixedTop<=e&&!t){this.isFixed=!0;var s=this.$refs.wrap;this.fixedShimStyle={width:"".concat(s.clientWidth,"px"),height:"".concat(s.clientHeight,"px")},this.showFixedShim=!0,this.fixedSlotStyle={top:"".concat(this.fixedTop,"px"),left:"".concat(i.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-fixed",!0)}else i.top-this.fixedTop>e&&t&&(this.showFixedShim=!1,this.fixedShimStyle={},this.isFixed=!1,this.fixedSlotStyle=null,this.$emit("on-fixed",!1))}}},r=i(0),h=Object(r.a)(o,s,[],!1,null,null,null);h.options.__file="src/components/affix/affix.vue",e.a=h.exports},2:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"f",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"d",(function(){return h})),i.d(e,"c",(function(){return c})),i.d(e,"e",(function(){return l}));var s=function(t,e){if(t){for(var i=t.className,s=(e||"").split(" "),n=0,a=s.length;n<a;n++){var r=s[n];r&&(t.classList?t.classList.add(r):o(t,r)||(i+=" "+r))}t.classList||(t.className=i)}},n=function(t,e){if(t&&e){for(var i=e.split(" "),s=" "+t.className+" ",n=0,r=i.length;n<r;n++){var h=i[n];h&&(t.classList?t.classList.remove(h):o(t,h)&&(s=s.replace(" "+h+" "," ")))}t.classList||(t.className=a(s))}},a=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},o=function(t,e){if(!t||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").includes(" "+e+" ")},r=function t(e,i){var s=-1;if(!i)return s;var n=i.endsWith("/")?i:"".concat(i,"/");if(e.map((function(t){return t.route})).forEach((function(t,e){if(t){var i=t.endsWith("/")?t:"".concat(t,"/");n===i&&(s=e)}})),-1!==s)return s;var a=n.split("/").filter((function(t){return t}));return a.length?(a.pop(),t(e,"/".concat(a.join("/"),"/"))):-1},h=function(t,e){var i=e?"scrollTop":"scrollLeft",s=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof s&&(s=window.document.documentElement[i]),s},c=function(t){var e=t.getBoundingClientRect(),i=h(window,!0),s=h(window),n=window.document.body,a=n.clientTop||0,o=n.clientLeft||0;return{top:e.top+i-a,left:e.left+s-o}},l=function(t){var e=t;if(!e)return null;for(;e&&"HTML"!==e.tagName&&"BOYD"!==e.tagName&&1===e.nodeType;){var i=window.getComputedStyle(e).overflowY;if("scroll"===i||"auto"===i)return"HTML"===e.tagName||"BODY"===e.tagName?document:e;e=e.parentNode}return document}},24:function(t,e,i){},3:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return a}));var s=function(){if("undefined"!=typeof window)return document.addEventListener?function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)}:function(t,e,i){t&&e&&i&&t.attachEvent("on"+e,i)}}(),n=function(){if("undefined"!=typeof window)return document.removeEventListener?function(t,e,i){t&&e&&t.removeEventListener(e,i,!1)}:function(t,e,i){t&&e&&t.detachEvent("on"+e,i)}}(),a=function(){var t="",e=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,i=document.getElementsByTagName("script")[0].style;for(var s in i)e.test(s)&&(t="-"+s.match(e)[0].toLowerCase()+"-");return!t&&"WebkitOpacity"in i&&(t="-webkit-"),!t&&"KhtmlOpacity"in i&&(t="-khtml-"),t}},49:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-switcher"},[i("VAffix",{directives:[{name:"show",rawName:"v-show",value:t.headerCount>1,expression:"headerCount > 1"}],attrs:{"fixed-top":t.fixedTop,disabled:void 0===t.fixedTop||t.headerCount<=1}},[i("div",{ref:"headerWrap",staticClass:"v-switcher__header"},[i("div",{staticClass:"v-switcher__header__before"},[t._t("header-before")],2),t._v(" "),i("div",{staticClass:"v-switcher__header__after"},[t._t("header-after")],2),t._v(" "),i("div",{ref:"tabWrap",staticClass:"v-switcher__header__tabs__wrap"},[i("ul",{ref:"header",staticClass:"v-switcher__header__tabs__list",class:"v-switcher__header--"+t.align},[t._l(t.formatHeaders,(function(e,s){return i(t._computeItemName(e),t._b({key:s,ref:"tab",refInFor:!0,tag:"component",staticClass:"v-switcher__header__tabs__item",class:{"is-active":s===t.focusIndex},on:{click:function(e){return t._handleTabSwitch(s)}}},"component",t.routeName?"a"===t._computeItemName(e)?{href:e.path}:{to:e.path}:"",!1),[t._t("tab-"+s,[e.icon?i("i",{class:e.icon}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(e.text)}})])],2)})),t._v(" "),i("div",{staticClass:"v-switcher__header__anchor",style:t.anchorStyle},[t._t("anchor")],2)],2)])])]),t._v(" "),!t.routeName&&t.headerCount>0?i("div",{ref:"content",staticClass:"v-switcher__content",class:"v-switcher__content--"+t.contentMode},[i("div",{ref:"contentWrap",staticClass:"v-switcher__content__wrap"},t._l(t.headers,(function(e,s){return i("div",{key:s,staticClass:"v-switcher__content__item",class:{"is-active":~t.displayContent.indexOf(s)}},[t._t(s)],2)})),0)]):t._e()],1)};s._withStripped=!0,i(60);var n=i(3),a=i(2),o=i(14),r=i(11),h=i(12),c={name:"VSwitcher",components:{VAffix:o.a},props:{headers:{type:Array,required:!0},defaultIndex:{type:Number,default:0},routeName:{type:String,default:""},align:{type:String,default:"start",validator:function(t){return~["around","start","center","end"].indexOf(t)}},anchorPadding:{type:Number,default:16,validator:function(t){return t>=0}},fixedTop:{type:Number},swipe:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},duration:{type:Number,default:300,validator:function(t){return t>=0}}},data:function(){return{focusIndex:this.routeName?Object(a.b)(this.headers,this.$route.path):this.defaultIndex,oldFocusIndex:-1,anchorStyle:{},slider:null,scroller:null,sizeCache:{tabs:[],header:null,tabsWrapWidth:0,headerWrapWidth:0,headerScrollMaxSize:0}}},computed:{displayContent:function(){var t=this.focusIndex;return"swipe"===this.contentMode?[this.oldFocusIndex,t-1,t,t+1]:[t]},formatHeaders:function(){var t=this,e=[];return this.headers.forEach((function(i,s){e.push({text:t._computeItemText(i,s),icon:t._computeItemIcon(i,s),path:t._computeItemPath(i)})})),e},headerCount:function(){return this.headers.length},contentMode:function(){return this.routeName?"click":this.sticky&&this.duration&&this.swipe?"swipe":!this.swipe||this.sticky&&this.duration?"click":"slide"}},mounted:function(){var t=this;this.$nextTick((function(){t._setComponentSize(),t._initSwipe(),t._initScroller(),t._computeAnchorStyle(t.focusIndex),t._computeHeaderStyle(0),t.$watch("headers",(function(e){t.$nextTick((function(){var i=t.focusIndex;t._setComponentSize(),t.routeName&&t._handleTabSwitch(Object(a.b)(e,t.$route.path)),i!==t.focusIndex&&(t._computeAnchorStyle(t.focusIndex),t._computeHeaderStyle(i))}))})),t.$watch("focusIndex",(function(e,i){t._computeAnchorStyle(e),t._computeHeaderStyle(i),t.$emit("change",e)})),t.routeName&&t.$watch("$route",(function(e){t._handleTabSwitch(Object(a.b)(t.headers,e.path))})),t.$emit("change",t.focusIndex),Object(n.b)(window,"resize",t._setComponentSize)}))},beforeDestroy:function(){Object(n.a)(window,"resize",this._setComponentSize),this.slider&&this.slider.destroy(),this.scroller&&this.scroller.destroy()},methods:{slide:function(t){t<0||t>this.headerCount-1||this._handleTabSwitch(t)},_initSwipe:function(){var t=this;"click"!==this.contentMode&&(this.slider=new r.a({wrap:this.$refs.contentWrap,loop:!1,index:this.focusIndex,animated:"swipe"===this.contentMode,duration:this.duration,callback:function(e){t.focusIndex=e}}))},_initScroller:function(){"start"===this.align&&(this.scroller=new h.a({el:this.$refs.header,minOffset:this.sizeCache.headerScrollMaxSize}))},_computeItemName:function(t){return this.routeName?t.path&&t.path.startsWith("http")?"a":this.routeName||"li":"li"},_handleTabSwitch:function(t){if(this.slider){if(this.slider.move)return;this.oldFocusIndex=this.focusIndex,this.slider.slide(t)}this.focusIndex=t,t<0&&(this.anchorStyle.transform="translateX(-100%)")},_computeHeaderStyle:function(t){var e=this;if(0!==this.sizeCache.headerScrollMaxSize){var i=this.focusIndex;if(!(i<0)){var s=this.scroller?this.scroller.offset:0,n=this.sizeCache.headerScrollMaxSize;if(i)if(i===this.headerCount-1)s=n;else{var a=this._getComponentSize("tabs",0).left,o=this._getComponentSize("tabs",i),r=function(){var t=e._getComponentSize("tabs",i+1).right-a-e.sizeCache.tabsWrapWidth;t>0&&(s=-t);var n=o.left-a;s+n<0&&(s=-n)};if(t>i){var h=this._getComponentSize("tabs",i-1);if(h.left+s<a){s=a-h.left;var c=o.right-a-this.sizeCache.tabsWrapWidth;c>s>0&&(s=-c)}else r()}else r()}else s=0;s<n?s=n:s>0&&(s=0),this.scroller&&this.scroller.scroll(s,this.duration)}}},_computeAnchorStyle:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!(t<0)){var s=this._getComponentSize("tabs",t);if(s){var n=+this.anchorPadding,a=this._getComponentSize("header"),o="around"===this.align;this.anchorStyle={width:"".concat(o?s.width:s.width-2*n,"px"),transform:"translateX(".concat(o?s.left-a.left:s.left-a.left+n,"px)"),transitionDuration:"".concat(this.duration,"ms")}}else i<5&&setTimeout((function(){e._computeAnchorStyle(e.focusIndex,i+1)}),200)}},_computeItemText:function(t,e){var i;if("string"==typeof t||"number"==typeof t)i=t;else if(i=t.label||t.name||t.text,this.focusIndex===e){var s=t["label-active"]||t["name-active"]||t["text-active"];s&&(i=s)}return i},_computeItemIcon:function(t,e){var i;return"string"!=typeof t&&"number"!=typeof t&&t.icon?(i=t.icon,this.focusIndex===e&&t["icon-active"]&&(i=t["icon-active"])):i="",i},_computeItemPath:function(t){return"string"==typeof t||"number"==typeof t?"":t.route||""},_setComponentSize:function(){var t=this.$refs.tab;if(t){var e=[];t.forEach((function(t){var i=t instanceof Element?t.getBoundingClientRect():t.$el.getBoundingClientRect();e.push({top:i.top,left:i.left,right:i.right,bottom:i.bottom,width:i.width,height:i.height})})),this.sizeCache.tabs=e}var i=this.$refs.headerWrap;i&&(this.sizeCache.headerWrapWidth=i.clientWidth);var s=this.$refs.tabWrap;s&&(this.sizeCache.tabsWrapWidth=s.clientWidth);var n=this.$refs.header;if(n){var a=n.getBoundingClientRect();this.sizeCache.header={top:a.top,left:a.left,right:a.right,bottom:a.bottom}}var o=this.sizeCache.tabs[this.headerCount-1].right-this.sizeCache.tabs[0].left;this.sizeCache.headerScrollMaxSize=o<this.sizeCache.tabsWrapWidth?0:this.sizeCache.tabsWrapWidth-o},_getComponentSize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=this.sizeCache[t];return i?e>=0?i[e]?i[e]:null:i:null}}},l=i(0),u=Object(l.a)(c,s,[],!1,null,null,null);u.options.__file="src/components/switcher/switcher.vue";var d=u.exports;e.default=d},60:function(t,e,i){}})},277:function(t,e,n){"use strict";var o=n(250);n.n(o).a},278:function(t,e,n){"use strict";var o=n(251);n.n(o).a},279:function(t,e,n){"use strict";var o=n(252);n.n(o).a},280:function(t,e,n){"use strict";var o=n(253);n.n(o).a},326:function(t,e,n){"use strict";n.r(e);n(10);var o=n(248),r=(n(26),n(263),{name:"MenuBar",props:{show:{required:!0,type:Boolean},x:{required:!0,type:Number},y:{required:!0,type:Number}},data:function(){return{items:["还","在","研","发","中"]}},computed:{style:function(){return{transform:"translate3d(".concat(this.x,"px, ").concat(this.y,"px, 0)")}}},methods:{closeMenu:function(){this.$emit("close")}}}),h=(n(273),n(53)),c=Object(h.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-bar__wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"menu-bar__mask",on:{click:t.closeMenu}}),t._v(" "),n("transition-group",{staticClass:"menu-bar",style:t.style,attrs:{name:"menu",tag:"div"}},t._l(t.items,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],key:e,staticClass:"menu-bar__item",domProps:{textContent:t._s(e)},on:{click:function(t){t.stopPropagation()}}})})),0)],1)}),[],!1,null,null,null).exports,l=n(16),d={name:"FloatMenu",components:{MenuBar:c},data:function(){return{leftDown:!1,rightDown:!1,noTouch:!0,beginX:-1,beginY:-1,openMenu:!1}},beforeMount:function(){this.blockRightClick(),Object(l.isTouchDevice)()?this.bindTouch():this.bindPC()},methods:{blockRightClick:function(){document.addEventListener("contextmenu",(function(t){return t.preventDefault()}))},bindTouch:function(){var t=this;document.addEventListener("touchstart",(function(e){t.openMenu||e.touches.length>1&&(t.leftDown=!0,t.rightDown=!0)})),document.addEventListener("touchend",(function(){t.openMenu||(t.leftDown=!1,t.rightDown=!1,t.noTouch=!0)})),document.addEventListener("touchmove",(function(e){if(t.rightDown&&t.leftDown&&!t.openMenu)if(t.noTouch)t.noTouch=!1,t.beginX=e.touches[0].clientX,t.beginY=e.touches[0].clientY;else{var n=t.beginX-e.touches[0].clientX,o=t.beginY-e.touches[0].clientY;o<-100&&Math.abs(n)<Math.abs(o)&&(t.openMenu=!0)}}))},bindPC:function(){var t=this;document.addEventListener("mousedown",(function(e){t.openMenu||(0!==e.button||t.rightDown||(t.leftDown=!0),2===e.button&&t.leftDown&&(t.rightDown=!0))})),document.addEventListener("mouseup",(function(e){t.openMenu||(0===e.button&&(t.leftDown=!1),2===e.button&&(t.rightDown=!1),t.noTouch=!0)})),document.addEventListener("mousemove",(function(e){if(t.rightDown&&t.leftDown&&!t.openMenu)if(t.noTouch)t.noTouch=!1,t.beginX=e.clientX,t.beginY=e.clientY;else{var n=t.beginX-e.clientX,o=t.beginY-e.clientY;o<-100&&Math.abs(n)<Math.abs(o)&&(t.openMenu=!0)}}))},handleClose:function(){this.openMenu=!1,this.leftDown=!1,this.rightDown=!1,this.noTouch=!0}}},menu=Object(h.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("MenuBar",{attrs:{show:this.openMenu,x:this.beginX,y:this.beginY},on:{close:this.handleClose}})}),[],!1,null,null,null).exports,f=(n(27),n(34),n(88),n(89),n(42),n(15),n(43));n(274);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={name:"Curtain",props:{id:{required:!0,type:String},position:{type:Object,default:null}},data:function(){return{canRender:!1,moving:!1,drag:!1,rect:{top:0,left:0,zIndex:0},startX:0,startY:0,startLeft:0,startTop:0}},computed:{wrapStyle:function(){var rect=this.rect;return{transform:"translate3d(".concat(rect.left,"px, ").concat(rect.top,"px, 0)"),zIndex:rect.zIndex}}},mounted:function(){this.initManager(),this.canRender=!0},beforeDestroy:function(){this.$manager.unbindComponent(this.id)},methods:{initManager:function(){if(this.$manager.componentIsUnique(this.id)){var rect=this.$el.getBoundingClientRect();this.$manager.bindComponent(this.id,this),this.rect=this.$manager.getRect(this.id,this.position?function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.position,{width:rect.width,height:rect.height}):null)}else console.error("curtain 组件的 id 必须是独一无二的，id：".concat(this.id,"已被注册"))},handleStart:function(t){this.moving=!0,this.startX=t.clientX,this.startY=t.clientY,this.startLeft=this.rect.left,this.startTop=this.rect.top,this.updateIndex()},handleMove:function(t){this.moving&&(this.drag=!0,this.rect.left=this.startLeft+t.clientX-this.startX,this.rect.top=this.startTop+t.clientY-this.startY)},handleEnd:function(){this.drag=!1,this.moving=!1;var rect=this.$el.getBoundingClientRect();this.$manager.setRect(this.id,{top:rect.top,left:rect.left,width:rect.width,height:rect.height,zIndex:this.rect.zIndex})},handleClick:function(){this.updateIndex()},updateIndex:function(){this.rect.zIndex=this.$manager.setMaxIndex(this.id)}},render:function(t){return this.canRender?t("div",{class:["curtain",{"curtain--moving":this.drag}],style:this.wrapStyle,on:{click:this.handleClick}},[t("div",{class:"curtain__header"},[t("div",{class:"curtain__header__drag",attrs:{"data-id":this.id}})]),t("div",{class:"curtain__body"},this.$slots.default)]):t("div",{class:["curtain__placeholder"]},this.$slots.placeholder||this.placeholder)}},_=(n(275),n(245),n(276)),x={name:"QrCode",components:{VSwitcher:n.n(_).a},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},w=(n(277),Object(h.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qr-wrap"},[e("VSwitcher",{attrs:{headers:["QQ","微信"],align:"center"}},[e("template",{slot:"0"},[e("img",{attrs:{src:"https://m1.calibur.tv/qq_mini_app.png",alt:""}}),this._v(" "),e("p",[this._v("使用手机QQ扫码访问")])]),this._v(" "),e("template",{slot:"1"},[e("img",{attrs:{src:"https://m1.calibur.tv/weixin_mini_app.jpg",alt:""}}),this._v(" "),e("p",[this._v("使用手机微信扫码访问")])])],2)],1)}),[],!1,null,null,null).exports),y={name:"Logo"},S=(n(278),Object(h.a)(y,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://m1.calibur.tv/icon.png-sharejpg200",alt:"logo"}}),this._v(" "),e("p",[this._v("calibur.tv")])])}],!1,null,null,null).exports),C=(n(246),n(247)),k=n.n(C),O=n(46),E={name:"Create",components:{VButton:k.a},computed:{isAuth:function(){return this.$store.state.isAuth}},methods:{handleSignIn:function(){if(this.isAuth)return Object(O.e)(this),this.$cookie.remove("JWT-TOKEN"),this.$channel.socketDisconnect(),void(window.location="/");this.$channel.$emit("sign-in")},handleCreate:function(){this.$toast.success("先去小程序吧，网页之后我再维护~呐，好吗？")}}},$=(n(279),{name:"PwaLayout",layout:"empty",components:{Logo:S,QrCode:w,Create:Object(h.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"create"},[e("VButton",{attrs:{plain:""},on:{click:this.handleSignIn}},[this._v("\n    "+this._s(this.isAuth?"退出":"登录")+"\n  ")]),this._v(" "),e("VButton",{on:{click:this.handleCreate}},[this._v("投稿")])],1)}),[],!1,null,null,null).exports,Curtain:m,FloatMenu:menu},mixins:[o.a],mounted:function(){Promise.all([n.e(8),n.e(9)]).then(n.bind(null,325))},methods:{handleClick:function(){}}}),T=(n(280),Object(h.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"desktop"}},[e("canvas",{attrs:{id:"canvas"}}),this._v(" "),e("div",{staticClass:"view"},[e("Curtain",{attrs:{id:"logo",position:{left:15,top:40}}},[e("Logo")],1),this._v(" "),e("Curtain",{attrs:{id:"qr-code",position:{left:255,top:40}}},[e("QrCode")],1),this._v(" "),e("Curtain",{attrs:{id:"create",position:{left:820,top:40}}},[e("Create")],1)],1),this._v(" "),this._m(0),this._v(" "),e("FloatMenu",{staticClass:"float-menu"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"beian"},[e("a",{attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[this._v("互联网 ICP 备案：沪 ICP 备 17050785 号 - 1")])])}],!1,null,null,null));e.default=T.exports}}]);