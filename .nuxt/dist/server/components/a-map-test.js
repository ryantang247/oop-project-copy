exports.ids = [1];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("3081a03a", content, true, context)
};

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/house.ab0d2ca.png";

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AMapTest_vue_vue_type_style_index_0_id_5fb13ba3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AMapTest_vue_vue_type_style_index_0_id_5fb13ba3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AMapTest_vue_vue_type_style_index_0_id_5fb13ba3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AMapTest_vue_vue_type_style_index_0_id_5fb13ba3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AMapTest_vue_vue_type_style_index_0_id_5fb13ba3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".map-container-wrapper[data-v-5fb13ba3]{align-items:center;display:flex;justify-content:center}.map-container[data-v-5fb13ba3]{background-color:#fff;border:#b3d1c8}.header-style[data-v-5fb13ba3]{background-color:#fff;text-transform:capitalize}.title-style[data-v-5fb13ba3]{color:#006400}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AMapTest.vue?vue&type=template&id=5fb13ba3&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "map-container"
  }, [_vm._ssrNode("<h1 class=\"title-style\" data-v-5fb13ba3>Search Dormitory on This Map!</h1> "), _vm._ssrNode("<div class=\"map-container-wrapper\" data-v-5fb13ba3>", "</div>", [_vm._ssrNode("<div id=\"map-container\"" + _vm._ssrStyle(null, {
    width: _vm.mapWidth,
    height: _vm.mapHeight
  }, {
    display: _vm.dormArea == null || _vm.dormBuilding == null ? '' : 'none'
  }) + " data-v-5fb13ba3></div> "), _c('el-dialog', {
    attrs: {
      "visible": _vm.showBuilding,
      "close-on-click-modal": true,
      "close-on-press-escape": true,
      "before-close": _vm.handleCloseBuilding
    },
    on: {
      "update:visible": function ($event) {
        _vm.showBuilding = $event;
      }
    }
  }, [_c('div', {
    staticClass: "floor-plan-image"
  }, [_c('div', [_c('h1', {
    staticClass: "header-style"
  }, [_vm._v(_vm._s(_vm.currentZone + " " + _vm.currentBuilding))]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.currentImage,
      "alt": "@/static/dorm/noimage.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.currentDescription))])]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.handleRoute
    }
  }, [_vm._v("Details")])], 1)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AMapTest.vue?vue&type=template&id=5fb13ba3&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(80);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AMapTest.vue?vue&type=script&lang=js&

/* harmony default export */ var AMapTestvue_type_script_lang_js_ = ({
  name: "AMap",
  props: {
    dormArea: String,
    dormBuilding: String,
    newDorm: ['reset-selection']
  },
  data() {
    return {
      mapWidth: "80%",
      // Set the initial width of the map container
      mapHeight: "600px",
      // Set the initial height of the map container
      margin: "0",
      // Center the map horizontally
      position: "justify",
      newLabelsData: [],
      isLoaded: false,
      showBuilding: false,
      currentBuilding: '',
      currentZone: '',
      currentDescription: '',
      currentImage: null
    };
  },
  mounted() {
    // Initialize the map when the component is mounted
    this.initMap();
    window._AMapSecurityConfig = {
      securityJsCode: '6dcf279b3051f93ca87a74cf70cca816'
    };
    external_axios_default.a.get('http://8.138.105.61/api/builds/').then(response => {
      this.APIFormData = response.data;
      this.APIFormData.forEach(item => {
        console.log("Received data");
        console.log(response.data);
        const {
          id,
          name,
          photo,
          zone,
          buildingDetails,
          xlocation,
          ylocation
        } = item;
        var houseIcon = {
          // 图标类型，现阶段只支持 image 类型
          type: 'image',
          // 图片 url
          image: __webpack_require__(116),
          // 图片尺寸
          size: [64, 64],
          // 图片相对 position 的锚点，默认为 bottom-center
          anchor: 'center'
        };
        var textStyeLabel = {
          backgroundColor: 'white',
          borderColor: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          fillColor: 'black',
          strokeWidth: 2
        };
        const newDataItem = {
          name: zone + " " + name,
          area: zone,
          building: name,
          // You can set this to a specific value or extract it from the original data if available
          position: [xlocation, ylocation],
          zooms: [3, 20],
          // Set the desired zoom values
          opacity: 1,
          // Set the desired opacity value
          zIndex: 5,
          // Set the desired zIndex value
          visible: true,
          icon: houseIcon,
          // Set the desired icon
          photo: photo,
          buildingDetails: buildingDetails,
          text: {
            content: zone + " " + name + " Building",
            // Set content to the name
            direction: 'right',
            offset: [-100, 40],
            style: textStyeLabel
          }
        };
        this.newLabelsData.push(newDataItem);
      });
      this.showForm = true;
    }).catch(error => {
      this.APIFormData = '';
      this.error = error.message || 'An error occurred';
    });
  },
  methods: {
    loadMap: function () {
      this.isLoaded = true;
    },
    handleRoute: function () {
      this.$router.push({
        name: 'DormView',
        params: {
          zone: this.currentZone,
          building: this.currentBuilding
        }
      });
    },
    handleCloseBuilding: function () {
      this.showBuilding = false;
    },
    selectDorm: function (curData) {
      this.showBuilding = true;
      this.currentZone = curData.area;
      this.currentBuilding = curData.building;
      this.currentImage = curData.photo;
      this.currentDescription = curData.buildingDetails;
      console.log(curData.area, curData.building);
      // this.$emit('dorm-selected', curData.area, curData.building);
    },

    resetSelection: function () {

      // this.$emit('reset-selection');
    },
    initMap() {
      // Load the AMap API script
      const script = document.createElement('script');
      script.src = '//webapi.amap.com/maps?v=2.0&key=20db94d3028c1d2472ae4f29ab518e4b&plugin=AMap.ControlBar,AMap.ToolBar';
      script.async = true;
      script.onload = () => {
        // Create the map instance
        let map = new AMap.Map('map-container', {
          rotateEnable: true,
          pitchEnable: true,
          zoom: 17,
          pitch: 50,
          rotation: -15,
          viewMode: '3D',
          //开启3D视图,默认为关闭
          zooms: [2, 20],
          center: [113.99913918407441, 22.60212445711336]
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
        var LabelsData = this.newLabelsData;
        console.log(LabelsData);
        var markers = [];
        var allowCollision = false;
        var layer = new AMap.LabelsLayer({
          zooms: [3, 20],
          zIndex: 1000,
          // collision: false,
          // 设置 allowCollision：true，可以让标注避让用户的标注
          allowCollision
        });
        // layer.add(markers);
        // 图层添加到地图

        // 初始化 labelMarker
        for (var i = 0; i < LabelsData.length; i++) {
          //must be const!!

          const curData = LabelsData[i];
          // console.log(curData)
          curData.extData = {
            index: i
          };
          console.log(curData);
          var labelMarker = new AMap.LabelMarker(curData);
          // 绑定click事件到图标对象上
          labelMarker.on('click', () => {
            // Access the name property from the clicked LabelMarker's data
            this.selectDorm(curData);
            // Print the clicked label's name to the console
          });

          markers.push(labelMarker);
        }
        layer.add(markers);
        map.add(layer);
        // 将 marker 添加到图层
      };

      document.head.appendChild(script);
    }
  }
});
// CONCATENATED MODULE: ./components/AMapTest.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AMapTestvue_type_script_lang_js_ = (AMapTestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/AMapTest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(117)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AMapTestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5fb13ba3",
  "41873c9e"
  
)

/* harmony default export */ var AMapTest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=a-map-test.js.map