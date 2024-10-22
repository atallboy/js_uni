<template>
	<view class="">
		
		<button v-if="agent_cate=='micro'" open-type="contact" style="position: fixed;right: 20px;bottom: 100px;border-radius: 100px;background-color: coral;color: #fff;z-index: 99;width: 47px;height: 48px;text-align: center;font-size: 13px;padding: 5px 7px;">在线客服</button>
		<button v-if="agent_cate=='gzh' && setting.open_service_link>0" @click="zxkf" style="position: fixed;right: 20px;bottom: 100px;border-radius: 100px;background-color: coral;color: #fff;z-index: 99;width: 47px;height: 48px;text-align: center;font-size: 13px;padding: 5px 7px;">在线客服</button>
		<!-- <button @click="tel" style="position: fixed;right: 20px;bottom: 40px;border-radius: 100px;background-color: #4169e1;color: #fff;z-index: 99;width: 47px;height: 48px;text-align: center;font-size: 13px;padding: 5px 7px;">客服电话</button> -->
		
		<view class="banner-container" style=""> 
			<uni-swiper-dot :info="banner_list" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box"  :autoplay="autoplay" style="height: 250px;">
					<swiper-item v-for="(item,index) in banner_list" :key="index" @click="toWhere(item.url_param.url,item.url_param.go_type)"> 
						<view class="swiper-item" style="width: 100%;height: 100%;">
							<image :src="item.pic" style="width: 100%;height: 100%;border-radius: 5px;"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>				
		</view> 
		<view style="position: relative;">
			<view class="item-header">
				<view class="bar"></view>
				<view class="item-header-name">项目列表</view>
			</view>

			<view class="list-container">
				<view class="list-wrap">
					<view class="list-item" v-for="(item,k) in list" >
						<view class="item-pic" @click="toWhere('../item/detail?id='+item.id)">
							<image :src="item.pic"></image>
						</view>
						<view class="item-info"> 
							<view class="item-info-floor" @click="itemDetail('../item/detail?id='+item.id)">
								<view class="item-name">{{item.name}}</view>
								<view class="item-summary">超{{item.base_sale + item.real_sale}}人选择</view>
							</view>
							<view class="item-info-floor item-info-floor-b">								
								<view class="item-desc">{{item.desc}}</view>
								<view class="item-btn" @click="master(item)">
									<button>选择技师</button>
								</view>
							</view>
							<view class="item-info-floor item-info-floor-c">
								<view class="item-price-info">
									<text class="item-price-unit">￥</text>
									<text class="item-price">{{item.price}}</text>
									<!-- <text class="item-origin-price">￥{{item.old_price}}</text> -->
									<image src="../../static/images/time.png"></image>
									<text class="item-time">{{item.long_time}}</text>
								</view>
							</view>						
						</view>

					</view>
				</view>
			</view>
		</view>
<!-- 		<view style="position: fixed;top: 300px;left: 0;right: 0;z-index: 9999;">
			<official-account bindload="bindload" binderror="binderror"></official-account>
		</view> -->
		<uni-popup ref="popup" type="center" style="height: 100%;">
			<view style="width: 260px;height: 360px;margin: 0 auto;">
				<uni-swiper-dot :info="toast_list" :current="toast_current" :mode="mode">
					<swiper class="swiper-box"  :autoplay="autoplay" @change="changeToast" style="height: 330px;">
						<swiper-item v-for="(item,k) in toast_list" :key="k"> 
							<view @click="toWhere(item.url_param.url,item.url_param.go_type)">
								<image :src="item.pic" style="width: 260px;height: 330px;border-radius: 8px;"></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>								
				<view @click="closeAdToast" style="text-align: center;margin-top: 10px;"> <uni-icons type="close" color="#fff" size="30"></uni-icons> </view>
			</view>
		</uni-popup>
			
		<uni-popup ref="popupPhoneNumber" type="center">
			<view style="width: 90%;background-color: #fff;padding: 10px;border-radius: 4px;">
			  <view style="width: 100%;">
				<view style="text-align: center;line-height: 50px;font-size: 17px;font-weight: bold;">填写手机号码</view>
				<view style="height: 40px;">
					<input v-model="phoneNumber" placeholder="请输入手机号码" style="padding-left: 10px;margin-right: 0;padding: 5px;border: 1px solid #ccc;border-radius: 4px;" placeholder-style="font-size:13px;text-indent: 10px;" />
				</view>				
				<view style="height: 40px;display: flex;align-items: center;">
				  <input v-model="verificationCode" placeholder="验证码" style="padding-left: 10px;padding: 5px;border: 1px solid #ccc;border-radius: 4px;margin-right: 10px;" placeholder-style="font-size:13px;text-indent: 10px;" />
				  <button v-if="!isCountingDown" @click="getVerificationCode" :disabled="isCountingDown" class="main-bg-color" style="font-size: 12px;padding:0;width: 80px;height: 30px;line-height: 30px;color: white;border: none;border-radius: 4px;">{{ countdownText }}</button>
				  <button v-if="isCountingDown" :disabled="isCountingDown"  style="background-color: #aaa;font-size: 12px;padding:0;width: 80px;height: 30px;line-height: 30px;color: white;border: none;border-radius: 4px;">{{ countdownText }}</button>
				</view>
			  </view>
			  <view style="width: 100%;padding-top: 20px;">
				<button @click="verifyCodeconfirm" class="main-bg-color" style="padding: 6px 10px;color: white;border: none;border-radius: 4px;font-size: 15px;">确定</button>
			  </view>					
			</view>	
		</uni-popup>			
			
			
	</view>
</template>

<script>
	import {settingInfo,getUserInfo,login,itemList,bannerList,sendSms,verifySms} from '@/utils/api.js'
	export default {
		data() {
			return {
				agent_cate:'',
				share_id:'',
				banner_list: [],
				toast_list: [],
				autoplay:true,
				toast:[],
				current: 0,
				mode: 'round',
				toast_current:0,
				list:[],
				setting:{},
				isCloseToast:false,
			    phoneNumber: '',
			    verificationCode: '',
			    isCountingDown: false,
			    countdown: 60,
			    countdownText: '获取验证码',		
				userInfo: {},
			}
		},
		onLoad(e) {
			this.agent_cate = uni.getStorageSync('agent_cate')
			if(e.share_id)this.share_id=e.share_id
			console.log(e)
			this.settingInfo()
			// this.login()			
			this.getUserInfo()
			
		},
		onShow() {
			this.bannerList()
			this.itemList()
 
		},
		onShareAppMessage: function () {
						
		},
		
		onShareTimeline: function () {
		
		},	
		methods: {
			zxkf(){
				let url = 'http://v3.fmkefu.com/cs/redirect/5918_5928?c=other&name='+uni.getStorageSync('token')+'&desc='
				console.log(url)
				location.href= this.setting.service_link
			},
			bindload(e){
				console.log('bindload')
				console.log(e)},
			binderror(e){
				console.log('binderror')
				console.log(e)},
			async master(e){
				// uni.showLoading()
			
				const userInfo = await getUserInfo()
				if(this.setting.open_auth_phone && !userInfo.data.data.tel){this.$refs.popupPhoneNumber.open('center');return ;}
							
				uni.navigateTo({url:'/pages/master/list_by_item?item_id='+e.id})
				// uni.setStorageSync('selItem',[e])
				// setTimeout(function(){
				// 	uni.navigateTo({url:'/pages/master/list?item_id='+e.id})
				// 	uni.hideLoading()
				// },500)				
			},
			itemDetail(e){
				if(this.setting.open_auth_phone && !this.userInfo.tel){this.$refs.popupPhoneNumber.open('center');return ;}
				uni.navigateTo({url:e})
			},
			tel(){uni.makePhoneCall({
				phoneNumber:this.setting.tel
			})},
			changeToast(e){
				this.toast_current = e.detail.current
			},
			async settingInfo() {
				const res = await settingInfo()
				this.setting = res.data.data
				uni.setStorageSync('siteroot', res.data.data.host);
				if(res.data.data.name){
					uni.setNavigationBarTitle({
						title:res.data.data.name
					})
				}
				uni.setStorageSync('settingInfo',res.data.data)
				uni.setStorageSync('siteroot',res.data.data.host);
			},
			async getUserInfo() {
				const res = await getUserInfo()
				this.userInfo = res.data.data
			},			
			async bannerList() {
				const res = await bannerList()
				this.banner_list = res.data.data.banner
				this.toast_list = res.data.data.toast
				this.toast = res.data.data.toast
				if(this.toast && !this.isCloseToast && this.toast.length>0){
					this.$refs.popup.open('center')
				}				
			},	
			closeAdToast(){
				this.isCloseToast = true
				this.$refs.popup.close()
			},
			async itemList() {
				const res = await itemList()
				this.list = res.data.data
			},			

			login(){	
				let that = this
				uni.getProvider({
					service: 'oauth',
					success: function (res) { 
						console.log(res.provider)
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function (loginRes) {
									console.log((loginRes));
									if(loginRes.errMsg=='login:ok'){
										uni.request({
											url: uni.getStorageSync('siteroot') + '/api/login',
											method:'POST',
											data: {
												code:loginRes.code,
												i:uni.getStorageSync('i'),
												share_token:that.share_id,
											},
											success: (res) => {
												if(res.data.status==20000){
													uni.setStorageSync('token',res.data.data)
													console.log(that.scene)
													if(that.scene){that.queryCode()}	
													that.getUserInfo()
												}
											}
										});
									}
								}
							});
						}
					}
				});
			},
			toWhere(url, t = 1) {
				console.log(url,t)
				if (t == 1) {uni.navigateTo({url: url})}
				if (t == 2) {uni.redirectTo({url: url})}
				if (t == 3) {uni.switchTab({url: url})}
			},
			validatePhoneNumber(number) {
			  const reg = /^[1][3-9][0-9]{9}$/; // 简单的手机号码正则
			  return reg.test(number);
			},
			async getVerificationCode() {
			  if (!this.phoneNumber || !this.validatePhoneNumber(this.phoneNumber)) {
				uni.showToast({title: '手机号码格式错误',icon: 'none',});return;
			  }
			  uni.showLoading({title:'正在发送短信'})
			  await sendSms({phone_number:this.phoneNumber})
			  uni.hideLoading()
			  this.isCountingDown = true;
			  this.countdownText = `${this.countdown}秒`;

			  const timer = setInterval(() => {
				this.countdown--;
				this.countdownText = `${this.countdown}秒`;
				if (this.countdown <= 0) {
				  clearInterval(timer);
				  this.isCountingDown = false;
				  this.countdown = 60;
				  this.countdownText = '获取验证码';
				}
			  }, 1000);
			},
			async verifyCodeconfirm() {
			  if(!this.phoneNumber){uni.showToast({title: '手机号不能为空',icon: 'none',});return;}
			  if(!this.verificationCode){uni.showToast({title: '验证码不能为空',icon: 'none',});return;}
			  uni.showLoading({title:'验证中'})
			  await verifySms({phone_number:this.phoneNumber,code:this.verificationCode})
			  await this.getUserInfo()
			  uni.hideLoading()
			  this.$refs.popupPhoneNumber.close()
			},			
		}
	} 
</script>

<style>
	.item-header{
		position: absolute;left: 0;top: -40px;right: 0;z-index: 99;
		background-color: #f7f7f7;
		display: flex;
		height: 40px;
		border-top-left-radius: 20px;
		border-top-right-radius: 30px;
		align-items: center;
		padding: 0 20px;
	}
	.bar{width: 4px;height: 15px;background-color: var(--mainColor);margin-right: 7px;}
	.item-header-name{color: var(--mainColor);font-size: 15px;font-weight: 600;}
	

	
</style>
