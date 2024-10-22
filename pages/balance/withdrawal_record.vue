<template>
	<view>
		<yj-null :showNull="list.length"></yj-null>
		<view class="record-container">
			<view class="record-wrap">
				<view class="record-item" v-for="item in list">
					<view class="record-info">
						<view class="record-type">支付宝提现 
						 <text v-if="item.status==0">审核中</text>
						 <text v-if="item.status==1">提现成功</text>
						 <text v-if="item.status==2">已拒绝</text>
						 </view>
						<view class="record-cate"  >手机号：{{item.tel}}</view>
						<view class="record-cate"  >支付宝帐号：{{item.zfb_account}}</view>
						<view class="record-cate">提现时间：{{item.create_at}}</view>
						<view class="record-cate" v-if="item.status!=0">审核时间：{{item.update_at}}</view>
						<view class="record-cate" v-if="item.status!=0">审核说明：{{item.remark}}</view>
					</view>
					<view class="record-money">
						{{item.money}}
					</view>
				</view>
			</view>
		</view>		
		
	</view>
</template>

<script>
	import {withdrawalRecord} from '@/utils/api.js'
	export default {
		data() {
			return {
				list:[],
			}
		},
		onShow() {
			this.getWithdrawalRecord()
		},
		methods: {
			async getWithdrawalRecord() {
				const res = await withdrawalRecord()
				this.list = res.data.data
			},
		}
	}
</script>

<style>


page{
  background-color: #f7f7f7;
}


.record-container{
  display: flex;
  padding: 10px;
}
.record-wrap{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.record-item{
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  border-radius: 2px;
  margin-bottom: 10px;
}
.record-info{
  display: flex;
  flex: 1;
  flex-direction: column;
}
.record-type{
  display: flex;
  padding: 6px 0;
  align-items: center;
}
.record-type text{
  margin-left: 10px;
  font-size: 12px;
  padding: 0 10rpx;
  border-radius: 20px;
  color: #ff4544;
  border: 1px solid #ff4544;
}

.record-cate{
  display: flex;
  font-size: 13px;
  color: #555;
  padding: 4px 0;
}

.record-money{
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: flex-end; 
  font-size: 18px;
  font-weight: 700;
}



</style>
