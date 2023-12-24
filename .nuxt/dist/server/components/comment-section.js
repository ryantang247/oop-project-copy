exports.ids = [5];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=comment-section.js.map