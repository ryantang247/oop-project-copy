exports.ids = [15];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("768951c8", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// Define a type for unknown data
const UnknownData = {};

// Define the Stall interface extending from UnknownData
function Stall(name, available, coordinates) {
  this.name = name;
  this.available = available;
  this.coordinates = coordinates;
}

// Example data

const stalls = [
// 1. (15.3915, -35.0258) ------------ 2.(15.3728, -40.5269)
//              |                                |
//              |                                |
// 4. (10.7574, -35.0316) ------------ 3. (10.7574, -40.5269)

new Stall('Stall 8', true, [{
  levelIndex: 0,
  x: 3,
  z: 0,
  elevation: 0.0000000000000036
}, {
  levelIndex: 0,
  x: 3,
  z: -3,
  elevation: 0.0000000000000036
}, {
  levelIndex: 0,
  x: 0,
  z: -3,
  elevation: 1
}, {
  levelIndex: 0,
  x: 0,
  z: 0,
  elevation: 1
}]), new Stall('Stall 9', false, [{
  levelIndex: 0,
  x: 6.1,
  z: 0,
  elevation: 0.0000000000000036
}, {
  levelIndex: 0,
  x: 6.1,
  z: -3,
  elevation: 0.0000000000000036
}, {
  levelIndex: 0,
  x: 3.1,
  z: -3,
  elevation: 1
}, {
  levelIndex: 0,
  x: 3.1,
  z: 0,
  elevation: 1
}])
// ... (similar entries for other stalls)
];

// Export the type and data
module.exports = {
  Stall,
  stalls
};

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmplrTest2_vue_vue_type_style_index_0_id_b03176fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmplrTest2_vue_vue_type_style_index_0_id_b03176fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmplrTest2_vue_vue_type_style_index_0_id_b03176fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmplrTest2_vue_vue_type_style_index_0_id_b03176fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmplrTest2_vue_vue_type_style_index_0_id_b03176fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SmplrTest2.vue?vue&type=template&id=b03176fe&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"test\" class=\"smplr-container\" data-v-b03176fe></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SmplrTest2.vue?vue&type=template&id=b03176fe&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "@smplrspace/smplr-loader"
var smplr_loader_ = __webpack_require__(94);

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__(96);

// EXTERNAL MODULE: ./static/smplrdata/dataset.js
var dataset = __webpack_require__(186);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SmplrTest2.vue?vue&type=script&lang=js&




const INITIAL_MODE = '3d';
/* harmony default export */ var SmplrTest2vue_type_script_lang_js_ = ({
  name: 'Smplr2',
  setup() {
    const smplrContainer2 = Object(external_vue_["ref"])(null);
    let space;
    Object(external_vue_["onMounted"])(() => {
      Object(smplr_loader_["loadSmplrJs"])('umd').then(smplr => {
        space = initSpace(smplr);
        space.startViewer({
          preview: true,
          mode: INITIAL_MODE,
          allowModeChange: true,
          onModeChange: mode => updateDataLayers(mode),
          onReady: () => updateDataLayers(INITIAL_MODE),
          onError: error => console.error('Could not start viewer', error)
        });
      }).catch(error => console.error(error));
    });
    function initSpace(smplr) {
      const spaceInstance = new smplr.Space({
        spaceId: 'a9041489-286b-430f-8600-1b4cdbd077b3',
        clientToken: 'pub_29d3e5ca0d904b0f880def106ad6467c',
        containerId: 'test'
      });
      return spaceInstance;
    }
    function updateDataLayers(mode) {
      // remove previous layers if any
      space.removeDataLayer('stalls');
      space.removeDataLayer('sensors');
      space.removeDataLayer('beacons');
      space.removeDataLayer('beacons-range');

      // add new layers
      space.addDataLayer({
        id: 'stalls',
        type: 'polygon',
        data: dataset["stalls"],
        // tooltip: (d) => `${d.name} - ${d.hits} hits`,
        tooltip: d => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
        color: d => d.available ? '#50b268' : '#f75e56',
        alpha: 0.7,
        height: mode === '3d' ? 1.9 : 0.0045
      });
    }
    const autoElevation = mode => Object(external_ramda_["map"])(Object(external_ramda_["evolve"])({
      position: {
        elevation: value => mode === '3d' ? value : 0
      }
    }));
    return {
      smplrContainer2
    };
  }
});
// CONCATENATED MODULE: ./components/SmplrTest2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SmplrTest2vue_type_script_lang_js_ = (SmplrTest2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/SmplrTest2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(187)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SmplrTest2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b03176fe",
  "2be7d4a8"
  
)

/* harmony default export */ var SmplrTest2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=smplr-test2.js.map