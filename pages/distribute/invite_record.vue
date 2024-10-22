<template>
	<view>
		<view v-if="data.level>0">
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
			
			<view class="col-menu-container">
				<view class="col-menu-wrap">
					<view class="col-menu-header mix-bottom">
						<view class="col-menu-header-bar"></view>
						<view class="col-menu-header-name">一级分销用户</view>
					</view>
					<view class="col-menu-list">
						<view class="col-item mix-bottom" v-for="item in data.first">
							<view class="user-pic">
								<image :src="item.avatarUrl"></image>
							</view>
							<view class="user-info"> 
								<view class="user-name">{{item.nickName}}</view>
								<view class="time">{{item.create_at}}</view>
							</view>
						</view>		
						<view v-if="data.invite_num_first==0" style="text-align: center;color: #999;width: 100%;padding: 10px 0;">您还没有一级分销用户</view>
					</view>
				</view>
			</view>
			
			<view class="col-menu-container" v-if="data.level>1">
				<view class="col-menu-wrap">
					<view class="col-menu-header mix-bottom">
						<view class="col-menu-header-bar"></view>
						<view class="col-menu-header-name">二级分销用户</view>
					</view>
					<view class="col-menu-list">
						<view class="col-item" v-for="item in data.second">
							<view class="user-pic">
								<image :src="item.avatarUrl"></image>
							</view>
							<view class="user-info"> 
								<view class="user-name">{{item.nickName}}</view>
								<view class="time">{{item.create_at}}</view>
							</view>
						</view>	
						<view v-if="data.invite_num_second==0" style="text-align: center;color: #999;width: 100%;padding: 10px 0;">您还没有二级分销用户</view>
					</view>
				</view>
			</view>			
		
			<view class="col-menu-container" v-if="data.level>2">
				<view class="col-menu-wrap">
					<view class="col-menu-header mix-bottom">
						<view class="col-menu-header-bar"></view>
						<view class="col-menu-header-name">三级分销用户</view>
					</view>
					<view class="col-menu-list">
						<view class="col-item" v-for="item in data.third">
							<view class="user-pic">
								<image :src="item.avatarUrl"></image>
							</view>
							<view class="user-info"> 
								<view class="user-name">{{item.nickName}}</view>
								<view class="time">{{item.create_at}}</view>
							</view>
						</view>	
						<view v-if="data.invite_num_third==0" style="text-align: center;color: #999;width: 100%;padding: 10px 0;">您还没有三级分销用户</view>
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
	import {getInviteData} from '@/utils/api.js'
	export default {
		data() {
			return {
				data:{}
			}
		},
		onShow() {
			this.inviteData()
		},
		methods: {
			async inviteData(){
				const res = await getInviteData()
				this.data = res.data.data
			},
		}
	}
</script>

<style>
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
</style>
