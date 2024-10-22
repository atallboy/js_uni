<template>
	<view>
		<form @submit="submit">
			<view style="padding: 80px;">
				<input type="text" name="redeem_code" style="width: 100%;height: 50px;text-align: center; line-height: 50px;font-size: 20px; background-color: #fff;border-radius: 100px;" placeholder="请输入兑换码"/>
			</view>
			<view style="padding: 0 80px;">
				<button form-type="submit">立即兑换</button>
			</view>
		</form>

	</view>
</template>

<script>
	import {couponExchange} from '@/utils/api.js'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			async submit(e){
				if(!e.detail.value.redeem_code){uni.showToast({title:'请输入兑换码',icon:'none'});return ;}
				console.log(e)
				const res = await couponExchange(e.detail.value)
				uni.showModal({
					title:'',
					content:'兑换成功,是否前往查看我的优惠券',
					success(res) {
						if(res.confirm){
							uni.navigateTo({
								url:'/pages/coupon/my'
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
