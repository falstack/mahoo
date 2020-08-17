exports.ids = [16];
exports.modules = {

/***/ 118:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "container_38LTS",
	"header": "header_1m5og",
	"title": "title_20O3t",
	"close": "close_uLA1x",
	"content": "content_37QpV",
	"loading": "loading_32o64",
	"no-more": "no-more_2gF1n",
	"noMore": "no-more_2gF1n",
	"footer": "footer_2bdAt",
	"cancel": "cancel_3BYdT",
	"submit": "submit_1MUgK",
	"skeleton-loading": "skeleton-loading_O1luh",
	"skeletonLoading": "skeleton-loading_O1luh",
	"skeleton": "skeleton_3GqAO"
};


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Dialog.vue?vue&type=template&id=1488a0cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ElDialog',{staticClass:"v-dialog",attrs:{"width":_vm.width,"custom-class":_vm.customClass,"show-close":false,"visible":_vm.dialogVisible,"before-close":_vm.beforeClose,"fullscreen":_vm.fullscreen,"modal-append-to-body":false,"append-to-body":false,"close-on-click-modal":_vm.clickClose,"close-on-press-escape":_vm.clickClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('section',{class:_vm.$style.container},[(_vm.header)?_c('header',{class:_vm.$style.header,attrs:{"slot":"header"},slot:"header"},[_vm._t("title",[_c('h4',{class:_vm.$style.title,domProps:{"textContent":_vm._s(_vm.title)}})])],2):_vm._e(),_vm._v(" "),(!_vm.clickClose || _vm.close)?_c('button',{class:_vm.$style.close,on:{"click":_vm.cancel}},[_vm._v("\n      ×\n    ")]):_vm._e(),_vm._v(" "),_c('main',{class:_vm.$style.content,style:(_vm.computeDialogHeight),on:{"scroll":_vm.handleScroll}},[(_vm.scroll)?[_c('ul',{ref:"ul"},[_vm._t("default")],2),_vm._v(" "),(_vm.loading)?_vm._t("loading",[_c('p',[_vm._v("加载中...")])]):(_vm.noMore)?_vm._t("nomore",[_c('p',[_vm._v("没有更多了")])]):_vm._e()]:_vm._t("default")],2),_vm._v(" "),(_vm.footer)?_c('footer',{class:_vm.$style.footer},[_vm._t("footer",[(_vm.cancelText)?_c('button',{class:_vm.$style.cancel,domProps:{"textContent":_vm._s(_vm.cancelText)},on:{"click":_vm.cancel}}):_vm._e(),_vm._v(" "),_c('button',{class:[_vm.$style.submit, ("btn-" + _vm.theme)],attrs:{"loading":_vm.loading},domProps:{"textContent":_vm._s(_vm.submitText)},on:{"click":_vm.submit}})])],2):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Dialog.vue?vue&type=template&id=1488a0cc&

// EXTERNAL MODULE: external "element-ui/lib/dialog"
var dialog_ = __webpack_require__(67);
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Dialog.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Dialogvue_type_script_lang_js_ = ({
  name: 'VDialog',
  components: {
    ElDialog: dialog_default.a
  },
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    customClass: {
      type: String,
      default: ''
    },
    close: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '620px'
    },
    height: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '提示'
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    scroll: {
      type: Function,
      default: null
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    noMore: {
      type: Boolean,
      default: false
    },
    clickClose: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      validator: val => ~['success', 'danger'].indexOf(val),
      default: 'success'
    }
  },

  data() {
    return {
      dialogVisible: this.value
    };
  },

  computed: {
    computeDialogHeight() {
      if (this.height) {
        return {
          height: this.height
        };
      }

      if (this.scroll) {
        return {
          height: '600px'
        };
      }

      return {
        height: 'auto'
      };
    }

  },

  mounted() {
    this.$watch('value', val => {
      this.dialogVisible = val;
      window.__closeImageLazy__ = val;
    });
    this.$watch('dialogVisible', val => {
      this.$emit('input', val);
      window.__closeImageLazy__ = val;
    });
  },

  methods: {
    beforeClose(done) {
      done();
      this.$emit('cancel');
      this.dialogVisible = false;
    },

    cancel() {
      this.$emit('cancel');
      this.dialogVisible = false;
    },

    submit() {
      this.$emit('submit');
    },

    handleScroll(evt) {
      if (!this.scroll || this.loading || this.noMore) {
        return;
      }

      const ul = this.$refs.ul;

      if (!ul) {
        return;
      }

      const main = evt.currentTarget || evt.target;

      if (this.$refs.ul.clientHeight - main.clientHeight - main.scrollTop < 30) {
        this.scroll();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/common/Dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Dialogvue_type_script_lang_js_ = (Dialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/common/Dialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Dialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "409a470c"
  
)

/* harmony default export */ var Dialog = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_oauth2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_oauth2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_oauth2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_oauth2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_oauth2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_oauth2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/setting/oauth2.vue?vue&type=template&id=7b44a337&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"user-auth-setting"}},[_vm._ssrNode(((_vm.isAuth)?("<ul class=\"providers\"><li><i"+(_vm._ssrClass("iconfont ic-qq",{ 'is-bind': _vm.user.providers.bind_qq }))+"></i></li> <li><i"+(_vm._ssrClass("iconfont ic-v-chat",{ 'is-bind': _vm.user.providers.bind_wechat }))+"></i></li> <li><i"+(_vm._ssrClass("iconfont ic-phone",{ 'is-bind': _vm.user.providers.bind_phone }))+"></i></li> <li><i"+(_vm._ssrClass("iconfont ic-bilibili",{ 'is-bind': _vm.user.providers.bind_bilibili }))+"></i></li></ul>"):"<!---->")+" "),_c('VDialog',{attrs:{"loading":_vm.loadingBindPhone,"width":"400px","title":"填写信息"},on:{"submit":_vm.submitBindPhone},model:{value:(_vm.showInfoForm),callback:function ($$v) {_vm.showInfoForm=$$v},expression:"showInfoForm"}},[_c('ElInput',{attrs:{"type":"number","placeholder":"短信验证码","auto-complete":"off"},model:{value:(_vm.authCode),callback:function ($$v) {_vm.authCode=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"authCode"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('ElInput',{attrs:{"type":"text","placeholder":"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"password"}})],1),_vm._ssrNode(" "),_c('VDialog',{attrs:{"loading":_vm.loadingBindBilibili,"title":"绑定bilibili账号"},on:{"submit":_vm.submitBindBilibili},model:{value:(_vm.showBiliForm),callback:function ($$v) {_vm.showBiliForm=$$v},expression:"showBiliForm"}},[_c('div',{staticClass:"bind-bili-dialog"},[_c('p',[_c('i',[_vm._v("1. 访问 ")]),_c('a',{attrs:{"href":"https://space.bilibili.com/279662469/","target":"_blank"}},[_vm._v("calibur官方账号")])]),_vm._v(" "),_c('p',[_vm._v("2. 关注该账号后，点击「发消息」按钮")]),_vm._v(" "),_c('p',[_c('i',[_vm._v("3. 在新打开的聊天窗页面，发送：")]),_c('span',[_vm._v("我要认证calibur")])]),_vm._v(" "),_c('p',[_vm._v("4. 把你在 bilibili 的用户 uid 填入下面的输入框中（在个人空间页面的右下角可以看到）")]),_vm._v(" "),_c('p',[_c('ElInput',{attrs:{"type":"text","placeholder":"你自己的B站账号uid","auto-complete":"off"},model:{value:(_vm.biliUid),callback:function ($$v) {_vm.biliUid=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"biliUid"}})],1),_vm._v(" "),_c('p',[_vm._v("5. 点击「确定」按钮，等待验证完成")])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_slug/setting/oauth2.vue?vue&type=template&id=7b44a337&

// EXTERNAL MODULE: ./api/userApi.js
var userApi = __webpack_require__(2);

// EXTERNAL MODULE: ./assets/js/parseToken.js
var parseToken = __webpack_require__(17);

// EXTERNAL MODULE: ./components/common/Dialog.vue + 4 modules
var Dialog = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/setting/oauth2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var oauth2vue_type_script_lang_js_ = ({
  name: 'UserAuthSetting',
  components: {
    VDialog: Dialog["a" /* default */]
  },

  data() {
    return {
      phone: '',
      password: '',
      authCode: '',
      timeout: 0,
      showInfoForm: false,
      showBiliForm: false,
      loadingBindPhone: false,
      biliUid: '',
      loadingBindBilibili: false
    };
  },

  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },

    user() {
      return this.$store.state.user;
    }

  },
  methods: {
    bindUserQQ() {
      if (this.user.providers.bind_qq) {
        return;
      }

      window.location.href = `https://api.calibur.tv/callback/oauth2/qq?from=bind&token=${Object(parseToken["a" /* default */])()}&redirect=${encodeURIComponent(window.location.href)}`;
    },

    bindUserWechat() {
      if (this.user.providers.bind_wechat) {
        return;
      }

      window.location.href = `https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=${Object(parseToken["a" /* default */])()}&redirect=${encodeURIComponent(window.location.href)}`;
    },

    bindUserPhone() {
      if (this.user.providers.bind_phone) {
        return;
      }

      if (this.timeout) {
        this.showInfoForm = true;
        return;
      }

      this.$prompt('请输入要绑定的手机号（11位）', '绑定手机', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^(0|86|17951)?(1)[0-9]{10}$/,
        inputErrorMessage: '请输入正确的手机号码'
      }).then(async ({
        value
      }) => {
        this.phone = value;

        try {
          await Object(userApi["i" /* sendMessage */])(this, {
            type: 'bind_phone',
            phone_number: value
          });
          this.showInfoForm = true;
        } catch (err) {
          this.$toast.error(err.message);
        } finally {
          this.timeout = 60;
          const timer = setInterval(() => {
            if (! --this.timeout) {
              clearInterval(timer);
            }
          }, 1000);
        }
      }).catch(() => {});
    },

    bindUserBilibili() {
      if (this.user.providers.bind_bilibili) {
        return;
      }

      this.showBiliForm = true;
    },

    submitBindBilibili() {
      if (!this.biliUid || this.loadingBindBilibili) {
        this.$toast.info('请先填写uid');
        return;
      }

      this.loadingBindBilibili = true;
      this.$toast.success('验证中，请稍候...');
      this.$axios.$post('v1/door/oauth_channel', {
        channel: 'bilibili',
        id: this.biliUid
      }).then(result => {
        if (!result) {
          this.$toast.info('认证失败，请填写正确的信息');
          this.loadingBindBilibili = false;
          return;
        }

        this.$toast.success('认证成功！').then(() => {
          window.location.reload();
        });
      }).catch(err => {
        this.$toast.error(err.message);
        this.loadingBindBilibili = false;
      });
    },

    async submitBindPhone() {
      if (this.user.providers.bind_phone) {
        return;
      }

      if (this.authCode.length !== 6) {
        return this.$toast.warn('请输入正确的短信验证码');
      }

      if (this.password.length < 6) {
        return this.$toast.warn('密码不能小于6位');
      }

      if (this.password.length > 16) {
        return this.$toast.warn('密码不能大于16位');
      }

      if (this.loadingBindPhone) {
        return;
      }

      this.loadingBindPhone = true;

      try {
        await Object(userApi["a" /* bindPhone */])(this, {
          slug: this.user.slug,
          phone: this.phone,
          password: this.password,
          authCode: this.authCode
        });
        this.$toast.success('手机号绑定成功').then(() => {
          this.showInfoForm = false;
          window.location.reload();
        });
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.loadingBindPhone = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/user/_slug/setting/oauth2.vue?vue&type=script&lang=js&
 /* harmony default export */ var setting_oauth2vue_type_script_lang_js_ = (oauth2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/_slug/setting/oauth2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  setting_oauth2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5743c3cf"
  
)

/* harmony default export */ var oauth2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=oauth2.js.map