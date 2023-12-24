exports.ids = [24,4];
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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("210bc0c9", content, true, context)
};

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0880d87b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0880d87b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0880d87b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0880d87b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_0880d87b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile[data-v-0880d87b]{padding:10px;text-align:center}.profile-info[data-v-0880d87b]{padding:120px;text-align:center}.avatar[data-v-0880d87b]{height:100px;margin-right:20px;width:100px}.info[data-v-0880d87b]{display:inline-block;text-align:left;vertical-align:top}.change-password-form[data-v-0880d87b],.edit-info-form[data-v-0880d87b]{padding:20px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/person.vue?vue&type=template&id=0880d87b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "profile"
  }, [_c('choose'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"profile-info\" data-v-0880d87b>", "</div>", [_c('el-avatar', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.avatarUrl,
      "alt": "User Avatar"
    }
  }), _vm._ssrNode(" <div class=\"info\" data-v-0880d87b><p data-v-0880d87b><strong data-v-0880d87b>姓名:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.userInfo.name)) + "</p> <p data-v-0880d87b><strong data-v-0880d87b>性别:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.userInfo.gender)) + "</p> <p data-v-0880d87b><strong data-v-0880d87b>联系方式:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.userInfo.contact)) + "</p> <p data-v-0880d87b><strong data-v-0880d87b>个人简介:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.userInfo.bio)) + "</p></div>")], 2), _vm._ssrNode(" "), _c('el-button', {
    attrs: {
      "type": "info"
    },
    on: {
      "click": _vm.showUploadAvatarDialog
    }
  }, [_vm._v("上传头像")]), _vm._ssrNode(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.showEditInfoDialog
    }
  }, [_vm._v("修改信息")]), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "title": "修改个人信息",
      "visible": _vm.editInfoDialogVisible,
      "width": "50%"
    },
    on: {
      "update:visible": function ($event) {
        _vm.editInfoDialogVisible = $event;
      }
    }
  }, [_c('div', {
    staticClass: "edit-info-form"
  }, [_c('el-form', {
    ref: "editInfoForm",
    attrs: {
      "model": _vm.editedUserInfo
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.cancelEditInfo
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveEditedInfo
    }
  }, [_vm._v("保存")])], 1)]), _vm._ssrNode(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.showChangePasswordDialog
    }
  }, [_vm._v("修改密码")]), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "title": "修改密码",
      "visible": _vm.changePasswordDialogVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function ($event) {
        _vm.changePasswordDialogVisible = $event;
      }
    }
  }, [_c('div', {
    staticClass: "change-password-form"
  }, [_c('el-form', {
    ref: "changePasswordForm",
    attrs: {
      "model": _vm.passwordChange
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.cancelChangePassword
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveChangedPassword
    }
  }, [_vm._v("保存")])], 1)]), _vm._ssrNode(" "), _c('el-dialog', {
    attrs: {
      "title": "上传头像",
      "visible": _vm.uploadAvatarDialogVisible,
      "width": "30%"
    },
    on: {
      "update:visible": function ($event) {
        _vm.uploadAvatarDialogVisible = $event;
      }
    }
  }, [_c('div', {
    staticClass: "upload-avatar-form"
  }, [_c('el-upload', {
    staticClass: "avatar-uploader",
    attrs: {
      "action": "/upload",
      "show-file-list": false,
      "on-success": _vm.handleAvatarSuccess,
      "before-upload": _vm.beforeAvatarUpload
    }
  }, [_vm.avatarUrl ? _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.avatarUrl
    }
  }) : _c('i', {
    staticClass: "el-icon-plus avatar-uploader-icon"
  })])], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.cancelUploadAvatar
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.uploadAvatar
    }
  }, [_vm._v("保存")])], 1)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/person.vue?vue&type=template&id=0880d87b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/person.vue?vue&type=script&lang=js&
/* harmony default export */ var personvue_type_script_lang_js_ = ({
  data() {
    return {
      avatarUrl: 'https://example.com/avatar.jpg',
      userInfo: {
        name: 'John Doe',
        gender: 'Male',
        contact: 'john.doe@example.com',
        bio: 'Hello, I am John Doe.'
      },
      editInfoDialogVisible: false,
      editedUserInfo: {
        name: '',
        gender: '',
        contact: '',
        bio: ''
      },
      changePasswordDialogVisible: false,
      passwordChange: {
        oldPassword: '',
        newPassword: ''
      },
      uploadAvatarDialogVisible: false
    };
  },
  methods: {
    showEditInfoDialog() {
      this.editInfoDialogVisible = true;
      // 将用户信息复制到编辑表单中
      this.editedUserInfo = {
        ...this.userInfo
      };
    },
    cancelEditInfo() {
      this.editInfoDialogVisible = false;
    },
    saveEditedInfo() {
      // 在这里保存修改后的用户信息
      this.userInfo = {
        ...this.editedUserInfo
      };
      this.editInfoDialogVisible = false;
    },
    showChangePasswordDialog() {
      this.changePasswordDialogVisible = true;
    },
    cancelChangePassword() {
      this.changePasswordDialogVisible = false;
    },
    saveChangedPassword() {
      // 在这里保存修改后的密码
      this.passwordChange.oldPassword = '';
      this.passwordChange.newPassword = '';
      this.changePasswordDialogVisible = false;
    },
    showUploadAvatarDialog() {
      this.uploadAvatarDialogVisible = true;
    },
    cancelUploadAvatar() {
      this.uploadAvatarDialogVisible = false;
    },
    handleAvatarSuccess(response, file) {
      // 上传成功后更新 avatarUrl 的值
      this.avatarUrl = response.url;
    },
    beforeAvatarUpload(file) {
      // 验证上传的文件格式等
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    uploadAvatar() {
      // 在这里实现上传头像的逻辑
      // 可以使用第三方库或服务，也可以直接调用后端接口
      // 在上传成功后，更新 avatarUrl 的值
      // this.avatarUrl = '新的头像地址';
      this.uploadAvatarDialogVisible = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/person.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_personvue_type_script_lang_js_ = (personvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/person.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_personvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0880d87b",
  "45e0573f"
  
)

/* harmony default export */ var person = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Choose: __webpack_require__(105).default})


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
//# sourceMappingURL=person.js.map