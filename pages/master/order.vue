<template>
	<view>
		<view class="tab-container"
			style="position: fixed;left: 0;right: 0;top: 0;z-index: 999;background-color: #fff;">
			<scroll-view scroll-x="true" :scroll-left="scrollLeft" bindscrolltoupper="upper" bindscrolltolower="lower"
				bindscroll="scroll" show-scrollbar=false>
				<view class="tab-wrap">
					<block v-for="(v,k) in cate">
						<view @click="changeCate(v,k)" :class="'tab-item ' + v.active ">
							<view class="tab-txt">{{v.name}}</view>
							<view class="tab-bar"></view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<view style="height:45px;"></view>

		<view v-if="!list[0]" style="text-align: center;padding-top: 100px;">
			<image src="../../static/images/null.png" style="width: 200px;height: 200px;"></image>
		</view>

		<view class="order-container">
			<view class="order-wrap">
				<view class="order-item" v-for="(item,k) in list">
					<view class="order-item-header">
						<view class="order-item-status">{{item.status_msg}}</view>
						<view class="order-item-master"></view>
					</view>
					<view class="order-item-name" v-for="v in item.order_product">{{v.name}}</view>
					<view class="order-item-info">
						<view class="order-item-time">服务时间：{{item.service_time}}</view>
						<view class="order-item-price">{{item.total_fee}}</view>
					</view>
					<view class="order-item-act mix-top">
						<view class="order-item-btn" @click="detail(item.id)">查看详情</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		orderList
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				e:{},
				scrollLeft: 0,
				cate: [],
				status: 99,
				list: [],
			}
		},
		onLoad(e) {
			this.cate = uni.getStorageSync('settingInfo').order_cate
			if (e.status) {
				this.status = e.status
				let k
				for (let i = 0; i < this.cate.length; i++) {
					if (e.status == this.cate[i].id) {
						this.cate[i].active = 'tab-item-active';
						k = i
					} else {
						this.cate[i].active = '';
					}
				}
				this.scrollLeft = (k - 1) * 45
			}
		},
		onShow() {
			this.orderList()
		},
		methods: {
			detail(e) {
				uni.navigateTo({
					url: '/pages/order/detail?user_type=master&id=' + e
				})
			},
			async orderList() {
				const res = await orderList({
					status: this.status,
					user: 'master'
				})
				this.list = res.data.data
				console.log(this.list)
			},
			changeCate(e, k) {
				this.cate_id = e.id;
				let arr = this.cate;
				for (let i = 0; i < arr.length; i++) {
					if (i == k) {
						arr[i].active = 'tab-item-active';
						this.status = arr[i].id
					} else {
						arr[i].active = '';
					}
				}
				this.cate = arr, this.page = 0, this.scrollLeft = (k - 1) * 45
				this.orderList()
			},
			buyAgain() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
		}
	}
</script>

<style>
	.order-container {
		padding: 10px;
	}

	.order-wrap {}

	.order-item {
		background-color: #fff;
		margin-bottom: 10px;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
	}

	.order-item-header {
		display: flex;
		color: var(--mainColor);
		background: rgb(242, 255, 248);
		padding: 5px 10px;
	}

	.order-item-status {
		display: flex;
		flex: 1;
	}

	.order-item-master {
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	.order-item-name {
		font-size: 16px;
		font-weight: 600;
		padding: 5px 10px;
	}

	.order-item-info {
		display: flex;
		padding: 6px 10px;
	}

	.order-item-time {
		display: flex;
		flex: 1;
	}

	.order-item-price {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		color: rgb(255, 96, 81);
		font-size: 19px;
		font-weight: 600;
	}

	.order-item-act {
		display: flex;
		justify-content: flex-end;
		padding: 6px 10px;
	}

	.order-item-btn {
		width: 66px;
		text-align: center;
		font-size: 12px;
		border: 1px solid #333;
		border-radius: 30px;
		padding: 3px 0;
	}
</style>