(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/yj-tab/yj-tab"],{1790:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"yj-tab",emits:["selTab"],props:{data:{type:Array,default:[]},btnShow:{type:Boolean,default:!1}},data:function(){return{scrollLeft:0,list:[]}},mounted:function(){console.log("data"),console.log(this.data),this.list=this.data},methods:{changeCate:function(t,e){for(var a=this.data,n=0;n<a.length;n++)a[n].active=n==e?"tab-item-active":"";this.data=a,this.page=0,this.scrollLeft=45*(e-1),this.$emit("selTab",t)}}};e.default=n},"613e":function(t,e,a){"use strict";a.r(e);var n=a("1790"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},ac9a:function(t,e,a){"use strict";a.r(e);var n=a("b009"),i=a("613e");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);var u=a("828b"),l=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=l.exports},b009:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/yj-tab/yj-tab-create-component',
    {
        'components/yj-tab/yj-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("ac9a"))
        })
    },
    [['components/yj-tab/yj-tab-create-component']]
]);
