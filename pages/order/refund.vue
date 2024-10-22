<template>
  <view class="refund-page">
<!--    <view class="refund-header">
      <text class="title">申请退款</text>
    </view> -->
    <form @submit="submit">
		<view class="refund-form">
		  <!-- Refund Amount -->
		  <view class="form-item">
			<text class="label">退款金额</text>
			<input class="input" type="decimal" name="money" placeholder="请输入退款金额" />
		  </view>

		  <!-- Refund Reason -->
		  <view class="form-item">
			<text class="label">退款理由</text>
			<textarea class="textarea" name="reason" placeholder="请输入退款理由"></textarea>
		  </view>

		  <!-- Upload Image -->
	<!--      <view class="form-item">
			<text class="label">上传凭证</text>
			<button class="upload-btn">上传图片</button>
		  </view> -->
		</view>

		<!-- Submit Button -->
		<view class="submit-section">
		  <button class="submit-btn" form-type="submit">提交申请</button>
		</view>		
	</form>

  </view>
</template>
<script>
	import {orderDo} from '@/utils/api.js'
	export default {
		data() {
			return {
				e:{},
				list:[],
			}
		},
		onLoad(e) {
			this.e = e
		},
		onShow() {

		},
		methods: {
			async submit(e) {
				console.log(e)
				if (!e.detail.value.money) {uni.showToast({title: '请输入退款金额',icon: 'none'});return;}
				e.detail.value.id = this.e.order_id
				e.detail.value.op = 'refund'
				uni.showLoading()
				const res = await orderDo(e.detail.value)
				uni.showToast({title: '提交成功，请等待平台处理'})
				setTimeout(function() {uni.navigateBack()}, 1500)
			},
		}
	}
</script>
<style>
.refund-page {
  background-color: #f5f5f5;
  padding: 20rpx;
}

.refund-header {
  text-align: center;
  margin-bottom: 40rpx;
}

.title {
  font-size: 36rpx;
  color: #333;
  font-weight: bold;
}

.refund-form {
  background-color: #fff;
  padding: 30rpx;
  border-radius: 10rpx;
  box-shadow: 0 2rpx 20rpx rgba(0, 0, 0, 0.1);
}

.form-item {
  margin-bottom: 30rpx;
}

.label {
  font-size: 30rpx;
  color: #666;
  margin-bottom: 10rpx;
  display: block;
}

.input, .textarea {
  width: 90%;
  padding: 20rpx;
  border-radius: 8rpx;
  border: 1rpx solid #ddd;
  font-size: 28rpx;
  color: #333;
  margin: 0 auto;
}

.textarea {
  height: 200rpx;
}

.upload-btn {
  display: block;
  padding: 20rpx;
  border-radius: 8rpx;
  background-color: #f0f0f0;
  text-align: center;
  color: #999;
  font-size: 28rpx;
}

.submit-section {
  text-align: center;
  margin-top: 40rpx;
  padding-top: 50px;
}

.submit-btn {
  width: 80%;
  padding: 20rpx 0;
  border-radius: 50rpx;
  background-color: #42b983;
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
  box-shadow: 0 4rpx 20rpx rgba(66, 185, 131, 0.3);
  margin: 0 auto;}
.refund-page {  
  background-color: #f9f9f9; /* 稍浅的灰色背景 */  
}  
  
.title {  
  font-family: 'Arial', sans-serif; /* 使用更通用的字体 */  
  color: #42b983; /* 标题使用主色调绿色 */  
}  
  
.refund-form {  
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05); /* 更轻柔的阴影 */  
}  
  
.label {  
  color: #555; /* 稍微深一点的灰色 */  
}  
  
.input, .textarea {  
  border-color: #ccc; /* 更淡的边框色 */  
  transition: border-color 0.3s ease; /* 添加边框颜色变化的过渡效果 */  
}  
  
.input:focus, .textarea:focus {  
  border-color: #42b983; /* 聚焦时边框变为绿色 */  
}  
  
.upload-btn {  
  background-color: #e0e0e0; /* 浅灰色背景 */  
  color: #333; /* 深色文字 */  
  transition: background-color 0.3s ease; /* 添加背景色变化的过渡效果 */  
}  
  
.upload-btn:hover {  
  background-color: #d0d0d0; /* 鼠标悬停时背景色变深 */  
}  
  
.submit-btn {  
  background-color: #3ba876; /* 更深的绿色 */  
  box-shadow: 0 6rpx 20rpx rgba(60, 170, 118, 0.4); /* 更明显的阴影 */  
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */  
  cursor: pointer; /* 显示鼠标手形图标 */  
}  
  
.submit-btn:hover {  
  background-color: #35956b; /* 鼠标悬停时背景色变深 */  
  box-shadow: 0 8rpx 20rpx rgba(53, 149, 107, 0.5); /* 阴影变深 */  
}  
</style>
