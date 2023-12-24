exports.ids = [8,14];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dorm1.5f2101c.jpg";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dorm2.11af49f.jpg";

/***/ }),

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

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("34a67bb2", content, true, context)
};

/***/ }),

/***/ 111:
/***/ (function(module) {

module.exports = JSON.parse("{\"roomTypes\":{\"single\":{\"label\":\"Single Room\",\"image\":\"./dorm/dorm1.jpg\"},\"double\":{\"label\":\"Double Room\",\"image\":\"./dorm/dorm2.jpg\"},\"quad\":{\"label\":\"Suite\",\"image\":\"./dorm/dorm3.jpg\"}},\"comments\":[{\"id\":1,\"author\":\"trollolol\",\"rating\":0,\"text\":\"This is the first comment\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"john\",\"text\":\"Reply to the first comment\"},{\"id\":2,\"author\":\"lmao\",\"text\":\"Another reply to the first comment\"}]},{\"id\":2,\"author\":\"ryant\",\"rating\":5,\"text\":\"This is the second comment\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"lam123\",\"text\":\"Reply to the second comment\"}]},{\"id\":3,\"author\":\"han\",\"rating\":4,\"text\":\"This room smells like eggs\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"cons178\",\"text\":\"Reply to the second comment\"},{\"id\":2,\"author\":\"123esther\",\"text\":\"Yes!\"}]},{\"id\":4,\"author\":\"Martin\",\"rating\":2,\"text\":\"Great post!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"haha789\",\"text\":\"Thanks!\"},{\"id\":2,\"author\":\"pukitai12\",\"text\":\"I agree!\"}]},{\"id\":5,\"author\":\"johnny00\",\"rating\":4,\"text\":\"Interesting room!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"weiyao12\",\"text\":\"Yes, it is!\"},{\"id\":2,\"author\":\"daniel99\",\"text\":\"Tell me more!\"}]},{\"id\":6,\"author\":\"ronnie_ng\",\"rating\":3,\"text\":\"nan ke da su she taikula\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"bananyeehaws\",\"text\":\"que shi queshi!\"},{\"id\":2,\"author\":\"pops44\",\"text\":\"I appreciate it.\"}]},{\"id\":7,\"author\":\"jt_12\",\"rating\":2,\"text\":\"Keep it up!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"lol432\",\"text\":\"I will!\"},{\"id\":2,\"author\":\"ffdas432\",\"text\":\"You're doing great!\"}]},{\"id\":8,\"author\":\"pinoy88\",\"rating\":5,\"text\":\"Nice Room!\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"thahnmihn211\",\"text\":\"I will rent this!\"},{\"id\":2,\"author\":\"poilam43\",\"text\":\"Yeehawwww!\"}]},{\"id\":9,\"author\":\"pinoybenar123\",\"rating\":3,\"text\":\"Nak tukar wang lama, DM sya, old coin need now\",\"showreply\":false,\"addreply\":false,\"replies\":[{\"id\":1,\"author\":\"hockf32\",\"text\":\"DM\"},{\"id\":2,\"author\":\"gfsd876\",\"text\":\"DM jga\"}]}],\"optionsTree\":[{\"label\":\"first phase\",\"url\":\"./sustech/lakeside_dorm.jpg\",\"value\":\"first phase\",\"Building\":[{\"label\":\"B1\",\"value\":1,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":101,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\",\"comment\":[1]},{\"roomNumber\":102,\"roomType\":\"double\",\"roomStatus\":false,\"roomFor\":\"postdoc\",\"comment\":[2,3]},{\"roomNumber\":130,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":135,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"comment\":[4],\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":204,\"roomType\":\"quad\",\"roomStatus\":false,\"roomFor\":\"postdoc\"}]}]},{\"label\":\"B2\",\"value\":2,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":101,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\"},{\"roomNumber\":111,\"roomType\":\"double\",\"comment\":[5],\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":112,\"roomType\":\"double\",\"roomStatus\":false,\"roomFor\":\"master\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"master\"},{\"roomNumber\":209,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"doctorate\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"comment\":[6,7],\"roomStatus\":true,\"roomFor\":\"master\"}]}]},{\"label\":\"B3\",\"value\":3,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":209,\"roomType\":\"single\",\"comment\":[8],\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"master\"}]}]},{\"label\":\"B4\",\"value\":4,\"Floors\":[{\"label\":\"F1\",\"value\":\"1\",\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"comment\":[9],\"roomStatus\":true,\"roomFor\":\"master\"},{\"roomNumber\":209,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"postdoc\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":201,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\"},{\"roomNumber\":209,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"postdoc\"},{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":false,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":3,\"Room\":[{\"roomNumber\":212,\"roomType\":\"quad\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]}]}]},{\"label\":\"lychee hill\",\"url\":\"./sustech/lychee.jpg\",\"value\":\"lychee hill\"},{\"label\":\"second phase\",\"url\":\"./sustech/student_condo.jpg\",\"value\":\"second phase\",\"Building\":[{\"label\":\"B1\",\"value\":1,\"position\":[113.99913918407441,22.60212445711336],\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":1,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":2,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":3,\"roomType\":\"single\",\"comment\":[6,7],\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":4,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"postdoc\"},{\"roomNumber\":5,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"masters\"},{\"roomNumber\":6,\"roomType\":\"single\",\"comment\":[6,7],\"roomStatus\":false,\"roomFor\":\"doctorate\"}]},{\"label\":\"F2\",\"value\":2,\"Room\":[{\"roomNumber\":1,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"psotdoc\"},{\"roomNumber\":2,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"master\"},{\"roomNumber\":3,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"}]}]},{\"label\":\"B2\",\"value\":2,\"Floors\":[{\"label\":\"F1\",\"value\":1,\"Room\":[{\"roomNumber\":1,\"roomType\":\"single\",\"roomStatus\":false,\"roomFor\":\"doctorate\"},{\"roomNumber\":2,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":3,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":4,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":5,\"roomType\":\"single\",\"roomStatus\":true,\"roomFor\":\"doctorate\"},{\"roomNumber\":6,\"roomType\":\"single\",\"comment\":[6,7],\"roomStatus\":true,\"roomFor\":\"doctorate\"}]}]}]}]}");

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6ad2cfd8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6ad2cfd8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6ad2cfd8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6ad2cfd8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_id_6ad2cfd8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "label{color:#333;display:block;font-weight:700;margin-bottom:8px;margin-top:8px}.form-select{border-radius:4px;font-size:16px;width:100%}.list-image{cursor:pointer;height:auto;margin:20px;position:relative;width:100px}.list-description{flex:1}.list-description h3{font-size:18px;margin:0}.list-description p{font-size:14px}.right-room{display:flex;justify-content:end;margin-top:8px}button{background-color:#007bff;border:none;border-radius:25px;color:#fff;cursor:pointer;font-weight:700;padding:12px 24px;transition:background-color .3s}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dropdown.vue?vue&type=template&id=6ad2cfd8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {}, [_vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.id) + " class=\"block text-gray-700 font-bold\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label> <label class=\"block text-gray-700 font-bold\">Select a location:</label> "), _c('SliderCust', {
    attrs: {
      "hierarchical-data": _vm.hierarchicalData,
      "images": _vm.optionsTree
    },
    on: {
      "option-selected": _vm.handleChange,
      "reset-options": _vm.resetOptions
    }
  }), _vm._ssrNode(" "), _vm.selectedZone && _vm.hierarchicalData.length > 0 ? _vm._ssrNode("<div class=\"space-y-4 form-select\">", "</div>", [_vm._ssrNode("<label for=\"building\" class=\"block text-gray-700 font-bold\">Select a building:</label> "), _c('el-select', {
    attrs: {
      "value-key": "id",
      "id": "selectOption",
      "placeholder": "Select building"
    },
    model: {
      value: _vm.selectedOption2,
      callback: function ($$v) {
        _vm.selectedOption2 = $$v;
      },
      expression: "selectedOption2"
    }
  }, _vm._l(Object.keys(_vm.hierarchicalData[_vm.selectedZone]), function (option) {
    return _c('el-option', {
      key: option,
      attrs: {
        "value": option
      }
    });
  }), 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.selectedZone && _vm.selectedOption2 && _vm.hierarchicalData ? _vm._ssrNode("<div class=\"space-y-4 form-select\">", "</div>", [_vm._ssrNode("<label for=\"building\" class=\"block text-gray-700 font-bold\">Select a Floor:</label> "), _c('el-select', {
    attrs: {
      "id": "selectOption2",
      "value-key": "id",
      "placeholder": "Select Floor"
    },
    model: {
      value: _vm.selectedOption3,
      callback: function ($$v) {
        _vm.selectedOption3 = $$v;
      },
      expression: "selectedOption3"
    }
  }, _vm._l(Object.keys(_vm.hierarchicalData[_vm.selectedZone][_vm.selectedOption2]), function (option) {
    return _c('el-option', {
      key: option,
      attrs: {
        "value": option
      }
    });
  }), 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.selectedZone && _vm.selectedOption2 && _vm.selectedOption3 ? _vm._ssrNode("<div class=\"space-y-4 form-select\">", "</div>", [_vm._ssrNode("<label class=\"block text-gray-700 font-bold\">Select a Room:</label> "), _vm.selectedOption4 === null ? _vm._ssrNode("<div>", "</div>", [_c('el-row', _vm._l(_vm.RoomArr, function (item) {
    return _c('el-col', {
      key: item.roomNumber,
      attrs: {
        "span": 8
      }
    }, [_c('el-card', {
      staticClass: "box-card",
      nativeOn: {
        "click": function ($event) {
          return _vm.selectRoom(item.id);
        }
      }
    }, [_c('img', {
      staticClass: "list-image",
      attrs: {
        "src": _vm.getImageSrc(item.type)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "list-description"
    }, [_c('h3', [_vm._v(_vm._s(item.roomNumber))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.handleWord(item.type)))])])])], 1);
  }), 1)], 1) : _vm._ssrNode("<div class=\"el-row\">", "</div>", [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.selectedOption4.roomNumber))])]), _vm._ssrNode(" "), _c('el-col', {
    staticClass: "right-room",
    attrs: {
      "span": 20
    }
  }, [_c('button', {
    on: {
      "click": _vm.resetSelection
    }
  }, [_vm._v("Change Selection")])])], 2)], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Dropdown.vue?vue&type=template&id=6ad2cfd8&

// EXTERNAL MODULE: ./static/data.json
var data = __webpack_require__(111);

// EXTERNAL MODULE: ./components/SliderCust.vue + 4 modules
var SliderCust = __webpack_require__(104);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dropdown.vue?vue&type=script&lang=js&


/* harmony default export */ var Dropdownvue_type_script_lang_js_ = ({
  components: {
    SliderCust: SliderCust["default"]
  },
  option1: 0,
  props: {
    id: String,
    // ID for the dropdown element
    label: String,
    // Label for the dropdown
    options: Array,
    // Array of options [{ label: 'Label', value: 'Value' }]
    hierarchicalData: {
      type: Array,
      required: true
    }
  },
  watch: {
    selectedZone: 'emitSelectedOptions',
    selectedOption2: 'emitSelectedOptions',
    selectedOption3: 'emitSelectedOptions',
    selectedOption4: 'emitSelectedOptions'
  },
  data() {
    return {
      optionsTree: data.optionsTree,
      selectedZone: null,
      selectedOption2: null,
      selectedOption3: null,
      selectedOption4: null
    };
  },
  methods: {
    getImageSrc(type) {
      // Add your logic here to determine the image source based on the type
      if (type === 'quadruple_room') {
        return __webpack_require__(101);
      } else if (type === 'single_room') {
        return __webpack_require__(102);
      }
    },
    emitSelectedOptions() {
      this.$emit('selected-options', {
        roomId: this.selectedOption4
      });
    },
    handleWord(word) {
      const words = word.split('_');

      // Capitalize each word and join them back with spaces
      return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    },
    handleChange(option) {
      this.selectedZone = option;
      console.log('Contents of hierarchicalData:', this.hierarchicalData);
      console.log('Contents of hierarchicalData[selectedZone]:', this.hierarchicalData[this.selectedZone]);
      console.log('Selected Location:', this.selectedZone);
    },
    selectRoom(roomID) {
      // Set the selectedOption4 when a room is clicked
      console.log("roomNumber: " + roomID);
      this.selectedOption4 = roomID;
    },
    resetSelection: function () {
      this.selectedOption4 = null;
    },
    resetOptions: function () {
      this.selectedZone = null;
      this.selectedOption2 = null;
      this.selectedOption3 = null;
      this.selectedOption4 = null;
    }
  },
  computed: {
    //Note: does not validate empty values in each array
    //Note 2: Maybe be appliable to the previous elements
    RoomArr() {
      return this.hierarchicalData[this.selectedZone][this.selectedOption2][this.selectedOption3];
    }
  }
});
// CONCATENATED MODULE: ./components/Dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dropdownvue_type_script_lang_js_ = (Dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Dropdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(120)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Dropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6cf34b55"
  
)

/* harmony default export */ var Dropdown = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=dropdown.js.map