(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/list"],{"30b8":function(e,t,n){"use strict";(function(e){var a=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("7eb4")),s=a(n("ee10")),d=n("e503"),u={data:function(){return{list:[]}},onLoad:function(){},onShow:function(){this.addressList()},methods:{addressList:function(){var e=this;return(0,s.default)(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,d.addressList)();case 2:n=t.sent,e.list=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},edit:function(t){e.navigateTo({url:"/pages/address/edit?id="+t})},add:function(){e.navigateTo({url:"/pages/address/edit"})},seladdr:function(t){e.getStorageSync("isSelAddress")&&(e.removeStorageSync("isSelAddress"),e.setStorageSync("selAddress",t),e.navigateBack())},del:function(t){var n=this;e.showModal({content:"确认删除吗",success:function(e){e.confirm&&n.delAddress(t)}})},delAddress:function(e){var t=this;return(0,s.default)(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,d.addressDel)({id:e});case 2:t.addressList();case 3:case"end":return n.stop()}}),n)})))()}}};t.default=u}).call(this,n("df3c")["default"])},4990:function(e,t,n){},"5b9c":function(e,t,n){"use strict";var a=n("4990"),r=n.n(a);r.a},a6ac:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},r=[]},b4d2:function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("70ab");a(n("3240"));var r=a(n("d43a"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},d0fd:function(e,t,n){"use strict";n.r(t);var a=n("30b8"),r=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=r.a},d43a:function(e,t,n){"use strict";n.r(t);var a=n("a6ac"),r=n("d0fd");for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n("5b9c");var d=n("828b"),u=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports}},[["b4d2","common/runtime","common/vendor"]]]);