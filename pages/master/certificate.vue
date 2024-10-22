<template>
	<view>
		<view style="display: flex;align-items: center;padding: 10px;font-weight: 700;">
			<image style="width: 15px;height: 15px;margin-right: 6px;" src="../../static/images/certificate.png"></image>
			技师职业资格证书
		</view>
		<view style="padding: 10px;display: flex;flex-wrap: wrap;">
			<view v-for="item in detail.certificateArr" @click="previewImage(item)" style="width: 100px;height: 100px;margin-right: 8px;margin-bottom: 8px;">
				<image style="width: 100%;height: 100%;"  :src="item"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {masterDetail} from '@/utils/api.js'
	export default {
		data() {
			return {
				e:{},
				detail:{}
			}
		},
		onLoad(e) {
			this.e =e
			this.masterDetail()
		},
		methods: {
			async masterDetail(){
				const res = await masterDetail(this.e)
				this.detail = res.data.data
			},
			previewImage(e){
				uni.previewImage({
					urls:this.detail.certificateArr,
					current:e
				})
			}
		}
	}
</script>

<style>

</style>
