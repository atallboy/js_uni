<template>
	<view>
		<view class="cont">
			<view class="item" v-for="(item,k) in list">
				<view class="info" @click="seladdr(item)">
					<view class="name">姓名：{{item.name}}</view>
					<view class="tel">{{item.tel}}</view>
				</view>
				<view class="addr mix-bottom" @click="seladdr(item)" >收货地址：{{item.province}}{{item.city}}{{item.district}} {{item.address}}（{{item.remark}}）</view>
				<view class="do-btn">
					<view class="btn" @click="edit(item.id)"> 编辑 </view>
					<view class="btn" @click="del(item.id)"> 删除</view>
				</view>
			</view>
		</view>

		<view class="add">
		  <view class="add-btn bg-color-main" @click="add">添加地址</view>
		</view>		
	</view>
</template>

<script>
	import {addressList,addressDel} from '@/utils/api.js'
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
		
		},
		onShow() {
			this.addressList()
		},
		methods: {
			async addressList(){
				const res = await addressList()
				this.list = res.data.data
			},
			edit(e){
				uni.navigateTo({
					url:'/pages/address/edit?id='+e
				})
			},
			add(){
				uni.navigateTo({
					url:'/pages/address/edit'
				})
			},
			seladdr(e){
				if(uni.getStorageSync('isSelAddress')){
					uni.removeStorageSync('isSelAddress')
					uni.setStorageSync('selAddress',e)
					uni.navigateBack()
				}
			},
			 del(e){
				uni.showModal({
					content:'确认删除吗',
					success: (res) => {
						if(res.confirm){
							this.delAddress(e)
						}
					}
				})
			},
			async delAddress(e){
				await addressDel({id:e})
				this.addressList()
			}
		} 
	}
</script>

<style>
page{
  background-color: #f7f7f7;

}
.cont{
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;  
}
.item{
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px 10px 0;
  color: #555;
  font-size: 14px;
  border-radius: 4px;
}
.info{
  display: flex;
  flex: 1;
}
.name{
  display: flex;
  flex: 1;
}
.tel{
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
.addr{
  display: flex;
  flex: 1;
  padding: 10px 0;
}
.do-btn{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px 0;
}
.btn{
  display: flex;
  width: 40px;
  justify-content: flex-end;
  align-items: center;
}
.btn image{
  width: 20px;
  height: 20px;
}

.add{
  display: flex;
  flex: 1;
  padding: 50px;
}
.add-btn{
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 100px;
  color: #fff;
  font-size: 14px;
  flex: 1;
  background-color: var(--mainColor);
}

</style>
