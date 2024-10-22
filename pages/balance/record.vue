<template>
	<view>

		<yj-null :showNull="list.length"></yj-null>
		
		<view class="balance-container" v-if="list.length>0">
		    <view class="balance-wrap">
		        <view class="balance-item" v-for="item in list">
		            <view class="balance-l">
		                <view class="balance-name">{{item.msg.describe}}</view>
		                <view class="balance-time">余额 {{item.after_balance}}</view>
		            </view>
		            <view class="balance-r">
		            <view class="balance-now">{{item.create_at}}</view>
		                <view class="balance-money">
		                    <text class="add" v-if="item.type==1">+{{item.money}}</text>
		                    <text class="reduce" v-if="item.type==2">-{{item.money}}</text>
		                </view>
		                
		            </view>
		        </view>
		    </view>
		</view>

	</view>
</template>

<script>
	import {balanceRecord} from '@/utils/api.js'
	export default {
		data() {
			return {
				e:{},
				list:[],
			}
		},
		onLoad(e) {
			if(e)this.e = e
			this.initData()
		},
		methods: {
			async initData(){
				const res = await balanceRecord(this.e)
				this.list = res.data.data
			}
		}
	}
</script>

<style>

.balance-container{
  display: flex;
  padding: 10px;
}
.balance-wrap{
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
}
.balance-item{
  display: flex;
  flex-direction: row;
   flex: 1;
   padding: 15px 15px 15px 0;
   border-bottom: 1rpx solid #eee;
}
.balance-l{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.balance-r{
  display: flex;
  flex-direction: column;
  width: 140px;
}
.balance-name{
  font-size: 16px;
  color: #000;
  display: flex;
  flex: 1;
}
.balance-time{
  font-size: 13px;
  color: #777;
  display: flex;
  flex: 1;

}
.balance-money{
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-top: 10px;
}
.balance-now{
  color: #777;
  font-size: 13px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-top: 10px;
}
.add{
  color:#E4AE44;
}
</style>
