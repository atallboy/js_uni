<template>
	<view>
		<view class="tab-container" style="position: fixed;left: 0;right: 0;top: 0;z-index: 999;background-color: #fff;">
		  <scroll-view  scroll-x="true" :scroll-left="scrollLeft" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll"  show-scrollbar=false>
		    <view class="tab-wrap">
		      <block v-for="(v,k) in list">
		        <view @tap="changeCate(v,k)" :class="'tab-item ' + v.active "><view class="tab-txt">{{v.name}}</view><view class="tab-bar"></view></view>
		      </block>              
		    </view>
		  </scroll-view>      
		</view>
		<view style="height:45px;"></view>
	</view>
</template>

<script>
	export default {
		name:"yj-tab",
		emits:['selTab'],
		props:{
			data:{type:Array,default:[]},
			btnShow:{type:Boolean,default:false}
		},
		data() {
			return {
				scrollLeft:0,
				list:[],
			};
		},
		mounted() {
			watch:{
				data:{
					console.log('data')
					console.log(this.data)		
					this.list = this.data
				}
			}
		},

		methods:{ 
			changeCate(e,k){
				let arr = this.data;
				for(let i=0;i<arr.length;i++){
				  if(i==k){arr[i].active='tab-item-active';}
				  else{arr[i].active='';}
				}
				this.data=arr,this.page=0,this.scrollLeft=(k-1)*45   
				this.$emit("selTab",e)
			},
		}
	}
</script>

<style>

</style>