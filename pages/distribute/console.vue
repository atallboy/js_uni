<template>
	<view>
		<view v-if="data.level>0">
			<view class="header-container">
				<view class="header-user-pic">
					<image :src="user.avatarUrl"></image>
				</view>				
				<view class="header-user-name">{{data.info.name}}</view>
			</view>
			<view class="col-menu-container">
				<view class="col-menu-wrap">
					<view class="col-menu-list">
						<view class="col-menu-item">
							<view class="col-menu-value">{{data.invite_num}}</view>
							<view class="col-menu-name">总邀请人数</view>
						</view>		
						<view class="col-menu-item">
							<view class="col-menu-value">{{data.invite_num_first}}</view>
							<view class="col-menu-name">一级分销</view>
						</view>	
						<view class="col-menu-item" v-if="data.level>1">
							<view class="col-menu-value">{{data.invite_num_second}}</view>
							<view class="col-menu-name">二级分销</view>
						</view>	
						<view class="col-menu-item" v-if="data.level>2">
							<view class="col-menu-value">{{data.invite_num_third}}</view>
							<view class="col-menu-name">三级分销</view>
						</view>															
					</view>
				</view>
			</view>
			
		<!-- 中间菜单 -->
		<view class="col-menu-container" style="margin-top: 20rpx;">
			<view class="col-menu-wrap">
				<view class="col-menu-list col-menu-list-act">
					<view class="col-menu-item" @click="toWhere('/pages/distribute/invite_record')">
						<view class="col-menu-icon">
							<image src="../../static/images/groupA-1.png"></image>
						</view>
						<view class="col-menu-name">邀请记录</view>
					</view>
					<view class="col-menu-item" @click="toWhere('/pages/balance/record?record_cate=distribute_fee')">
						<view class="col-menu-icon">
							<image src="../../static/images/groupA-3.png"></image>
						</view>
						<view class="col-menu-name">佣金记录</view>
					</view>
					<view class="col-menu-item" @click="toWhere('apply')">
						<view class="col-menu-icon">
							<image src="../../static/images/groupA-9.png"></image>
						</view>
						<view class="col-menu-name">资料编辑</view>
					</view>
					<view class="col-menu-item" @click="hotelQrcode()" v-if="data.info.role=='酒店'">
						<view class="col-menu-icon">
							<image src="../../static/images/groupA-8.png"></image>
						</view>
						<view class="col-menu-name">酒店分销码</view>
					</view>
					<view class="col-menu-item" @click="toWhere('index')" v-else>
						<view class="col-menu-icon">
							<image src="../../static/images/groupA-8.png"></image>
						</view>
						<view class="col-menu-name">分销码</view>
					</view>					
					<view class="col-menu-item" @click="toWhere('order')">
						<view class="col-menu-icon">
							<image src="../../static/images/groupA-4.png"></image>
						</view>
						<view class="col-menu-name">分销订单</view>
					</view>
					<view class="col-menu-item" @click="toWhere('/pages/message/index')">
						<view class="col-menu-icon">
							<image src="../../static/images/groupA-2.png"></image>
						</view>
						<view class="col-menu-name">系统消息</view>
					</view>

				</view>
			</view>
		</view>			
					
			
		</view>
		<view v-if="data.level==0" style="line-height: 100px;text-align: center;font-size: 15px;">
			分销功能暂未开放
		</view>

	</view>
</template>

<script>
	import {getInviteData,getUserInfo} from '@/utils/api.js'
	export default {
		data() {
			return {
				data:{},
				user:{}
			}
		},
		onShow() {
			this.getUserInfo()
			this.inviteData()
		},
		methods: {
			hotelQrcode(){
				if(this.data.hotel_qrcode){
					uni.navigateTo({
						url:'/pages/distribute/hotel_qrcode'
					})
				}else{
					uni.navigateTo({
						url:'/pages/distribute/bind_qrcode'
					})
				}
			},
			async getUserInfo(){
				const res = await getUserInfo()
				this.user = res.data.data
				 if(!this.user.distribute_mch_id){
					 uni.switchTab({
					 	url:'/pages/mine/index'
					 })
				 }
			},
			async inviteData(){
				const res = await getInviteData()
				this.data = res.data.data
			},
			toWhere(url, t = 1) {
				if (t == 1) {
					uni.navigateTo({
						url: url
					})
				}
				if (t == 2) {
					uni.redirectTo({
						url: url
					})
				}
				if (t == 3) {
					uni.switchTab({
						url: url
					})
				}
			},
		}
	}
</script>

<style>
	.header-container{padding: 40px 0;background-color: var(--mainColor);}
	.header-user-pic{text-align: center;width: 100%;}
	.header-user-pic image{width: 60px;height: 60px;border-radius: 2px;border: 1px solid #fff;}
	.header-user-name{text-align: center;color: #fff;line-height: 30px;}
	.col-menu-item{flex: 1;}
	.col-menu-value{font-size: 18px;font-weight: 700;color: var(--mainColor);}
	.col-menu-name{color: #999;}
	.col-menu-list{padding: 10px;}
	.col-item{display: flex;margin-bottom: 10px;width: 100%;padding-bottom: 10px;}
	.user-pic{display: flex;width: 60px;}
	.user-pic image{width: 50px;height: 50px;border-radius: 2px;}
	.user-info{display: flex;flex-direction: column;}
	.user-name{display: flex;flex: 1;}
	.time{display: flex;flex: 1;font-size: 12px;color: #999;align-items: flex-end;}
	
	.col-menu-list-act{padding: 20px 0;}
	.col-menu-list-act .col-menu-item{flex: unset;width: 33.2%;height: 70px;}
	
</style>
