exports.ids = [4];
exports.modules = {

/***/ 103:
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

/***/ 118:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pin-article-pc-media": "pin-article-pc-media_EdOoY",
	"pinArticlePcMedia": "pin-article-pc-media_EdOoY",
	"desc": "desc_2dZ7I",
	"pin-article-pc": "pin-article-pc_n9l6d",
	"pinArticlePc": "pin-article-pc_n9l6d",
	"title": "title_11AiS",
	"badge": "badge_33AUe",
	"link": "link_2zXb9",
	"area": "area_1BjFz",
	"media": "media_2oWmK",
	"text": "text_2wAMb",
	"music": "music_3Ur6b",
	"video": "video_32S3V",
	"pin-article-h5": "pin-article-h5_2Chnp",
	"pinArticleH5": "pin-article-h5_2Chnp",
	"user": "user_1ugeY",
	"intro": "intro_3P9uJ",
	"skeleton-loading": "skeleton-loading_LpB2j",
	"skeletonLoading": "skeleton-loading_LpB2j",
	"skeleton": "skeleton_3OUSt"
};


/***/ }),

/***/ 126:
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PinArticle_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PinArticle_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PinArticle_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PinArticle_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PinArticle_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PinArticle_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/flow/PinArticle.vue?vue&type=template&id=09310fbc&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.$style['pin-article']},[_c('NLink',{staticClass:"only-h5",class:_vm.$style['pin-article-h5'],attrs:{"to":_vm.$alias.pin(_vm.secretLink || _vm.item.slug)}},[(_vm.item.media && _vm.item.media.banner)?_c('header',{style:({ paddingTop: (((_vm.item.media.banner.height / _vm.item.media.banner.width) * 100) + "%") })},[_c('img',{attrs:{"src":_vm.$resizeImage(_vm.item.media.banner.url, { width: 400, mode: 2 })}})]):_vm._e(),_vm._v(" "),_c('main',[_c('div',{class:_vm.$style.user},[(_vm.showUser)?_c('VImg',{attrs:{"src":_vm.item.author.avatar,"radius":"50%","width":"24","height":"24"}}):_vm._e(),_vm._v(" "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.author.nickname)}})],1),_vm._v(" "),_c('span',{class:_vm.$style.title,domProps:{"innerHTML":_vm._s(_vm.item.title.text)}})]),_vm._v(" "),(_vm.item.intro)?_c('footer',[_c('p',{class:_vm.$style.intro,domProps:{"innerHTML":_vm._s(_vm.item.intro)}})]):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("only-pc",[_vm.$style['pin-article-pc'], ( _obj = {}, _obj[_vm.$style['pin-article-pc-media']] = _vm.item.media, _obj )]))+">","</div>",[_vm._ssrNode("<h2"+(_vm._ssrClass(null,_vm.$style.title))+">","</h2>",[_vm._ssrNode("<span"+(_vm._ssrClass(null,_vm.$style.badge))+">"+_vm._ssrEscape(_vm._s(_vm.item.badge))+"</span> "),(_vm.showZone)?_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.area))+">","</div>",[(_vm.item.area)?_c('NLink',{attrs:{"to":_vm.$alias.tag(_vm.item.area.slug),"target":"_blank"}},[_c('VImg',{attrs:{"src":_vm.item.area.avatar,"width":"24","height":"24","radius":"5px"}})],1):(_vm.item.topic)?_c('NLink',{attrs:{"to":_vm.$alias.tag(_vm.item.topic.slug),"target":"_blank"}},[_c('VImg',{attrs:{"src":_vm.item.topic.avatar,"width":"24","height":"24","radius":"5px"}})],1):_vm._e()],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<p"+(_vm._ssrClass("oneline",_vm.$style.link))+">","</p>",[_c('NLink',{staticClass:"fade-link oneline",attrs:{"target":"_blank","to":_vm.$alias.pin(_vm.secretLink || _vm.item.slug)},domProps:{"innerHTML":_vm._s(_vm.item.title.text)}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("clearfix",_vm.$style.content))+">","</div>",[(_vm.item.media)?_c('NLink',{class:_vm.$style.media,attrs:{"to":_vm.$alias.pin(_vm.secretLink || _vm.item.slug),"target":"_blank"}},[(_vm.item.media.first_video)?_c('div',{class:_vm.$style.video},[(_vm.item.media.banner)?_c('VImg',{attrs:{"src":_vm.item.media.banner.url,"blur":true,"width":"187","height":"105"}}):_vm._e(),_vm._v(" "),_c('i',{staticClass:"iconfont ic-bilibili",class:_vm.$style.badge})],1):(_vm.item.media.first_music)?_c('div',{class:_vm.$style.music},[(_vm.item.media.banner)?_c('VImg',{attrs:{"src":_vm.item.media.banner.url,"blur":true,"width":"187","height":"105"}}):_vm._e(),_vm._v(" "),_c('i',{staticClass:"iconfont ic-netease",class:_vm.$style.badge})],1):_c('VImg',{attrs:{"src":_vm.item.media.banner.url,"blur":true,"width":"187","height":"105"}}),_vm._v(" "),_c('div',{class:_vm.$style.text},[_c('i',{staticClass:"iconfont ic-video"}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.item.media.video_count)}}),_vm._v(" "),_c('i',{staticClass:"iconfont ic-systemprompt"}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.item.media.music_count)}}),_vm._v(" "),_c('i',{staticClass:"iconfont ic-camera"}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.item.media.image_count)}})])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.desc))+">","</div>",[_vm._ssrNode("<main><p>"+(_vm._s(_vm.item.intro))+"</p></main> "),_vm._ssrNode("<footer>","</footer>",[(_vm.showUser)?_c('NLink',{staticClass:"oneline",attrs:{"to":_vm.$alias.user(_vm.item.author.slug),"target":"_blank"}},[_c('VImg',{attrs:{"src":_vm.item.author.avatar,"radius":"50%","width":"24","height":"24"}}),_vm._v("\n             \n            "),_c('span',{domProps:{"innerHTML":_vm._s(_vm.item.author.nickname)}})],1):_vm._e(),_vm._ssrNode(" <div><i class=\"iconfont ic-message_fill\"></i> <span>"+_vm._ssrEscape(_vm._s(_vm.item.comment_count))+"</span></div> <div><i class=\"iconfont ic-good_fill\"></i> <span>"+_vm._ssrEscape(_vm._s(_vm.item.like_count))+"</span></div> <div><i class=\"iconfont ic-mark_fill\"></i> <span>"+_vm._ssrEscape(_vm._s(_vm.item.mark_count))+"</span></div> <div><i class=\"iconfont ic-browse_fill\"></i> <span>"+_vm._ssrEscape(_vm._s(_vm.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/flow/PinArticle.vue?vue&type=template&id=09310fbc&

// CONCATENATED MODULE: ./mixins/flowProps.js
/* harmony default export */ var flowProps = ({
  props: {
    item: {
      type: Object,
      required: true
    },
    showUser: {
      type: Boolean,
      default: true
    },
    showZone: {
      type: Boolean,
      default: true
    },
    relationZone: {
      type: String,
      default: ''
    },
    secretLink: {
      type: String,
      default: ''
    }
  },
  computed: {
    showTopic() {
      if (!this.showZone || !this.item.topic) {
        return false;
      }

      return this.item.topic.slug !== this.relationZone;
    },

    showArea() {
      if (!this.showZone || !this.item.area) {
        return false;
      }

      return this.item.area.slug !== this.relationZone;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/flow/PinArticle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PinArticlevue_type_script_lang_js_ = ({
  name: 'PinArticle',
  mixins: [flowProps]
});
// CONCATENATED MODULE: ./components/flow/PinArticle.vue?vue&type=script&lang=js&
 /* harmony default export */ var flow_PinArticlevue_type_script_lang_js_ = (PinArticlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/flow/PinArticle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  flow_PinArticlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a960542"
  
)

/* harmony default export */ var PinArticle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_draft_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_draft_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_draft_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_draft_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_draft_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_draft_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/draft.vue?vue&type=template&id=0d6fda71&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"user-draft"}},[_c('ElAlert',{attrs:{"title":_vm.timeout ? ("该页面文章链接 " + _vm.timeout + " 秒后过期，过期后请刷新页面") : '该页面已过期，请刷新页面获取新的链接',"type":_vm.timeout ? 'success' : 'error',"effect":"dark"}}),_vm._ssrNode(" <br> "),_c('FlowLoader',{ref:"loader",attrs:{"func":"getUserDrafts","type":"page","query":{
      count: 10,
      $axios: _vm.$axios,
    },"callback":_vm.handleTimeout},scopedSlots:_vm._u([{key:"default",fn:function(ref){
    var flow = ref.flow;
    var extra = ref.extra;
return _c('ul',{},_vm._l((flow),function(item,index){return _c('PinArticle',{key:item.slug,attrs:{"item":item,"show-user":false,"secret-link":extra[index]}})}),1)}}])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_slug/draft.vue?vue&type=template&id=0d6fda71&

// EXTERNAL MODULE: external "element-ui/lib/alert"
var alert_ = __webpack_require__(65);
var alert_default = /*#__PURE__*/__webpack_require__.n(alert_);

// EXTERNAL MODULE: ./mixins/mustSelf.js
var mustSelf = __webpack_require__(126);

// EXTERNAL MODULE: ./mixins/mustSign.js
var mustSign = __webpack_require__(103);

// EXTERNAL MODULE: ./components/flow/PinArticle.vue + 5 modules
var PinArticle = __webpack_require__(205);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/draft.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var draftvue_type_script_lang_js_ = ({
  name: 'UserDraft',
  components: {
    ElAlert: alert_default.a,
    PinArticle: PinArticle["a" /* default */]
  },
  mixins: [mustSign["a" /* default */], mustSelf["a" /* default */]],
  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      timeout: 300,
      timer: 0
    };
  },

  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  },

  mounted() {
    this.$refs.loader && this.$refs.loader.refresh();
  },

  methods: {
    handleTimeout() {
      this.timer && clearInterval(this.timer);
      this.timeout = 300;
      this.timer = setInterval(() => {
        if (this.timeout) {
          this.timeout--;
        }
      }, 1000);
    }

  }
});
// CONCATENATED MODULE: ./pages/user/_slug/draft.vue?vue&type=script&lang=js&
 /* harmony default export */ var _slug_draftvue_type_script_lang_js_ = (draftvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/_slug/draft.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(234)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _slug_draftvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6093fdfc"
  
)

/* harmony default export */ var draft = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=draft.js.map