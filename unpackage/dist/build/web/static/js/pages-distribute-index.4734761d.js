(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-distribute-index"],{"0cde":function(e,t,n){"use strict";n.r(t);var r=n("de67"),i=n("c6a8");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("734c");var a=n("828b"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"4e782e40",null,!1,r["a"],void 0);t["default"]=c.exports},2634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t.default=function(){return e};var e={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(P){d=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new T(r||[]);return o(a,"_invoke",{value:S(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var p={};function g(){}function h(){}function m(){}var v={};d(v,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(M([])));w&&w!==n&&i.call(w,c)&&(v=w);var x=m.prototype=g.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var n;o(this,"_invoke",{value:function(o,a){function c(){return new t((function(n,c){(function n(o,a,c,s){var u=f(e[o],e,a);if("throw"!==u.type){var d=u.arg,l=d.value;return l&&"object"==(0,r.default)(l)&&i.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):t.resolve(l).then((function(e){d.value=e,c(d)}),(function(e){return n("throw",e,c,s)}))}s(u.arg)})(o,a,n,c)}))}return n=n?n.then(c,c):c()}})}function S(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return O()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=I(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function I(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator["return"]&&(t.method="return",t.arg=void 0,I(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=f(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function M(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=m,o(x,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:h,configurable:!0}),h.displayName=d(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,d(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},b(_.prototype),d(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new _(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(x),d(x,u,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=M,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:M(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e},n("6a54"),n("01a2"),n("e39c"),n("bf0f"),n("844d"),n("18f7"),n("de6c"),n("3872e"),n("4e9b"),n("114e"),n("c240"),n("926e"),n("7a76"),n("c9b5"),n("aa9c"),n("2797"),n("8a8d"),n("dc69"),n("f7a5");var r=function(e){return e&&e.__esModule?e:{default:e}}(n("fcf3"))},"2fdc":function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,i)}n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function c(e){r(a,i,o,c,s,"next",e)}function s(e){r(a,i,o,c,s,"throw",e)}c(void 0)}))}},n("bf0f")},3742:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.withdrawalRecord=t.withdrawal=t.verifySms=t.updateOrder=t.suggestList=t.settleRecord=t.settle=t.settingInfo=t.sendSms=t.rechargeOrderRecord=t.orderList=t.orderJiazhong=t.orderDo=t.orderDetail=t.mchList=t.mchDetail=t.masterList=t.masterEdit=t.masterDetail=t.masterCollect=t.login=t.jishiaddress=t.itemList=t.itemDetail=t.itemCollect=t.getUserInfo=t.getPrivacyAxb=t.getInviteQrcode=t.getInviteData=t.getCityList=t.evaSubmit=t.evaList=t.editDistributeMch=t.distributeOrder=t.distributeMchInfo=t.createSuggest=t.createRechargeOrder=t.createOrder=t.couponRecord=t.couponList=t.couponExchange=t.couponDetail=t.changeMasterOpenStatus=t.bindQrcode=t.bannerList=t.balanceRecord=t.appWechatLogin=t.apiTest=t.agentRegister=t.agentInfo=t.addressList=t.addressEdit=t.addressDetail=t.addressDel=void 0;t.apiTest=function(e){return uni.$get("apitest",e)};t.settingInfo=function(e){return uni.$get("settingInfo",e)};t.login=function(e){return uni.$post("login",e)};t.getUserInfo=function(e){return uni.$get("getUserInfo",e)};t.createOrder=function(e){return uni.$post("createOrder",e)};t.orderDetail=function(e){return uni.$get("order/detail",e)};t.orderList=function(e){return uni.$get("order/list",e)};t.orderDo=function(e){return uni.$get("order/orderDo",e)};t.orderJiazhong=function(e){return uni.$get("order/jiazhong",e)};t.updateOrder=function(e){return uni.$post("updateOrder",e)};t.masterEdit=function(e){return uni.$post("master/edit",e)};t.masterDetail=function(e){return uni.$get("master/detail",e)};t.masterList=function(e){return uni.$get("master/list",e)};t.masterCollect=function(e){return uni.$post("master/collect",e)};t.changeMasterOpenStatus=function(e){return uni.$post("master/changeOpenStatus",e)};t.jishiaddress=function(e){return uni.$post("master/jishiaddress",e)};t.mchDetail=function(e){return uni.$get("mch/detail",e)};t.mchList=function(e){return uni.$get("mch/list",e)};t.evaList=function(e){return uni.$get("eva/list",e)};t.evaSubmit=function(e){return uni.$post("eva/submit",e)};t.itemDetail=function(e){return uni.$get("item/detail",e)};t.itemList=function(e){return uni.$get("item/list",e)};t.itemCollect=function(e){return uni.$get("item/collect",e)};t.addressEdit=function(e){return uni.$post("address/edit",e)};t.addressDel=function(e){return uni.$post("address/del",e)};t.addressDetail=function(e){return uni.$get("address/detail",e)};t.addressList=function(e){return uni.$get("address/list",e)};t.createRechargeOrder=function(e){return uni.$post("createRechargeOrder",e)};t.rechargeOrderRecord=function(e){return uni.$get("rechargeOrderRecord",e)};t.createSuggest=function(e){return uni.$post("suggest/submit",e)};t.suggestList=function(e){return uni.$get("suggest/list",e)};t.bannerList=function(e){return uni.$get("bannerList",e)};t.couponList=function(e){return uni.$get("coupon/list",e)};t.couponDetail=function(e){return uni.$get("coupon/detail",e)};t.couponRecord=function(e){return uni.$get("coupon/record",e)};t.couponExchange=function(e){return uni.$post("coupon/exchange",e)};t.agentRegister=function(e){return uni.$post("agent/register",e)};t.agentInfo=function(e){return uni.$post("agent/info",e)};t.balanceRecord=function(e){return uni.$get("balance/record",e)};t.withdrawal=function(e){return uni.$post("balance/withdrawal",e)};t.withdrawalRecord=function(e){return uni.$get("balance/withdrawalRecord",e)};t.settleRecord=function(e){return uni.$get("settle/list",e)};t.settle=function(e){return uni.$post("settle/settle",e)};t.getInviteQrcode=function(e){return uni.$get("distribute/getInviteQrcode",e)};t.getInviteData=function(e){return uni.$get("distribute/getInviteData",e)};t.editDistributeMch=function(e){return uni.$get("distribute/editDistributeMch",e)};t.distributeMchInfo=function(e){return uni.$get("distribute/distributeMchInfo",e)};t.distributeOrder=function(e){return uni.$get("distribute/order",e)};t.bindQrcode=function(e){return uni.$get("distribute/qrcodeBind",e)};t.getPrivacyAxb=function(e){return uni.$get("privacy/Axb",e)};t.sendSms=function(e){return uni.$get("sms/send",e)};t.verifySms=function(e){return uni.$get("sms/verify",e)};t.getCityList=function(e){return uni.$get("city/list",e)};t.appWechatLogin=function(e){return uni.$get("user/appWechatLogin",e)}},4550:function(e,t,n){n("6a54");var r=n("8bcf");e.exports=function(e,t,n){return t=r(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports["default"]=e.exports},"56c9":function(e,t,n){n("9e15"),n("884b"),n("01a2"),n("e39c"),n("bf0f"),n("7a76"),n("c9b5"),n("64aa");var r=n("bdbb")["default"];e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports["default"]=e.exports},"734c":function(e,t,n){"use strict";var r=n("eff4"),i=n.n(r);i.a},"8bcf":function(e,t,n){var r=n("bdbb")["default"],i=n("56c9");e.exports=function(e){var t=i(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports["default"]=e.exports},"8dc7":function(e,t,n){"use strict";n("6a54");var r=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("2634")),o=r(n("2fdc")),a=n("3742"),c={data:function(){return{agent_cate:"",coupon_list:[],user:{},qrcode:""}},onLoad:function(){this.agent_cate=uni.getStorageSync("agent_cate"),"gzh"==this.agent_cate&&n("c722")},onShow:function(){this.Qrcode(),this.getUserInfo(),this.counpon_list()},methods:{refresh:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"正在生成"}),t.next=3,(0,a.getInviteQrcode)({refresh:1});case 3:n=t.sent,e.qrcode=n.data.data,uni.hideLoading();case 6:case"end":return t.stop()}}),t)})))()},preImgae:function(){uni.previewImage({urls:[this.qrcode],current:this.qrcode})},Qrcode:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.getInviteQrcode)();case 2:n=t.sent,e.qrcode=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},getUserInfo:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.getUserInfo)();case 2:n=t.sent,e.user=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},counpon_list:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.couponRecord)({cate:2});case 2:n=t.sent,e.coupon_list=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},gzhShare:function(){uni.previewImage({urls:[this.qrcode],current:this.qrcode})}}};t.default=c},a605:function(e,t,n){var r=n("c86c");t=r(!1),t.push([e.i,".conatainer[data-v-4e782e40]{display:flex;flex-direction:column;min-height:100vh;background-image:linear-gradient(90deg,#83d9e5,#dafaf9)}.header[data-v-4e782e40]{display:flex;height:240px}.header uni-image[data-v-4e782e40]{width:100%}.wrap[data-v-4e782e40]{display:flex;flex:1;padding:30px 20px 30px}.main-container[data-v-4e782e40]{background-color:#fff;border-radius:10px;width:100%}.share-btn[data-v-4e782e40]{display:flex;height:30px;padding:10px}.share-btn uni-button[data-v-4e782e40]{background-image:linear-gradient(#716daa,#896bde);color:#fff;border-radius:100px;font-size:14px;width:100%;line-height:30px}.mian-wrap-title[data-v-4e782e40]{text-align:center;padding:10px 0;color:#555}.main-info-item[data-v-4e782e40]{display:flex;line-height:40px;justify-content:center}.main-item-id[data-v-4e782e40]{display:flex;width:40px}.main-item-content[data-v-4e782e40]{display:flex;flex:1}.main-item-time[data-v-4e782e40]{display:flex;width:130px;justify-content:center}",""]),e.exports=t},c6a8:function(e,t,n){"use strict";n.r(t);var r=n("8dc7"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},c722:function(e,t,n){var r,i=n("4550").default;n("5c47"),n("2c10"),n("5ef2"),n("aa9c"),n("a1c1"),n("d4b5"),function(o,a){r=function(){return function(e,t){if(!e.jWeixin){var n,r,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var t in o)e[o[t]]=t;return e}(),c=e.document,s=c.title,u=navigator.userAgent.toLowerCase(),d=navigator.platform.toLowerCase(),l=!(!d.match("mac")&&!d.match("win")),f=-1!=u.indexOf("wxdebugger"),p=-1!=u.indexOf("micromessenger"),g=-1!=u.indexOf("android"),h=-1!=u.indexOf("iphone")||-1!=u.indexOf("ipad"),m=(r=u.match(/micromessenger\/(\d+\.\d+\.\d+)/)||u.match(/micromessenger\/(\d+\.\d+)/))?r[1]:"",v={initStartTime:A(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},y={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:h?1:g?2:-1,clientVersion:m,url:encodeURIComponent(location.href)},w={},x={_completes:[]},b={state:0,data:{}};V((function(){v.initEndTime=A()}));var _=!1,S=[],I=(n={config:function(t){C("config",w=t);var n=!1!==w.check;V((function(){if(n)T(o.config,{verifyJsApiList:$(w.jsApiList),verifyOpenTagList:$(w.openTagList)},function(){x._complete=function(e){v.preVerifyEndTime=A(),b.state=1,b.data=e},x.success=function(e){y.isPreVerifyOk=0},x.fail=function(e){x._fail?x._fail(e):b.state=-1};var e=x._completes;return e.push((function(){!function(){if(!(l||f||w.debug||m<"6.0.2"||y.systemType<0)){var e=new Image;y.appId=w.appId,y.initTime=v.initEndTime-v.initStartTime,y.preVerifyTime=v.preVerifyEndTime-v.preVerifyStartTime,I.getNetworkType({isInnerInvoke:!0,success:function(t){y.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+y.version+"&o="+y.isPreVerifyOk+"&s="+y.systemType+"&c="+y.clientVersion+"&a="+y.appId+"&n="+y.networkType+"&i="+y.initTime+"&p="+y.preVerifyTime+"&u="+y.url;e.src=n}})}}()})),x.complete=function(t){for(var n=0,r=e.length;n<r;++n)e[n]();x._completes=[]},x}()),v.preVerifyStartTime=A();else{b.state=1;for(var e=x._completes,t=0,r=e.length;t<r;++t)e[t]();x._completes=[]}})),I.invoke||(I.invoke=function(t,n,r){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,O(n),r)},I.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=b.state?e():(x._completes.push(e),!p&&w.debug&&e())},error:function(e){m<"6.0.2"||(-1==b.state?e(b.data):x._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:$(e.jsApiList)},(e._complete=function(e){if(g){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var r=a[n];r&&(t[r]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){M(o.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||s,desc:e.title||s,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(o.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?T("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(o.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(o.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(o.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){T(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===_?(_=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(_=!1,0<S.length){var t=S.shift();wx.getLocalImgData(t)}},e))):S.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var r=t.indexOf(":"),i=t.substring(r+1);switch(i){case"wifi":case"edge":case"wwan":e.networkType=i;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},i(n,"getLocation",(function(e){T(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),i(n,"hideOptionMenu",(function(e){T("hideOptionMenu",{},e)})),i(n,"showOptionMenu",(function(e){T("showOptionMenu",{},e)})),i(n,"closeWindow",(function(e){T("closeWindow",{},e=e||{})})),i(n,"hideMenuItems",(function(e){T("hideMenuItems",{menuList:e.menuList},e)})),i(n,"showMenuItems",(function(e){T("showMenuItems",{menuList:e.menuList},e)})),i(n,"hideAllNonBaseMenuItem",(function(e){T("hideAllNonBaseMenuItem",{},e)})),i(n,"showAllNonBaseMenuItem",(function(e){T("showAllNonBaseMenuItem",{},e)})),i(n,"scanQRCode",(function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(h){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))})),i(n,"openAddress",(function(e){T(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),i(n,"openProductSpecificView",(function(e){T(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),i(n,"addCard",(function(e){for(var t=e.cardList,n=[],r=0,i=t.length;r<i;++r){var a=t[r],c={card_id:a.cardId,card_ext:a.cardExt};n.push(c)}T(o.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,r=(t=JSON.parse(t)).length;n<r;++n){var i=t[n];i.cardId=i.card_id,i.cardExt=i.card_ext,i.isSuccess=!!i.is_succ,delete i.card_id,delete i.card_ext,delete i.is_succ}e.cardList=t,delete e.card_list}},e))})),i(n,"chooseCard",(function(e){T("chooseCard",{app_id:w.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),i(n,"openCard",(function(e){for(var t=e.cardList,n=[],r=0,i=t.length;r<i;++r){var a=t[r],c={card_id:a.cardId,code:a.code};n.push(c)}T(o.openCard,{card_list:n},e)})),i(n,"consumeAndShareCard",(function(e){T(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),i(n,"chooseWXPay",(function(e){T(o.chooseWXPay,P(e),e)})),i(n,"openEnterpriseRedPacket",(function(e){T(o.openEnterpriseRedPacket,P(e),e)})),i(n,"startSearchBeacons",(function(e){T(o.startSearchBeacons,{ticket:e.ticket},e)})),i(n,"stopSearchBeacons",(function(e){T(o.stopSearchBeacons,{},e)})),i(n,"onSearchBeacons",(function(e){M(o.onSearchBeacons,e)})),i(n,"openEnterpriseChat",(function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),i(n,"launchMiniProgram",(function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)})),i(n,"openBusinessView",(function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),i(n,"miniProgram",{navigateBack:function(e){e=e||{},V((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){V((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){V((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){V((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){V((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){V((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){V((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),n),k=1,L={};return c.addEventListener("error",(function(e){if(!g){var t=e.target,n=t.tagName,r=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=r.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var i=t["wx-id"];if(i||(i=k++,t["wx-id"]=i),L[i])return;L[i]=!0,wx.ready((function(){wx.getLocalImgData({localId:r,success:function(e){t.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!g){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var r=t["wx-id"];r&&(L[r]=!1)}}}),!0),t&&(e.wx=e.jWeixin=I),I}function T(t,n,r){e.WeixinJSBridge?WeixinJSBridge.invoke(t,O(n),(function(e){E(t,e,r)})):C(t,r)}function M(t,n,r){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){r&&r.trigger&&r.trigger(e),E(t,e,n)})):C(t,r||n)}function O(e){return(e=e||{}).appId=w.appId,e.verifyAppId=w.appId,e.verifySignType="sha1",e.verifyTimestamp=w.timestamp+"",e.verifyNonceStr=w.nonceStr,e.verifySignature=w.signature,e}function P(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function E(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var r=t.errMsg;r||(r=t.err_msg,delete t.err_msg,r=function(e,t){var n=e,r=a[n];r&&(n=r);var i="ok";if(t){var o=t.indexOf(":");"confirm"==(i=t.substring(o+1))&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),"access denied"!=(i=(i=i.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=i||(i="permission denied"),"config"==n&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")}return n+":"+i}(e,r),t.errMsg=r),(n=n||{})._complete&&(n._complete(t),delete n._complete),r=t.errMsg||"",w.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var i=r.indexOf(":");switch(r.substring(i+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function $(e){if(e){for(var t=0,n=e.length;t<n;++t){var r=e[t],i=o[r];i&&(e[t]=i)}return e}}function C(e,t){if(!(!w.debug||t&&t.isInnerInvoke)){var n=a[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function A(){return(new Date).getTime()}function V(t){p&&(e.WeixinJSBridge?t():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",t,!1))}}(o)}.call(t,n,t,e),void 0===r||(e.exports=r)}(window)},de67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"conatainer"},[n("v-uni-view",{staticClass:"wrap"},[n("v-uni-view",{staticClass:"main-container",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.preImgae()}}},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"10px"},attrs:{src:e.qrcode}})],1)],1),n("v-uni-view",{staticStyle:{padding:"0 0 20px 0"}},[n("v-uni-view",{staticStyle:{width:"65px",height:"23px","line-height":"23px","font-size":"10px","text-align":"center",border:"1px solid #fff","border-radius":"100px",margin:"0 auto",color:"#999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.refresh()}}},[e._v("重新生成")])],1),n("v-uni-view",{staticClass:"share-btn"},["micro"==e.agent_cate?n("v-uni-button",{attrs:{"open-type":"share"}},[e._v("立即邀请好友")]):e._e(),"gzh"==e.agent_cate?n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gzhShare.apply(void 0,arguments)}}},[e._v("保存发送好友")]):e._e()],1)],1)],1)},i=[]},eff4:function(e,t,n){var r=n("a605");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("967d").default;i("42aee066",r,!0,{sourceMap:!1,shadowMode:!1})}}]);