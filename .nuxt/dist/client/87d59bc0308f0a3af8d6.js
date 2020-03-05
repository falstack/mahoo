/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{404:function(e,t,n){var o=n(9),r=n(82),c=n(22),l=n(123).f,d=function(e){return function(t){for(var n,d=c(t),f=r(d),h=f.length,i=0,m=[];h>i;)n=f[i++],o&&!l.call(d,n)||m.push(e?[n,d[n]]:d[n]);return m}};e.exports={entries:d(!0),values:d(!1)}},528:function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var o=n(2),r=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,o)}else(1===e._state?c:s)(t.promise,e._value)}))):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void f((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}var o,r}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e((function(e){n||(n=!0,c(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return;n=!0,s(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new d(e,t,n)),n},a.prototype.finally=o.a,a.all=function(e){return new a((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,(function(t){i(e,t)}),n)}o[e]=a,0==--r&&t(o)}catch(e){n(e)}}for(var a=0;a<o.length;a++)i(a,o[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){r(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var r,i,a,u,c,s,l=n(8),d=(i=function(e){return new Promise((function(t,n){e=u(e),e=c(e);var o=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");o.open(e.method,e.url),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var n=e.headers[t];o.setRequestHeader(t,n)}));var r=e.ratio;o.upload.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),o=Math.ceil(n*r/100);e.progress(o)}),!1),o.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),o=Math.ceil(n*(100-r)/100)+r;e.progress(o)}),!1),o.onreadystatechange=function(){if(4===o.readyState){var e=o.response;try{e=JSON.parse(e)}catch(e){}var r=l.parseHeaders(o.getAllResponseHeaders()),i={body:e,code:o.status,headers:r};200===o.status?t(i):n(i)}},o.send(e.data)}))},a=function(e){return e.method="POST",i(e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==o(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(r).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},c=function(e){switch(e.method){case"GET":var t=s(e.data,r.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||r.JSON}(e);(l.isFormData(e.data)||l.isFormElement(e.data))&&(n=r.FORM),e.data=s(e.data,n),n!==d.contentType.FORM&&(e.headers["content-type"]=n)}return e},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case r.URLENCODED:return l.urlEncode(e);case r.JSON:return l.jsonEncode(e);case r.FORM:return l.formEncode(e);default:return e}},{contentType:r={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=u(e),l.selectFiles(e).then((function(t){for(var n=new FormData,o=0;o<t.length;o++)n.append(e.fieldName,t[o],t[o].name);return l.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var o=e.data[t];n.append(t,o)})),e.beforeSend&&e.beforeSend(t),e.data=n,a(e)}))},selectFiles:function(e){return delete(e=u(e)).beforeSend,l.selectFiles(e)}});e.exports=d},function(e,t,n){"use strict";n.r(t);var o=n(1);window.Promise=window.Promise||o.a},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,r,i,a,u,c=1,s={},l=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){h(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),o=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){i.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(h,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[c]=r,o(c),c++},f.clearImmediate=p}function p(e){delete s[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=s[e];if(t){l=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,s=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):d=-1,s.length&&p())}function p(){if(!l){var e=u(f);l=!0;for(var t=s.length;t;){for(c=s,s=[];++d<t;)c&&c[d].run();d=-1,t=s.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i;return t=e,(i=[{key:"urlEncode",value:function(e){return r(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach((function(n){var o=e[n];t.append(n,o)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){var o=document.createElement("INPUT");o.type="file",e.multiple&&o.setAttribute("multiple","multiple"),e.accept&&o.setAttribute("accept",e.accept),o.style.display="none",document.body.appendChild(o),o.addEventListener("change",(function(e){var n=e.target.files;t(n),document.body.removeChild(o)}),!1),o.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach((function(e){var t=e.split(": "),o=t.shift(),r=t.join(": ");o&&(n[o]=r)})),n}}])&&o(t,i),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},o=function(e,t,r,i){return t=t||null,r=r||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map((function(a){var u,c,s=a;if(i&&(s=i+"["+s+"]"),"object"==typeof e[a]&&null!==e[a])u=o(e[a],null,r,s);else{t&&(c=s,s=!isNaN(parseFloat(c))&&isFinite(c)?t+Number(s):s);var l=e[a];l=(l=0===(l=!1===(l=!0===l?"1":l)?"0":l)?"0":l)||"",u=n(s)+"="+n(l)}return u}))).join(r).replace(/[!'()*]/g,""):""};e.exports=o}])},706:function(e,t,n){},707:function(e,t,n){var o=n(3),r=n(404).entries;o({target:"Object",stat:!0},{entries:function(e){return r(e)}})},770:function(e,t,n){"use strict";n.r(t);n(30),n(8),n(54),n(17),n(49),n(31);var o=n(2),r=n(33),c=n(34),l=(n(706),n(29),n(40),n(362)),d=function(){function e(t){var n=t.api,o=t.config,c=t.onSelectFile;Object(r.a)(this,e),this.api=n,this.config=o,this.onSelectFile=c,this.nodes={wrapper:f("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:f("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:f("div",this.CSS.imagePreloader),caption:f("div",[this.CSS.input,this.CSS.caption],{contentEditable:!0})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}return Object(c.a)(e,[{key:"render",value:function(t){return t.file&&0!==Object.keys(t.file).length?this.toggleStatus(e.status.UPLOADING):this.toggleStatus(e.status.EMPTY),this.nodes.wrapper}},{key:"createFileButton",value:function(){var e=this,button=f("div",[this.CSS.button]);return button.innerHTML=this.config.buttonContent||"".concat('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n    <path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>\n</svg>'," 选择一张图片"),button.addEventListener("click",(function(){e.onSelectFile()})),button}},{key:"showPreloader",value:function(t){this.nodes.imagePreloader.style.backgroundImage="url(".concat(t,")"),this.toggleStatus(e.status.UPLOADING)}},{key:"hidePreloader",value:function(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(e.status.EMPTY)}},{key:"fillImage",value:function(t){var n=this,o=/\.mp4$/.test(t)?"VIDEO":"IMG",r={src:t},c="load";"VIDEO"===o&&(r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,c="loadeddata"),this.nodes.imageEl=f(o,this.CSS.imageEl,r),this.nodes.imageEl.addEventListener(c,(function(){n.toggleStatus(e.status.FILLED),n.nodes.imagePreloader&&(n.nodes.imagePreloader.style.backgroundImage="")})),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}},{key:"fillCaption",value:function(text){this.nodes.caption&&(this.nodes.caption.innerHTML=text)}},{key:"toggleStatus",value:function(t){for(var n in e.status)e.status.hasOwnProperty(n)&&this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(e.status[n]),t===e.status[n])}},{key:"applyTune",value:function(e,t){this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(e),t)}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}}],[{key:"status",get:function(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}}]),e}(),f=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(e);Array.isArray(n)?(t=r.classList).add.apply(t,Object(l.a)(n)):n&&r.classList.add(n);for(var c in o)r[c]=o[c];return r},h=(n(429),function(){function e(t){var n=t.api,o=t.onChange;Object(r.a)(this,e),this.api=n,this.onChange=o,this.buttons=[]}return Object(c.a)(e,[{key:"render",value:function(t){var n=this,o=f("div",this.CSS.wrapper);return this.buttons=[],e.tunes.forEach((function(e){var r=f("div",[n.CSS.buttonBase,n.CSS.button],{innerHTML:e.icon,title:e.title});r.addEventListener("click",(function(){n.tuneClicked(e.name)})),r.dataset.tune=e.name,r.classList.toggle(n.CSS.buttonActive,t[e.name]),n.buttons.push(r),o.appendChild(r)})),o}},{key:"tuneClicked",value:function(e){var button=this.buttons.find((function(t){return t.dataset.tune===e}));button.classList.toggle(this.CSS.buttonActive,!button.classList.contains(this.CSS.buttonActive)),this.onChange(e)}},{key:"CSS",get:function(){return{wrapper:"",buttonBase:this.api.styles.settingsButton,button:"image-tool__tune",buttonActive:this.api.styles.settingsButtonActive}}}],[{key:"tunes",get:function(){return[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>',title:"With border"},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>',title:"Stretch image"},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>',title:"With background"}]}}]),e}()),m=(n(707),n(72)),main=n(528),v=n.n(main),y=function(){function e(t){var n=t.config,o=t.onUpload,c=t.onError;Object(r.a)(this,e),this.config=n,this.onUpload=o,this.onError=c}return Object(c.a)(e,[{key:"uploadSelectedFile",value:function(e){var t=this,n=e.onPreview,o=function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){n(e.target.result)}};(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?v.a.selectFiles().then((function(e){o(e[0]);var n=t.config.uploader.uploadByFile(e[0]);return w(n)||console.warn("Custom uploader method uploadByFile should return a Promise"),n})):v.a.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:function(e){o(e[0])},fieldName:this.config.field}).then((function(e){return e.body}))).then((function(e){t.onUpload(e)})).catch((function(e){t.onError(e)}))}},{key:"uploadByUrl",value:function(e){var t,n=this;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?w(t=this.config.uploader.uploadByUrl(e))||console.warn("Custom uploader method uploadByUrl should return a Promise"):t=v.a.post({url:this.config.endpoints.byUrl,data:Object.assign({url:e},this.config.additionalRequestData),type:v.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(e){return e.body})),t.then((function(e){n.onUpload(e)})).catch((function(e){n.onError(e)}))}},{key:"uploadByFile",value:function(e,t){var n,o=this,r=t.onPreview,c=new FileReader;if(c.readAsDataURL(e),c.onload=function(e){r(e.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)w(n=this.config.uploader.uploadByFile(e))||console.warn("Custom uploader method uploadByFile should return a Promise");else{var l=new FormData;l.append(this.config.field,e),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((function(e){var t=Object(m.a)(e,2),n=t[0],o=t[1];l.append(n,o)})),n=v.a.post({url:this.config.endpoints.byFile,data:l,type:v.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(e){return e.body}))}n.then((function(e){o.onUpload(e)})).catch((function(e){o.onError(e)}))}}]),e}();function w(object){return Promise.resolve(object)===object}n.d(t,"default",(function(){return k}));var k=function(){function e(t){var n=this,data=t.data,o=t.config,c=t.api;Object(r.a)(this,e),this.api=c,this.config={endpoints:o.endpoints||"",additionalRequestData:o.additionalRequestData||{},additionalRequestHeaders:o.additionalRequestHeaders||{},field:o.field||"image",types:o.types||"image/*",captionPlaceholder:o.captionPlaceholder||"Caption",buttonContent:o.buttonContent||"",uploader:o.uploader||void 0},this.uploader=new y({config:this.config,onUpload:function(e){return n.onUpload(e)},onError:function(e){return n.uploadingFailed(e)}}),this.ui=new d({api:c,config:this.config,onSelectFile:function(){n.uploader.uploadSelectedFile({onPreview:function(e){n.ui.showPreloader(e)}})}}),this.tunes=new h({api:c,onChange:function(e){return n.tuneToggled(e)}}),this._data={},this.data=data}var t;return Object(c.a)(e,null,[{key:"toolbox",get:function(){return{icon:'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>',title:"图片"}}}]),Object(c.a)(e,[{key:"render",value:function(){return this.ui.render(this.data)}},{key:"save",value:function(){var caption=this.ui.nodes.caption;return this._data.caption=caption.innerHTML,this.data}},{key:"renderSettings",value:function(){return this.tunes.render(this.data)}},{key:"appendCallback",value:function(){this.ui.nodes.fileButton.click()}},{key:"onPaste",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var image,n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.type,e.next="tag"===e.t0?3:"pattern"===e.t0?15:"file"===e.t0?18:21;break;case 3:if(!(image=t.detail.data).src.startsWith("blob:")){e.next=13;break}return e.next=7,fetch(image.src);case 7:return n=e.sent,e.next=10,n.blob();case 10:return o=e.sent,this.uploadFile(o),e.abrupt("break",21);case 13:return this.uploadUrl(image.src),e.abrupt("break",21);case 15:return r=t.detail.data,this.uploadUrl(r),e.abrupt("break",21);case 18:return c=t.detail.file,this.uploadFile(c),e.abrupt("break",21);case 21:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"onUpload",value:function(e){e.success&&e.file?this.image=e.file:this.uploadingFailed("incorrect response: "+JSON.stringify(e))}},{key:"uploadingFailed",value:function(e){console.log("Image Tool: uploading failed because of",e),this.api.notifier.show({message:"图片上传失败，请刷新网页重试",style:"error"}),this.ui.hidePreloader()}},{key:"tuneToggled",value:function(e){this.setTune(e,!this._data[e])}},{key:"setTune",value:function(e,t){var n=this;if(this._data[e]=t,this.ui.applyTune(e,t),"stretched"===e){var o=this.api.blocks.getCurrentBlockIndex();setTimeout((function(){n.api.blocks.stretchBlock(o,t)}),0)}}},{key:"uploadFile",value:function(e){var t=this;this.uploader.uploadByFile(e,{onPreview:function(e){t.ui.showPreloader(e)}})}},{key:"uploadUrl",value:function(e){this.ui.showPreloader(e),this.uploader.uploadByUrl(e)}},{key:"validate",value:function(e){return!(!e.file||!e.file.url)}},{key:"data",set:function(data){var e=this;this.image=data.file,this._data.caption=data.caption||"",this.ui.fillCaption(this._data.caption),h.tunes.forEach((function(t){var n=t.name,o=void 0!==data[n]&&data[n];e.setTune(n,o)}))},get:function(){return this._data}},{key:"image",set:function(e){this._data.file=e||{},e&&e.url&&this.ui.fillImage(e.url)}}],[{key:"pasteConfig",get:function(){return{tags:["img"],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},files:{mimeTypes:["image/*"]}}}}]),e}()}}]);