(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/master/edit"],{2236:function(t,e,a){"use strict";a.r(e);var o=a("ce80"),n=a.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},"60fd":function(t,e,a){"use strict";a.r(e);var o=a("9067"),n=a("2236");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("d907");var r=a("828b"),s=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=s.exports},"665d":function(t,e,a){},"6fa1":function(t,e,a){"use strict";(function(t,e){var o=a("47a9");a("70ab");o(a("3240"));var n=o(a("60fd"));t.__webpack_require_UNI_MP_PLUGIN__=a,e(n.default)}).call(this,a("3223")["default"],a("df3c")["createPage"])},9067:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(a.bind(null,"5bd9"))},yjUpload:function(){return a.e("components/yj-upload/yj-upload").then(a.bind(null,"f81b"))}},n=function(){var t=this.$createElement;this._self._c},i=[]},ce80:function(t,e,a){"use strict";(function(t){var o=a("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=o(a("7eb4")),r=o(a("ee10")),s=a("e503"),c=a("5607"),l={data:function(){return{host:"",formData:{qibujia:0,name:"",email:"",gender:2,pic:"",region:[],province:"",city:"",district:"",_work_time:"",picArr:[]},timeArr:[["0时","1时","2时","3时","4时","5时","6时","7时","8时","9时","10时","11时","12时","13时","14时","15时","16时","17时","18时","19时","20时","21时","22时","23时"],["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"],["至"],["0时","1时","2时","3时","4时","5时","6时","7时","8时","9时","10时","11时","12时","13时","14时","15时","16时","17时","18时","19时","20时","21时","22时","23时"],["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"]],timeArrFormat:[["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"],["至"],["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"]],timeIndex:[]}},onLoad:function(){n=new c({key:"KHABZ-MEULF-GGWJE-NUL5G-4TGFT-4VFT4"}),this.host=t.getStorageSync("siteroot"),this.userInfo()},onShow:function(){this.logo=t.getStorageSync("setting").logo},methods:{uploadCertificate:function(t){this.formData.certificateArr=t},clickDeleteCertificatePic:function(t){this.formData.certificateArr=t},clickDeletePic:function(t){this.formData.picArr=t},upload:function(t){this.formData.picArr=t},timePickerChange:function(e){var a=e.detail.value;a[0]>a[3]||a[0]==a[3]&&a[1]==a[4]||a[0]==a[3]&&a[1]>a[4]?t.showToast({title:"时间错误",icon:"none"}):(this.formData._work_time=this.timeArrFormat[0][a[0]]+":"+this.timeArrFormat[1][a[1]]+"至"+this.timeArrFormat[3][a[3]]+":"+this.timeArrFormat[4][a[4]],console.log(this.formData))},userInfo:function(){var t=this;return(0,r.default)(i.default.mark((function e(){var a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getUserInfo)();case 2:a=e.sent,t.formData=a.data.data.master;case 4:case"end":return e.stop()}}),e)})))()},submit:function(e){var a=this;return(0,r.default)(i.default.mark((function o(){return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(console.log(e),e.detail.value.name){o.next=4;break}return t.showToast({title:"请输入姓名",icon:"none"}),o.abrupt("return");case 4:if(e.detail.value.tel){o.next=7;break}return t.showToast({title:"请输入电话",icon:"none"}),o.abrupt("return");case 7:if(e.detail.value.age){o.next=10;break}return t.showToast({title:"请输入姓名",icon:"none"}),o.abrupt("return");case 10:if(e.detail.value.region){o.next=13;break}return t.showToast({title:"请选择城市",icon:"none"}),o.abrupt("return");case 13:if(a.formData.pic){o.next=16;break}return t.showToast({title:"请上传照片",icon:"none"}),o.abrupt("return");case 16:return e.detail.value.open_status=a.formData.open_status,e.detail.value.gender=a.formData.gender,e.detail.value.pic=a.formData.picArr.join("&"),e.detail.value.certificate=a.formData.certificateArr.join("&"),e.detail.value.province=a.formData.province,e.detail.value.city=a.formData.city,e.detail.value.district=a.formData.district,e.detail.value.address=a.formData.address,e.detail.value.latitude=a.formData.latitude,e.detail.value.longitude=a.formData.longitude,e.detail.value.travel_expense=a.formData.travel_expense,a.formData.id&&(e.detail.value.id=a.formData.id),o.next=30,(0,s.masterEdit)(e.detail.value);case 30:o.sent,t.showToast({title:"提交成功",icon:"none"});case 32:case"end":return o.stop()}}),o)})))()},selTravelExpense:function(t){this.formData.travel_expense=t.detail.value},selGender:function(t){this.formData.gender=t.detail.value},selOpenStatus:function(t){this.formData.open_status=t.detail.value},bindRegionChange:function(t){this.formData.province=t.detail.value[0],this.formData.city=t.detail.value[1],this.formData.district=t.detail.value[2]},choosePic:function(){var e=this;t.chooseImage({count:3,sizeType:["compressed"],success:function(a){console.log("chooseImageRestempFile__");var o=a.tempFilePaths;t.showLoading(),e.tempFileLength=o.length,console.log("tempFile__"+o.length),console.log(o);for(var n=0;n<o.length;n++)e.uploadIndex=n,e.uploadPic(o[n])}})},uploadPic:function(e){var a=this;t.uploadFile({url:t.getStorageSync("siteroot")+"/api/upload",filePath:e,name:"file",success:function(e){t.hideLoading(),console.log(e),a.formData.picArr.push(e.data),a.tempFileLength==a.uploadIndex+1&&t.hideLoading()}})},selAddr:function(){var e=this;console.log("---"),t.chooseLocation({success:function(t){console.log(t),e.formData.latitude=t.latitude,e.formData.longitude=t.longitude,e.getLocal(t.latitude,t.longitude)},fail:function(t){console.log(t)}})},getLocal:function(t,e){var a=this,o={key:"KHABZ-MEULF-GGWJE-NUL5G-4TGFT-4VFT4",location:t+","+e,output:"jsonp"};this.$jsonp("https://apis.map.qq.com/ws/geocoder/v1/",o).then((function(t){console.log("---------------------------"),console.log(t),a.address_info=t.result.ad_info,a.formData.province=t.result.ad_info.province,a.formData.city=t.result.ad_info.city,a.formData.district=t.result.ad_info.district,a.formData.address=t.result.address_component.street}))},getLocal11:function(t,e){var a=this;console.log("getLocal"),n.reverseGeocoder({location:{latitude:t,longitude:e},success:function(t){console.log(t),a.address_info=t.result.ad_info,a.formData.province=t.result.ad_info.province,a.formData.city=t.result.ad_info.city,a.formData.district=t.result.ad_info.district,a.formData.address=t.result.address_component.street}})}}};e.default=l}).call(this,a("df3c")["default"])},d907:function(t,e,a){"use strict";var o=a("665d"),n=a.n(o);n.a}},[["6fa1","common/runtime","common/vendor"]]]);