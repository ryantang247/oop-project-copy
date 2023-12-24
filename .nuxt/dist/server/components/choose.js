exports.ids = [4];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".top-nav[data-v-078c4029]{background-color:#4b4a4a;color:#fff}.nav-title[data-v-078c4029]{font-size:24px;padding:20px 0}.nav-menu[data-v-078c4029],.nav-title[data-v-078c4029]{text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/choose.vue?vue&type=template&id=078c4029&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "top-nav"
  }, [_c('el-header', [_c('div', {
    staticClass: "nav-title"
  }, [_c('span', [_vm._v("Dormitory Selection System")])]), _vm._v(" "), _c('el-menu', {
    staticClass: "nav-menu",
    attrs: {
      "mode": "horizontal",
      "default-active": _vm.activeIndex
    },
    on: {
      "select": _vm.handleSelect
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/person"
    }
  }, [_c('i', {
    staticClass: "el-icon-house"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("首页")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/Dorm"
    }
  }, [_c('i', {
    staticClass: "el-icon-info"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("宿舍选择")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/DormView"
    }
  }, [_c('i', {
    staticClass: "el-icon-search"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("查看宿舍")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/Group"
    }
  }, [_c('i', {
    staticClass: "el-icon-phone"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("加入群聊")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/Map"
    }
  }, [_c('i', {
    staticClass: "el-icon-phone"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("查看地图")])])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/choose.vue?vue&type=template&id=078c4029&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/choose.vue?vue&type=script&lang=js&
/* harmony default export */ var choosevue_type_script_lang_js_ = ({
  name: 'choose',
  data() {
    return {
      activeIndex: '' // 当前选中的菜单项
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
      this.activeIndex = key;
    }
  }
});
// CONCATENATED MODULE: ./components/choose.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_choosevue_type_script_lang_js_ = (choosevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/choose.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_choosevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "078c4029",
  "31f2893b"
  
)

/* harmony default export */ var choose = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("5407a9e3", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_vue_vue_type_style_index_0_id_078c4029_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_vue_vue_type_style_index_0_id_078c4029_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_vue_vue_type_style_index_0_id_078c4029_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_vue_vue_type_style_index_0_id_078c4029_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_choose_vue_vue_type_style_index_0_id_078c4029_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=choose.js.map