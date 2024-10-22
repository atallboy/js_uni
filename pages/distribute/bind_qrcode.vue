<template>
	<view>
		<form @submit="submit">
			<view style="padding: 80px;">
				<input type="text" name="redeem_code" style="width: 100%;height: 50px;text-align: center; line-height: 50px;font-size: 20px; background-color: #fff;border-radius: 100px;" placeholder="请输入二维码编号"/>
			</view>
			<view style="padding: 0 80px;">
				<button form-type="submit">立即绑定</button>
			</view>
		</form>

	</view>
</template>

<script>
	import {bindQrcode} from '@/utils/api.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			async submit(e){
				if(!e.detail.value.redeem_code){uni.showToast({title:'请输入二维码编号',icon:'none'});return ;}
				console.log(e)
				const res = await bindQrcode(e.detail.value)
				uni.showModal({
					title:'',
					content:'绑定成功',
					showCancel:false,
					success(res) {
						if(res.confirm){
							uni.redirectTo({
								url:'/pages/distribute/hotel_qrcode'
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
button{background-color: var(--mainColor);color: #fff;padding: 8px 0;border-radius: 100px;font-size: 15px;}
</style>
