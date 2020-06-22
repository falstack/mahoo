exports.ids = [18];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserNickname.vue?vue&type=template&id=06a344e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"clearfix oneline"},[(_vm.disabled)?_vm._ssrNode("<div class=\"user-nickname\">","</div>",[_vm._ssrNode("<div class=\"nickname\"><p class=\"oneline\">"+(_vm._s(_vm.nickname || _vm.user.nickname))+"</p></div> "+((_vm.sex)?("<span"+(_vm._ssrClass(null,_vm.$style.title))+"><i"+(_vm._ssrClass("iconfont",[_vm.$style['ic-sex'], ("ic-" + (_vm.sexClass.name))]))+(_vm._ssrStyle(null,{ backgroundColor: _vm.sexClass.color }, null))+"></i></span>"):"<!---->")+" "+((_vm.level)?("<span"+(_vm._ssrClass(null,[_vm.$style.title, _vm.$style['ic-level']]))+">"+_vm._ssrEscape(_vm._s(("Lv" + (_vm.user.level))))+"</span>"):"<!---->")+" "+(_vm._ssrList((_vm.user.title),function(item,index){return ("<span"+(_vm._ssrClass(null,[_vm.$style.title, _vm.$style['ic-title']]))+">"+_vm._ssrEscape(_vm._s(item))+"</span>")})))],2):_c('NLink',{staticClass:"user-nickname active",attrs:{"to":_vm.$alias.user(_vm.user.slug),"target":"_blank"}},[_c('div',{staticClass:"nickname"},[_c('p',{staticClass:"oneline",domProps:{"innerHTML":_vm._s(_vm.nickname || _vm.user.nickname)}})]),_vm._v(" "),(_vm.sex)?_c('span',{class:_vm.$style.title},[_c('i',{staticClass:"iconfont",class:[_vm.$style['ic-sex'], ("ic-" + (_vm.sexClass.name))],style:({ backgroundColor: _vm.sexClass.color })})]):_vm._e(),_vm._v(" "),(_vm.level)?_c('span',{class:[_vm.$style.title, _vm.$style['ic-level']],domProps:{"textContent":_vm._s(("Lv" + (_vm.user.level)))}}):_vm._e(),_vm._v(" "),_vm._l((_vm.user.title),function(item,index){return _c('span',{key:index,class:[_vm.$style.title, _vm.$style['ic-title']],domProps:{"textContent":_vm._s(item)}})})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/user/UserNickname.vue?vue&type=template&id=06a344e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserNickname.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(102)
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
  "543f1ce1"
  
)

/* harmony default export */ var UserNickname = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserNickname_vue_vue_type_style_index_1_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/UserFollowBtn.vue?vue&type=template&id=4862a73a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.state)?_c('el-button',{staticClass:"user-fff-btn",attrs:{"loading":_vm.state.is_following_loading,"round":"","type":"primary","plain":_vm.btnText !== '关注'},on:{"click":_vm.handleFollowClick}},[_c('span',{domProps:{"textContent":_vm._s(_vm.btnText)}})]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/button/UserFollowBtn.vue?vue&type=template&id=4862a73a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/UserFollowBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
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
  "5d633b2f"
  
)

/* harmony default export */ var UserFollowBtn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/SendMailBtn.vue?vue&type=template&id=270c1ae3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-button',{staticClass:"send-mail-btn",attrs:{"type":"info","round":"","plain":""},on:{"click":_vm.toMessage}},[_vm._v("\n  发消息\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/button/SendMailBtn.vue?vue&type=template&id=270c1ae3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/button/SendMailBtn.vue?vue&type=script&lang=js&
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
  "233624e8"
  
)

/* harmony default export */ var SendMailBtn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRelationItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRelationItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRelationItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRelationItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRelationItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRelationItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserRelationItem.vue?vue&type=template&id=3257eea1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"user-rel-item clearfix"},[_vm._ssrNode("<div class=\"avatar\">","</div>",[_c('UserAvatar',{attrs:{"user":_vm.user,"size":60}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"intro\">","</div>",[_c('UserNickname',{attrs:{"user":_vm.user}}),_vm._ssrNode(" <p class=\"oneline intro\">"+_vm._ssrEscape(_vm._s(_vm.user.signature))+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"control\">","</div>",[_c('UserFollowBtn',{attrs:{"slug":_vm.user.slug}}),_vm._ssrNode(" "),_c('SendMailBtn',{attrs:{"slug":_vm.user.slug,"nickname":_vm.user.nickname}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/user/UserRelationItem.vue?vue&type=template&id=3257eea1&

// EXTERNAL MODULE: ./components/user/UserAvatar.vue + 4 modules
var UserAvatar = __webpack_require__(97);

// EXTERNAL MODULE: ./components/user/UserNickname.vue + 4 modules
var UserNickname = __webpack_require__(100);

// EXTERNAL MODULE: ./components/button/UserFollowBtn.vue + 4 modules
var UserFollowBtn = __webpack_require__(103);

// EXTERNAL MODULE: ./components/button/SendMailBtn.vue + 4 modules
var SendMailBtn = __webpack_require__(124);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserRelationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var UserRelationItemvue_type_script_lang_js_ = ({
  name: 'UserRelationItem',
  components: {
    UserAvatar: UserAvatar["a" /* default */],
    UserNickname: UserNickname["a" /* default */],
    UserFollowBtn: UserFollowBtn["a" /* default */],
    SendMailBtn: SendMailBtn["a" /* default */]
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/user/UserRelationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_UserRelationItemvue_type_script_lang_js_ = (UserRelationItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/user/UserRelationItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_UserRelationItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "529a5cbc"
  
)

/* harmony default export */ var UserRelationItem = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/social/followers.vue?vue&type=template&id=f1bf1f24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"user-social-followers"}},[(_vm.isMine)?_c('ElAlert',{attrs:{"title":"不用在意粉丝的多少，做自己就好","type":"success"}}):_vm._e(),_vm._ssrNode(" "),_c('FlowLoader',{ref:"loader",attrs:{"func":"getUserRelation","type":"seenIds","query":_vm.query,"callback":_vm.detectUserRelation},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var flow = ref.flow;
return _c('ul',{},_vm._l((flow),function(user){return _c('UserRelationItem',{key:user.slug,attrs:{"user":user}})}),1)}}])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_slug/social/followers.vue?vue&type=template&id=f1bf1f24&

// EXTERNAL MODULE: external "element-ui/lib/alert"
var alert_ = __webpack_require__(66);
var alert_default = /*#__PURE__*/__webpack_require__.n(alert_);

// EXTERNAL MODULE: ./components/user/UserRelationItem.vue + 4 modules
var UserRelationItem = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/social/followers.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var followersvue_type_script_lang_js_ = ({
  name: 'UserSocialFollowers',
  components: {
    UserRelationItem: UserRelationItem["a" /* default */],
    ElAlert: alert_default.a
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        relation: 'follower',
        changing: 'slug'
      };
    },

    isMine() {
      return this.$store.getters.isMine(this.slug);
    }

  },
  methods: {
    detectUserRelation({
      data
    }) {
      const {
        result
      } = data;

      if (!result.length) {
        return;
      }

      this.$axios.$get('v1/user/detect_relation', {
        params: {
          type: 'user',
          targets: result.map(_ => _.slug).join(',')
        }
      }).then(data => {
        this.$store.commit('social/set', {
          type: 'user-follow',
          data
        });
        this.$refs.loader.patch(data);
      }).catch(() => {});
    }

  }
});
// CONCATENATED MODULE: ./pages/user/_slug/social/followers.vue?vue&type=script&lang=js&
 /* harmony default export */ var social_followersvue_type_script_lang_js_ = (followersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/_slug/social/followers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  social_followersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d34ce44"
  
)

/* harmony default export */ var followers = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 96:
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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserAvatar.vue?vue&type=template&id=7f5ff53d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('NLink',{staticClass:"user-avatar",style:({ width: (_vm.size + "px"), height: (_vm.size + "px") }),attrs:{"to":_vm.$alias.user(_vm.user.slug),"target":"_blank"}},[_c('VImg',{attrs:{"radius":"50%","src":_vm.avatar || _vm.user.avatar,"width":_vm.size,"height":_vm.size,"alt":_vm.user.nickname}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/user/UserAvatar.vue?vue&type=template&id=7f5ff53d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/user/UserAvatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
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
  
  var style0 = __webpack_require__(98)
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
  "dd4d79e8"
  
)

/* harmony default export */ var UserAvatar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAvatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=followers.js.map