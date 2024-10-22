import {updateOrder,orderDetail} from '@/utils/api.js'
let jweixin
let agent_cate
let payData
let _thenDo
function initPay () {
	agent_cate = uni.getStorageSync('agent_cate')
	if(agent_cate=='gzh'){
		jweixin = require('jweixin-module');
	}
}
initPay()
function toPay(param,thenDo){
	payData = param
	_thenDo = thenDo
	console.log('----aa-a-'+agent_cate)
	if(agent_cate=='gzh'){
		ghzPay()
	}else if(agent_cate=='micro'){
		microPay()
	}	
}
function payAfter(){
	setTimeout(function(){
		if(_thenDo.cate=='order'){
			updateOrder({cate:1,id:payData.id})
			uni.switchTab({url:'/pages/order/list'})
			// uni.switchTab({url:'/pages/index/index'})
		}	
		if(_thenDo.cate=='jiazhong'){
			updateOrder({cate:3,id:payData.id})
			uni.redirectTo({url:'/pages/order/detail?id='+payData.id})
		}						
		if(_thenDo.cate=='recharge'){
			updateOrder({cate:2,id:payData.id})
			uni.navigateTo({url:'/pages/balance/record'})
		}
	},1500)		
}
function microPay(){	
	uni.requestPayment({
		provider: 'wxpay',
		timeStamp: payData.timeStamp,
		nonceStr: payData.nonceStr,
		package: payData.package,
		signType: payData.signType,
		paySign: payData.paySign,
		success:(r)=> {			
			uni.showToast({title:'支付成功'})
			payAfter()
		},
		fail: function (err) {
			console.log('fail:' + JSON.stringify(err));
			uni.showModal({ 
				title:'支付失败',
				confirmText:'确定',
				showCancel:false
			})
		},
		complete:()=> {
			
		}
	})
}
function ghzPay(){
	var self = this;	
	console.log('-----jweixin---')
	console.log(jweixin)
	jweixin.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId:payData.appId, // 必填，公众号的唯一标识
		timestamp:payData.timeStamp, // 必填，生成签名的时间戳
		nonceStr:payData.nonceStr, // 必填，生成签名的随机串
		signature:payData.paySign, // 必填，签名，见附录1
		jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	jweixin.ready(function() {
		jweixin.checkJsApi({
			jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
			success: function(res) {
				console.log('checkjsapi Success')
				console.log(res);
			},
			fail:function(res) {
				console.log('res')
				console.log(res);
			}
		});
		jweixin.chooseWXPay({
			timestamp: payData.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
			nonceStr: payData.nonceStr, // 支付签名随机串，不长于 32 位
			package: payData.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
			signType: payData.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
			paySign:payData.paySign, // 支付签名
			success:function(res) {
				// 支付成功后的回调函数							
				console.log('paysuccess')
				console.log(res)
				payAfter()												
			},
			cancel: function(r) {
			},
			fail:function(res) {						   
				console.log('payfail')
				console.log(res)
				uni.showModal({ 
					title:'支付失败',
					showCancel:false,
					success() {
						// uni.switchTab({url:'/pages/order/list'})
					}
				})							
				
			}
		});
	});
	 
	jweixin.error(function(res) {
		console.log('error')
		console.log(res)
		uni.showToast({
			icon: 'none',
			title: '支付失败',
			duration: 4000
		});
	});										
}

module.exports = {
	toPay
}