<template>
	<view class="_page" style="padding-bottom: 50px;">
		<view class="banner">
			<image  src="https://cshop.zmand.com/uploads/20230724/0d7eef61eaf00954a1cae635dd092004.png"></image>
		</view>
		<form @submit="submit">
			<view class="yj-radius-form">
				<view class="yj-form-main">
					<view class="yj-radius-form-item">
	<!-- 					<view class="yj-radius-form-icon">
							<image src="../../static/images/form-account.png"></image>
						</view> -->
						<view class="yj-radius-form-label">姓名</view>						
						<view class="yj-radius-form-input">
							<input type="text" name="name" value="" placeholder="请输入姓名" placeholder-class="yj-radius-form-input-placeholder" />
						</view>
	<!-- 					<view class="yj-radius-form-tip">
							<image src="../../static/images/k-2.png"></image>
						</view> -->
					</view>
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							性别
						</view>		
						<view class="yj-radius-form-input">
							<radio-group @change="selGender">
								<radio value="2" :checked="formData.gender==2"><text>女</text></radio>
								<radio value="1" :checked="formData.gender==1"><text>男</text> </radio>								
							</radio-group>
						</view>
					</view>
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							电话
						</view>					
						<view class="yj-radius-form-input">
							<input type="number" name="tel" value="" placeholder="请输入电话" placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							年龄
						</view>					
						<view class="yj-radius-form-input">
							<input type="number" name="age" value="" placeholder="请输入年龄" placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>		
								
					<picker mode="region" :value="formData.region" @change="bindRegionChange">
						<view class="yj-radius-form-item">
							<view class="yj-radius-form-label">
								所在城市
							</view>	
							<view class="yj-radius-form-input">
								<input type="text" name="region" :value="formData.province+formData.city+formData.district" disabled placeholder="所在城市" placeholder-class="yj-radius-form-input-placeholder" />
							</view>
							<view class="yj-radius-form-tip">
								<uni-icons type="forward" size="15"></uni-icons>
							</view>
						</view>	
					</picker>									
								
						
				</view>
				<view style="display: flex;background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="display: flex;flex: 1;flex-direction: column;">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">请上传本人近期照</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">图片不得超过2M</view>
					</view>
					<view @click="choosePic" style="display: flex;width: 170px;justify-content: flex-end;">
						<view v-if="formData.pic">
							<image style="width: 140px;height: 97px;" :src="formData.pic"></image>
						</view>
						<view v-else>
							<image style="width: 140px;height: 97px;" src="../../static/images/addimg.png"></image>
						</view>						
					</view>
				</view>
			</view>
			<view class="yj-btn-container">
				<button class="yj-radius-form-btn" form-type="submit">提交</button>
			</view>
		</form>


	</view>
</template>

<script>
	import { masterEdit,masterDetail } from '@/utils/api.js'
	export default {
		data() {
			return {
				e:{},
				host:'',
				// 表单数据
				formData: {
					name: '',
					email: '',
					gender:2,
					pic:'',
					region:[],
					province:'',
					city:'',
					district:'',
				},
			}
		},
		onLoad(e) {
			this.e = e
			this.host = uni.getStorageSync('siteroot')
		},
		onShow(){
			this.logo = uni.getStorageSync('setting').logo
		},
		methods: {
	
			async submit(e) {

				console.log(e);
				if(!e.detail.value.name){uni.showToast({title:'请输入姓名',icon:'none'});return ;}
				if(!e.detail.value.tel){uni.showToast({title:'请输入电话',icon:'none'});return ;}
				if(!e.detail.value.age){uni.showToast({title:'请输入姓名',icon:'none'});return ;}
				if(!this.formData.pic){uni.showToast({title:'请上传照片',icon:'none'});return ;}
				e.detail.value.gender = this.formData.gender
				e.detail.value.pic = this.formData.pic
				e.detail.value.province = this.formData.province
				e.detail.value.city = this.formData.city
				e.detail.value.district = this.formData.district
				e.detail.value.cate = 3
				const res = await masterEdit(e.detail.value)	
				uni.showModal({
					content:'提交成功,请等待工作人员与您联系',
					showCancel:false,
					success() {
						uni.navigateBack()
					}
				})
			},
			selGender(e){
				console.log(e)
				this.formData.gender = e.detail.value
			},
			bindRegionChange(e){
				console.log(e)
				this.formData.province=e.detail.value[0]
				this.formData.city=e.detail.value[1]
				this.formData.district=e.detail.value[2]
			},
			choosePic(){
				let that = this;
				uni.chooseImage({
					count:1,
					sizeType:['compressed'],
					success: (chooseImageRes) => {
						console.log('chooseImageRestempFile__')
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.showLoading()
						that.tempFileLength  =tempFilePaths.length
						console.log('tempFile__'+tempFilePaths.length)
						console.log(tempFilePaths)
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
						console.log(uploadFileRes)
						this.formData.pic= uploadFileRes.data
						if(this.tempFileLength==(this.uploadIndex+1))uni.hideLoading()
					}
				});				
			},			
		}
	}
</script>

<style lang="less">
	page{background-color: rgb(252,110,171);}
	.banner {
		width: 100%;
		height: 200px;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}
	
	.logo{padding: 30px;text-align: center;background-color: rgb(38,193,116);}
	.logo image{width: 50px;height: 50px;border-radius: 100px;}
	
	.yj-radius-form {padding: 20px 20px;}
	.yj-form-main{background-color: #fff;padding: 12px;border: 2px solid #555; border-radius: 10px;}
	.yj-radius-form-item {display: flex;border-radius: 10px;margin-bottom: 15px;padding: 6px 0;background-color: #fff;border: 2px solid var(--mainColor);padding-right: 20px;}
	.yj-radius-form-icon {display: flex;width: 50px;align-items: center;justify-content: center;}
	.yj-radius-form-icon image {width: 20px;height: 20px;}
	.yj-radius-form-label{display: flex;width: 100px;align-items: center;font-size: 15px;color: rgb(138, 138, 138);text-indent: 10px;}
	.yj-radius-form-input{display: flex;flex: 1;}
	.yj-radius-form-input input{width: 100%;height: 30px;color: #000;text-align: right;}
	radio-group{display: flex;flex: 1;justify-content: flex-end;}
	radio{transform: scale(0.7);margin-left: 10px;}
	radio text{font-size: 18px;font-weight: 600;margin-left: 5px;}
	.yj-radius-form-input-placeholder{font-size: 13px;font-weight: 700;color: #000;}
	.yj-radius-form-tip {display: flex;width: 50px;align-items: center;justify-content: center;display: none;}
	.yj-radius-form-tip image{width: 20px;height: 20px;}
	.yj-radius-form-btn{
		// line-height: 40px;border-radius: 100px;color: #fff;background-image: linear-gradient(to right,rgb(0,118,234),rgb(1,238,99));
		    margin: 26px auto 41px;
		    width: 323px;
		    height: 49px;
			line-height: 40px;
		    background: var(--mainColor);
		    border: 3px solid #000;
		    opacity: 1;
		    border-radius: 50px;
		    font-size: 18px;
		    font-weight: 600;
		    color: #fff;		
		}
</style>