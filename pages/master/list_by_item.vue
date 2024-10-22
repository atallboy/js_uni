<template>
	<view>
		<view class="search-container">
			<view class="search-picker">
				<picker :range="cityArr" :value="cityIndex" @change="changeCity">
					<view>
						<text>{{city}}</text>
						<uni-icons type="bottom" color="#000" size="17"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="search-wrap">
				<view class="search-item">
					<view class="search-icon">
						<uni-icons type="search" color="#000" size="20"></uni-icons>
					</view>
					<view class="search-input">
						<input placeholder="请输入姓名" @input="inputName" placeholder-style="font-size:13px;" type="text" />
					</view>
				</view>
			</view>
		</view>

		<view style="height:50px;"></view>
		<view class="tab-container">
			<scroll-view scroll-x="true" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll"
				show-scrollbar=false>
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

		<yj-null :showNull="list.length"></yj-null>

		<view class="list-contaner">
			<view class="list-wrap">
				<view class="list-item" v-for="(item,k) in list">
					<view class="you" v-if="item.is_excellent==1">优</view>
					<image v-if="item.is_hot==1"
						style="position: absolute;left: 60px;bottom: 42px;width: 18px;height: 28px;z-index: 1;"
						src="../../static/images/hot.gif"></image>
					<view class="list-item-user">

						<view class="list-user-pic" @click="previewPic(item.pic,item.picArr)">
							<image :src="item.pic"></image>
						</view>
						<view class="list-detail">
							<view class="list-user-info">
								<view class="list-user-name">
									<text class="name" @click="checkEva(item)">{{item.name}} </text>
									<image v-if="item.is_fast==1" style="width: 13px;height: 13px;margin-left: 5px;"
										src="../../static/images/fast.png"></image>
									<text class="more-photo" @click="previewPic(item.pic,item.picArr)">更多照片</text>
								</view>
								<!-- <view v-if="item.travel_expense==1" class="list-time">最早可约：11：00</view> -->
								<view v-if="item.travel_expense==1" class="list-time">{{item.distance}}</view>
								<view v-if="item.travel_expense==0" style="color: rgb(255, 137, 54);">免出行费</view>
							</view>

							<view class="list-floor" @click="checkEva(item)">
								<view class="eva">
									<uni-icons type="star-filled" color="#ff6051" size="15"></uni-icons>
									<text class="eva-score">{{item.score}}</text>
									<text class="service-num">已服务：{{item.complete_order}}单</text>
								</view>
								<view class="distance">
									<view class="list-floor" style="font-size: 12px;color: #666;">
										加钟率：{{item.jiazhonglv}}%</view>
									<!-- <uni-icons type="location" color="#24C373" size="18"></uni-icons> 755m	 -->
								</view>
							</view>
						</view>

					</view>
					<view class="brief">
						<view v-if="item.open_status==1 && item.service_status==0" class="status" @click="checkEva(item)">可服务</view>
						<view v-if="item.open_status==1 && item.service_status==1" style="background-color: #ff8c00;" class="status" @click="checkEva(item)">服务中</view>
						<view v-if="item.open_status==0" class="status close-status" @click="checkEva(item)">{{master_rest_text}}</view>
						
						<view class="brief-data">
							<image src="../../static/images/store.png" @click="checkEva(item)"></image>
							<text @click="checkEva(item)">{{item.store_name}}</text>
							<image src="../../static/images/review.png" @click="checkEva(item)"></image>
							<text @click="checkEva(item)">{{item.eva_order}}</text>
							<image src="../../static/images/collect.png" @click="collect(item.id)"></image>
							<text>{{item.collect+item.base_collect}}</text>
						</view>
						<view v-if="item.open_status==1" class="btn" @click="getService(item)">立即预约</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<view>
				<view style="padding: 10px;">
					<view class="eva-master-detail">
						<view class="eva-master-pic">
							<image :src="master.pic"></image>
						</view>
						<view class="eva-master-info">
							<view class="eva-master-name">{{master.name}}</view>
							<view class="eva-master-desc">{{master.desc}}</view>
						</view>
					</view>
				</view>
				<view class="service-list">
					<view class="service-item" v-for="(item,k) in service_list">
						<view class="service-pic">
							<image :src="item.pic"></image>
						</view>
						<view class="service-info">
							<view class="service-line">
								<view class="service-name">{{item.name}}</view>
								<view class="service-time">
									<image src="../../static/images/time.png"></image> {{item.long_time}}分钟
								</view>
							</view>
							<view class="service-line">
								<view class="service-price"><text>￥</text>{{item.price}}</view>
								<view class="service-sale">{{item.base_sale+item.real_sale}}人选择</view>
							</view>
						</view>
						<view class="sel-num" @click="selItem(item,k)">
							选择
						</view>
					</view>
				</view>
				<view class="tarbar-height" style="width: 100%;"></view>
			</view>
		</uni-popup>

		<uni-popup ref="eva_popup" :safe-area="true" type="bottom" background-color="#F5F5F5">
			<view style="padding: 5px;max-height: 500px;">
				<view class="eva-master-detail">
					<view class="eva-master-pic">
						<image :src="master.pic"></image>
					</view>
					<view class="eva-master-info">
						<view class="eva-master-name">{{master.name}}</view>
						<view class="eva-master-desc">{{master.desc}}</view>
					</view>
				</view>
				<view class="eva-power" @click="certificate(master.id)">
					<view class="eva-power-item">
						<image src="../../static/images/dui.png"></image>
						实名认证
					</view>
					<view class="eva-power-item" style="justify-content: center;">
						<image src="../../static/images/p-2.png"></image>
						爽约包退
					</view>
					<view class="eva-power-item" style="justify-content: flex-end;">
						<image src="../../static/images/p-3.png"></image>
						资质证书
						<uni-icons type="forward" color="#999" size="13"></uni-icons>
					</view>
				</view>
				<view class="eva-list">
					<view class="eva-item mix-bottom" v-for="(item,k) in eva_list">
						<view class="eva-info">
							<view class="eva-name">匿名用户</view>
							<view class="eva-star">
								<uni-rate :readonly="true" :size="13" :value="item.score" />
							</view>
							<view class="eva-time">{{item.create_at}}</view>
						</view>
						<view class="eva-content">{{item.content}}</view>
						<view class="eva-tag">
							<view class="eva-tag-item" v-for="v1 in item.tagArr">{{v1}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="tarbar-height" style="width: 100%;"></view>
		</uni-popup>

	</view>
</template>

<script>
	import {
		masterList,
		itemList,
		masterCollect,
		evaList,
		masterDetail
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				e: {},
				list: [],
				cityArr: ['不限城市'],
				cityIndex: 0,
				city: '不限城市',
				service_list: [],
				name: '',
				cate: [{
						id: 0,
						active: 'tab-item-active',
						name: '推荐'
					},
					// {id:1,active:'',name:'跑得快'},
					{
						id: 2,
						active: '',
						name: '免费出行'
					},
					// {id:3,active:'',name:'加钟率'},
				],
				status: 0,
				condition: {
					is_recommend: 1,
					is_fast: 0,
					is_hot: 0,
					travel_expense_free: 0,
					is_jiazhonglv: 0,
					name: ''
				},
				eva_list: [],
				master: {},
			}
		},
		onLoad(e) {
			console.log(e)
			this.e = e
			if (e.master_id) {
				this.haveMaster()
			}
		},
		onShow() {
			this.cityArr = uni.getStorageSync('settingInfo').city_arr
			this.master_rest_text = uni.getStorageSync('settingInfo').master_rest_text
			this.getLocation()
			this.getItemList()
		},
		methods: {
			async haveMaster() {
				const res = await masterDetail({
					id: this.e.master_id
				})
				this.master = res.data.data
				uni.setStorageSync('selMaster', res.data.data)
				this.$refs.popup.open('bottom')
			},
			getLocation() {
				console.log('获取当前位置');
				uni.showLoading({
					title:'正在获取定位'
				})
				uni.getLocation({
					type: 'wgs84',
					success: (res) => {
						uni.setStorageSync('location', res)
						console.log('获取了位置信息', res)
						uni.hideLoading()
						this.getMasterList()
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					},
					fail: function(res) {
						console.log(res);
						uni.hideLoading()
						uni.showToast({
							title:'定位获取失败，请刷新重试',
							icon:'none'
						})
					}
				});

			},
			certificate(e) {
				uni.navigateTo({
					url: '/pages/master/certificate?master_id=' + e
				})
			},
			async checkEva(e) {
				this.master = e
				this.$refs.eva_popup.open('bottom')
				const res = await evaList({
					master_id: e.id,
					cate: 1
				})
				this.eva_list = res.data.data
			},
			changeCate(e, k) {
				this.cate_id = e.id;
				let arr = this.cate;
				this.condition.is_recommend = 0
				this.condition.is_fast = 0
				this.condition.is_hot = 0
				this.condition.travel_expense_free = 0
				this.condition.is_jiazhonglv = 0
				for (let i = 0; i < arr.length; i++) {
					if (i == k) {
						arr[i].active = 'tab-item-active';
						this.status = arr[i].id
						if (this.status == 0) {
							this.condition.is_recommend = 1
						}
						if (this.status == 1) {
							this.condition.is_fast = 1
						}
						if (this.status == 2) {
							this.condition.travel_expense_free = 1
						}
						if (this.status == 3) {
							this.condition.is_jiazhonglv = 1
						}
					} else {
						arr[i].active = '';
					}
				}
				this.cate = arr, this.page = 0
				this.getMasterList()
			},
			inputName(e) {
				this.condition.name = e.detail.value
				this.getMasterList()
			},
			async collect(e) {
				const res = await masterCollect({
					id: e
				})
				this.getMasterList()
			},
			selItem(e, k) {
				// if(!this.user.id){
				// 	uni.showToast({
				// 		title:'请登录后再操作',
				// 		icon:'none'
				// 	})
				// 	return ;
				// }
				this.$refs.popup.close()
				uni.setStorageSync('selItem', [e])
				uni.navigateTo({
					url: '/pages/order/submit'
				})
			},
			changeCity(e) {
				this.cityIndex = e.detail.value
				this.city = this.cityArr[e.detail.value]
				this.getMasterList()
			},
			async getMasterList() {
				this.condition.city = this.city
				this.condition.latitude = uni.getStorageSync('location').latitude
				this.condition.longitude = uni.getStorageSync('location').longitude
				this.condition.item_id = this.e.item_id
				const res = await masterList(this.condition)
				this.list = res.data.data
				console.log(this.list, '打印技师信息')
				uni.hideLoading()
			},
			async getItemList() {
				// uni.showLoading()
				this.service_list = []
				const res = await itemList({master_id:this.master.id})
				this.service_list = res.data.data
				// uni.hideLoading()
			},
			getService(e) {
				uni.redirectTo({
					url: '/pages/order/submit?item_id='+this.e.item_id+'&master_id='+e.id
				})
			},
			previewPic(e, arr) {
				uni.previewImage({
					urls: arr,
					current: e
				})
			}
		}
	}
</script>

<style>
	.tab-wrap {
		padding-left: 10px;
	}

	.tab-item {
		flex: unset;
		border-radius: 5px;
		margin-right: 20px;
		background-color: #fff;
		height: 30px;
		min-width: auto;
		padding: 0 10px;
	}

	.tab-item-active {
		background-color: var(--mainColor);
		color: #fff !important;
		flex: unset;
		border-radius: 5px;
		margin-right: 20px;
	}

	.tab-item .tab-txt {
		color: #333;
	}

	.tab-item-active .tab-txt {
		color: #fff;
	}

	.search-container {
		display: flex;
		padding: 10px;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		background-color: #f7f7f7;
		z-index: 99;
	}

	.search-picker {
		display: flex;
		align-items: center;
		padding-right: 10px;
		color: #333;
		font-size: 15px;
		font-weight: 600;
	}

	.search-wrap {
		display: flex;
		flex: 1;
	}

	.search-item {
		display: flex;
		flex: 1;
		background-color: #fff;
		border-radius: 100px;
		padding: 5px 10px;
	}

	.search-icon {
		display: flex;
		width: 30px;
	}

	.search-input {}

	.search-input input {
		width: 100%;
	}


	.list-contaner {
		padding: 15px 10px 10px;
	}

	.list-wrap {
		display: flex;
		flex-direction: column;
	}

	.list-item {
		background-color: #fff;
		flex-direction: column;
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 10px;
		position: relative;
	}

	.list-item-user {
		display: flex;
	}

	.list-user-pic {
		display: flex;
		width: 66px;
	}

	.list-user-pic image {
		width: 66px;
		height: 66px;
		border-radius: 100px;
	}

	.list-detail {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding-left: 10px;
	}

	.list-user-info {
		display: flex;
		align-items: center;
	}

	.list-user-name {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.name {
		font-size: 16px;
		font-weight: 600;
		color: #333;
	}

	.more-photo {
		color: #fff;
		background-color: var(--mainColor);
		font-size: 10px;
		margin-left: 9px;
		width: 52px;
		height: 15px;
		line-height: 15px;
		border-radius: 3px;
		text-align: center;
	}

	.list-time {
		text-align: center;
		line-height: 19px;
		width: 110px;
		height: 19px;
		background: #e3fff1;
		border-radius: 3px;
		font-size: 11px;
		font-weight: 600;
		color: #0b9f54;
	}

	.list-floor {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.eva {
		display: flex;
		flex: 1;
	}

	.eva-score {
		color: #ff6051;
		font-size: 13px;
	}

	.service-num {
		color: #666;
		font-size: 13px;
		margin-left: 10px;
	}

	.distance {
		font-size: 14px;
		color: #333;
	}

	.brief {
		display: flex;
		align-items: center;
	}

	.status {
		color: #fff;
		background-color: var(--mainColor);
		border-radius: 100px;
		font-size: 11px;
		width: 66px;
		text-align: center;
		line-height: 18px;
	}
	.close-status{
		background-color: #e3fff1;
		color: #999;
	}

	.brief-data {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.brief-data image {
		width: 23px;
		height: 23px;
		margin-left: 5px;
	}

	.brief-data text {
		color: #555;
		font-size: 13px;
		margin-left: 2px;
		margin-right: 3px;
	}

	.btn {
		color: #fff;
		background-color: var(--mainColor);
		border-radius: 7px;
		width: 60px;
		height: 30px;
		line-height: 30px;
		font-size: 11px;
		text-align: center;
	}

	.you {
		width: 17px;
		height: 17px;
		text-align: center;
		line-height: 17px;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 1;
		border-radius: 13px 0px 3px 0px;
		font-size: 9px;
		background: rgb(212, 179, 127);
		color: rgb(255, 255, 255);
	}

	.service-list {
		background-color: #f7f7f7;
		max-height: 400px;
		overflow-x: scroll;
	}

	.service-item {
		display: flex;
		padding: 8px;
		background-color: #fff;
		margin-top: 10px;
		border-radius: 5px;
	}

	.service-pic {
		display: flex;
		width: 80px;
		margin-right: 5px;
	}

	.service-pic image {
		width: 90px;
		height: 65px;
		border-radius: 4px;
	}

	.service-info {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.service-line {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.service-name {
		font-size: 14px;
		color: #0b0b0b;
		margin-right: 10px;
	}

	.service-time {
		font-size: 12px;
		color: #8c8c8c;
	}

	.service-time image {
		width: 12px;
		height: 12px;
		margin-right: 5px;
	}

	.service-price {
		font-size: 18px;
		color: #ff6051;
		font-weight: 700;
	}

	.service-price text {
		font-size: 12px;
		line-height: 33px;
		color: #ff6051;
	}

	.service-sale {
		font-size: 12px;
		color: #8c8c8c;
		margin-left: 10px;
	}

	.sel-num {
		display: flex;
		width: 90px;
		align-items: center;
		justify-content: center;
	}



	.eva-list {
		background-color: #fff;
		max-height: 300px;
		overflow-y: scroll;
	}

	.eva-item {
		display: flex;
		flex-direction: column;
		padding: 10px;
		font-size: 14px;
	}

	.eva-info {
		display: flex;
		align-items: center;
	}

	.eva-name {
		display: flex;
		width: 70px;
	}

	.eva-star {
		display: flex;
		flex: 1;
	}

	.eva-time {
		display: flex;
		width: 80px;
		justify-content: flex-end;
		color: #8799a3;
		font-size: 12px;
	}

	.eva-content {
		padding: 6px 0;
		color: #555;
		font-size: 13px;
	}

	.eva-tag {
		display: flex;
		flex-wrap: wrap;
	}

	.eva-tag-item {
		display: flex;
		padding: 2px 5px;
		font-size: 11px;
		margin-right: 10px;
		background-color: #f0f0f0;
		color: #666;
	}

	.eva-master-detail {
		background-color: #fff;
		border: 1px solid var(--mainColor);
		border-radius: 4px;
		display: flex;
		padding: 15px;
		align-items: center;
	}

	.eva-master-pic {
		display: flex;
		width: 50px;
		margin-right: 15px;
	}

	.eva-master-pic image {
		width: 50px;
		height: 50px;
		border-radius: 100px;
	}

	.eva-master-info {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.eva-master-name {}

	.eva-master-desc {
		color: gray;
		font-size: 11px;
	}

	.eva-power {
		margin: 5px 0;
		background-color: #fff;
		display: flex;
		padding: 5px;
	}

	.eva-power-item {
		display: flex;
		flex: 1;
		align-items: center;
		color: gray;
		font-size: 13px;
	}

	.eva-power-item image {
		width: 15px;
		height: 15px;
		margin: 0 6px;
	}
</style>