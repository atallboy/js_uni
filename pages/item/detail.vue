<template>
		
	<view>
		
		<view style="position: fixed;left: 0;right: 0;bottom: 0;z-index: 9999;background-color: #fff;padding: 8px 0;display: flex;">
			<view @click="master()" style="display: flex;flex: 1;align-items: center;justify-content: center;padding: 0 10px;">
				<view class="main-bg-color" style="width: 100%;height: 38px;line-height: 38px;color: #fff;border-radius: 100px;text-align: center;">选择技师</view>
			</view>					
		</view>
		
		<view class="banner-container">
			<uni-swiper-dot :info="picArr" :current="current" field="content">
				<swiper class="swiper-box" @change="bannerChange" style="height: 250px;">
					<swiper-item v-for="(item ,index) in picArr" :key="index">
						<view class="swiper-item" style="width: 100%;height: 100%;">
							<image :src="item" style="width: 100%;height: 100%;"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>	
		
		
		<view style="background-color: #fff;padding: 15px 10px;margin-bottom: 10px;">
			<view style="color: #000;font-weight: 700;font-size: 14px;margin-bottom: 13px;">{{data.name}}</view>	
			<view style="display: flex;">
				<view style="display: flex;flex: 1;align-items: flex-end;">
					<text style="color: #EF1224;font-size: 20px;margin-right: 3px;font-weight: 700;">￥{{data.price}}</text>
				</view>
				<view style="display: flex;width: 150px;align-items: flex-end;justify-content: flex-end;color: #666;">已销售 <text style="margin: 0 4px;">{{data.real_sale+data.base_sale}}</text> 件 </view>				
			</view>					
		</view>
		
		<view style="padding-bottom: 80px;">
			<view style="text-align: center;color: #000;font-weight: 600;">项目介绍</view>
			<view>
				<mp-html :content="data.detail" />
			</view>
		</view>
		
	</view>
</template>

<script>
	import {itemDetail} from '@/utils/api.js'
	export default {
		data() {
			return {
				id:0,
				user:{},
				data:{},
				picArr:[],
				current:0,
			}
		},
		onLoad(e){
			this.id = e.id;
		},
		onShow() {			
			this.itemDetail();
		},
		methods: {
			async itemDetail(){
				const res = await itemDetail({id:this.id})
				this.data = res.data.data
				this.picArr = [res.data.data.pic]
			},
			goHome(){uni.switchTab({url:'/pages/index/index'})},
			bannerChange(e){},
			master(){
				uni.showLoading()
				uni.setStorageSync('selItem',[this.data])
				setTimeout(function(){
					uni.switchTab({url:'/pages/master/list'})
					uni.hideLoading()
				},500)				
			},
			getIntegralProductDetail(){  
				uni.request({
					url: uni.getStorageSync('siteroot')+'getIntegralProductDetail',		
					data: {
						i:uni.getStorageSync('i'),
						token:uni.getStorageSync('token'),
						id:this.id,
					},
					success: (res) => { 
						this.data = res.data.data
					}
				});					
			},
			getUserInfo() {
				uni.request({
					url: uni.getStorageSync('siteroot') + 'getUserInfo',
					data: {
						i: uni.getStorageSync('i'),
						token: uni.getStorageSync('token'),
					},
					success: (res) => {
						console.log(res.data);
						this.user = res.data.data
					}
				});
			},						
		}
	}
</script>

<style>

</style>
