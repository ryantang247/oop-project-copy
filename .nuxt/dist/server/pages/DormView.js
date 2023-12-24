exports.ids = [18,4,5,6,10];
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

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dorm1.5f2101c.jpg";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dorm2.11af49f.jpg";

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("3f96e3ee", content, true, context)
};

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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("62126af4", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sampleroomlayout.eb0903d.png";

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentSection_vue_vue_type_style_index_0_id_4dc83759_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentSection_vue_vue_type_style_index_0_id_4dc83759_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentSection_vue_vue_type_style_index_0_id_4dc83759_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentSection_vue_vue_type_style_index_0_id_4dc83759_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentSection_vue_vue_type_style_index_0_id_4dc83759_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-4dc83759]{align-items:center;display:flex;flex-direction:column;margin:0 auto;width:70%}.button-grid[data-v-4dc83759]{grid-gap:10px;//margin-bottom:40px;display:grid;gap:10px;grid-template-columns:minmax(100px,1fr) minmax(100px,1fr) minmax(100px,1fr)}.occupied[data-v-4dc83759]{background-color:red}.available[data-v-4dc83759]{background-color:green}ElCarousel[data-v-4dc83759]{height:auto}.carousel-custom[data-v-4dc83759]{border:2px solid #b3d1c8;height:auto;margin:20px auto 0;width:50%}.button-grid-container[data-v-4dc83759]{//margin:0 auto;align-items:flex-start;display:flex;flex-wrap:wrap;height:100%;justify-content:center}button[data-v-4dc83759]{padding:20px;width:100%}.comment-item[data-v-4dc83759]{margin-top:20px;text-align:left}.comment-info[data-v-4dc83759]{margin-bottom:5px}.comment-right[data-v-4dc83759]{margin-left:auto;margin-right:0;text-align:right}.replycontainer[data-v-4dc83759]{margin-left:20px}.header-style[data-v-4dc83759]{text-align:center}.centered-image[data-v-4dc83759]{display:block;height:auto;margin:0 auto;max-width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentSection.vue?vue&type=template&id=4dc83759&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dialogVisible ? _c('div', [_vm.loadFinish && _vm.hasComments ? _vm._ssrNode("<div data-v-4dc83759>", "</div>", [_c('el-dialog', {
    attrs: {
      "visible": _vm.dialogVisible,
      "before-close": _vm.handleClose
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c('h1', {
    staticClass: "header-style"
  }, [_vm._v("Comment")]), _vm._v(" "), _c('el-collapse', {}, [_c('el-collapse-item', {
    attrs: {
      "title": "Room Layout",
      "name": "1"
    }
  }, [_c('img', {
    staticClass: "centered-image",
    attrs: {
      "src": __webpack_require__(112),
      "alt": "@/static/sampleroomlayout.png"
    }
  })])], 1), _vm._v(" "), _vm._l(_vm.commentsMap, function (comment) {
    return _c('div', {
      key: comment[1].id,
      staticClass: "comment-item"
    }, [_c('el-row', [_c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_c('el-avatar', {
      attrs: {
        "src": comment[1].avatar
      }
    })], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 16
      }
    }, [_c('p', {
      staticClass: "comment-info"
    }, [_c('strong', [_vm._v(" " + _vm._s(comment[1].name))])])]), _vm._v(" "), _c('el-col', {
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
        value: comment[1].rating,
        callback: function ($$v) {
          _vm.$set(comment[1], "rating", $$v);
        },
        expression: "comment[1].rating"
      }
    })], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
      attrs: {
        "span": 20
      }
    }, [_c('p', {
      staticClass: "comment-info"
    }, [_vm._v(_vm._s(comment[1].comment))])]), _vm._v(" "), _c('el-col', {
      staticClass: "comment-right",
      attrs: {
        "span": 4
      }
    }, [_c('p', {
      on: {
        "click": function ($event) {
          return _vm.handleReply(comment[1].id);
        }
      }
    }, [_vm._v(_vm._s(_vm.addReply && _vm.reply.replyTo === comment[1].id ? 'Cancel Reply' : 'Reply'))])])], 1), _vm._v(" "), _vm.addReply && _vm.reply.replyTo === comment[1].id ? _c('div', [_c('el-input', {
      staticStyle: {
        "margin": "10px"
      },
      attrs: {
        "placeholder": "Please input reply"
      },
      model: {
        value: _vm.reply.comment,
        callback: function ($$v) {
          _vm.$set(_vm.reply, "comment", $$v);
        },
        expression: "reply.comment"
      }
    }), _vm._v(" "), _c('button', {
      on: {
        "click": function ($event) {
          return _vm.submitComment(true);
        }
      }
    }, [_vm._v("Submit Reply")])], 1) : _vm._e(), _vm._v(" "), _c('div', _vm._l(comment[1].replies, function (reply) {
      return _c('div', {
        key: comment[1].id,
        staticClass: "replycontainer"
      }, [_c('el-row', [_c('el-col', {
        attrs: {
          "span": 2
        }
      }, [_c('el-avatar', {
        attrs: {
          "src": reply.avatar
        }
      })], 1), _vm._v(" "), _c('el-col', {
        attrs: {
          "span": 10
        }
      }, [_c('p', {
        staticClass: "comment-info"
      }, [_c('strong', [_vm._v(" " + _vm._s(reply.name))])])])], 1), _vm._v(" "), _c('p', [_vm._v(_vm._s(reply.comment))])], 1);
    }), 0)], 1);
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
      value: _vm.comment.rating,
      callback: function ($$v) {
        _vm.$set(_vm.comment, "rating", $$v);
      },
      expression: "comment.rating"
    }
  }), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin": "10px"
    },
    attrs: {
      "placeholder": "Type your feeling on this room!"
    },
    model: {
      value: _vm.comment.comment,
      callback: function ($$v) {
        _vm.$set(_vm.comment, "comment", $$v);
      },
      expression: "comment.comment"
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.submitComment(false);
      }
    }
  }, [_vm._v("Submit Comment")])], 1) : _vm._e()])], 2)], 1) : _vm._ssrNode("<div data-v-4dc83759>", "</div>", [_c('el-dialog', {
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
      value: _vm.comment.rating,
      callback: function ($$v) {
        _vm.$set(_vm.comment, "rating", $$v);
      },
      expression: "comment.rating"
    }
  }), _vm._v(" "), _c('el-input', {
    staticStyle: {
      "margin": "10px"
    },
    attrs: {
      "placeholder": "Type your feeling on this room!"
    },
    model: {
      value: _vm.comment.comment,
      callback: function ($$v) {
        _vm.$set(_vm.comment, "comment", $$v);
      },
      expression: "comment.comment"
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.submitComment(false);
      }
    }
  }, [_vm._v("Submit Comment")])], 1) : _vm._e()])])], 1)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CommentSection.vue?vue&type=template&id=4dc83759&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(81);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(82);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(83);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(84);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(85);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(86);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(87);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(88);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(89);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(90);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(91);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(80);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentSection.vue?vue&type=script&lang=js&















/* harmony default export */ var CommentSectionvue_type_script_lang_js_ = ({
  name: 'CommentSection',
  props: {
    dialogVisible: Boolean,
    roomId: Number // Specify the type of roomId prop
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://8.138.105.61',
        // Replace with your Django server URL
        changeOrigin: true
      }
    }
  },
  watch: {
    roomId: function (newVal, oldVal) {
      console.log('Prop changed for selectedRoomId for comment: ', newVal, ' | was: ', oldVal);
      this.getComments(); // Call getComments when roomId changes
    }
  },

  data() {
    return {
      commentsMap: null,
      addComment: false,
      addReply: false,
      loadFinish: false,
      //NOTES: There is no dedicated user logging in, hence we temporarily use user 1 to comment
      comment: {
        user: 1,
        comment: null,
        rating: null
      },
      reply: {
        user: 1,
        replyTo: null,
        comment: null
      }
    };
  },
  methods: {
    handleReply(id) {
      if (!this.addReply) {
        this.addReply = true;
        this.reply.replyTo = id;
      } else {
        this.addReply = false;
        this.reply.comment = null;
        this.reply.replyTo = null;
      }
    },
    submitComment(isReply) {
      let params = {};
      if (isReply) {
        params = {
          "dormitory": this.roomId,
          "comment": this.reply.comment,
          "rating": null,
          "parent": this.reply.replyTo
        };
      } else {
        params = {
          "dormitory": this.roomId,
          "comment": this.comment.comment,
          "rating": this.comment.rating,
          "parent": null
        };
      }
      if (params.comment != null && params.comment !== '' && params.dormitory != null) {
        external_axios_default.a.defaults.withCredentials = true;
        external_axios_default.a.post('http://8.138.105.61/api/create-comment/', params).then(response => {
          this.getComments();
          console.log(response.data);
        });
      } else {
        if (params.comment === null || params.comment === '') {
          element_ui_common["MessageBox"].alert('Please enter a valid comment.', 'Alert', {
            confirmButtonText: 'Back',
            type: 'warning'
          });
        } else {
          element_ui_common["MessageBox"].alert('System error.', 'Alert', {
            confirmButtonText: 'Back',
            type: 'warning'
          });
        }
      }
    },
    handleClose() {
      console.log(this.commentsMap);
      this.addComment = false;
      this.$emit('closeComment', true);
    },
    async getComments() {
      this.loadFinish = false;
      const commentsMap = new Map();
      if (this.roomId) {
        const params = {
          dorm_id: this.roomId
        };
        external_axios_default.a.get('http://8.138.105.61/api/comment/', {
          params
        }).then(response => {
          const comments = response.data;
          comments.forEach(item => {
            const {
              id,
              comment,
              time,
              avatar,
              replyTo,
              name,
              rating
            } = item;
            if (!replyTo) {
              // It is a parent comment
              commentsMap.set(id, {
                id,
                comment,
                time,
                name,
                rating,
                avatar,
                replies: []
              });
            } else {
              // It is a reply
              const parentComment = commentsMap.get(replyTo);
              if (parentComment) {
                const overallComment = {
                  id,
                  comment,
                  time,
                  name,
                  rating,
                  avatar
                };
                parentComment.replies.push(overallComment);
              }
            }
          });
          this.commentsMap = commentsMap;
          this.loadFinish = true;
          console.log(this.commentsMap);
        }).catch(error => {
          console.error('An error occurred while fetching comments:', error.message);
        });
      }
    }
  },
  created() {
    // Call getComments when the component is created
    this.getComments();
  },
  computed: {
    hasComments() {
      console.log('Calling coputed function!');
      const hasComments = this.commentsMap.size > 0;
      console.log('Computed value for hasComments:', hasComments);
      console.log("Current Map right now");
      console.log(this.commentsMap);
      return hasComments;
    }
  }
});
// CONCATENATED MODULE: ./components/CommentSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentSectionvue_type_script_lang_js_ = (CommentSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/CommentSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4dc83759",
  "0d48796c"
  
)

/* harmony default export */ var CommentSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("525722ea", content, true, context)
};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/location.fee0855.png";

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/samplefloorplan.f834ea7.png";

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDisplay_vue_vue_type_style_index_0_id_781c2cce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDisplay_vue_vue_type_style_index_0_id_781c2cce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDisplay_vue_vue_type_style_index_0_id_781c2cce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDisplay_vue_vue_type_style_index_0_id_781c2cce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomDisplay_vue_vue_type_style_index_0_id_781c2cce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title-container[data-v-781c2cce]{font-family:\"Arial Black\",sans-serif}.icon-style[data-v-781c2cce]{height:50px;margin-top:15px;width:50px}.title-styles[data-v-781c2cce]{border-bottom:2px solid #ccc;color:#000;font-size:20px;padding-bottom:5px;text-transform:capitalize}.image[data-v-781c2cce]{height:200px;margin-top:20px;width:200px}.el-card[data-v-781c2cce]:hover{background:#d3d3d3;box-shadow:0 0 10px rgba(0,0,0,.5);cursor:pointer}.card-content-container[data-v-781c2cce]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.location-head-style[data-v-781c2cce]{margin-bottom:0;margin-top:10px}.show-floor-plan[data-v-781c2cce]{text-align:right}.floor-plan-image[data-v-781c2cce]{max-width:100%;position:relative}.floor-plan-image img[data-v-781c2cce]{height:auto;-o-object-fit:cover;object-fit:cover;width:100%}.building-floor-style[data-v-781c2cce]{margin-left:20px;margin-right:20px}.building-header[data-v-781c2cce]{border-bottom:1px solid #000;display:inline-block;font-size:30px;margin-bottom:20px;margin-top:20px}.desc[data-v-781c2cce]{text-align:center}.floor-header[data-v-781c2cce]{display:inline-block;font-size:20px;margin-bottom:20px}.room-container[data-v-781c2cce]{margin-left:60px;margin-right:60px}.collection-header[data-v-781c2cce]{text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RoomDisplay.vue?vue&type=template&id=781c2cce&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.filteredData.length !== 0 ? _vm._ssrNode("<div data-v-781c2cce>", "</div>", _vm._l(Object.keys(this.filteredData), function (location) {
    return _vm._ssrNode("<div data-v-781c2cce>", "</div>", [_vm._ssrNode("<div class=\"title-container\" data-v-781c2cce>", "</div>", [_c('el-row', {
      staticClass: "title-styles"
    }, [_c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_c('img', {
      staticClass: "icon-style",
      attrs: {
        "src": __webpack_require__(123),
        "alt": "@/static/dorm/location.png"
      }
    })]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 6
      }
    }, [_c('h1', {
      staticClass: "location-head-style"
    }, [_vm._v(_vm._s(location))])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"building-floor-style\" data-v-781c2cce>", "</div>", _vm._l(Object.keys(_vm.filteredData[location]), function (building) {
      return _vm.filteredData[location] ? _vm._ssrNode("<div data-v-781c2cce>", "</div>", [_vm._ssrNode("<div data-v-781c2cce>", "</div>", [_vm._ssrNode("<h2 class=\"building-header\" data-v-781c2cce>" + _vm._ssrEscape("Building " + _vm._s(building)) + "</h2> "), _c('ElCarousel', {
        attrs: {
          "height": "500px",
          "arrow": "always",
          "trigger": "click"
        }
      }, _vm._l(Object.keys(_vm.filteredData[location][building]), function (floor) {
        return _c('ElCarouselItem', {
          key: floor
        }, [_c('div', [_c('el-row', [_c('el-col', {
          attrs: {
            "span": 4
          }
        }, [_c('h2', {
          staticClass: "floor-header"
        }, [_vm._v("Floor " + _vm._s(floor))])]), _vm._v(" "), _c('el-col', {
          staticClass: "show-floor-plan",
          attrs: {
            "span": 18
          }
        }, [_c('el-button', {
          on: {
            "click": function ($event) {
              _vm.showFloorPlan = true;
            }
          }
        }, [_vm._v("View Floor plan")])], 1)], 1), _vm._v(" "), _c('el-row', {
          staticClass: "room-container"
        }, _vm._l(_vm.filteredData[location][building][floor], function (room) {
          return _c('el-col', {
            key: room.id,
            attrs: {
              "span": 4
            }
          }, [_c('el-card', {
            attrs: {
              "body-style": {
                padding: '0px'
              }
            }
          }, [_c('div', {
            staticClass: "card-content-container"
          }, [_c('img', {
            staticClass: "image",
            attrs: {
              "src": _vm.getImageSrc(room.type),
              "alt": ""
            },
            on: {
              "click": function ($event) {
                return _vm.handleComment(room.id);
              }
            }
          }), _vm._v(" "), _c('h2', [_vm._v(_vm._s(room.roomNumber))]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(room.type))]), _vm._v(" "), _c('p', {
            staticClass: "collection-header",
            on: {
              "click": function ($event) {
                return _vm.collectRoom(room.id);
              }
            }
          }, [_vm._v("收藏")])])])], 1);
        }), 1)], 1)]);
      }), 1)], 2)]) : _vm._e();
    }), 0)], 2);
  }), 0) : _vm._ssrNode("<div data-v-781c2cce><p class=\"desc\" data-v-781c2cce>No results :(</p></div>"), _vm._ssrNode(" "), _c('CommentSection', {
    attrs: {
      "dialogVisible": this.showComment,
      "room-id": this.roomId
    },
    on: {
      "closeComment": _vm.handleReceiveComment
    }
  }), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "visible": _vm.showFloorPlan,
      "close-on-click-modal": true,
      "close-on-press-escape": true,
      "before-close": _vm.handleCloseFloorPlan
    },
    on: {
      "update:visible": function ($event) {
        _vm.showFloorPlan = $event;
      }
    }
  }, [_c('div', {
    staticClass: "floor-plan-image"
  }, [_c('h1', [_vm._v("Floor plan")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(124),
      "alt": "@/static/samplefloorplan.png"
    }
  })])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/RoomDisplay.vue?vue&type=template&id=781c2cce&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(80);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RoomDisplay.vue?vue&type=script&lang=js&


/* harmony default export */ var RoomDisplayvue_type_script_lang_js_ = ({
  name: 'RoomDisplay',
  props: {
    filteredData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: this.filteredData,
      roomId: null,
      showComment: false,
      showFloorPlan: false,
      showGroups: false,
      displayRoom: true
    };
  },
  watch: {
    filteredData: function (newVal, oldVal) {
      // Log the changes to the console
      console.log('Prop changed for filtered Data: ', newVal, ' old data was: ', oldVal);
      console.log(newVal);

      // Use the new value in the component
      this.data = newVal;

      // You can perform additional actions with the new value if needed
      // For example, update some internal state or trigger a method
      this.handleDataChange(newVal);
    }
  },
  computed: {
    handleRoom() {}
  },
  methods: {
    handleCloseFloorPlan(done) {
      // Additional logic before closing the dialog (if needed)
      console.log('Closing floor plan dialog.');

      // Set showFloorPlan to false to close the dialog
      this.showFloorPlan = false;

      // Call the done function to close the dialog
      done();
    },
    handleReceiveComment() {
      this.showComment = false;
    },
    collectRoom(roomID) {
      external_axios_default.a.post('http://8.138.105.61/api/book-dorm/', {
        id: roomID
      }
      //   {
      //   headers: headers
      // }
      ).then(response => {
        element_ui_common["MessageBox"].alert('Room successfully collected to user！.', 'Alert', {
          confirmButtonText: 'Back',
          type: 'warning'
        });
      });
    },
    // hasBuilding(location,building){
    //   return this.filteredData[location][building][floor].length !== 0;
    // },
    //
    // hasRooms(location,building,floor){
    //   return this.filteredData[location][building][floor].length !== 0;
    //
    // },

    handleComment(roomId) {
      console.log("selected Room", roomId);
      this.showComment = true, this.roomId = roomId;
    },
    getImageSrc(type) {
      // Add your logic here to determine the image source based on the type
      if (type === 'quadruple_room') {
        return __webpack_require__(101);
      } else if (type === 'single_room') {
        return __webpack_require__(102);
      }
    },
    handleDataChange(newData) {
      // Do something with the new data
      console.log('Handling data change:', newData);
    }
  }
});
// CONCATENATED MODULE: ./components/RoomDisplay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RoomDisplayvue_type_script_lang_js_ = (RoomDisplayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/RoomDisplay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RoomDisplayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "781c2cce",
  "a3a7545a"
  
)

/* harmony default export */ var RoomDisplay = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommentSection: __webpack_require__(115).default})


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormFilter_vue_vue_type_style_index_0_id_46a5e7e9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormFilter_vue_vue_type_style_index_0_id_46a5e7e9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormFilter_vue_vue_type_style_index_0_id_46a5e7e9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormFilter_vue_vue_type_style_index_0_id_46a5e7e9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormFilter_vue_vue_type_style_index_0_id_46a5e7e9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".filter-style[data-v-46a5e7e9]{margin-left:20px;margin-right:20px}.demo-date-picker[data-v-46a5e7e9]{display:flex;flex-wrap:wrap;padding:0;width:100%}.demo-date-picker .block[data-v-46a5e7e9]{border-right:1px solid;flex:1;padding:30px 0;text-align:center}.demo-date-picker .block[data-v-46a5e7e9]:last-child{border-right:none}.demo-date-picker .demonstration[data-v-46a5e7e9]{color:grey;display:block;font-size:14px;margin-bottom:20px}.el-radio-group[data-v-46a5e7e9]{margin-top:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("01ead83e", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DormFilter.vue?vue&type=template&id=46a5e7e9&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showForm ? _c('div', [_c('el-collapse', {}, [_c('el-collapse-item', {
    staticClass: "filter-style",
    attrs: {
      "title": "点击筛洗",
      "name": "1"
    }
  }, [_c('div', [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('h3', [_vm._v("Location:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [this.hierarchicalData ? _c('el-radio-group', {
    on: {
      "change": _vm.handleLocationChange
    },
    model: {
      value: _vm.locationFilter,
      callback: function ($$v) {
        _vm.locationFilter = $$v;
      },
      expression: "locationFilter"
    }
  }, _vm._l(Object.keys(this.hierarchicalData), function (location) {
    return _c('el-radio', {
      key: location,
      attrs: {
        "label": location
      }
    }, [_vm._v(_vm._s(location))]);
  }), 1) : _vm._e()], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('h3', [_vm._v("Selection Date")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "demo-date-picker"
  }, [_c('el-date-picker', {
    attrs: {
      "type": "daterange",
      "range-separator": "To",
      "start-placeholder": "Start date",
      "end-placeholder": "End date",
      "size": _vm.size
    },
    model: {
      value: _vm.timeRange,
      callback: function ($$v) {
        _vm.timeRange = $$v;
      },
      expression: "timeRange"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c('el-row', [_vm.locationFilter && this.hierarchicalData[_vm.locationFilter] ? _c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('h3', [_vm._v("Building:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-select', {
    attrs: {
      "value": "building",
      "id": "filterBuilding",
      "value-key": "id",
      "placeholder": "Select Building"
    },
    model: {
      value: _vm.filterBuilding,
      callback: function ($$v) {
        _vm.filterBuilding = $$v;
      },
      expression: "filterBuilding"
    }
  }, _vm._l(Object.keys(this.hierarchicalData[_vm.locationFilter]), function (option) {
    return _c('el-option', {
      key: option,
      attrs: {
        "label": option,
        "value": option
      }
    });
  }), 1)], 1)], 1)], 1) : _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('h3', [_vm._v("Building:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-select', {
    attrs: {
      "value": "",
      "id": "filterBuilding",
      "value-key": "id",
      "placeholder": "Select Floor"
    }
  }, _vm._l([], function (option) {
    return _c('el-option');
  }), 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('h3', [_vm._v("Student Type")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-radio-group', {
    model: {
      value: _vm.studentType,
      callback: function ($$v) {
        _vm.studentType = $$v;
      },
      expression: "studentType"
    }
  }, [_c('el-radio', {
    attrs: {
      "value": "masters",
      "label": 1
    }
  }, [_vm._v("Masters")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "value": "doctoral",
      "label": 2
    }
  }, [_vm._v("Doctoral")])], 1)], 1), _vm._v(" "), this.hierarchicalData[_vm.locationFilter] && this.hierarchicalData[_vm.locationFilter][_vm.filterBuilding] && _vm.locationFilter && _vm.filterBuilding ? _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('h3', [_vm._v("Floor:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-select', {
    attrs: {
      "value": "floor",
      "id": "filterFloor",
      "value-key": "id",
      "placeholder": "Select Floor"
    },
    model: {
      value: _vm.floorFilter,
      callback: function ($$v) {
        _vm.floorFilter = $$v;
      },
      expression: "floorFilter"
    }
  }, _vm._l(Object.keys(this.hierarchicalData[_vm.locationFilter][_vm.filterBuilding]), function (option) {
    return _c('el-option', {
      key: option,
      attrs: {
        "label": option,
        "value": option
      }
    });
  }), 1)], 1)], 1)], 1) : _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('h3', [_vm._v("Floor:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-select', {
    attrs: {
      "value": "",
      "id": "filterFloor",
      "value-key": "id",
      "placeholder": "Select Floor"
    }
  }, _vm._l([], function (option) {
    return _c('el-option');
  }), 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('h3', [_vm._v("Room Type:")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('div', {
    staticClass: "mt-4"
  }, [_c('el-checkbox', {
    attrs: {
      "label": "Single",
      "border": ""
    },
    model: {
      value: _vm.roomType.single_room,
      callback: function ($$v) {
        _vm.$set(_vm.roomType, "single_room", $$v);
      },
      expression: "roomType.single_room"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "Double",
      "border": ""
    },
    model: {
      value: _vm.roomType.double_room,
      callback: function ($$v) {
        _vm.$set(_vm.roomType, "double_room", $$v);
      },
      expression: "roomType.double_room"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "Quadruple",
      "border": ""
    },
    model: {
      value: _vm.roomType.quadruple_room,
      callback: function ($$v) {
        _vm.$set(_vm.roomType, "quadruple_room", $$v);
      },
      expression: "roomType.quadruple_room"
    }
  })], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('h3', [_vm._v("Gender: ")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-radio-group', {
    model: {
      value: _vm.gender,
      callback: function ($$v) {
        _vm.gender = $$v;
      },
      expression: "gender"
    }
  }, [_c('el-radio', {
    attrs: {
      "value": "male",
      "label": 1
    }
  }, [_vm._v("Male")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "value": "female",
      "label": 2
    }
  }, [_vm._v("Female")])], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('el-button', {
    on: {
      "click": _vm.filterData
    }
  }, [_vm._v("Filter!")])], 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-46a5e7e9>", "</div>", [_c('RoomDisplay', {
    attrs: {
      "filtered-data": this.filteredData
    }
  })], 1)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DormFilter.vue?vue&type=template&id=46a5e7e9&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(80);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DormFilter.vue?vue&type=script&lang=js&


/* harmony default export */ var DormFiltervue_type_script_lang_js_ = ({
  build: {
    extend(config, {
      isClient
    }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map';
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://8.138.105.61',  // Replace with your Django server URL
  //       changeOrigin: true,
  //     },
  //   },
  // },

  props: {
    receivedZone: null,
    receivedBuilding: null
  },
  name: 'DormFilter',
  watch: {
    receivedZone: function (newVal, oldVal) {
      this.locationFilter = newVal;
      console.log('Prop changed for receivedZone: ', newVal, ' | was: ', oldVal);
    },
    receivedBuilding: function (newVal, oldVal) {
      this.filterBuilding = newVal;
      console.log('Prop changed for receivedBuilding: ', newVal, ' | was: ', oldVal);
      if (this.locationFilter && this.filterBuilding) {
        console.log("Able to filter!");
        console.log(this.hierarchicalData);
        this.filterData();
      } else {
        console.log("Unable to filter");
      }
    },
    timeRange: function (newVal, oldVal) {
      console.log("Time picked: ", newVal);
    }
  },
  data() {
    return {
      APIFormData: '',
      hierarchicalData: [],
      filteredData: [],
      filterBuilding: null,
      locationFilter: null,
      timeRange: null,
      floorFilter: null,
      floorNumber: 0,
      showForm: false,
      gender: null,
      studentType: null,
      roomType: {
        single_room: Object(external_vue_["ref"])(true),
        quadruple_room: Object(external_vue_["ref"])(true),
        double_room: Object(external_vue_["ref"])(false)
      }
    };
  },
  methods: {
    handleLocationChange() {
      console.log(this.locationFilter);
      this.filterBuilding = null, this.floorFilter = null;
    },
    filterData() {
      const filteredData = {};

      // Iterate over the hierarchicalData to filter based on selected options
      console.log("Filter Data is called");
      // console.log(this.hierarchicalData)
      for (const location in this.hierarchicalData) {
        console.log(location);
        if (this.locationFilter != null && location !== this.locationFilter) {
          continue; // Skip if location filter is set and doesn't match and the filter is actually not null
        }

        filteredData[location] = {};
        for (const building in this.hierarchicalData[location]) {
          if (this.filterBuilding != null && building !== this.filterBuilding) {
            continue; // Skip if building filter is set and doesn't match
          }

          filteredData[location][building] = {};
          for (const floor in this.hierarchicalData[location][building]) {
            if (this.floorFilter != null && floor !== this.floorFilter) {
              continue; // Skip if floor filter is set and doesn't match
            }

            filteredData[location][building][floor] = [];
            for (const room of this.hierarchicalData[location][building][floor]) {
              // Check if filters are set and room matches the criteria
              const currentRoomGender = room.sex === 'male' ? 1 : 2;
              const isGenderMatch = this.gender === null || currentRoomGender === this.gender;
              const isDateMatch = this.timeRange === null || new Date(this.timeRange[0]) >= new Date(room.start) && new Date(this.timeRange[1]) <= new Date(room.end);
              const isDegreeMatch = this.studentType === null || this.studentType === room.degree;
              const isSingleMatch = this.roomType.single_room && room.type === 'single_room';
              const isDoubleMatch = this.roomType.double_room && room.type === 'double_room';
              const isQuadrupleMatch = this.roomType.quadruple_room && room.type === 'quadruple_room';

              // Combine the room type conditions using logical OR
              const isRoomTypeMatch = isSingleMatch || isDoubleMatch || isQuadrupleMatch;

              // console.log(new Date(this.timeRange[0]))
              // console.log(new Date(this.timeRange[1]))
              // console.log(new Date(room.start))
              // console.log(new Date(room.end))
              // console.log(new Date(this.timeRange[0]) >= new Date(room.start))

              if (isGenderMatch && isRoomTypeMatch && isDateMatch && isDegreeMatch) {
                // If all filters match, add `the room to filteredData
                filteredData[location][building][floor].push(room);
              } else {
                console.log("Room not put:");
                console.log(room);
              }
            }
            console.log("Floor length");
            console.log(filteredData[location][building][floor].length);
            if (filteredData[location][building][floor].length === 0) {
              delete filteredData[location][building][floor];
            }
          }
          console.log("Building Length");
          console.log(Object.keys(filteredData[location][building]).length);
          if (Object.keys(filteredData[location][building]).length === 0) {
            delete filteredData[location][building];
          }
        }
        if (filteredData[location].length === 0) {
          delete filteredData[location];
        }
        console.log("Newly filtered Data");
        console.log(filteredData);
        this.filteredData = filteredData;
      }
    }
  },
  mounted() {
    external_axios_default.a.get('http://8.138.105.61/api/dorm-room/').then(response => {
      this.APIFormData = response.data;
      this.APIFormData.forEach(item => {
        const {
          id,
          zone,
          building,
          type,
          floor,
          roomNumber,
          sex,
          start,
          end,
          degree
        } = item;
        if (!this.hierarchicalData[zone]) {
          this.hierarchicalData[zone] = {};
        }
        if (!this.hierarchicalData[zone][building]) {
          this.hierarchicalData[zone][building] = {};
        }
        if (!this.hierarchicalData[zone][building][floor]) {
          this.hierarchicalData[zone][building][floor] = [];
        }
        this.hierarchicalData[zone][building][floor].push({
          id,
          roomNumber,
          type,
          sex,
          start,
          end,
          degree
        });
      });
      this.showForm = true;
      this.filterData();
      console.log("Done mounting");
    }).catch(error => {
      this.APIFormData = '';
      this.error = error.message || 'An error occurred';
    });
  }
});
// CONCATENATED MODULE: ./components/DormFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DormFiltervue_type_script_lang_js_ = (DormFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/DormFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DormFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46a5e7e9",
  "d79f463c"
  
)

/* harmony default export */ var DormFilter = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {RoomDisplay: __webpack_require__(129).default})


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormView_vue_vue_type_style_index_0_id_ea04e6c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormView_vue_vue_type_style_index_0_id_ea04e6c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormView_vue_vue_type_style_index_0_id_ea04e6c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormView_vue_vue_type_style_index_0_id_ea04e6c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DormView_vue_vue_type_style_index_0_id_ea04e6c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app{color:#2c3e50;font-family:Avenir,Helvetica,Arial,sans-serif;margin-top:20px}.flex-container{display:flex;flex-direction:column}.flex-item{margin-bottom:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/DormView.vue?vue&type=template&id=ea04e6c4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex-container",
    attrs: {
      "id": "app"
    }
  }, [_vm._ssrNode("<div class=\"flex-item\">", "</div>", [_c('choose')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex-item\">", "</div>", [_c('DormFilter', {
    attrs: {
      "receivedZone": _vm.zone,
      "receivedBuilding": _vm.building
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/DormView.vue?vue&type=template&id=ea04e6c4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/DormView.vue?vue&type=script&lang=js&
/* harmony default export */ var DormViewvue_type_script_lang_js_ = ({
  data() {
    return {
      zone: null,
      building: null
    };
  },
  mounted() {
    console.log("Current params in View Dorm");
    console.log(this.$route.params);
    this.zone = this.$route.params.zone;
    this.building = this.$route.params.building;
  }
});
// CONCATENATED MODULE: ./pages/DormView.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_DormViewvue_type_script_lang_js_ = (DormViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/DormView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_DormViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f780cf56"
  
)

/* harmony default export */ var DormView = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Choose: __webpack_require__(105).default,DormFilter: __webpack_require__(152).default})


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
//# sourceMappingURL=DormView.js.map