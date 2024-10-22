<template>
	<view>
		<view class="address-container" @click="selAddress">
			<view v-if="address.id" class="address-wrap">
				<view class="address-item">
					<view class="address-info">
						<view class="address-info-top">
							<view class="address-info-name">联系人：{{address.name}}</view>
							<view class="address-info-tel">{{address.tel}}</view>
						</view>
						<view class="address-info-addr">
							地址：{{address.address}}</view>
					</view>
					<view class="address-icon">
						<uni-icons type="forward"></uni-icons>
					</view>
				</view>
			</view>
			<view v-else class="address-add">添加/选择地址</view>
		</view>

		<view class="order-container">
			<view class="order-wrap">
				<view class="order-product">
					<view class="order-product-item" v-for="(item,k) in orderProduct">
						<view class="order-product-pic">
							<image :src="item.pic"></image>
						</view>
						<view class="order-product-info">
							<view class="order-product-name">{{item.name}}</view>
							<view class="order-product-price">{{item.price}}</view>
						</view>
						<view class="order-product-num">
							x1
						</view>
					</view>
				</view>
				<view class="order-param mix-top">
					<view class="order-param-label">服务技师</view>
					<view class="order-param-value master-name">{{master.name}}</view>
				</view>
				<!-- <picker :value="timeIndex" :range="timeArray" @change="bindTimeChange"> -->
					<view class="order-param" @click="selTimePop">
						<view class="order-param-label">服务时间</view>
						<view class="order-param-value service-time">
							<text v-if="time">{{selectedDay}}{{time}}</text>
							<text v-else>请选择服务时间</text>
						</view>
						<view class="order-param-icon">
							<uni-icons type="forward" size="15" color="#24C373"></uni-icons>
						</view>
					</view>
				<!-- </picker> -->
				<block v-if="master.travel_expense==1">
					<view class="order-param mix-top">
						<view class="order-param-label">出行方式</view>
						<view class="order-param-value" style="padding-top: 15px;">
							<block v-if="travel_type==1">
								<view class="travel-item travel-item-selected">{{travel_fee_text}}</view>
								<!-- <view @click="changeTravelType(2)" class="travel-item">公交/地铁</view> -->
							</block>
<!-- 							<block v-if="travel_type==2">
								<view @click="changeTravelType(1)" class="travel-item ">滴滴/出租</view>
								<view class="travel-item travel-item-selected">公交/地铁</view>
							</block> -->
						</view>
					</view>
					<view class="order-param" style="height: 50px;">
						<view class="order-param-label" style="flex: 1;color: #999;">
							 全程共{{distance_msg}}；出行费起步价{{master.qibujia}}元，每公里{{master.taxi_fee}}元；
							 <!-- 公交/地铁{{master.bus_fee}}元 -->
						</view>
					</view>
					<view class="order-param">
						<view class="order-param-label">出行费</view>
						<view v-if="address.id" class="order-param-value" style="color: rgb(255, 96, 81);">￥{{payInfo.travel_expense}}</view>
						<view v-else class="order-param-value" style="color: rgb(255, 96, 81);">选择地址后显示</view>
					</view>
				</block>
				<view class="order-param mix-top">
					<view class="order-param-label">备注</view>
					<view class="order-param-value">
						<input type="text" name="remark" @input="inputRemark" placeholder="在此输入备注" />
					</view>
					<view class="order-param-icon">
						<uni-icons type="forward" size="15"></uni-icons>
					</view>
				</view>
				<view class="order-param mix-top">
					<view class="order-param-pic">
						<image src="../../static/images/coupon.png"></image>
					</view>
					<view class="order-param-label">优惠券</view>
					<view class="order-param-value" @click="openCouponToast">
						<view class="order-param-coupon" v-if="!coupon_list[0]">
							无可用优惠券
							<uni-icons type="forward" size="12" color="#999"></uni-icons>
						</view>
						<view v-if="coupon_list[0]&&!coupon.id" class="order-param-coupon order-param-coupon-active">
							{{coupon_list.length}}张可用
							<uni-icons type="forward" size="12" color="#fff"></uni-icons>
						</view>
						<view v-if="coupon_list[0]&&coupon.id" class="order-param-coupon order-param-coupon-sel">
							{{coupon.name}}
							<uni-icons type="forward" size="12" color="#FD4950"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="pay-type-container">
			<view class="pay-type-header">支付方式</view>
			<view class="pay-type-wrap">
				<radio-group @change="payTypeChange">
					<label>
						<view class="pay-type-item">
							<view class="pay-type-icon">
								<image src="../../static/images/wechat-pay.png"></image>
							</view>
							<view class="pay-type-name">微信支付</view>
							<view class="pay-type-radio">
								<radio value="1" checked />
							</view>
						</view>
					</label>
					<label>
						<view class="pay-type-item">
							<view class="pay-type-icon">
								<image src="../../static/images/balance-pay.png"></image>
							</view>
							<view class="pay-type-name">余额支付<text
									style="color: #555; font-size: 12px;">（当前余额：{{user.balance}}元）</text></view>
							<view class="pay-type-radio">
								<radio v-if="user.balance>=payInfo.pay_fee" value="2" />
								<radio v-else disabled value="2" />
							</view>
						</view>
					</label>
				</radio-group>

			</view>
		</view>

		<view style="width: 100%;height: 60px;"></view>
		<view class="pay-wrap">
			<view class="pay-info">
				<text>合计：</text> ￥{{payInfo.pay_fee}}
			</view>
			<view @click="pay" class="pay-btn">立即支付</view>
		</view>

		<uni-popup ref="popup" background-color="#fff">
			<view>
				<view style="display: flex;">
					<view style="display: flex;width: 50px;"></view>
					<view style="display: flex;flex: 1;justify-content: center;align-items: center;height: 40px;">选择优惠券
					</view>
					<view @click="closeCouponToast"
						style="display: flex;width: 40px;justify-content: center;align-items: center;height: 40px;">
						<uni-icons type="close" size="20"></uni-icons>
					</view>
				</view>
				<view>
					<yj-coupon :list="coupon_list" :btnShow="true" @selCoupon="selCoupon"></yj-coupon>
				</view>
			</view>

		</uni-popup>
		
		<uni-popup ref="popupTime" type="center">
<!-- 			<view style="background-color: #fff;padding: 10px;border-radius: 4px;padding-bottom: 20px;">
				<view style="text-align: center;font-weight: bold;line-height: 30px;padding-bottom: 10px;">选择服务时间</view>
				<view style="display: flex;flex-wrap: wrap;justify-content: space-around;align-items: center;">
					<block v-for="item in timeArray">
						<view @click="selTime(item)" v-if="item!=time" style="font-size: 12px; display: flex;width: 23%;align-items: center;justify-content: center;height: 30px;color: #24C373;border: 1px solid #24C373;border-radius: 2px;margin-bottom: 5px;">{{item}}</view>
						<view @click="selTime(item)" v-else style="font-size: 12px; display: flex;width: 23%;align-items: center;justify-content: center;height: 30px;color: #fff;border: 1px solid #24C373;border-radius: 2px;margin-bottom: 5px;background-color: #24C373;">{{item}}</view>									
					</block>
				</view>	
			</view> -->

			<view style="background-color: #fff;padding: 10px;border-radius: 4px;padding-bottom: 0px;">
			  <view style="display: flex; justify-content: space-around;">
				<!-- 今天 -->
				<view @click="selectDay('今天')" 
					  :style="[selectedDay === '今天' ? selectedStyle : defaultStyle]">
				  今天
				</view>

				<!-- 明天 -->
				<view @click="selectDay('明天')" 
					  :style="[selectedDay === '明天' ? selectedStyle : defaultStyle]">
				  明天
				</view>
			  </view>
			  
			  <!-- 使用 scroll-view 实现上下滑动 -->
			  <scroll-view scroll-y="true" style="max-height: 200px;">
				<view style="display: flex; flex-wrap: wrap; justify-content: flex-start; align-items: center;">
				  <block v-for="(item, index) in timeArray" :key="index">
					<!-- 未选中状态 -->
					<view @click="selTime(item)" v-if="item != time" 
					  style="font-size: 12px; display: flex; width: 23%; align-items: center; justify-content: center; height: 40px; color: #fff; border: 1px solid #4bd3af; border-radius: 2px; margin-bottom: 10px; margin-right: 2%; box-sizing: border-box;background-color: #4bd3af;">
					  {{ item }}
					</view>
					<!-- 选中状态 -->
					<view @click="selTime(item)" v-else 
					  style="font-size: 12px; display: flex; width: 23%; align-items: center; justify-content: center; height: 40px; color: #fff; border: 1px solid #88cdea; border-radius: 2px; margin-bottom: 10px; margin-right: 2%; background-color: #88cdea; box-sizing: border-box;">
					  {{ item }}
					</view>
				  </block>
				</view>
			  </scroll-view>
			</view>
			<view @click="confirmTime" style="line-height: 40px;background-color: #01c08d;color: #fff;text-align: center;">确定</view>


		</uni-popup>			
		

	</view>
</template>

<script>
	// var jWeixin = require('jweixin-module');
	let pay = require('../../utils/pay.js')
	import {
		addressList,
		createOrder,
		updateOrder,
		getUserInfo,
		couponRecord,
		itemDetail,
		masterDetail,
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				e:{},
				address: {},
				orderProduct: [],
				orderProductIds: [],
				master: {},
				timeArray: [],
				btnStatus: true,
				payType: 1,
				user: {
					balance: ''
				},
				coupon_list: [],
				coupon: {
					id: 0,
					coupon_record_id: 0
				},
				payInfo: {
					pay_fee: 0,
					travel_expense: 0,
					bus_fee: 0,
					taxi_fee: 0,
					qibujia: 0, //起步价
				},
				travel_type: 1,
				distance_msg: '',
				distance: 0,
				rtData: {},
				canSubmit:true,
				remark:'',
				item_detail:{},
				travel_fee_text:'',
				time:'',
				  selectedDay: '今天',
				  // 默认样式
				  defaultStyle: {
					color: '#000',
					'font-weight': 'normal',
					'font-size': '16px',
					padding: '10px'
				  },
				  // 选中时的样式
				  selectedStyle: {
					color: '#24C373',
					'font-weight': 'bold',
					'font-size': '16px',
					padding: '10px'
				  }				
			}
		},
		onLoad(e) {
			this.e = e
			this.itemDetail()
			this.masterDetail()
			this.userInfo()
		},
		onShow() {
			if (uni.getStorageSync('selAddress')) {
				this.address = uni.getStorageSync('selAddress')
				// uni.removeStorageSync('selAddress')
				this.calcDistanceAndFee()
			}
			this.travel_fee_text = uni.getStorageSync('settingInfo').travel_fee_text
			this.addressList()
			this.couponRecord()
		},
		onReady() {
			
		},
		methods: {
			confirmTime(){
				if(this.time==''){uni.showToast({title:'请选择服务时间',icon:'none'});return ;}
				this.$refs.popupTime.close()
			},
			selectDay(day) {
			  this.selectedDay = day;
			  this.timeArray = this.getRemainingHalfHours(day)
			},			
			selTimePop(){
				this.$refs.popupTime.open('bottom')	
				this.timeArray = this.getRemainingHalfHours(this.selectedDay)
			},
			selTime(e){
				console.log(e)
				this.time = e
			},
			async itemDetail(){
				const res = await itemDetail({id:this.e.item_id})
				this.item_detail = res.data.data
				this.orderProduct = [res.data.data]
				this.orderProduct.forEach((item) => {
					this.orderProductIds.push(item.id)
				})
				this.calcPayInfo()
			},
			async masterDetail(){
				const res = await masterDetail({id:this.e.master_id})
				this.master = res.data.data
				this.calcDistanceAndFee()
			},
			inputRemark(e){this.remark = e.detail.value},
			async addressList(){
				const res = await addressList()
				if(res.data.data.length==0){
					this.address = {}
					uni.removeStorageSync('selAddress')
				}else{
					let t = false
					for(let i=0;i<res.data.data.length;i++){
						if(res.data.data[i].id==this.address.id){t=true}
					}
					if(!t){
						this.address = {}
						uni.removeStorageSync('selAddress')
					}
				}
				this.calcDistanceAndFee()
			},
			calcDistanceAndFee() {
				console.log('calcDistanceAndFee-master:',this.master)
				console.log('calcDistanceAndFee-address:',this.address)
				if(this.address.id){
					let distance = this.distanceOf({
						latitude: this.master.latitude,
						longitude: this.master.longitude
					}, {
						latitude: this.address.latitude,
						longitude: this.address.longitude
					})
					this.distance = (distance / 1000).toFixed(2)
					console.log('距离：',distance)
					if (distance < 1000) {
						this.distance_msg = distance + '米'
					} else {
						this.distance_msg = (distance / 1000).toFixed(2) + '公里'
					}
				}
				this.calcPayInfo()
			},
			changeTravelType(e) {
				this.travel_type = e
				this.calcPayInfo()
			},
			calcPayInfo() {
				let travel_expense,taxi_fee,bus_fee
				travel_expense = taxi_fee = bus_fee = 0
				this.payInfo.pay_fee = 0
				this.orderProduct.forEach((item) => {
					console.log(item)
					this.payInfo.pay_fee += parseFloat(item.price)
				})
				if (this.coupon.amount) {
					this.payInfo.pay_fee -= parseFloat(this.coupon.amount)
				}
				
				if(this.master.travel_expense==1 && this.address.id){
					console.log('计算时距离：',this.distance)
					if(this.travel_type==1){
						let remain_distance = (this.distance-1).toFixed(2)
						travel_expense = taxi_fee = parseFloat(this.master.qibujia)
						if(remain_distance>0){
							travel_expense = taxi_fee += parseFloat(((this.master.taxi_fee)*remain_distance).toFixed(2))						
						}	
					}
					// if(this.travel_type==2){
					// 	travel_expense = bus_fee = ((this.master.bus_fee)*1).toFixed(2)						
					// }					
				}				
				this.payInfo.travel_expense = travel_expense.toFixed(2)
				this.payInfo.taxi_fee = taxi_fee
				this.payInfo.bus_fee = bus_fee
				this.payInfo.pay_fee = parseFloat((this.payInfo.pay_fee+parseFloat(travel_expense)).toFixed(2))
				
				
				// if (this.master.travel_expense == 1 && this.distance >= 1) {
				// 	if (this.travel_type == 1) {
				// 		console.log(this.master.qibujia)
				// 		//this.payInfo.travel_expense = this.payInfo.taxi_fee = ((this.master.taxi_fee) * this.distance).toFixed(2)
				// 		this.payInfo.travel_expense = this.payInfo.taxi_fee = ((this.master.taxi_fee) * this.distance +
				// 			this.master.qibujia).toFixed(2)
				// 		this.payInfo.pay_fee += parseFloat(this.payInfo.travel_expense)
				// 	}
				// 	if (this.travel_type == 2) {
				// 		this.payInfo.travel_expense = this.payInfo.bus_fee = ((this.master.bus_fee) * 1).toFixed(2)
				// 		this.payInfo.pay_fee += parseFloat(this.payInfo.travel_expense)
				// 	}
				// }
			},
			selCoupon(e) {
				console.log(e)
				this.coupon = e
				this.$refs.popup.close()
				this.calcPayInfo()
			},
			closeCouponToast() {
				this.$refs.popup.close()
			},
			openCouponToast() {
				this.$refs.popup.open('bottom')
			},
			removeDisable(){
				let that = this
				setTimeout(function() {
					that.canSubmit = true
				}, 1500)
			},
			async couponRecord() {
				const res = await couponRecord({
					// ids: this.orderProductIds.join('&'),
					ids:this.e.item_id,
					use_range: 'submit_order'
				})
				this.coupon_list = res.data.data
			},
			async userInfo() {
				const res = await getUserInfo()
				this.user = res.data.data
				this.user.balance = parseFloat(res.data.data.balance)
			},
			async pay() {
				console.log('paying-distance',this.distance)
				// uni.showToast({title: '支付通道暂时关闭',icon: 'none'});return;
				if(this.distance=='NaN'){uni.showToast({title: '距离计算有误，请重新选择地址',icon: 'none'});return;}
				if (this.time == '') {
					uni.showToast({title: '请选择服务时间',icon: 'none'});return;
				}
				console.log(parseFloat(this.payInfo.pay_fee) ,parseFloat(this.user.balance))
				if(parseFloat(this.payInfo.pay_fee) > parseFloat(this.user.balance) && this.payType==2){
					uni.showToast({
						title: '余额不足，请选择微信支付',
						icon: 'none'
					});
					return;
				}
				
				let data = {}
				data.address_id = this.address.id
				data.master_id = this.master.id
				data.service_time = this.getDateStr(this.selectedDay)+' '+ this.time
				this.btnStatus = false
				data.ids = this.orderProduct[0].id + '=1'
				data.coupon_id = this.coupon.coupon_record_id
				data.pay_type = this.payType
				data.travel_type = this.travel_type
				data.travel_expense = this.payInfo.travel_expense
				data.remark = this.remark
				if(!this.canSubmit)return ;
				this.canSubmit = false;
				this.removeDisable()
				uni.showLoading()
				const res = await createOrder(data)
				uni.hideLoading()
				if (this.payType == 2){
					uni.showModal({
						title: '支付成功',
						confirmText: '确定',
						showCancel: false,
						success() {
							uni.switchTab({
								url: '/pages/order/list'
							})
						}
					})
				} 
				if (this.payType == 1) {
					this.btnStatus = true
					this.canSubmit = true;
					pay.toPay(res.data.data, {cate: 'order'})
					return;
					if (uni.getStorageSync('agent_cate') == 'gzh') {
						this.rtData = res.data.data
						this.ghzPay()
					} else {
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: res.data.data.timeStamp,
							nonceStr: res.data.data.nonceStr,
							package: res.data.data.package,
							signType: res.data.data.signType,
							paySign: res.data.data.paySign,
							success: (r) => {
								updateOrder({
									id: res.data.data.id,
									cate: 1
								})
								uni.showModal({
									title: '支付成功',
									confirmText: '确定',
									showCancel: false,
									success() {
										// uni.switchTab({url: '/pages/order/list'})
										uni.switchTab({url: '/pages/index/index'})
									}
								})
							},
							fail: function(err) {
								uni.showModal({
									title: '支付失败',
									showCancel: false,
									success() {
										uni.switchTab({
											url: '/pages/order/list'
										})
									}
								})
							},
							complete: () => {
								this.btnStatus = true
								this.canSubmit = true;
							}
						})
					}

				}

			},
			bindTimeChange(e) {
				this.timeIndex = e.detail.value
			},
			selAddress() {
				uni.setStorageSync('isSelAddress', 1)
				uni.navigateTo({
					url: '/pages/address/list'
				})
			},
			payTypeChange(e) {
				console.log(e)
				this.payType = e.detail.value
			},

			rad(d) {
				return d * Math.PI / 180.0;
			},
			distanceOf(p1, p2) {
				console.log(p1, p2)
				var radLng1 = this.rad(p1.latitude);
				var radLng2 = this.rad(p2.latitude);
				var mdifference = radLng1 - radLng2;
				var difference = this.rad(p1.longitude) - this.rad(p2.longitude);
				var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(difference / 2), 2) +
					Math.cos(radLng1) * Math.cos(radLng2) * Math.pow(Math.sin(mdifference / 2), 2)));
				distance = distance * 6378.137;
				distance = Math.abs(Math.round(distance * 10000) / 10);
				return distance;
			},

			getRemainingHalfHours(t='') {
			  let now = new Date();
			  let hours = now.getHours();
			  let minutes = now.getMinutes();
			  
			  // 设置结束时间为23:30
			  const endHour = 23;
			  const endMinute = 30;
			  
			  let times = [];
			  
			  if(t=='明天'){
				  hours = 0
				  minutes = 0
				  times.push('00:00')
			  }

			  // 如果当前分钟数大于30，则从下一小时开始
			  let startHour = hours;
			  let startMinute = minutes >= 30 ? 30 : 0;

			  // 第一次手动处理
			  if (minutes < 30) {
				startMinute = 30;
			  } else {
				startHour += 1;
				startMinute = 0;
			  }
			  
			  // 生成从当前时间到23:30的所有半小时时间点
			  while (startHour < endHour || (startHour === endHour && startMinute <= endMinute)) {
				times.push(`${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`);

				// 增加30分钟
				startMinute += 30;
				if (startMinute === 60) {
				  startMinute = 0;
				  startHour += 1;
				}
			  }

			  return times;
			},
			
			getDateStr(day) {
				const today = new Date();
				
				if (day === "今天") {
					return today.toISOString().split('T')[0]; // 返回今天的日期，格式为 YYYY-MM-DD
				} else if (day === "明天") {
					const tomorrow = new Date(today);
					tomorrow.setDate(today.getDate() + 1); // 将日期加1天
					return tomorrow.toISOString().split('T')[0]; // 返回明天的日期
				}
			},			

		}
	}
</script>

<style>
	.address-container {
		padding: 10px;
		background-color: #fff;
	}

	.address-add {
		background-color: var(--mainColor);
		color: #fff;
		border-radius: 8px;
		height: 36px;
		line-height: 36px;
		text-align: center;
	}

	.address-wrap {
		display: flex;
		flex: 1;
	}

	.address-item {
		display: flex;
		flex: 1;
	}

	.address-info {
		display: flex;
		flex: 1;
		flex-direction: column;
		font-size: 14px;
	}

	.address-info-top {
		display: flex;

	}

	.address-info-name {
		display: flex;
		flex: 1;
	}

	.address-info-tel {
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	.address-info-addr {
		display: flex;
		flex: 1;
	}

	.address-icon {
		display: flex;
		width: 40px;
		justify-content: flex-end;
		align-items: center;
	}



	.order-container {
		padding: 10px;
	}

	.order-wrap {
		background-color: #fff;
		padding: 6px;
	}

	.order-product {
		padding: 10px 0;
	}

	.order-product-item {
		display: flex;
	}

	.order-product-pic {
		display: flex;
		width: 90px;
	}

	.order-product-pic image {
		width: 90px;
		height: 70px;
	}

	.order-product-info {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		padding-left: 10px;
	}

	.order-product-name {
		font-size: 16px;
		color: rgb(51, 51, 51);
		font-weight: bold;
		margin-bottom: 8px;
	}

	.order-product-price {
		color: rgb(255, 96, 81);
		font-size: 16px;
		font-weight: bold;
		line-height: 20px;
	}

	.order-product-num {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 10px;
	}

	.order-param {
		display: flex;
		height: 40px;
		align-items: center;
		padding-left: 5px;
	}

	.order-param-pic {
		display: flex;
		width: 26px;
	}

	.order-param-pic image {
		width: 20px;
		height: 20px;
	}

	.order-param-label {
		display: flex;
		width: 80px;
		font-size: 13px;
		color: rgb(51, 51, 51);
	}

	.order-param-value {
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	.order-param-value input {
		width: 100%;
		text-align: right;
	}

	.order-param-icon {
		display: flex;
		width: 20px;
		justify-content: flex-end;
	}

	.order-param-coupon {
		display: flex;
		justify-content: flex-end;
		color: #999;
	}

	.order-param-coupon-active {
		color: #fff;
		background-color: rgb(253, 73, 80);
		padding: 2px 3px 2px 10px;
		border-radius: 100px;
		font-size: 12px;
	}

	.order-param-coupon-sel {
		color: #FD4950;
	}

	.master-name {
		font-weight: 600;
		padding-right: 5px;
	}

	.service-time {
		color: var(--mainColor);
	}

	.travel-item {
		width: 80px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		margin-left: 10px;
		border: 1px solid #333;
		border-radius: 3px;
	}

	.travel-item-selected {
		background-color: var(--mainColor);
		color: #fff;
		border: 1px solid var(--mainColor);
	}

	.pay-wrap {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding: 10px;
	}

	.pay-info {
		display: flex;
		flex: 1;
		color: rgb(255, 96, 81);
		font-size: 19px;
		align-items: center;
	}

	.pay-info text {
		font-size: 13px;
	}

	.pay-btn {
		width: 100px;
		background-color: var(--mainColor);
		color: #fff;
		border-radius: 100px;
		padding: 6px 0;
		text-align: center;
	}

	.pay-type-container {
		padding: 10px;
	}

	.pay-type-header {
		line-height: 30px;
	}

	.pay-type-wrap {
		background-color: #fff;
		padding: 10px;
	}

	.pay-type-item {
		display: flex;
		height: 40px;
		align-items: center;
	}

	.pay-type-icon {
		display: flex;
		width: 30px;
	}

	.pay-type-icon image {
		width: 25px;
		height: 25px;
	}

	.pay-type-name {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.pay-type-radio {
		display: flex;
		width: 50px;
		justify-content: center;
	}

	.pay-type-radio radio {
		transform: scale(0.7);
	}
</style>