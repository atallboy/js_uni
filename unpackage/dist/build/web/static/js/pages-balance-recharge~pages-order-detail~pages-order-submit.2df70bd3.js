(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-balance-recharge~pages-order-detail~pages-order-submit"],{4550:function(e,n,i){i("6a54");var t=i("8bcf");e.exports=function(e,n,i){return n=t(n),n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e},e.exports.__esModule=!0,e.exports["default"]=e.exports},"56c9":function(e,n,i){i("9e15"),i("884b"),i("01a2"),i("e39c"),i("bf0f"),i("7a76"),i("c9b5"),i("64aa");var t=i("bdbb")["default"];e.exports=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)},e.exports.__esModule=!0,e.exports["default"]=e.exports},"8bcf":function(e,n,i){var t=i("bdbb")["default"],o=i("56c9");e.exports=function(e){var n=o(e,"string");return"symbol"===t(n)?n:String(n)},e.exports.__esModule=!0,e.exports["default"]=e.exports},a1db:function(e,n,i){"use strict";i("d4b5");var t,o,r,a,c=i("3742");function s(){setTimeout((function(){"order"==a.cate&&((0,c.updateOrder)({cate:1,id:r.id}),uni.switchTab({url:"/pages/order/list"})),"jiazhong"==a.cate&&((0,c.updateOrder)({cate:3,id:r.id}),uni.redirectTo({url:"/pages/order/detail?id="+r.id})),"recharge"==a.cate&&((0,c.updateOrder)({cate:2,id:r.id}),uni.navigateTo({url:"/pages/balance/record"}))}),1500)}(function(){o=uni.getStorageSync("agent_cate"),"gzh"==o&&(t=i("c722"))})(),e.exports={toPay:function(e,n){r=e,a=n,console.log("----aa-a-"+o),"gzh"==o?function(){console.log("-----jweixin---"),console.log(t),t.config({debug:!1,appId:r.appId,timestamp:r.timeStamp,nonceStr:r.nonceStr,signature:r.paySign,jsApiList:["chooseWXPay"]}),t.ready((function(){t.checkJsApi({jsApiList:["chooseWXPay"],success:function(e){console.log("checkjsapi Success"),console.log(e)},fail:function(e){console.log("res"),console.log(e)}}),t.chooseWXPay({timestamp:r.timeStamp,nonceStr:r.nonceStr,package:r.package,signType:r.signType,paySign:r.paySign,success:function(e){console.log("paysuccess"),console.log(e),s()},cancel:function(e){},fail:function(e){console.log("payfail"),console.log(e),uni.showModal({title:"支付失败",showCancel:!1,success:function(){}})}})})),t.error((function(e){console.log("error"),console.log(e),uni.showToast({icon:"none",title:"支付失败",duration:4e3})}))}():"micro"==o&&function(){uni.requestPayment({provider:"wxpay",timeStamp:r.timeStamp,nonceStr:r.nonceStr,package:r.package,signType:r.signType,paySign:r.paySign,success:function(e){uni.showToast({title:"支付成功"}),s()},fail:function(e){console.log("fail:"+JSON.stringify(e)),uni.showModal({title:"支付失败",confirmText:"确定",showCancel:!1})},complete:function(){}})}()}}},c722:function(e,n,i){var t,o=i("4550").default;i("5c47"),i("2c10"),i("5ef2"),i("aa9c"),i("a1c1"),i("d4b5"),function(r,a){t=function(){return function(e,n){if(!e.jWeixin){var i,t,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var n in r)e[r[n]]=n;return e}(),c=e.document,s=c.title,d=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),l=!(!u.match("mac")&&!u.match("win")),p=-1!=d.indexOf("wxdebugger"),f=-1!=d.indexOf("micromessenger"),g=-1!=d.indexOf("android"),m=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(t=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?t[1]:"",S={initStartTime:B(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},v={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:m?1:g?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},y={},w={_completes:[]},I={state:0,data:{}};N((function(){S.initEndTime=B()}));var T=!1,_=[],k=(i={config:function(n){O("config",y=n);var i=!1!==y.check;N((function(){if(i)b(r.config,{verifyJsApiList:L(y.jsApiList),verifyOpenTagList:L(y.openTagList)},function(){w._complete=function(e){S.preVerifyEndTime=B(),I.state=1,I.data=e},w.success=function(e){v.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):I.state=-1};var e=w._completes;return e.push((function(){!function(){if(!(l||p||y.debug||h<"6.0.2"||v.systemType<0)){var e=new Image;v.appId=y.appId,v.initTime=S.initEndTime-S.initStartTime,v.preVerifyTime=S.preVerifyEndTime-S.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(n){v.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+v.version+"&o="+v.isPreVerifyOk+"&s="+v.systemType+"&c="+v.clientVersion+"&a="+v.appId+"&n="+v.networkType+"&i="+v.initTime+"&p="+v.preVerifyTime+"&u="+v.url;e.src=i}})}}()})),w.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();w._completes=[]},w}()),S.preVerifyStartTime=B();else{I.state=1;for(var e=w._completes,n=0,t=e.length;n<t;++n)e[n]();w._completes=[]}})),k.invoke||(k.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,A(i),t)},k.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=I.state?e():(w._completes.push(e),!f&&y.debug&&e())},error:function(e){h<"6.0.2"||(-1==I.state?e(I.data):w._fail=e)},checkJsApi:function(e){b("checkJsApi",{jsApiList:L(e.jsApiList)},(e._complete=function(e){if(g){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=a[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){P(r.onMenuShareTimeline,{complete:function(){b("shareTimeline",{title:e.title||s,desc:e.title||s,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){P(r.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?b("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):b("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){P(r.onMenuShareQQ,{complete:function(){b("shareQQ",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){P(r.onMenuShareWeibo,{complete:function(){b("shareWeiboApp",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){P(r.onMenuShareQZone,{complete:function(){b("shareQZone",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){b("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){b("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){b("startRecord",{},e)},stopRecord:function(e){b("stopRecord",{},e)},onVoiceRecordEnd:function(e){P("onVoiceRecordEnd",e)},playVoice:function(e){b("playVoice",{localId:e.localId},e)},pauseVoice:function(e){b("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){b("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){P("onVoicePlayEnd",e)},uploadVoice:function(e){b("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){b("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){b("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){b("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){b(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){b("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){b("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===T?(T=!0,b("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(T=!1,0<_.length){var n=_.shift();wx.getLocalImgData(n)}},e))):_.push(e)},getNetworkType:function(e){b("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){b("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},o(i,"getLocation",(function(e){b(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),o(i,"hideOptionMenu",(function(e){b("hideOptionMenu",{},e)})),o(i,"showOptionMenu",(function(e){b("showOptionMenu",{},e)})),o(i,"closeWindow",(function(e){b("closeWindow",{},e=e||{})})),o(i,"hideMenuItems",(function(e){b("hideMenuItems",{menuList:e.menuList},e)})),o(i,"showMenuItems",(function(e){b("showMenuItems",{menuList:e.menuList},e)})),o(i,"hideAllNonBaseMenuItem",(function(e){b("hideAllNonBaseMenuItem",{},e)})),o(i,"showAllNonBaseMenuItem",(function(e){b("showAllNonBaseMenuItem",{},e)})),o(i,"scanQRCode",(function(e){b("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(m){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),o(i,"openAddress",(function(e){b(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),o(i,"openProductSpecificView",(function(e){b(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),o(i,"addCard",(function(e){for(var n=e.cardList,i=[],t=0,o=n.length;t<o;++t){var a=n[t],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}b(r.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),o(i,"chooseCard",(function(e){b("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),o(i,"openCard",(function(e){for(var n=e.cardList,i=[],t=0,o=n.length;t<o;++t){var a=n[t],c={card_id:a.cardId,code:a.code};i.push(c)}b(r.openCard,{card_list:i},e)})),o(i,"consumeAndShareCard",(function(e){b(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),o(i,"chooseWXPay",(function(e){b(r.chooseWXPay,V(e),e)})),o(i,"openEnterpriseRedPacket",(function(e){b(r.openEnterpriseRedPacket,V(e),e)})),o(i,"startSearchBeacons",(function(e){b(r.startSearchBeacons,{ticket:e.ticket},e)})),o(i,"stopSearchBeacons",(function(e){b(r.stopSearchBeacons,{},e)})),o(i,"onSearchBeacons",(function(e){P(r.onSearchBeacons,e)})),o(i,"openEnterpriseChat",(function(e){b("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),o(i,"launchMiniProgram",(function(e){b("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)})),o(i,"openBusinessView",(function(e){b("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),o(i,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){b("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){b("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){b("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){b("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){b("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){b("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){N((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),i),x=1,M={};return c.addEventListener("error",(function(e){if(!g){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=x++,n["wx-id"]=o),M[o])return;M[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!g){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(M[t]=!1)}}}),!0),n&&(e.wx=e.jWeixin=k),k}function b(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,A(i),(function(e){C(n,e,t)})):O(n,t)}function P(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),C(n,e,i)})):O(n,t||i)}function A(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function V(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function C(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=a[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",y.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function L(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=r[t];o&&(e[n]=o)}return e}}function O(e,n){if(!(!y.debug||n&&n.isInnerInvoke)){var i=a[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function B(){return(new Date).getTime()}function N(n){f&&(e.WeixinJSBridge?n():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",n,!1))}}(r)}.call(n,i,n,e),void 0===t||(e.exports=t)}(window)}}]);