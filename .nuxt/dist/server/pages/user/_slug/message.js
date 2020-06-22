exports.ids = [11];
exports.modules = {

/***/ 104:
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

/***/ 105:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"h1": "h1_17sSx",
	"h2": "h2_29h8C",
	"h3": "h3_pcROM",
	"h4": "h4_-wXkD",
	"h5": "h5_3RgCW",
	"h6": "h6_1UKhu",
	"skeleton-loading": "skeleton-loading_3wvbo",
	"skeletonLoading": "skeleton-loading_3wvbo",
	"skeleton": "skeleton_3yQuF"
};


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"image": "image_2HoYb",
	"border": "border_fvHwL",
	"bg": "bg_OU_Qk",
	"skeleton-loading": "skeleton-loading_W_WF0",
	"skeletonLoading": "skeleton-loading_W_WF0",
	"skeleton": "skeleton_3dcSj"
};


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"paragraph": "paragraph_1OWG2",
	"skeleton-loading": "skeleton-loading_3Hgsp",
	"skeletonLoading": "skeleton-loading_3Hgsp",
	"skeleton": "skeleton_2H5RA"
};


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "list_rxwoA",
	"skeleton-loading": "skeleton-loading_hADmg",
	"skeletonLoading": "skeleton-loading_hADmg",
	"skeleton": "skeleton_3a9b2"
};


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"delimiter": "delimiter_3ksS5",
	"skeleton-loading": "skeleton-loading_1lzJ0",
	"skeletonLoading": "skeleton-loading_1lzJ0",
	"skeleton": "skeleton_jIhh3"
};


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"checklist": "checklist_35Trq",
	"skeleton-loading": "skeleton-loading_2NnRn",
	"skeletonLoading": "skeleton-loading_2NnRn",
	"skeleton": "skeleton_RKAJg"
};


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "link_1cdqF",
	"content": "content_31mUQ",
	"logo": "logo_3t3p1",
	"skeleton-loading": "skeleton-loading_Q1SbS",
	"skeletonLoading": "skeleton-loading_Q1SbS",
	"skeleton": "skeleton_13H0b"
};


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"video": "video_1Ktgc",
	"wrap": "wrap_3iFmj",
	"skeleton-loading": "skeleton-loading_DCN-u",
	"skeletonLoading": "skeleton-loading_DCN-u",
	"skeleton": "skeleton_1YNsK"
};


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"music": "music_1aU_y",
	"skeleton-loading": "skeleton-loading_3yST_",
	"skeletonLoading": "skeleton-loading_3yST_",
	"skeleton": "skeleton_3Zagh"
};


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"baidu": "baidu_3yD19",
	"logo": "logo_3fZIb",
	"content": "content_2vYlq",
	"skeleton-loading": "skeleton-loading_2_Vpm",
	"skeletonLoading": "skeleton-loading_2_Vpm",
	"skeleton": "skeleton_Yoxzs"
};


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"vote": "vote_1AMl_",
	"selected": "selected_1h5XP",
	"count": "count_3bLzQ",
	"active": "active_2YTSY",
	"skeleton-loading": "skeleton-loading_2BuFl",
	"skeletonLoading": "skeleton-loading_2BuFl",
	"skeleton": "skeleton_3B0sO"
};


/***/ }),

/***/ 127:
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/JsonContent.vue?vue&type=template&id=1d9d124f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"json-content"},_vm._l((_vm.content),function(item,index){return _c(("v-" + (item.type)),{key:index,tag:"component",attrs:{"item":item,"reward":_vm.reward,"vote":_vm.vote,"slug":_vm.slug}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/JsonContent.vue?vue&type=template&id=1d9d124f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var headervue_type_script_lang_js_ = ({
  name: 'JsonHeader',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  render(h) {
    const level = this.item.data.level;
    return h('h' + this.item.data.level, {
      class: this.$style[`h${level}`],
      domProps: {
        innerHTML: this.item.data.text
      }
    });
  }

});
// CONCATENATED MODULE: ./components/editor/parser/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/editor/parser/header.vue
var header_render, header_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  parser_headervue_type_script_lang_js_,
  header_render,
  header_staticRenderFns,
  false,
  injectStyles,
  null,
  "65a41932"
  
)

/* harmony default export */ var header = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/image.vue?vue&type=template&id=5ffb9316&
var imagevue_type_template_id_5ffb9316_render = function () {
var _obj, _obj$1;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.image},[_vm._ssrNode("<div"+(_vm._ssrClass(null,[( _obj = {}, _obj[_vm.$style.border] = _vm.item.data.withBorder, _obj ), ( _obj$1 = {}, _obj$1[_vm.$style.bg] = _vm.item.data.withBackground, _obj$1 )]))+">","</div>",[_vm._ssrNode("<div>","</div>",[_c('VImg',{attrs:{"src":_vm.item.data.file.url,"stretched":_vm.item.data.stretched,"width":_vm.item.data.file.width,"height":_vm.item.data.file.height}})],1)]),_vm._ssrNode(" "+((_vm.item.data.caption)?("<p>"+_vm._ssrEscape(_vm._s(_vm.item.data.caption))+"</p>"):"<!---->"))],2)}
var imagevue_type_template_id_5ffb9316_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/image.vue?vue&type=template&id=5ffb9316&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/image.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var imagevue_type_script_lang_js_ = ({
  name: 'JsonImage',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/image.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_imagevue_type_script_lang_js_ = (imagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/image.vue



function image_injectStyles (context) {
  
  var style0 = __webpack_require__(135)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var image_component = Object(componentNormalizer["a" /* default */])(
  parser_imagevue_type_script_lang_js_,
  imagevue_type_template_id_5ffb9316_render,
  imagevue_type_template_id_5ffb9316_staticRenderFns,
  false,
  image_injectStyles,
  null,
  "0015ad1e"
  
)

/* harmony default export */ var parser_image = (image_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/paragraph.vue?vue&type=template&id=5ae540aa&
var paragraphvue_type_template_id_5ae540aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{class:_vm.$style.paragraph,domProps:{"innerHTML":_vm._s(_vm.item.data.text.replace(/\n/g, '<br>'))}},[])}
var paragraphvue_type_template_id_5ae540aa_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/paragraph.vue?vue&type=template&id=5ae540aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/paragraph.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var paragraphvue_type_script_lang_js_ = ({
  name: 'JsonParagraph',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/paragraph.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_paragraphvue_type_script_lang_js_ = (paragraphvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/paragraph.vue



function paragraph_injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var paragraph_component = Object(componentNormalizer["a" /* default */])(
  parser_paragraphvue_type_script_lang_js_,
  paragraphvue_type_template_id_5ae540aa_render,
  paragraphvue_type_template_id_5ae540aa_staticRenderFns,
  false,
  paragraph_injectStyles,
  null,
  "0d4f4df8"
  
)

/* harmony default export */ var paragraph = (paragraph_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/list.vue?vue&type=template&id=290d38e8&
var listvue_type_template_id_290d38e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.list},[_vm._ssrNode(((_vm.item.data.style === 'ordered')?("<ol>"+(_vm._ssrList((_vm.item.data.items),function(li,index){return ("<li>"+(_vm._s(li))+"</li>")}))+"</ol>"):("<ul>"+(_vm._ssrList((_vm.item.data.items),function(li,index){return ("<li>"+(_vm._s(li))+"</li>")}))+"</ul>")))])}
var listvue_type_template_id_290d38e8_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/list.vue?vue&type=template&id=290d38e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var listvue_type_script_lang_js_ = ({
  name: 'JsonList',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/list.vue



function list_injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var list_component = Object(componentNormalizer["a" /* default */])(
  parser_listvue_type_script_lang_js_,
  listvue_type_template_id_290d38e8_render,
  listvue_type_template_id_290d38e8_staticRenderFns,
  false,
  list_injectStyles,
  null,
  "72dc9978"
  
)

/* harmony default export */ var list = (list_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/delimiter.vue?vue&type=template&id=30ea1079&
var delimitervue_type_template_id_30ea1079_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.delimiter},[])}
var delimitervue_type_template_id_30ea1079_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/delimiter.vue?vue&type=template&id=30ea1079&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/delimiter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var delimitervue_type_script_lang_js_ = ({
  name: 'JsonDelimiter',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/delimiter.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_delimitervue_type_script_lang_js_ = (delimitervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/delimiter.vue



function delimiter_injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var delimiter_component = Object(componentNormalizer["a" /* default */])(
  parser_delimitervue_type_script_lang_js_,
  delimitervue_type_template_id_30ea1079_render,
  delimitervue_type_template_id_30ea1079_staticRenderFns,
  false,
  delimiter_injectStyles,
  null,
  "870ffdc6"
  
)

/* harmony default export */ var delimiter = (delimiter_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/checklist.vue?vue&type=template&id=24ebef50&
var checklistvue_type_template_id_24ebef50_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.$style.checklist},[_vm._ssrNode((_vm._ssrList((_vm.item.data.items),function(option,index){return ("<li>"+((option.checked)?("<i></i>"):("<em></em>"))+" <div>"+(_vm._s(option.text))+"</div></li>")})))])}
var checklistvue_type_template_id_24ebef50_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/checklist.vue?vue&type=template&id=24ebef50&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/checklist.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var checklistvue_type_script_lang_js_ = ({
  name: 'JsonChecklist',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/checklist.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_checklistvue_type_script_lang_js_ = (checklistvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/checklist.vue



function checklist_injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var checklist_component = Object(componentNormalizer["a" /* default */])(
  parser_checklistvue_type_script_lang_js_,
  checklistvue_type_template_id_24ebef50_render,
  checklistvue_type_template_id_24ebef50_staticRenderFns,
  false,
  checklist_injectStyles,
  null,
  "0b72f588"
  
)

/* harmony default export */ var checklist = (checklist_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/link.vue?vue&type=template&id=37b761e3&
var linkvue_type_template_id_37b761e3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.link},[_vm._ssrNode("<a target=\"_blank\""+(_vm._ssrAttr("href",_vm.item.data.link))+">"+((_vm.item.data.meta.image && _vm.item.data.meta.image.url)?("<img"+(_vm._ssrAttr("src",_vm.item.data.meta.image.url))+" width=\"65\" height=\"65\""+(_vm._ssrClass(null,_vm.$style.logo))+">"):"<!---->")+" <div"+(_vm._ssrClass(null,_vm.$style.content))+"><h3>"+_vm._ssrEscape(_vm._s(_vm.item.data.meta.title))+"</h3> <p>"+_vm._ssrEscape(_vm._s(_vm.item.data.meta.description))+"</p> <span>"+_vm._ssrEscape(_vm._s(_vm.item.data.link.replace(/https?:\/\//, '')))+"</span></div></a>")])}
var linkvue_type_template_id_37b761e3_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/link.vue?vue&type=template&id=37b761e3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/link.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var linkvue_type_script_lang_js_ = ({
  name: 'JsonLink',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/link.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_linkvue_type_script_lang_js_ = (linkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/link.vue



function link_injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var link_component = Object(componentNormalizer["a" /* default */])(
  parser_linkvue_type_script_lang_js_,
  linkvue_type_template_id_37b761e3_render,
  linkvue_type_template_id_37b761e3_staticRenderFns,
  false,
  link_injectStyles,
  null,
  "69d58ad4"
  
)

/* harmony default export */ var parser_link = (link_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/video.vue?vue&type=template&id=764aaca7&
var videovue_type_template_id_764aaca7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.video},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$style.wrap))+"><iframe"+(_vm._ssrAttr("src",_vm.item.data.embed))+" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowtransparency=\"true\" allowfullscreen=\"allowfullscreen\"></iframe></div> "+((_vm.item.data.caption)?("<p>"+_vm._ssrEscape(_vm._s(_vm.item.data.caption))+"</p>"):"<!---->"))])}
var videovue_type_template_id_764aaca7_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/video.vue?vue&type=template&id=764aaca7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/video.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var videovue_type_script_lang_js_ = ({
  name: 'JsonVideo',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/video.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_videovue_type_script_lang_js_ = (videovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/video.vue



function video_injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var video_component = Object(componentNormalizer["a" /* default */])(
  parser_videovue_type_script_lang_js_,
  videovue_type_template_id_764aaca7_render,
  videovue_type_template_id_764aaca7_staticRenderFns,
  false,
  video_injectStyles,
  null,
  "f87ff6de"
  
)

/* harmony default export */ var video = (video_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/music.vue?vue&type=template&id=145de14d&
var musicvue_type_template_id_145de14d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.music},[_vm._ssrNode("<iframe"+(_vm._ssrAttr("src",_vm.item.data.embed))+" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowtransparency=\"true\" allowfullscreen=\"allowfullscreen\" width=\"330\" height=\"86\"></iframe> "+((_vm.item.data.caption)?("<p>"+_vm._ssrEscape(_vm._s(_vm.item.data.caption))+"</p>"):"<!---->"))])}
var musicvue_type_template_id_145de14d_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/music.vue?vue&type=template&id=145de14d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/music.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var musicvue_type_script_lang_js_ = ({
  name: 'JsonMusic',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/music.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_musicvue_type_script_lang_js_ = (musicvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/music.vue



function music_injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var music_component = Object(componentNormalizer["a" /* default */])(
  parser_musicvue_type_script_lang_js_,
  musicvue_type_template_id_145de14d_render,
  musicvue_type_template_id_145de14d_staticRenderFns,
  false,
  music_injectStyles,
  null,
  "4b8df93b"
  
)

/* harmony default export */ var music = (music_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/baidu.vue?vue&type=template&id=cf84adc4&
var baiduvue_type_template_id_cf84adc4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.baidu},[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.item.data.url))+" target=\"_blank\"><i"+(_vm._ssrClass("iconfont ic-baidu-cloud",_vm.$style.logo))+"></i> <div"+(_vm._ssrClass(null,_vm.$style.content))+">"+((_vm.item.data.visit_type !== 0 && !_vm.reward)?("\n        密码投食后可见\n      "):(_vm._ssrEscape(" 密码："+_vm._s(_vm.item.data.password)+" ")))+"</div></a>")])}
var baiduvue_type_template_id_cf84adc4_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/baidu.vue?vue&type=template&id=cf84adc4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/baidu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var baiduvue_type_script_lang_js_ = ({
  name: 'JsonBaidu',
  props: {
    item: {
      type: Object,
      required: true
    },
    reward: {
      type: Boolean,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/editor/parser/baidu.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_baiduvue_type_script_lang_js_ = (baiduvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/baidu.vue



function baidu_injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var baidu_component = Object(componentNormalizer["a" /* default */])(
  parser_baiduvue_type_script_lang_js_,
  baiduvue_type_template_id_cf84adc4_render,
  baiduvue_type_template_id_cf84adc4_staticRenderFns,
  false,
  baidu_injectStyles,
  null,
  "9306639e"
  
)

/* harmony default export */ var baidu = (baidu_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/vote.vue?vue&type=template&id=25d3a106&
var votevue_type_template_id_25d3a106_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.vote},[_vm._ssrNode("<div><header>"+_vm._ssrEscape("投票（"+_vm._s(_vm.item.data.max_select === 1 ? '单选' : ("最多选" + (_vm.item.data.max_select) + "个"))+"）")+"</header> <ul>"+(_vm._ssrList((_vm.item.data.items),function(option,index){
var _obj;
return ("<li"+(_vm._ssrClass("oneline",( _obj = {}, _obj[_vm.$style.selected] = _vm.checkSelected(option), _obj )))+"><span"+(_vm._ssrClass(null,_vm.$style.count))+(_vm._ssrStyle(null,_vm.computeItemStyle(option, index), null))+">"+(_vm._s(_vm.stat[option.id] ? ((_vm.stat[option.id]) + "票&nbsp;&nbsp;") : ''))+"</span> <span>"+(_vm._s(index + 1 + '. ' + option.text))+"</span> <i></i></li>")}))+"</ul> <footer><span>"+_vm._ssrEscape("截止时间："+_vm._s(_vm.item.data.expired_at ? _vm.$utils.timeAgo(_vm.item.data.expired_at) : '无限期'))+"</span> <button"+(_vm._ssrClass(null,( _obj = {}, _obj[_vm.$style.active] = _vm.selected.length && !_vm.voted, _obj )))+">"+_vm._ssrEscape("\n        "+_vm._s(_vm.submitting ? '提交中' : _vm.voted ? '已投过票' : '确认')+"\n      ")+"</button></footer></div>")])}
var votevue_type_template_id_25d3a106_staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/parser/vote.vue?vue&type=template&id=25d3a106&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/parser/vote.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var votevue_type_script_lang_js_ = ({
  name: 'JsonVote',
  props: {
    item: {
      type: Object,
      required: true
    },
    vote: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      selected: [],
      submitting: false,
      voted: false,
      stat: [],
      maxCount: 0
    };
  },

  watch: {
    vote(val) {
      this.selected = val.map(_ => _);

      if (val.length) {
        this.voted = true;
        this.getVoteStat();
      }
    }

  },
  methods: {
    getVoteStat() {
      this.$axios.$get('v1/pin/vote_stat', {
        params: {
          slug: this.slug
        }
      }).then(data => {
        this.stat = data;
        this.maxCount = Math.max(...Object.values(this.stat));
      }).catch(() => {});
    },

    handleSelect(option) {
      const {
        selected,
        voted
      } = this;

      if (voted) {
        return;
      }

      const index = selected.indexOf(option.id);

      if (~index) {
        selected.splice(index, 1);
        return;
      }

      const max = this.item.data.max_select;

      if (max <= selected.length) {
        if (max === 1) {
          selected.splice(index, 1, option.id);
        }

        return;
      }

      selected.push(option.id);
    },

    checkSelected(option) {
      return ~this.selected.indexOf(option.id);
    },

    submit() {
      if (this.submitting || this.voted) {
        return;
      }

      if (!this.selected.length) {
        this.$toast.info('至少选择一项');
        return;
      }

      if (this.item.data.expired_at && this.item.data.expired_at * 1000 < Date.now()) {
        this.$toast.info('投票已截止');
        return;
      }

      this.submitting = true;
      this.$axios.$post('v1/social/vote', {
        pin_slug: this.slug,
        answer_hash: this.selected
      }).then(() => {
        this.$toast.success('投票成功');
        this.voted = true;
        this.getVoteStat();
      }).catch(err => {
        this.$toast.error(err.message);
      }).finally(() => {
        this.submitting = false;
      });
    },

    computeItemStyle(option, index) {
      const count = this.stat[option.id] || 0;
      const width = count ? `${75 * count / this.maxCount}%` : '0%';
      return {
        width,
        backgroundColor: this.getRandomColor(index)
      };
    },

    getRandomColor(index) {
      const colors = ['rgba(255,170,170,.5)', 'rgba(255,148,39,.5)', 'rgba(252,196,25,.5)', 'rgba(32,201,151,.5)', 'rgba(18,183,245,.5)', 'rgba(173,181,189,.5)'];
      return colors[index % 6];
    }

  }
});
// CONCATENATED MODULE: ./components/editor/parser/vote.vue?vue&type=script&lang=js&
 /* harmony default export */ var parser_votevue_type_script_lang_js_ = (votevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/parser/vote.vue



function vote_injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)
this["$style"] = (style0.locals || style0)

}

/* normalize component */

var vote_component = Object(componentNormalizer["a" /* default */])(
  parser_votevue_type_script_lang_js_,
  votevue_type_template_id_25d3a106_render,
  votevue_type_template_id_25d3a106_staticRenderFns,
  false,
  vote_injectStyles,
  null,
  "80219478"
  
)

/* harmony default export */ var vote = (vote_component.exports);
// CONCATENATED MODULE: ./assets/js/copyright.js
class Copyright {
  /**
   * [constructor 初始化 Copyright ]
   *
   * @param {number} minLength    [ 全局的黏贴触发 rewrite 的最小长度 ]
   * @param {string} shareLink    [ 全局的默认链接 ]
   *
   * @return {null}
   */
  constructor({
    minLength,
    shareLink
  } = {}) {
    this.config = {
      org: 'calibur',
      appendStr: '文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。',
      minLength: minLength || 140,
      shareLink: shareLink || window.location.href.split('?')[0]
    };
    this.prefix = {
      org: '来源',
      link: '链接',
      author: '作者'
    };
  }
  /**
   * [bind Copyright 的对外调用 API，用于监听指定 DOM 的文本复制事件 ]
   *
   * @param {Object} ele              [ 要绑定事件的 DOM 对象 ]
   * @param {number} minLength        [ 局部的黏贴触发 rewrite 的最小长度，可复写全局 minLength ]
   * @param {string} authorNickname   [ 作者的昵称 ]
   * @param {string} shareLink        [ 文章的链接 ]
   * @param {string} appendStr        [ 要附加的文本，可复写全局 text ]
   *
   * @return {null}
   */


  bind(ele, {
    minLength,
    authorNickname,
    shareLink,
    appendStr
  } = {}) {
    ele.addEventListener('copy', evt => {
      const lengthLimit = minLength || this.config.minLength;
      const location = shareLink || this.config.shareLink;
      const str = appendStr || this.config.appendStr;
      const range = window.getSelection().getRangeAt(0);
      const htmlParser = this.getHTMLParser('');

      if (htmlParser) {
        htmlParser.appendChild(range.cloneContents());
      }

      const outputText = range.toString().trim();
      const outputHtml = htmlParser ? htmlParser.innerHTML : this.getRangeHtml(range);
      const div = document.createElement('div');
      div.innerHTML = outputHtml;

      if (outputText.length >= lengthLimit) {
        const formatHTML = this.getCopyHtml(outputHtml, location, authorNickname, str);
        const formatText = this.getCopyText(outputText, location, authorNickname, str);

        if (typeof evt.clipboardData === 'undefined') {
          this.hack(formatHTML, range); // IE
        }

        try {
          evt.clipboardData.setData('text/plain', formatText);
          evt.clipboardData.setData('text/html', formatHTML);
          evt.preventDefault();
        } catch (e) {
          this.hack(formatHTML, range); // Edge
        }
      }
    });
  }
  /**
   * [abort 阻止 copy 事件]
   * @param ele
   */


  abort(ele) {
    ele.addEventListener('copy', evt => {
      evt.stopPropagation();
      evt.preventDefault();
      evt.cancelBubble = false;
      return false;
    });
  }
  /**
   * [hack 当 clipboardData 事件无法正常工作时，使用 hack 方法添加 copyright，缺点是用户在按下 [ctrl + c] 之后会丢失光标]
   *
   * 增加range参数以修复光标丢失的问题
   *
   * @param text
   * @param range
   *
   * @return {null}
   */


  hack(text, range) {
    const dom = document.createElement('div');
    dom.innerHTML = text;
    dom.style.position = 'fixed';
    dom.style.left = '-9999px';
    document.body.appendChild(dom);
    window.getSelection().selectAllChildren(dom);
    setTimeout(() => {
      try {
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      } catch (e) {}

      document.body.removeChild(dom);
    }, 0);
  }
  /**
   * [getCopyHtml 格式化要放进黏贴板的 HTML ]
   *
   * @param html
   * @param shareLink
   * @param nickname
   * @param appendStr
   * @returns {string}
   */


  getCopyHtml(html, shareLink, nickname, appendStr) {
    const o = this.getExtraCopyright(shareLink, nickname, appendStr).join('<br>'); // 用div包裹保证原有样式

    return `<div><div>${html}</div>${o}</div>`;
  }
  /**
   * [getCopyHtml 格式化要放进黏贴板的 Text ]
   *
   * @param text
   * @param shareLink
   * @param nickname
   * @param appendStr
   * @returns {*}
   */


  getCopyText(text, shareLink, nickname, appendStr) {
    const o = this.getExtraCopyright(shareLink, nickname, appendStr).join('\n');
    return text + o;
  }
  /**
   * [getExtraCopyright 获取待拼接的字符串数组]
   *
   * @param shareLink
   * @param nickname
   * @param appendStr
   * @returns {*}
   */


  getExtraCopyright(shareLink, nickname, appendStr) {
    if (nickname) {
      return ['', '', `${this.prefix.author}：${nickname}`, `${this.prefix.link}：${shareLink}`, `${this.prefix.org}：${this.config.org}`, appendStr];
    }

    return ['', '', `${this.prefix.link}：${shareLink}`, `${this.prefix.org}：${this.config.org}`, appendStr];
  }
  /**
   * [getRangeHtml 获取 copy 的文本的 HTML 格式，因为 window.getSelection().toString() 的 Bug，导致复制到笔记本中的 \n 失效]
   *
   * @param text
   * @returns {string}
   */


  getRangeHtml(text) {
    const div = document.createElement('div');
    div.appendChild(text.cloneContents());
    return div.outerHTML;
  }

  getHTMLParser(e) {
    try {
      return new window.DOMParser().parseFromString(e, 'text/html').body;
    } catch (n) {
      const t = document.implementation.createHTMLDocument('');
      return t.body.innerHTML = e, t.body; // eslint-disable-line
    }
  }

}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/JsonContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var JsonContentvue_type_script_lang_js_ = ({
  name: 'JsonContent',
  components: {
    'v-header': header,
    'v-image': parser_image,
    'v-paragraph': paragraph,
    'v-list': list,
    'v-delimiter': delimiter,
    'v-checklist': checklist,
    'v-link': parser_link,
    'v-video': video,
    'v-music': music,
    'v-baidu': baidu,
    'v-vote': vote
  },
  props: {
    content: {
      required: true,
      type: Array
    },
    reward: {
      type: Boolean,
      default: false
    },
    vote: {
      type: Array,
      default: () => []
    },
    slug: {
      type: String,
      default: ''
    }
  },

  mounted() {
    const copyright = new Copyright();
    copyright.bind(this.$el);
  }

});
// CONCATENATED MODULE: ./components/editor/JsonContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var editor_JsonContentvue_type_script_lang_js_ = (JsonContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/editor/JsonContent.vue





/* normalize component */

var JsonContent_component = Object(componentNormalizer["a" /* default */])(
  editor_JsonContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "486531bb"
  
)

/* harmony default export */ var JsonContent = __webpack_exports__["a"] = (JsonContent_component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paragraph_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delimiter_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delimiter_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delimiter_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delimiter_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delimiter_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delimiter_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_music_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baidu_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baidu_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baidu_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baidu_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baidu_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baidu_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_0_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_0_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_0_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/no-comment.e82d3e7.png";

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 173:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/message.vue?vue&type=template&id=168a96a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"user-message"}},[_c('ElRow',{staticClass:"column-wrap"},[_c('ElCol',{attrs:{"span":6}},[_c('MessageMenu',{attrs:{"slug":_vm.slug},on:{"open":_vm.handleOpen}}),_vm._v("\n       \n    ")],1),_vm._v(" "),_c('ElCol',{attrs:{"span":18}},[_c('div',{staticClass:"room-adjust"},[(_vm.mailto)?_c('MessageRoom',{attrs:{"mailto":_vm.mailto,"name":_vm.name,"slug":_vm.slug}}):_c('div',{staticClass:"need-pick"},[_c('img',{attrs:{"src":__webpack_require__(146)}}),_vm._v(" "),_c('p',[_vm._v("未选择聊天")])])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_slug/message.vue?vue&type=template&id=168a96a6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Menu.vue?vue&type=template&id=e21bd108&
var Menuvue_type_template_id_e21bd108_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"message-menu"},[_vm._ssrNode((_vm._ssrList((_vm.menu),function(item){return ("<li><div class=\"room-item clearfix\">"+((item.user.avatar)?("<img"+(_vm._ssrAttr("src",_vm.$resizeImage(item.user.avatar, { width: 42 })))+(_vm._ssrAttr("alt",item.user.nickname))+" class=\"avatar\">"):"<!---->")+" <div class=\"content\"><p class=\"nickname oneline\">"+(_vm._s(item.user.nickname))+"</p> <div class=\"footer\">"+((item.count)?("<div class=\"read-badge\">"+_vm._ssrEscape(_vm._s(item.count))+"</div>"):"<!---->")+"</div></div></div> <div class=\"close\">\n      ×\n    </div></li>")})))])}
var Menuvue_type_template_id_e21bd108_staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/Menu.vue?vue&type=template&id=e21bd108&

// EXTERNAL MODULE: external "element-ui/lib/loading"
var loading_ = __webpack_require__(80);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading_);

// EXTERNAL MODULE: ./api/flowApi.js
var flowApi = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Menu.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: 'MessageMenu',
  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      menuWatcher: null,
      timeWatcher: null,
      friends: []
    };
  },

  computed: {
    menu() {
      return this.$store.state.messageMenu.list;
    }

  },

  mounted() {
    this.menuWatcher = this.$watch('$store.state.mailbox.unread_message_total', (newVal, oldVal) => {
      if (newVal > oldVal && !this.$store.state.socket.isConnected) {
        this.$store.dispatch('getMessageMenu');
      }
    });
    this.timeWatcher = this.$watch('$store.state.messageMenu.time', () => {
      this.$store.dispatch('updateMessageMenu');
    });
    this.$store.dispatch('updateMessageMenu');

    if (this.menu.length && this.$store.state.socket.isConnected) {
      return;
    }

    this.initChatRoom();
  },

  beforeDestroy() {
    this.menuWatcher && this.menuWatcher();
    this.timeWatcher && this.timeWatcher();
  },

  methods: {
    async initChatRoom() {
      const loading = loading_default.a.service({
        target: this.$el
      });

      await this.getUserFriends();
      await this.$store.dispatch('getMessageMenu');
      loading.close();
    },

    async getUserFriends() {
      const getData = () => {
        Object(flowApi["getUserRelation"])({
          $axios: this.$axios,
          slug: this.slug,
          relation: 'friend'
        }).then(data => {
          data.result.forEach(user => this.$cache.setUserSessionStore(user));
          this.friends = data.result;
          sessionStorage.setItem('user-friends-list', JSON.stringify(data.result));
        });
      };

      try {
        const cache = sessionStorage.getItem('user-friends-list');

        if (!cache) {
          await getData();
          return;
        }

        const result = JSON.parse(cache);
        result.forEach(user => this.$cache.setUserSessionStore(user));
        this.friends = result;
      } catch (e) {
        await getData();
      }
    },

    deleteChannel(item) {
      this.$axios.$post('v1/message/delete_channel', {
        channel: item.channel
      }).then(() => {
        this.$store.commit('DELETE_MESSAGE_MENU', item.channel);
      }).catch(() => {});
    },

    emitClick(item) {
      this.$emit('open', item);
    }

  }
});
// CONCATENATED MODULE: ./components/chat/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/Menu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chat_Menuvue_type_script_lang_js_,
  Menuvue_type_template_id_e21bd108_render,
  Menuvue_type_template_id_e21bd108_staticRenderFns,
  false,
  injectStyles,
  null,
  "e8fc8e0c"
  
)

/* harmony default export */ var Menu = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Room.vue?vue&type=template&id=1d3dc89e&
var Roomvue_type_template_id_1d3dc89e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"room"},[_vm._ssrNode("<div class=\"room-header\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.name)+"\n  ")+"</div> "),_c('FlowLoader',{ref:"loader",staticClass:"room-body",attrs:{"func":"getUserMessage","type":"sinceId","query":_vm.query,"callback":_vm.handleMessageLoad,"callback-once":false,"cache-timeout":86400,"auto":0},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var flow = ref.flow;
return _c('div',{ref:"wrap",staticClass:"room-chats"},[_c('Scroll',{ref:"scroll",attrs:{"data":flow},on:{"top":_vm.handleScrollUp}},[_c('ChatRoom',{ref:"room",attrs:{"avatar-component":_vm.avatarComp,"message-components":_vm.messageComps}})],1)],1)}}])}),_vm._ssrNode(" <div class=\"room-footer\"><textarea maxlength=\"500\" placeholder=\"say it...\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</textarea> <div class=\"helper\"><span>"+_vm._ssrEscape(_vm._s(_vm.computeHelperTxt))+"</span> <button>\n        发送\n      </button></div></div>")],2)}
var Roomvue_type_template_id_1d3dc89e_staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/Room.vue?vue&type=template&id=1d3dc89e&

// EXTERNAL MODULE: external "oh-my-chat"
var external_oh_my_chat_ = __webpack_require__(81);
var external_oh_my_chat_default = /*#__PURE__*/__webpack_require__.n(external_oh_my_chat_);

// EXTERNAL MODULE: ./node_modules/oh-my-chat/dist/oh-my-chat.css
var oh_my_chat = __webpack_require__(238);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Avatar.vue?vue&type=template&id=0c148e8d&
var Avatarvue_type_template_id_0c148e8d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-avatar",class:[_vm.isMine ? 'chat-avatar-mine' : 'chat-avatar-other']},[_c('UserAvatar',{attrs:{"user":_vm.item,"size":36}})],1)}
var Avatarvue_type_template_id_0c148e8d_staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/Avatar.vue?vue&type=template&id=0c148e8d&

// EXTERNAL MODULE: ./components/user/UserAvatar.vue + 4 modules
var UserAvatar = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: 'ChatAvatar',
  components: {
    UserAvatar: UserAvatar["a" /* default */]
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isMine() {
      return this.$store.state.user.slug === this.item.slug;
    }

  }
});
// CONCATENATED MODULE: ./components/chat/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/chat/Avatar.vue



function Avatar_injectStyles (context) {
  
  var style0 = __webpack_require__(239)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Avatar_component = Object(componentNormalizer["a" /* default */])(
  chat_Avatarvue_type_script_lang_js_,
  Avatarvue_type_template_id_0c148e8d_render,
  Avatarvue_type_template_id_0c148e8d_staticRenderFns,
  false,
  Avatar_injectStyles,
  null,
  "1b2a7998"
  
)

/* harmony default export */ var Avatar = (Avatar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Message.vue?vue&type=template&id=b1ba8c26&
var Messagevue_type_template_id_b1ba8c26_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-message"},[_c('JsonContent',{attrs:{"content":_vm.item.content}})],1)}
var Messagevue_type_template_id_b1ba8c26_staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/Message.vue?vue&type=template&id=b1ba8c26&

// EXTERNAL MODULE: ./components/editor/JsonContent.vue + 58 modules
var JsonContent = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Messagevue_type_script_lang_js_ = ({
  name: 'ChatMessage',
  components: {
    JsonContent: JsonContent["a" /* default */]
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/chat/Message.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_Messagevue_type_script_lang_js_ = (Messagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/chat/Message.vue



function Message_injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Message_component = Object(componentNormalizer["a" /* default */])(
  chat_Messagevue_type_script_lang_js_,
  Messagevue_type_template_id_b1ba8c26_render,
  Messagevue_type_template_id_b1ba8c26_staticRenderFns,
  false,
  Message_injectStyles,
  null,
  "11d52bbc"
  
)

/* harmony default export */ var Message = (Message_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Scroll.vue?vue&type=template&id=5da0fbbc&
var Scrollvue_type_template_id_5da0fbbc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper",staticClass:"scroll-warp"},[_vm._t("default")],2)}
var Scrollvue_type_template_id_5da0fbbc_staticRenderFns = []


// CONCATENATED MODULE: ./components/common/Scroll.vue?vue&type=template&id=5da0fbbc&

// EXTERNAL MODULE: external "@better-scroll/core"
var core_ = __webpack_require__(82);
var core_default = /*#__PURE__*/__webpack_require__.n(core_);

// EXTERNAL MODULE: external "@better-scroll/mouse-wheel"
var mouse_wheel_ = __webpack_require__(83);
var mouse_wheel_default = /*#__PURE__*/__webpack_require__.n(mouse_wheel_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/Scroll.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var Scrollvue_type_script_lang_js_ = ({
  name: 'VScroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    scrollX: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    data() {
      this.refresh();
    }

  },

  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },

  beforeDestroy() {
    if (this.scroll) {
      this.scroll.destroy();
    }
  },

  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }

      core_default.a.use(mouse_wheel_default.a);
      this.scroll = new core_default.a(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        fade: true,
        scrollX: this.scrollX,
        scrollY: !this.scrollX,
        mouseWheel: {
          invert: false,
          speed: 30,
          easeTime: 300
        }
      });
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y > -50) {
          this.$emit('top');
        }

        if (this.scroll.y <= this.scroll.maxScrollY + 50) {
          this.$emit('bottom');
        }
      });
    },

    enable() {
      this.scroll && this.scroll.enable();
    },

    disable() {
      this.scroll && this.scroll.disable();
    },

    refresh() {
      return new Promise(resolve => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.scroll && this.scroll.refresh();
            this.$nextTick(() => {
              resolve();
            });
          }, 20);
        });
      });
    },

    scrollTo() {
      // 滚动到相应位置
      setTimeout(() => {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      }, 0);
    },

    scrollToElement() {
      setTimeout(() => {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      }, 0);
    }

  }
});
// CONCATENATED MODULE: ./components/common/Scroll.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Scrollvue_type_script_lang_js_ = (Scrollvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/common/Scroll.vue



function Scroll_injectStyles (context) {
  
  var style0 = __webpack_require__(241)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Scroll_component = Object(componentNormalizer["a" /* default */])(
  common_Scrollvue_type_script_lang_js_,
  Scrollvue_type_template_id_5da0fbbc_render,
  Scrollvue_type_template_id_5da0fbbc_staticRenderFns,
  false,
  Scroll_injectStyles,
  null,
  "625bbb35"
  
)

/* harmony default export */ var Scroll = (Scroll_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/Room.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Roomvue_type_script_lang_js_ = ({
  name: 'MessageRoom',
  components: {
    Scroll: Scroll,
    ChatRoom: external_oh_my_chat_default.a
  },
  props: {
    mailto: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      message: '',
      target: null,
      chatsHeight: 0,
      stopWatcher: null,
      noMore: false
    };
  },

  computed: {
    query() {
      return {
        channel: this.mailto,
        $axios: this.$axios
      };
    },

    avatarComp() {
      return Avatar;
    },

    messageComps() {
      return {
        message: Message
      };
    },

    computeHelperTxt() {
      if (typeof window === 'undefined') {
        return '';
      }

      if (/windows/.test(window.navigator.userAgent.toLocaleLowerCase())) {
        return '按下Ctrl+Enter换行';
      }

      return '按下Cmd+Enter换行';
    }

  },
  watch: {
    $route() {
      this.initRoom();
    }

  },

  beforeMount() {
    if (!this.$store.state.messageRoom[this.mailto]) {
      this.$store.commit('INIT_MESSAGE_ROOM', this.mailto);
    }
  },

  mounted() {
    this.initRoom();
  },

  methods: {
    initRoom() {
      this.$nextTick(async () => {
        this.$refs.room && this.$refs.room.clearMessage();
        this.$refs.loader && this.$refs.loader.forceCallback();
        await this.$refs.loader.initData({
          is_up: 1
        });
        await this.$refs.loader.loadMore({
          force: true
        });
        this.clearUnreadCount();
        this.watchMessageLoop();
      });
    },

    clearUnreadCount() {
      const menu = this.$store.state.messageMenu.list.filter(_ => _.channel === this.mailto)[0];

      if (!menu || menu.count <= 0) {
        return;
      }

      this.$axios.$post('v1/message/clear_channel', {
        channel: this.mailto
      });
      this.$store.commit('CLEAR_NOTIFICATION', {
        channel: this.mailto,
        count: menu.count
      });
    },

    watchMessageLoop() {
      this.stopWatcher && this.stopWatcher();
      const self = this;
      const roomId = self.mailto;
      this.stopWatcher = this.$watch(function () {
        return self.$store.state.messageRoom[self.mailto].time;
      }, function () {
        if (roomId !== self.mailto) {
          this.stopWatcher();
          return;
        }

        const message = self.$store.state.messageRoom[self.mailto].data;

        if (self.$store.state.socket.isConnected && message) {
          self.appendMessage(message);
        } else {
          self.$refs.loader.loadMore({
            force: true
          });
        }

        self.screenScroll();
        self.clearUnreadCount();
      });
    },

    handleScrollUp() {
      if (this.noMore) {
        return;
      }

      this.$refs.loader.loadBefore({
        force: true
      });
    },

    handleMessageLoad({
      data,
      params
    }) {
      if (params.is_up === 0 && !data.result.length) {
        this.noMore = true;
      }

      this.$nextTick(() => {
        if (params.is_up === 1) {
          data.result.map(_ => _).reverse().map(msg => {
            this.appendMessage(msg, false);
          });
          this.screenScroll(false);
        } else {
          data.result.map(msg => {
            this.appendMessage(msg);
          });
          this.screenScroll();
        }
      });
    },

    screenScroll(forceBottom = true) {
      if (!this.$refs.scroll) {
        return;
      }

      this.$refs.scroll.refresh().then(() => {
        const newChatsHeight = this.$refs.room.$el.clientHeight;
        const wrapChatHeight = this.$refs.wrap.clientHeight;

        if (newChatsHeight < wrapChatHeight) {
          return;
        }

        if (this.lastChatsHeight && !forceBottom) {
          this.$refs.scroll.scrollTo(0, this.lastChatsHeight - newChatsHeight);
        } else {
          this.$refs.scroll.scrollTo(0, wrapChatHeight - newChatsHeight);
        }

        this.lastChatsHeight = newChatsHeight;
      });
    },

    appendMessage(msg, insertToAfter = true) {
      this.$refs.room.addMessage({
        id: msg.id,
        type: 'message',
        float: msg.user.slug === this.slug ? 'right' : 'left',
        color: msg.user.sex === 2 ? {
          bg: '#ff6881',
          text: '#fff'
        } : {
          bg: '#12b7f5',
          text: '#fff'
        },
        data: msg
      }, insertToAfter);
    },

    handleAddBubble() {
      if (!this.message.trim()) {
        return;
      }

      const jsonContent = [{
        type: 'paragraph',
        data: {
          text: this.message.trim()
        }
      }];
      const randomId = Math.random().toString(10).substring(3, 6);
      this.appendMessage({
        id: randomId,
        user: this.$store.state.user,
        content: jsonContent,
        created_at: Date.now()
      });
      this.screenScroll();
      this.message = '';
      this.$axios.$post('v1/message/send', {
        channel: this.mailto,
        content: jsonContent
      }).then(msg => {
        this.$refs.room.updateMessage(randomId, {
          id: msg.id
        });
        this.$refs.loader.append(msg);
      }).catch(() => {
        this.$refs.room.updateMessage(randomId, {
          status: 'error'
        });
      });
    },

    handleNewLine() {
      if (!this.message) {
        return;
      }

      this.message += '\n';
    }

  }
});
// CONCATENATED MODULE: ./components/chat/Room.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_Roomvue_type_script_lang_js_ = (Roomvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/chat/Room.vue



function Room_injectStyles (context) {
  
  var style0 = __webpack_require__(242)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Room_component = Object(componentNormalizer["a" /* default */])(
  chat_Roomvue_type_script_lang_js_,
  Roomvue_type_template_id_1d3dc89e_render,
  Roomvue_type_template_id_1d3dc89e_staticRenderFns,
  false,
  Room_injectStyles,
  null,
  "b5abf314"
  
)

/* harmony default export */ var Room = (Room_component.exports);
// EXTERNAL MODULE: ./mixins/mustSelf.js
var mustSelf = __webpack_require__(127);

// EXTERNAL MODULE: ./mixins/mustSign.js
var mustSign = __webpack_require__(104);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_slug/message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  name: 'UserMessage',
  components: {
    MessageMenu: Menu,
    MessageRoom: Room
  },
  mixins: [mustSign["a" /* default */], mustSelf["a" /* default */]],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    mailto() {
      return this.$route.query.mailto;
    },

    name() {
      return this.$route.query.name;
    }

  },
  methods: {
    handleOpen(item) {
      this.$router.push(this.$alias.user(this.slug, `message/?mailto=${item.channel}&name=${item.user.nickname}`));
    }

  }
});
// CONCATENATED MODULE: ./pages/user/_slug/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var _slug_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/user/_slug/message.vue



function message_injectStyles (context) {
  
  var style0 = __webpack_require__(243)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var message_component = Object(componentNormalizer["a" /* default */])(
  _slug_messagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  message_injectStyles,
  null,
  "517931c6"
  
)

/* harmony default export */ var message = __webpack_exports__["default"] = (message_component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// Exports
module.exports = {};


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

/***/ })

};;
//# sourceMappingURL=message.js.map