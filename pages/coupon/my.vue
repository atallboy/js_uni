<template>
	<view>

		<yj-coupon :list="list" @selCoupon="selCoupon($event)"></yj-coupon>
		
	</view>
</template>

<script>
	import {couponList, couponRecord} from '@/utils/api.js'
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			async initData(){
				const res = await couponRecord()
				this.list = res.data.data
			},
			selCoupon(e){
				console.log(e)
			}
		}
	}
</script>

<style>


</style>
