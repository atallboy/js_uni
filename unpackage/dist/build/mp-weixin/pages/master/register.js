(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/master/register"],{1519:function(e,t,n){"use strict";n.r(t);var o=n("d295"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"2df3":function(e,t,n){"use strict";var o=n("61dd"),a=n.n(o);a.a},"61dd":function(e,t,n){},"7d16":function(e,t,n){"use strict";(function(e,t){var o=n("47a9");n("70ab");o(n("3240"));var a=o(n("c7e0"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},b2f4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"5bd9"))}},a=function(){var e=this.$createElement;this._self._c},i=[]},c7e0:function(e,t,n){"use strict";n.r(t);var o=n("b2f4"),a=n("1519");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("2df3");var r=n("828b"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=c.exports},d295:function(e,t,n){"use strict";(function(e){var o=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=o(n("7eb4")),r=o(n("ee10")),c=n("e503"),s=n("5607"),u={data:function(){return{e:{},host:"",formData:{name:"",email:"",gender:2,pic:"",region:[],province:"",city:"",district:""}}},onLoad:function(t){this.e=t,this.host=e.getStorageSync("siteroot"),a=new s({key:"KHABZ-MEULF-GGWJE-NUL5G-4TGFT-4VFT4"})},onShow:function(){this.logo=e.getStorageSync("setting").logo},methods:{getUserInfo:function(){return(0,r.default)(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,c.getUserInfo)();case 2:n=t.sent,n.data.data.master&&e.redirectTo({url:"/pages/master/console"});case 4:case"end":return t.stop()}}),t)})))()},submit:function(t){var n=this;return(0,r.default)(i.default.mark((function o(){return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(console.log(t),t.detail.value.name){o.next=4;break}return e.showToast({title:"请输入姓名",icon:"none"}),o.abrupt("return");case 4:if(t.detail.value.tel){o.next=7;break}return e.showToast({title:"请输入电话",icon:"none"}),o.abrupt("return");case 7:if(t.detail.value.age){o.next=10;break}return e.showToast({title:"请输入姓名",icon:"none"}),o.abrupt("return");case 10:if(n.formData.city){o.next=13;break}return e.showToast({title:"请选择城市",icon:"none"}),o.abrupt("return");case 13:if(t.detail.value.address){o.next=16;break}return e.showToast({title:"请选择城市",icon:"none"}),o.abrupt("return");case 16:if(n.formData.pic){o.next=19;break}return e.showToast({title:"请上传照片",icon:"none"}),o.abrupt("return");case 19:return t.detail.value.gender=n.formData.gender,t.detail.value.pic=n.formData.pic,t.detail.value.province=n.formData.province,t.detail.value.city=n.formData.city,t.detail.value.district=n.formData.district,t.detail.value.latitude=n.formData.latitude,t.detail.value.longitude=n.formData.longitude,o.next=28,(0,c.masterEdit)(t.detail.value);case 28:o.sent,e.showToast({title:"提交成功",icon:"none"}),setTimeout((function(){e.navigateBack()}),1500);case 31:case"end":return o.stop()}}),o)})))()},selGender:function(e){console.log(e),this.formData.gender=e.detail.value},bindRegionChange:function(e){console.log(e),this.formData.province=e.detail.value[0],this.formData.city=e.detail.value[1],this.formData.district=e.detail.value[2]},selAddr:function(){var t=this;console.log("---"),e.chooseLocation({success:function(e){console.log(e),t.formData.latitude=e.latitude,t.formData.longitude=e.longitude,t.getLocal(e.latitude,e.longitude)},fail:function(e){console.log(e)}})},getLocal:function(e,t){var n=this,o={key:"KHABZ-MEULF-GGWJE-NUL5G-4TGFT-4VFT4",location:e+","+t,output:"jsonp"};this.$jsonp("https://apis.map.qq.com/ws/geocoder/v1/",o).then((function(e){console.log("---------------------------"),console.log(e),n.address_info=e.result.ad_info,n.formData.province=e.result.ad_info.province,n.formData.city=e.result.ad_info.city,n.formData.district=e.result.ad_info.district,n.formData.address=e.result.address_component.street}))},getLocal11:function(e,t){var n=this;console.log("getLocal"),a.reverseGeocoder({location:{latitude:e,longitude:t},success:function(e){console.log(e),n.address_info=e.result.ad_info,n.formData.province=e.result.ad_info.province,n.formData.city=e.result.ad_info.city,n.formData.district=e.result.ad_info.district,n.formData.address=e.result.address_component.street}})},choosePic:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],success:function(n){console.log("chooseImageRestempFile__");var o=n.tempFilePaths;e.showLoading(),t.tempFileLength=o.length,console.log("tempFile__"+o.length),console.log(o);for(var a=0;a<o.length;a++)t.uploadIndex=a,t.uploadPic(o[a])}})},uploadPic:function(t){var n=this;e.uploadFile({url:"/api/upload",filePath:t,name:"file",success:function(t){e.hideLoading(),console.log(t),n.formData.pic=t.data,n.tempFileLength==n.uploadIndex+1&&e.hideLoading()}})}}};t.default=u}).call(this,n("df3c")["default"])}},[["7d16","common/runtime","common/vendor"]]]);