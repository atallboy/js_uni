<template>
	<view>
		<view style="display: flex;align-items: center;justify-content: center;height: 100vh;background-color: #f7f7f7;">
			<view style="background-color: #fff;border-radius: 5px;padding: 30px;">
				<view style="">
					<image style="width: 250px;height: 250px;" :src="master.qrcode"></image>
				</view>
				<view style="display: flex;padding-top: 35px;">
					<view style="display: flex;flex: 1;align-items: center;justify-content: center;">
						<button @click="preImage" style="height: 35px;line-height: 35px;font-size: 13px;width: 80%;text-align: center;color: #fff;background-color: #24C373;border-radius: 100px;">保存</button>
					</view>
<!-- 					<view style="display: flex;flex: 1;align-items: center;justify-content: center;">
						<button style="height: 35px;line-height: 35px;font-size: 13px;width: 80%;text-align: center;color: #fff;background-color: #24C373;border-radius: 100px;">保存</button>
					</view>	 -->				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {masterDetail} from '@/utils/api.js'	
	export default {
		data() {
			return {
				master:{}
			}
		},
		onLoad() {
			this.masterDetail()
		},
		methods: {
			async masterDetail(){
				const res = await masterDetail()
				this.master = res.data.data								
			},
			preImage(){ 
				uni.previewImage({
					urls:[this.master.qrcode],
					current:this.master.qrcode
				})
			},
		}
	}
</script>

<style>

</style>
