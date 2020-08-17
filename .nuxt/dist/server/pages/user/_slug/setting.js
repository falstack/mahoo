exports.ids = [13];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  beforeMount() {
    this.$channel.$when('user-not-sign', () => {
      this.$toast.error('继续操作前请先登录').then(() => {
        window.location.href = this.$alias.sign();
      });
    });
  }

});

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  beforeMount() {
    const redirect = () => {
      if (!this.$store.getters.isMine(this.$route.params.slug)) {
        this.$router.replace({
          name: this.$route.name,
          params: {
            slug: this.$store.state.user.slug
          }
        });
      }
    };

    if (this.$store.state.isAuth) {
      redirect();
      return;
    }

    const canceler = this.$watch('$store.state.isAuth', val => {
      if (val) {
        redirect();
        canceler();
      }
    });
  }

});

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/setting.vue?vue&type=template&id=1f85c294&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"user-setting-layout"}},[_c('ElRow',{staticClass:"column-wrap"},[_c('ElCol',{attrs:{"span":6}},[_c('VSwitcher',{attrs:{"headers":_vm.headers,"routable":true,"align":"vertical"}},_vm._l((_vm.headers),function(item,index){return _c('NLink',{key:index,attrs:{"slot":("tab-" + index),"to":item.route},slot:("tab-" + index)},[_c('span',{domProps:{"textContent":_vm._s(item.name)}})])}),1)],1),_vm._v(" "),_c('ElCol',{attrs:{"span":18}},[_c('NuxtChild')],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_slug/setting.vue?vue&type=template&id=1f85c294&

// EXTERNAL MODULE: ./mixins/mustSign.js
var mustSign = __webpack_require__(105);

// EXTERNAL MODULE: ./mixins/mustSelf.js
var mustSelf = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/setting.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  name: 'UserSettingLayout',
  mixins: [mustSign["a" /* default */], mustSelf["a" /* default */]],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    headers() {
      return [{
        name: '基础设置',
        route: `/user/${this.slug}/setting/basic`
      }, {
        name: '认证设置',
        route: `/user/${this.slug}/setting/oauth2`
      }, {
        name: '内容授权',
        route: `/user/${this.slug}/setting/spider`
      }];
    }

  }
});
// CONCATENATED MODULE: ./pages/user/_slug/setting.vue?vue&type=script&lang=js&
 /* harmony default export */ var _slug_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/_slug/setting.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(247)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _slug_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9a09c32a"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=setting.js.map