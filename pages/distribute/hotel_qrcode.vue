<template>
	<view>
		<view class="conatainer">
<!-- 			<view class="header">
				<image src="https://cshop.zmand.com/uploads/20230724/147fde602a3302a1b35da70a9aec44e6.jpg"></image>
			</view> -->
			<view class="wrap">
				<view class="main-container" @click="preImgae()">
					<image :src="qrcode" style="width: 100%;height: 100%;border-radius: 10px;"></image>
<!-- 					<view class="main-wrap">
						<view class="mian-wrap-title">已获得奖励</view>
						<view class="main-info">
							<view class="main-info-item" v-for="(item,k) in coupon_list">
								<view class="main-item-id">{{k+1}}</view>
								<view class="main-item-content">{{item.name}}</view>
								<view class="main-item-time">{{item.time}}</view>
							</view>
						</view>
					</view> -->
				</view>
			</view>
<!-- 			<view style="padding: 0 0 20px 0;">
				<view @click="refresh()" style="width: 65px;height: 23px;line-height: 23px;font-size: 10px;text-align: center;border: 1px solid #fff;border-radius: 100px;margin: 0 auto;color: #999;">重新生成</view>
			</view> -->
			<view class="share-btn">
				<button v-if="agent_cate=='micro'" open-type="share">立即邀请好友</button>
				<button v-if="agent_cate=='gzh'" @click="gzhShare">保存发送好友</button>
			</view>			
			
		</view>

	</view>
</template>

<script>
	var jweixin;
	import {getUserInfo,getInviteData} from '@/utils/api.js'
	export default {
		data() {
			return {
				agent_cate:'',
				coupon_list:[],
				user:{},
				qrcode:'',
			}
		},
		onLoad() {
			this.agent_cate = uni.getStorageSync('agent_cate')
			if(this.agent_cate=='gzh'){
				jweixin = require('jweixin-module')
			}
		},
		onShow() {
			this.inviteData()
			this.getUserInfo()
		},
		// onShareAppMessage: function () {
		// 	return {
		// 	      title: uni.getStorageSync('settingInfo').name,
		// 	      path: '/pages/index/index?share_id='+uni.getStorageSync('token')
		// 	    }	
		// },
		
		// onShareTimeline: function () {
		
		// },	
		methods: {	
			async inviteData(){
				const res = await getInviteData()
				this.data = res.data.data
				this.qrcode = res.data.data.hotel_qrcode
			},
			async refresh(){
				uni.showLoading({
					title:'正在生成'
				})
				const res = await getInviteQrcode({'refresh':1})
				this.qrcode = res.data.data
				uni.hideLoading()
			},
			preImgae(){
				uni.previewImage({
					urls:[this.qrcode],
					current:this.qrcode
				})
			},
			async Qrcode(){
				const res = await getInviteQrcode()
				this.qrcode = res.data.data
			},
			async getUserInfo(){
				const res = await getUserInfo()
				this.user = res.data.data
			},
			async counpon_list(){
				const res = await couponRecord({cate:2})
				this.coupon_list = res.data.data
			},
			gzhShare(){
				uni.previewImage({
					urls:[this.qrcode],
					current:this.qrcode
				})
				return ;
				console.log('eeeegzhShare')
				jweixin.ready(function(){  
				    jweixin.updateAppMessageShareData({ 
				        title: '快来加入我们吧', // 分享标题
				        desc: '注册有惊喜', // 分享描述
				        link: 'https://jishi.lincec.top/home/index?share_token='+uni.getStorageSync('token'), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				        imgUrl: 'http://wx.qlogo.cn/mmopen/QmIWdhgsRqPAwaK0jRFEB5FuxAmFlB6Klps77rI5EJKu2fWwib7KoYLsIt9x4EUyhQzznAkRT6NklgaDQFwToqRxz84OZUMhc/64', // 分享图标
				        success: function () {
				          // 设置成功
				        }
				      })
				});
			},
						
				
		}
	}
</script>

<style>

.conatainer{display: flex;flex-direction: column;min-height: 100vh;background-image: linear-gradient(to right,rgb(131,217,229),rgb(218,250,249));}
.header{display: flex;height: 240px;}
.header image{width: 100%;}
.wrap{display: flex;flex: 1;padding: 30px 20px 30px;}
.main-container{background-color: #fff;border-radius: 10px;width: 100%;}
.share-btn{display: flex;height: 30px;padding: 10px;}
.share-btn button{background-image:linear-gradient(rgb(113,109,170), rgb(137,107,222));color: #fff;border-radius: 100px;font-size: 14px; width: 100%;line-height: 30px;}
.main-wrap{}
.mian-wrap-title{text-align: center;padding: 10px 0;color: #555;}
.main-info{}
.main-info-item{display: flex;line-height: 40px;justify-content: center;}
.main-item-id{display: flex;width: 40px;}
.main-item-content{display: flex;flex: 1;}
.main-item-time{display: flex;width: 130px;justify-content: center;}

</style>
