(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/submit"],{"138a":function(e,t,n){"use strict";var a=n("e4a4"),o=n.n(a);o.a},"462f":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"5bd9"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"4f5b"))},yjCoupon:function(){return n.e("components/yj-coupon/yj-coupon").then(n.bind(null,"7e87"))}},o=function(){var e=this.$createElement,t=(this._self._c,this.coupon_list[0]&&!this.coupon.id?this.coupon_list.length:null);this.$mp.data=Object.assign({},{$root:{g0:t}})},s=[]},"51ac":function(e,t,n){"use strict";n.r(t);var a=n("e665"),o=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=o.a},6177:function(e,t,n){"use strict";n.r(t);var a=n("462f"),o=n("51ac");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("138a");var i=n("828b"),r=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=r.exports},"689f":function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("70ab");a(n("3240"));var o=a(n("6177"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},e4a4:function(e,t,n){},e665:function(e,t,n){"use strict";(function(e){var a=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("7eb4")),s=a(n("ee10")),i=n("e503"),r=n("d405"),c={data:function(){return{address:{},orderProduct:[],orderProductIds:[],master:{},timeArray:["0-1点","1-2点","2-3点","3-4点","4-5点","5-6点","6-7点","7-8点","8-9点","9-10点","10-11点","11-12点","12-13点","13-14点","14-15点","15-16点","16-17点","17-18点","18-19点","19-20点","20-21点","21-22点","22-23点","23-24点"],timeIndex:-1,btnStatus:!0,payType:1,user:{balance:""},coupon_list:[],coupon:{id:0,coupon_record_id:0},payInfo:{pay_fee:0,travel_expense:0,bus_fee:0,taxi_fee:0,qibujia:0},travel_type:1,distance_msg:"",distance:0,rtData:{}}},onLoad:function(){var t=this;this.master=e.getStorageSync("selMaster"),console.log("获取了缓存中技师的信息",this.master),this.orderProduct=e.getStorageSync("selItem"),this.orderProduct.forEach((function(e){t.orderProductIds.push(e.id)})),e.removeStorageSync("selMaster"),e.removeStorageSync("selItem"),this.userInfo()},onShow:function(){e.getStorageSync("selAddress")&&(this.address=e.getStorageSync("selAddress"),this.calcDistanceAndFee()),this.couponRecord()},onReady:function(){this.calcPayInfo()},methods:{calcDistanceAndFee:function(){var e=this.distanceOf({latitude:this.master.latitude,longitude:this.master.longitude},{latitude:this.address.latitude,longitude:this.address.longitude});console.log(e),this.distance=(e/1e3).toFixed(2),this.distance_msg=e<1e3?e+"米":(e/1e3).toFixed(2)+"公里",this.calcPayInfo()},changeTravelType:function(e){this.travel_type=e,this.calcPayInfo()},calcPayInfo:function(){var e=this;this.payInfo.pay_fee=0,this.orderProduct.forEach((function(t){console.log(t),e.payInfo.pay_fee+=parseFloat(t.price)})),this.coupon.amount&&(this.payInfo.pay_fee-=parseFloat(this.coupon.amount)),1==this.master.travel_expense&&this.distance>=1&&(1==this.travel_type&&(console.log(this.master.qibujia),this.payInfo.travel_expense=this.payInfo.taxi_fee=(this.master.taxi_fee*this.distance+this.master.qibujia).toFixed(2),this.payInfo.pay_fee+=parseFloat(this.payInfo.travel_expense)),2==this.travel_type&&(this.payInfo.travel_expense=this.payInfo.bus_fee=(1*this.master.bus_fee).toFixed(2),this.payInfo.pay_fee+=parseFloat(this.payInfo.travel_expense)))},selCoupon:function(e){console.log(e),this.coupon=e,this.$refs.popup.close(),this.calcPayInfo()},closeCouponToast:function(){this.$refs.popup.close()},openCouponToast:function(){this.$refs.popup.open("bottom")},couponRecord:function(){var e=this;return(0,s.default)(o.default.mark((function t(){var n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.couponRecord)({ids:e.orderProductIds.join("&"),use_range:"submit_order"});case 2:n=t.sent,e.coupon_list=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},userInfo:function(){var e=this;return(0,s.default)(o.default.mark((function t(){var n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.getUserInfo)();case 2:n=t.sent,e.user=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},pay:function(){var t=this;return(0,s.default)(o.default.mark((function n(){var a,s;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(-1!=t.timeIndex){n.next=3;break}return e.showToast({title:"请选择6服务时间",icon:"none"}),n.abrupt("return");case 3:return a={},a.address_id=t.address.id,a.master_id=t.master.id,a.service_time=t.timeArray[t.timeIndex],t.btnStatus=!1,a.ids=t.orderProduct[0].id+"=1",a.coupon_id=t.coupon.coupon_record_id,a.pay_type=t.payType,a.travel_type=t.travel_type,a.travel_expense=t.payInfo.travel_expense,e.showLoading(),n.next=16,(0,i.createOrder)(a);case 16:if(s=n.sent,e.hideLoading(),2==t.payType&&e.switchTab({url:"/pages/order/list"}),1!=t.payType){n.next=23;break}return r.toPay(s.data.data,{cate:"order"}),n.abrupt("return");case 23:case"end":return n.stop()}}),n)})))()},ghzPay:function(){var t=this;jWeixin.config({debug:!1,appId:t.rtData.appId,timestamp:t.rtData.timeStamp,nonceStr:t.rtData.nonceStr,signature:t.rtData.paySign,jsApiList:["chooseWXPay"]}),jWeixin.ready((function(){jWeixin.checkJsApi({jsApiList:["chooseWXPay"],success:function(e){console.log("checkjsapi Success"),console.log(e)},fail:function(e){console.log("res"),console.log(e)}}),jWeixin.chooseWXPay({timestamp:t.rtData.timeStamp,nonceStr:t.rtData.nonceStr,package:t.rtData.package,signType:t.rtData.signType,paySign:t.rtData.paySign,success:function(n){console.log("paysuccess"),console.log(n),(0,i.updateOrder)({id:t.rtData.id,cate:1}),e.showModal({title:"支付成功",confirmText:"确定",showCancel:!1,success:function(){e.switchTab({url:"/pages/order/list"})}})},cancel:function(e){},fail:function(t){console.log("payfail"),console.log(t),e.showModal({title:"支付失败",showCancel:!1,success:function(){}})}})})),jWeixin.error((function(t){console.log("error"),console.log(t),e.showToast({icon:"none",title:"支付失败",duration:4e3})}))},bindTimeChange:function(e){this.timeIndex=e.detail.value},selAddress:function(){e.setStorageSync("isSelAddress",1),e.navigateTo({url:"/pages/address/list"})},payTypeChange:function(e){console.log(e),this.payType=e.detail.value},rad:function(e){return e*Math.PI/180},distanceOf:function(e,t){console.log(e,t);var n=this.rad(e.latitude),a=this.rad(t.latitude),o=n-a,s=this.rad(e.longitude)-this.rad(t.longitude),i=2*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(n)*Math.cos(a)*Math.pow(Math.sin(o/2),2)));return i*=6378.137,i=Math.abs(Math.round(1e4*i)/10),i}}};t.default=c}).call(this,n("df3c")["default"])}},[["689f","common/runtime","common/vendor"]]]);