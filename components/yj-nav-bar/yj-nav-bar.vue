<template>
	<view>
		<view class="yj-nav-bar" :style="style">
			<!-- <view class="status_bar"></view> -->
			<view class="yj-nav-bar-status" style="height: 47px;"></view>
			<view class="yj-nav-bar-wrap" style="height: 40px;">
				<view class="yj-nav-bar-left" @click="toWhere"> 
					<view class="yj-nav-left-icon">
						<uni-icons v-if="leftBtn=='back'" type="back" size="24" :color="leftIconColor"></uni-icons>
					</view>
				</view>
				<view class="yj-nav-bar-title" :style="titleStyle">{{title}}</view>
				<view class="yj-nav-bar-right"></view>
			</view>
		</view>
		<view style="width: 100%;height: 87px;"></view>
		
		
	</view>
</template>

<script>
	export default {
		props:{
			title:{type:String,default:''},
			titleStyle:{
				type:String,
				default:'',
			},
		    navBarStyle:{
				type:String,
				default:''
			},
			leftBtn:{
				type:String,
				default:'back',
			},
			leftIconColor:{
				type:String,
				default:'#fff',
			},
			toUrl:{
				type:String,
				default:''
			},
			toUrlType:{
				type:Number,
				default:1
			},
		},
		data() {
			return {
				style:'',
			}
		},
		created() {	
			this.style = this.navBarStyle;
			// this.style+=''
		},
		methods: {
			toWhere(){
					if(this.toUrlType==1){uni.navigateTo({url:this.toUrl})}
					else if(this.toUrlType==2){}
					else if(this.toUrlType==4){uni.navigateBack()}
			},
		}
	}
</script>

<style>
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
		background-color: aquamarine;
    }
	.yj-nav-bar{background-color: #fff;position: fixed;left: 0;right: 0;top: 0;z-index: 99;}
	.yj-nav-bar-status{}
	.yj-nav-bar-wrap{display: flex;padding: 0 10px;}
	.yj-nav-bar-left{display: flex;width: 90px;align-items: center;}
	.yj-nav-left-icon{}
	.yj-nav-bar-title{display: flex;flex: 1;align-items: center;justify-content: center;font-size: 16px;}
	.yj-nav-bar-right{display: flex;width: 90px;align-items: center;justify-content: center;}

	
	
</style>
