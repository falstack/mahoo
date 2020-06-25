exports.ids = [13];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api_imageApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      uploadHeaders: {
        key: '',
        token: ''
      },
      uploadConfig: {
        max: 5
      },
      uploadImageLimit: 20,
      imageUploadAccept: ['image/jpeg', 'image/png', 'image/jpg'].join(', '),
      imageUploadAction: 'https://upload.qiniup.com',
      imagePrefix: 'https://m1.calibur.tv/',
      getUpTokenTimer: 0,
      uploadPending: 0,
      uploadImageTotal: 0,
      uploadImageList: []
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.user;
    },

    isAuth() {
      return this.$store.state.isAuth;
    }

  },

  mounted() {
    if (this.isAuth) {
      this.initUpToken();
    } else {
      this.$channel.$when('user-signed', () => {
        this.initUpToken();
      });
    }
  },

  beforeDestroy() {
    this.getUpTokenTimer && clearInterval(this.getUpTokenTimer);
  },

  methods: {
    initUpToken() {
      this.getUpToken();
      this.getUpTokenTimer = setInterval(() => {
        this.getUpToken();
      }, 1000 * 60 * 30);
    },

    async getUpToken() {
      let token = this.$cookie.get('UPLOAD-TOKEN');

      if (token) {
        this.uploadHeaders.token = this.$cookie.get('UPLOAD-TOKEN');
        return;
      }

      token = await Object(_api_imageApi__WEBPACK_IMPORTED_MODULE_0__[/* getUpToken */ "a"])(this);
      this.uploadHeaders.token = token;
      this.$cookie.set('UPLOAD-TOKEN', token, {
        expires: new Date(new Date().getTime() + 3000000)
      });
    },

    handleImageUploadError(err, file) {
      this.uploadImageList.forEach((item, index) => {
        if (item.uid === file.uid) {
          this.uploadPending--;
          this.uploadImageList.splice(index, 1);
          console.log(err); // eslint-disable-line
        }
      });
      this.$toast.error(`图片：${file.name} 上传失败`);
    },

    handleImageUploadRemove(file) {
      this.uploadImageList.forEach((item, index) => {
        if (item.uid === file.uid) {
          this.uploadImageList.splice(index, 1);
          this.uploadImageTotal--;
        }
      });
    },

    handleImageUploadSuccess(res, file) {
      this.uploadImageList.forEach((item, index) => {
        if (item.uid === file.uid) {
          this.uploadImageList[index] = Object.assign(item, {
            data: res.data,
            status: 'success',
            url: this.$resizeImage(`${this.imagePrefix}${res.data.url}`, {
              width: 100
            })
          });
        }
      });
      this.uploadImageTotal++;
      this.uploadPending--;
    },

    handleImageUploadExceed() {
      this.$toast.info(`最多还能上传${this.uploadImageLimit - this.uploadImageTotal}张图片`);
    },

    handleImageUploadBefore(file) {
      if (!this.isAuth) {
        this.$channel.$emit('sign-in');
        return false;
      }

      if (!this.imageUploadAccept.split(', ').includes(file.type)) {
        this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g, '').replace(/, /g, '、')}格式的图片`);
        return false;
      }

      if (this.uploadConfig.max && this.uploadConfig.max < file.size / 1024 / 1024) {
        this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`);
        return false;
      }

      const createFileName = ({
        slug,
        file
      }) => {
        return `${slug}/${new Date().getTime()}-${Math.random().toString(36).substring(3, 6)}.${file.type.split('/').pop()}`;
      };

      this.uploadHeaders.key = createFileName({
        slug: this.currentUser.slug,
        file
      });
      this.uploadImageList.push({
        name: file.name,
        percentage: 0,
        raw: file,
        size: file.size,
        status: 'uploading',
        errMsg: '',
        uid: file.uid
      });
      this.uploadPending++;
      return true;
    },

    resetUploaderStatus() {
      this.uploadImageList = [];
      this.uploadImageTotal = 0;
      this.uploadPending = 0;
    }

  }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCaptcha */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUpToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uploadToQiniu; });
const getCaptcha = ctx => ctx.$axios.$get(`v1/image/captcha?t=${Date.now()}-${Math.random().toString(36).substring(3, 6)}`);
const getUpToken = ctx => ctx.$axios.$get('v1/image/uptoken');
const uploadToQiniu = (ctx, formData) => ctx.$axios.$post('https://up.qbox.me', formData, {
  'Content-Type': 'multipart/form-data'
});

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/setting/basic.vue?vue&type=template&id=5970cd8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"user-basic-setting"}},[(_vm.isAuth)?_c('ElForm',{ref:"form",attrs:{"disabled":_vm.submitting,"model":_vm.user,"rules":_vm.rule,"label-position":"top"}},[_c('ElFormItem',{attrs:{"label":"头像"}},[_c('div',{staticClass:"avatar-field"},[_c('img',{staticClass:"avatar",attrs:{"src":_vm.$resizeImage(_vm.user.avatar, { width: 100 })}}),_vm._v(" "),_c('ElUpload',{attrs:{"show-file-list":false,"action":_vm.imageUploadAction,"limit":_vm.uploadImageLimit,"data":_vm.uploadHeaders,"accept":_vm.imageUploadAccept,"before-upload":_vm.handleImageUploadBefore,"on-success":_vm.avatarUploadSuccess,"on-error":_vm.handleImageUploadError}},[_c('ElButton',{attrs:{"loading":!!_vm.uploadPending,"type":"success","plain":"","round":"","size":"mini"}},[_vm._v("\n            "+_vm._s(_vm.uploadPending ? '图片上传中...' : '点击更换头像')+"\n          ")])],1)],1)]),_vm._v(" "),_c('ElFormItem',{attrs:{"label":"背景"}},[_c('div',{staticClass:"banner-field"},[_c('div',{staticClass:"banner-wrap"},[_c('img',{staticClass:"banner",attrs:{"src":_vm.$resizeImage(_vm.user.banner, { height: 100, mode: 2 })}})]),_vm._v(" "),_c('ElUpload',{attrs:{"show-file-list":false,"action":_vm.imageUploadAction,"limit":_vm.uploadImageLimit,"data":_vm.uploadHeaders,"accept":_vm.imageUploadAccept,"before-upload":_vm.handleImageUploadBefore,"on-success":_vm.bannerUploadSuccess,"on-error":_vm.handleImageUploadError}},[_c('ElButton',{attrs:{"loading":!!_vm.uploadPending,"type":"success","plain":"","round":"","size":"mini"}},[_vm._v("\n            "+_vm._s(_vm.uploadPending ? '图片上传中...' : '点击更换背景')+"\n          ")])],1)],1)]),_vm._v(" "),_c('ElFormItem',{attrs:{"label":"昵称","prop":"nickname"}},[_c('ElInput',{model:{value:(_vm.nickname),callback:function ($$v) {_vm.nickname=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"nickname"}})],1),_vm._v(" "),_c('ElFormItem',{attrs:{"label":"生日","prop":"birthday"}},[_c('ElDatePicker',{attrs:{"editable":false,"clearable":false,"type":"date","format":"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd","placeholder":"选择生日"},model:{value:(_vm.birthday),callback:function ($$v) {_vm.birthday=$$v},expression:"birthday"}}),_vm._v(" "),_c('ElSwitch',{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:(_vm.birthSecret),callback:function ($$v) {_vm.birthSecret=$$v},expression:"birthSecret"}})],1),_vm._v(" "),_c('ElFormItem',{attrs:{"label":"性别"}},[_c('ElRadioGroup',{model:{value:(_vm.sex),callback:function ($$v) {_vm.sex=$$v},expression:"sex"}},[_c('ElRadio',{attrs:{"label":1}},[_vm._v("\n          男\n        ")]),_vm._v(" "),_c('ElRadio',{attrs:{"label":2}},[_vm._v("\n          女\n        ")])],1),_vm._v(" "),_c('ElSwitch',{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:(_vm.sexSecret),callback:function ($$v) {_vm.sexSecret=$$v},expression:"sexSecret"}})],1),_vm._v(" "),_c('ElFormItem',{attrs:{"label":"签名","prop":"signature"}},[_c('ElInput',{attrs:{"rows":5,"type":"textarea","placeholder":"留下自己想说的话","maxlength":"60","show-word-limit":"","resize":"none"},model:{value:(_vm.signature),callback:function ($$v) {_vm.signature=$$v},expression:"signature"}})],1),_vm._v(" "),_c('ElFormItem',[_c('ElButton',{attrs:{"loading":_vm.submitting,"type":"primary"},on:{"click":_vm.submit}},[_vm._v("\n        提交\n      ")])],1)],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_slug/setting/basic.vue?vue&type=template&id=5970cd8c&

// EXTERNAL MODULE: external "element-ui/lib/upload"
var upload_ = __webpack_require__(66);
var upload_default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: external "element-ui/lib/date-picker"
var date_picker_ = __webpack_require__(83);
var date_picker_default = /*#__PURE__*/__webpack_require__.n(date_picker_);

// EXTERNAL MODULE: external "element-ui/lib/radio-group"
var radio_group_ = __webpack_require__(84);
var radio_group_default = /*#__PURE__*/__webpack_require__.n(radio_group_);

// EXTERNAL MODULE: external "element-ui/lib/radio"
var radio_ = __webpack_require__(85);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// EXTERNAL MODULE: external "element-ui/lib/switch"
var switch_ = __webpack_require__(86);
var switch_default = /*#__PURE__*/__webpack_require__.n(switch_);

// EXTERNAL MODULE: ./api/userApi.js
var userApi = __webpack_require__(2);

// EXTERNAL MODULE: ./mixins/upload.js
var upload = __webpack_require__(124);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/setting/basic.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var basicvue_type_script_lang_js_ = ({
  name: 'UserBasicSetting',
  components: {
    ElSwitch: switch_default.a,
    ElRadio: radio_default.a,
    ElRadioGroup: radio_group_default.a,
    ElDatePicker: date_picker_default.a,
    ElUpload: upload_default.a
  },
  mixins: [upload["a" /* default */]],

  data() {
    const validateNickname = (rule, value, callback) => {
      const length = value.replace(/([\u4E00-\u9FA5])/g, 'aa').trim().length;

      if (!length) {
        callback(new Error('昵称不能为空'));
      } else if (length < 2) {
        callback(new Error('昵称至少为2个字符'));
      } else if (length > 14) {
        callback(new Error('昵称不能超过14个字符'));
      }

      callback();
    };

    const validateSignature = (rule, value, callback) => {
      if (value.length > 150) {
        callback(new Error('签名最多 150 个字'));
      }

      callback();
    };

    const validateBirthday = (rule, value, callback) => {
      if (!value) {
        return callback();
      }

      const setTs = new Date(value).getTime();
      const curTs = Date.now();

      if (setTs >= curTs) {
        callback(new Error('。。。'));
      } else if (curTs - setTs < 315360000000) {
        callback(new Error('你应该大于10岁了吧...?'));
      } else if (curTs - setTs > 1261440000000) {
        callback(new Error('你应该小于40岁的吧...?'));
      }

      callback();
    };

    return {
      submitting: false,
      rule: {
        nickname: [{
          validator: validateNickname,
          trigger: 'submit'
        }],
        signature: [{
          validator: validateSignature,
          trigger: 'submit'
        }],
        birthday: [{
          validator: validateBirthday,
          trigger: 'submit'
        }]
      }
    };
  },

  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },

    user() {
      return this.$store.state.user;
    },

    nickname: {
      get() {
        return this.user.nickname;
      },

      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'nickname',
          value
        });
      }

    },
    birthday: {
      get() {
        return this.user.birthday;
      },

      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'birthday',
          value
        });
      }

    },
    birthSecret: {
      get() {
        return this.user.birth_secret;
      },

      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'birth_secret',
          value
        });
      }

    },
    sex: {
      get() {
        return this.user.sex;
      },

      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'sex',
          value
        });
      }

    },
    sexSecret: {
      get() {
        return this.user.sex_secret;
      },

      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'sex_secret',
          value
        });
      }

    },
    signature: {
      get() {
        return this.user.signature;
      },

      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'signature',
          value: value.trim()
        });
      }

    }
  },
  methods: {
    avatarUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file);
      this.$store.commit('UPDATE_USER_INFO', {
        key: 'avatar',
        value: res.data.url
      });
    },

    bannerUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file);
      this.$store.commit('UPDATE_USER_INFO', {
        key: 'banner',
        value: res.data.url
      });
    },

    submit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          if (this.submitting) {
            return;
          }

          this.submitting = true;

          try {
            await Object(userApi["j" /* settingProfile */])(this, {
              nickname: this.nickname,
              signature: this.signature,
              birthday: new Date(this.$utils.adjustDate(this.birthday)).getTime() / 1000,
              birth_secret: this.birthSecret,
              sex_secret: this.sexSecret,
              sex: this.sex,
              avatar: this.user.avatar,
              banner: this.user.banner
            });
            this.$toast.success('设置成功');
          } catch (err) {
            this.$toast.error(err.message);
          } finally {
            this.submitting = false;
          }
        } else {
          return false;
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/user/_slug/setting/basic.vue?vue&type=script&lang=js&
 /* harmony default export */ var setting_basicvue_type_script_lang_js_ = (basicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/_slug/setting/basic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(244)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  setting_basicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "408e860a"
  
)

/* harmony default export */ var basic = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=basic.js.map