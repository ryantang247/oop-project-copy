exports.ids = [3,14];
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

/***/ 111:
/***/ (function(module) {

module.exports = JSON.parse("{\"roomTypes\":{\"single\":{\"label\":\"Single Room\",\"image\":\"./dorm/dorm1.jpg\"},\"double\":{\"label\":\"Double Room\",\"image\":\"./dorm/dorm2.jpg\"},\"quad\":{\"label\":\"Suite\",\"image\":\"./dorm/dorm3.jpg\"}},\"comments\":[{\"id\":1,\"author\":\"trollolol\",\"rating\":0,\"text\":\"This is the first comment\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"john\",\"text\":\"Reply to the first comment\"},{\"id\":2,\"author\":\"lmao\",\"text\":\"Another reply to the first comment\"}]},{\"id\":2,\"author\":\"ryant\",\"rating\":5,\"text\":\"This is the second comment\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"lam123\",\"text\":\"Reply to the second comment\"}]},{\"id\":3,\"author\":\"han\",\"rating\":4,\"text\":\"This room smells like eggs\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"cons178\",\"text\":\"Reply to the second comment\"},{\"id\":2,\"author\":\"123esther\",\"text\":\"Yes!\"}]},{\"id\":4,\"author\":\"Martin\",\"rating\":2,\"text\":\"Great post!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"haha789\",\"text\":\"Thanks!\"},{\"id\":2,\"author\":\"pukitai12\",\"text\":\"I agree!\"}]},{\"id\":5,\"author\":\"johnny00\",\"rating\":4,\"text\":\"Interesting room!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"weiyao12\",\"text\":\"Yes, it is!\"},{\"id\":2,\"author\":\"daniel99\",\"text\":\"Tell me more!\"}]},{\"id\":6,\"author\":\"ronnie_ng\",\"rating\":3,\"text\":\"nan ke da su she taikula\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"bananyeehaws\",\"text\":\"que shi queshi!\"},{\"id\":2,\"author\":\"pops44\",\"text\":\"I appreciate it.\"}]},{\"id\":7,\"author\":\"jt_12\",\"rating\":2,\"text\":\"Keep it up!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"lol432\",\"text\":\"I will!\"},{\"id\":2,\"author\":\"ffdas432\",\"text\":\"You're doing great!\"}]},{\"id\":8,\"author\":\"pinoy88\",\"rating\":5,\"text\":\"Nice Room!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"thahnmihn211\",\"text\":\"I will rent this!\"},{\"id\":2,\"author\":\"poilam43\",\"text\":\"Yeehawwww!\"}]},{\"id\":9,\"author\":\"pinoybenar123\",\"rating\":3,\"text\":\"Nak tukar wang lama, DM sya, old coin need now\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"hockf32\",\"text\":\"DM\"},{\"id\":2,\"author\":\"gfsd876\",\"text\":\"DM jga\"}]}],\"optionsTree\":[{\"label\":\"first phase\",\"url\":\"./sustech/lakeside_dorm.jpg\",\"value\":\"first phase\",\"Building\":[{\"label\":\"B1\",\"value\":1,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":101,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\",\"comment\":[1]},{\"roomNumber\":102,\"roomType\":\"double\",\"roomStatus\":false,\"roomFor\":\"postdoc\",\"comment\":[2,3]},{\"roomNumber\":130,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":135,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"comment\":[4],\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":204,\"roomType\":\"quad\",\"roomStatus\":false,\"roomFor\":\"postdoc\"}]}]},{\"label\":\"B2\",\"value\":2,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":101,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\"},{\"roomNumber\":111,\"roomType\":\"double\",\"comment\":[5],\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":112,\"roomType\":\"double\",\"roomStatus\":false,\"roomFor\":\"master\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"master\"},{\"roomNumber\":209,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"doctorate\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"comment\":[6,7],\"roomStatus\":true,\"roomFor\":\"master\"}]}]},{\"label\":\"B3\",\"value\":3,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":209,\"roomType\":\"single\",\"comment\":[8],\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"master\"}]}]},{\"label\":\"B4\",\"value\":4,\"Floors\":[{\"label\":\"F1\",\"value\":\"1\",\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"comment\":[9],\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":209,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"postdoc\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\"},{\"roomNumber\":209,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"postdoc\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":false,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":3,\"Room\":[{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]}]}]},{\"label\":\"lychee hill\",\"url\":\"./sustech/lychee.jpg\",\"value\":\"lychee hill\"},{\"label\":\"second phase\",\"url\":\"./sustech/student_condo.jpg\",\"value\":\"second phase\",\"Building\":[{\"label\":\"B1\",\"value\":1,\"position\":[113.99913918407441,22.60212445711336],\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":1,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":2,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":3,\"roomType\":\"single\",\"comment\":[6,7],\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":4,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\"},{\"roomNumber\":5,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"masters\"},{\"roomNumber\":6,\"roomType\":\"single\",\"comment\":[6,7],\"roomStatus\":false,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":1,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"psotdoc\"},{\"roomNumber\":2,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"master\"},{\"roomNumber\":3,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]}]},{\"label\":\"B2\",\"value\":2,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":1,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"doctorate\"},{\"roomNumber\":2,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":3,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":4,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":5,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":6,\"roomType\":\"single\",\"comment\":[6,7],\"roomStatus\":true,\"roomFor\":\"doctorate\"}]}]}]}]}");

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("23dbebe6", content, true, context)
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGrids_vue_vue_type_style_index_0_id_097cd06b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGrids_vue_vue_type_style_index_0_id_097cd06b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGrids_vue_vue_type_style_index_0_id_097cd06b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGrids_vue_vue_type_style_index_0_id_097cd06b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGrids_vue_vue_type_style_index_0_id_097cd06b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-097cd06b]{align-items:center;display:flex;flex-direction:column;margin:0 auto;width:70%}.button-grid[data-v-097cd06b]{grid-gap:10px;//margin-bottom:40px;display:grid;gap:10px;grid-template-columns:minmax(100px,1fr) minmax(100px,1fr) minmax(100px,1fr)}.occupied[data-v-097cd06b]{background-color:red}.available[data-v-097cd06b]{background-color:green}ElCarousel[data-v-097cd06b]{height:auto}.carousel-custom[data-v-097cd06b]{border:2px solid #b3d1c8;height:auto;margin:20px auto 0;width:50%}.button-grid-container[data-v-097cd06b]{//margin:0 auto;align-items:flex-start;display:flex;flex-wrap:wrap;height:100%;justify-content:center}button[data-v-097cd06b]{padding:20px;width:100%}.comment-item[data-v-097cd06b]{text-align:left}.comment-info[data-v-097cd06b]{margin-bottom:5px}.comment-right[data-v-097cd06b]{margin-left:auto;margin-right:0;text-align:right}.replycontainer[data-v-097cd06b]{margin-left:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ButtonGrids.vue?vue&type=template&id=097cd06b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"container\" data-v-097cd06b>", "</div>", [_vm._ssrNode("<h2 data-v-097cd06b>Select a location:</h2> "), _c('SliderCust', {
    attrs: {
      "images": _vm.options
    },
    on: {
      "option-selected": _vm.handleLocationChange,
      "reset-options": _vm.resetOptions
    }
  }), _vm._ssrNode(" "), _vm.selectedID[0] ? _vm._ssrNode("<div class=\"form-select\" data-v-097cd06b>", "</div>", [_vm._ssrNode("<h2 data-v-097cd06b>Select a building:</h2> "), _c('el-select', {
    attrs: {
      "value-key": "id",
      "id": "selectOption",
      "placeholder": "Select building"
    },
    model: {
      value: _vm.selectedID[1],
      callback: function ($$v) {
        _vm.$set(_vm.selectedID, 1, $$v);
      },
      expression: "selectedID[1]"
    }
  }, _vm._l(this.options[_vm.selectedID[0] - 1].Building, function (option) {
    return _c('el-option', {
      key: option.label,
      attrs: {
        "label": option.label,
        "value": option.value
      }
    });
  }), 1)], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm.selectedID[1] && _vm.selectedID[0] ? _vm._ssrNode("<div class=\"carousel-custom\" data-v-097cd06b>", "</div>", [_c('ElCarousel', {
    attrs: {
      "height": "500px",
      "arrow": "always",
      "trigger": "click"
    }
  }, _vm._l(this.options[_vm.selectedID[0] - 1].Building[_vm.selectedID[1] - 1].Floors, function (floor) {
    return _c('ElCarouselItem', {
      key: floor.value
    }, [_c('h2', [_vm._v(_vm._s(floor.label))]), _vm._v(" "), _c('div', {
      staticClass: "button-grid-container"
    }, [_c('div', {
      staticClass: "button-grid"
    }, _vm._l(_vm.getRooms(floor), function (room) {
      return _c('button', {
        key: room.roomNumber,
        class: {
          'occupied': room.roomStatus,
          'available': !room.roomStatus
        },
        on: {
          "click": function ($event) {
            return _vm.handleButton(room.comment);
          }
        }
      }, [_vm._v("\n              " + _vm._s(room.roomNumber) + "\n            ")]);
    }), 0)])]);
  }), 1)], 1) : _vm._e(), _vm._ssrNode(" "), _vm.filteredComments.length > 0 ? _vm._ssrNode("<div data-v-097cd06b>", "</div>", [_c('el-dialog', {
    attrs: {
      "visible": _vm.dialogVisible,
      "before-close": _vm.handleClose
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c('h2', [_vm._v("Comment")]), _vm._v(" "), _vm._l(_vm.filteredComments, function (comment) {
    return _c('div', {
      key: comment.id,
      staticClass: "comment-item"
    }, [_c('el-row', [_c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_c('el-avatar', {
      attrs: {
        "src": "../static/sustech/avatar.png"
      }
    })], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 16
      }
    }, [_c('p', {
      staticClass: "comment-info"
    }, [_c('strong', [_vm._v(" " + _vm._s(comment.author))])])]), _vm._v(" "), _c('el-col', {
      staticClass: "comment-right",
      attrs: {
        "span": 6
      }
    }, [_c('el-rate', {
      attrs: {
        "size": "large",
        "disabled": ""
      },
      model: {
        value: comment.rating,
        callback: function ($$v) {
          _vm.$set(comment, "rating", $$v);
        },
        expression: "comment.rating"
      }
    })], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
      attrs: {
        "span": 20
      }
    }, [_c('p', {
      staticClass: "comment-info"
    }, [_vm._v(_vm._s(comment.text))])]), _vm._v(" "), _c('el-col', {
      staticClass: "comment-right",
      attrs: {
        "span": 4
      }
    }, [_c('p', {
      on: {
        "click": function ($event) {
          return _vm.addReply(comment.id);
        }
      }
    }, [_vm._v(_vm._s(comment.addreply ? 'Cancel Reply' : 'Reply'))])])], 1), _vm._v(" "), comment.addreply ? _c('div', [_c('el-input', {
      staticStyle: {
        "margin": "10px"
      },
      attrs: {
        "placeholder": "Please input"
      },
      model: {
        value: _vm.newReply,
        callback: function ($$v) {
          _vm.newReply = $$v;
        },
        expression: "newReply"
      }
    }), _vm._v(" "), _c('button', {
      on: {
        "click": function ($event) {
          return _vm.submitReply(comment.id, comment.newReply);
        }
      }
    }, [_vm._v("Submit Reply")])], 1) : _vm._e(), _vm._v(" "), comment.replies.length > 0 ? _c('div', _vm._l(comment.replies, function (reply) {
      return _c('div', {
        key: reply.id,
        staticClass: "replycontainer"
      }, [_c('el-row', [_c('el-col', {
        attrs: {
          "span": 2
        }
      }, [_c('el-avatar', {
        attrs: {
          "src": "../static/sustech/avatar.png"
        }
      })], 1), _vm._v(" "), _c('el-col', {
        attrs: {
          "span": 10
        }
      }, [_c('p', {
        staticClass: "comment-info"
      }, [_c('strong', [_vm._v(" " + _vm._s(reply.author))])])])], 1), _vm._v(" "), _c('p', [_vm._v(_vm._s(reply.text))])], 1);
    }), 0) : _vm._e()], 1);
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "10px",
      "border-top": "1px solid #ccc"
    }
  }, [_c('button', {
    staticStyle: {
      "background-color": "burlywood",
      "margin-top": "20px"
    },
    on: {
      "click": function ($event) {
        _vm.addComment = !_vm.addComment;
      }
    }
  }, [_vm._v(_vm._s(_vm.addComment ? 'Cancel Comment' : 'Comment'))]), _vm._v(" "), _vm.addComment ? _c('div', [_c('el-rate', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "size": "large"
    },
    model: {
      value: _vm.addCommentContent.ratings,
      callback: function ($$v) {
        _vm.$set(_vm.addCommentContent, "ratings", $$v);
      },
      expression: "addCommentContent.ratings"
    }
  }), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin": "10px"
    },
    attrs: {
      "placeholder": "Type your feeling on this room!"
    },
    model: {
      value: _vm.newComment,
      callback: function ($$v) {
        _vm.newComment = $$v;
      },
      expression: "newComment"
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.handleComment
    }
  }, [_vm._v("Submit Comment")])], 1) : _vm._e()])], 2)], 1) : _vm._e(), _vm._ssrNode(" "), _vm.filteredComments.length < 1 && _vm.isSelectedButton === true ? _vm._ssrNode("<div data-v-097cd06b>", "</div>", [_c('el-dialog', {
    attrs: {
      "title": "No Comment",
      "visible": _vm.dialogVisible,
      "before-close": _vm.handleClose
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c('p', [_vm._v("No comment")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "10px",
      "border-top": "1px solid #ccc"
    }
  }, [_c('button', {
    staticStyle: {
      "background-color": "burlywood",
      "margin-top": "20px"
    },
    on: {
      "click": function ($event) {
        _vm.addComment = !_vm.addComment;
      }
    }
  }, [_vm._v(_vm._s(_vm.addComment ? 'Cancel Comment' : 'Comment'))]), _vm._v(" "), _vm.addComment ? _c('div', [_c('el-rate', {
    attrs: {
      "size": "large"
    },
    model: {
      value: _vm.addCommentContent.ratings,
      callback: function ($$v) {
        _vm.$set(_vm.addCommentContent, "ratings", $$v);
      },
      expression: "addCommentContent.ratings"
    }
  }), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin": "10px"
    },
    attrs: {
      "placeholder": "Type your feeling on this room!"
    },
    model: {
      value: _vm.addCommentContent.comment,
      callback: function ($$v) {
        _vm.$set(_vm.addCommentContent, "comment", $$v);
      },
      expression: "addCommentContent.comment"
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.handleComment
    }
  }, [_vm._v("Submit Comment")])], 1) : _vm._e()])])], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ButtonGrids.vue?vue&type=template&id=097cd06b&scoped=true&

// EXTERNAL MODULE: ./static/data.json
var data = __webpack_require__(111);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(80);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ButtonGrids.vue?vue&type=script&lang=js&


/* harmony default export */ var ButtonGridsvue_type_script_lang_js_ = ({
  name: 'ButtonGrids',
  data() {
    return {
      options: data.optionsTree,
      comments: data.comments,
      rooms: [],
      dialogVisible: true,
      addComment: false,
      submitReply: false,
      roomCommentArr: [],
      selectedLocation: '',
      isSelectedButton: false,
      newReply: "",
      roomNumber: 0,
      selectedID: {
        select1: null,
        select2: null,
        select3: null,
        select4: null
      },
      addCommentContent: {
        ratings: 0,
        comment: ""
      }
    };
  },
  devServer: {
    devServer: {
      proxy: {
        '/dorm': {
          target: 'http://localhost:8080/',
          // Replace with your Flask server address
          changeOrigin: true,
          ws: true
        }
      }
    }
  },
  computed: {
    filteredComments() {
      // Filter comments based on the roomIds array
      // console.log("Comment Array: ",this.roomCommentArr)
      if (this.comments !== [] && this.roomCommentArr !== null) {
        return this.comments.filter(comment => this.roomCommentArr.includes(comment.id));
      } else {
        return [];
      }
    }
  },
  methods: {
    async getDorms() {
      const apiUrl = `http://localhost:8080/dorm `;
      try {
        // Get file tree
        const response = await external_axios_default.a.get(apiUrl);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    },
    getRooms(floor) {
      this.rooms = floor.Room || [];
      return floor.Room || [];
    },
    handleLocationChange(option) {
      // console.log(option)
      this.selectedLocation = this.options[option - 1].label;

      // in this case we need to use for selectedID
      this.$set(this.selectedID, 0, option);
    },
    handleButton(commentArr) {
      this.isSelectedButton = true;
      if (commentArr) {
        this.roomCommentArr = commentArr;
      } else {
        this.roomCommentArr = [];
      }
    },
    carouselHeight() {
      console.log("current Rooms: ", this.rooms);
      return this.rooms.length * 50; // Adjust the multiplier as needed
    },

    handleComment() {
      alert("Comment submitted!");
    },
    handleClose() {
      this.roomCommentArr = [];
      this.isSelectedButton = false;
      this.addComment = false;
    },
    resetOptions: function () {
      this.selectedLocation = '';
      Object.keys(this.selectedID).forEach(key => {
        this.$set(this.selectedID, key, null);
      });
    },
    toggleReplies(commentID) {
      this.comments[commentID - 1].showreply = !this.comments[commentID - 1].showreply;
    },
    addReply(commentID) {
      this.comments[commentID - 1].addreply = !this.comments[commentID - 1].addreply;
    }
  },
  created() {
    // Call the getDorms method when the component is created
    this.getDorms();
  }
});
// CONCATENATED MODULE: ./components/ButtonGrids.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ButtonGridsvue_type_script_lang_js_ = (ButtonGridsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/ButtonGrids.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ButtonGridsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "097cd06b",
  "87fa4372"
  
)

/* harmony default export */ var ButtonGrids = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SliderCust: __webpack_require__(104).default})


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
//# sourceMappingURL=button-grids.js.map