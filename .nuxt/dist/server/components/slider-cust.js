exports.ids = [14];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SliderCust.vue?vue&type=template&id=adb5b78e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.selectedOption ? _c('div', {
    staticClass: "slider-container"
  }, [_vm._ssrNode("<button class=\"prev\" data-v-adb5b78e>❮</button> "), _c('transition-group', {
    attrs: {
      "name": "fade",
      "tag": "div"
    }
  }, [_c('div', {
    key: _vm.currentIndex,
    on: {
      "click": _vm.selectOption
    }
  }, [_c('img', {
    staticClass: "slider-image",
    attrs: {
      "src": _vm.currentImg
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "tag-small"
  }, [_vm._v(_vm._s(_vm.images[_vm.currentIndex].label))])])]), _vm._ssrNode(" <button class=\"next\" data-v-adb5b78e>❯</button>")], 2) : _c('div', [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.selectedOption))])]), _vm._ssrNode(" "), _c('el-col', {
    staticClass: "custom-right",
    attrs: {
      "span": 18
    }
  }, [_c('button', {
    on: {
      "click": _vm.resetSelection
    }
  }, [_vm._v("Change Selection")])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SliderCust.vue?vue&type=template&id=adb5b78e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SliderCust.vue?vue&type=script&lang=js&
/* harmony default export */ var SliderCustvue_type_script_lang_js_ = ({
  name: "SliderCust",
  props: {
    // Define a prop for images
    hierarchicalData: {
      type: Array,
      required: true
    },
    images: Array
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
      selectedOption: null
    };
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.nextSlide, 10000);
    },
    nextSlide: function () {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide: function () {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    selectOption: function () {
      this.selectedOption = this.images[this.currentIndex].label;
      this.$emit('option-selected', this.images[this.currentIndex].value);
      clearInterval(this.timer); // Stop the automatic slide when an option is selected
    },

    resetSelection: function () {
      this.$emit('reset-options');
      this.selectedOption = null;
      this.startSlide(); // Restart the automatic slide when changing the selection
    }
  },

  computed: {
    currentImg: function () {
      return this.images[this.currentIndex].url;
    }
  }
});
// CONCATENATED MODULE: ./components/SliderCust.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SliderCustvue_type_script_lang_js_ = (SliderCustvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/SliderCust.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SliderCustvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "adb5b78e",
  "0f00a4d0"
  
)

/* harmony default export */ var SliderCust = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCust_vue_vue_type_style_index_0_id_adb5b78e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCust_vue_vue_type_style_index_0_id_adb5b78e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCust_vue_vue_type_style_index_0_id_adb5b78e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCust_vue_vue_type_style_index_0_id_adb5b78e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderCust_vue_vue_type_style_index_0_id_adb5b78e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".custom-right[data-v-adb5b78e]{display:flex;justify-content:flex-end;margin-top:8px}.slider-container[data-v-adb5b78e]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;min-height:100px;position:relative}.image-container[data-v-adb5b78e]{flex-grow:1;text-align:center}.slider-image[data-v-adb5b78e]{height:auto;max-width:100%}.tag-small[data-v-adb5b78e]{background-color:rgba(0,0,0,.7);bottom:10px;font-size:16px;left:10px;margin:0;padding:10px 14px}.next[data-v-adb5b78e],.prev[data-v-adb5b78e],.tag-small[data-v-adb5b78e]{border-radius:4px;color:#fff;position:absolute;z-index:1}.next[data-v-adb5b78e],.prev[data-v-adb5b78e]{background-color:rgba(0,0,0,.6);border:none;cursor:pointer;font-size:18px;font-weight:700;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;top:50%;transform:translateY(-50%);transition:.7s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.next[data-v-adb5b78e]{border-radius:0 4px 4px 0;right:0}.prev[data-v-adb5b78e]{left:0}.next[data-v-adb5b78e]:hover,.prev[data-v-adb5b78e]:hover{background-color:rgba(0,0,0,.9)}button[data-v-adb5b78e]{background-color:#007bff;border:none;border-radius:25px;color:#fff;cursor:pointer;font-weight:700;padding:12px 24px;transition:background-color .3s}.fade-enter-active[data-v-adb5b78e]{transition:opacity .5s ease;transition-delay:.5s}.fade-leave-active[data-v-adb5b78e]{transition:opacity .5s ease}.fade-enter[data-v-adb5b78e],.fade-leave-to[data-v-adb5b78e]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("21595d8c", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=slider-cust.js.map