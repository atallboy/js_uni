<template>
	<view>
		<view v-if="styleCate==1">点击上传</view>
		<view class="pic-list" v-if="styleCate==2">
			<view class="pic-item" v-for="(item,k) in uploadArr">
				<view class="delete-icon">
					<uni-icons @tap="deletePic(item,k)" type="clear" size="20"></uni-icons>					
				</view>
				<image :src="item" @click="previewImage(item,k)"></image>
			</view>
			<view class="pic-item" @tap="uploadTap">
				<image src="../../static/images/upload-1.png"></image>
			</view>
		</view>
 

	</view>
</template>

<script>
	export default {
		name:"yj-upload",
		emits:['clickUpload','clickDeletePic'],
		props:{
			styleCate:{type:Number,default:1},			
			showPic:{type:Boolean,default:true},
			picNum:{type:Number,default:1},
			picArr:{type:Array,default:[]}
		},
		data() {
			return {
				uploadIndex:0,
				uploadArr:[],
			};
		},
		mounted() {
			console.log('mounted')
			console.log(this.picArr)
		},
		watch:{
			picArr(){
				console.log('watch:picArr')
				console.log(this.picArr)
				this.uploadArr = this.picArr
			}
		},
		methods:{
			previewImage(e,k){
				console.log(e,k)
				uni.previewImage({
					urls:this.uploadArr,
					current:e
				})
			},
			deletePic(e,k){
				this.uploadArr.splice(k,1)
				this.$emit('clickDeletePic',this.uploadArr)
			},
			 uploadTap(){
				let that = this;
				let count = this.picNum-this.uploadArr.length
				console.log(count)
				uni.chooseImage({
					count:count,
					sizeType:['compressed'],
					success: (chooseImageRes) => {
						console.log('chooseImageRestempFile__')
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.showLoading()
						that.tempFileLength  =tempFilePaths.length
 
						for(let i=0;i<tempFilePaths.length;i++){							
							that.uploadIndex = i
							that.uploadPic(tempFilePaths[i])
						}
					}
				});
			 },
			 uploadPic(tempFile){
				uni.uploadFile({
					url: uni.getStorageSync('siteroot')+'/api/upload',
					filePath: tempFile,
					name: 'file',
					success: (uploadFileRes) => {
						uni.hideLoading()
 
						this.uploadArr.push(uploadFileRes.data)
						if(this.tempFileLength==(this.uploadIndex+1)){
							uni.hideLoading()
							this.$emit("clickUpload",this.uploadArr)
						}
					}
				});				
			 },	
		}
	}
</script>

<style>


.pic-list{display: flex;flex-wrap: wrap;}
.pic-item{display: flex;margin: 0 8px 8px 0;position: relative;}
.pic-item image{width: 60px;height: 60px;}
.delete-icon{position: absolute;right: 0px;top: 0px;width: 25px;height: 25px;z-index: 99;text-align: center;}

</style>