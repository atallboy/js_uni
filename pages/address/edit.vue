<template>
	<view>

		<form @submit="submit">
			<view class="apply">
				<view class="apply-wrap">
					<view class="inp" @click="selAddr">
						<view class="label">服务地址</view>
						<view class="value" style="line-height: 28px;">
							{{data.address}}
						</view>
						<view class="icon">
							<image src="../../static/images/icon-location.png"></image>
						</view>
					</view>		
					<view class="inp">
						<view class="label">门牌号</view>
						<view class="value">
							<input type="text" name="remark" :value="data.remark" placeholder="某酒店/XX房间(某小区/XX号)"
								placeholder-class="inp-placeholder"></input>
						</view>
					</view>								
					<view class="inp">
						<view class="label">
							联系人
						</view>
						<view class="value">
							<input type="text" name="name" :value="data.name" placeholder="姓名"
								placeholder-class="inp-placeholder"></input>
						</view>
					</view>
					<view class="inp">
						<view class="label">手机号</view>
						<view class="value">
							<input type="number" name="tel" :value="data.tel" placeholder="请输入电话"
								placeholder-class="inp-placeholder"></input>
						</view>
					</view>

<!-- 					<view class="inp">
						<view class="label">
							详细地址
						</view>
						<view class="value">
							<input type="text" name="address" :value="data.address" placeholder="请输入详细地址"
								placeholder-class="inp-placeholder"></input>
						</view>
					</view> -->


				</view>
			</view>

			<view>
				<yj-access-privacy @clickCheckBox="clickCheckBox"></yj-access-privacy>
			</view>

			<view class="submit-btn">
				<button form-type="submit" class="">保存地址</button>
			</view>
		</form>


	</view>
</template>

<script>
	import {
		addressDetail,
		addressEdit
	} from '@/utils/api.js'
	let QQMapWX = require('../../static/js/qqmap-wx-jssdk.js');
	let qqmapsdk
	export default {
		data() {
			return {
				data: {
					province: '',
					city: '',
					district: '',
					address: '',
					remark: '',
				},
				agree_declaration: true
			}
		},
		onLoad(e) {
			qqmapsdk = new QQMapWX({
				//	key: 'KHABZ-MEULF-GGWJE-NUL5G-4TGFT-4VFT4',

				key: uni.getStorageSync('qqmapKey')
			});
			if (e.id) {
				this.addressDetail(e)
			}
		},
		methods: {
			clickCheckBox(e) {
				this.agree_declaration = !this.agree_declaration
			},
			async submit(e) {
				console.log(e)

				if (!this.data.address) {
					uni.showToast({
						title: '请选择地址',
						icon: 'none'
					});
					return;
				}
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
				if (!this.agree_declaration) {
					uni.showToast({
						title: '请同意服务协议',
						icon: 'none'
					});
					return;
				}
				e.detail.value.province = this.data.province
				e.detail.value.city = this.data.city
				e.detail.value.district = this.data.district
				e.detail.value.address = this.data.address
				e.detail.value.latitude = this.data.latitude
				e.detail.value.longitude = this.data.longitude
				if (this.data.id) e.detail.value.id = this.data.id
				const res = await addressEdit(e.detail.value)
				uni.showToast({
					title: '保存成功'
				})
				setTimeout(function() {
					uni.navigateBack()
				}, 1500)
			},
			async addressDetail(e) {
				const res = await addressDetail(e)
				this.data = res.data.data
			},
			bindRegionChange(e) {
				console.log(e)
				this.data.province = e.detail.value[0]
				this.data.city = e.detail.value[1]
				this.data.district = e.detail.value[2]
			},

			selAddr() {
				console.log('---')
				uni.chooseLocation({
					success: (res) => {
						// this.data.area = res.name
						// this.data.address = res.address
						console.log(res);
						this.data.address = res.address+''+res.name
						this.data.latitude = res.latitude
						this.data.longitude = res.longitude
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
					//  key: 'KHABZ-MEULF-GGWJE-NUL5G-4TGFT-4VFT4',
					key: uni.getStorageSync('qqmapKey'),
					location: latitude + ',' + longitude,
					output: 'jsonp'
				}
				this.$jsonp(url, data).then(res => {
					console.log('---------------------------')
					console.log(res)
					vm.address_info = res.result.ad_info
					vm.data.province = res.result.ad_info.province
					vm.data.city = res.result.ad_info.city
					vm.data.district = res.result.ad_info.district
					// vm.data.address = res.result.address_component.street
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
						vm.data.province = res.result.ad_info.province
						vm.data.city = res.result.ad_info.city
						vm.data.district = res.result.ad_info.district
						vm.data.address = res.result.address_component.street
					}
				})
			},

		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}


	image {
		display: block;
		width: 100%;
		height: 100%;
	}

	.top-pic {
		width: 100%;
		height: 150px;
	}


	.apply {
		/* padding: 20px; */
		padding-top: 10px;
	}

	.apply-wrap {
		display: flex;
		background-color: #fff;
		padding: 0 20px 0;
		border-radius: 4px;
		flex-direction: column;
	}

	.title {
		display: flex;
		padding: 20px 0;
		font-weight: 700;
		font-size: 17px;
	}

	.desc {
		display: flex;
		padding-bottom: 15px;
		font-size: 12px;
		color: #555;
		flex-direction: column;
		border-bottom: 1rpx dashed #f7f7f7;
		line-height: 20px;
	}

	.desc view {
		display: flex;
	}

	.inp {
		display: flex;
		// height: 45px;
		border-bottom: 1rpx solid #f7f7f7;
		padding: 6px;
		line-height: 50px;
		font-size: 15px;
	}

	.label {
		display: flex;
		width: 80px;
		align-items: center;
		color: #8a8a8a;
	}

	.value {
		display: flex;
		flex: 1;
		align-items: center;
		color: #000;
	}

	.icon {
		display: flex;
		width: 40px;
		justify-content: flex-end;
		align-items: center;
	}

	.icon image {
		width: 20px;
		height: 20px;
	}


	.inp input {
		width: 100%;
		line-height: 50px;
	}

	.inp-placeholder {
		font-size: 13px;
	}

	.pick {
		display: flex;
		height: 50px;
		border-bottom: 1rpx solid #f7f7f7;
		margin: 10px 0;
		align-items: center;

	}

	.pick .label {
		display: flex;
		width: 80px;
		color: #555;
	}

	.pick .pick-value {
		display: flex;
		flex: 1;
	}

	.pick .pick-btn {
		display: flex;
		width: 80px;
		font-size: 13px;
		font-weight: 700;
		justify-content: flex-end;
	}

	.pick .pick-btn image {
		width: 20px;
		height: 20px;
	}

	.xieyi {
		display: flex;
		padding: 20px 0;
		font-size: 12px;
		flex-direction: row;
		align-items: center;
	}

	.xieyi-checkbox {
		display: flex;
		width: 30px;
	}

	.xieyi-checkbox switch {
		transform: scale(0.6, 0.6);
	}

	.xieyi-txt {
		display: flex;
	}

	.submit-btn {
		display: flex;
		padding: 20px 0;
		justify-content: center;
	}

	button {
		width: 90%;
		color: #fff;
		border-radius: 100px;
		height: 36px;
		line-height: 36px;
		font-size: 15px;
		background-color: var(--mainColor);
	}
</style>