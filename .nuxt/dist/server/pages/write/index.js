exports.ids = [24];
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api_imageApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);

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

/***/ 126:
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

/***/ 135:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 214:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 215:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 217:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 218:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof window !== 'undefined') {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      let el = this;

      if (!document.documentElement.contains(el)) {
        return null;
      }

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }
}

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/write/index.vue?vue&type=template&id=23c0ee88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wander"}},[_vm._ssrNode("<div class=\"wrap\">","</div>",[_vm._ssrNode("<div class=\"banner\">","</div>",[_c('ElUpload',{staticClass:"uploader",attrs:{"drag":"","action":_vm.imageUploadAction,"accept":_vm.imageUploadAccept,"data":_vm.uploadHeaders,"before-upload":_vm.handleImageUploadBefore,"on-success":_vm.customImageUploadSuccess,"on-error":_vm.handleImageUploadError}},[_c('div',{staticClass:"el-upload-tip",attrs:{"slot":"tip"},slot:"tip"},[_c('i',{staticClass:"el-icon-picture"}),_vm._v(" "),_c('div',[_vm._v("请添加封面图（选填）")]),_vm._v(" "),_c('p',[_vm._v("支持8MB内的JPG／JPEG／PNG格式的高清图片"),_c('br'),_vm._v("（建议大于960*540像素）")])])]),_vm._ssrNode(" "+((_vm.title && _vm.title.banner)?("<div class=\"image\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.$resizeImage(_vm.title.banner.url, { width: 660 }))) }, null))+"></div> <div class=\"tool\"><i class=\"el-icon-delete\"></i></div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"title\">","</div>",[_c('ElInput',{attrs:{"show-word-limit":true,"autosize":{ minRows: 1, maxRows: 2 },"type":"textarea","resize":"none","placeholder":"请输入标题（建议30字以内）","maxlength":"40"},model:{value:(_vm.title.text),callback:function ($$v) {_vm.$set(_vm.title, "text", $$v)},expression:"title.text"}})],1),_vm._ssrNode(" "),_c('Editor',{attrs:{"slug":_vm.slug,"time":_vm.last_edit_at},on:{"save":_vm.onEditorSave},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}}),_vm._ssrNode(" "),_c('ElForm',{staticClass:"footer",attrs:{"label-position":"top","label-width":"80px"}},[_c('ElFormItem',{staticClass:"button-wrap"},[(_vm.slug)?[_c('ElButton',{attrs:{"loading":_vm.loading,"type":"success","round":""},on:{"click":function($event){return _vm.actionUpdate(true)}}},[_vm._v("\n            "+_vm._s(_vm.published_at ? '发布更新' : '更新并发布')+"\n          ")]),_vm._v(" "),(!_vm.published_at)?_c('ElButton',{attrs:{"loading":_vm.loading,"round":"","plain":"","type":"warning"},on:{"click":function($event){return _vm.actionUpdate(false)}}},[_vm._v("\n            存草稿\n          ")]):_vm._e(),_vm._v(" "),_c('ElButton',{attrs:{"loading":_vm.loading,"type":"primary","round":"","plain":""},on:{"click":_vm.actionRedo}},[_vm._v("\n            撤销修改\n          ")])]:[_c('ElButton',{attrs:{"loading":_vm.loading,"type":"success","round":""},on:{"click":function($event){return _vm.actionCreate(true)}}},[_vm._v("\n            发表文章\n          ")]),_vm._v(" "),_c('ElButton',{attrs:{"loading":_vm.loading,"round":"","plain":"","type":"warning"},on:{"click":function($event){return _vm.actionCreate(false)}}},[_vm._v("\n            存草稿\n          ")]),_vm._v(" "),_c('ElButton',{attrs:{"loading":_vm.loading,"type":"primary","round":"","plain":""},on:{"click":_vm.actionRedo}},[_vm._v("\n            删除文章\n          ")])]],2)],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/write/index.vue?vue&type=template&id=23c0ee88&

// EXTERNAL MODULE: external "element-ui/lib/upload"
var upload_ = __webpack_require__(66);
var upload_default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: ./mixins/mustSign.js
var mustSign = __webpack_require__(105);

// EXTERNAL MODULE: ./mixins/upload.js
var upload = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/index.vue?vue&type=template&id=c0958644&
var editorvue_type_template_id_c0958644_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-wrap"},[_vm._ssrNode("<div id=\"codex-editor\" class=\"mousetrap\"></div>")])}
var editorvue_type_template_id_c0958644_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/index.vue?vue&type=template&id=c0958644&

// EXTERNAL MODULE: ./api/imageApi.js
var imageApi = __webpack_require__(126);

// EXTERNAL MODULE: ./components/editor/plugin/header/index.scss
var header = __webpack_require__(214);

// CONCATENATED MODULE: ./components/editor/plugin/header/index.js

/**
 * @typedef {Object} HeaderData
 * @description Tool's input and output data format
 * @property {String} text — Header's content
 * @property {number} level - Header's level from 1 to 3
 */

/**
 * @typedef {Object} HeaderConfig
 * @description Tool's config from Editor
 * @property {string} placeholder — Block's placeholder
 */

/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

class Header {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: HeaderData, config: HeaderConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({
    data,
    config,
    api
  }) {
    this.api = api;
    /**
     * Styles
     * @type {Object}
     */

    this._CSS = {
      block: this.api.styles.block,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
      wrapper: 'ce-header'
    };
    /**
     * Tool's settings passed from Editor
     * @type {HeaderConfig}
     * @private
     */

    this._settings = config;
    /**
     * Block's data
     * @type {HeaderData}
     * @private
     */

    this._data = this.normalizeData(data);
    /**
     * List of settings buttons
     * @type {HTMLElement[]}
     */

    this.settingsButtons = [];
    /**
     * Main Block wrapper
     * @type {HTMLElement}
     * @private
     */

    this._element = this.getTag();
  }
  /**
   * Normalize input data
   * @param {HeaderData} data
   * @return {HeaderData}
   * @private
   */


  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }

    newData.text = data.text || '';
    newData.level = parseInt(data.level) || this.defaultLevel.number;
    return newData;
  }
  /**
   * Return Tool's view
   * @returns {HTMLHeadingElement}
   * @public
   */


  render() {
    return this._element;
  }
  /**
   * Create Block's settings block
   *
   * @return {HTMLElement}
   */


  renderSettings() {
    const holder = document.createElement('DIV');
    /** Add type selectors */

    this.levels.forEach(level => {
      const selectTypeButton = document.createElement('SPAN');
      selectTypeButton.classList.add(this._CSS.settingsButton);
      /**
       * Highlight current level button
       */

      if (this.currentLevel.number === level.number) {
        selectTypeButton.classList.add(this._CSS.settingsButtonActive);
      }
      /**
       * Add SVG icon
       */


      selectTypeButton.innerHTML = level.svg;
      /**
       * Save level to its button
       */

      selectTypeButton.dataset.level = level.number;
      /**
       * Set up click handler
       */

      selectTypeButton.addEventListener('click', () => {
        this.setLevel(level.number);
      });
      /**
       * Append settings button to holder
       */

      holder.appendChild(selectTypeButton);
      /**
       * Save settings buttons
       */

      this.settingsButtons.push(selectTypeButton);
    });
    return holder;
  }
  /**
   * Callback for Block's settings buttons
   * @param level
   */


  setLevel(level) {
    this.data = {
      level,
      text: this.data.text
    };
    /**
     * Highlight button by selected level
     */

    this.settingsButtons.forEach(button => {
      button.classList.toggle(this._CSS.settingsButtonActive, parseInt(button.dataset.level) === level);
    });
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   * @param {HeaderData} data
   * @public
   */


  merge(data) {
    const newData = {
      text: this.data.text + data.text,
      level: this.data.level
    };
    this.data = newData;
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */


  validate(blockData) {
    return blockData.text.trim() !== '';
  }
  /**
   * Extract Tool's data from the view
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */


  save(toolsContent) {
    return {
      text: toolsContent.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Allow Header to be converted to/from other blocks
   */


  static get conversionConfig() {
    return {
      export: 'text',
      // use 'text' property for other blocks
      import: 'text' // fill 'text' property from other block's export string

    };
  }
  /**
   * Sanitizer Rules
   */


  static get sanitize() {
    return {
      level: {}
    };
  }
  /**
   * Get current Tools`s data
   * @returns {HeaderData} Current data
   * @private
   */


  get data() {
    this._data.text = this._element.innerHTML;
    this._data.level = this.currentLevel.number;
    return this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */


  set data(data) {
    this._data = this.normalizeData(data);
    /**
     * If level is set and block in DOM
     * then replace it to a new block
     */

    if (data.level !== undefined && this._element.parentNode) {
      /**
       * Create a new tag
       * @type {HTMLHeadingElement}
       */
      const newHeader = this.getTag();
      /**
       * Save Block's content
       */

      newHeader.innerHTML = this._element.innerHTML;
      /**
       * Replace blocks
       */

      this._element.parentNode.replaceChild(newHeader, this._element);
      /**
       * Save new block to private variable
       * @type {HTMLHeadingElement}
       * @private
       */


      this._element = newHeader;
    }
    /**
     * If data.text was passed then update block's content
     */


    if (data.text !== undefined) {
      this._element.innerHTML = this._data.text || '';
    }
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   * @return {HTMLElement}
   */


  getTag() {
    /**
     * Create element for current Block's level
     */
    const tag = document.createElement(this.currentLevel.tag);
    /**
     * Add text to block
     */

    tag.innerHTML = this._data.text || '';
    /**
     * Add styles class
     */

    tag.classList.add(this._CSS.wrapper);
    /**
     * Make tag editable
     */

    tag.contentEditable = 'true';
    /**
     * Add Placeholder
     */

    tag.dataset.placeholder = this._settings.placeholder || '';
    return tag;
  }
  /**
   * Get current level
   * @return {level}
   */


  get currentLevel() {
    let level = this.levels.find(levelItem => levelItem.number === this._data.level);

    if (!level) {
      level = this.defaultLevel;
    }

    return level;
  }
  /**
   * Return default level
   * @returns {level}
   */


  get defaultLevel() {
    /**
     * Use H2 as default header
     */
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag correspondes with level number
   * @property {string} svg - icon
   */

  /**
   * Available header levels
   * @return {level[]}
   */


  get levels() {
    return [{
      number: 1,
      tag: 'H1',
      svg: '<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'
    }, {
      number: 2,
      tag: 'H2',
      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'
    }, {
      number: 3,
      tag: 'H3',
      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'
    }, {
      number: 4,
      tag: 'H4',
      svg: '<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'
    }, {
      number: 5,
      tag: 'H5',
      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'
    }, {
      number: 6,
      tag: 'H6',
      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'
    }];
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */


  onPaste(event) {
    const content = event.detail.data;
    /**
     * Define default level value
     * @type {number}
     */

    let level = 2;

    switch (content.tagName) {
      case 'H1':
        level = 1;
        break;

      /** H2 is a default level */

      case 'H3':
        level = 3;
        break;

      case 'H4':
        level = 4;
        break;

      case 'H5':
        level = 5;
        break;

      case 'H6':
        level = 6;
        break;
    }

    this.data = {
      level,
      text: content.innerHTML
    };
  }
  /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */


  static get pasteConfig() {
    return {
      tags: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
    };
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */


  static get toolbox() {
    return {
      icon: '<svg width="11" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/></svg>',
      title: '标题'
    };
  }

}
// EXTERNAL MODULE: ./components/editor/plugin/baidu/index.scss
var baidu = __webpack_require__(215);

// CONCATENATED MODULE: ./components/editor/plugin/baidu/index.js

class Baidu {
  constructor({
    data
  }) {
    this.data = data;
  }

  static get toolbox() {
    return {
      title: '百度云',
      icon: '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 298 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M135.2 75.6c-11 2.9-20.1 9.5-26.5 19.1-5.1 7.6-7.4 14.6-8.4 24.5-.6 7.4.2 6.7-9.8 8.4-15.2 2.6-30.5 16.1-35.6 31.2-1.8 5.4-2 8.1-1.7 17.5.4 10.6.6 11.6 4.2 18.6 6.5 12.8 17.1 20.9 31.9 24.8 12.1 3.1 26.8.2 37.9-7.5 2.4-1.6 12.2-11.9 21.8-22.8 32.9-37.3 35.7-39.7 46.5-39.7 12.9.1 21.4 8.4 24 23.6.3 2.2 1.1 4.9 1.6 6.1 2.3 5.1 11.4 7.3 16.4 4 12.6-8.3-.4-41.6-19.8-50.8-5.8-2.7-16.1-5.6-20.1-5.6-2.4 0-2.6-.3-2.6-4.4 0-21.7-15.1-41.8-35.4-47.2-6.5-1.7-17.6-1.7-24.4.2zm19.4 21.9c5.7 1.7 12.8 8 15.2 13.5 1.9 4.5 1.8 14.5-.2 19.1-3.7 8.7-12.1 13.9-22.4 13.9-6.2 0-7.5-.4-11.8-3.3-7.4-4.9-10.7-10.4-11.2-18.3-.6-8.7 1.5-14.1 7.8-19.7 7.3-6.6 13.4-8 22.6-5.2zm-44.7 54.4c5 2.6 10.7 9.1 12 13.8 4.6 16.4-5.9 31.5-21.8 31.5-13.6.1-24.1-10-24.1-23.2 0-9.3 5.7-18.6 13.5-22.1 5.5-2.5 15.4-2.5 20.4 0zM225 200.7c-3.9 2.7-4.9 4.5-5 9 0 3.3.6 5 2.9 7.5 2.6 2.9 3.5 3.3 8.1 3.3s5.5-.4 8.1-3.3c6.4-7.2 2.1-18.2-7.3-18.2-2.5 0-5.4.7-6.8 1.7z"/></g></svg>'
    };
  }

  render() {
    const outerWrap = document.createElement('div');
    outerWrap.classList.add('baidu-resource');
    const iconArea = document.createElement('i');
    iconArea.classList.add('iconfont', 'ic-baidu-cloud', 'baidu-resource-icon');
    outerWrap.appendChild(iconArea);
    const wrapper = document.createElement('div');
    wrapper.classList.add('baidu-resource-wrap');
    outerWrap.appendChild(wrapper);
    const urlInput = document.createElement('input');
    urlInput.classList.add('baidu-resource-url');
    urlInput.placeholder = '粘贴资源链接到这里（仅支持百度云盘：pan.baidu.com）';
    urlInput.type = 'text';
    urlInput.value = this.data && this.data.url ? this.data.url : '';
    wrapper.appendChild(urlInput);
    const pwdInput = document.createElement('input');
    pwdInput.classList.add('baidu-resource-password');
    pwdInput.placeholder = '填写资源的密码（4~6位）';
    pwdInput.type = 'text';
    pwdInput.value = this.data && this.data.password ? this.data.password : '';
    wrapper.appendChild(pwdInput);
    const roleContainer = document.createElement('div');
    roleContainer.classList.add('baidu-resource-role-wrap');
    const radioName = `${Math.random().toString(36).substring(3, 6)}`;
    const roleValue = this.data && this.data.visit_type ? this.data.visit_type : 0;
    const roleIntro = document.createElement('span');
    roleIntro.textContent = '是否需要投食才能看到密码：';
    roleContainer.appendChild(roleIntro);
    const publicRole = document.createElement('input');
    publicRole.classList.add('baidu-resource-role-public');
    publicRole.id = `baidu-resource-role-public-${radioName}`;
    publicRole.name = radioName;
    publicRole.type = 'radio';
    publicRole.value = 0;
    publicRole.checked = roleValue === 0;
    roleContainer.appendChild(publicRole);
    const publicLabel = document.createElement('label');
    publicLabel.setAttribute('for', `baidu-resource-role-public-${radioName}`);
    publicLabel.textContent = '否';
    publicLabel.classList.add('baidu-resource-label');
    roleContainer.appendChild(publicLabel);
    const privateRole = document.createElement('input');
    privateRole.classList.add('baidu-resource-role-private');
    privateRole.id = `baidu-resource-role-private-${radioName}`;
    privateRole.type = 'radio';
    privateRole.name = radioName;
    privateRole.value = 1;
    privateRole.checked = roleValue === 1;
    roleContainer.appendChild(privateRole);
    const privateLabel = document.createElement('label');
    privateLabel.setAttribute('for', `baidu-resource-role-private-${radioName}`);
    privateLabel.textContent = '是';
    privateLabel.classList.add('baidu-resource-label');
    roleContainer.appendChild(privateLabel);
    wrapper.appendChild(roleContainer);
    return outerWrap;
  }

  save(blockContent) {
    const urlInput = blockContent.querySelector('.baidu-resource-url');
    const pwdInput = blockContent.querySelector('.baidu-resource-password');
    const publicInput = blockContent.querySelector('.baidu-resource-role-public');
    let url = urlInput.value.trim();

    if (!/^https?:\/\//.test(url)) {
      url = 'https://' + url;
    }

    return {
      url,
      password: pwdInput.value.trim(),
      visit_type: publicInput.checked ? 0 : 1
    };
  }

  validate(savedData) {
    if (!savedData.url || !savedData.password) {
      return false;
    }

    return !(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(savedData.url) || !/^[\w|\W]{4,6}$/.test(savedData.password));
  }

}
// EXTERNAL MODULE: ./components/editor/plugin/delimiter/index.scss
var delimiter = __webpack_require__(216);

// CONCATENATED MODULE: ./components/editor/plugin/delimiter/index.js
/**
 * Build styles
 */

/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

/**
 * @typedef {Object} DelimiterData
 * @description Tool's input and output data format
 */

class Delimiter {
  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return true;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */


  constructor({
    data,
    config,
    api
  }) {
    this.api = api;
    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-delimiter'
    };
    this._data = {};
    this._element = this.drawView();
    this.data = data;
  }
  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */


  drawView() {
    const div = document.createElement('DIV');
    div.classList.add(this._CSS.wrapper, this._CSS.block);
    return div;
  }
  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */


  render() {
    return this._element;
  }
  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */


  save(toolsContent) {
    return {};
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */


  static get toolbox() {
    return {
      icon: '<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>',
      title: '分割线'
    };
  }

}
// EXTERNAL MODULE: ./components/editor/plugin/list/index.scss
var list = __webpack_require__(217);

// CONCATENATED MODULE: ./components/editor/plugin/list/index.js
/**
 * Build styles
 */

/**
 * @typedef {object} ListData
 * @property {string} style - can be ordered or unordered
 * @property {array} items - li elements
 */

/**
 * List Tool for the Editor.js 2.0
 */

class List {
  /**
   * Allow to use native Enter behaviour
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */


  static get toolbox() {
    return {
      icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
      title: '列表'
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: ListData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */


  constructor({
    data,
    config,
    api
  }) {
    /**
     * HTML nodes
     * @private
     */
    this._elements = {
      wrapper: null
    };
    this.settings = [{
      name: 'unordered',
      title: 'Unordered',
      icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
      default: false
    }, {
      name: 'ordered',
      title: 'Ordered',
      icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',
      default: true
    }];
    /**
     * Tool's data
     * @type {ListData}
     * */

    this._data = {
      style: this.settings.find(tune => tune.default === true).name,
      items: []
    };
    this.api = api;
    this.data = data;
  }
  /**
   * Returns list tag with items
   * @return {Element}
   * @public
   */


  render() {
    const style = this._data.style === 'ordered' ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    this._elements.wrapper = this._make('ul', [this.CSS.baseBlock, this.CSS.wrapper, style], {
      contentEditable: true
    }); // fill with data

    if (this._data.items.length) {
      this._data.items.forEach(item => {
        this._elements.wrapper.appendChild(this._make('li', this.CSS.item, {
          innerHTML: item
        }));
      });
    } else {
      this._elements.wrapper.appendChild(this._make('li', this.CSS.item));
    } // detect keydown on the last item to escape List


    this._elements.wrapper.addEventListener('keydown', event => {
      const [ENTER, BACKSPACE] = [13, 8]; // key codes

      switch (event.keyCode) {
        case ENTER:
          this.getOutofList(event);
          break;

        case BACKSPACE:
          this.backspace(event);
          break;
      }
    }, false);

    return this._elements.wrapper;
  }
  /**
   * @return {ListData}
   * @public
   */


  save() {
    return this.data;
  }
  /**
   * Allow List Tool to be converted to/from other block
   */


  static get conversionConfig() {
    return {
      /**
       * To create exported string from list, concatenate items by dot-symbol.
       * @param {ListData} data
       * @return {string}
       */
      export: data => {
        return data.items.join('. ');
      },

      /**
       * To create a list from other block's string, just put it at the first item
       * @param string
       * @return {ListData}
       */
      import: string => {
        return {
          items: [string],
          style: 'unordered'
        };
      }
    };
  }
  /**
   * Sanitizer rules
   */


  static get sanitize() {
    return {
      style: {},
      items: {
        br: true
      }
    };
  }
  /**
   * Settings
   * @public
   */


  renderSettings() {
    const wrapper = this._make('div', [this.CSS.settingsWrapper], {});

    this.settings.forEach(item => {
      const itemEl = this._make('div', this.CSS.settingsButton, {
        innerHTML: item.icon
      });

      itemEl.addEventListener('click', () => {
        this.toggleTune(item.name); // clear other buttons

        const buttons = itemEl.parentNode.querySelectorAll('.' + this.CSS.settingsButton);
        Array.from(buttons).forEach(button => button.classList.remove(this.CSS.settingsButtonActive)); // mark active

        itemEl.classList.toggle(this.CSS.settingsButtonActive);
      });

      if (this._data.style === item.name) {
        itemEl.classList.add(this.CSS.settingsButtonActive);
      }

      wrapper.appendChild(itemEl);
    });
    return wrapper;
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */


  onPaste(event) {
    const list = event.detail.data;
    this.data = this.pasteHandler(list);
  }
  /**
   * List Tool on paste configuration
   * @public
   */


  static get pasteConfig() {
    return {
      tags: ['OL', 'UL', 'LI']
    };
  }
  /**
   * Toggles List style
   * @param {string} style - 'ordered'|'unordered'
   */


  toggleTune(style) {
    this._elements.wrapper.classList.toggle(this.CSS.wrapperOrdered, style === 'ordered');

    this._elements.wrapper.classList.toggle(this.CSS.wrapperUnordered, style === 'unordered');

    this._data.style = style;
  }
  /**
   * Styles
   * @private
   */


  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: 'cdx-list',
      wrapperOrdered: 'cdx-list--ordered',
      wrapperUnordered: 'cdx-list--unordered',
      item: 'cdx-list__item',
      settingsWrapper: 'cdx-list-settings',
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive
    };
  }
  /**
   * List data setter
   * @param {ListData} listData
   */


  set data(listData) {
    if (!listData) {
      listData = {};
    }

    this._data.style = listData.style || this.settings.find(tune => tune.default === true).name;
    this._data.items = listData.items || [];
    const oldView = this._elements.wrapper;

    if (oldView) {
      oldView.parentNode.replaceChild(this.render(), oldView);
    }
  }
  /**
   * Return List data
   * @return {ListData}
   */


  get data() {
    this._data.items = [];

    const items = this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);

    for (let i = 0; i < items.length; i++) {
      const value = items[i].innerHTML.replace('<br>', ' ').trim();

      if (value) {
        this._data.items.push(items[i].innerHTML);
      }
    }

    return this._data;
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @return {Element}
   */


  _make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
  /**
   * Returns current List item by the caret position
   * @return {Element}
   */


  get currentItem() {
    let currentNode = window.getSelection().anchorNode;

    if (currentNode.nodeType !== Node.ELEMENT_NODE) {
      currentNode = currentNode.parentNode;
    }

    return currentNode.closest(`.${this.CSS.item}`);
  }
  /**
   * Get out from List Tool
   * by Enter on the empty last item
   * @param {KeyboardEvent} event
   */


  getOutofList(event) {
    const items = this._elements.wrapper.querySelectorAll('.' + this.CSS.item);
    /**
     * Save the last one.
     */


    if (items.length < 2) {
      return;
    }

    const lastItem = items[items.length - 1];
    const currentItem = this.currentItem;
    /** Prevent Default li generation if item is empty */

    if (currentItem === lastItem && !lastItem.textContent.trim().length) {
      /** Insert New Block and set caret */
      currentItem.parentElement.removeChild(currentItem);
      this.api.blocks.insertNewBlock();
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /**
   * Handle backspace
   * @param {KeyboardEvent} event
   */


  backspace(event) {
    const items = this._elements.wrapper.querySelectorAll('.' + this.CSS.item);

    const firstItem = items[0];

    if (!firstItem) {
      return;
    }
    /**
     * Save the last one.
     */


    if (items.length < 2 && !firstItem.innerHTML.replace('<br>', ' ').trim()) {
      event.preventDefault();
    }
  }
  /**
   * Select LI content by CMD+A
   * @param {KeyboardEvent} event
   */


  selectItem(event) {
    event.preventDefault();
    const selection = window.getSelection();
    const currentNode = selection.anchorNode.parentNode;
    const currentItem = currentNode.closest('.' + this.CSS.item);
    const range = new Range();
    range.selectNodeContents(currentItem);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */


  pasteHandler(element) {
    const {
      tagName: tag
    } = element;
    let type;

    switch (tag) {
      case 'OL':
        type = 'ordered';
        break;

      case 'UL':
      case 'LI':
        type = 'unordered';
    }

    const data = {
      type,
      items: []
    };

    if (tag === 'LI') {
      data.items = [element.innerHTML];
    } else {
      const items = Array.from(element.querySelectorAll('LI'));
      data.items = items.map(li => li.innerHTML).filter(item => !!item.trim());
    }

    return data;
  }

}
// EXTERNAL MODULE: ./components/editor/plugin/checklist/index.scss
var checklist = __webpack_require__(218);

// EXTERNAL MODULE: ./components/editor/plugin/checklist/polyfills.js
var polyfills = __webpack_require__(219);

// CONCATENATED MODULE: ./components/editor/plugin/checklist/index.js
/**
 * Build styles
 */

/**
 * Require polyfills
 */


/**
 * @typedef {object} ChecklistData
 * @property {array} items - checklist elements
 */

/**
 * Checklist Tool for the Editor.js 2.0
 */

class Checklist {
  /**
   * Allow to use native Enter behaviour
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */


  static get toolbox() {
    return {
      icon: '<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2.394a5.106 5.106 0 1 0 0-10.212 5.106 5.106 0 0 0 0 10.212zm-.675-4.665l2.708-2.708 1.392 1.392-2.708 2.708-1.392 1.391-2.971-2.971L5.245 6.36l1.58 1.58z"/></svg>',
      title: '进度表'
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param {ChecklistData} data - previously saved data
   * @param {object} config - user config for Tool
   * @param {object} api - Editor.js API
   */


  constructor({
    data,
    config,
    api
  }) {
    /**
     * HTML nodes
     * @private
     */
    this._elements = {
      wrapper: null,
      items: []
    };
    /**
     * Tool's data
     * @type {ChecklistData}
     * */

    this._data = {
      items: []
    };
    this.api = api;
    this.data = data;
  }
  /**
   * Returns checklist tag with items
   * @return {Element}
   * @public
   */


  render() {
    this._elements.wrapper = this._make('div', [this.CSS.baseBlock, this.CSS.wrapper]); // fill with data

    if (this._data.items.length) {
      this._data.items.forEach(item => {
        const newItem = this.createChecklistItem(item);

        this._elements.items.push(newItem);

        this._elements.wrapper.appendChild(newItem);
      });
    } else {
      const newItem = this.createChecklistItem();

      this._elements.items.push(newItem);

      this._elements.wrapper.appendChild(newItem);
    } // add event-listeners


    this._elements.wrapper.addEventListener('keydown', event => {
      const [ENTER, BACKSPACE] = [13, 8]; // key codes

      switch (event.keyCode) {
        case ENTER:
          this.appendNewElement(event);
          break;

        case BACKSPACE:
          this.backspace(event);
          break;
      }
    }, false);

    this._elements.wrapper.addEventListener('click', event => {
      this.toggleCheckbox(event);
    });

    return this._elements.wrapper;
  }
  /**
   * Validate data: check if Checklist has items
   *
   * @param {ChecklistData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */


  validate(savedData) {
    return !!savedData.items.length;
  }
  /**
   * Toggle checklist item state
   * @param event
   */


  toggleCheckbox(event) {
    const checkListItem = event.target.closest(`.${this.CSS.item}`);
    const checkbox = checkListItem.querySelector(`.${this.CSS.checkbox}`);

    if (checkbox.contains(event.target)) {
      checkListItem.classList.toggle(this.CSS.itemChecked);
    }
  }
  /**
   * Create Checklist items
   * @param {ChecklistData} item - data.item
   * @return {HTMLElement} checkListItem - new element of checklist
   */


  createChecklistItem(item = {}) {
    const checkListItem = this._make('div', this.CSS.item);

    const checkbox = this._make('span', this.CSS.checkbox);

    const textField = this._make('div', this.CSS.textField, {
      innerHTML: item.text ? item.text : '',
      contentEditable: true
    });

    if (item.checked) {
      checkListItem.classList.add(this.CSS.itemChecked);
    }

    checkListItem.appendChild(checkbox);
    checkListItem.appendChild(textField);
    return checkListItem;
  }
  /**
   * Append new elements to the list by pressing Enter
   * @param {KeyboardEvent} event
   */


  appendNewElement(event) {
    event.preventDefault();
    const currentNode = window.getSelection().anchorNode;

    const lastItem = this._elements.items[this._elements.items.length - 1].querySelector(`.${this.CSS.textField}`);

    const lastItemText = lastItem.innerHTML.replace('<br>', ' ').trim();
    /**
     * Prevent checklist item generation if last item is empty and get out of checklist
     */

    if (currentNode === lastItem && !lastItemText) {
      /** Insert New Block and set caret */
      this.api.blocks.insertNewBlock();
      event.stopPropagation();
      return;
    }
    /**
     * Create new checklist item
     */


    const newItem = this.createChecklistItem();
    /**
     * Find closest checklist item
     */

    const currentItem = currentNode.parentNode.closest(`.${this.CSS.item}`);
    /**
     * Insert new checklist item as sibling to currently selected item
     */

    this._elements.wrapper.insertBefore(newItem, currentItem.nextSibling);
    /**
     * Index of newly inserted checklist item
     */


    const currentIndex = this._elements.items.indexOf(currentItem) + 1;
    /**
     * Add new checklist item to tags array
     */

    this._elements.items.splice(currentIndex, 0, newItem);
    /**
     * Move caret to contentEditable textField of new checklist item
     */


    this.moveCaretToEnd(newItem.querySelector(`.${this.CSS.textField}`));
  }
  /**
   * Handle backspace
   * @param {KeyboardEvent} event
   */


  backspace(event) {
    const currentItem = event.target.closest(`.${this.CSS.item}`);

    const currentIndex = this._elements.items.indexOf(currentItem);

    const currentItemText = currentItem.querySelector(`.${this.CSS.textField}`).innerHTML.replace('<br>', ' ').trim();
    const firstItem = this._elements.items[0];
    const firstItemText = firstItem.querySelector(`.${this.CSS.textField}`).innerHTML.replace('<br>', ' ').trim();

    if (!firstItemText) {
      return;
    }
    /**
     * If not first checklist item and item has no text
     */


    if (currentIndex && !currentItemText) {
      event.preventDefault();
      currentItem.remove();
      /**
       * Delete checklist item from tags array
       */

      this._elements.items.splice(currentIndex, 1);
      /**
       * After deleting the item, move move caret to previous item if it exists
       */


      if (this._elements.items[currentIndex - 1] !== 'undefined') {
        this.moveCaretToEnd(this._elements.items[currentIndex - 1].querySelector(`.${this.CSS.textField}`));
      }
    }
  }
  /**
   * @return {ChecklistData}
   * @public
   */


  save() {
    return this.data;
  }
  /**
   * Styles
   * @private
   */


  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: 'cdx-checklist',
      item: 'cdx-checklist__item',
      itemChecked: 'cdx-checklist__item--checked',
      checkbox: 'cdx-checklist__item-checkbox',
      textField: 'cdx-checklist__item-text'
    };
  }
  /**
   * Checklist data setter
   * @param {ChecklistData} checklistData
   */


  set data(checklistData) {
    this._data.items = checklistData.items || [];
    const oldView = this._elements.wrapper;

    if (oldView) {
      oldView.parentNode.replaceChild(this.render(), oldView);
    }
  }
  /**
   * Return Checklist data
   * @return {ChecklistData}
   */


  get data() {
    this._data.items = [];

    for (let i = 0; i < this._elements.items.length; i++) {
      const value = this._elements.items[i].querySelector(`.${this.CSS.textField}`).innerHTML.replace('<br>', ' ').trim();

      if (value) {
        this._data.items.push({
          text: value,
          checked: this._elements.items[i].classList.contains(this.CSS.itemChecked)
        });
      }
    }

    return this._data;
  }
  /**
   * Helper for making Elements with attributes
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @return {Element}
   */


  _make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
  /**
   * Moves caret to the end of contentEditable element
   * @param {HTMLElement} element - contentEditable element
   */


  moveCaretToEnd(element) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

}
// EXTERNAL MODULE: ./components/editor/plugin/paragraph/index.scss
var paragraph = __webpack_require__(220);

// CONCATENATED MODULE: ./components/editor/plugin/paragraph/index.js
/**
 * Build styles
 */

/**
 * Base Paragraph Block for the Editor.js.
 * Represents simple paragraph
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

/**
 * @typedef {Object} ParagraphData
 * @description Tool's input and output data format
 * @property {String} text — Paragraph's content. Can include HTML tags: <a><b><i>
 */

class Paragraph {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @return {string}
   * @constructor
   */
  static get DEFAULT_PLACEHOLDER() {
    return '';
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: ParagraphData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */


  constructor({
    data,
    config,
    api
  }) {
    this.api = api;
    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-paragraph'
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    /**
     * Placeholder for paragraph if it is first Block
     * @type {string}
     */

    this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;
    this._data = {};
    this._element = this.drawView();

    if (/^<input /gi.test(data.text)) {
      data = {};
    }

    this.data = data;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */


  onKeyUp(e) {
    if (e.code !== 'Backspace' && e.code !== 'Delete') {
      return;
    }

    const {
      textContent
    } = this._element;

    if (textContent === '') {
      this._element.innerHTML = '';
    }
  }
  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */


  drawView() {
    const div = document.createElement('DIV');
    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = true;
    div.dataset.placeholder = this._placeholder;
    div.addEventListener('keyup', this.onKeyUp);
    return div;
  }
  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */


  render() {
    return this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   * @param {ParagraphData} data
   * @public
   */


  merge(data) {
    this.data = {
      text: this.data.text + data.text
    };
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */


  validate(savedData) {
    return !(savedData.text.trim() === '' || /vanced issues found/.test(savedData.text));
  }
  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */


  save(toolsContent) {
    return {
      text: toolsContent.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */


  onPaste(event) {
    this.data = {
      text: event.detail.data.innerHTML
    };
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   */


  static get conversionConfig() {
    return {
      export: 'text',
      // to convert Paragraph to other block, use 'text' property of saved data
      import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data

    };
  }
  /**
   * Sanitizer rules
   */


  static get sanitize() {
    return {
      text: {
        br: true
      }
    };
  }
  /**
   * Get current Tools`s data
   * @returns {ParagraphData} Current data
   * @private
   */


  get data() {
    this._data.text = this._element.innerHTML;
    return this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ParagraphData} data — data to set
   * @private
   */


  set data(data) {
    this._data = data || {};
    this._element.innerHTML = this._data.text || '';
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {{tags: string[]}}
   */


  static get pasteConfig() {
    return {
      tags: ['P']
    };
  }

}
// EXTERNAL MODULE: ./components/editor/plugin/vote/index.scss
var vote = __webpack_require__(221);

// CONCATENATED MODULE: ./components/editor/plugin/vote/index.js

class Vote {
  constructor({
    data,
    api
  }) {
    this.data = data;
    this.api = api;
    this.i = 0;
  }

  static get toolbox() {
    return {
      title: '投票',
      icon: '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 300 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M109.5 62.4l-2.5 2.5v140.2l2.5 2.4c2.3 2.4 3 2.5 14.7 2.5 6.8 0 13.3-.3 14.6-.6 5.2-1.4 5.2-.8 5.2-75.1 0-66.3-.1-68.9-2-71.3-1.8-2.4-2.3-2.5-15.9-2.8-13.9-.3-14.1-.3-16.6 2.2zM50.2 100l-2.2 2.1v103.8l2.6 2c2.4 1.9 4 2.1 15 2.1 13.8 0 16.8-.9 18.4-5.3 1.4-4.2 1.4-97.3-.1-101.6-.6-1.7-1.9-3.6-2.9-4.1-1-.6-7.9-1-15.2-1-12.1 0-13.6.2-15.6 2zM230.4 109.4c-1.7.8-3.4 2.1-3.8 3.1-.3.9-.6 22.1-.6 47.1v45.5l2.5 2.4c2.3 2.4 3 2.5 14.9 2.5 14 0 17-.9 18.6-5.3 1.5-4.3 1.4-86.3-.1-90.7-.8-2.2-2.2-3.7-4.5-4.6-4.4-1.8-22.7-1.8-27 0zM170.3 158.2c-1.2.6-2.7 2.4-3.2 4.1-1.4 3.9-1.4 38.5-.1 42.4 1.6 4.4 4.6 5.3 18.6 5.3 11.9 0 12.6-.1 14.9-2.5 2.5-2.4 2.5-2.4 2.5-24s0-21.6-2.5-24c-2.3-2.4-2.9-2.5-15.2-2.4-7 0-13.8.5-15 1.1zM49.2 223.2c-1.9 1.9-1.5 6.6.7 7.8 1.3.7 36 1 105.3 1 84.4 0 103.8-.2 105.2-1.3 2.2-1.6 2.5-6.5.5-7.8-2.3-1.4-210.3-1.1-211.7.3z"/></g></svg>'
    };
  }

  render() {
    const votes = document.querySelectorAll('.vote-wrap');

    if (votes.length > 0) {
      this.api.notifier.show({
        message: '一篇文章只能包含一个投票',
        style: 'error'
      });
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('vote-wrap');
    const tips = document.createElement('p');
    tips.textContent = '投票（文章发表后无法再修改）';
    const list = document.createElement('ul');
    const append = document.createElement('button');
    append.classList.add('vote-append', 'el-icon-plus');

    const createItem = text => {
      const wrap = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = `${++this.i}. `;
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = '请输入选项（20字以内）';

      if (text) {
        input.value = (typeof text === 'string' ? text : text.text) || '';
      }

      input.maxLength = 20;
      input.classList.add('vote-answer');
      wrap.classList.add('vote-wrap-item');
      wrap.appendChild(label);
      wrap.appendChild(input);

      if (this.i > 2) {
        const close = document.createElement('button');
        close.classList.add('el-icon-circle-close');
        close.addEventListener('click', () => {
          list.removeChild(wrap);
          this.i--;

          if (this.i < 100) {
            append.style.display = 'block';
          }

          const maxCounter = wrapper.querySelector('.vote-wrap-select-count');

          if (maxCounter) {
            maxCounter.max = this.i;

            if (maxCounter.value - this.i > 0) {
              maxCounter.value = this.i;
            }
          }
        });
        wrap.appendChild(close);
      }

      list.appendChild(wrap);
      input.focus();
    };

    append.addEventListener('click', () => {
      createItem();

      if (this.i >= 100) {
        append.style.display = 'none';
      }

      const maxCounter = wrapper.querySelector('.vote-wrap-select-count');

      if (maxCounter) {
        maxCounter.max = this.i;
      }
    });

    const createFooter = () => {
      const footer = document.createElement('footer');
      const countLabel = document.createElement('span');
      countLabel.textContent = '可选个数';
      const countInput = document.createElement('input');
      countInput.type = 'number';
      countInput.classList.add('vote-wrap-select-count');
      countInput.min = 1;

      if (this.data && this.data.max_select) {
        countInput.value = this.data.max_select;
      } else {
        countInput.value = 1;
      }

      countInput.max = this.i;
      footer.appendChild(countLabel);
      footer.appendChild(countInput);
      const expireLabel = document.createElement('span');
      expireLabel.textContent = '截止时间（可选）';
      const expireInput = document.createElement('input');
      expireInput.type = 'date';
      expireInput.min = new Date(Date.now() + 86400000).toISOString().split('T')[0];
      expireInput.classList.add('vote-expire-input');

      if (this.data && this.data.expired_at) {
        expireInput.value = new Date(this.data.expired_at * 1000).toISOString().split('T')[0];
      }

      footer.appendChild(expireLabel);
      footer.appendChild(expireInput);
      wrapper.appendChild(footer);
    };

    wrapper.appendChild(tips);
    wrapper.appendChild(list);
    wrapper.appendChild(append);

    if (this.data && this.data.items) {
      this.data.items.forEach(createItem);
    } else {
      createItem();
      createItem();
    }

    createFooter();
    return wrapper;
  }

  save(blockContent) {
    const answerInput = blockContent.querySelectorAll('.vote-answer');
    const answers = [];
    [].forEach.call(answerInput, function (item) {
      answers.push(item.value);
    });
    const expireInput = blockContent.querySelector('.vote-expire-input');
    return {
      items: answers.map(_ => _.trim()).filter(_ => _),
      right_ids: [],
      max_select: +blockContent.querySelector('.vote-wrap-select-count').value,
      expired_at: expireInput && expireInput.value ? parseInt(new Date(expireInput.value).getTime() / 1000) : 0
    };
  }

  validate(savedData) {
    return savedData.items.length > 1;
  }

}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: 'JsonEditor',
  mixins: [upload["a" /* default */]],
  props: {
    value: {
      required: true,
      type: Array
    },
    slug: {
      type: String,
      default: ''
    },
    time: {
      type: [String, Number],
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      editor: null
    };
  },

  mounted() {
    this.initEditor();
  },

  methods: {
    initEditor() {
      Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 92, 7)), __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, 302)), __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 277))]).then(modules => {
        const self = this;
        let data = {};

        if (self.slug) {
          // 编辑模式
          const cache = self.$cache.get(`editor_local_draft-${self.slug}`);

          if (cache && cache.time > self.$utils.adjustDate(self.time).getTime()) {
            // 如果有缓存，并且缓存的版本更高，就使用缓存
            data = cache;
          } else {
            data = {
              blocks: self.value,
              time: Date.now(),
              version: self.$cache.get('editor_version', '2.15.0')
            };
          }
        } else {
          data = self.$cache.get('editor_local_draft-');

          if (data) {
            self.$emit('input', data.blocks);
          }
        }

        const [EditorJS, ImagePlugin, LinkPlugin] = modules.map(_ => _.default);
        const editor = new EditorJS({
          data: self.decodeData(data || {}),
          holder: 'codex-editor',
          placeholder: '请输入内容',
          autofocus: self.autofocus,
          tools: {
            header: {
              class: Header,
              inlineToolbar: true
            },
            image: {
              class: ImagePlugin,
              types: 'image/jpeg, image/png, image/jpg',
              config: {
                uploader: {
                  uploadByFile(file) {
                    return new Promise((resolve, reject) => {
                      const formData = new FormData();
                      formData.append('file', file);
                      formData.append('token', self.uploadHeaders.token);
                      Object(imageApi["b" /* uploadToQiniu */])(self, formData).then(data => {
                        data.url = `https://m1.calibur.tv/${data.url}`;
                        resolve({
                          success: 1,
                          file: data
                        });
                      }).catch(reject);
                    });
                  }

                }
              }
            },
            link: {
              class: LinkPlugin,
              config: {
                endpoint: `${"https://api.calibur.tv/"}v1/pin/editor/fetch_site`
              }
            },
            delimiter: {
              class: Delimiter
            },
            list: {
              class: List,
              inlineToolbar: true
            },
            checklist: {
              class: Checklist,
              inlineToolbar: true
            },
            baidu: {
              class: Baidu
            },
            paragraph: {
              class: Paragraph
            },
            vote: {
              class: Vote
            }
          },
          onChange: () => {
            self.handleSave();
          }
        });
        editor.isReady.then(() => {
          this.editor = editor;
          this.bindSaveEvent();
          this.handleSave();
        }).catch(reason => {
          this.$toast.error(`编辑器初始化失败：${reason}`);
        });
      });
    },

    bindSaveEvent() {
      document.addEventListener('keydown', e => {
        if (e.keyCode === 83 && (e.ctrlKey || e.metaKey)) {
          e.stopPropagation();
          e.preventDefault();
          this.handleSave();
        }
      }, false);
    },

    handleSave() {
      if (!this.editor) {
        return;
      }

      this.editor.save().then(outputData => {
        const value = this.encodeData(outputData);
        const cacheKey = `editor_local_draft-${this.slug || ''}`;
        this.$cache.set(cacheKey, value);
        this.$cache.set('editor_version', value.version);

        if (this.value) {
          this.$emit('input', value.blocks);
        }

        this.$emit('save');
      }).catch(() => {
        this.$toast.error('保存失败');
      });
    },

    decodeData({
      version,
      blocks,
      time
    }) {
      if (!blocks) {
        return null;
      }

      blocks.forEach((item, index) => {
        if (item.type === 'music') {
          blocks[index].type = 'video';
        }
      });
      return {
        version,
        blocks,
        time
      };
    },

    encodeData({
      version,
      blocks,
      time
    }) {
      blocks.forEach((item, index) => {
        if (item.type === 'video' && item.data.service.startsWith('netease')) {
          blocks[index].type = 'music';
          blocks[index].data.embed = blocks[index].data.embed.replace(/&amp;/g, '&');
        }
      });
      return {
        version,
        blocks,
        time
      };
    }

  }
});
// CONCATENATED MODULE: ./components/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/editor/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(222)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_editorvue_type_script_lang_js_,
  editorvue_type_template_id_c0958644_render,
  editorvue_type_template_id_c0958644_staticRenderFns,
  false,
  injectStyles,
  null,
  "2fd32240"
  
)

/* harmony default export */ var components_editor = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/write/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var writevue_type_script_lang_js_ = ({
  name: 'Write',
  components: {
    Editor: components_editor,
    ElUpload: upload_default.a
  },
  mixins: [mustSign["a" /* default */], upload["a" /* default */]],

  asyncData({
    app,
    error,
    query
  }) {
    const slug = query.slug;

    if (!slug) {
      return;
    }

    return app.$axios.$get('v1/pin/update/content', {
      params: {
        slug
      }
    }).then(data => {
      return data;
    }).catch(error);
  },

  data() {
    return {
      slug: '',
      title: {
        banner: null,
        text: ''
      },
      content: [],
      notebook: '',
      area: '',
      topic: '',
      last_edit_at: '',
      published_at: '',
      loading: false
    };
  },

  mounted() {
    if (this.$cache.has(`editor_local_draft_title-${this.slug}`)) {
      this.title = this.$cache.get(`editor_local_draft_title-${this.slug}`);
    }
  },

  methods: {
    customImageUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file);
      const banner = res.data;

      if (banner.width < 960 || banner.height < 540) {
        this.handleImageUploadRemove(file);
        this.$toast.info('图片尺寸不符合要求');
        return;
      }

      this.title.banner = banner;
      this.saveTitle();
    },

    onEditorSave() {
      this.saveTitle();
    },

    saveTitle() {
      this.$cache.set(`editor_local_draft_title-${this.slug}`, this.title);
    },

    deleteBanner() {
      this.title.banner = null;
      this.saveTitle();
    },

    preValidate() {
      if (this.loading) {
        return true;
      }

      if (!this.title.text) {
        this.$toast.info('标题不能为空');
        return true;
      }

      if (!this.content.length) {
        this.$toast.info('内容不能为空');
        return true;
      }

      this.loading = true;
      return false;
    },

    actionCreate(publish) {
      if (this.preValidate()) {
        return;
      }

      this.$axios.$post('v1/pin/create/story', {
        notebook: this.notebook,
        content: [{
          type: 'title',
          data: this.title
        }].concat(this.content),
        publish
      }).then(slug => {
        this.removeCache();

        if (publish) {
          window.location = this.$alias.pin(slug);
        } else {
          window.location = this.$alias.create(slug);
        }
      }).catch(err => {
        this.$toast.error(err.message);
        this.loading = false;
      });
    },

    actionUpdate(publish) {
      if (this.preValidate()) {
        return;
      }

      const {
        slug
      } = this;
      this.$axios.$post('v1/pin/update/story', {
        slug,
        notebook: this.notebook,
        content: [{
          type: 'title',
          data: this.title
        }].concat(this.content),
        publish
      }).then(slug => {
        this.removeCache();

        if (publish) {
          window.location = this.$alias.pin(slug);
        } else {
          this.loading = false;
        }
      }).catch(err => {
        this.$toast.error(err.message);
        this.loading = false;
      });
    },

    actionRedo() {
      if (this.content.length || this.title.text.length || this.title.banner) {
        this.removeCache();
        this.$toast.success(this.slug ? '撤销成功' : '删除成功').then(() => {
          window.location.reload();
        });
      }
    },

    removeCache() {
      this.$cache.del(`editor_local_draft_title-${this.slug}`);
      this.$cache.del(`editor_local_draft-${this.slug}`);
    }

  },

  head() {
    return {
      title: '创作中心'
    };
  }

});
// CONCATENATED MODULE: ./pages/write/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_writevue_type_script_lang_js_ = (writevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/write/index.vue



function write_injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var write_component = Object(componentNormalizer["a" /* default */])(
  pages_writevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  write_injectStyles,
  null,
  "a384e024"
  
)

/* harmony default export */ var write = __webpack_exports__["default"] = (write_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map