<template>
	<view>
		<yj-nav-bar v-if="agent_cate=='micro'" title="技师管理中心" titleStyle="color:#fff;" toUrlType=4
			navBarStyle="background-image:linear-gradient(#24C373,#24C373);"></yj-nav-bar>
		<!-- 顶部技师状态展示 -->
		<view class="user-info-container">
			<view class="user-info-wrap">
				<view class="user-pic">
					<image :src="master.pic"></image>
				</view>
				<view class="user-name">{{master.name}} </view>
				<span>工作状态:</span>
				<view v-if="master.status==0" class="" style="color: crimson;">平台审核中</view>
				<view v-if="master.status==1">
					<switch v-if="master.open_status==1" @change="changeOpenStatus" checked
						style="transform:scale(0.7)" />
					<switch v-else @change="changeOpenStatus" style="transform:scale(0.7)" />
				</view>

			</view>
		</view>
		<!-- 定位展示 -->

		<view class="location-box">
			<view class="location-info">
				<view class="location-icon">
					<uni-icons type="location" size="16"></uni-icons>
					<text class="dangqian"> 当前:</text>
				</view>
				<view class="location-desc">
					{{locationName}}
				</view>
			</view>

			<view class="sswd">

				<view class="ssdw-left">

					<view class="ssdw-left-title">
						实时定位
					</view>
					<image @click="ssdwdesc" class="ssdw-left-pic" src="../../static/images/question.png" mode="">
					</image>

				</view>

				<view class="ssdw-right">
					<switch :checked="islocation" @change="switchchange" style="transform:scale(0.8)" />
				</view>
			</view>

			<view class="location-cz">
				<view class="location-cz-title">
					定位失败或不准确时您可以这样操作
				</view>
				<image @click="dwbzdesc" class="location-cz-pic" src="../../static/images/question.png" mode=""></image>
			</view>
		</view>




		<!-- 中间菜单 -->
		<view class="col-menu-container" style="margin-top: 20rpx;">
			<view class="col-menu-wrap">
				<view class="col-menu-list">
					<view class="col-menu-item" @click="toWhere('/pages/settle/index')">
						<view class="col-menu-icon">
							<image src="../../static/images/c5.png"></image>
						</view>
						<view class="col-menu-name">订单结算</view>
					</view>
					<view class="col-menu-item" @click="toWhere('order')">
						<view class="col-menu-icon">
							<image src="../../static/images/c2.png"></image>
						</view>
						<view class="col-menu-name">订单中心</view>
					</view>
					<view class="col-menu-item" @click="toWhere('/pages/balance/record')">
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
					<view class="col-menu-item" @click="toWhere('/pages/balance/withdrawal_record')">
						<view class="col-menu-icon">
							<image src="../../static/images/c6.png"></image>
						</view>
						<view class="col-menu-name">提现记录</view>
					</view>
					<view class="col-menu-item" @click="toWhere('edit')">
						<view class="col-menu-icon">
							<image src="../../static/images/c3.png"></image>
						</view>
						<view class="col-menu-name">资料编辑</view>
					</view>

					<view class="col-menu-item" @click="toWhere('qrcode')">
						<view class="col-menu-icon">
							<image src="../../static/images/c7.png"></image>
						</view>
						<view class="col-menu-name">二维码</view>
					</view>



					<view class="col-menu-item" @click="startadress">
						<view class="col-menu-icon">
							<image src="../../static/images/c8.png"></image>
						</view>
						<view class="col-menu-name">一键报警定位</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单数据 -->
		<!-- <view class="col-menu-container" style="">
			<view class="col-menu-wrap">
				<view class="col-menu-header mix-bottom">
					<view class="col-menu-header-bar"></view>
					<view class="col-menu-header-name">订单数据</view>
				</view>
				<view class="col-menu-list">



					<view class="col-menu-item" @click="toWhere('order?status=1')">
						<view class="col-menu-icon">
							<text>{{master.calc.order_wait_start}}</text>
						</view>
						<view class="col-menu-name">已支付</view>
					</view>
					<view class="col-menu-item" @click="toWhere('order?status=2')">
						<view class="col-menu-icon">
							<text>{{master.calc.order_ing}}</text>
						</view>
						<view class="col-menu-name">进行中</view>
					</view>
					<view class="col-menu-item" @click="toWhere('order?status=3')">
						<view class="col-menu-icon">
							<text>{{master.complete_order}}</text>
						</view>
						<view class="col-menu-name">已完成</view>
					</view>
					<view class="col-menu-item" @click="toWhere('order?status=6')">
						<view class="col-menu-icon">
							<text>{{master.calc.order_cancel}}</text>
						</view>
						<view class="col-menu-name">已取消</view>
					</view>
				</view>
			</view>
		</view> -->



	</view>
</template>

<script>
	import {
		getUserInfo,
		masterDetail,
		changeMasterOpenStatus,
		jishiaddress
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				// 位置信息数据
				locationName: '', // 初始化位置名称为空字符串
				jindu: '',
				weidu: '',
				agent_cate: '',
				user: {},
				master: {}, //技师信息
				islocation: false //是否开启定位按钮

			}
		},
		onLoad(e) {
			this.agent_cate = uni.getStorageSync('agent_cate')
		},
		onShow() {
			this.userInfo()
			this.masterDetail()
			if (uni.getStorageSync('islocation')) {
				console.log('show里面开启定位之前')
				this.startadress() //开启定位
				console.log('打印了缓存里面的islocation信息', uni.getStorageSync('islocation'))
				this.islocation = uni.getStorageSync('islocation')

			} else {

				this.islocation = uni.getStorageSync('islocation')
			}
		},


		methods: {

			//	定位按钮切换
			switchchange(e) {
				if (e.detail.value) {
					this.startadress() //开启定位
					this.islocation = e.detail.value
					uni.setStorageSync('islocation', e.detail.value) //将切换的状态本地存储
				} else {
					this.islocation = e.detail.value
					uni.setStorageSync('islocation', e.detail.value) //将切换的状态本地存储
				}
			},
			// 点击实时定位说明弹出文字
			ssdwdesc() {

				uni.showModal({
					title: '实时定位',
					content: '因频繁解析位置信息会导致过度使用第三方地图接口，若您一直停留在本页面，则需要手动刷新页面才能显示最新的实时地址。',
					showCancel: false,
					confirmText: '知道了'
				})

			},

			// 点击定位不准弹出的文字
			dwbzdesc() {

				uni.showModal({
					title: '定位失败或不准确',
					content: '因诸多原因影响,特别是h5因官方原因定位会有一定偏差 (例如:网速低、信号差、拒绝授权定位等)，可能导致您的定位失败或不准确。当您发现时，可以尝试通过以下操作来重新定位:',
					showCancel: false,
					confirmText: '知道了'
				})

			},

			startadress() {
				console.log('点击了获取位置');
				uni.getLocation({
					type: 'wgs84',
					altitude: true,
					accuracy: 'best',
					isHighAccuracy: true,
					success: (res) => {
						console.log('正确位置返回', res);
						let longitude = res.longitude; // 经度
						let latitude = res.latitude; // 纬度
						// 确保经度为正数
						if (longitude < 0) {
							longitude = -longitude; // 取绝对值
						}

						// 确保纬度在中国范围内，可以是正数或负数
						if (latitude > 0) {
							console.log('北纬：', latitude);
						} else {
							console.log('南纬：', latitude);
						}

						// 加偏移处理
						let x = longitude;
						let y = latitude;
						let x_pi = (3.14159265358979324 * 3000.0) / 180.0;
						let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
						let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
						let lngs = z * Math.cos(theta) + 0.0065;
						let lats = z * Math.sin(theta) + 0.006;

						console.log('加偏移后经度：', lngs);
						console.log('加偏移后纬度：', lats);

						// 存储经纬度到组件属性中
						this.jindu = lngs;
						this.weidu = lats;

						// 调用逆地理编码函数
						this.reverseGeocoding(lngs, lats);

						// // 发送请求将经纬度数据存储在数据库
						const res1 = jishiaddress({
							id: this.master.id,
							jindu: lngs,
							weidu: lats,
							locationName: this.locationName,
						});

					},
					fail: (err) => {
						console.log('获取定位失败', err);
						uni.showToast({
							title: '获取位置失败，请重试',
							icon: 'error'
						});
					},
					complete: (complete) => {
						console.log('获取定位完成', complete);
					}
				});
			},

			// 地图编码
			reverseGeocoding(longitude, latitude) {
				const apiKey = '59c50aaacccbb076a1b6f79192570255';
				const apiUrl =
					`https://restapi.amap.com/v3/geocode/regeo?key=${apiKey}&location=${longitude},${latitude}&output=json&radius=1000&extensions=all`;

				fetch(apiUrl)
					.then(response => response.json())
					.then(data => {
						if (data.status === '1' && data.regeocode) {
							this.locationName = data.regeocode.formatted_address;
							console.log('转码后的地址', this.locationName);
						} else {
							console.error('逆地理编码失败：', data.info);
						}
					})
					.catch(error => {
						console.error('逆地理编码失败：', error);
					});
			},







			async changeOpenStatus() {
				const res = await changeMasterOpenStatus()
				this.masterDetail()
			},
			async masterDetail() {
				const res = await masterDetail()
				this.master = res.data.data
				console.log(this.master.id)
				console.log('技师信息详情', this.master)
			},
			async userInfo() {
				const res = await getUserInfo()
				this.user = res.data.data

				console.log('用户信息', this.user)
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
	page {
		background-color: #F2F3F4;
	}

	.user-info-container {
		position: relative;
		background-image: linear-gradient(var(--mainColor), var(--mainColor));
		height: 60px;
	}

	.user-info-wrap {
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		padding: 0 10px;
		background-color: #fff;
		display: flex;
		height: 60px;
		align-items: center;
		border-radius: 4px;
	}

	.user-pic {
		display: flex;
		width: 60px;
	}

	.user-pic image {
		width: 40px;
		height: 40px;
	}

	.user-name {
		display: flex;
		flex: 1;
		color: #214260;
		font-size: 16px;
		align-items: center;
		height: 60px;
		font-weight: 600;
	}

	.user-level-icon {
		width: 26px;
		height: 12px;
		margin-left: 5px;
	}

	.user-car-number {
		display: flex;
		justify-content: flex-end;
		color: #214260;
		font-size: 13px;
	}

	.user-car-number image {
		width: 20px;
		height: 20px;
	}

	.col-menu-name {
		font-size: 12px;
		font-weight: 600;
		color: #000;
	}

	.location-box {
		margin: 30rpx 10rpx 0 10rpx;
		padding: 10rpx 40rpx;
		background-color: #fff;
		border-radius: 5rpx;

	}

	.location-info {
		display: flex;
		align-items: center;
		border: 1px solid #efefef;
		padding: 10rpx 0;

	}

	.location-icon {
		/* background-color: #a6efa5; */
		display: flex;
		align-items: center;
		border-radius: 8rpx;
		padding: 5rpx 10rpx 5rpx 5rpx;


	}

	.dangqian {
		color: #689667;
		font-weight: 550;
		font-size: 18rpx;
	}

	.location-desc {
		margin-left: 20rpx;
	}

	.ssdw-left-pic {
		width: 26rpx;
		height: 26rpx;
	}

	.sswd {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0rpx;
		border: 1px solid #efefef;
	}

	.ssdw-left {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ssdw-left-title {
		margin-right: 10rpx;
		margin-left: 10rpx;
	}

	.location-cz {
		display: flex;
		border: 1px solid #efefef;
		padding: 10rpx;
	}

	.location-cz-title {

		margin-right: 10rpx;
		/* margin-left: 10rpx; */
	}

	.location-cz-pic {
		width: 26rpx;
		height: 26rpx;
	}
</style>