exports.ids = [2];
exports.modules = {

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AMap3D.vue?vue&type=template&id=1abd713c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('head', [_vm._ssrNode("<meta name=\"viewport\" content=\"width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=0\" data-v-1abd713c> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" data-v-1abd713c> <title data-v-1abd713c>3D地图</title> <style data-v-1abd713c>\n    body,html{ margin:0;padding:0;font:12px/16px Verdana,Helvetica,Arial,sans-serif;width: 100%;height: 100%}\n    .container{\n      height: 100%\n    }\n  </style> <script language=\"javascript\" src=\"//webapi.amap.com/maps?v=2.0&key=1b23b8fdee7d2a0c193ab87876832a97&plugin=AMap.ControlBar,AMap.ToolBar\" data-v-1abd713c></script>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AMap3D.vue?vue&type=template&id=1abd713c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AMap3D.vue?vue&type=script&setup=true&lang=js&
/* harmony default export */ var AMap3Dvue_type_script_setup_true_lang_js_ = ({
  __name: 'AMap3D',
  setup(__props) {
    var map;
    function mapInit() {
      map = new AMap.Map('container', {
        rotateEnable: true,
        pitchEnable: true,
        zoom: 17,
        pitch: 50,
        rotation: -15,
        viewMode: '3D',
        //开启3D视图,默认为关闭
        zooms: [2, 20],
        center: [116.333926, 39.997245]
      });
      var controlBar = new AMap.ControlBar({
        position: {
          right: '10px',
          top: '10px'
        }
      });
      controlBar.addTo(map);
      var toolBar = new AMap.ToolBar({
        position: {
          right: '40px',
          top: '110px'
        }
      });
      toolBar.addTo(map);
    }
    mapInit();
    return {
      __sfc: true,
      map,
      mapInit
    };
  }
});
// CONCATENATED MODULE: ./components/AMap3D.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var components_AMap3Dvue_type_script_setup_true_lang_js_ = (AMap3Dvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/AMap3D.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AMap3Dvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1abd713c",
  "348865b0"
  
)

/* harmony default export */ var AMap3D = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=a-map3-d.js.map