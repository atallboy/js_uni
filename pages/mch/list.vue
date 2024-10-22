<template>
	<view>
		<yj-tab :data="tab" @selTab="selTab"></yj-tab>
		<view class="mch-list-container">
			<view class="mch-list-wrap">
				<view class="mch-list-item" v-for="item in list" @click="detail(item.id)">
					<view class="mch-list-item-store-pic">
					  <image :src="item.pic">
				      <view class="mch-location">
						  <uni-icons type="location-filled" color="#fff" size="13"></uni-icons> {{item.distance}}
					  </view>
					</view>
					<view class="mch-list-item-store-name">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mchList} from '@/utils/api.js'
	export default {
		data() {
			return {
				tab:[{id:'nearby',name:'附近',active:' tab-item-active'},{id:'recommend',name:'推荐',active:''}],
				list:[],
				condition:{},
			}
		},
		onLoad() {
			this.mch()
			this.getLocation()
		},
		methods: {
			detail(e){
				uni.navigateTo({
					url:'/pages/mch/detail?id='+e
				})
			},
			selTab(e){
				console.log(e)
				this.condition.cate_id=e.id
				this.mch()
			},
			async mch(){
				this.condition.latitude = uni.getStorageSync('location').latitude
				this.condition.longitude = uni.getStorageSync('location').longitude				
				const res = await mchList(this.condition)
				this.list = res.data.data
			},
			getLocation(){
				console.log('获取当前位置');
				uni.getLocation({
					type: 'wgs84',
					success:  (res)=> {
						uni.setStorageSync('location',res)
						this.mch()
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					},
					fail:function(res){
						console.log(res);
					}
				});
			
			},
		}
	}
</script>

<style>
.mch-list-container{}
.mch-list-wrap{display:flex;flex-wrap:wrap;padding:4vw 0;}
.mch-list-item{display:flex;width:44vw;flex-direction:column;background-color:#fff;margin-left:4vw;margin-bottom:4vw;}
.mch-list-item-store-pic{display:flex;height:47vw;border-radius:6px;position: relative;}
.mch-list-item-store-pic image{width:100%;height:100%;border-top-left-radius:6px;border-top-right-radius:6px;}
.mch-location{position: absolute;left: 10px;bottom: 10px;background-color: #535458;color: #fff;font-size: 10px;padding: 3px 5px;border-radius: 100px;}
.mch-list-item-store-name{display:flex;line-height:16px;padding: 5px 0; align-items:center;justify-content:center;font-weight:600;}


</style>
