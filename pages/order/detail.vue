<template>
	<view>

		<view class="fix-menu-container">
			<view class="fix-menu-wrap mix-top">
				<!-- <view class="menu-btn color-555" @click="cancel" v-if="detail.status==1">取消订单</view> -->
				<view v-if="detail.status === 1 && e.user_type=='user'" class="menu-btn bg-color-main color-fff" @click="refund">申请退款</view>
				<view v-if="detail.status === 3 && e.user_type=='user'" class="menu-btn bg-color-main color-fff" @click="jiazhong">加钟</view>
				<view v-if="( detail.status === 3 || detail.status === 20 || detail.status === 21 || detail.status === 22 || detail.status === 23 || detail.status === 24 ) && e.user_type=='user'" class="menu-btn bg-color-main color-fff" @click="shengji">升级</view>	
					
					
				<!-- <view v-if="detail.status==1 && e.user_type=='master'" class="menu-btn bg-color-main color-fff" @click="start">开始服务</view> -->
<!-- 				<view v-if="detail.status==1 && e.user_type=='master'" class="menu-btn bg-color-main color-fff" @click="start('departure')">现在出发</view>
				<view v-if="detail.status==21 && e.user_type=='master'" class="menu-btn bg-color-main color-fff" @click="start('arrival')">我已到达</view>
				<view v-if="detail.status==22 && e.user_type=='master'" class="menu-btn bg-color-main color-fff" @click="start('serviceStart')">开始服务</view>
				<view v-if="detail.status==23 && e.user_type=='master'" class="menu-btn bg-color-main color-fff" @click="start('serviceComplete')">服务完成</view>
				
				
				<!-- <view v-if="detail.status==2 && e.user_type=='user'" class="menu-btn bg-color-main color-fff" @click="finish">确认完成</view> -->
<!-- 				<view v-if="detail.status==24 && e.user_type=='user'" class="menu-btn bg-color-main color-fff" @click="finish">确认完成</view>
				
				<view v-if="detail.status==3 && detail.is_eva==0 && e.user_type=='user'" class="menu-btn bg-color-main color-fff"
					@click="toEva()">去评价</view>	 -->				
			</view>
		</view>

		<view v-if="detail.status==23" style="text-align: center;padding: 20px;">
			<view style="background-color: #fff;padding: 10px;">   
				<view style="color: #666;margin-bottom: 5px;">服务时长剩余：</view>
				<view class="main-color" style="font-size: 26px;font-weight: 700;">{{ timeText }}</view>
			</view>
		</view>
		
		
		<view class="order-info-container">
			<view class="order-info-wrap">
				<view class="order-info-label">服务流程</view>
				<block v-for="item in detail.step_list">
					<view class="mix-top" style="padding: 10px 0;display: flex;" v-if="item.is_show==1">
						<view style="display: flex;flex-direction: column;flex: 1;">
							<view class="" style="margin-bottom: 6px;font-size: 13px;font-weight: bold;">{{item.title}}</view>
							<view v-if="item.remark" style="padding-bottom: 5px;font-size: 11px;color: #333;">{{item.remark}}</view>
							<view>
								<view class="pic-list" v-if="item.pic">
									<view class="pic-item" v-for="(v, k) in item.pic" :key="k" @click="previewImage(v,item.pic)">
										<image :src="v"></image>
									</view>
								</view>						
							</view>						
							<view class="" style="font-size: 12px;color: #999;">{{item.time}}</view>
						</view>
						<view style="display: flex;width: 80px;align-items: center;justify-content: center;">
							<block v-if="e.user_type=='master'">
								<view v-if="item.btnStatus==1 && item.act_role=='master'" class="main-bg-color step-btn" @click="doTing(item)">{{item.master_text}}</view>
								<view v-else class="step-btn step-btn-disable">{{item.master_text}}</view>
							</block>
							<block v-else>
								<view v-if="item.btnStatus==1 && item.act_role=='user'" class="main-bg-color step-btn" @click="doTing(item)">{{item.text}}</view>
								<view v-else class="step-btn step-btn-disable">{{item.text}}</view>
							</block>

						</view>
					</view>
				</block>
			</view>
		</view>

		<view class="order-info-container" v-if="e.user_type=='agent'">
			<view class="order-info-wrap">
				<view class="order-info-label mix-bottom">区域代理佣金</view>
				<view class="order-info-row">
					<view class="order-info-row-lable">金额：</view>
					<view class="order-info-row-value" v-if="detail.order_settle">
						{{detail.order_settle.agent_avg_fee}}（已到账）
					</view>
					<view class="order-info-row-value" v-else>待结算</view>
				</view>
			</view>
		</view>

		<view class="order-info-container">
			<view class="order-info-wrap">
				<view class="order-info-label mix-bottom">服务技师</view>
				<view class="order-info-row">
					<view class="order-info-row-lable">技师姓名：</view>
					<view class="order-info-row-value">{{detail.master_name}}</view>
				</view>
				<view class="order-info-row">
					<view class="order-info-row-lable">联系电话：</view>
					<view class="order-info-row-value">{{detail.master_tel}}</view>
					<view class="order-info-row-icon" @click="call" v-if="e.user_type=='user'">
						<image src="../../static/images/icon-tel.png"></image>
					</view>
				</view>				
				<view class="order-info-row" v-if="e.user_type=='master' && detail.order_settle">
					<view class="order-info-row-lable">服务费：</view>
					<view class="order-info-row-value">{{detail.order_settle.master_fee}}（已到账）</view>
				</view>
			</view>
		</view>

		<view class="order-info-container">
			<view class="order-info-wrap">
				<view class="order-info-label mix-bottom">服务信息</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">服务项目：</view>
					<view class="order-info-row-value">
						<view v-for="(item,k) in detail.order_product">{{item.name}}</view>
					</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">服务时间：</view>
					<view class="order-info-row-value">{{detail.service_time}}</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">预约地址：</view>
					<view class="order-info-row-value" v-if="detail.address.remark">
						{{detail.address.address}} （{{detail.address.remark}}）
					</view>
					<view class="order-info-row-value" v-else>
						{{detail.address.address}}
					</view>
					<view class="order-info-row-icon" @click="openAddress">
						<image src="../../static/images/icon-location.png"></image>
					</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">备注：</view>
					<view class="order-info-row-value">{{detail.remark}}</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">预约姓名：</view>
					<view class="order-info-row-value">{{detail.address.name}}</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">联系电话：</view>
					<view class="order-info-row-value">{{detail.address.tel}}</view>
					<view class="order-info-row-icon" @click="call" v-if="e.user_type=='master'">
						<image src="../../static/images/icon-tel.png"></image>
					</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">下单时间：</view>
					<view class="order-info-row-value">{{detail.create_at}}</view>
				</view>

			</view>
		</view>

		<view class="order-info-container">
			<view class="order-info-wrap">
				<view class="order-info-label mix-bottom">费用信息</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">总金额：</view>
					<view class="order-info-row-value">{{detail.total_fee}}</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">实际支付：</view>
					<view class="order-info-row-value">{{detail.pay_fee}}</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">服务金额：</view>
					<view class="order-info-row-value">{{detail.product_fee}}</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">出行费：</view>
					<view class="order-info-row-value">{{detail.travel_fee}}
<!-- 						<text v-if="detail.travel_type==1" style="margin-left: 10px;">滴滴/出租</text>
						<text v-if="detail.travel_type==2" style="margin-left: 10px;">公交/地铁</text> -->
					</view>
				</view>

				<view class="order-info-row">
					<view class="order-info-row-lable">优惠券金额：</view>
					<view class="order-info-row-value">{{detail.coupon_fee}}</view>
				</view>


			</view>
		</view>

		<view class="order-info-container">
			<view class="order-info-wrap">
				<view class="order-info-label">订单日志</view>
				<block v-for="item in detail.log">
					<view class="mix-top" style="padding: 10px 0;">
						<view class="" style="margin-bottom: 6px;font-size: 13px;font-weight: bold;">{{item.content}}</view>
<!-- 						<view>
							<view class="pic-list" v-if="item.pic">
								<view class="pic-item" v-for="(v, k) in item.pic" :key="k" @click="previewImage(v,item.pic)">
									<image :src="v"></image>
								</view>
							</view>						
						</view>	 -->					
						<view class="" style="font-size: 12px;color: #999;">{{item.create_at}}</view>
					</view>
				</block>
			</view>
		</view>

		<view class="order-info-container">
			<view class="order-info-wrap" v-if="detail.status === 3">
				<view class="order-info-label">加钟记录</view>
				<block v-for="item in detail.jiazhong_record">
					<view class="order-info-row mix-top">
						<view class="order-info-row-lable">加钟项目：</view>
						<view class="order-info-row-value">{{item.name}}</view>
					</view>
					<view class="order-info-row">
						<view class="order-info-row-lable">金额：</view>
						<view class="order-info-row-value">{{item.product_money}}</view>
					</view>
					<view class="order-info-row">
						<view class="order-info-row-lable">加钟时间：</view>
						<view class="order-info-row-value">{{item.create_at}}</view>
					</view>
				</block>
			</view>
		</view>

		<view style="height: 60px;"></view>
		
		<uni-popup ref="popupItem" type="center">
			<view class="list-container" style="background-color: #fff;border-top-left-radius: 20px;border-top-right-radius: 20px;">
				<view style="text-align: center;line-height: 40px;font-weight: 700;border-bottom: 1px solid #f5f5f5;">{{popupItemTitle}}</view>
				<scroll-view scroll-y="true" style="max-height: 600px;">
					<view class="list-wrap">
						<view class="list-item" v-for="(item,k) in item_list" >
							<view class="item-pic">
								<image :src="item.pic"></image>
							</view>
							<view class="item-info"> 
								<view class="item-info-floor">
									<view class="item-name">{{item.name}}</view>
									<view class="item-summary">超{{item.base_sale + item.real_sale}}人选择</view>
								</view>
								<view class="item-info-floor item-info-floor-b">								
									<view class="item-desc">{{item.desc}}</view>
									<view class="item-btn" @click="jiazhongDo(item)" v-if="popupItemBtnName=='加钟'">
										<button>{{popupItemBtnName}}</button>
									</view>
									<view class="item-btn" @click="shengjiDo(item)" v-if="popupItemBtnName=='升级'">
										<button>{{popupItemBtnName}}</button>
									</view>									
								</view>
								<view class="item-info-floor item-info-floor-c">
									<view class="item-price-info">
										<text class="item-price-unit">￥</text>
										<text class="item-price">{{item.price}}</text>								
										<image src="../../static/images/time.png"></image>
										<text class="item-time">{{item.long_time}}</text>
									</view>
								</view>						
							</view>

						</view>
					</view>
					<!-- <view style="height: 10px;"></view> -->
				</scroll-view>
			</view>			
		</uni-popup>

	</view>
</template>

<script>
	let pay = require('../../utils/pay.js')
	import {
		orderDetail,
		orderDo,
		orderJiazhong,
		updateOrder,
		getPrivacyAxb,
		itemList
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				e: {},
				detail: {address:{}},
				step: [],
				  countdownTime: 0, 
				  timeText: '',
				  interval: null,
				item_list:[],
				popupItemTitle:'',
				popupItemBtnName:'',
			}
		},
		onLoad(e) {
			this.e = e
		},
		onShow() {
			this.getOrderDetail()
			// this.itemList()
		},

		  beforeDestroy() {
			clearInterval(this.interval); // 页面销毁时清除定时器
		  },
		methods: {
			shengji() {
					this.popupItemTitle='选择升级项目',
				    this.popupItemBtnName='升级',
					this.itemList({condition:'upgrade',price:this.detail.order_product[0].total_price})
					this.$refs.popupItem.open('bottom');
					return ;
			},
			async jiazhongDo(item) {
				let that = this
				let param = this.e
				param.item_id = item.id
				const res = await orderJiazhong(param)
				pay.toPay(res.data.data, {
					cate: 'jiazhong'
				})
				this.$refs.popupItem.close()
				that.getOrderDetail()
			},
			jiazhong() {
					this.popupItemTitle='选择加钟项目',
				    this.popupItemBtnName='加钟',
					this.itemList({master_id:this.detail.master_id})
					this.$refs.popupItem.open('bottom');
					return ;
			},
			
			async itemList(e) {
				const res = await itemList(e)
				this.item_list = res.data.data
			},
			async doTing(item){
				console.log(item)
				let that = this
				if(item.act_role==this.e.user_type && item.btnStatus==1){
					if(item.name=='taking'){
						uni.showModal({
							content: '确认接单吗',
							success: (res) => {
								if (res.confirm) {
									that.orderDoThing('taking','接单成功')
								}
							}
						})
					}
					if(item.name=='departure'||item.name=='arrival'||item.name=='serviceStart'||item.name=='serviceComplete'){
						uni.navigateTo({
							url:'/pages/order/startService?id='+this.e.id+'&op='+item.name+'&title='+item.title
						})
					}
					if(item.name=='finish'){
						uni.showModal({
							content: '确认完成服务吗',
							success: (res) => {
								if (res.confirm) {
									that.orderDoThing('finish','服务已确认完成')
								}
							}
						})
					}
					if(item.name=='eva'){
						uni.navigateTo({
							url: '/pages/eva/submit?order_id=' + this.detail.id
						})
					}
				}
			},
			
			async orderDoThing(op,tip=''){
				this.e.op = op
				await orderDo(this.e)
				if(tip){
					uni.showToast({
						title:tip,icon:'none'									
					})
				}
				this.getOrderDetail()
			},
			start(op) {
				uni.navigateTo({
					url:'/pages/order/startService?id='+this.e.id+'&op='+op
				})
				return ;
				uni.showModal({
					content: '确认开始服务吗',
					success: (res) => {
						if (res.confirm) {
							this.orderDoThing('startService')
						}
					}
				})
			},
			finish() {
				uni.showModal({
					content: '确认完成服务吗？',
					success: (res) => {
						if (res.confirm) {
							this.orderDoThing('finish')
						}
					}
				})
			},			
			toEva() {
				uni.navigateTo({
					url: '/pages/eva/submit?order_id=' + this.detail.id
				})
			},
			async toOrderOp(op) {
				this.e.op = op
				console.log(op)	
				await orderDo(this.e)
				console.log('执行啊退款接口回来额')	
				if(op=='refund'){					
 			
					this.getOrderDetail()
					uni.showToast({title:'退款成功啦'})
				}
				
			},
						
			
			previewImage(e,arr){
				uni.previewImage({
					urls: arr,
					current: e
				});
			},
			openAddress(){
				let latitude = parseFloat(this.detail.address.latitude)
				let	longitude = parseFloat(this.detail.address.longitude)	
				if(!latitude){uni.showToast({
					icon:'none',
					title:'经纬度暂未获取到，请等待或刷新重新'
				});return ;}
				let that = this
				uni.showActionSheet({
					itemList: ['腾讯地图', '高德地图', '百度地图'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						  if (res.tapIndex === 0) {       
							  // that.openMap('tencent',latitude, longitude)
							that.openTencentMap(latitude, longitude);
						  } else if (res.tapIndex === 1) {        
							  // that.openMap('amap',latitude, longitude)
							that.openAmap(latitude, longitude);
						  } else if (res.tapIndex === 2) {
							that.openBaiduMap(latitude, longitude);
							// that.openMap('baidu',latitude, longitude)
						  }		
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
				
				// this.openTencentMap(parseFloat(this.detail.address.latitude),parseFloat(this.detail.address.longitude))
			},
			openMap(app,latitude, longitude) {
			  let url;
			  
			  if (app === 'amap') {
				// url = `https://uri.amap.com/navi?destination=${longitude},${latitude}&mode=driving`;
				url = `iosamap://navi?source=webapp&lat=${latitude}&lon=${longitude}&dev=0&style=2`;

			  } else if (app === 'baidu') {
				url = `https://map.baidu.com/mobile/index/index?type=route&from=latlng&lat=${latitude}&lng=${longitude}&mode=driving`;
			  } else if (app === 'tencent') {
				url = `https://map.qq.com/routeplan?type=drive&to=${latitude},${longitude}`;
			  }
			  
			  // 使用 uni.navigateTo 打开地图
			   window.location.href = url;
			},			
			// 打开高德地图 H5 页面
			openAmap(lat, lng) {
				console.log(lat, lng)
			  
			  const p = {
			      type: 'car',
			      src: 'uriapi',
			      innersrc: 'uriapi',
			      policy: 1,
			      // from: {
			      //     name: '我的位置'
			      // },
			      to: {
			          // lnglat: lat+','+lng,
					  lnglat: `${lng},${lat}`, 
			          name: this.detail.address.address
			      }
			  };
			  
			  console.log(p)
			  // return ;
			  
			  // 创建 URLSearchParams 实例
			  const params = new URLSearchParams();
			  
			  // 添加参数
			  for (const key in p) {
			      if (typeof p[key] === 'object') {
			          for (const subKey in p[key]) {
			              params.append(`${key}[${subKey}]`, p[key][subKey]);
			          }
			      } else {
			          params.append(key, p[key]);
			      }
			  }
			  
			  // 构建 URL
			  const url = `https://ditu.amap.com/dir?${params.toString()}`;
			  

			  // const amapUrl = `https://m.amap.com/navi/?dest=${lng},${lat}&destName=目标位置&key=3cad22f9cee0a568d167322d3cea6d78`;
			  window.location.href = url;
			  
			},
			// 打开百度地图 H5 页面
			openBaiduMap(lat, lng) {
			  const baiduUrl = `https://api.map.baidu.com/marker?location=${lat},${lng}&title=目标位置&content=目的地描述&output=html&src=webapp.baidu.openAPIdemo`;
			  window.location.href = baiduUrl;
			},
			// 打开腾讯地图 H5 页面
			openTencentMap(lat, lng) {
			  const tencentUrl = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${lat},${lng};title=目标位置&referer=uniapp`;
			  window.location.href = tencentUrl;
			},			
			call(){
				let that = this
				if(this.detail.is_privacy_tel==1){
					let phone_number
					if(this.e.user_type=='user')phone_number=this.detail.address.tel
					if(this.e.user_type=='master')phone_number=this.detail.master_tel
					uni.showModal({
						title:'温馨提示',
						content:'请使用手机号码：'+phone_number+' 拨打，否则无法接通',
						cancelText:'取消',
						confirmText:'确认',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击确定');
								that.getPrivacyPhoneNumber()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}						
					})

				}
				else{
					if(this.e.user_type=='user'){
						uni.makePhoneCall({phoneNumber:this.detail.master_tel})
					}
					if(this.e.user_type=='master'){
						uni.makePhoneCall({phoneNumber:this.detail.address.tel})
					}
				}

			},
			async getPrivacyPhoneNumber(){
				uni.showLoading({
					title:'正在获取隐私电话'
				})
				const res  =await getPrivacyAxb({order_id:this.detail.id,user_type:this.e.user_type})
				uni.hideLoading()
				uni.makePhoneCall({
					phoneNumber:res.data.data
				})	
			},
			async getOrderDetail() {
				clearInterval(this.interval); 
				const res = await orderDetail(this.e)
				this.detail = res.data.data
				this.countdownTime = this.detail.remain_time
				if(this.detail.status==23){
					
				}
				this.startCountdown();
				 
			},

			refund() {
				uni.navigateTo({
					url:'/pages/order/refund?order_id='+this.detail.id
				})
				return ;
				uni.showModal({
					content: '确认退款吗?',
					success: (res) => {
						if (res.confirm) {
							this.toOrderOp('refund')
						}
					}
				})
			},
			
			
			startCountdown() {
			  this.updateTimeText(this.countdownTime);
			  this.interval = setInterval(() => {
				if (this.countdownTime > 0) {
				  this.countdownTime--;
				  this.updateTimeText(this.countdownTime);
				} else {
				  clearInterval(this.interval);
				  this.timeText = '已达到服务时长';
				}
			  }, 1000); // 每秒更新一次
			},
			updateTimeText(seconds) {
			  const minutes = Math.floor(seconds / 60);
			  const remainingSeconds = seconds % 60;
			  this.timeText = `${minutes}分${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}秒`;
			}			
			
		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}

	.order-status-container {
		display: flex;
		padding: 10px 10px 5px;
	}

	.order-status-wrap {
		display: flex;
		padding: 10px;
		flex-direction: column;
		background-color: #fff;
		flex: 1;
	}

	.order-status-txt {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.order-status-remark {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #555;
		font-size: 12px;
	}

	.order-info-container {
		display: flex;
		padding: 0 10px 10px;
	}

	.order-info-wrap {
		display: flex;
		padding: 5px 10px 15px;
		flex-direction: column;
		background-color: #fff;
		flex: 1;
	}

	.order-info-label {
		display: flex;
		padding: 10px 0;
	}

	.order-info-row {
		display: flex;
		padding: 6px 0;
		font-size: 13px;
	}

	.order-info-row-lable {
		display: flex;
		color: #555;
		width: 80px;
	}

	.order-info-row-value {
		display: flex;
		color: #000;
		flex: 1;
	}

	.order-info-row-icon {
		display: flex;
		width: 80px;
		align-items: center;
		justify-content: flex-end;
	}

	.order-info-row-icon image {
		width: 25px;
		height: 25px;
	}


	.fix-menu-container {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 1;
	}

	.fix-menu-wrap {
		display: flex;
		justify-content: flex-end;
		padding: 10px;

	}

	.menu-btn {
		display: flex;
		width: 80px;
		padding: 6px 0;
		border: 1rpx solid #ddd;
		border-radius: 100px;
		justify-content: center;
		font-size: 13px;
		margin-left: 6px;
	}

	.btn-pay-back {
		color: #fff;
		background-color: #00c250;
		border-color: #00c250;
	}
	
	.pic-list { display: flex; flex-wrap: wrap; }
	.pic-item { display: flex; margin: 0 8px 8px 0; position: relative; }
	.pic-item image { width: 60px; height: 60px; }	
	
	.step-btn{ color: #fff;border-radius: 100px;text-align: center;font-size: 11px;width: 70px;line-height: 22px;height: 22px;}
	.step-btn-disable{background-color: #A7D7B6;}
	
</style>