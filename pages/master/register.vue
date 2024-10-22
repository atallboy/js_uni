<template>
	<view class="_page" style="padding-bottom: 50px;">
		<view class="banner" v-if="register_top_pic">
			<image :src="register_top_pic"></image>
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
							<input type="text" name="name" value="" placeholder="请输入姓名"
								placeholder-class="yj-radius-form-input-placeholder" />
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
							<input type="number" name="tel" value="" placeholder="请输入电话"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							年龄
						</view>
						<view class="yj-radius-form-input">
							<input type="number" name="age" value="" placeholder="请输入年龄"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>

					<view class="yj-radius-form-item"  @click="selAddr">
						<view class="yj-radius-form-label">
							地址
						</view>
						<view class="yj-radius-form-input" style="justify-content: flex-end;min-height: 30px;align-items: center;font-size: 13px;font-weight: 700;color: #000;height: auto;">
								{{formData.address}}
						</view>
						<view class="yj-radius-form-tip">
							<uni-icons type="forward" size="15"></uni-icons>
						</view>
					</view>
<!-- 					<view class="yj-radius-form-item" v-if="formData.province">
						<view class="yj-radius-form-label">
							详细地址
						</view>
						<view class="yj-radius-form-input">
							<input type="text" name="address" :value="formData.address" placeholder="请输入详细地址"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view> -->

					<view class="yj-radius-form-item">
						<view class="yj-radius-form-input" style="height: auto;padding-left: 10px;">
							<textarea name="desc" style="width: 100%;" placeholder-style="font-size:15px;color:#8a8a8a;font-weight:normal;" placeholder="在这里输入自我介绍"/>
						</view>
					</view>

				</view>
				
				<view
					style="background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">服务项目</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">请选择所能提供的服务项目</view>
					</view>
					<view style="display: flex;padding-top: 10px;flex-wrap: wrap;">
						<checkbox-group style="width: 100%;" @change="selItem">
							<view style="display: flex;flex-wrap: wrap;font-size: 12px;">
								<view  v-for="item in item_list" style="display: flex;width: 50%;margin-bottom: 8px;">
									<label>
										<checkbox :value="item.id" />{{item.name}}
									</label>
								</view>
							</view>
						</checkbox-group>
					</view>
				</view>
				
				
				<view
					style="background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">本人近期照</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">图片不得超过2M，最多不超过9张</view>
					</view>
					<view style="display: flex;padding-top: 10px;flex-wrap: wrap;">
						<yj-upload :styleCate="2" :picArr="formData.picArr" :picNum="9" :showPicType=2 @clickUpload="upload"
							@clickDeletePic="clickDeletePic"></yj-upload>
					</view>
				</view>

				<view
					style="background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">身份证</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">图片不得超过2M，最多不超过3张</view>
					</view>
					<view style="display: flex;padding-top: 10px;flex-wrap: wrap;">
						<yj-upload :styleCate="2" :picArr="formData.idcardArr" :picNum="3" :showPicType=2
							@clickUpload="uploadIdcard" @clickDeletePic="clickDeleteIdcardPic"></yj-upload>
					</view>
				</view>

				<view
					style="background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">职业资格证书</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">图片不得超过2M，最多不超过6张</view>
					</view>
					<view style="display: flex;padding-top: 10px;flex-wrap: wrap;">
						<yj-upload :styleCate="2" :picArr="formData.certificateArr" :picNum="6" :showPicType=2
							@clickUpload="uploadCertificate" @clickDeletePic="clickDeleteCertificatePic"></yj-upload>
					</view>
				</view>				

				<!-- 上传照片 -->

<!-- 				<view
					style="display: flex;background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="display: flex;flex: 1;flex-direction: column;">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">请上传本人近期照</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">图片不得超过2M</view>
					</view>
					<view @click="choosePic" style="display: flex;width: 170px;justify-content: flex-end;">
						<view v-if="formData.pic">
							<image style="width: 140px;height: 97px;" :src="formData.local_pic"></image>
						</view>
						<view v-else>
							<image style="width: 140px;height: 97px;" src="../../static/images/addimg.png"></image>
						</view>
					</view>
				</view> -->


				<!-- 上传健康证 -->

				<!-- 	<view
					style="display: flex;background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="display: flex;flex: 1;flex-direction: column;">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">请上传健康证</view>
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
				</view> -->







			</view>



			<view class="yj-btn-container">
				<button class="yj-radius-form-btn" form-type="submit" :disabled="isDisabled">提交</button>
			</view>
		</form>


	</view>
</template>

<script>
	import {
		getUserInfo,
		masterEdit,
		masterDetail,
		itemList
	} from '@/utils/api.js'
	let QQMapWX = require('../../static/js/qqmap-wx-jssdk.js');
	let qqmapsdk
	export default {
		data() {
			return {
				e: {},
				host: '',
				// 表单数据
				formData: {
					name: '',
					email: '',
					gender: 2,
					pic: '',
					region: [],
					province: '',
					city: '',
					district: '',
					address:'',
					picArr:[],
					idcardArr:[],
					certificateArr:[],
				},
				item_list:[],
				isDisabled:false,
				master_service:[],
				register_top_pic:''
			}
		},
		onLoad(e) {
			this.e = e
			this.host = uni.getStorageSync('siteroot')
			qqmapsdk = new QQMapWX({
				key:uni.getStorageSync('qqmapKey')
			});
			this.itemList()
		},
		onShow() {
			this.register_top_pic = uni.getStorageSync('settingInfo').register_top_pic
			console.log('register_top_pic:',this.register_top_pic)
			// this.getUserInfo()
		},
		methods: {
			selItem(e){
				console.log(e)
				this.master_service = e.detail.value
			},
			async itemList() {
				const res = await itemList({master_select:0})
				this.item_list = res.data.data
			},	
			uploadIdcard(e) {
				this.formData.idcardArr = e
			}, 
			clickDeleteIdcardPic(e) {
				this.formData.idcardArr = e
			},			
			uploadCertificate(e) {
				this.formData.certificateArr = e
			},
			clickDeleteCertificatePic(e) {
				this.formData.certificateArr = e
			},
			clickDeletePic(e) {
				this.formData.picArr = e
			},
			upload(e) {
				console.log('传回来的picArr',e)
				this.formData.picArr = e
			},			
			async getUserInfo() {
				const res = await getUserInfo()
				if (res.data.data.master) {
					uni.redirectTo({
						url: '/pages/master/console'
					})
				}
			},
			async submit(e) {
				console.log(this.formData)
				console.log(e);

				if (!e.detail.value.name) {
					uni.showToast({
						title: '请输入姓名', 
						icon: 'none'
					});
					return;
				}
				if (!e.detail.value.tel) {
					uni.showToast({
						title: '请输入电话',
						icon: 'none'
					});
					return;
				}
				if (!e.detail.value.age) {
					uni.showToast({
						title: '请输入姓名',
						icon: 'none'
					});
					return;
				}

				if (!this.formData.address) {
					uni.showToast({
						title: '请选择地址',
						icon: 'none'
					});
					return;
				}
				
				if (!this.formData.picArr || this.formData.picArr.length==0) {uni.showToast({title: '请上传照片',icon: 'none'});return;}
				if (!this.formData.idcardArr || this.formData.idcardArr.length==0) {uni.showToast({title: '请上传身份证',icon: 'none'});return;}
				if (!this.formData.certificateArr || this.formData.certificateArr.length==0) {uni.showToast({title: '请上传资格证',icon: 'none'});return;}
				
				
				e.detail.value.gender = this.formData.gender
				e.detail.value.pic = this.formData.picArr.join('&')
				e.detail.value.idcard = this.formData.idcardArr.join('&')
				e.detail.value.certificate = this.formData.certificateArr.join('&')				
				e.detail.value.province = this.formData.province
				e.detail.value.city = this.formData.city
				e.detail.value.district = this.formData.district
				e.detail.value.address = this.formData.address
				e.detail.value.latitude = this.formData.latitude
				e.detail.value.longitude = this.formData.longitude
				e.detail.value.master_service = this.master_service.join('&')
				this.isDisabled = true; 
				uni.showLoading()
				const res = await masterEdit(e.detail.value)
				this.isDisabled = false;  
				uni.showToast({
					title: '提交成功',
					icon: 'none'
				})
				setTimeout(function() {
					uni.hideLoading()
					uni.navigateBack()
				}, 1500)
			},
			selGender(e) {
				console.log(e)
				this.formData.gender = e.detail.value
			},
			bindRegionChange(e) {
				console.log(e)
				this.formData.province = e.detail.value[0]
				this.formData.city = e.detail.value[1]
				this.formData.district = e.detail.value[2]
			},
			selAddr() {
				console.log('---')
				uni.chooseLocation({
					success: (res) => {
						// this.data.area = res.name
						// this.data.address = res.address
						console.log(res);
						this.formData.address = res.address+''+res.name
						this.formData.latitude = res.latitude
						this.formData.longitude = res.longitude
						this.getLocal(res.latitude, res.longitude)
					},
					fail(error) {
						console.log(error);
					}
				})
			},
			getLocal(latitude, longitude) {
				let vm = this;
				let url = 'https://apis.map.qq.com/ws/geocoder/v1/'
				let data = {
					//	key: 'KHABZ-MEULF-GGWJE-NUL5G-4TGFT-4VFT4',

					key: uni.getStorageSync('qqmapKey'),
					location: latitude + ',' + longitude,
					output: 'jsonp'
				}
				this.$jsonp(url, data).then(res => {
					console.log('---------------------------')
					console.log(res)
					vm.address_info = res.result.ad_info
					vm.formData.province = res.result.ad_info.province
					vm.formData.city = res.result.ad_info.city
					vm.formData.district = res.result.ad_info.district
					// vm.formData.address = res.result.address_component.street
					console.log('vm.formData.address:',vm.formData.address)
				})
			},
			getLocal11(latitude, longitude) {
				let vm = this;
				console.log("getLocal");
				qqmapsdk.reverseGeocoder({
					location: {
						latitude: latitude,
						longitude: longitude
					},
					success: function(res) {
						console.log(res);
						vm.address_info = res.result.ad_info
						vm.formData.province = res.result.ad_info.province
						vm.formData.city = res.result.ad_info.city
						vm.formData.district = res.result.ad_info.district
						vm.formData.address = res.result.address_component.street
					}
				})
			},
			choosePic() {
				let that = this;
				uni.chooseImage({
					count: 1,
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
					url: uni.getStorageSync('siteroot')+'/api/upload',
					filePath: tempFile,
					name: 'file',
					success: (uploadFileRes) => {
						uni.hideLoading()
						console.log(uploadFileRes)
						this.formData.local_pic = tempFile
						this.formData.pic = uploadFileRes.data
						if (this.tempFileLength == (this.uploadIndex + 1)) uni.hideLoading()
					}
				});
			},
		}
	}
</script>

<style lang="less">
	body {
		background-color: rgb(38, 193, 116);
	}

	.banner {
		width: 100%;
		height: 200px;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}

	.logo {
		padding: 30px;
		text-align: center;
		background-color: rgb(38, 193, 116);
	}

	.logo image {
		width: 50px;
		height: 50px;
		border-radius: 100px;
	}

	.yj-radius-form {
		padding: 20px 20px;
	}

	.yj-form-main {
		background-color: #fff;
		padding: 12px;
		border: 2px solid #555;
		border-radius: 10px;
	}

	.yj-radius-form-item {
		display: flex;
		border-radius: 10px;
		margin-bottom: 15px;
		padding: 6px 0;
		background-color: #fff;
		border: 2px solid var(--mainColor);
		padding-right: 20px;
	}

	.yj-radius-form-icon {
		display: flex;
		width: 50px;
		align-items: center;
		justify-content: center;
	}

	.yj-radius-form-icon image {
		width: 20px;
		height: 20px;
	}

	.yj-radius-form-label {
		display: flex;
		width: 80px;
		align-items: center;
		font-size: 15px;
		color: rgb(138, 138, 138);
		text-indent: 10px;
	}

	.yj-radius-form-input {
		display: flex;
		flex: 1;
		height: 30px;
		align-items: center;
		justify-content: flex-end;
		color: #000;
		font-size: 13px;
		font-weight: 700;
	}

	.yj-radius-form-input input {
		width: 100%;
		height: 30px;
		color: #000;
		text-align: right;
		font-size: 13px;
		font-weight: 700;
	}

	radio-group {
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	radio {
		transform: scale(0.7);
		margin-left: 10px;
	}

	radio text {
		font-size: 18px;
		font-weight: 600;
		margin-left: 5px;
	}

	.yj-radius-form-input-placeholder {
		font-size: 13px;
		font-weight: 700;
		color: #000;
		height: 30px;
		line-height: 30px;
	}

	.yj-radius-form-tip {
		display: flex;
		// width: 50px;
		align-items: center;
		justify-content: center;
		display: none;
	}

	.yj-radius-form-tip image {
		width: 20px;
		height: 20px;
	}

	.yj-radius-form-btn {
		// line-height: 40px;border-radius: 100px;color: #fff;background-image: linear-gradient(to right,rgb(0,118,234),rgb(1,238,99));
		margin: 26px auto 41px;
		width: 323px;
		height: 49px;
		line-height: 40px;
		background: #fff474;
		border: 3px solid #000;
		box-shadow: 0 6px 0 #000;
		opacity: 1;
		border-radius: 50px;
		font-size: 18px;
		font-weight: 600;
		color: #000;

	}
</style>