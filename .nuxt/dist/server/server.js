module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/about/donate","2":"pages/index","3":"pages/pin/_slug","4":"pages/user/_slug","5":"pages/user/_slug/draft","6":"pages/user/_slug/emotion/category","7":"pages/user/_slug/emotion/category/bangumi","8":"pages/user/_slug/emotion/category/game","9":"pages/user/_slug/emotion/category/notebook","10":"pages/user/_slug/emotion/category/topic","11":"pages/user/_slug/emotion/index","12":"pages/user/_slug/message","13":"pages/user/_slug/setting","14":"pages/user/_slug/setting/basic","15":"pages/user/_slug/setting/index","16":"pages/user/_slug/setting/oauth2","17":"pages/user/_slug/setting/spider","18":"pages/user/_slug/social","19":"pages/user/_slug/social/followers","20":"pages/user/_slug/social/following","21":"pages/user/_slug/social/friends","22":"pages/user/_slug/social/index","23":"pages/user/_slug/timeline","24":"pages/write/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://file.calibur.tv/mahoo/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getRecommendedUsers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return settingProfile; });
/* unused harmony export settingImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMailboxTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return logout; });
/* unused harmony export feedback */
/* unused harmony export daySignAction */
/* unused harmony export getUserCard */
/* unused harmony export getUserBadgeDetail */
/* unused harmony export report */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resetPassword; });
/* unused harmony export readAllMessage */
/* unused harmony export readMessage */
/* unused harmony export readNotice */
/* unused harmony export getNotifications */
/* unused harmony export getNotificationCount */
/* unused harmony export getSystemNotice */
const getRecommendedUsers = ctx => ctx.$axios.$get('user/recommended');
const getLoginUser = ctx => ctx.$axios.$post('v1/door/get_user_info');
const settingProfile = (ctx, params) => ctx.$axios.$post('v1/user/update_info', params);
const settingImage = (ctx, {
  type,
  url
}) => ctx.$axios.$post('user/setting/image', {
  type,
  url
});
const getUserInfo = (ctx, {
  slug
}) => ctx.$axios.$get('v1/user/show', {
  params: {
    slug
  }
});
const bindPhone = (ctx, {
  slug,
  phone,
  password,
  authCode
}) => ctx.$axios.$post('v1/door/bind_phone', {
  slug,
  phone,
  password,
  authCode
});
const getMailboxTotal = (ctx, {
  slug
}) => ctx.$axios.$get('v1/message/total', {
  params: {
    slug
  },
  progress: false
});
const sendMessage = (ctx, {
  phone_number,
  type,
  geetest
}) => ctx.$axios.$post('v1/door/message', {
  phone_number,
  type,
  geetest
});
const register = (ctx, {
  access,
  secret,
  authCode,
  inviteCode
}) => ctx.$axios.$post('v1/door/register', {
  access,
  secret,
  authCode,
  inviteCode
});
const login = (ctx, {
  access,
  secret,
  remember,
  geetest
}) => ctx.$axios.$post('v1/door/login', {
  access,
  secret,
  remember,
  geetest
});
const logout = ctx => ctx.$axios.$post('v1/door/logout');
const feedback = (ctx, {
  type,
  desc,
  ua
}) => ctx.$axios.$post('user/feedback', {
  type,
  desc,
  ua
});
const daySignAction = ctx => ctx.$axios.$post('user/daySign');
const getUserCard = (ctx, {
  id
}) => ctx.$axios.$get('user/card', {
  params: {
    id
  }
});
const getUserBadgeDetail = (ctx, {
  user_id,
  badge_id
}) => ctx.$axios.$get('user/badge/item', {
  params: {
    user_id,
    badge_id
  }
});
const report = (ctx, {
  id,
  type,
  model,
  message
}) => ctx.$axios.$post('report/send', {
  id,
  type,
  model,
  message
});
const resetPassword = (ctx, {
  method,
  access,
  authCode,
  secret
}) => ctx.$axios.$post('v1/door/reset_password', {
  method,
  access,
  authCode,
  secret
});
const readAllMessage = ctx => ctx.$axios.$post('user/notification/clear');
const readMessage = (ctx, {
  id
}) => ctx.$axios.$post('user/notification/read', {
  id
});
const readNotice = (ctx, {
  id
}) => ctx.$axios.$post('user/notice/mark', {
  id
});
const getNotifications = (ctx, {
  minId
}) => ctx.$axios.$get('user/notification/list', {
  params: {
    minId
  }
});
const getNotificationCount = ctx => ctx.$axios.$get('user/notification/count');
const getSystemNotice = ctx => ctx.$axios.$get('user/notice/list');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTA", function() { return convertTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStr", function() { return randomStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustDate", function() { return adjustDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenNumber", function() { return shortenNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeAgo", function() { return timeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInView", function() { return checkInView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchDevice", function() { return isTouchDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return formatDuration; });
const convertTA = (sex = -1, isMine = false) => {
  if (isMine) {
    return '我';
  } else if (sex === 0) {
    return 'TA';
  } else if (sex === 1) {
    return '他';
  } else if (sex === 2) {
    return '她';
  }

  return 'TA';
};
const randomStr = () => {
  return `${Date.now()}-${Math.random().toString(36).substring(3, 6)}`;
};
const adjustDate = time => {
  if (/^\d+$/.test(time) && time.toString().length === 10) {
    return new Date(time * 1000);
  }

  let result = new Date(time);

  if (result.toString() === 'Invalid Date') {
    result = new Date(time.replace(/-/g, '/'));
  }

  return result;
};
const shortenNumber = num => {
  return num > 1000 ? `${Math.floor(num / 1000 * 10) / 10}k` : num;
};
const timeAgo = time => {
  const date = adjustDate(time);
  const delta = Date.now() - date.getTime();
  const format = [date.getFullYear(), `0${date.getMonth() + 1}`.substr(-2), `0${date.getDate()}`.substr(-2), `0${date.getHours()}`.substr(-2), `0${date.getMinutes()}`.substr(-2)];

  if (delta > 365 * 86400000 || delta <= 0) {
    return `${format[0]}-${format[1]}-${format[2]}`;
  }

  const today = new Date().setHours(0, 0, 0, 0);

  if (today < date) {
    return `今天${format[3]}:${format[4]}`;
  }

  if (today - 86400000 < date) {
    return `昨天${format[3]}:${format[4]}`;
  }

  if (today - 172800000 < date) {
    return `前天${format[3]}:${format[4]}`;
  }

  return `${format[1]}-${format[2]} ${format[3]}:${format[4]}`;
};
const checkInView = (dom, preload = 1) => {
  if (!dom) {
    return false;
  }

  const rect = dom.getBoundingClientRect();
  return rect.top < window.innerHeight + preload && rect.bottom + preload > 0 && rect.left < window.innerWidth + preload && rect.right + preload > 0;
};
const on = function () {
  if (typeof window === 'undefined') {
    return;
  }

  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }

  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler);
    }
  };
}();
const off = function () {
  if (typeof window === 'undefined') {
    return;
  }

  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }

  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent('on' + event, handler);
    }
  };
}();
const isTouchDevice = () => 'ontouchstart' in document.documentElement;
const pad = number => {
  return number < 10 ? '0' + number : number;
};
const formatNumber = n => {
  if (!n) {
    return 0;
  }

  if (n >= 10000 && n < 100000000) {
    n = (n / 10000).toFixed(1);
    return n + '万';
  } else if (n >= 100000000) {
    n = (n / 100000000).toFixed(1);
    return n + '亿';
  } else {
    return n;
  }
};
const formatDuration = n => {
  if (!n) {
    return '00:00';
  }

  let h = 0;
  let m = 0;
  let s = 0;

  if (typeof n === 'number') {
    if (n >= 3600) {
      h = n / 3600 | 0;
    }

    if (n - h * 3600 >= 60) {
      m = (n - h * 3600) / 60 | 0;
    }

    s = Math.max(n - h * 3600 - m * 60, 0);
  } else {
    const arr = n.split(':');
    s = arr.pop() || 0;
    m = arr.pop() || 0;
    h = arr.pop() || 0;
  }

  const result = h ? [pad(h), pad(m), pad(s)] : [pad(m), pad(s)];
  return result.join(':');
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@calibur/sakura/lib/v-field");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@calibur/sakura/lib/v-button");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@calibur/sakura/lib/v-form");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-mixin-store");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const parseCookie = cookieStr => {
  if (!cookieStr) {
    return '';
  }

  let token = '';
  cookieStr.split('; ').forEach(item => {
    if (item.startsWith('JWT-TOKEN=')) {
      token = item.split('JWT-TOKEN=')[1];
    }
  });
  return token;
};

/* harmony default export */ __webpack_exports__["a"] = (app => {
  let token = '';

  if (typeof window !== 'undefined') {
    if (window.__AUTH_TOKEN__) {
      return window.__AUTH_TOKEN__;
    }

    let pageData;

    try {
      pageData = JSON.parse(document.querySelector('script[data-name="page-data"]').textContent);
    } catch (e) {
      pageData = {
        authToken: ''
      };
    }

    token = pageData.authToken;

    if (!token) {
      token = parseCookie(document.cookie);
    }
  } else {
    token = parseCookie(app.context.req.headers.cookie);
  }

  if (!token && app) {
    token = app.context.query.token;
  }

  token = ~['undefined', 'null'].indexOf(token) ? '' : token;

  if (typeof window !== 'undefined') {
    window.__AUTH_TOKEN__ = token;
  }

  return token;
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tag");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/form-item");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/form");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/col");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/row");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@calibur/sakura/lib/v-img");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export showTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createTag; });
/* unused harmony export updateTag */
/* unused harmony export relinkTag */
/* unused harmony export deleteTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bookmarkTags; });
/* unused harmony export tagChildren */
const showTag = (ctx, {
  slug
}) => ctx.$axios.$get('v1/tag/show', {
  params: {
    slug
  }
});
const createTag = (ctx, {
  name,
  parent_slug
}) => ctx.$axios.$post('v1/tag/create', {
  name,
  parent_slug
});
const updateTag = (ctx, {
  name,
  slug,
  avatar,
  alias,
  intro
}) => ctx.$axios.$post('v1/tag/update', {
  name,
  slug,
  avatar,
  alias,
  intro
});
const relinkTag = (ctx, {
  slug,
  target_slug
}) => ctx.$axios.$post('v1/tag/relink', {
  slug,
  target_slug
});
const deleteTag = (ctx, {
  slug
}) => ctx.$axios.$post('v1/tag/delete', {
  slug
});
const bookmarkTags = (ctx, {
  slug
}) => ctx.$axios.$get('v1/tag/bookmarks', {
  params: {
    slug
  }
});
const tagChildren = (ctx, {
  slug,
  page,
  take
}) => ctx.$axios.$get('v1/tag/children', {
  params: {
    slug,
    page,
    take
  }
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/500.b07f58f.jpeg";

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserMessage", function() { return getUserMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBangumiRelease", function() { return getBangumiRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMixinFlowData", function() { return getMixinFlowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotFlowData", function() { return getHotFlowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRelation", function() { return getUserRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserDrafts", function() { return getUserDrafts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserTimeline", function() { return getUserTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPinComments", function() { return getPinComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagFlows", function() { return getTagFlows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getATField", function() { return getATField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneQuestions", function() { return getZoneQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMixinSearch", function() { return getMixinSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeline", function() { return getTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlowRecommendedIndex", function() { return getFlowRecommendedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagHottest", function() { return tagHottest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBangumiQuestionTrials", function() { return getBangumiQuestionTrials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdolFans", function() { return getIdolFans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBangumiLiker", function() { return getBangumiLiker; });
const getUserMessage = ({
  $axios,
  channel,
  since_id,
  is_up,
  count
}) => {
  return $axios.$get('v1/message/history', {
    params: {
      channel,
      since_id,
      count,
      is_up
    }
  });
};
const getBangumiRelease = ({
  $axios
}) => $axios.$get('v1/bangumi/release');
const getMixinFlowData = ({
  $axios,
  slug,
  sort,
  page,
  take,
  rand_id
}) => $axios.$get('v1/flow/spider', {
  params: {
    slug,
    sort,
    page,
    take,
    rand_id
  }
});
const getHotFlowData = ({
  $axios,
  day
}) => $axios.$get('v1/flow/spider_hots', {
  params: {
    day
  }
});
const getUserRelation = ({
  $axios,
  seen_ids,
  slug,
  relation
}) => {
  return $axios.$get('v1/user/relation', {
    params: {
      seen_ids,
      slug,
      relation
    }
  });
};
const getUserDrafts = ({
  $axios,
  page,
  count
}) => {
  return $axios.$get('v1/pin/drafts', {
    params: {
      page,
      count
    }
  });
};
const getUserTimeline = ({
  $axios,
  page,
  count,
  slug
}) => {
  return $axios.$get('v1/user/timeline', {
    params: {
      page,
      count,
      slug
    }
  });
};
const getPinComments = ({
  $axios,
  sort,
  slug,
  count,
  last_id,
  seen_ids,
  mode,
  page
}) => {
  return $axios.$get('v1/comment/list', {
    params: {
      sort,
      slug,
      count,
      last_id,
      seen_ids,
      mode,
      page
    }
  });
};
const getTagFlows = ({
  $axios,
  slug,
  sort,
  time,
  take,
  seen_ids,
  last_id
}) => {
  const timeout = () => new Promise(resolve => setTimeout(resolve, 400));

  const request = () => $axios.$get('v1/flow/pins', {
    params: {
      slug,
      sort,
      time,
      take,
      is_up: 0,
      spec_id: sort === 'newest' ? last_id : seen_ids
    }
  });

  return new Promise((resolve, reject) => {
    Promise.all([request(), timeout()]).then(data => {
      resolve(data[0]);
    }).catch(reject);
  });
};
const getATField = ({
  $axios,
  page,
  count,
  sort,
  slug
}) => {
  const timeout = () => new Promise(resolve => setTimeout(resolve, 400));

  const request = () => $axios.$get('v1/atfield/flow', {
    params: {
      page,
      count,
      sort,
      slug
    }
  });

  return new Promise((resolve, reject) => {
    Promise.all([request(), timeout()]).then(data => {
      resolve(data[0]);
    }).catch(reject);
  });
};
const getZoneQuestions = ({
  $axios,
  slug
}) => {
  return $axios.$get('v1/atfield/list', {
    params: {
      slug
    }
  });
};
const getMixinSearch = ({
  $axios,
  page,
  type,
  q
}) => {
  return $axios.$get('v1/search/mixin', {
    params: {
      page,
      type,
      q
    }
  });
};
const getTimeline = ({
  $axios,
  type,
  slug
}) => {
  return $axios.$get(`v1/${type}/timeline`, {
    params: {
      slug
    }
  });
};
const getFlowRecommendedIndex = ({
  $axios,
  seen_ids
}) => {
  return $axios.$get('v1/flow/index', {
    params: {
      seen_ids
    }
  });
};
const tagHottest = ({
  $axios,
  page,
  take
}) => $axios.$get('v1/tag/hottest', {
  params: {
    page,
    take
  }
});
const getBangumiQuestionTrials = ({
  $axios,
  page,
  take,
  bangumi_slug,
  user_slug,
  status,
  sort
}) => {
  return $axios.$get('v1/join/flow', {
    params: {
      page,
      take,
      bangumi_slug,
      user_slug,
      status,
      sort
    }
  });
};
const getIdolFans = ({
  $axios,
  page,
  take,
  slug,
  sort
}) => {
  return $axios.$get('v1/idol/fans', {
    params: {
      page,
      take,
      slug,
      sort
    }
  });
};
const getBangumiLiker = ({
  $axios,
  page,
  take,
  slug
}) => {
  return $axios.$get('v1/bangumi/liker', {
    params: {
      page,
      take,
      slug
    }
  });
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@calibur/sakura/lib/v-radio");

/***/ }),
/* 41 */
/***/ (function(module, exports) {



/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@calibur/sakura/lib/v-lazyload");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/503.d465ab1.jpeg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/404.adea640.jpeg";

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignInForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignInForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignInForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignInForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignInForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignInForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var vue_mixin_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vue_mixin_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_mixin_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_flowApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);


const flow = vue_mixin_store__WEBPACK_IMPORTED_MODULE_0___default.a.FlowStore(_api_flowApi__WEBPACK_IMPORTED_MODULE_1__);
const state = flow.state;
const mutations = flow.mutations;
const actions = flow.actions;
const getters = flow.getters;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _api_tagApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);

const state = () => ({
  myTagsFetched: false,
  myTags: [{
    name: '动漫',
    slug: 'bangumi',
    children: []
  }, {
    name: '游戏',
    slug: 'game',
    children: []
  }, {
    name: '话题',
    slug: 'topic',
    children: []
  }, {
    name: '专栏',
    slug: 'notebook',
    children: []
  }],
  hottest_tags: [],
  tags: []
});
const mutations = {
  SET_MY_TAGS_STATE(state) {
    state.myTagsFetched = true;
  },

  SET_HOTTEST_TAGS(state, tags) {
    state.hottest_tags = tags.result;
  },

  SET_MY_TAGS(state, data) {
    Object.keys(data).forEach(type => {
      state.myTags.forEach(item => {
        if (item.slug === type) {
          item.children = data[type];
        }
      });
    });
  }

};
const actions = {
  async getMyTags({
    rootState,
    state,
    commit
  }) {
    if (state.myTagsFetched || !rootState.isAuth) {
      return;
    }

    commit('SET_MY_TAGS_STATE');
    const data = await Object(_api_tagApi__WEBPACK_IMPORTED_MODULE_0__[/* bookmarkTags */ "a"])(this, {
      slug: rootState.user.slug
    });
    commit('SET_MY_TAGS', data);
  },

  getHottestTags({
    state,
    commit
  }) {
    if (state.hottest_tags.length) {
      return;
    }

    return this.$axios.$get('v1/tag/hottest').then(tags => {
      commit('SET_HOTTEST_TAGS', tags);
    }).catch(() => {});
  }

};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_toggleApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _api_toggleApi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_toggleApi__WEBPACK_IMPORTED_MODULE_1__);


const state = () => ({});

const generateField = (type, slug) => `${type}-${slug}`;

const mutations = {
  set(state, {
    type,
    data,
    slug
  } = {}) {
    let isSingle = false;
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'object') {
        const subData = data[key];
        Object.keys(subData).forEach(subKey => {
          subData[`${subKey}_loading`] = false;
        });
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, `${type}-${key}`, subData);
      } else {
        isSingle = true;
        data[`${key}_loading`] = false;
      }
    });

    if (isSingle) {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, `${type}-${slug}`, data);
    }
  },

  PUSH_USERS(state, {
    type,
    slug,
    key,
    data
  }) {
    const namespace = generateField(type, slug);
    const prefix = `${key}_users`;
    const oldList = state[namespace][prefix].list;
    const newIds = data.list.map(_ => _.slug);
    state[namespace][prefix].list = oldList.filter(_ => !newIds.includes(_.slug)).concat(data.list);
    state[namespace][prefix].total = data.total;
    state[namespace][prefix].no_more = data.no_more;
    state[namespace][prefix].loading = false;
  },

  SET_STATE(state, {
    type,
    slug,
    key,
    result,
    user
  }) {
    if (result === 0) {
      return;
    }

    const namespace = generateField(type, slug);
    const prefix = `${key}_users`;
    state[namespace][key] = result > 0;
    state[namespace][`${key}_loading`] = false;

    if (!state[namespace][prefix]) {
      return;
    }

    if (result > 0) {
      state[namespace][prefix].total++;
      state[namespace][prefix].no_more = false;
      state[namespace][prefix].list.unshift(user);
    } else {
      state[namespace][prefix].total--;
      state[namespace][prefix].list.forEach((item, index) => {
        if (item.slug === user.slug) {
          state[namespace][prefix].list.splice(index, 1);
        }
      });
    }
  },

  SET_STATUS(state, {
    type,
    slug,
    key,
    value
  }) {
    state[generateField(type, slug)][`${key}_users`][value] = true;
  },

  SET_LOADING(state, {
    type,
    slug,
    action,
    result
  }) {
    state[generateField(type, slug)][`${action}_loading`] = result;
  }

};
const actions = {
  async users({
    state,
    commit
  }, {
    type,
    slug,
    key
  }) {
    const store = state[generateField(type, slug)][`${key}_users`];

    if (store.loading || store.no_more) {
      return;
    }

    commit('SET_STATUS', {
      type,
      key,
      slug,
      value: 'loading'
    });

    try {
      const listObj = await _api_toggleApi__WEBPACK_IMPORTED_MODULE_1__["users"]({
        ctx: this,
        type: key,
        slug,
        last_slug: store.list.length ? store.list[store.list.length - 1].slug : 0,
        model: type,
        take: 15
      });
      commit('PUSH_USERS', {
        type,
        slug,
        key,
        data: listObj
      });
    } catch (e) {
      commit('SET_STATUS', {
        type,
        key,
        slug,
        value: 'error'
      });
    }
  },

  async toggle({
    state,
    commit,
    rootState
  }, {
    type,
    slug,
    action,
    params
  }) {
    const store = state[generateField(type, slug)];

    if (store[`${action}_loading`]) {
      return;
    }

    commit('SET_LOADING', {
      action,
      type,
      slug,
      result: true
    });

    try {
      const result = await this.$axios.$post('v1/social/toggle', params);
      const {
        user
      } = rootState;
      commit('SET_STATE', {
        type,
        key: action,
        slug,
        result,
        user: {
          slug: user.slug,
          nickname: user.nickname,
          avatar: user.avatar,
          created_at: parseInt(Date.now() / 1000)
        }
      });
      return {
        success: true,
        result
      };
    } catch (e) {
      commit('SET_LOADING', {
        action,
        type,
        slug,
        result: false
      });
      return {
        success: false
      };
    }
  }

};
const getters = {
  get: state => (type, slug) => {
    return state[generateField(type, slug)];
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_v_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_v_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_v_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_v_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_v_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_v_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(37);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(38);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "API_URL": "http://localhost/",
        "API_URL_BROWSER": "https://api.calibur.tv/",
        "TAGS": {
          "newbie": "ugf6",
          "notebook": "uh4f",
          "bangumi": "2he",
          "topic": "3p6",
          "game": "285"
        },
        "INJECT": {
          "tags": {
            "newbie": "ugf6",
            "notebook": "uh4f",
            "bangumi": "2he",
            "topic": "3p6",
            "game": "285"
          },
          "author": "冰淤",
          "description": "咔哩吧是一个二次元社区",
          "keywords": "C站,calibur,咔哩吧,ACG,二次元,垂直社区,兴趣社交",
          "title": "calibur - 天下漫友是一家",
          "name": "calibur",
          "baiduStat": "var _hmt=_hmt||[];(function(){var hm=document.createElement(\"script\");hm.src=\"https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();",
          "baiduPush": "(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();"
        },
        "SOCKET_HOST": "wss://api.calibur.tv/ws"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
};
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(39);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(25);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(18);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(9);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _6b8c1ac3 = () => interopDefault(__webpack_require__.e(/* import() | pages/write/index */ 24).then(__webpack_require__.bind(null, 282)));

const _8e1e0840 = () => interopDefault(__webpack_require__.e(/* import() | pages/about/donate */ 1).then(__webpack_require__.bind(null, 284)));

const _7a3ab5f1 = () => interopDefault(__webpack_require__.e(/* import() | pages/pin/_slug */ 3).then(__webpack_require__.bind(null, 279)));

const _25f85796 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug */ 4).then(__webpack_require__.bind(null, 283)));

const _a7781f72 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/draft */ 5).then(__webpack_require__.bind(null, 285)));

const _8166bf78 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/emotion/index */ 11).then(__webpack_require__.bind(null, 286)));

const _b4942fa6 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/message */ 12).then(__webpack_require__.bind(null, 280)));

const _5b10ac14 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/setting */ 13).then(__webpack_require__.bind(null, 287)));

const _7943400e = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/setting/index */ 15).then(__webpack_require__.bind(null, 288)));

const _e38e0556 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/setting/basic */ 14).then(__webpack_require__.bind(null, 289)));

const _822f9438 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/setting/oauth2 */ 16).then(__webpack_require__.bind(null, 290)));

const _1186034e = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/setting/spider */ 17).then(__webpack_require__.bind(null, 291)));

const _7de73e92 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/social */ 18).then(__webpack_require__.bind(null, 292)));

const _02a541fa = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/social/index */ 22).then(__webpack_require__.bind(null, 293)));

const _3c715bbd = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/social/followers */ 19).then(__webpack_require__.bind(null, 294)));

const _088dcc39 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/social/following */ 20).then(__webpack_require__.bind(null, 295)));

const _3107a53d = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/social/friends */ 21).then(__webpack_require__.bind(null, 296)));

const _908be1ea = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/timeline */ 23).then(__webpack_require__.bind(null, 281)));

const _82a58708 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/emotion/category */ 6).then(__webpack_require__.bind(null, 297)));

const _47f317f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/emotion/category/bangumi */ 7).then(__webpack_require__.bind(null, 298)));

const _0b341b55 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/emotion/category/game */ 8).then(__webpack_require__.bind(null, 299)));

const _785b773e = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/emotion/category/notebook */ 9).then(__webpack_require__.bind(null, 300)));

const _3969a3dc = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_slug/emotion/category/topic */ 10).then(__webpack_require__.bind(null, 301)));

const _5276389a = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 278))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/write",
    component: _6b8c1ac3,
    props: false,
    name: "write"
  }, {
    path: "/about/donate",
    component: _8e1e0840,
    props: false,
    name: "about-donate"
  }, {
    path: "/pin/:slug?",
    component: _7a3ab5f1,
    props: true,
    name: "pin-slug"
  }, {
    path: "/user/:slug?",
    component: _25f85796,
    props: true,
    name: "user-slug",
    children: [{
      path: "draft",
      component: _a7781f72,
      props: true,
      name: "user-slug-draft"
    }, {
      path: "emotion",
      component: _8166bf78,
      props: true,
      name: "user-slug-emotion"
    }, {
      path: "message",
      component: _b4942fa6,
      props: true,
      name: "user-slug-message"
    }, {
      path: "setting",
      component: _5b10ac14,
      props: true,
      children: [{
        path: "",
        component: _7943400e,
        name: "user-slug-setting"
      }, {
        path: "basic",
        component: _e38e0556,
        name: "user-slug-setting-basic"
      }, {
        path: "oauth2",
        component: _822f9438,
        name: "user-slug-setting-oauth2"
      }, {
        path: "spider",
        component: _1186034e,
        name: "user-slug-setting-spider"
      }]
    }, {
      path: "social",
      component: _7de73e92,
      props: true,
      children: [{
        path: "",
        component: _02a541fa,
        name: "user-slug-social"
      }, {
        path: "followers",
        component: _3c715bbd,
        name: "user-slug-social-followers"
      }, {
        path: "following",
        component: _088dcc39,
        name: "user-slug-social-following"
      }, {
        path: "friends",
        component: _3107a53d,
        name: "user-slug-social-friends"
      }]
    }, {
      path: "timeline",
      component: _908be1ea,
      props: true,
      name: "user-slug-timeline"
    }, {
      path: "emotion/category",
      component: _82a58708,
      props: true,
      name: "user-slug-emotion-category",
      children: [{
        path: "bangumi",
        component: _47f317f4,
        name: "user-slug-emotion-category-bangumi"
      }, {
        path: "game",
        component: _0b341b55,
        name: "user-slug-emotion-category-game"
      }, {
        path: "notebook",
        component: _785b773e,
        name: "user-slug-emotion-category-notebook"
      }, {
        path: "topic",
        component: _3969a3dc,
        name: "user-slug-emotion-category-topic"
      }]
    }]
  }, {
    path: "/",
    component: _5276389a,
    props: false,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=615bb0c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"error-page"}},[_vm._ssrNode("<div class=\"error-main\">","</div>",[(_vm.statusCode === 401)?_vm._ssrNode("<div id=\"error-401\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt=\"error-401\"> <h3>"+_vm._ssrEscape(_vm._s(_vm.message || '请登录后重新访问'))+"</h3> <button class=\"back\">\n        登录\n      </button>")],2):(_vm.statusCode === 403)?_vm._ssrNode(("<div id=\"error-403\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"error-403\"> <h3>"+_vm._ssrEscape(_vm._s(_vm.message || '您没有权限访问该页面'))+"</h3> <a href=\"/\" class=\"back\">回到首页</a></div>")):(_vm.statusCode === 404)?_vm._ssrNode("<div id=\"error-404\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt=\"error-404\"> <h3>您要找的页面不存在</h3> <div class=\"subtitle\">\n        不存在的内容，或者正在审核中。\n      </div> "),_c('NLink',{staticClass:"back",attrs:{"to":"/"}},[_vm._v("\n        返回首页\n      ")])],2):(_vm.statusCode >= 500)?_vm._ssrNode("<div id=\"error-500\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"error-500\"> <h3>服务器出错了</h3> <div class=\"subtitle\">\n        服务器出了点问题，工程师正在加紧抢修ヽ( ° ▽°)ノ\n      </div> "),_c('NLink',{staticClass:"back",attrs:{"to":"/"}},[_vm._v("\n        返回首页\n      ")])],2):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=615bb0c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      if (this.message === '继续操作前请先登录') {
        return 401;
      }

      if (this.message === '请在APP内打开该页面') {
        return 403;
      }

      return this.error && this.error.statusCode || 404;
    },

    message() {
      return this.error && this.error.message;
    }

  },

  mounted() {
    if (this.statusCode === 401) {
      window.location = this.$alias.sign();
    }
  },

  methods: {
    handleLogin() {
      this.$channel.$emit('sign-in');
    },

    toastMessage() {// this.$toast.error(this.message)
    }

  },

  head() {
    return {
      title: '出错了'
    };
  }

});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5eafafce"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "06d04ef8"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(49);

// EXTERNAL MODULE: ./assets/css/global.scss
var css_global = __webpack_require__(50);

// EXTERNAL MODULE: ./theme/index.css
var theme = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=bf3baec6&
var defaultvue_type_template_id_bf3baec6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"layout-web"}},[_vm._ssrNode("<span>","</span>",[_c('nuxt')],1),_vm._ssrNode(" "),_c('SignDialog')],2)}
var defaultvue_type_template_id_bf3baec6_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=bf3baec6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SignDialog.vue?vue&type=template&id=75f2c4a9&
var SignDialogvue_type_template_id_75f2c4a9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.canRender)?_c('div',{staticClass:"sign-container"},[(_vm.isGuest)?_vm._ssrNode("<div id=\"space3D\""+(_vm._ssrClass(null,[_vm.showModal ? 'space-enter' : 'space-leave']))+">","</div>",[_vm._ssrNode("<div class=\"sign-modal-wrap\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("sign-modal sign-in-modal",{
          'sign-in-init': !_vm.showSignIn && !_vm.showSignUp,
          'sign-in-show': _vm.showSignIn && !_vm.showSignUp,
          'sign-in-turn': !_vm.showSignIn && _vm.showSignUp,
        }))+">","</div>",[_vm._ssrNode("<div class=\"sign-logo\"></div> "),_c('ResetPasswordForm',{directives:[{name:"show",rawName:"v-show",value:(_vm.showReset),expression:"showReset"}],on:{"to-login":function($event){_vm.showReset = false},"to-register":_vm.showRegister}}),_vm._ssrNode(" "),_c('SignInForm',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showReset),expression:"!showReset"}],on:{"to-reset":function($event){_vm.showReset = true},"to-register":_vm.showRegister}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("sign-modal sign-up-modal",{
          'sign-up-init': !_vm.showSignUp && !_vm.showSignIn,
          'sign-up-show': _vm.showSignUp && !_vm.showSignIn,
          'sign-up-turn': !_vm.showSignUp && _vm.showSignIn,
        }))+">","</div>",[_vm._ssrNode("<div class=\"sign-logo\"></div> "),_c('SignUpForm',{on:{"to-login":_vm.showLogin}})],2)],2)]):_vm._e()]):_vm._e()}
var SignDialogvue_type_template_id_75f2c4a9_staticRenderFns = []


// CONCATENATED MODULE: ./components/SignDialog.vue?vue&type=template&id=75f2c4a9&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/form/SignInForm.vue?vue&type=template&id=650f8aec&
var SignInFormvue_type_template_id_650f8aec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sign-in-form"},[_c('VForm',{attrs:{"loading":_vm.loading,"form":_vm.form,"rule":_vm.rule,"error":false},on:{"submit":_vm.login}},[_c('VField',{attrs:{"type":"text","placeholder":"手机（填写常用手机号，用于登录）"},model:{value:(_vm.form.access),callback:function ($$v) {_vm.$set(_vm.form, "access", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.access"}}),_vm._v(" "),_c('VField',{attrs:{"type":"password","show-password":"","placeholder":"密码（6-16个字符组成，区分大小写）"},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.submitForm($event)}},model:{value:(_vm.form.secret),callback:function ($$v) {_vm.$set(_vm.form, "secret", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.secret"}}),_vm._v(" "),_c('div',{staticClass:"opt-container"},[_c('VRadio',{attrs:{"size":"small","label":"记住我"},model:{value:(_vm.form.remember),callback:function ($$v) {_vm.$set(_vm.form, "remember", $$v)},expression:"form.remember"}}),_vm._v(" "),(_vm.showOAuth)?_c('ul',{staticClass:"provider"},[_c('li',{on:{"click":_vm.authQQ}},[_c('i',{staticClass:"iconfont ic-qq"})]),_vm._v(" "),_c('li',{on:{"click":_vm.authWechat}},[_c('i',{staticClass:"iconfont ic-v-chat"})])]):_c('button',{attrs:{"type":"button"},on:{"click":function($event){_vm.showOAuth = true}}},[_vm._v("\n        社交账号登录\n      ")])],1),_vm._v(" "),_c('VButton',{attrs:{"slot":"submit","loading":_vm.loading,"size":"large","block":"","round":""},slot:"submit"},[_vm._v("\n      登录\n    ")])],1),_vm._ssrNode(" <div class=\"others\"><a>忘记密码?&gt;</a> <a>点击注册»</a></div>")],2)}
var SignInFormvue_type_template_id_650f8aec_staticRenderFns = []


// CONCATENATED MODULE: ./components/form/SignInForm.vue?vue&type=template&id=650f8aec&

// EXTERNAL MODULE: ./node_modules/@calibur/sakura/lib/theme-sakura/v-radio.css
var v_radio = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/@calibur/sakura/lib/theme-sakura/base.css
var base = __webpack_require__(3);

// EXTERNAL MODULE: external "@calibur/sakura/lib/v-radio"
var v_radio_ = __webpack_require__(40);
var lib_v_radio_default = /*#__PURE__*/__webpack_require__.n(v_radio_);

// EXTERNAL MODULE: ./node_modules/@calibur/sakura/lib/theme-sakura/v-field.css
var v_field = __webpack_require__(20);

// EXTERNAL MODULE: external "@calibur/sakura/lib/v-field"
var v_field_ = __webpack_require__(5);
var lib_v_field_default = /*#__PURE__*/__webpack_require__.n(v_field_);

// EXTERNAL MODULE: ./node_modules/@calibur/sakura/lib/theme-sakura/v-button.css
var v_button = __webpack_require__(21);

// EXTERNAL MODULE: external "@calibur/sakura/lib/v-button"
var v_button_ = __webpack_require__(6);
var lib_v_button_default = /*#__PURE__*/__webpack_require__.n(v_button_);

// EXTERNAL MODULE: ./node_modules/@calibur/sakura/lib/theme-sakura/v-form.css
var v_form = __webpack_require__(22);

// EXTERNAL MODULE: external "@calibur/sakura/lib/v-form"
var v_form_ = __webpack_require__(7);
var lib_v_form_default = /*#__PURE__*/__webpack_require__.n(v_form_);

// EXTERNAL MODULE: ./api/userApi.js
var userApi = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/SignInForm.vue?vue&type=script&lang=js&












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SignInFormvue_type_script_lang_js_ = ({
  name: 'SignInForm',
  components: {
    VForm: lib_v_form_default.a,
    VButton: lib_v_button_default.a,
    VField: lib_v_field_default.a,
    VRadio: lib_v_radio_default.a
  },

  data() {
    const validateAccess = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写手机号'));
      }

      if (value.length !== 11) {
        return callback(new Error('请填写11位手机号'));
      }

      callback();
    };

    const validateSecret = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请填写登录密码'));
      }

      if (value.length < 6) {
        return callback(new Error('密码不能小于6位'));
      }

      if (value.length > 16) {
        return callback(new Error('密码不能大于16位'));
      }

      callback();
    };

    return {
      form: {
        access: '',
        secret: '',
        remember: true
      },
      rule: {
        access: {
          validator: validateAccess
        },
        secret: {
          validator: validateSecret
        }
      },
      loading: false,
      showOAuth: true
    };
  },

  methods: {
    authQQ() {
      window.location.href = 'https://api.calibur.tv/callback/oauth2/qq?from=sign';
    },

    authWechat() {
      window.location.href = 'https://api.calibur.tv/callback/oauth2/wechat?from=sign';
    },

    redirect() {
      return this.$route.query.redirect ? this.$route.query.redirect : encodeURIComponent(window.location.href);
    },

    login() {
      if (this.loading) {
        return;
      }

      this.loading = true;
      Object(userApi["e" /* login */])(this, {
        access: this.form.access,
        secret: this.form.secret,
        remember: this.form.remember
      }).then(token => {
        this.$cookie.set('JWT-TOKEN', token, {
          expires: this.form.remember ? 365 : 1
        });

        if (this.$route.query.redirect) {
          window.location = decodeURIComponent(this.$route.query.redirect);
        } else {
          window.location.reload();
        }
      }).catch(err => {
        this.$toast.error(err.message);
        this.loading = false;
      });
    },

    showReset() {
      this.$emit('to-reset');
    },

    showRegister() {
      this.$emit('to-register');
    }

  }
});
// CONCATENATED MODULE: ./components/form/SignInForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_SignInFormvue_type_script_lang_js_ = (SignInFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/form/SignInForm.vue



function SignInForm_injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SignInForm_component = Object(componentNormalizer["a" /* default */])(
  form_SignInFormvue_type_script_lang_js_,
  SignInFormvue_type_template_id_650f8aec_render,
  SignInFormvue_type_template_id_650f8aec_staticRenderFns,
  false,
  SignInForm_injectStyles,
  null,
  "224ccb1e"
  
)

/* harmony default export */ var SignInForm = (SignInForm_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/form/SignUpForm.vue?vue&type=template&id=58932e2e&
var SignUpFormvue_type_template_id_58932e2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sign-up-form"},[_c('VForm',{attrs:{"loading":_vm.submitBtnLoading,"form":_vm.form,"rule":_vm.rule,"error":false},on:{"submit":_vm.submitForm}},[_c('VField',{attrs:{"type":"text","placeholder":"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:(_vm.form.access),callback:function ($$v) {_vm.$set(_vm.form, "access", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.access"}}),_vm._v(" "),_c('VField',{attrs:{"type":"password","show-password":"","placeholder":"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:(_vm.form.secret),callback:function ($$v) {_vm.$set(_vm.form, "secret", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.secret"}}),_vm._v(" "),(!_vm.inviteCode)?_c('VField',{attrs:{"placeholder":"邀请码（可为空）","auto-complete":"off"},model:{value:(_vm.form.inviteCode),callback:function ($$v) {_vm.$set(_vm.form, "inviteCode", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.inviteCode"}}):_vm._e(),_vm._v(" "),_c('VButton',{attrs:{"slot":"submit","loading":_vm.submitBtnLoading,"disabled":_vm.submitBtnDisabled,"size":"large","block":"","round":""},slot:"submit"},[_vm._v("\n      "+_vm._s(_vm.submitBtnText)+"\n      "),(_vm.timeout)?[_vm._v("\n        （"+_vm._s(_vm.timeout)+"s 后可重新获取）\n      ")]:_vm._e()],2)],1),_vm._ssrNode(" <div class=\"others\"><ul class=\"provider\"><span>社交账号注册</span> <li><i class=\"iconfont ic-qq\"></i></li> <li><i class=\"iconfont ic-v-chat\"></i></li></ul> "+((!_vm.inviteCode)?("<a>已有账号»</a>"):"<!---->")+"</div>")],2)}
var SignUpFormvue_type_template_id_58932e2e_staticRenderFns = []


// CONCATENATED MODULE: ./components/form/SignUpForm.vue?vue&type=template&id=58932e2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/SignUpForm.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SignUpFormvue_type_script_lang_js_ = ({
  name: 'SignUpForm',
  components: {
    VForm: lib_v_form_default.a,
    VButton: lib_v_button_default.a,
    VField: lib_v_field_default.a
  },
  props: {
    inviteCode: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    const validateAccess = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写手机号'));
      }

      if (value.length !== 11) {
        return callback(new Error('请填写11位手机号'));
      }

      if (!/^(0|86|17951)?(1)[0-9]{10}$/.test(value)) {
        return callback(new Error('错误的手机号格式'));
      }

      callback();
    };

    const validateSecret = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请填写登录密码'));
      }

      if (value.length < 6) {
        return callback(new Error('密码不能小于6位'));
      }

      if (value.length > 16) {
        return callback(new Error('密码不能大于16位'));
      }

      callback();
    };

    return {
      form: {
        access: '',
        secret: '',
        authCode: '',
        inviteCode: this.inviteCode
      },
      rule: {
        access: {
          validator: validateAccess
        },
        secret: {
          validator: validateSecret
        }
      },

      /**
       * 0：初始化，表单待校验
       * ---- 如果表单校验失败，就一直在 0
       * 1：表单校验成功，获取手机短信中...
       * ---- 需要 loading
       * ---- 发送手机验证码需要 geetest 认证
       * ---- 如果 geetest 认证通过就请求发短信的接口
       * ---- 如果 geetest 认证不通过或者加载失败，就会返回到 step 0
       * ---- 请求发短信的接口如果失败，就会返回到 step 0
       * ---- 请求发短信的接口如果成功，就会到 step 2
       * ---- 30s 后会返回到 step 0，可以重新发短信
       * 2：获取手机验证码成功，用户填写短信验证码
       * ---- 如果用户填写的正确，就进入注册流程
       * ---- 如果用户填写的失败或关闭填写框，就提示错误，继续在 step 2
       * ---- 30s 后就会返回 step 0，用户可以重新发短信
       * 3：注册中...
       * ---- 需要 loading 和 disabled
       * ---- 注册成功，需要刷新页面
       * ---- 注册失败，可能是在 step 2 停留太久，短信验证码过期
       * ---- 注册失败，可能是服务器挂了
       * ---- 注册失败，可能是 unique 的信息被他人使用了
       * ---- 无论如何，注册失败都返回 step 0
       */
      step: 0,
      timeout: 0
    };
  },

  computed: {
    submitBtnText() {
      if (this.step === 0) {
        return '注册';
      } else if (this.step === 1) {
        return '提交中...';
      } else if (this.step === 2) {
        return '短信已发送';
      } else if (this.step === 3) {
        return '注册中...';
      }

      return '注册';
    },

    submitBtnLoading() {
      return this.step === 1 || this.step === 3;
    },

    submitBtnDisabled() {
      return this.timeout !== 0 && this.step === 0 || this.step === 3;
    },

    query() {
      return this.$route.query;
    },

    paramsIsOK() {
      return !!(this.query.uid && /^\d+$/.test(this.query.uid) && this.query.time && /^\d+$/.test(this.query.time) && Date.now() <= this.query.time * 1000 && this.query.key === this.$md5(`${this.query.uid}-the-world-${this.query.time}`));
    }

  },
  methods: {
    addInviteForLink(url) {
      let result = url;

      if (this.paramsIsOK) {
        result = `${result}&invite=${this.query.uid}`;
      } else if (this.$route.name === 'about-invite-id') {
        result = `${result}&invite=${this.$route.params.id}`;
      }

      return result;
    },

    qqRegisterLink() {
      window.location.href = `${this.addInviteForLink('https://api.calibur.tv/callback/oauth2/qq?from=sign')}}`;
    },

    wechatRegisterLink() {
      window.location.href = `${this.addInviteForLink('https://api.calibur.tv/callback/oauth2/wechat?from=sign')}}`;
    },

    redirect() {
      return this.$route.query.redirect ? this.$route.query.redirect : encodeURIComponent(window.location.href);
    },

    submitForm() {
      if (this.step === 0) {
        this.getRegisterAuthCode();
      }

      if (this.step === 2) {
        this.openConfirmModal();
      }
    },

    async getRegisterAuthCode() {
      this.step = 1;

      try {
        await Object(userApi["i" /* sendMessage */])(this, {
          type: 'sign_up',
          phone_number: this.form.access
        });
        this.step = 2;
        this.openConfirmModal();
      } catch (err) {
        this.$toast.error(err.message);
        this.step = 0;
      } finally {
        this.timeout = 60;
        const timer = setInterval(() => {
          if (! --this.timeout) {
            this.step = 0;
            clearInterval(timer);
          }
        }, 1000);
      }
    },

    openConfirmModal() {
      this.$prompt('请输入收到的验证码', '短信已发送', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d{6}$/,
        inputErrorMessage: '验证码格式不正确'
      }).then(({
        value
      }) => {
        this.form.authCode = value;
        this.step = 3;
        this.signUp();
      }).catch(() => {});
    },

    signUp() {
      Object(userApi["g" /* register */])(this, {
        access: this.form.access,
        secret: this.form.secret,
        authCode: this.form.authCode,
        inviteCode: this.form.inviteCode
      }).then(token => {
        this.$cookie.set('JWT-TOKEN', token);
        this.$toast.success('注册成功！').then(() => {
          if (this.$route.query.redirect) {
            window.location = decodeURIComponent(this.$route.query.redirect);
          } else {
            window.location.reload();
          }
        });
      }).catch(err => {
        this.step = 0;
        this.$toast.error(err.message);
      });
    },

    showLogin() {
      this.$emit('to-login');
    }

  }
});
// CONCATENATED MODULE: ./components/form/SignUpForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_SignUpFormvue_type_script_lang_js_ = (SignUpFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/form/SignUpForm.vue



function SignUpForm_injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SignUpForm_component = Object(componentNormalizer["a" /* default */])(
  form_SignUpFormvue_type_script_lang_js_,
  SignUpFormvue_type_template_id_58932e2e_render,
  SignUpFormvue_type_template_id_58932e2e_staticRenderFns,
  false,
  SignUpForm_injectStyles,
  null,
  "ea587432"
  
)

/* harmony default export */ var SignUpForm = (SignUpForm_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/form/ResetPasswordForm.vue?vue&type=template&id=3ffa5ab2&
var ResetPasswordFormvue_type_template_id_3ffa5ab2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"reset-password-form"},[_c('VForm',{attrs:{"loading":_vm.submitBtnLoading,"form":_vm.form,"rule":_vm.rule},on:{"submit":_vm.submitForm}},[_c('VField',{attrs:{"type":"text","placeholder":"手机号","auto-complete":"off"},model:{value:(_vm.form.access),callback:function ($$v) {_vm.$set(_vm.form, "access", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.access"}}),_vm._v(" "),_c('VField',{attrs:{"type":"text","placeholder":"新密码","auto-complete":"off"},model:{value:(_vm.form.secret),callback:function ($$v) {_vm.$set(_vm.form, "secret", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.secret"}}),_vm._v(" "),_c('VButton',{attrs:{"slot":"submit","loading":_vm.submitBtnLoading,"disabled":_vm.submitBtnDisabled,"size":"large","block":"","round":""},slot:"submit"},[_vm._v("\n      "+_vm._s(_vm.submitBtnText)+"\n      "),(_vm.timeout)?[_vm._v("\n        （"+_vm._s(_vm.timeout)+"s 后可重新获取）\n      ")]:_vm._e()],2)],1),_vm._ssrNode(" <div class=\"others\"><a>返回登录&gt;</a> <a>点击注册»</a></div>")],2)}
var ResetPasswordFormvue_type_template_id_3ffa5ab2_staticRenderFns = []


// CONCATENATED MODULE: ./components/form/ResetPasswordForm.vue?vue&type=template&id=3ffa5ab2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/ResetPasswordForm.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ResetPasswordFormvue_type_script_lang_js_ = ({
  name: 'ResetPasswordForm',
  components: {
    VForm: lib_v_form_default.a,
    VButton: lib_v_button_default.a,
    VField: lib_v_field_default.a
  },

  data() {
    const validateAccess = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写手机号'));
      }

      if (value.length !== 11) {
        return callback(new Error('请填写11位手机号'));
      }

      callback();
    };

    const validateSecret = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请填写登录密码'));
      }

      if (value.length < 6) {
        return callback(new Error('密码不能小于6位'));
      }

      if (value.length > 16) {
        return callback(new Error('密码不能大于16位'));
      }

      callback();
    };

    return {
      form: {
        access: '',
        secret: '',
        authCode: ''
      },
      rule: {
        access: [{
          validator: validateAccess,
          trigger: 'blur'
        }],
        secret: [{
          validator: validateSecret,
          trigger: 'blur'
        }]
      },
      step: 0,
      timeout: 0
    };
  },

  computed: {
    submitBtnText() {
      if (this.step === 0) {
        return '立即重置';
      } else if (this.step === 1) {
        return '提交中...';
      } else if (this.step === 2) {
        return '短信已发送';
      } else if (this.step === 3) {
        return '已重置';
      }

      return '立即重置';
    },

    submitBtnLoading() {
      return this.step === 1 || this.step === 3;
    },

    submitBtnDisabled() {
      return this.timeout !== 0 && this.step === 0 || this.step === 3;
    }

  },
  methods: {
    submitForm() {
      if (this.step === 0) {
        this.getResetAuthCode();
      }

      if (this.step === 2) {
        this.openConfirmModal();
      }
    },

    async getResetAuthCode() {
      this.step = 1;

      try {
        await Object(userApi["i" /* sendMessage */])(this, {
          type: 'forgot_password',
          phone_number: this.form.access
        });
        this.step = 2;
        this.openConfirmModal();
      } catch (err) {
        this.$toast.error(err.message);
        this.step = 0;
      } finally {
        this.timeout = 60;
        const timer = setInterval(() => {
          if (! --this.timeout) {
            this.step = 0;
            clearInterval(timer);
          }
        }, 1000);
      }
    },

    openConfirmModal() {
      this.$prompt('请输入收到的验证码', '短信已发送', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d{6}$/,
        inputErrorMessage: '验证码格式不正确'
      }).then(({
        value
      }) => {
        this.form.authCode = value;
        this.step = 3;
        this.signReset();
      }).catch(() => {});
    },

    async signReset() {
      try {
        const res = await Object(userApi["h" /* resetPassword */])(this, {
          access: this.form.access,
          authCode: this.form.authCode,
          secret: this.form.secret
        });
        this.$toast.success(res);
        this.showLogin();
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.step = 0;
      }
    },

    showLogin() {
      this.$emit('to-login');
    },

    showRegister() {
      this.$emit('to-register');
    }

  }
});
// CONCATENATED MODULE: ./components/form/ResetPasswordForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_ResetPasswordFormvue_type_script_lang_js_ = (ResetPasswordFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/form/ResetPasswordForm.vue



function ResetPasswordForm_injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ResetPasswordForm_component = Object(componentNormalizer["a" /* default */])(
  form_ResetPasswordFormvue_type_script_lang_js_,
  ResetPasswordFormvue_type_template_id_3ffa5ab2_render,
  ResetPasswordFormvue_type_template_id_3ffa5ab2_staticRenderFns,
  false,
  ResetPasswordForm_injectStyles,
  null,
  "5d3315f3"
  
)

/* harmony default export */ var ResetPasswordForm = (ResetPasswordForm_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SignDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SignDialogvue_type_script_lang_js_ = ({
  name: 'SignDialog',
  components: {
    SignUpForm: SignUpForm,
    SignInForm: SignInForm,
    ResetPasswordForm: ResetPasswordForm
  },

  data() {
    return {
      canRender: false,
      showModal: false,
      showSignIn: false,
      showSignUp: false,
      showReset: false
    };
  },

  computed: {
    isGuest() {
      return !this.$store.state.isAuth;
    }

  },

  mounted() {
    this.canRender = true;
    this.$channel.$on('sign-in', () => {
      if (window.screen.width <= 768) {
        window.location.href = this.$alias.sign();
      } else {
        this.showLogin();
      }
    });
    this.$channel.$on('sign-up', () => {
      this.showRegister();
    });
  },

  methods: {
    showLogin() {
      this.showReset = false;
      this.showModal = true;
      this.showSignIn = true;
      this.showSignUp = false;
    },

    showRegister() {
      this.showModal = true;
      this.showSignUp = true;
      this.showSignIn = false;
    },

    hiddenSign() {
      this.showModal = false;
      this.showSignIn = false;
      this.showSignUp = false;
      this.showReset = false;
    }

  }
});
// CONCATENATED MODULE: ./components/SignDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SignDialogvue_type_script_lang_js_ = (SignDialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/SignDialog.vue



function SignDialog_injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SignDialog_component = Object(componentNormalizer["a" /* default */])(
  components_SignDialogvue_type_script_lang_js_,
  SignDialogvue_type_template_id_75f2c4a9_render,
  SignDialogvue_type_template_id_75f2c4a9_staticRenderFns,
  false,
  SignDialog_injectStyles,
  null,
  "79bf5a35"
  
)

/* harmony default export */ var SignDialog = (SignDialog_component.exports);
// EXTERNAL MODULE: ./assets/js/parseToken.js
var parseToken = __webpack_require__(16);

// CONCATENATED MODULE: ./mixins/useSign.js

/* harmony default export */ var useSign = ({
  async beforeMount() {
    if (this.$store.state.logging) {
      const canceler = this.$watch('$store.state.logging', () => {
        if (this.$store.state.isAuth) {
          this.$channel.$fire('user-signed');
          canceler();
        } else {
          this.$cookie.remove('JWT-TOKEN');
          this.$channel.$fire('user-not-sign');
        }
      });
    } else {
      const token = Object(parseToken["a" /* default */])();
      this.$store.commit('SET_USER_TOKEN', token);
      const user = await this.$store.dispatch('initAuth');

      if (user) {
        this.$channel.$fire('user-signed');
        this.$store.dispatch('getUserRoles');
      } else {
        this.$cookie.remove('JWT-TOKEN');
        this.$channel.$fire('user-not-sign');
      }
    }
  }

});
// CONCATENATED MODULE: ./mixins/socket.js
/* harmony default export */ var socket = ({
  beforeMount() {
    this.$channel.$when('user-signed', () => {
      const HEART_BEAT_TTL = 1000;

      const detectSocketIsConnected = () => Date.now() - this.$cache.get('socket-connect-heartbeat', 0) <= HEART_BEAT_TTL;

      const connectSocketIfNotExist = () => {
        /**
         * 连接 websocket，则连接并轮训更新状态
         */
        const connected = () => {
          this.$channel.socketConnect();
          const timer = setInterval(() => {
            /**
             * 1. 当 socket 连接正常的时候，会持续维持状态
             * 2. 当 socket 服务不可用的时候，会 clear 状态维持
             * 3. 但无法重连 socket，因为会造成前端死循环，并无限的向后端发请求
             */
            if (this.$store.state.socket.isConnected) {
              this.$cache.set('socket-connect-heartbeat', Date.now());
            } else {
              clearInterval(timer);
            }
          }, HEART_BEAT_TTL);
          window.addEventListener('beforeunload', () => {
            this.$channel.socketDisconnect();
          });
        };
        /**
         * 1. 若心跳还在持续，就检测并从 localStorage 里同步最新的数据
         * 2. 若心跳检测发现连接已经断开，并且当前页面是受访问的页面，则在当前页面进行重连
         */


        const heartbeat = () => {
          const timer = setInterval(() => {
            if (detectSocketIsConnected()) {
              if (Date.now() - this.$cache.get('socket-on-message-time', 0) <= HEART_BEAT_TTL) {
                this.$store.commit('SOCKET_ONMESSAGE', this.$cache.get('socket-on-message-data'));
              }
            } else if (document.visibilityState === 'visible') {
              connected();
              clearInterval(timer);
            }
          }, HEART_BEAT_TTL * 2);
        };
        /**
         * 1. 检测 websocket 是否已经连接
         * 2. 如果已连接则修改 store 状态，并进行心跳检测，如果未连接则创建连接
         */


        if (detectSocketIsConnected() || document.visibilityState !== 'visible') {
          this.$store.commit('SOCKET_AUTO_CONNECT');
          heartbeat();
        } else {
          connected();
        }
      }; // 用户登录后连接 websocket


      setTimeout(connectSocketIfNotExist, HEART_BEAT_TTL * 2);
    });
  },

  beforeDestroy() {
    if (this.$store.state.socket.isConnected) {
      this.$channel.socketDisconnect();
    }
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  // eslint-disable-next-line
  name: 'default',
  components: {
    SignDialog: SignDialog
  },
  mixins: [useSign, socket]
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_bf3baec6_render,
  defaultvue_type_template_id_bf3baec6_staticRenderFns,
  false,
  null,
  null,
  "9d4724dc"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });

    if (this.nuxt.err && layouts_error) {
      const errorLayout = (layouts_error.options || layouts_error).layout;

      if (errorLayout) {
        this.setLayout(typeof errorLayout === 'function' ? errorLayout.call(layouts_error, this.context) : errorLayout);
      }
    }

    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(26);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(64), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(57), 'flow.js');
  resolveStoreModules(__webpack_require__(58), 'global.js');
  resolveStoreModules(__webpack_require__(59), 'social.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const storeModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(storeModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(19);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(42);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  return axios;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // baseURL
  const baseURL =  false ? undefined : process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./assets/js/generateRequestError.js
/* harmony default export */ var generateRequestError = (err => {
  const result = {};

  if (/timeout of/.test(err.message)) {
    result.statusCode = 504;
    result.message = '网络请求超时，请重试！';
    return result;
  }

  if (!err.response) {
    result.statusCode = 502;
    result.message = '网络错误，请重试！';
    return result;
  }

  result.statusCode = err.response.status;
  result.message = err.response.data.message || '发生错误了，请稍后再试！';

  if (typeof result.message !== 'string') {
    result.message = '网络错误，请重试！';
  }

  return result;
});
// CONCATENATED MODULE: ./plugins/axios.all.js


/* harmony default export */ var axios_all = (({
  $axios,
  app
}) => {
  const isClient = typeof window !== 'undefined';
  $axios.setToken(Object(parseToken["a" /* default */])(app), 'Bearer');
  $axios.onRequest(config => {
    config.baseURL = isClient ? "https://api.calibur.tv/" : "http://localhost/";
    config.timeout = 10000;
  });
  $axios.onResponse(resp => {
    return resp.data;
  });
  $axios.onError(error => {
    return Promise.reject(generateRequestError(error));
  });
});
// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__(27);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "element-ui/lib/form-item"
var form_item_ = __webpack_require__(28);
var form_item_default = /*#__PURE__*/__webpack_require__.n(form_item_);

// EXTERNAL MODULE: external "element-ui/lib/form"
var form_ = __webpack_require__(29);
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "element-ui/lib/tag"
var tag_ = __webpack_require__(24);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "element-ui/lib/col"
var col_ = __webpack_require__(30);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "element-ui/lib/row"
var row_ = __webpack_require__(31);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "element-ui/lib/button"
var button_ = __webpack_require__(32);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/@calibur/sakura/lib/theme-sakura/v-img.css
var v_img = __webpack_require__(60);

// EXTERNAL MODULE: external "@calibur/sakura/lib/v-img"
var v_img_ = __webpack_require__(33);
var lib_v_img_default = /*#__PURE__*/__webpack_require__.n(v_img_);

// EXTERNAL MODULE: ./node_modules/@calibur/sakura/lib/theme-sakura/v-lazyload.css
var v_lazyload = __webpack_require__(61);

// EXTERNAL MODULE: external "@calibur/sakura/lib/v-lazyload"
var v_lazyload_ = __webpack_require__(43);
var lib_v_lazyload_default = /*#__PURE__*/__webpack_require__.n(v_lazyload_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/v-switcher/dist/v-switcher.vue?vue&type=template&id=41adfa03&
var v_switchervue_type_template_id_41adfa03_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-switcher",class:[
    { 'v-switcher-vertical': _vm.align === 'vertical' },
    { 'v-switcher-sticky': _vm.sticky }
  ],on:{"mouseenter":function($event){_vm.cursorInner = true},"mouseleave":function($event){_vm.cursorInner = false},"touchstart":function($event){_vm.touchInner = true},"touchend":function($event){_vm.touchInner = false}}},[_vm._ssrNode("<div"+(_vm._ssrClass("v-switcher-header-wrap",{ 'v-switcher-header-wrap-fixed': _vm.isFixed }))+(_vm._ssrStyle(null,[{ height: (_vm.headerHeight + "px") }, _vm.fixedHeaderStyle], null))+">","</div>",[_vm._ssrNode("<div class=\"v-switcher-header-before\">","</div>",[_vm._t("header-before")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"v-switcher-header-after\">","</div>",[_vm._t("header-after")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"v-switcher-header-tabs\">","</div>",[_vm._ssrNode("<ul"+(_vm._ssrClass("v-switcher-header",[("v-switcher-header-" + _vm.align), "v-switcher-header-translate"]))+(_vm._ssrStyle(null,_vm.headerStyle, { display: (!_vm.hiddenTabs) ? '' : 'none' }))+">","</ul>",[_vm._l((_vm.formatHeaders),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass("v-switcher-header-item",{ 'is-active': index === _vm.focusIndex }))+(_vm._ssrStyle(null,_vm.headerItemStyle, null))+">","</li>",[_vm._t(("tab-" + index),[(item.icon)?_c('i',{class:item.icon}):_vm._e(),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(item.text)}})])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"v-switcher-header-anchor\""+(_vm._ssrStyle(null,_vm.anchorStyle, null))+">","</li>",[_vm._t("anchor")],2)],2)])],2),_vm._ssrNode(" <div"+(_vm._ssrStyle(null,_vm.fixedShimStyle, { display: (_vm.showFixedShim) ? '' : 'none' }))+"></div> "),(!_vm.routable)?_vm._ssrNode("<div"+(_vm._ssrClass("v-switcher-content-wrap",{ 'v-switcher-content-swipe': _vm.swipe }))+(_vm._ssrStyle(null,_vm.contentWrapStyle, null))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("v-switcher-content",[{ 'v-switcher-content-animated': _vm.animated && !_vm.swipe }]))+(_vm._ssrStyle(null,_vm.contentStyle, null))+">","</div>",_vm._l((_vm.headers),function(item,index){return _vm._ssrNode("<div class=\"v-switcher-content-panel\""+(_vm._ssrStyle(null,_vm._computePanelStyle(index), null))+">","</div>",[_vm._t(index)],2)}),0)]):_vm._e()],2)}
var v_switchervue_type_template_id_41adfa03_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/v-switcher/dist/v-switcher.vue?vue&type=template&id=41adfa03&

// CONCATENATED MODULE: ./node_modules/v-switcher/dist/swipe.js
/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
 */
function Swipe(container, options) {
  'use strict'

  // utilities
  var noop = function() {} // simple no operation function
  var offloadFn = function(fn) {
    setTimeout(fn || noop, 0)
  } // offload a functions execution

  var isAndroid = /android/.test(window.navigator.userAgent.toLocaleLowerCase())
  var lastMoveAt = 0

  // quit if no root element
  if (!container) return
  var element = container.children[0]
  var slides, slidePos, width
  options = options || {}
  var index = parseInt(options.startSlide, 10) || 0
  var speed = options.speed || 300
  var disabled = options.disabled || false
  options.continuous =
    options.continuous !== undefined ? options.continuous : true

  function setup() {
    // cache slides
    slides = element.children

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false

    //special case if two slides
    if (options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true))
      element.appendChild(element.children[1].cloneNode(true))
      slides = element.children
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length)

    // determine width of each slide
    width = slides[0].getBoundingClientRect().width || slides[0].offsetWidth

    element.style.width = slides.length * width + 'px'
    element.parentElement.style.width = width + 'px'

    // stack elements
    var pos = slides.length
    while (pos--) {
      var slide = slides[pos]

      slide.style.width = width + 'px'
      slide.setAttribute('data-index', pos)

      slide.style.left = pos * -width + 'px'
      slide.style.zIndex = slides.length - pos
      move(pos, index > pos ? -width : index < pos ? width : 0, 0)
    }

    // reposition elements before and after index
    if (options.continuous) {
      move(circle(index - 1), -width, 0)
      move(circle(index + 1), width, 0)
    }

    container.style.visibility = 'visible'
  }

  function prev() {
    if (options.continuous) slide(index - 1)
    else if (index) slide(index - 1)
  }

  function next() {
    if (options.continuous) slide(index + 1)
    else if (index < slides.length - 1) slide(index + 1)
  }

  function circle(index) {
    // a simple positive modulo using slides.length
    return (slides.length + (index % slides.length)) % slides.length
  }

  function slide(to, slideSpeed) {
    // do nothing if already on requested slide
    if (index === to) return

    var direction = Math.abs(index - to) / (index - to) // 1: backward, -1: forward

    // get the actual position of the slide
    if (options.continuous) {
      var natural_direction = direction
      direction = -slidePos[circle(to)] / width

      // if going forward but to < index, use to = slides.length + to
      // if going backward but to > index, use to = -slides.length + to
      if (direction !== natural_direction) to = -direction * slides.length + to
    }

    var diff = Math.abs(index - to) - 1

    // move all the slides between index and to in the right direction
    while (diff--)
      move(circle((to > index ? to : index) - diff - 1), width * direction, 0)

    to = circle(to)

    move(index, width * direction, slideSpeed || speed)
    move(to, 0, slideSpeed || speed)

    if (options.continuous)
      move(circle(to - direction), -(width * direction), 0) // we need to get the next in place

    index = to
    offloadFn(options.callback && options.callback(index, slides[index]))
    lastMoveAt = Date.now()
  }

  function move(index, dist, speed) {
    translate(index, dist, speed)
    slidePos[index] = dist
  }

  function translate(index, dist, speed) {
    var slide = slides[index]
    var style = slide && slide.style

    if (!style) return

    style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration =
      speed + 'ms'

    style.webkitTransform = style.msTransform = style.MozTransform = style.OTransform =
      'translateX(' + dist + 'px)'
  }

  // setup auto slideshow
  var delay = options.auto || 0
  var interval

  function begin() {
    interval = setTimeout(next, delay)
  }

  function stop() {
    delay = 0
    interval && clearTimeout(interval)
  }

  // setup initial vars
  var start = {}
  var delta = {}
  var isScrolling

  // setup event capturing
  var events = {
    handleEvent: function(event) {
      switch (event.type) {
        case 'touchstart':
          this.start(event)
          break
        case 'touchmove':
          this.move(event)
          break
        case 'touchend':
          offloadFn(this.end(event))
          break
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend':
          offloadFn(this.transitionEnd(event))
          break
        case 'resize':
          offloadFn(setup)
          break
      }

      if (options.stopPropagation) event.stopPropagation()
    },
    start: function(event) {
      if (disabled) {
        return
      }

      var touches = event.touches[0]

      // measure start values
      start = {
        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date()
      }

      // used for testing first move event
      isScrolling = undefined

      // reset delta and end measurements
      delta = {}

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false)
      element.addEventListener('touchend', this, false)
    },
    move: function(event) {
      if (disabled) {
        return
      }

      // ensure swiping with one touch and not pinching
      if (event.touches.length > 1 || (event.scale && event.scale !== 1)) return

      if (options.disableScroll) event.preventDefault()

      var touches = event.touches[0]

      // measure change in x and y
      delta = {
        x: touches.pageX - start.x,
        y: touches.pageY - start.y
      }

      // determine if scrolling test has run - one time test
      if (typeof isScrolling === 'undefined') {
        isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y))
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {
        // prevent native scrolling
        event.preventDefault()
        if (isAndroid) {
          if (Math.abs(delta.x) < Math.abs(delta.y) * 3) {
            stop()
            return
          }
        } else {
          event.stopPropagation()
        }

        // stop slideshow
        stop()

        // increase resistance if first or last slide
        if (options.continuous) {
          // we don't add resistance at the end

          translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0)
          translate(index, delta.x + slidePos[index], 0)
          translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0)
        } else {
          delta.x =
            delta.x /
            ((!index && delta.x > 0) || // if first slide and sliding left
            (index === slides.length - 1 && // or if last slide and sliding right
              delta.x < 0) // and if sliding at all
              ? Math.abs(delta.x) / width + 1 // determine resistance level
              : 1) // no resistance if false

          if (index === 0 && delta.x > 0) {
            return
          }
          if (index === element.children.length - 1 && delta.x < 0) {
            return
          }
          // translate 1:1
          translate(index - 1, delta.x + slidePos[index - 1], 0)
          translate(index, delta.x + slidePos[index], 0)
          translate(index + 1, delta.x + slidePos[index + 1], 0)
        }
      }
    },
    end: function() {
      // measure duration
      var duration = +new Date() - start.time

      // determine if slide attempt triggers next/prev slide
      var isValidSlide =
        (Number(duration) < 250 && // if slide duration is less than 250ms
          Math.abs(delta.x) > 20) || // and if slide amt is greater than 20px
        Math.abs(delta.x) > width / 2 // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds =
        (!index && delta.x > 0) || // if first slide and slide amt is greater than 0
        (index === slides.length - 1 && delta.x < 0) // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false

      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0

      // if not scrolling vertically
      if (!isScrolling) {
        if (isValidSlide && !isPastBounds) {
          if (direction) {
            if (options.continuous) {
              // we need to get the next in this direction in place

              move(circle(index - 1), -width, 0)
              move(circle(index + 2), width, 0)
            } else {
              move(index - 1, -width, 0)
            }

            move(index, slidePos[index] - width, speed)
            move(circle(index + 1), slidePos[circle(index + 1)] - width, speed)
            index = circle(index + 1)
          } else {
            if (options.continuous) {
              // we need to get the next in this direction in place

              move(circle(index + 1), width, 0)
              move(circle(index - 2), -width, 0)
            } else {
              move(index + 1, width, 0)
            }

            move(index, slidePos[index] + width, speed)
            move(circle(index - 1), slidePos[circle(index - 1)] + width, speed)
            index = circle(index - 1)
          }
          lastMoveAt = Date.now()
          options.callback && options.callback(index, slides[index])
        } else {
          if (options.continuous) {
            move(circle(index - 1), -width, speed)
            move(index, 0, speed)
            move(circle(index + 1), width, speed)
          } else {
            move(index - 1, -width, speed)
            move(index, 0, speed)
            move(index + 1, width, speed)
          }
        }
      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false)
      element.removeEventListener('touchend', events, false)
    },
    transitionEnd: function(event) {
      if (parseInt(event.target.getAttribute('data-index'), 10) === index) {
        if (delay) begin()

        options.transitionEnd &&
          options.transitionEnd.call(event, index, slides[index])
      }
    }
  }

  // trigger setup
  setup()

  // start auto slideshow if applicable
  if (delay) begin()

  // add event listeners
  element.addEventListener('touchstart', events, false)
  element.addEventListener('webkitTransitionEnd', events, false)
  element.addEventListener('msTransitionEnd', events, false)
  element.addEventListener('oTransitionEnd', events, false)
  element.addEventListener('otransitionend', events, false)
  element.addEventListener('transitionend', events, false)
  window.addEventListener('resize', events, false)

  // expose the Swipe API
  return {
    slide: function(to, speed) {
      if (speed && Date.now() - lastMoveAt <= speed) {
        return
      }
      // cancel slideshow
      stop()

      slide(to, speed)
    },
    prev: function() {
      // cancel slideshow
      stop()

      prev()
    },
    next: function() {
      // cancel slideshow
      stop()

      next()
    }
  }
}

// CONCATENATED MODULE: ./node_modules/v-switcher/dist/utils.js
const getMatchedRouteIndex = (headers, path) => {
  let result = -1
  headers
    .map(_ => _.route)
    .forEach((route, index) => {
      if (path.startsWith(route)) {
        result = index
      }
    })
  return result
}

const on = (function() {
  if (typeof window === 'undefined') {
    return
  }
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

const off = (function() {
  if (typeof window === 'undefined') {
    return
  }
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

const getScroll = (target, top) => {
  const prop = top ? 'pageYOffset' : 'pageXOffset'
  const method = top ? 'scrollTop' : 'scrollLeft'
  let ret = target[prop]
  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method]
  }
  return ret
}

const getOffset = element => {
  const rect = element.getBoundingClientRect()
  const scrollTop = getScroll(window, true)
  const scrollLeft = getScroll(window)
  const docEl = window.document.body
  const clientTop = docEl.clientTop || 0
  const clientLeft = docEl.clientLeft || 0
  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  }
}

const getScrollTarget = dom => {
  let el = dom
  if (!el) {
    return null
  }
  while (
    el &&
    el.tagName !== 'HTML' &&
    el.tagName !== 'BOYD' &&
    el.nodeType === 1
  ) {
    const overflowY = window.getComputedStyle(el).overflowY
    if (overflowY === 'scroll' || overflowY === 'auto') {
      if (el.tagName === 'HTML' || el.tagName === 'BODY') {
        return document
      }
      return el
    }
    el = el.parentNode
  }
  return document
}

// CONCATENATED MODULE: ./node_modules/v-switcher/dist/affix.js


/* harmony default export */ var affix = ({
  props: {
    fixedTop: { // eslint-disable-line
      type: Number
    }
  },
  data() {
    return {
      isFixed: false,
      showFixedShim: false,
      fixedShimStyle: {},
      fixedHeaderStyle: {}
    }
  },
  mounted() {
    if (this.fixedTop !== undefined) {
      const target = getScrollTarget(this.$el)
      on(target, 'scroll', this.handleScroll)
      on(target, 'resize', this.handleScroll)
      this.$nextTick(() => {
        this.handleScroll()
      })
    }
  },
  beforeDestroy() {
    if (this.fixedTop !== undefined) {
      const target = getScrollTarget(this.$el)
      off(target, 'scroll', this.handleScroll)
      off(target, 'resize', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const isFixed = this.isFixed
      const scrollTop = getScroll(window, true)
      const elOffset = getOffset(this.$el)
      // Fixed Top
      if (elOffset.top - this.fixedTop < scrollTop && !isFixed) {
        this.isFixed = true
        this.fixedShimStyle = {
          width: this.$refs.headerWrap.clientWidth + 'px',
          height: this.$refs.headerWrap.clientHeight + 'px'
        }
        this.showFixedShim = true
        this.fixedHeaderStyle = {
          top: `${this.fixedTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }
        this.$emit('on-fixed', true)
      } else if (elOffset.top - this.fixedTop > scrollTop && isFixed) {
        this.showFixedShim = false
        this.fixedShimStyle = {}
        this.isFixed = false
        this.fixedHeaderStyle = null
        this.$emit('on-fixed', false)
      }
    }
  }
});

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/v-switcher/dist/v-switcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var v_switchervue_type_script_lang_js_ = ({
  name: 'VSwitcher',
  mixins: [affix],
  props: {
    headers: {
      type: Array,
      required: true
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    routable: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 300
    },
    align: {
      type: String,
      default: 'start',
      validator: val => ~['around', 'start', 'center', 'end', 'vertical'].indexOf(val)
    },
    headerTrigger: {
      type: String,
      default: 'click',
      validator: val => ~['click', 'hover'].indexOf(val)
    },
    anchorTrigger: {
      type: String,
      default: 'click',
      validator: val => ~['click', 'hover'].indexOf(val)
    },
    anchorPadding: {
      type: Number,
      default: 0,
      validator: val => val >= 0
    },
    swipe: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Number,
      default: 0
    },
    contentWidth: {
      type: String,
      default: '100%'
    },
    headerHeight: {
      type: Number,
      default: 40,
      validator: val => val >= 0
    },
    sticky: {
      type: Boolean,
      default: false
    },
    disabledSwipe: {
      type: Boolean,
      default: false
    },
    continuousSwipe: {
      type: Boolean,
      default: false
    }
  },

  data() {
    let focusIndex;

    if (this.routable) {
      focusIndex = getMatchedRouteIndex(this.headers, this.$route.path);
    } else {
      focusIndex = this.defaultIndex;
    }

    return {
      cursorInner: false,
      touchInner: false,
      focusIndex,
      anchorStyle: {},
      headerStyle: {},
      timer: 0,
      headerLeft: 0,
      headerLastPoint: 0,
      contentStartPoint: {
        x: 0,
        y: 0
      },
      contentDeltaPoint: {
        x: 0,
        y: 0
      },
      swiper: null,
      lastSlide: 0,
      sizeCache: {
        tabs: [],
        header: null,
        headerSize: 0,
        headerTabsWidth: 0,
        headerWrapWidth: 0,
        headerListWidth: 0,
        headerScrollHeight: 0,
        curScreenIndex: 0,
        maxScreenCount: 1
      }
    };
  },

  computed: {
    hiddenTabs() {
      return this.autoplay && this.headerCount <= 1;
    },

    formatHeaders() {
      const result = [];
      this.headers.forEach((item, index) => {
        result.push({
          text: this._computeItemText(item, index),
          icon: this._computeItemIcon(item, index)
        });
      });
      return result;
    },

    headerCount() {
      return this.headers.length;
    },

    headerItemStyle() {
      const result = {};

      if (!this.autoplay && this.align !== 'vertical') {
        result.height = `${this.headerHeight}px`;
        result.lineHeight = `${this.headerHeight}px`;
      }

      if (this.align === 'around') {
        result.width = `${100 / this.headerCount}%`;
      }

      return result;
    },

    contentWrapStyle() {
      const style = {};

      if (this.sticky) {
        style.paddingTop = `${this.headerHeight}px`;
        style.marginTop = `-${this.headerHeight}px`;
      }

      return style;
    },

    contentStyle() {
      const style = {};

      if (this.swipe) {
        return style;
      }

      if (this.animated) {
        style.width = `${this.headerCount * 100}%`;
        style.transform = `translateX(${this.focusIndex / this.headerCount * -100}%)`;
        style.transitionDuration = `${this.duration}ms`;
      }

      return style;
    },

    notTouchDevice() {
      return typeof document === 'undefined' ? true : !('ontouchstart' in document.documentElement);
    }

  },

  beforeMount() {
    if (this.routable) {
      this.$watch('$route', newVal => {
        const currentIndex = getMatchedRouteIndex(this.headers, newVal.path);

        if (currentIndex < 0) {
          this.focusIndex = -1;

          this._resetAnchorStyle();
        } else {
          this._handleTabSwitch(currentIndex, true);
        }
      });
    }

    this.$watch('headers', newVal => {
      this.$nextTick(() => {
        const beforeIndex = this.focusIndex;

        this._cacheComponentSize();

        if (this.routable) {
          this.focusIndex = getMatchedRouteIndex(newVal, this.$route.path);
        }

        if (beforeIndex !== this.focusIndex) {
          this._computeAnchorStyle(this.focusIndex);

          this._computeHeaderStyle(beforeIndex);
        }
      });
    });
    this.$watch('focusIndex', (newVal, oldVal) => {
      this._computeAnchorStyle(newVal);

      this._computeHeaderStyle(oldVal);

      this.$emit('change', newVal);
    });
  },

  mounted() {
    this.$nextTick(() => {
      this._cacheComponentSize();

      this._initSwipe();

      this._initCarousel();

      this.$emit('change', this.focusIndex);
      this.$nextTick(() => {
        this._computeAnchorStyle(this.focusIndex);

        this._computeHeaderStyle(0);
      });
      on(window, 'resize', this._cacheComponentSize);
    });
  },

  beforeDestroy() {
    off(window, 'resize', this._cacheComponentSize);

    if (this.timer) {
      window.clearInterval(this.timer);
    }
  },

  methods: {
    _initCarousel() {
      if (!this.autoplay) {
        return;
      }

      this.timer = window.setInterval(() => {
        if (Date.now() - this.lastSlide < this.duration) {
          return;
        }

        if (this.notTouchDevice) {
          if (this.cursorInner) {
            return;
          }
        } else {
          if (this.touchInner) {
            return;
          }
        }

        this._switchTrigger(true);
      }, this.autoplay);
    },

    _initSwipe() {
      if (!this.swipe) {
        return;
      }

      this.swiper = Swipe(this.$refs.content, {
        startSlide: this.focusIndex,
        speed: this.duration,
        disabled: this.disabledSwipe,
        continuous: this.continuousSwipe || !!this.autoplay,
        callback: this._swipeCallback
      });
    },

    _triggerSwiper() {
      if (!this.swipe) {
        return;
      }

      this.swiper.slide(this.focusIndex, this.duration);
    },

    _computeHeaderStyle(beforeIndex) {
      /**
       * 只支持 align 是 start
       */
      if (this.align !== 'start' || this.sizeCache.maxScreenCount <= 1) {
        return;
      }

      const index = this.focusIndex;

      if (index < 0) {
        return;
      }
      /**
       * left <= 0
       */


      let left = this.headerLeft;
      const max = 0;
      const min = this.sizeCache.headerScrollHeight;

      if (!index) {
        left = max;
      } else if (index === this.headerCount - 1) {
        left = min;
      } else {
        /**
         * 如果设置了 beforeHeader 则 tabs[0].left 不为 0
         */
        const baseLeft = this._getComponentSize('tabs', 0).left;

        const curTabRect = this._getComponentSize('tabs', index);

        if (beforeIndex > index) {
          /**
           * 向前切换
           * 取当前 focus 的前一个 tab 来 check
           * 如果 checkTab 的左边在视口外，则重置 left
           */
          const checkTabRect = this._getComponentSize('tabs', index - 1);

          if (checkTabRect.left + left < baseLeft) {
            left = baseLeft - checkTabRect.left;
          }
          /**
           * 如果下一个 tab 的宽度过大
           * 导致当前 tab 无法完全展示在屏幕内
           * 则重置 left
           */


          const condition = curTabRect.right - baseLeft - this.sizeCache.headerTabsWidth;

          if (condition > left > 0) {
            left = -condition;
          }
        } else {
          /**
           * 向后切换
           * 取当前 focus 的后一个 tab 来 check
           * 如果 checkTab 的右边
           */
          const checkTabRect = this._getComponentSize('tabs', index + 1);

          const result = checkTabRect.right - baseLeft - this.sizeCache.headerTabsWidth;

          if (result > 0) {
            left = -result;
          }
          /**
           * 如果上一个 tab 的宽度过大
           * 导致当前 tab 无法完全展示在屏幕内
           * 则重置 left 为当前 tab 的 left
           */


          const condition = curTabRect.left - baseLeft;

          if (left + condition < 0) {
            left = -condition;
          }
        }
      }

      if (left < min) {
        left = min;
      } else if (left > max) {
        left = max;
      }

      this._setHeaderScroll(left);

      this._computeCurrentScreenIndex(left);

      this.headerLeft = left;
    },

    _setHeaderScroll(left, duration = true) {
      this.headerStyle = {
        transform: `translateX(${left}px)`,
        transitionDuration: `${duration ? this.duration : 0}ms`
      };
    },

    _computePanelStyle(index) {
      if (this.swipe) {
        return {
          width: this.contentWidth
        };
      }

      if (this.animated) {
        return {
          width: `${100 / this.headerCount}%`
        };
      }

      if (this.focusIndex !== index) {
        return {
          display: 'none'
        };
      }

      return {};
    },

    _computeMaxScreenCount() {
      if (this.align !== 'start') {
        return;
      }

      const tabSize = this._getComponentSize('tabs', this.headerCount - 1);

      const header = this._getComponentSize('header');

      if (!tabSize || !header) {
        return;
      }

      const fullWidth = tabSize.left + tabSize.width - header.left;
      this.sizeCache.maxScreenCount = Math.ceil(fullWidth / this.sizeCache.headerListWidth);
      this.$emit('calc-screen-count', this.sizeCache.maxScreenCount);
    },

    _computeAnchorStyle(index, loop = 0) {
      if (index < 0) {
        return;
      }

      const tabSize = this._getComponentSize('tabs', index);

      if (!tabSize) {
        // 这个地方 DOM 可能还没渲染好，refs 不存在，循环 5 次来取值
        if (loop < 5) {
          setTimeout(() => {
            this._computeAnchorStyle(this.focusIndex, loop + 1);
          }, 200);
        }

        return;
      }

      const anchorPadding = +this.anchorPadding;

      const header = this._getComponentSize('header');

      if (this.align === 'vertical') {
        this.anchorStyle = {
          height: `${tabSize.height - anchorPadding * 2}px`,
          transform: `translateY(${tabSize.top - header.top + anchorPadding}px)`,
          transitionDuration: `${this.duration}ms`
        };
      } else {
        this.anchorStyle = {
          width: `${tabSize.width - anchorPadding * 2}px`,
          transform: `translateX(${tabSize.left - header.left + anchorPadding}px)`,
          transitionDuration: `${this.duration}ms`
        };
      }
    },

    _resetAnchorStyle() {
      if (this.focusIndex > -1) {
        return;
      }

      if (this.align === 'vertical') {
        this.anchorStyle.transform = 'translateY(-100%)';
      } else {
        this.anchorStyle.transform = 'translateX(-100%)';
      }
    },

    _computeItemText(item, curIndex) {
      let result;

      if (typeof item === 'string') {
        result = item;
      } else {
        result = item.label || item.name || item.text;

        if (this.focusIndex === curIndex) {
          const temp = item['label-active'] || item['name-active'] || item['text-active'];

          if (temp) {
            result = temp;
          }
        }
      }

      return result;
    },

    _computeItemIcon(item, curIndex) {
      let result;

      if (typeof item === 'string' || !item.icon) {
        result = '';
      } else {
        result = `iconfont ic-${item.icon.replace('ic-', '')}`;

        if (this.focusIndex === curIndex && item['icon-active']) {
          result = `iconfont ic-${item['icon-active'].replace('ic-', '')}`;
        }
      }

      return result;
    },

    _swipeCallback(index) {
      if (isNaN(index)) {
        return;
      }

      this.lastSlide = Date.now();

      this._handleTabSwitch(index, false, false);
    },

    _handleTabSwitch(index, force = false, move = true) {
      if (this.routable && !force) {
        return;
      }

      let newIndex = index;

      if (this.autoplay && index >= this.headerCount) {
        newIndex = (newIndex - this.headerCount) % 2 ? this.headerCount - 1 : 0;
      }

      if (this.focusIndex !== newIndex) {
        this.focusIndex = newIndex;
      }

      move && this._triggerSwiper();
    },

    _switchTrigger(isNext) {
      if (Date.now() - this.lastSlide < this.duration) {
        return;
      }

      let result;

      if (isNext) {
        if (this.focusIndex === this.headerCount - 1) {
          result = 0;
        } else {
          result = this.focusIndex + 1;
        }
      } else {
        if (this.focusIndex === 0) {
          result = this.headerCount - 1;
        } else {
          result = this.focusIndex - 1;
        }
      }

      this._handleTabSwitch(result);
    },

    _handleAnchorTrigger(index) {
      if (this.anchorTrigger === 'hover') {
        this._computeAnchorStyle(index);
      }

      if (this.headerTrigger === 'hover') {
        this._handleTabSwitch(index);
      }
    },

    _moveHeader(targetScreenCount) {
      const left = -targetScreenCount * this.sizeCache.headerListWidth;

      this._setHeaderScroll(left);

      this.headerLeft = left;
      this.sizeCache.curScreenIndex = targetScreenCount;
      this.$emit('header-move', {
        is_first: targetScreenCount === 0,
        is_last: targetScreenCount + 1 === this.sizeCache.maxScreenCount
      });
    },

    _handleContentTouchStart(e) {
      if (this.swipe || !this.animated) {
        return;
      }

      const point = e.touches ? e.touches[0] : e;
      this.contentStartPoint = {
        x: point.pageX,
        y: point.pageY
      };
    },

    _handleContentTouchMove(e) {
      if (this.swipe || !this.animated) {
        return;
      }

      const point = e.touches ? e.touches[0] : e;
      const lastPoint = this.contentStartPoint;
      this.contentDeltaPoint = {
        x: point.pageX - lastPoint.x,
        y: point.pageY - lastPoint.y
      };
    },

    _handleContentTouchEnd() {
      if (this.swipe || !this.animated) {
        return;
      }

      const delta = this.contentDeltaPoint;

      if (Math.abs(delta.x) < Math.abs(delta.y)) {
        return;
      }

      if (Math.abs(delta.x) * 3 < this.sizeCache.headerWrapWidth) {
        return;
      }

      if (delta.x > 0) {
        if (!this.focusIndex) {
          return;
        }

        this.prev();
      } else {
        if (this.focusIndex >= this.headerCount - 1) {
          return;
        }

        this.next();
      }

      this.lastSlide = Date.now();
    },

    _handleHeaderTouchStart(e) {
      if (this.sizeCache.maxScreenCount <= 1) {
        return;
      }

      const point = e.touches ? e.touches[0] : e;
      this.headerLastPoint = this.align === 'vertical' ? point.pageY : point.pageX;
    },

    _handleHeaderTouchMove(e) {
      if (this.sizeCache.maxScreenCount <= 1) {
        return;
      }

      const point = e.touches ? e.touches[0] : e;
      const isVertical = this.align === 'vertical';
      const curPoint = isVertical ? point.pageY : point.pageX;
      const delta = curPoint - this.headerLastPoint;
      this.headerLastPoint = curPoint;
      let left = this.headerLeft + delta;

      if (isVertical) {
        // 到顶了
        if (delta < 0 && left < 0) {
          return;
        } // TODO：暂不支持垂直滚动吧~~~


        return;
      } else {
        // 到开头了
        if (left > 0 && delta > 0) {
          left = 0;
        } else if (delta < 0 && left + this.sizeCache.headerSize < this.sizeCache.headerTabsWidth) {
          left = this.sizeCache.headerScrollHeight;
        }
      }

      this.headerLeft = left;

      this._setHeaderScroll(left, false);
    },

    _handleHeaderTouchEnd() {
      if (this.sizeCache.maxScreenCount <= 1) {
        return;
      }

      this._computeCurrentScreenIndex(this.headerLeft);
    },

    _computeCurrentScreenIndex(left) {
      const result = Math.round(Math.abs(left / this.sizeCache.headerWrapWidth));
      this.sizeCache.curScreenIndex = result;
      this.$emit('header-move', {
        is_first: result === 0,
        is_last: result + 1 === this.sizeCache.maxScreenCount
      });
    },

    _computeComponentSize() {
      const lastRect = this._getComponentSize('tabs', this.headerCount - 1);

      const firstRect = this._getComponentSize('tabs', 0);

      if (!firstRect || !lastRect) {
        return;
      }

      this.sizeCache.headerSize = this.align === 'vertical' ? firstRect.top - lastRect.bottom : lastRect.right - firstRect.left;
    },

    _cacheComponentSize() {
      const tabs = this.$refs.tab;

      if (tabs) {
        const tabSize = [];
        tabs.forEach(tab => {
          const rect = tab.getBoundingClientRect();
          tabSize.push({
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height
          });
        });
        this.sizeCache.tabs = tabSize;

        this._computeComponentSize();
      }

      const headerWrap = this.$refs.headerWrap;

      if (headerWrap) {
        this.sizeCache.headerWrapWidth = headerWrap.clientWidth;
      }

      const tabsWrap = this.$refs.tabWrap;

      if (tabsWrap) {
        this.sizeCache.headerTabsWidth = tabsWrap.clientWidth;
      }

      const header = this.$refs.header;

      if (header) {
        const headerRect = header.getBoundingClientRect();
        this.sizeCache.header = {
          top: headerRect.top,
          left: headerRect.left,
          right: headerRect.right,
          bottom: headerRect.bottom
        };
        this.sizeCache.headerListWidth = headerRect.width;

        this._computeMaxScreenCount();
      }

      this.sizeCache.headerScrollHeight = this.sizeCache.headerTabsWidth - this.sizeCache.headerSize;
    },

    _getComponentSize(type, index = -1) {
      const value = this.sizeCache[type];

      if (!value) {
        return null;
      }

      if (index >= 0) {
        if (!value[index]) {
          return null;
        }

        return value[index];
      }

      return value;
    },

    next() {
      if (this.swiper) {
        this.swiper.next();
      } else {
        this._switchTrigger(true);
      }
    },

    prev() {
      if (this.swiper) {
        this.swiper.prev();
      } else {
        this._switchTrigger(false);
      }
    },

    forward() {
      if (this.align !== 'start' || this.sizeCache.curScreenIndex + 1 >= this.sizeCache.maxScreenCount) {
        this.$emit('header-move', {
          is_first: false,
          is_last: true
        });
      } else {
        this._moveHeader(this.sizeCache.curScreenIndex + 1);
      }
    },

    backward() {
      if (this.align !== 'start' || this.sizeCache.curScreenIndex === 0) {
        this.$emit('header-move', {
          is_first: true,
          is_last: false
        });
      } else {
        this._moveHeader(this.sizeCache.curScreenIndex - 1);
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/v-switcher/dist/v-switcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var dist_v_switchervue_type_script_lang_js_ = (v_switchervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/v-switcher/dist/v-switcher.vue



function v_switcher_injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var v_switcher_component = Object(componentNormalizer["a" /* default */])(
  dist_v_switchervue_type_script_lang_js_,
  v_switchervue_type_template_id_41adfa03_render,
  v_switchervue_type_template_id_41adfa03_staticRenderFns,
  false,
  v_switcher_injectStyles,
  null,
  "6e4e5534"
  
)

/* harmony default export */ var v_switcher = (v_switcher_component.exports);
// EXTERNAL MODULE: external "vue-mixin-store"
var external_vue_mixin_store_ = __webpack_require__(8);
var external_vue_mixin_store_default = /*#__PURE__*/__webpack_require__.n(external_vue_mixin_store_);

// CONCATENATED MODULE: ./plugins/components.all.js














 // import 'v-switcher/dist/v-switcher.css'


external_vue_default.a.use(lib_v_lazyload_default.a);
external_vue_default.a.component(lib_v_img_default.a.name, lib_v_img_default.a);
external_vue_default.a.component(v_switcher.name, v_switcher);
external_vue_default.a.component(external_vue_mixin_store_default.a.FlowLoader.name, external_vue_mixin_store_default.a.FlowLoader);
external_vue_default.a.component(button_default.a.name, button_default.a);
external_vue_default.a.component(row_default.a.name, row_default.a);
external_vue_default.a.component(col_default.a.name, col_default.a);
external_vue_default.a.component(tag_default.a.name, tag_default.a);
external_vue_default.a.component(form_default.a.name, form_default.a);
external_vue_default.a.component(form_item_default.a.name, form_item_default.a);
external_vue_default.a.component(input_default.a.name, input_default.a);
// CONCATENATED MODULE: ./assets/js/alias.js
/* harmony default export */ var alias = ({
  sign(redirect = '') {
    return `/sign?redirect=${encodeURIComponent(redirect || (typeof window === 'undefined' ? '/' : window.location.href))}`;
  },

  tag(slug, path = '') {
    return `/tag/${slug}/${path}`;
  },

  user(slug, path = 'timeline') {
    return `/user/${slug}/${path}`;
  },

  pin(slug) {
    return `/pin/${slug}`;
  },

  create(slug) {
    return slug ? `/write?slug=${slug}` : '/write';
  }

});
// EXTERNAL MODULE: ./assets/js/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./assets/js/imageResize.js
/* harmony default export */ var imageResize = ((url, {
  width,
  height,
  rule,
  webP
}) => {
  if (!url) {
    return '';
  }

  if (/imageMogr2/.test(url) || url.startsWith('data')) {
    return url;
  }

  const link = url.startsWith('http') ? url : `https://m1.calibur.tv/${url}`;
  const format = webP ? '/format/webp' : '';
  const mode = rule === undefined || rule === '' ? 1 : parseInt(rule);

  if (mode === 1 && !width || !width && !height) {
    return `${link}?imageMogr2/auto-orient/strip${format}`;
  }

  let w;
  let h;
  const DPR = typeof window === 'undefined' ? 2 : window.devicePixelRatio;

  if (mode === 1) {
    w = `/w/${width * DPR | 0}`;
    h = height ? `/h/${height * DPR | 0}` : `/h/${width * DPR | 0}`;
  } else {
    w = width ? `/w/${width * DPR | 0}` : '';
    h = height ? `/h/${height * DPR | 0}` : '';
  }

  return `${link}?imageMogr2/auto-orient/strip|imageView2/${mode}${w}${h}${format}`;
});
// CONCATENATED MODULE: ./plugins/prototypes.all.js




/* harmony default export */ var prototypes_all = (({
  store
}) => {
  external_vue_default.a.use({
    install(Vue) {
      Vue.prototype.$alias = alias;
      Vue.prototype.$utils = utils;
      Vue.prototype.$resizeImage = imageResize;
      Vue.prototype.$hasRole = store.getters.hasRole;
      Vue.prototype.$isMine = store.getters.isMine;
    }

  });
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(23);

// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/axios.all.js (mode: 'all')

 // Source: ../plugins/components.all.js (mode: 'all')

 // Source: ../plugins/prototypes.all.js (mode: 'all')

 // Source: ../plugins/prototypes.client.js (mode: 'client')

 // Source: ../plugins/socket.client.js (mode: 'client')

 // Source: ../plugins/router.client.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  const registerModule = store.registerModule;

  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({
    preserveState: false
  }, options)); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.


  const app = {
    head: {
      "titleTemplate": function anonymous(val) {
        return val ? `${val} - ${{"tags":{"newbie":"ugf6","notebook":"uh4f","bangumi":"2he","topic":"3p6","game":"285"},"author":"冰淤","description":"咔哩吧是一个二次元社区","keywords":"C站,calibur,咔哩吧,ACG,二次元,垂直社区,兴趣社交","title":"calibur - 天下漫友是一家","name":"calibur","baiduStat":"var _hmt=_hmt||[];(function(){var hm=document.createElement(\"script\");hm.src=\"https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","baiduPush":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();"}.title}` : `${{"tags":{"newbie":"ugf6","notebook":"uh4f","bangumi":"2he","topic":"3p6","game":"285"},"author":"冰淤","description":"咔哩吧是一个二次元社区","keywords":"C站,calibur,咔哩吧,ACG,二次元,垂直社区,兴趣社交","title":"calibur - 天下漫友是一家","name":"calibur","baiduStat":"var _hmt=_hmt||[];(function(){var hm=document.createElement(\"script\");hm.src=\"https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","baiduPush":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();"}.title}`;
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
      }, {
        "name": "renderer",
        "content": "webkit|ie-comp|ie-stand"
      }, {
        "name": "force-rendering",
        "content": "webkit"
      }, {
        "http-equiv": "X-UA-Compatible",
        "content": "IE=edge,chrome=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "",
        "template": val => val ? `${val},${{"tags":{"newbie":"ugf6","notebook":"uh4f","bangumi":"2he","topic":"3p6","game":"285"},"author":"冰淤","description":"咔哩吧是一个二次元社区","keywords":"C站,calibur,咔哩吧,ACG,二次元,垂直社区,兴趣社交","title":"calibur - 天下漫友是一家","name":"calibur","baiduStat":"var _hmt=_hmt||[];(function(){var hm=document.createElement(\"script\");hm.src=\"https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","baiduPush":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();"}.description}` : `${{"tags":{"newbie":"ugf6","notebook":"uh4f","bangumi":"2he","topic":"3p6","game":"285"},"author":"冰淤","description":"咔哩吧是一个二次元社区","keywords":"C站,calibur,咔哩吧,ACG,二次元,垂直社区,兴趣社交","title":"calibur - 天下漫友是一家","name":"calibur","baiduStat":"var _hmt=_hmt||[];(function(){var hm=document.createElement(\"script\");hm.src=\"https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","baiduPush":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();"}.description}`
      }, {
        "hid": "keywords",
        "name": "keywords",
        "content": "",
        "template": val => val ? `${val},${{"tags":{"newbie":"ugf6","notebook":"uh4f","bangumi":"2he","topic":"3p6","game":"285"},"author":"冰淤","description":"咔哩吧是一个二次元社区","keywords":"C站,calibur,咔哩吧,ACG,二次元,垂直社区,兴趣社交","title":"calibur - 天下漫友是一家","name":"calibur","baiduStat":"var _hmt=_hmt||[];(function(){var hm=document.createElement(\"script\");hm.src=\"https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","baiduPush":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();"}.keywords}` : `${{"tags":{"newbie":"ugf6","notebook":"uh4f","bangumi":"2he","topic":"3p6","game":"285"},"author":"冰淤","description":"咔哩吧是一个二次元社区","keywords":"C站,calibur,咔哩吧,ACG,二次元,垂直社区,兴趣社交","title":"calibur - 天下漫友是一家","name":"calibur","baiduStat":"var _hmt=_hmt||[];(function(){var hm=document.createElement(\"script\");hm.src=\"https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","baiduPush":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();"}.keywords}`
      }],
      "link": [{
        "rel": "dns-prefetch",
        "href": "https:\u002F\u002Ffile.calibur.tv"
      }, {
        "rel": "dns-prefetch",
        "href": "https:\u002F\u002Fm1.calibur.tv"
      }, {
        "rel": "preconnect",
        "href": "https:\u002F\u002Fwww.calibur.tv"
      }, {
        "rel": "preconnect",
        "href": "https:\u002F\u002Fapi.calibur.tv"
      }, {
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "https:\u002F\u002Ffile.calibur.tv\u002Ffavicon.ico"
      }],
      "bodyAttrs": {
        "id": "calibur"
      },
      "script": [{
        "src": "https:\u002F\u002Fpolyfill.alicdn.com\u002Fpolyfill.min.js",
        "type": "text\u002Fjavascript"
      }, {
        "innerHTML": "var _hmt=_hmt||[];(function (){var hm=document.createElement(\"script\");hm.src=\"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();",
        "type": "text\u002Fjavascript",
        "async": true
      }, {
        "innerHTML": "(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https:\u002F\u002Fzz.bdstatic.com\u002Flinksubmit\u002Fpush.js'}else{bp.src='http:\u002F\u002Fpush.zhanzhang.baidu.com\u002Fpush.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();",
        "type": "text\u002Fjavascript",
        "async": true
      }],
      "__dangerouslyDisableSanitizers": ["script"],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof axios_all === 'function') {
    await axios_all(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/components.all.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/components.all.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof prototypes_all === 'function') {
    await prototypes_all(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ store_state; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });
__webpack_require__.d(__webpack_exports__, "getters", function() { return /* binding */ getters; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./api/userApi.js
var userApi = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/js/cache.js

const getUserFromSessionStore = (ctx, slug) => {
  const getUser = async () => {
    const user = await Object(userApi["d" /* getUserInfo */])(ctx, {
      slug
    });
    user && setUserSessionStore(user);
    return user;
  };

  try {
    const user = sessionStorage.getItem(`user-item-${slug}`);

    if (!user) {
      return getUser();
    }

    return JSON.parse(sessionStorage.getItem(`user-item-${slug}`));
  } catch (e) {
    return getUser();
  }
};
const setUserSessionStore = user => {
  try {
    sessionStorage.setItem(`user-item-${user.slug}`, JSON.stringify(user));
  } catch (e) {}
};
const clear = () => {
  try {
    localStorage.clear();
  } catch (e) {}
};
const set = (key, value, timeout) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));

    if (timeout) {
      localStorage.setItem(`${key}-timeout`, Date.now() + timeout * 1000);
    }
  } catch (e) {}
};
const get = (key, def = null) => {
  if (typeof window === 'undefined') {
    return def;
  }

  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return def;
    }

    const timeout = localStorage.getItem(`${key}-timeout`);

    if (timeout && parseInt(timeout) < Date.now()) {
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}-timeout`);
      return def;
    }

    return JSON.parse(value);
  } catch (e) {
    return def;
  }
};
const del = key => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(key);
  } catch (e) {// do nothing
  }
};
const has = key => {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    return !!localStorage.getItem(key);
  } catch (e) {
    return false;
  }
};
// EXTERNAL MODULE: ./assets/js/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./store/index.js




const store_state = () => ({
  user: {},
  haveAuthToken: false,
  roles: null,
  isAuth: false,
  isLogout: false,
  logging: false,
  mailbox: {
    unread_message_total: 0,
    unread_notice_total: 0
  },
  messageMenu: {
    list: [],
    time: ''
  },
  messageRoom: {},
  socket: {
    isConnected: false,
    reconnectErr: false,
    isMaster: false
  }
});
const mutations = {
  SET_USER_INFO(state, user) {
    const signed = !!(user && user.slug);
    state.user = user;
    state.haveAuthToken = signed;
    state.isAuth = signed;
    state.logging = false;
  },

  SET_USER_TOKEN(state, token) {
    if (state.isLogout) {
      return;
    }

    state.haveAuthToken = !!token;
  },

  SET_LOGGING(state) {
    state.logging = true;
  },

  USER_LOGOUT(state) {
    state.haveAuthToken = false;
    state.isAuth = false;
    state.logging = false;
    state.isLogout = true;
    state.user = {};
  },

  UPDATE_USER_INFO(state, {
    key,
    value
  }) {
    external_vue_default.a.set(state.user, key, value);
  },

  SOCKET_AUTO_CONNECT(state) {
    state.socket.isConnected = true;
    state.socket.reconnectErr = false;
    state.socket.isMaster = false;
  },

  SOCKET_ONOPEN(state, event) {
    state.socket.isConnected = true;
    state.socket.reconnectErr = false;
    state.socket.isMaster = true;
  },

  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false;
  },

  SOCKET_ONERROR(state, event) {
    // console.error(state, event)
    state.socket.reconnectErr = true;
  },

  SOCKET_ONMESSAGE(state, message) {
    if (message.channel === 'unread_total') {
      state.mailbox = message;
    } else if (message.channel === 'message-menu') {
      const result = [];
      message.data.forEach(item => {
        if (!state.messageRoom[item.channel]) {
          external_vue_default.a.set(state.messageRoom, item.channel, {
            time: '',
            data: null
          });
        }

        result.push(Object.assign(item, {
          user: {}
        }));
      });
      state.messageMenu.list = result;
      state.messageMenu.time = Object(utils["randomStr"])();
    } else {
      state.messageRoom[message.channel].data = message;
      state.messageRoom[message.channel].time = Object(utils["randomStr"])();
    }

    if (state.socket.isMaster) {
      set('socket-on-message-data', message);
      set('socket-on-message-time', Date.now());
    }
  },

  SOCKET_RECONNECT(state, count) {// console.info(state, count)
  },

  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectErr = true;
  },

  SET_MESSAGE_MENU(state, menu) {
    const result = [];
    menu.forEach(item => {
      if (state.messageRoom[item.channel]) {
        external_vue_default.a.set(state.messageRoom, item.channel, {
          time: Object(utils["randomStr"])(),
          data: null
        });
      } else {
        external_vue_default.a.set(state.messageRoom, item.channel, {
          time: '',
          data: null
        });
      }

      item.user = {};
      result.push(item);
    });
    state.messageMenu.list = result;
    state.messageMenu.time = Object(utils["randomStr"])();
  },

  UPDATE_MESSAGE_MENU_USER(state, {
    channel,
    user
  }) {
    state.messageMenu.list.forEach(item => {
      if (item.channel === channel) {
        item.user = user;
      }
    });
  },

  DELETE_MESSAGE_MENU(state, channel) {
    state.messageMenu.list.forEach((item, index) => {
      if (item.channel === channel) {
        state.messageMenu.list.splice(index, 1);
      }
    });
  },

  INIT_MESSAGE_ROOM(state, channel) {
    external_vue_default.a.set(state.messageRoom, channel, {
      time: '',
      data: null
    });
  },

  CLEAR_NOTIFICATION(state, {
    channel,
    count
  }) {
    state.messageMenu.list.forEach((item, index) => {
      if (item.channel === channel) {
        state.messageMenu.list[index].count -= count;
        state.mailbox.unread_message_total -= count;
      }
    });
  },

  SET_USER_ROLE(state, data) {
    state.roles = data;
  }

};
const actions = {
  async initAuth({
    state,
    commit
  }) {
    if (!state.haveAuthToken || state.logging) {
      return null;
    }

    if (state.user.slug) {
      return state.user;
    }

    try {
      commit('SET_LOGGING');
      const user = await Object(userApi["b" /* getLoginUser */])(this);
      commit('SET_USER_INFO', user);
      return user;
    } catch (e) {
      commit('SET_USER_INFO', {});
      return null;
    }
  },

  async refreshMailbox({
    state,
    commit
  }) {
    if (state.socket.isConnected) {
      return;
    }

    const data = await Object(userApi["c" /* getMailboxTotal */])(this, {
      slug: state.user.slug
    });
    commit('SOCKET_ONMESSAGE', data);
  },

  async getMessageMenu({
    commit
  }) {
    const menu = await this.$axios.$get('v1/message/menu');
    commit('SET_MESSAGE_MENU', menu);
  },

  updateMessageMenu({
    state,
    commit
  }) {
    const self = state.user.slug;
    state.messageMenu.list.forEach(async item => {
      const arr = item.channel.split('@');
      let slug = arr[2];

      if (slug === self) {
        slug = arr[3];
      }

      const user = await getUserFromSessionStore(this, slug);
      commit('UPDATE_MESSAGE_MENU_USER', {
        channel: item.channel,
        user
      });
    });
  },

  getUserRoles({
    state,
    commit
  }) {
    if (state.roles || !state.user || !state.user.title.length) {
      return;
    }

    this.$axios.$get('v1/user/roles').then(data => {
      commit('SET_USER_ROLE', data);
    }).catch(() => {});
  }

};
const getters = {
  isMine: state => slug => state.isAuth ? state.user.slug === slug : false,
  isAdmin: state => state.isAuth ? state.user.is_admin : false,
  hasRole: state => role => state.user.is_admin ? true : state.roles ? ~state.roles.indexOf(role) : false
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/alert");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/upload");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dialog");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/option");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/select");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@codexteam/ajax");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tooltip");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/pagination");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/popover");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("v-copy");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown-item");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown-menu");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/cascader");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/loading");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("oh-my-chat");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@better-scroll/core");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@better-scroll/mouse-wheel");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/date-picker");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/radio-group");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/radio");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/switch");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/timeline-item");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/timeline");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("url-polyfill");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("@editorjs/editorjs");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map