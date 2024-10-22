<template>
	<view>
		<yj-nav-bar v-if="agentcate=='micro'" title="代理中心" titleStyle="color:#fff;" toUrlType=4 navBarStyle="background-image:linear-gradient(#24C373,#24C373);"></yj-nav-bar>
		
		<view class="user-info-container">
			<view class="user-info-wrap"> 
				<view class="user-pic">
					<image :src="user.avatarUrl"></image>
				</view>
				<view class="user-name">{{agent.name}} </view>				
				<view v-if="agent.status==0" class="user-car-number" style="color: crimson;" >平台审核中</view>
			</view>
		</view>
		
		<view class="col-menu-container" style="margin-top: 30px;">
			<view class="col-menu-wrap">
				<view class="col-menu-list">				
					<view class="col-menu-item" @click="toWhere('/pages/balance/record?record_cate=agent_fee')">
						<view class="col-menu-icon">
							<image src="../../static/images/c4.png"></image>						
						</view>
						<view class="col-menu-name">账户流水</view>
					</view>
					<view class="col-menu-item" @click="toWhere('/pages/balance/withdrawal')">
						<view class="col-menu-icon">
							<image src="../../static/images/c1.png"></image>							
						</view>
						<view class="col-menu-name">余额提现</view>
					</view>						
					<view class="col-menu-item" @click="toWhere('edit')">
						<view class="col-menu-icon">
							<image src="../../static/images/c3.png"></image>							
						</view>
						<view class="col-menu-name">资料编辑</view>
					</view>																		
				</view>
			</view>
		</view>
				
		<view class="col-menu-container" style="">
			<view class="col-menu-wrap">
				<view class="col-menu-header mix-bottom">
					<view class="col-menu-header-bar"></view>
					<view class="col-menu-header-name">所属区域订单数据</view>
				</view>
				<view class="col-menu-list">				
					<view class="col-menu-item" @click="toWhere('order?status=1')">
						<view class="col-menu-icon">
							<text>{{agent.calc.order_wait_start}}</text>							
						</view>
						<view class="col-menu-name">待开始</view>
					</view>
					<view class="col-menu-item" @click="toWhere('order?status=2')">
						<view class="col-menu-icon">
							<text>{{agent.calc.order_ing}}</text>							
						</view>
						<view class="col-menu-name">进行中</view>
					</view>					
					<view class="col-menu-item" @click="toWhere('order?status=3')">
						<view class="col-menu-icon">
							<text>{{agent.calc.order_complete}}</text>							
						</view>
						<view class="col-menu-name">已完成</view>
					</view>
					<view class="col-menu-item" @click="toWhere('order?status=5')">
						<view class="col-menu-icon">
							<text>{{agent.calc.order_cancel}}</text>							
						</view>
						<view class="col-menu-name">已取消</view>
					</view>																				
				</view>
			</view>
		</view>				
		
	</view>
</template>

<script>
	import {getUserInfo,agentInfo} from '@/utils/api.js'
	export default {
		data() {
			return {
				user:{},
				agent:{calc:{}},
				agentcate:'',
			}
		},
		onLoad(e) {
		  this.agentcate = uni.getStorageSync('agent_cate');
		},
		onShow(){
			this.userInfo()
			this.agentInfo()
		},
		methods: {
			async userInfo(){
				const res = await getUserInfo()
				this.user = res.data.data								
			},
			async agentInfo(){
				const res = await agentInfo()
				this.agent = res.data.data	
				if(res.data.data.status==-1){
					uni.showModal({
						title: '你未申请代理，无法访问该页面',
						confirmText: '确定',
						showCancel: false,
						success() {
							uni.switchTab({
								url: '/pages/mine/index'
							})
						}
					})
				}
			},			
			edit(){
				uni.navigateTo({
					url:'edit'
				})
			},
			toWhere(url, t = 1) {
				if (t == 1) {uni.navigateTo({url: url})}
				if (t == 2) {uni.redirectTo({url: url})}
				if (t == 3) {uni.switchTab({url: url})}
			},	
		}
	}
</script>

<style>
	
	page{background-color: #F2F3F4;}

	.user-info-container{position: relative;background-image: linear-gradient(var(--mainColor),var(--mainColor));height: 60px;}
	.user-info-wrap{position: absolute;top: 10px;left: 10px;right: 10px;padding: 0 10px; background-color: #fff;display: flex;height: 60px;align-items: center;border-radius: 4px;}
	.user-pic{display: flex;width: 60px;}
	.user-pic image{width: 40px;height: 40px;}
	.user-name{display: flex;flex: 1;color: #214260;font-size: 16px;align-items: center;height: 60px;font-weight: 600;}
	.user-level-icon{width: 26px;height: 12px;margin-left: 5px;}
	.user-car-number{display: flex;justify-content: flex-end; color: #214260;font-size: 13px;}
	.user-car-number image{width: 20px;height: 20px;}
	
	
</style>
