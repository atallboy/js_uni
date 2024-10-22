<template>
	<view>
		<view class="wrap">
			<view class="item" v-for="(item) in list">
				<view class="floor">
					<view class="name">
						<view
							style="width: 4px;height: 13px;border-radius: 100px;background-color: #000;margin-right: 5px;">
						</view> {{item.name}}
					</view>
					<view class="status">
						<text v-if="item.status==0" style="color: #ff6347;">待结算</text>
						<text v-if="item.status==1" style="color: #07c160;">已结算</text>
					</view>
				</view>
				<view class="floor">
					<view class="info">
						<view class="floor">开始时间：{{item.start_time}}</view>
						<view class="floor">结束时间：{{item.end_time}}</view>
						<view class="floor" v-if="item.status==1">结算时间：{{item.update_at}}</view>
					</view>
					<view class="btn-wrap" v-if="item.status==0">
						<view class="btn" @click="settle(item)">立即结算</view>
					</view>
				</view>

				<view class="mix-top" v-if="item.status==1">
					<view class="floor">
						<view class="data-name">
							<view class="data-label">基本费用</view>
						</view>
						<view class="data-item">
							<view class="data-value">{{item.achieve_money}}</view>
							<view class="data-label">订单总额</view>
						</view>
						<view class="data-item">
							<view class="data-value">{{item.order_num}}</view>
							<view class="data-label">订单数</view>
						</view>
						<view class="data-item">
							<view class="data-value">{{item.reward_money}}</view>
							<view class="data-label">结算金额</view>
						</view>
					</view>
					<view class="floor">
						<view class="data-name">
							<view class="data-label">加钟费用</view>
						</view>
						<view class="data-item">
							<view class="data-value">{{item.jiazhong_achieve_money}}</view>
							<view class="data-label">订单总额</view>
						</view>
						<view class="data-item">
							<view class="data-value">{{item.jiazhong_order_num}}</view>
							<view class="data-label">订单数</view>
						</view>
						<view class="data-item">
							<view class="data-value">{{item.jiazhong_reward_money}}</view>
							<view class="data-label">结算金额</view>
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		settle,
		settleRecord
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.settleRecord()
		},
		onReady() {
			this.settleRecord()
		},
		methods: {
			async settleRecord() {
				const res = await settleRecord()
				this.list = res.data.data
				console.log('打印了订单结算信息', this.list)
			},
			settle(e) {
				uni.showModal({
					content: '确定立即结算吗',
					success: (res) => {
						if (res.confirm) {
							this.settleTo(e)
						}
					}
				})
			},
			async settleTo(e) {
				await settle(e)
				uni.showModal({
					content: '结算成功，是否前往账户流水查看',
					success: (res) => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/balance/record'
							})
						}
					},
					complete: () => {
						this.settleRecord()
					}
				})
			}
		}
	}
</script>

<style>
	.wrap {
		padding: 10px;
	}

	.item {
		margin-bottom: 10px;
		padding: 10px;
		background-color: #fff;
	}

	.floor {
		display: flex;
		color: #555;
		padding: 5px 0;
		font-size: 13px;
	}

	.name {
		display: flex;
		flex: 1;
		font-weight: 700;
		line-height: 30px;
		align-items: center;
		color: #000;
	}

	.status {
		display: flex;
		width: 60px;
		align-items: center;
		justify-content: flex-end;
	}

	.status text {}

	.info {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.btn-wrap {
		display: flex;
		width: 80px;
		align-items: center;
		justify-content: flex-end;
	}

	.btn {
		padding: 3px 10px;
		border-radius: 100px;
		background-color: var(--mainColor);
		color: #fff;
		font-size: 12px;
	}

	.data-name {
		display: flex;
		width: 60px;
		align-items: center;
	}

	.data-item {
		display: flex;
		flex: 1;
		align-items: center;
		flex-direction: column;
		align-items: center;
		padding-top: 5px;
		justify-content: center;
	}

	.data-value {
		font-weight: 700;
		font-size: 16px;
		color: #000;
		margin-bottom: 5px;
	}

	.data-label {
		font-size: 12px;
		color: #999;
	}
</style>