<template>
	<view>
		<view v-if="!list[0]" style="text-align: center;padding-top: 100px;">
			<image src="../../static/images/null.png" style="width: 200px;height: 200px;"></image>
		</view>
		
		<view class="coupon-container">
			  <view class="coupon-wrap">
				  <view class="coupon-item mix-border" v-for="v in list">
					  <!-- <view wx:if="{{v.cate==1}}" class="coupon-cate coupon-cate-a">全场通用券</view>
					  <view wx:if="{{v.cate==2}}" class="coupon-cate coupon-cate-b">自主下单券</view>
					  <view wx:if="{{v.cate==3}}" class="coupon-cate coupon-cate-c">拼团券</view> -->
					  <view class="coupon-item-top mix-bottom">
						  <view class="coupon-price">
							  <view class="coupon-price-item coupon-price-a">
								  <text class="coupon-price-icon">￥</text>
								  <text class="coupon-price-value">{{v.amount}}</text>
							  </view>
							  <view class="coupon-price-limit" v-if="v.type==1">直减</view>
							  <view class="coupon-price-limit" v-if="v.type==2">满{{v.minimum}}减{{v.amount}}</view>  
						  </view>
						  <view class="coupon-info">
							  <view class="coupon-title">{{v.name}}</view>
							   <view class="coupon-valid-time">
								 <text class="coupon-cate" v-if="v.use_range==1">#通用券</text>
							   </view>
							  <block>
								  <view class="coupon-valid-time">{{v.valid_start_time}} - {{v.valid_end_time}}</view>
							  </block>
						
						  </view>
		                 <view class="coupon-status" v-if="btnShow">
							<view @tap="useCoupon(v)"  class="coupon-btn coupon-btn-wait-a">使用</view>
						  </view>
					  </view>
					  <!-- <view class="coupon-item-bottom">搬家服务可用</view> -->

				  </view>
			  </view>
		</view>		
		
		
	</view>
</template>

<script>
	export default {
		name:'yj-coupon',
		emits:['selCoupon'],
		props:{
			list:{type:Array,default:[]},
			btnShow:{type:Boolean,default:false}
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			useCoupon(e){				
				this.$emit("selCoupon",e)
			}
		}
	}
</script>

<style>
.coupon-container{
    display: flex;
    padding: 8px;
    }
  .coupon-wrap{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .coupon-item{
    display: flex;  
    background-color: #FFFCFC;
    border-radius: 4px;
    margin-bottom: 10px;
    // padding: 20px 10px;
    position: relative;
    flex-direction: column;
    padding-right: 10px;
  }
  
  .coupon-item-top{display: flex;}
  .coupon-item-bottom{display: flex;padding: 10px;font-size: 12px;color:#333;background-color: #FEFCFC;}
  .coupon-price{display: flex;justify-content: center;align-items: center;width:140px;height:90px;background-color: #FFEEED;flex-direction: column;}
  .coupon-price-a{color: #DD2E26;}
  .coupon-price-b{color: #DD2E26;}
  .coupon-price-c{color: #DD2E26;}
  .coupon-price-item{display: flex;vertical-align:bottom;display: table-cell;}
  .coupon-price-icon{font-size: 16px;font-weight: bolder;}
  .coupon-price-value{font-size: 30px;font-weight: bolder;}
  .coupon-price-limit{font-size: 12px;}
  .coupon-info{display: flex;flex: 1;justify-content: center;align-items: center;flex-direction: column;}
  .coupon-cate{color: #dd2e26;font-size: 12px;}
  .coupon-title{font-size: 15px;color: #222;line-height: 30px;}
  .coupon-valid-time{font-size: 12px;color: #666;}
  .coupon-status{display: flex;width: 80px;justify-content: flex-end;align-items: center;}
  .coupon-btn{padding: 5px 12px;border-radius: 100px;font-size: 12px;}
  .coupon-btn-wait-a{background-color: #DD2E26;color: #fff;}
  .coupon-btn-wait-b{background-color: #DD2E26;color: #fff;}
  .coupon-btn-wait-c{background-color: #DD2E26;color: #fff;}
  .coupon-btn-default{background-color: #999;color: #fff;}

</style>
