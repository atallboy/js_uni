<template>
	<view class="container">
		<button @click="getUserLocation">获取当前位置</button>
		<view v-if="locationName" class="location-info">
			当前位置：{{ locationName }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				locationName: ''
			};
		},
		methods: {
			getUserLocation() {
				uni.getLocation({
					type: 'gcj02',
					success: res => {
						const latitude = res.latitude;
						const longitude = res.longitude;
						this.reverseGeocoding(latitude, longitude);
					},
					fail: err => {
						console.error('获取位置失败：', err);
					}
				});
			},
			reverseGeocoding(latitude, longitude) {
				const apiKey = '59c50aaacccbb076a1b6f79192570255';
				const apiUrl =
					`https://restapi.amap.com/v3/geocode/regeo?key=${apiKey}&location=${longitude},${latitude}&output=json`;

				uni.request({
					url: apiUrl,
					method: 'GET',
					success: res => {
						if (res.data.status === '1' && res.data.regeocode) {
							this.locationName = res.data.regeocode.formatted_address;
						} else {
							console.error('逆地理编码失败：', res.data.info);
						}
					},
					fail: err => {
						console.error('逆地理编码请求失败：', err);
					}
				});
			}
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	button {
		margin-bottom: 20px;
	}

	.location-info {
		margin-top: 20px;
	}
</style>