<template>
	<view>
		<view class="yj-container">

			<view class="form-textarea">
				<textarea @input="bindInput" placeholder-class="form-textarea-placeholder" auto-height
					placeholder="输入反馈内容" />
			</view>

			<view class="pic-container">
				<view class="pic-item" v-for="(item,k) in imgArr">
					<image :src="item"></image>
				</view>
				<view class="pic-item sel-btn" @click="choosePic()">
					<uni-icons type="plusempty" size="30"></uni-icons>
				</view>
			</view>

			<view class="btn-container">
				<view class="btn-item btn-confirm" @click="submit()">确定</view>
				<view class="btn-item btn-cancel" @click="navigateBack()">取消</view>
			</view>




		</view>
	</view>
</template>

<script>
	import {
		createSuggest
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				imgArr: [],
				host: '',
				content: '',
			}
		},
		onShow() {
			this.host = uni.getStorageSync('siteroot')
		},
		methods: {
			async submit() {
				if (!this.content) {
					uni.showToast({
						title: '请输入反馈内容',
						icon: 'none'
					});
					return
				}
				if (this.imgArr.length == 0) {
					uni.showToast({
						title: '请上传照片',
						icon: 'none'
					});
					return
				}
				const res = createSuggest({
					content: this.content,
					pic: this.imgArr.join('&')
				})
				uni.showToast({
					title: '提交成功'
				})
				setTimeout(function() {
					uni.navigateBack()
				}, 1500)
			},
			bindInput(e) {
				console.log(e);
				this.content = e.detail.value;
			},
			navigateBack() {
				uni.navigateBack()
			},
			choosePic() {
				let that = this;
				uni.chooseImage({
					count: 5,
					sizeType: ['compressed'],
					success: (chooseImageRes) => {
						console.log('chooseImageRestempFile__')
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.showLoading()
						that.tempFileLength = tempFilePaths.length
						console.log('tempFile__' + tempFilePaths.length)
						console.log(tempFilePaths)
						for (let i = 0; i < tempFilePaths.length; i++) {
							that.uploadIndex = i
							that.uploadPic(tempFilePaths[i])
						}
					}
				});
			},
			uploadPic(tempFile) {
				uni.uploadFile({
					url: '/api/upload',
					filePath: tempFile,
					name: 'file',
					success: (uploadFileRes) => {
						uni.hideLoading()
						console.log(uploadFileRes)
						this.imgArr.push(uploadFileRes.data)
						if (this.tempFileLength == (this.uploadIndex + 1)) uni.hideLoading()
					}
				});
			},
		}
	}
</script>

<style>
	page {
		background-color: #fff;
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
</style>