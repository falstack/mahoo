exports.ids = [4];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserNickname.vue?vue&type=template&id=06a344e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"clearfix oneline"},[(_vm.disabled)?_vm._ssrNode("<div class=\"user-nickname\">","</div>",[_vm._ssrNode("<div class=\"nickname\"><p class=\"oneline\">"+(_vm._s(_vm.nickname || _vm.user.nickname))+"</p></div> "+((_vm.sex)?("<span"+(_vm._ssrClass(null,_vm.$style.title))+"><i"+(_vm._ssrClass("iconfont",[_vm.$style['ic-sex'], ("ic-" + (_vm.sexClass.name))]))+(_vm._ssrStyle(null,{ backgroundColor: _vm.sexClass.color }, null))+"></i></span>"):"<!---->")+" "+((_vm.level)?("<span"+(_vm._ssrClass(null,[_vm.$style.title, _vm.$style['ic-level']]))+">"+_vm._ssrEscape(_vm._s(("Lv" + (_vm.user.level))))+"</span>"):"<!---->")+" "+(_vm._ssrList((_vm.user.title),function(item,index){return ("<span"+(_vm._ssrClass(null,[_vm.$style.title, _vm.$style['ic-title']]))+">"+_vm._ssrEscape(_vm._s(item))+"</span>")})))],2):_c('NLink',{staticClass:"user-nickname active",attrs:{"to":_vm.$alias.user(_vm.user.slug),"target":"_blank"}},[_c('div',{staticClass:"nickname"},[_c('p',{staticClass:"oneline",domProps:{"innerHTML":_vm._s(_vm.nickname || _vm.user.nickname)}})]),_vm._v(" "),(_vm.sex)?_c('span',{class:_vm.$style.title},[_c('i',{staticClass:"iconfont",class:[_vm.$style['ic-sex'], ("ic-" + (_vm.sexClass.name))],style:({ backgroundColor: _vm.sexClass.color })})]):_vm._e(),_vm._v(" "),(_vm.level)?_c('span',{class:[_vm.$style.title, _vm.$style['ic-level']],domProps:{"textContent":_vm._s(("Lv" + (_vm.user.level)))}}):_vm._e(),_vm._v(" "),_vm._l((_vm.user.title),function(item,index){return _c('span',{key:index,class:[_vm.$style.title, _vm.$style['ic-title']],domProps:{"textContent":_vm._s(item)}})})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/user/UserNickname.vue?vue&type=template&id=06a344e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserNickname.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var UserNicknamevue_type_script_lang_js_ = ({
  name: 'UserNickname',
  props: {
    user: {
      type: Object,
      required: true
    },
    sex: {
      type: Number,
      default: 0
    },
    level: {
      type: Boolean,
      default: true
    },
    nickname: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sexClass() {
      switch (this.sex) {
        case -1:
          return {
            name: 'simi',
            color: 'limegreen'
          };

        case 0:
          return {
            name: 'unknown',
            color: 'gold'
          };

        case 1:
          return {
            name: 'nan',
            color: 'deepskyblue'
          };

        case 2:
          return {
            name: 'nv',
            color: 'hotpink'
          };

        default:
          return {
            name: 'weizhi',
            color: 'gold'
          };
      }
    }

  }
});
// CONCATENATED MODULE: ./components/user/UserNickname.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_UserNicknamevue_type_script_lang_js_ = (UserNicknamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/user/UserNickname.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(103)
if (style1.__inject__) style1.__inject__(context)
this["$style"] = (style1.locals || style1)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_UserNicknamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f6130c86"
  
)

/* harmony default export */ var UserNickname = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/button/UserFollowBtn.vue?vue&type=template&id=4862a73a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.state)?_c('el-button',{staticClass:"user-fff-btn",attrs:{"loading":_vm.state.is_following_loading,"round":"","type":"primary","plain":_vm.btnText !== '关注'},on:{"click":_vm.handleFollowClick}},[_c('span',{domProps:{"textContent":_vm._s(_vm.btnText)}})]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/button/UserFollowBtn.vue?vue&type=template&id=4862a73a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/UserFollowBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var UserFollowBtnvue_type_script_lang_js_ = ({
  name: 'UserFollowBtn',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    state() {
      return this.$store.getters['social/get']('user-follow', this.slug);
    },

    isAuth() {
      return this.$store.state.isAuth;
    },

    isMine() {
      return this.$store.getters.isMine(this.slug);
    },

    btnText() {
      if (!this.isAuth || !this.state) {
        return '关注';
      }

      if (this.isMine) {
        return '自己';
      }

      if (this.state.is_following && this.state.is_followed_by) {
        return '互相关注';
      } else if (this.state.is_following) {
        return '已关注';
      } else if (this.state.is_followed_by) {
        return '关注了我';
      }

      return '关注';
    }

  },
  methods: {
    handleFollowClick() {
      if (!this.isAuth) {
        this.$channel.$emit('sign-in');
        return;
      }

      if (this.isMine) {
        this.$toast.info('不能关注自己');
        return;
      }

      if (!this.state || this.state.is_following_loading) {
        return;
      }

      if (this.btnText === '关注了我' || this.btnText === '关注') {
        this.submit();
        return;
      }

      this.$confirm('确定要取消关注吗？', '提示').then(() => this.submit()).catch(() => {});
    },

    async submit() {
      const data = await this.$store.dispatch('social/toggle', {
        type: 'user-follow',
        slug: this.slug,
        action: 'is_following',
        params: {
          target_slug: this.slug,
          target_type: 'user',
          method_type: 'follow'
        }
      });

      if (data.success) {
        this.$emit('change', data.result);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/button/UserFollowBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_UserFollowBtnvue_type_script_lang_js_ = (UserFollowBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/button/UserFollowBtn.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_UserFollowBtnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f0fb3e5a"
  
)

/* harmony default export */ var UserFollowBtn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/button/SendMailBtn.vue?vue&type=template&id=270c1ae3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-button',{staticClass:"send-mail-btn",attrs:{"type":"info","round":"","plain":""},on:{"click":_vm.toMessage}},[_vm._v("\n  发消息\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/button/SendMailBtn.vue?vue&type=template&id=270c1ae3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/SendMailBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var SendMailBtnvue_type_script_lang_js_ = ({
  name: 'SendMailBtn',
  props: {
    slug: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },

    isMine() {
      return this.$store.getters.isMine(this.slug);
    }

  },
  methods: {
    toMessage() {
      if (!this.isAuth) {
        this.$channel.$emit('sign-in');
        return;
      }

      if (this.isMine) {
        this.$toast.info('不能给自己发消息');
        return;
      }

      const redirectWindow = window.open();
      this.$axios.$get('v1/message/get_channel', {
        params: {
          type: 1,
          slug: this.slug
        }
      }).then(channel => {
        redirectWindow.location = this.$alias.user(this.$store.state.user.slug, `message?mailto=${channel}&name=${this.nickname}`);
      }).catch(err => {
        this.$toast.error(err.message);
        redirectWindow.close();
      });
    }

  }
});
// CONCATENATED MODULE: ./components/button/SendMailBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_SendMailBtnvue_type_script_lang_js_ = (SendMailBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/button/SendMailBtn.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_SendMailBtnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "56cda7a0"
  
)

/* harmony default export */ var SendMailBtn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components-new/PageHeader.vue?vue&type=template&id=e0c64e0a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{class:{ 'with-bg': _vm.hasBg },attrs:{"id":"page-header"}},[_vm._ssrNode(((_vm.hasBg)?("<div class=\"mask-wrap\"><div class=\"mask-bg\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.background + ")") }, null))+"></div></div>"):"<!---->")+" <div class=\"mask-shim\"></div> "),_vm._ssrNode("<div class=\"text-wrap v-layout\">","</div>",[_vm._ssrNode("<ul class=\"header-left\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('NLink',{staticClass:"nav-link home-link",attrs:{"to":"/"}},[_c('i',{staticClass:"iconfont ic-calibur"}),_vm._v(" "),_c('span',[_vm._v("主站")])])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"header-right\">","</ul>",[(_vm.isAuth)?[_vm._ssrNode("<li class=\"user-panel\">","</li>",[_c('HeaderPopover',{attrs:{"class-name":"user-popover"},scopedSlots:_vm._u([{key:"trigger",fn:function(){return [_c('NLink',{staticClass:"avatar",attrs:{"to":_vm.$alias.user(_vm.user.slug)}},[_c('img',{attrs:{"src":_vm.$resizeImage(_vm.user.avatar, { width: 60 }),"alt":""}})])]},proxy:true},{key:"content",fn:function(){return [_c('p',{staticClass:"nickname oneline",domProps:{"innerHTML":_vm._s(_vm.user.nickname)}}),_vm._v(" "),_c('NLink',{attrs:{"to":_vm.$alias.user(_vm.user.slug, 'setting')}},[_c('div',{staticClass:"field"},[_c('div',{staticClass:"label"},[_c('i',{staticClass:"iconfont ic-setup_fill"}),_vm._v(" "),_c('span',[_vm._v("设置")])])])]),_vm._v(" "),_c('button',{staticClass:"sign-out",on:{"click":_vm.handleLogout}},[_vm._v("\n                退出\n              ")])]},proxy:true}],null,false,1277139557)})],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NLink',{staticClass:"nav-link",attrs:{"to":"/"}},[_c('span',[_vm._v("大会员")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NLink',{staticClass:"nav-link",attrs:{"to":"/"}},[_c('span',[_vm._v("消息")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NLink',{staticClass:"nav-link",attrs:{"to":"/"}},[_c('span',[_vm._v("动态")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NLink',{staticClass:"nav-link",attrs:{"to":"/"}},[_c('span',[_vm._v("稍后在看")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NLink',{staticClass:"nav-link",attrs:{"to":"/"}},[_c('span',[_vm._v("收藏")])])],1)]:_vm._ssrNode("<li><button class=\"nav-link\">\n            登录\n          </button></li>"),_vm._ssrNode(" <li><a href=\"/about/donate\" target=\"_blank\" class=\"create-btn\">\n          捐赠\n        </a></li>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components-new/PageHeader.vue?vue&type=template&id=e0c64e0a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components-new/HeaderPopover.vue?vue&type=template&id=25fdea03&
var HeaderPopovervue_type_template_id_25fdea03_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-popover"},[_vm._ssrNode("<div class=\"trigger\">","</div>",[_vm._t("trigger")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("content",_vm.className))+">","</div>",[_vm._t("content")],2)],2)}
var HeaderPopovervue_type_template_id_25fdea03_staticRenderFns = []


// CONCATENATED MODULE: ./components-new/HeaderPopover.vue?vue&type=template&id=25fdea03&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components-new/HeaderPopover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderPopovervue_type_script_lang_js_ = ({
  name: 'HeaderPopover',
  components: {},
  props: {
    className: {
      type: String,
      default: ''
    }
  },

  data() {
    return {};
  },

  computed: {},
  watch: {},

  created() {},

  mounted() {},

  methods: {}
});
// CONCATENATED MODULE: ./components-new/HeaderPopover.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_new_HeaderPopovervue_type_script_lang_js_ = (HeaderPopovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components-new/HeaderPopover.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_new_HeaderPopovervue_type_script_lang_js_,
  HeaderPopovervue_type_template_id_25fdea03_render,
  HeaderPopovervue_type_template_id_25fdea03_staticRenderFns,
  false,
  injectStyles,
  null,
  "909a136a"
  
)

/* harmony default export */ var HeaderPopover = (component.exports);
// EXTERNAL MODULE: ./api/userApi.js
var userApi = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components-new/PageHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var PageHeadervue_type_script_lang_js_ = ({
  name: 'PageHeader',
  components: {
    HeaderPopover: HeaderPopover
  },
  props: {
    background: {
      type: String,
      default: ''
    }
  },

  data() {
    return {};
  },

  computed: {
    hasBg() {
      return !!this.background;
    },

    isAuth() {
      return this.$store.state.isAuth;
    },

    user() {
      return this.$store.state.user;
    }

  },
  watch: {},

  created() {},

  mounted() {},

  methods: {
    handleSignIn() {
      this.$channel.$emit('sign-in');
    },

    handleLogout() {
      Object(userApi["f" /* logout */])(this);
      this.$cookie.remove('JWT-TOKEN');
      this.$channel.socketDisconnect();
      window.location = '/';
    }

  }
});
// CONCATENATED MODULE: ./components-new/PageHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_new_PageHeadervue_type_script_lang_js_ = (PageHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components-new/PageHeader.vue



function PageHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PageHeader_component = Object(componentNormalizer["a" /* default */])(
  components_new_PageHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  PageHeader_injectStyles,
  null,
  "109bd019"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["a"] = (PageHeader_component.exports);

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug.vue?vue&type=template&id=5801861c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('PageHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"user-layout\">","</div>",[_vm._ssrNode("<div class=\"user-panel container\">","</div>",[_vm._ssrNode("<div class=\"banner\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.$resizeImage(_vm.banner, { height: 200, mode: 2 })) + ")") }, null))+">","</div>",[_vm._ssrNode("<div class=\"user\">","</div>",[_c('UserAvatar',{attrs:{"user":_vm.user,"avatar":_vm.avatar,"size":68}}),_vm._ssrNode(" "),(_vm.user)?_vm._ssrNode("<div class=\"actions\">","</div>",[_c('UserFollowBtn',{attrs:{"slug":_vm.slug},on:{"change":_vm.handleFollowAction}}),_vm._ssrNode(" "),_c('SendMailBtn',{attrs:{"slug":_vm.slug,"nickname":_vm.nickname}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\">","</div>",[_c('UserNickname',{attrs:{"user":_vm.user,"nickname":_vm.nickname,"sex":_vm.sex}}),_vm._ssrNode(" <p class=\"signature oneline\">"+_vm._ssrEscape(_vm._s(_vm.signature))+"</p>")],2)],2)]),_vm._ssrNode(" "),_c('VSwitcher',{attrs:{"headers":_vm.headers,"routable":true,"header-height":66,"fixed-top":0,"anchor-trigger":"hover","align":"start"}},[_vm._l((_vm.headers),function(item,index){return _c('NLink',{key:index,staticClass:"only-pc",attrs:{"slot":("tab-" + index),"to":item.route},slot:("tab-" + index)},[_c('i',{staticClass:"iconfont",class:("ic-" + (item.icon)),style:({ color: item.color })}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(item.name)}})])}),_vm._v(" "),_c('ul',{staticClass:"user-meta",attrs:{"slot":"header-after"},slot:"header-after"},[_c('li',[_c('div',{staticClass:"label"},[_vm._v("\n              访问数\n            ")]),_vm._v(" "),_c('span',{staticClass:"value",domProps:{"textContent":_vm._s(_vm.user.visit_count || '-')}})]),_vm._v(" "),_c('li',[_c('div',{staticClass:"label"},[_vm._v("\n              关注数\n            ")]),_vm._v(" "),_c('span',{staticClass:"value",domProps:{"textContent":_vm._s(_vm.user.following_count || '-')}})]),_vm._v(" "),_c('li',[_c('div',{staticClass:"label"},[_vm._v("\n              粉丝数\n            ")]),_vm._v(" "),_c('span',{staticClass:"value",domProps:{"textContent":_vm._s(_vm.user.followers_count || '-')}})]),_vm._v(" "),_c('li',[_c('div',{staticClass:"label"},[_vm._v("\n              活跃度\n            ")]),_vm._v(" "),_c('span',{staticClass:"value",domProps:{"textContent":_vm._s(_vm.user.stat_activity)}})]),_vm._v(" "),_c('li',[_c('div',{staticClass:"label"},[_vm._v("\n              曝光度\n            ")]),_vm._v(" "),_c('span',{staticClass:"value",domProps:{"textContent":_vm._s(_vm.user.stat_exposure)}})])])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_c('ElRow',{attrs:{"gutter":10}},[_c('ElCol',{attrs:{"span":17,"xs":24}},[_c('section',{staticClass:"user-section"},[_c('NuxtChild',{attrs:{"user":_vm.user}})],1)]),_vm._v(" "),(_vm.user)?_c('ElCol',{attrs:{"xs":0,"span":7}},[_c('aside',{staticClass:"user-section"},[_c('h3',{staticClass:"title"},[_vm._v("\n              签到\n            ")]),_vm._v(" "),_c('DailySignBtn',{model:{value:(_vm.user),callback:function ($$v) {_vm.user=$$v},expression:"user"}}),_vm._v(" "),[_c('p',[_vm._v("总签到次数："+_vm._s(_vm.user.total_sign_count)+"次")]),_vm._v(" "),_c('p',[_vm._v("连续签到数："+_vm._s(_vm.user.continuous_sign_count)+"次")]),_vm._v(" "),_c('p',[_vm._v("最后签到于："+_vm._s(_vm.user.latest_signed_at ? _vm.$utils.timeAgo(_vm.user.latest_signed_at) : '未签到'))])]],2),_vm._v(" "),(_vm.isMine)?_c('aside',{staticClass:"user-section"},[_c('h3',{staticClass:"title"},[_vm._v("\n              钱包\n            ")]),_vm._v(" "),[_c('p',[_vm._v("团子："+_vm._s(parseFloat(_vm.self.wallet_coin).toFixed(2)))]),_vm._v(" "),_c('p',[_vm._v("光玉："+_vm._s(parseFloat(_vm.self.wallet_money).toFixed(2)))])]],2):_vm._e()]):_vm._e()],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_slug.vue?vue&type=template&id=5801861c&

// EXTERNAL MODULE: ./api/userApi.js
var userApi = __webpack_require__(2);

// EXTERNAL MODULE: ./components/user/UserAvatar.vue + 4 modules
var UserAvatar = __webpack_require__(96);

// EXTERNAL MODULE: ./components/user/UserNickname.vue + 4 modules
var UserNickname = __webpack_require__(101);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/button/DailySignBtn.vue?vue&type=template&id=295436d7&
var DailySignBtnvue_type_template_id_295436d7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ElButton',{staticClass:"daily-sign-btn",attrs:{"loading":_vm.loading},on:{"click":_vm.handleSign}},[_vm._v("\n  "+_vm._s(_vm.value.daily_signed ? '已签到' : '未签到')+"\n")])}
var DailySignBtnvue_type_template_id_295436d7_staticRenderFns = []


// CONCATENATED MODULE: ./components/button/DailySignBtn.vue?vue&type=template&id=295436d7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/DailySignBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var DailySignBtnvue_type_script_lang_js_ = ({
  name: 'DailySignBtn',
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      loading: false
    };
  },

  computed: {
    isMine() {
      return this.$store.getters.isMine(this.value.slug);
    }

  },
  methods: {
    handleSign() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in');
        return;
      }

      if (!this.isMine) {
        this.$toast.info('不能替别人签到');
        return;
      }

      if (this.loading) {
        return;
      }

      if (this.value.daily_signed) {
        this.$toast.info('今天已签过到');
        return;
      }

      this.loading = true;
      this.$axios.$post('v1/user/daily_sign').then(data => {
        this.value.daily_signed = true;
        this.$toast.success(data.message);
        this.loading = false;

        try {
          this.value.sign.continuous_sign_count = data.continuous_sign_count;
          this.value.sign.latest_signed_at = data.sign_at;
          this.value.sign.total_sign_count++;
          this.$store.commit('UPDATE_USER_INFO', {
            key: 'wallet_coin',
            value: this.$store.state.user.wallet_coin + 1
          });
        } catch (e) {// do nothing
        }
      }).catch(err => {
        this.$toast.error(err.message);
        this.loading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/button/DailySignBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_DailySignBtnvue_type_script_lang_js_ = (DailySignBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/button/DailySignBtn.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_DailySignBtnvue_type_script_lang_js_,
  DailySignBtnvue_type_template_id_295436d7_render,
  DailySignBtnvue_type_template_id_295436d7_staticRenderFns,
  false,
  injectStyles,
  null,
  "0664d263"
  
)

/* harmony default export */ var DailySignBtn = (component.exports);
// EXTERNAL MODULE: ./components/button/UserFollowBtn.vue + 4 modules
var UserFollowBtn = __webpack_require__(104);

// EXTERNAL MODULE: ./components/button/SendMailBtn.vue + 4 modules
var SendMailBtn = __webpack_require__(124);

// EXTERNAL MODULE: ./components-new/PageHeader.vue + 9 modules
var PageHeader = __webpack_require__(131);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'UserLayout',
  components: {
    PageHeader: PageHeader["a" /* default */],
    UserAvatar: UserAvatar["a" /* default */],
    UserNickname: UserNickname["a" /* default */],
    DailySignBtn: DailySignBtn,
    UserFollowBtn: UserFollowBtn["a" /* default */],
    SendMailBtn: SendMailBtn["a" /* default */]
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },

  asyncData({
    app,
    error,
    params
  }) {
    return Object(userApi["d" /* getUserInfo */])(app, params).then(user => {
      return {
        user
      };
    }).catch(error);
  },

  data() {
    return {
      user: null
    };
  },

  computed: {
    isMine() {
      return this.$store.getters.isMine(this.slug);
    },

    self() {
      return this.$store.state.user;
    },

    avatar() {
      return this.isMine ? this.self.avatar : this.user.avatar;
    },

    banner() {
      return this.isMine ? this.self.banner : this.user.banner;
    },

    nickname() {
      return this.isMine ? this.self.nickname : this.user.nickname;
    },

    signature() {
      return this.isMine ? this.self.signature : this.user.signature;
    },

    sex() {
      return this.isMine ? this.self.sex_secret ? -1 : this.self.sex : this.user.sex;
    },

    headers() {
      let result = [{
        name: '动态',
        icon: 'homepage_fill',
        color: '#00c091',
        route: `/user/${this.slug}/timeline`
      }, {
        name: '爱好',
        icon: 'like_fill',
        color: '#fb7299',
        route: `/user/${this.slug}/emotion`
      }, {
        name: '圈子',
        icon: 'group_fill',
        color: '#02b5da',
        route: `/user/${this.slug}/social`
      }];

      if (this.isMine) {
        result = result.concat([{
          name: '草稿',
          icon: 'document_fill',
          color: '#f3a034',
          route: `/user/${this.slug}/draft`
        }, {
          name: '消息',
          icon: 'remind_fill',
          color: '#ff5d47',
          route: `/user/${this.slug}/message`
        }, {
          name: '设置',
          icon: 'setup_fill',
          color: '#23c9ed',
          route: `/user/${this.slug}/setting`
        }]);
      }

      return result;
    }

  },

  beforeMount() {
    this.patchUser();
  },

  methods: {
    patchUser() {
      this.$axios.$get('v1/user/patch', {
        params: {
          slug: this.slug
        }
      }).then(data => {
        this.$set(this, 'user', { ...this.user,
          ...data
        });
        this.$store.commit('social/set', {
          type: 'user-follow',
          slug: this.slug,
          data: {
            is_following: data.is_following,
            is_followed_by: data.is_followed_by
          }
        });
      }).catch(() => {});
    },

    handleFollowAction(result) {
      this.user.followers_count -= -result;
    }

  },

  head() {
    const {
      user
    } = this;
    return {
      title: `${user.nickname}的个人空间`,
      meta: [{
        hid: 'keywords',
        name: 'keywords',
        content: user.nickname
      }, {
        hid: 'description',
        name: 'description',
        content: `${user.nickname},${user.signature}`
      }, {
        hid: 'share-image',
        name: 'share-image',
        content: user.avatar
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/user/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/user/_slug.vue



function _slug_injectStyles (context) {
  
  var style0 = __webpack_require__(237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _slug_component = Object(componentNormalizer["a" /* default */])(
  user_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _slug_injectStyles,
  null,
  "6b098daa"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (_slug_component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title_1yLHa",
	"ic-sex": "ic-sex_19eCo",
	"icSex": "ic-sex_19eCo",
	"ic-level": "ic-level_3KuJr",
	"icLevel": "ic-level_3KuJr",
	"ic-title": "ic-title_Uq8in",
	"icTitle": "ic-title_Uq8in",
	"skeleton-loading": "skeleton-loading_12Xrd",
	"skeletonLoading": "skeleton-loading_12Xrd",
	"skeleton": "skeleton_2qRlz"
};


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserAvatar.vue?vue&type=template&id=7f5ff53d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('NLink',{staticClass:"user-avatar",style:({ width: (_vm.size + "px"), height: (_vm.size + "px") }),attrs:{"to":_vm.$alias.user(_vm.user.slug),"target":"_blank"}},[_c('VImg',{attrs:{"radius":"50%","src":_vm.avatar || _vm.user.avatar,"width":_vm.size,"height":_vm.size,"alt":_vm.user.nickname}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/user/UserAvatar.vue?vue&type=template&id=7f5ff53d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserAvatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var UserAvatarvue_type_script_lang_js_ = ({
  name: 'UserAvatar',
  props: {
    user: {
      type: Object,
      required: true
    },
    avatar: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/user/UserAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_UserAvatarvue_type_script_lang_js_ = (UserAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/user/UserAvatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_UserAvatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d28bb230"
  
)

/* harmony default export */ var UserAvatar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

};;
//# sourceMappingURL=_slug.js.map