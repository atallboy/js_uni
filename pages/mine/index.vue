<template>
	<view>
		<view class="header" v-if="user.id">
			<view class="user-info">
				<view class="user-pic">
					<image :src="user.avatarUrl"></image>
				</view>
				<view class="user-name">
					<text class="name">{{user.nickName}}</text>
					<text class="desc">编号：{{user.id}}</text>
				</view>
			</view>
			<view class="wallet-wrap" @click="toWhere('../balance/recharge')">
				<view class="wallet-item">
					<view class="wallet-label">账户余额(元)</view>
					<view class="wallet-val">{{user.balance}}</view>
				</view>
				<view class="wallet-btn">立即充值</view>
			</view>
		</view>
		<view class="header" v-else style="display: flex;align-items: center;justify-content: center;">
			<view @click="toLogin" style="width: 90px;line-height: 40px;border-radius: 4px;text-align: center;background-color: #fff;">点击登录</view>
		</view>
		<view style="padding: 0 10px;">
			<view class="brief">
				<view class="brief-item" @click="toWhere('../master/collect')">
					<view class="bg">
						<image src="../../static/images/myicon8.30489105.png"></image>
					</view>
					<view class="brief-label">我的收藏</view>
					<view class="brief-val">已收藏{{collect_master_num}}人</view>
				</view>
				<view class="brief-item" @click="toWhere('../coupon/my')">
					<view class="bg">
						<image src="../../static/images/myicon9.8bcae7e8.png"></image>
					</view>
					<view class="brief-label">我的优惠券</view>
					<view class="brief-val">{{coupon_num}}张优惠券</view>
				</view>
			</view>
		</view>

<!-- 		<view style="padding: 10px;" @click="toWhere('../distribute/index')">
			<image style="border-radius: 10px;width: 100%;height: 100px;"
				:src="siteroot+'/static/img/invite.png'"></image>
		</view> -->

		<view class="col-menu-container">
			<view class="col-menu-wrap">
				<view class="col-menu-header mix-bottom">
					<view class="col-menu-header-bar"></view>
					<view class="col-menu-header-name">其他功能</view>
				</view>
				<view class="col-menu-list">
					<view class="col-menu-item" v-if="!user.distribute_mch_id" @click="toWhere('../distribute/apply')">
						<view class="col-menu-icon">
							<image src="../../static/images/fxyh.png"></image>
						</view>
						<view class="col-menu-name">分销商申请</view>
					</view>						
<!-- 					<view class="col-menu-item" v-if="user.distribute_mch_id" @click="toWhere('../distribute/index')">
						<view class="col-menu-icon">
							<image src="../../static/images/fxqrcode.png"></image>
						</view>
						<view class="col-menu-name">分销邀请</view>
					</view>		 -->
					<view class="col-menu-item" v-if="user.distribute_mch_id" @click="toWhere('../distribute/console')">
						<view class="col-menu-icon">
							<image src="../../static/images/fxyh.png"></image>
						</view>
						<view class="col-menu-name">分销中心</view>
					</view>									
					<view class="col-menu-item" @click="toWhere('../suggest/submit')">
						<view class="col-menu-icon">
							<image src="../../static/images/m1.png"></image>
						</view>
						<view class="col-menu-name">意见反馈</view>
					</view>
					<view class="col-menu-item" @click="toWhere('/pages/address/list')">
						<view class="col-menu-icon">
							<image src="../../static/images/m2.png"></image>
						</view>
						<view class="col-menu-name">地址管理</view>
					</view>
					<view class="col-menu-item" @click="toWhere('../suggest/record')">
						<view class="col-menu-icon">
							<image src="../../static/images/m4.png"></image>
						</view>
						<view class="col-menu-name">投诉管理</view>
					</view>
					<view class="col-menu-item" v-if="!user.master" @click="toWhere('../master/register')">
						<view class="col-menu-icon">
							<image src="../../static/images/m5.png"></image>
						</view>
						<view class="col-menu-name">技师招募</view>
					</view>
					<view class="col-menu-item" v-if="user.master" @click="toWhere('../master/console')">
						<view class="col-menu-icon">
							<image src="../../static/images/m5.png"></image>
						</view>
						<view class="col-menu-name">技师中心</view>
					</view>


					<view class="col-menu-item" v-if="!user.agent" @click="toWhere('/pages/agent/edit')">
						<view class="col-menu-icon">
							<image src="../../static/images/m6.png"></image>
						</view>
						<view class="col-menu-name">代理招募</view>
					</view>
					<view class="col-menu-item" v-if="user.agent" @click="toWhere('/pages/agent/index')">
						<view class="col-menu-icon">
							<image src="../../static/images/m6.png"></image>
						</view>
						<view class="col-menu-name">代理中心</view>
					</view>
					<view class="col-menu-item" @click="toWhere('/pages/coupon/exchange')">
						<view class="col-menu-icon">
							<image src="../../static/images/m4.png"></image>
						</view>
						<view class="col-menu-name">兑换码</view>
					</view>

					<view class="col-menu-item" @click="toWhere('/pages/article/detail?type=desc')">
						<view class="col-menu-icon">
							<image src="../../static/images/m8.png"></image>
						</view>
						<view class="col-menu-name">平台规则</view>
					</view>

					<view class="col-menu-item" @click="toWhere('/pages/mch/list')">
						<view class="col-menu-icon">
							<image src="../../static/images/m9.png"></image>
						</view>
						<view class="col-menu-name">附近商家</view>
					</view>

					<view class="col-menu-item" @click="exit()">
						<view class="col-menu-icon">
							<image src="../../static/images/m10.png"></image>
						</view>
						<view class="col-menu-name">退出登录</view>
					</view>

<!-- 					<view class="col-menu-item" @click="testapi()">
						<view class="col-menu-icon">
							<image src="../../static/images/m10.png"></image>
						</view>
						<view class="col-menu-name">测试接口</view>
					</view> -->

				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		getUserInfo,
		masterList,
		couponRecord,
		appWechatLogin,
		apiTest
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				user: {
					balance: 0.00,
				},
				collect_master_num: 0,
				coupon_num: 0,
				siteroot:''
			}
		},
		onShow() {
			this.siteroot = uni.getStorageSync('siteroot')
			console.log(this.siteroot)
			this.getUserInfo()
			this.mastercollect()
			this.couponRecord()
		},
		methods: {
			async testapi(){
				const res = await apiTest()
				console.log(res)
			},
			toLogin(){
				console.log('login')
				let that = this
				if(uni.getStorageSync('agent_cate')=='app'){
					console.log('app登录');
					uni.login({
						"provider": "weixin",
						"onlyAuthorize": true, // 微信登录仅请求授权认证
						success: function(event){
							console.log('微信登录返回：',event)
							const {code} = event
							that.appWeLogin(event)
						},
						fail: function (err) {
					        // 登录授权失败
					        // err.code是错误码
					    }
					})				
				}
			},
			async appWeLogin(event){
				console.log('------------appWeLogin')
				uni.showLoading()
				const res = await appWechatLogin({
					 code: event.code
				})
				console.log('----------------login-res:',res)
				uni.setStorageSync('token',res.data.data)
				this.getUserInfo()
			},
			async mastercollect(e) {
				const res = await masterList({
					is_collect: 1
				})
				this.collect_master_num = res.data.data.length
			},
			async couponRecord(e) {
				const res = await couponRecord()
				this.coupon_num = res.data.data.length
			},
			async getUserInfo() {
				const res = await getUserInfo()
				console.log(res)
				this.user = res.data.data
				uni.hideLoading()
			},
			toWhere(url, t = 1) {
				if (t == 1) {
					if(!this.user.id){
						uni.showToast({
							title:'请登录后再操作',
							icon:'none'
						})
						return ;
					}
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
			exit(){
				uni.removeStorageSync('token')
				this.user = {}
				uni.showToast({
					title:'已退出登录',
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	.col-menu-item {
		margin-bottom: 20px;
	}

	.header {
		/* width: 100%; */
		height: 200px;
		/* background-image: url(../../static/images/mine-header.png); */
		background-color: #24c373;
		background-position: 0% 0%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 30px 30px 0;
		position: relative;
	}

	.user-info {
		display: flex;
	}

	.user-pic {
		display: flex;
		width: 75px;
	}

	.user-pic image {
		width: 63px;
		height: 63px;
		border-radius: 4px;
	}

	.user-name {
		display: flex;
		flex-direction: column;
		color: #fff;
		justify-content: center;
	}

	.name {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 6px;
	}

	.desc {
		font-size: 11px;
	}

	.wallet-wrap {
		background-image: url('https://h5.dongjiaotn.com/static/img/myb1.89393fcd.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 30px;
		right: 30px;
		bottom: 0;
		height: 70px;
		display: flex;
		align-items: center;
		padding: 0 20px;
	}

	.wallet-item {
		display: flex;
		flex: 1;
		flex-direction: column;
		color: #fff;
	}

	.wallet-label {
		font-size: 13px;
	}

	.wallet-val {
		font-size: 26px;
		font-weight: 700;
	}

	.wallet-btn {
		font-size: 12px;
		font-weight: 600;
		color: #24c373;
		width: 111px;
		height: 30px;
		line-height: 30px;
		background: linear-gradient(90deg, #fff, #bcffdd);
		border-radius: 50px;
		text-align: center;
	}


	.brief {
		display: flex;
		background-color: #fff;
		border-radius: 20px;
		z-index: -2;
		padding: 10px;
		margin-top: 10px;
	}

	.brief-item {
		display: flex;
		flex-direction: column;
		flex: 1;
		position: relative;
		z-index: 1;
		height: 73px;
		justify-content: center;
		margin-left: 10px;
		padding-left: 15px;
	}

	.brief-label {
		font-weight: 600;
		font-size: 15px;
		margin-bottom: 3px;
	}

	.brief-val {
		font-size: 11px;
		color: #555;
	}

	.bg {
		position: absolute;
		right: 0px;
		bottom: 0px;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.bg image {
		width: 100%;
		height: 100%;
	}
</style>