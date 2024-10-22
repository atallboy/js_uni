<template>
	<view class="_page" style="padding-bottom: 50px;">
		<form @submit="submit">



			<view class="yj-radius-form">
				<view class="yj-form-main">
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							营业状态
						</view>
						<view class="yj-radius-form-input">
							<radio-group @change="selOpenStatus">
								<radio value="1" :checked="formData.open_status==1"><text>开启</text></radio>
								<radio value="0" :checked="formData.open_status==0"><text>关闭</text> </radio>
							</radio-group>
						</view>
					</view>
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							自动接单
						</view>
						<view class="yj-radius-form-input">
							<radio-group @change="selAutoTaking">
								<radio value="1" :checked="formData.auto_taking==1"><text>开启</text></radio>
								<radio value="0" :checked="formData.auto_taking==0"><text>关闭</text> </radio>
							</radio-group>
						</view>
					</view>					
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							出行费
						</view>
						<view class="yj-radius-form-input">
							<radio-group @change="selTravelExpense">
								<radio value="1" :checked="formData.travel_expense==1"><text>有</text></radio>
								<radio value="0" :checked="formData.travel_expense==0"><text>无</text> </radio>
							</radio-group>
						</view>
					</view>
					<!-- 我改的起步价开始 -->
					<view class="yj-radius-form-item" v-if="formData.travel_expense==1">
						<view class="yj-radius-form-label">
							起步价
						</view>
						<view class="yj-radius-form-input">
							<input type="number" name="qibujia" :value="formData.qibujia" placeholder=""
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>
					<!-- 我改的起步价结束 -->
					<view class="yj-radius-form-item" v-if="formData.travel_expense==1">
						<view class="yj-radius-form-label">
							滴滴/出租
						</view>
						<view class="yj-radius-form-input">
							<input type="number" name="taxi_fee" :value="formData.taxi_fee" placeholder="每公里滴滴/出租费"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>
					<view class="yj-radius-form-item" v-if="formData.travel_expense==1">
						<view class="yj-radius-form-label">
							公交/地铁
						</view>
						<view class="yj-radius-form-input">
							<input type="number" name="bus_fee" :value="formData.bus_fee" placeholder="每公里公交/地铁费"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>
<!-- 					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							所属商家
						</view>
						<view class="yj-radius-form-input">
							<input type="number" name="store_name" :value="formData.store_name" placeholder="请输入商家名称"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view> -->
					<view class="yj-radius-form-item">
						<!-- 					<view class="yj-radius-form-icon">
							<image src="../../static/images/form-account.png"></image>
						</view> -->
						<view class="yj-radius-form-label">姓名</view>
						<view class="yj-radius-form-input">
							<input type="text" name="name" :value="formData.name" placeholder="请输入姓名"
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
							<input type="number" name="tel" :value="formData.tel" placeholder="请输入电话"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-label">
							年龄
						</view>
						<view class="yj-radius-form-input">
							<input type="number" name="age" :value="formData.age" placeholder="请输入年龄"
								placeholder-class="yj-radius-form-input-placeholder" />
						</view>
					</view>

					<view class="yj-radius-form-item" @click="selAddr">
						<view class="yj-radius-form-label">
							地址
						</view>
						<view class="yj-radius-form-input" style="justify-content: flex-end;min-height: 30px;align-items: center;font-size: 13px;font-weight: 700;color: #000;">
								{{formData.address}}
						</view>
						<view class="yj-radius-form-tip">
							<uni-icons type="forward" size="15"></uni-icons>
						</view>
					</view>

					
					<view class="yj-radius-form-item">
						<view class="yj-radius-form-input" style="height: auto;padding-left: 10px;">
							<textarea name="desc" :value="formData.desc" style="width: 100%;" placeholder-style="font-size:15px;color:#8a8a8a;font-weight:normal;" placeholder="在这里输入自我介绍"/>
						</view>
					</view>					

					<!-- 					<picker mode="multiSelector" @change="timePickerChange" :value="timeIndex" :range="timeArr">							
						<view class="yj-radius-form-item">
							<view class="yj-radius-form-label">营业时间</view>	
							<view class="yj-radius-form-input">
								<input type="text" disabled name="_work_time" :value="formData._work_time" placeholder="" placeholder-class="yj-radius-form-input-placeholder" />
							</view>
							<view class="yj-radius-form-tip">
								<uni-icons type="forward" size="15"></uni-icons>
							</view>
						</view>							
					</picker>		 -->
				</view>

				<!-- 				<view style="background-color: #fff;padding: 12px;border: 2px solid #555;border-radius: 10px;margin-top: 5px;">
					<view style="">
						<view style="font-size: 17px;color: rgb(51, 51, 51);font-weight: 600;">本人近期照</view>
						<view style="font-size: 11px;color: rgb(138, 138, 138);">图片不得超过2M</view>
					</view>
					<view style="display: flex;padding-top: 10px;flex-wrap: wrap;">
						<view v-for="item in formData.picArr" style="display: flex; width: 70px;height: 48px;margin: 0 10px 10px 0;">
							<image style="width: 100%;height: 100%;" :src="item"></image>
						</view>
						<view @click="choosePic" style="width: 70px;height: 48px;margin: 0 10px 10px 0;">
							<image style="width: 100%;height: 100%;" src="../../static/images/addimg.png"></image>
						</view>						
					</view>
				</view> -->

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
										<checkbox :value="item.id" :checked="item.master_select" />{{item.name}}
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

			</view>



			<view class="yj-btn-container">
				<button class="yj-radius-form-btn" form-type="submit">保存</button>
			</view>
		</form>


	</view>
</template>

<script>
	import {
		masterEdit,
		masterDetail,
		getUserInfo,
		itemList
	} from '@/utils/api.js'
	let QQMapWX = require('../../static/js/qqmap-wx-jssdk.js');
	let qqmapsdk
	export default {
		data() {
			return {
				host: '',
				// 表单数据
				formData: {
					qibujia: 0, //起步价
					name: '',
					email: '',
					gender: 2,
					pic: '',
					region: [],
					province: '',
					city: '',
					district: '',
					_work_time: '',
					picArr: [],
				},

				timeArr: [
					['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时',
						'15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'
					],
					['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
						'16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
						'32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
						'48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
					],
					['至'],
					['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时',
						'15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'
					],
					['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
						'16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
						'32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
						'48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
					],
				],
				timeArrFormat: [
					['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
						'16', '17', '18', '19', '20', '21', '22', '23'
					],
					['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
						'16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
						'32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
						'48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
					],
					['至'],
					['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
						'16', '17', '18', '19', '20', '21', '22', '23'
					],
					['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
						'16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
						'32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47',
						'48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
					],
				],
				timeIndex: [],
				item_list:[],
				master_service:[]
			}
		},
		onLoad() {
			qqmapsdk = new QQMapWX({
				key: uni.getStorageSync('qqmapKey')
			});
			this.host = uni.getStorageSync('siteroot')
			this.userInfo()
			
		},
		onShow() {
			this.logo = uni.getStorageSync('setting').logo
		},
		methods: {
			selItem(e){
				console.log(e)
				this.master_service = e.detail.value
			},
			async itemList(master_id) {
				const res = await itemList({master_select:master_id})
				this.item_list = res.data.data
				this.master_service = []
				for(let i=0;i<this.item_list.length;i++){
					if(this.item_list[i].master_select){
						this.master_service.push(this.item_list[i].id)
					}
				}
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
			timePickerChange(e) {
				let v = e.detail.value
				if (v[0] > v[3] || (v[0] == v[3] && v[1] == v[4]) || (v[0] == v[3] && v[1] > v[4])) {
					uni.showToast({
						title: '时间错误',
						icon: 'none'
					});
					return;
				}
				this.formData._work_time = this.timeArrFormat[0][v[0]] + ':' + this.timeArrFormat[1][v[1]] + '至' + this
					.timeArrFormat[3][v[3]] + ':' + this.timeArrFormat[4][v[4]]
				console.log(this.formData)
			},
			async userInfo() {
				const res = await getUserInfo()
				this.formData = res.data.data.master
				this.itemList(res.data.data.master.id)
			},
			async submit(e) {
				console.log(e);
				console.log(this.master_service)
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
				if(this.master_service.length==0){
					uni.showToast({
						title: '请选择服务项目',
						icon: 'none'
					});
					return;
				}
				if (!this.formData.pic) {
					uni.showToast({
						title: '请上传照片',
						icon: 'none'
					});
					return;
				}
				e.detail.value.open_status = this.formData.open_status
				e.detail.value.auto_taking = this.formData.auto_taking
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
				e.detail.value.travel_expense = this.formData.travel_expense
				e.detail.value.master_service = this.master_service.join('&')
				if (this.formData.id)e.detail.value.id = this.formData.id
				const res = await masterEdit(e.detail.value)
				uni.showToast({title: '保存成功'})
				setTimeout(function() {
					uni.navigateBack()
				}, 1500)
			},
			selTravelExpense(e) {
				this.formData.travel_expense = e.detail.value
			},
			selGender(e) {
				this.formData.gender = e.detail.value
			},
			selOpenStatus(e) {
				this.formData.open_status = e.detail.value
			},
			selAutoTaking(e) {
				this.formData.auto_taking = e.detail.value
			},
			bindRegionChange(e) {
				this.formData.province = e.detail.value[0]
				this.formData.city = e.detail.value[1]
				this.formData.district = e.detail.value[2]
			},
			choosePic() {
				let that = this;
				uni.chooseImage({
					count: 3,
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
					url: uni.getStorageSync('siteroot') + '/api/upload',
					filePath: tempFile,
					name: 'file',
					success: (uploadFileRes) => {
						uni.hideLoading()
						console.log(uploadFileRes)
						this.formData.picArr.push(uploadFileRes.data)
						if (this.tempFileLength == (this.uploadIndex + 1)) uni.hideLoading()
					}
				});
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
		width: 100px;
		align-items: center;
		font-size: 15px;
		color: rgb(138, 138, 138);
		text-indent: 10px;
	}

	.yj-radius-form-input {
		display: flex;
		flex: 1;
	}

	.yj-radius-form-input input {
		width: 100%;
		height: 30px;
		color: #000;
		text-align: right;
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
	}

	.yj-radius-form-tip {
		display: flex;
		width: 50px;
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