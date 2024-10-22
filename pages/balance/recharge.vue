<template>
	<view>
		<!-- <yj-nav-bar title="充值中心" toUrlType=4 titleStyle="color:#fff;" navBarStyle="background-image:linear-gradient(#38C8C0,#38B4C6);"></yj-nav-bar>	 -->

		<view class="user-info-container">
			<view class="user-info-wrap">				
				<view class="time-label">账户钱包</view>
				<view class="time-value">当前余额：{{user.balance}} <text @click="withdrawal" style="margin-left: 10px;color: blue;font-size: 14px;">提现</text> </view>
			</view>
 
		</view>		
		
		<view style="padding: 10px;margin-top: 45px;">
			<view style="background-color: #fff;">
				<view class="fast-wrap">
				   <view class="fast-wrap-label">
				       <view class="fast-wrap-label-dot"></view> 充值列表 <text> {{item.remark}}</text>
				   </view>
				   <view class="package-list">
					   <block v-for="(v,k) in list">
						   <view :class="'package-item '+v.selected"  @click="selSolution(k)">
						     <view class="price">￥{{v.amount}}</view>
						     <view class="desc" >{{v.desc}}</view>             
						   </view>
					   </block>
           
				   </view>
				</view>   
				<view class="yj-btn-wrap">
					<view @click="pay" class="yj-btn-item yj-btn-item-pay">立即支付</view>
					<!-- <view @click="useRecord" class="yj-btn-item">使用记录</view> -->
				</view>
				<view class="recharge-desc">
					<view class="fast-wrap-label">
					    <view class="fast-wrap-label-dot"></view> 充值说明
					</view>
					<view style="padding: 0 4px;">
						<view class="recharge-desc-txt">1.账户充值仅限微信在线方式支付；</view>
						<view class="recharge-desc-txt">2.充值金额实时到账</view> 
					</view>
				</view>
			</view>
		</view>
   
		<yj-ad></yj-ad>
   
	</view>
</template>

<script>
	let pay = require('../../utils/pay.js')
	import { createRechargeOrder, getUserInfo,updateOrder } from '@/utils/api.js'
	export default {
		data() {
			return {
				user:{},
				list:[
					{id:1,amount:10,desc:'充值到账10元',remark:'充值到账10元',selected:' package-item-active'},
					{id:2,amount:50,desc:'充值到账50元',remark:'充值到账50元',selected:''},
					{id:3,amount:100,desc:'充值到账100元',remark:'充值到账100元',selected:''}],
				item:{},
				btnStatus:true,
			}
		},
		onLoad() {		
			this.item = this.list[0]
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			async getUserInfo(){
				const res = await getUserInfo()
				this.user = res.data.data
			},
			withdrawal(){
			 	uni.navigateTo({
			 		url:'withdrawal'
			 	})
			},
			async pay(){
				// uni.showToast({title: '支付通道暂时关闭',icon: 'none'});return;
				if(!this.btnStatus)return;
				this.btnStatus = false
				uni.showLoading()
				const res = await createRechargeOrder({recharge_id:this.item.id,money:this.item.amount})	
				this.btnStatus = true
				uni.hideLoading()
				console.log(res)	
				pay.toPay(res.data.data,{cate:'recharge'})
				return ;

			},
			selSolution(k){
				let llljweixin = require('jweixin-module');
				console.log(llljweixin)
				console.log(k)
				for(let i=0;i<this.list.length;i++){
					if(k!=i){
						this.list[i].selected='';
					}else{
						this.item = this.list[i]
						this.list[i].selected=' package-item-active';
					}
				}
			},
		}
	}
</script>

<style>

	.user-info-container{position: relative;background-image: linear-gradient(#38B4C6,#38A6CB);height: 60px;}
	.user-info-wrap{position: absolute;top: 15px;left: 10px;right: 10px;padding: 0 10px; background-color: #fff;display: flex;flex-direction: column; height: 90px;justify-content: center;border-radius: 4px;background-image: url('https://cshop.zmand.com/uploads/20230523/ed3388661b549bd2e0b214a55ab713f8.png');background-repeat: no-repeat;background-size: 100% 100%;}
	.time-label{color: #224361;font-size: 14px;line-height: 20px;}
	.time-value{color: #214260;font-size: 16px;line-height: 22px;font-family: PingFangSC-Medium, PingFang SC;font-weight: 600;}

.fast-wrap{padding: 10px 10px 0;}
.fast-wrap-label{display: flex;align-items: center;padding: 10px 0;font-size: 14px;font-weight: 600;color: #214361;}
.fast-wrap-label text{color: #91A3B7;}
.fast-wrap-label-dot{display: flex;width: 4px;height: 12px;background-color: var(--mainColor);margin-right: 10px;border-radius: 100px;}
.fast-list{display: flex;flex-wrap: wrap;}
.fast-item-wrap{display: flex;width: 25%;}
.fast-item{width: 90%;text-align: center; padding: 8px 0;border: 1rpx solid #E3E3E3;border-radius: 1px;color: #333;margin-right: 15px;margin-bottom: 15px;}
.fast-item-active{color: var(--mainColor);border: 1rpx solid var(--mainColor);} 

.package-list{display: flex;flex-wrap: wrap;justify-content: space-between;}
.package-item{display: flex;width: 100px;height: 70px ;align-items: center;justify-content: center; flex-direction: column;border: 1px solid #91A4B7;border-radius: 8px;margin-bottom: 10px;}
.price{font-weight: 700;font-size: 16px;font-weight: bold;color: var(--mainColor);}
.desc{color: #214361;font-size: 12px;margin-top: 5px;}
.package-item-active{border: 1px solid var(--mainColor);}
/* .package-item-active .price{color:#fff;}
.package-item-active .desc{color:#eee;}	 */
	
	.yj-btn-wrap{display: flex;justify-content: space-around;padding: 30px 0;}
	.yj-btn-item{display: flex;width: 140px;height: 40px;border-radius: 100px;align-items: center;justify-content: center;border: 1px solid var(--mainColor);color: var(--mainColor);font-size: 14px;}
	.yj-btn-item-pay{background-color: var(--mainColor);color: #fff;}
	.recharge-desc{padding: 0 10px 50px;}
	.recharge-desc-txt{
			font-size: 14px;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: #91A4B7;
			line-height: 22px;
			}
	
	

	
</style>
