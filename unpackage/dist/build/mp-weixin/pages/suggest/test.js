(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/suggest/test"],{6089:function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("70ab");a(n("3240"));var o=a(n("65e8"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"65e8":function(e,t,n){"use strict";n.r(t);var a=n("db9a"),o=n("96d0");for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);n("ec57");var r=n("828b"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"1e63a181",null,!1,a["a"],void 0);t["default"]=u.exports},"952f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{locationName:""}},methods:{getUserLocation:function(){var t=this;e.getLocation({type:"gcj02",success:function(e){var n=e.latitude,a=e.longitude;t.reverseGeocoding(n,a)},fail:function(e){console.error("获取位置失败：",e)}})},reverseGeocoding:function(t,n){var a=this,o="https://restapi.amap.com/v3/geocode/regeo?key=".concat("59c50aaacccbb076a1b6f79192570255","&location=").concat(n,",").concat(t,"&output=json");e.request({url:o,method:"GET",success:function(e){"1"===e.data.status&&e.data.regeocode?a.locationName=e.data.regeocode.formatted_address:console.error("逆地理编码失败：",e.data.info)},fail:function(e){console.error("逆地理编码请求失败：",e)}})}}};t.default=n}).call(this,n("df3c")["default"])},"96d0":function(e,t,n){"use strict";n.r(t);var a=n("952f"),o=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=o.a},d5ae:function(e,t,n){},db9a:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},o=[]},ec57:function(e,t,n){"use strict";var a=n("d5ae"),o=n.n(a);o.a}},[["6089","common/runtime","common/vendor"]]]);