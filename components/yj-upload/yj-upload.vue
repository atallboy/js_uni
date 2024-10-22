<template>
	<view>
		<view v-if="styleCate==1">点击上传</view>
		<view class="pic-list" v-if="styleCate==2">
			<view class="pic-item" v-for="(item, k) in localUploadArr" :key="k">
				<view class="delete-icon">
					<uni-icons @tap="deletePic(k)" type="clear" size="20"></uni-icons>					
				</view>
				<image :src="item" @click="previewImage(item, k)"></image>
			</view>
			<view v-if="localUploadArr.length < picNum" class="pic-item" @tap="uploadTap">
				<image src="../../static/images/upload-1.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "yj-upload",
		emits: ['clickUpload', 'clickDeletePic'],
		props: {
			styleCate: { type: Number, default: 1 },
			showPic: { type: Boolean, default: true },
			picNum: { type: Number, default: 1 },
			picArr: { type: Array, default: [] }
		},
		data() {
			return {
				uploadArr: [],  // 存储远程图片URL
				localUploadArr: [],  // 存储本地和远程混合图片URL
			};
		},
		mounted() {
			this.uploadArr = [...this.picArr];
			this.localUploadArr = [...this.picArr]; // 初始化为远程图片
		},
		watch: {
			picArr(newVal) {
				this.uploadArr = [...newVal];
				this.localUploadArr = [...newVal]; // 重新同步
			}
		},
		methods: {
			previewImage(e, k) {
				uni.previewImage({
					urls: this.localUploadArr,
					current: e
				});
			},
			deletePic(k) {
				this.localUploadArr.splice(k, 1);
				this.uploadArr.splice(k, 1);  // 删除远程图片对应的项
				this.$emit('clickDeletePic', this.uploadArr);  // 返回更新后的远程图片列表
			},
			uploadTap() {
				let that = this;
				let count = this.picNum - this.uploadArr.length;
				uni.chooseImage({
					count: count,
					sizeType: ['compressed'],
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						// 添加本地图片占位，防止重复显示
						tempFilePaths.forEach((tempFilePath) => {
							that.localUploadArr.push(tempFilePath);
						});
						// 遍历上传图片
						uni.showLoading({
							title:'图片上传中'
						})
						console.log('tpn',tempFilePaths.length)
						let l = tempFilePaths.length
						tempFilePaths.forEach((tempFilePath, index) => {
							that.uploadPic(tempFilePath, that.localUploadArr.length - tempFilePaths.length + index,l);
						});
					}
				});
			},
			uploadPic(tempFile, localIndex,l) {
				console.log(tempFile, localIndex,l)
				uni.uploadFile({
					url: uni.getStorageSync('siteroot') + '/api/upload',
					filePath: tempFile,
					name: 'file',
					success: (uploadFileRes) => {
						let remoteUrl = uploadFileRes.data;  // 远程URL
						
						// 找到本地图片的索引，并替换为远程URL
						if (localIndex !== -1) {
							this.$set(this.localUploadArr, localIndex, remoteUrl);
							this.uploadArr.push(remoteUrl);  // 同时保存到远程URL数组
						}

						// 完成上传后返回更新后的远程图片列表
						this.$emit("clickUpload", this.uploadArr);
						if(l==(localIndex+1)){uni.hideLoading()}
					}
				});
			},
		}
	}
</script>

<style>
.pic-list { display: flex; flex-wrap: wrap; }
.pic-item { display: flex; margin: 0 8px 8px 0; position: relative; }
.pic-item image { width: 60px; height: 60px; }
.delete-icon { position: absolute; right: 0px; top: 0px; width: 25px; height: 25px; z-index: 99; text-align: center; }
</style>
