<template>
	<view>
		<view class="yj-container">

			<!-- <view style="padding: 10px;color: firebrick;">可上传相关照片，比如抵达客户附近位置的地标照片等，以证明您提供服务的真实性</view> -->

<!-- 			<view class="pic-container">
				<view class="pic-item" v-for="(item,k) in imgArr">
					<image :src="host+item"></image>
				</view>
				<view class="pic-item sel-btn" @click="uploadImage()">
					<uni-icons type="plusempty" size="30"></uni-icons>
				</view>
			</view> -->
			


				<view
					style="background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-input" style="height: auto;padding-left: 10px;">
							<textarea name="remark" @input="inputRemark" value="" style="width: 100%;" placeholder-style="font-size:15px;color:#8a8a8a;font-weight:normal;" placeholder="在这里输入相关备注"/>
						</view>
					</view>		
					
					<view style="">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">上传照片</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">可上传相关照片，比如出发、抵达、开始服务、完成服务等照片，有利于您保障自身权益</view>
					</view>
					<view style="display: flex;padding-top: 10px;flex-wrap: wrap;">
						<yj-upload :styleCate="2" :picArr="imgArr" :picNum="6" :showPicType=2
							@clickUpload="uploadPic" @clickDeletePic="clickPic"></yj-upload>
					</view>
				</view>

			<view class="btn-container">
				<view class="btn-item btn-confirm" @click="submit()">{{e.title}}</view>
<!-- 				<view class="btn-item btn-confirm" @click="submit('arrival')" v-if="e.op=='arrival'">技师到达</view>
				<view class="btn-item btn-confirm" @click="submit('serviceStart')" v-if="e.op=='serviceStart'">开始服务</view>
				<view class="btn-item btn-confirm" @click="submit('serviceComplete')" v-if="e.op=='serviceComplete'">服务完成</view> -->
				
				<view class="btn-item btn-cancel" @click="navigateBack()">返回</view>
			</view>



		</view>

	</view>
</template>

<script>
	import {orderDo} from '@/utils/api.js'
	export default {
		data() {
			return {
				e:{},
				imgArr: [],
				host: '',
				content: '',
				formData: {
					i: uni.getStorageSync('i'),
					token: uni.getStorageSync('token'),

				},
				remark:'',
			}
		},
		onLoad(e) {
			this.e = e
			uni.setNavigationBarTitle({
				title:e.title
			})
		},
		onShow() {
			this.host = uni.getStorageSync('siteroot')
		},
		methods: {
			inputRemark(e){
				this.remark = e.detail.value
			},
			async submit() {
				let that = this;
				let pic = this.imgArr.join('&')
				await orderDo({'op':this.e.op,'id':this.e.id,'pic':pic,remark:this.remark})
				uni.showToast({title: '保存成功'})
				setTimeout(function() {uni.navigateBack()}, 1500)
			},
			uploadPic(e) {
				this.imgArr = e
			},
			clickDeletePic(e) {
				this.imgArr = e
			},
			bindInput(e) {
				console.log(e);
				this.content = e.detail.value;
			},
			navigateBack() {
				uni.navigateBack()
			},
			uploadImage() {
				let that = this;
				uni.chooseImage({
					count: 9,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePaths = (res.tempFilePaths)
						uni.showLoading();
						for (var i = 0; i < tempFilePaths.length; i++) {
							that.batchUpl(tempFilePaths[i], i, tempFilePaths.length);
						}
					}
				})
			},

			uploadVideo(e) {
				let that = this;
				let k = e.currentTarget.dataset.k;
				let v = e.currentTarget.dataset.v;

				wx.chooseVideo({
					count: 1,
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePath = res.tempFilePath
						console.log(tempFilePath)
						wx.showLoading();
						that.batchUpl(tempFilePath, 0, 1, k, v);
					}
				})
			},
			batchUpl(e, i, l) {
				console.log('tempFilePaths[i]')
				console.log(e)
				let that = this;
				var url = uni.getStorageSync('siteroot') + "/uploadFile?i=" + uni.getStorageSync('i');
				uni.uploadFile({
					url: url,
					filePath: e,
					name: 'file',
					formData: {
						return_type: 'id'
					},
					success(res) {
						console.log(res.data)
						let arr = JSON.parse(JSON.stringify(that.imgArr))
						arr.push(res.data)
						that.imgArr = arr;
						// console.log(arr)
						// console.log(this.field_list)
						if ((i + 1) == l) {
							uni.hideLoading();
						}
					}
				})
			},
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
	button{
		width: 90%;
		height: 40px;
		border-radius: 100px;
		line-height: 40px;
		font-size: 15px;
	}
	.yj-container {
		padding: 10px;
	}

	.form-textarea {
		padding: 10px;
		padding: 10px;
		border-radius: 4px;
		background-color: rgb(242, 247, 248);
	}

	.form-textarea textarea {
		min-height: 100px;
		width: 100%;
	}

	.form-textarea .form-textarea-placeholder {
		font-size: 13px;
	}

	.pic-container {
		padding: 10px 0;
		display: flex;
		flex-wrap: wrap;
	}

	.pic-container .pic-item {
		display: flex;
		width: 27vw;
		height: 27vw;
		border-radius: 4px;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	.pic-container .pic-item image {
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}

	.pic-container .sel-btn {
		background-color: rgb(242, 247, 248);
		align-items: center;
		justify-content: center;
	}

	.btn-container {
		padding: 50px 10px 0;
	}

	.btn-item {
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 42px;
		font-weight: 600;
	}

	.btn-confirm {
		background-color: var(--mainColor);
		color: #fff;
		margin-bottom: 30px;
	}

	.btn-cancel {
		background-color: rgb(242, 247, 248);
		color: #444;
	}

	.yj-footer {
		margin-top: 50px;
		display: flex;
		color: #bbb;
		padding: 10px 30px 50px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.yj-footer-title {
		display: flex;
		align-items: center;
		height: 30px;
	}

	.yj-footer-blk {
		display: flex;
		flex: 1;
	}

	.yj-footer-blk-line {
		width: 50px;
		height: 1px;
		background-color: #f1f1f1;
	}

	.yj-footer-title-txt {
		display: flex;
		padding: 0 20px;
	}

	.yj-footer-desc {
		font-size: 11px;
		margin-top: 10px;
	}

	.daka-box {
		padding: 40rpx;
	}

	.ydq-title {
		text-align: center;
		padding: 20rpx;
		font-size: 30rpx;
	}
</style>