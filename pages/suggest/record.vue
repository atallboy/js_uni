<template>
	<view>
		<view class="tab-container" style="position: fixed;left: 0;right: 0;top: 0;z-index: 999;background-color: #fff;">
		  <scroll-view  scroll-x="true" :scroll-left="scrollLeft" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll"  show-scrollbar=false>
		    <view class="tab-wrap">
		      <block v-for="(v,k) in cate">
		        <view @click="changeCate(v,k)" :class="'tab-item ' + v.active "><view class="tab-txt">{{v.name}}</view><view class="tab-bar"></view></view>
		      </block>              
		    </view>
		  </scroll-view>      
		</view>
		<view style="height:45px;"></view>
		
		<view v-if="!list[0]" style="text-align: center;padding-top: 100px;">
			<image src="../../static/images/null.png" style="width: 200px;height: 200px;"></image>
		</view>
		
		<view class="wrap">
			<view class="item" v-for="item in list">
				<view class="info">
					<view class="content">{{item.content}}</view>
					<view class="status" v-if="item.status==0">待处理</view>
					<view class="status" v-if="item.status==1">处理中</view>
					<view class="status" v-if="item.status==2">已处理</view>
				</view>
				
				<view class="pic-wrap">
					<view class="pic-item" v-for="v in item.picArr" @click="previewPic(v,item.picArr)">
						<image :src="v"></image>
					</view>
				</view>
				<view class="time">提交时间：{{item.create_at}}</view>
				<view class="deal mix-top" v-if="item.status==2">
					<view class="deal-msg">平台回复：{{item.remark}}</view>
					<view class="deal-time">{{item.update_at}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {suggestList} from '@/utils/api.js'
import { pid } from 'process'
	export default {
		data() {
			return {
				cate:[
					{id:'',active:'tab-item-active',name:'全部'},
					{id:0,active:'',name:'待处理'},
					{id:1,active:'',name:'处理中'},
					{id:2,active:'',name:'已处理'},
					// {id:4,active:'',name:'已关闭'},
				],
				status:'',
				list:[],
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			previewPic(src,arr){
				uni.previewImage({
					urls:arr,
					current:src
				})
			},
			async initData(){
				const res = await suggestList({status:this.status})
				this.list = res.data.data
			},
			changeCate(e,k){
				this.cate_id = e.id;
				let arr = this.cate;
				for(let i=0;i<arr.length;i++){
				  if(i==k){arr[i].active='tab-item-active';this.status = arr[i].id}
				  else{arr[i].active='';}
				}
				this.cate=arr,this.page=0
				this.initData()
			},
		}
	}
</script>

<style>

.wrap{padding: 10px;}
.item{background-color: #fff;border-radius: 6px;padding: 10px;margin-bottom: 10px;}
.info{display: flex;}
.content{display: flex;flex: 1; margin-bottom: 10px;}
.status{display: flex;width: 60px;justify-content: flex-end;}
.pic-wrap{display: flex;}
.pic-item{display: flex;width: 80px;height: 80px;margin: 0 10px 10px 0;}
.pic-item image{width: 80px;height: 80px;}
.time{color: #666;font-size: 13px;margin-bottom: 10px;}
.deal{padding: 10px 0;}
.deal-msg{color: royalblue;}
.deal-time{color: #666;font-size: 13px;margin-top: 10px;}


</style>
