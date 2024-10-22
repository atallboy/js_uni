<template>
	<view class="container">

		<view class="bar-container">
			<view class="bar bg-color-main"></view>
			<view class="label">我的账户</view>
		</view>

		<view class="pant-container">
			<view class="pant-wrap">
				<view class="pant-icon">
					<image src="../../static/images/icon-balance.png"></image>
				</view>
				<view class="pant-name">当前余额</view>
				<view class="pant-value">￥{{user.balance}}</view>
			</view>
		</view>

		<form @submit="submit">
			<view class="recharge-container">
				<view class="recharge-wrap">

					<view class="recharge-form mix-bottom" style="justify-content: center;">
						<!-- 							<radio-group @change="radioChange" style="display: flex;">
								<label style="display: flex;align-items: center;margin: 0 20px 10px;height: 30px;">
									<view> 
										<radio value="1" />
									</view>
									<view>支付宝</view>
								</label>
										<label style="display: flex;align-items: center;margin: 0 20px 10px;height: 30px;">
									<view> 
										<radio value="2" />
									</view>
									<view>兑换Q币</view>
								</label>								
							</radio-group>	-->
					</view>

					<view class="recharge-form mix-bottom">
						<input type="text" name="money" id="money" placeholder="请输入提现金额"
							placeholder-class="placeholder" />
					</view>
					<view class="recharge-form mix-bottom">
						<input type="text" name="name" placeholder="请输入姓名" placeholder-class="placeholder" />
					</view>
					<view class="recharge-form mix-bottom">
						<input type="text" name="tel" placeholder="请输入手机号" placeholder-class="placeholder" />
					</view>
					<view class="recharge-form mix-bottom">
						<input type="text" name="zfb_account" placeholder="请输入支付宝账号" placeholder-class="placeholder" />
					</view>
					<button form-type="submit" class="recharge-btn">立即提现</button>
				</view>
			</view>
			<view @click="withdrawal" style="justify-content: center;margin-top: 50px;color: #555;">提现记录</view>
		</form>


	</view>
</template>

<script>
	import {
		getUserInfo,
		withdrawal
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				user: {
					balance: ''
				},
				_type: 0,
			}
		},
		onShow() {
			this.userInfo();
		},
		methods: {
			async userInfo() {
				const res = await getUserInfo()
				this.user = res.data.data
			},
			withdrawal() {
				uni.navigateTo({
					url: '/pages/balance/withdrawal_record'
				})
			},
			async submit(e) {
				// 如果余额为0不能提现
				if (this.user.balance == 0) {

					uni.showToast({
						title: '您的余额为0，不能提现',
						icon: 'error',

					})
					return;
				}

				//判断一下用户输入的提现金是否大于余额

				console.log(e.detail.value.money)
				console.log(Number(e.detail.value.money))
				console.log(Number(this.user.balance))

				if (Number(e.detail.value.money) > Number(this.user.balance)) {

					uni.showToast({
						title: '账户余额不足',
						icon: 'error',
					})
					return;

				}


				console.log(e);
				if (!e.detail.value.money) {
					uni.showToast({
						title: '请输入提现金额',
						icon: 'none'
					});
					return;
				}
				if (e.detail.value.money > this.balance) {
					uni.showToast({
						title: '提现金额不能超过账户积分',
						icon: 'none'
					});
					return;
				}
				if (!e.detail.value.name) {
					uni.showToast({
						title: '请输入姓名',
						icon: 'none'
					});
					return;
				}
				if (!e.detail.value.tel) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					});
					return;
				}
				if (!e.detail.value.zfb_account) {
					uni.showToast({
						title: '请输入支付宝账号',
						icon: 'none'
					});
					return;
				}
				await withdrawal(e.detail.value)
				uni.showToast({
					title: '已提交提现申请'
				})
				setTimeout(function() {
					uni.navigateTo({
						url: '/pages/balance/withdrawal_record'
					})
				}, 1500)
			},

		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}

	view {
		display: flex;

	}

	image {
		display: block;
		width: 100%;
		height: 100%;
	}

	.container {
		padding: 10px;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.bar-container {
		padding: 15px 0;
		align-items: center;
	}

	.bar-container .bar {
		width: 4px;
		height: 15px;
		background-color: #ff4544;
		margin-right: 10px;
	}

	.bar-container .label {
		font-size: 12px;
		color: #666666;
	}

	.pant-container {}

	.pant-wrap {
		padding: 20px;
		align-items: center;
		background-size: 100% 100%;
		flex: 1;
		color: #333;
	}

	.pant-icon {
		width: 50px;
		height: 50px;
	}

	.pant-name {
		font-size: 21px;
		flex: 1;
		margin-left: 10px;
	}

	.pant-value {
		font-size: 21px;
		width: 100px;
	}


	.recharge-container {

		padding: 40px 0 20px;
	}

	.recharge-wrap {
		display: flex;
		background-color: #fff;
		flex-direction: column;
		flex: 1;
		padding: 10px;
	}

	.recharge-form {
		/* border-radius: 6px; */
		flex: 1;
		padding: 5px 10px;
		align-items: center;
	}

	.recharge-form input {
		height: 45px;
		width: 100%;
		text-align: center;
	}

	.recharge-btn {

		border-radius: 100px;
		background-color: #ff4544;
		color: #fff;
		height: 36px;
		line-height: 36px;
		text-align: center;
		font-size: 14px;
		margin-top: 30px;
	}


	.tixan-btn {
		flex: 1;
		align-items: center;
		justify-content: center;
		padding: 10px;
		color: #999;
		font-size: 13px;
		margin-top: 20px;
	}

	.pick-name {
		width: 80px;
		color: #555;
		font-size: 14px;
	}

	.pick-value {
		flex: 1;
		color: #555;
		justify-content: center;
		font-size: 14px;
		padding: 12px;
	}

	.pick-btn {
		width: 50px;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
	}

	.pick-btn image {
		width: 30px;
		height: 30px;
	}

	.placeholder {
		font-size: 14px;
	}


	.regular {
		font-size: 14px;
		line-height: 20px;
	}
</style>