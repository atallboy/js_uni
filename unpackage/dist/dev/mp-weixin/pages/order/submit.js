(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/submit"],{

/***/ 58:
/*!*****************************************************************************!*\
  !*** D:/jishistydy/Jishiqianduan/main.js?{"page":"pages%2Forder%2Fsubmit"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _submit = _interopRequireDefault(__webpack_require__(/*! ./pages/order/submit.vue */ 59));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_submit.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 59:
/*!**********************************************************!*\
  !*** D:/jishistydy/Jishiqianduan/pages/order/submit.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit.vue?vue&type=template&id=d3de531c& */ 60);
/* harmony import */ var _submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit.vue?vue&type=script&lang=js& */ 62);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _submit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submit.vue?vue&type=style&index=0&lang=css& */ 64);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order/submit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/*!*****************************************************************************************!*\
  !*** D:/jishistydy/Jishiqianduan/pages/order/submit.vue?vue&type=template&id=d3de531c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./submit.vue?vue&type=template&id=d3de531c& */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_template_id_d3de531c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 61:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/jishistydy/Jishiqianduan/pages/order/submit.vue?vue&type=template&id=d3de531c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 359))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 352))
    },
    yjCoupon: function () {
      return __webpack_require__.e(/*! import() | components/yj-coupon/yj-coupon */ "components/yj-coupon/yj-coupon").then(__webpack_require__.bind(null, /*! @/components/yj-coupon/yj-coupon.vue */ 367))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.coupon_list[0] && !_vm.coupon.id ? _vm.coupon_list.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 62:
/*!***********************************************************************************!*\
  !*** D:/jishistydy/Jishiqianduan/pages/order/submit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./submit.vue?vue&type=script&lang=js& */ 63);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/jishistydy/Jishiqianduan/pages/order/submit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 42));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 44));
var _api = __webpack_require__(/*! @/utils/api.js */ 45);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// var jWeixin = require('jweixin-module');
var _pay = __webpack_require__(/*! ../../utils/pay.js */ 54);
var _default = {
  data: function data() {
    return {
      address: {},
      orderProduct: [],
      orderProductIds: [],
      master: {},
      timeArray: ['0-1点', '1-2点', '2-3点', '3-4点', '4-5点', '5-6点', '6-7点', '7-8点', '8-9点', '9-10点', '10-11点', '11-12点', '12-13点', '13-14点', '14-15点', '15-16点', '16-17点', '17-18点', '18-19点', '19-20点', '20-21点', '21-22点', '22-23点', '23-24点'],
      timeIndex: -1,
      btnStatus: true,
      payType: 1,
      user: {
        balance: ''
      },
      coupon_list: [],
      coupon: {
        id: 0,
        coupon_record_id: 0
      },
      payInfo: {
        pay_fee: 0,
        travel_expense: 0,
        bus_fee: 0,
        taxi_fee: 0,
        qibujia: 0 //起步价
      },

      travel_type: 1,
      distance_msg: '',
      distance: 0,
      rtData: {}
    };
  },
  onLoad: function onLoad() {
    var _this = this;
    this.master = uni.getStorageSync('selMaster');
    console.log('获取了缓存中技师的信息', this.master);
    this.orderProduct = uni.getStorageSync('selItem');
    this.orderProduct.forEach(function (item) {
      _this.orderProductIds.push(item.id);
    });
    uni.removeStorageSync('selMaster');
    uni.removeStorageSync('selItem');
    this.userInfo();
  },
  onShow: function onShow() {
    if (uni.getStorageSync('selAddress')) {
      this.address = uni.getStorageSync('selAddress');
      // uni.removeStorageSync('selAddress')
      this.calcDistanceAndFee();
    }
    this.couponRecord();
  },
  onReady: function onReady() {
    this.calcPayInfo();
  },
  methods: {
    calcDistanceAndFee: function calcDistanceAndFee() {
      var distance = this.distanceOf({
        latitude: this.master.latitude,
        longitude: this.master.longitude
      }, {
        latitude: this.address.latitude,
        longitude: this.address.longitude
      });
      console.log(distance);
      this.distance = (distance / 1000).toFixed(2);
      if (distance < 1000) {
        this.distance_msg = distance + '米';
      } else {
        this.distance_msg = (distance / 1000).toFixed(2) + '公里';
      }
      this.calcPayInfo();
    },
    changeTravelType: function changeTravelType(e) {
      this.travel_type = e;
      this.calcPayInfo();
    },
    calcPayInfo: function calcPayInfo() {
      var _this2 = this;
      this.payInfo.pay_fee = 0;
      this.orderProduct.forEach(function (item) {
        console.log(item);
        _this2.payInfo.pay_fee += parseFloat(item.price);
      });
      if (this.coupon.amount) {
        this.payInfo.pay_fee -= parseFloat(this.coupon.amount);
      }
      if (this.master.travel_expense == 1 && this.distance >= 1) {
        if (this.travel_type == 1) {
          console.log(this.master.qibujia);
          //this.payInfo.travel_expense = this.payInfo.taxi_fee = ((this.master.taxi_fee) * this.distance).toFixed(2)
          this.payInfo.travel_expense = this.payInfo.taxi_fee = (this.master.taxi_fee * this.distance + this.master.qibujia).toFixed(2);
          this.payInfo.pay_fee += parseFloat(this.payInfo.travel_expense);
        }
        if (this.travel_type == 2) {
          this.payInfo.travel_expense = this.payInfo.bus_fee = (this.master.bus_fee * 1).toFixed(2);
          this.payInfo.pay_fee += parseFloat(this.payInfo.travel_expense);
        }
      }
    },
    selCoupon: function selCoupon(e) {
      console.log(e);
      this.coupon = e;
      this.$refs.popup.close();
      this.calcPayInfo();
    },
    closeCouponToast: function closeCouponToast() {
      this.$refs.popup.close();
    },
    openCouponToast: function openCouponToast() {
      this.$refs.popup.open('bottom');
    },
    couponRecord: function couponRecord() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.couponRecord)({
                  ids: _this3.orderProductIds.join('&'),
                  use_range: 'submit_order'
                });
              case 2:
                res = _context.sent;
                _this3.coupon_list = res.data.data;
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    userInfo: function userInfo() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.getUserInfo)();
              case 2:
                res = _context2.sent;
                _this4.user = res.data.data;
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    pay: function pay() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var data, res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this5.timeIndex == -1)) {
                  _context3.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请选择6服务时间',
                  icon: 'none'
                });
                return _context3.abrupt("return");
              case 3:
                data = {};
                data.address_id = _this5.address.id;
                data.master_id = _this5.master.id;
                data.service_time = _this5.timeArray[_this5.timeIndex];
                _this5.btnStatus = false;
                data.ids = _this5.orderProduct[0].id + '=1';
                data.coupon_id = _this5.coupon.coupon_record_id;
                data.pay_type = _this5.payType;
                data.travel_type = _this5.travel_type;
                data.travel_expense = _this5.payInfo.travel_expense;
                uni.showLoading();
                _context3.next = 16;
                return (0, _api.createOrder)(data);
              case 16:
                res = _context3.sent;
                uni.hideLoading();
                if (_this5.payType == 2) uni.switchTab({
                  url: '/pages/order/list'
                });
                if (!(_this5.payType == 1)) {
                  _context3.next = 23;
                  break;
                }
                _pay.toPay(res.data.data, {
                  cate: 'order'
                });
                return _context3.abrupt("return");
              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    ghzPay: function ghzPay() {
      var self = this;
      jWeixin.config({
        debug: false,
        // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: self.rtData.appId,
        // 必填，公众号的唯一标识
        timestamp: self.rtData.timeStamp,
        // 必填，生成签名的时间戳
        nonceStr: self.rtData.nonceStr,
        // 必填，生成签名的随机串
        signature: self.rtData.paySign,
        // 必填，签名，见附录1
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });

      jWeixin.ready(function () {
        jWeixin.checkJsApi({
          jsApiList: ['chooseWXPay'],
          // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function success(res) {
            console.log('checkjsapi Success');
            console.log(res);
          },
          fail: function fail(res) {
            console.log('res');
            console.log(res);
          }
        });
        jWeixin.chooseWXPay({
          timestamp: self.rtData.timeStamp,
          // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: self.rtData.nonceStr,
          // 支付签名随机串，不长于 32 位
          package: self.rtData.package,
          // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
          signType: self.rtData.signType,
          // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: self.rtData.paySign,
          // 支付签名
          success: function success(res) {
            // 支付成功后的回调函数							
            console.log('paysuccess');
            console.log(res);
            (0, _api.updateOrder)({
              id: self.rtData.id,
              cate: 1
            });
            uni.showModal({
              title: '支付成功',
              confirmText: '确定',
              showCancel: false,
              success: function success() {
                uni.switchTab({
                  url: '/pages/order/list'
                });
              }
            });
          },
          cancel: function cancel(r) {},
          fail: function fail(res) {
            console.log('payfail');
            console.log(res);
            uni.showModal({
              title: '支付失败',
              showCancel: false,
              success: function success() {
                // uni.switchTab({url:'/pages/order/list'})
              }
            });
          }
        });
      });
      jWeixin.error(function (res) {
        console.log('error');
        console.log(res);
        uni.showToast({
          icon: 'none',
          title: '支付失败',
          duration: 4000
        });
      });
    },
    bindTimeChange: function bindTimeChange(e) {
      this.timeIndex = e.detail.value;
    },
    selAddress: function selAddress() {
      uni.setStorageSync('isSelAddress', 1);
      uni.navigateTo({
        url: '/pages/address/list'
      });
    },
    payTypeChange: function payTypeChange(e) {
      console.log(e);
      this.payType = e.detail.value;
    },
    rad: function rad(d) {
      return d * Math.PI / 180.0;
    },
    distanceOf: function distanceOf(p1, p2) {
      console.log(p1, p2);
      var radLng1 = this.rad(p1.latitude);
      var radLng2 = this.rad(p2.latitude);
      var mdifference = radLng1 - radLng2;
      var difference = this.rad(p1.longitude) - this.rad(p2.longitude);
      var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(difference / 2), 2) + Math.cos(radLng1) * Math.cos(radLng2) * Math.pow(Math.sin(mdifference / 2), 2)));
      distance = distance * 6378.137;
      distance = Math.abs(Math.round(distance * 10000) / 10);
      return distance;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 64:
/*!*******************************************************************************************!*\
  !*** D:/jishistydy/Jishiqianduan/pages/order/submit.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./submit.vue?vue&type=style&index=0&lang=css& */ 65);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_submit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 65:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/jishistydy/Jishiqianduan/pages/order/submit.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[58,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/submit.js.map