<template>
	<view>
		<view style="padding: 10px;">
			<!-- <text>{{content}}</text> -->
			<mp-html :content="content" />
		</view>
	</view>
</template>

<script>
	import {settingInfo} from '@/utils/api.js'	
	export default {
		data() {
			return {
				content:''
			}
		},
		onLoad(e) {
			if(e.type=='desc'){
				this.settingInfo()
			}
		},
		methods: {
			async settingInfo() {
				const res = await settingInfo()
				this.content = res.data.data.desc
				uni.setStorageSync('settingInfo',res.data.data)
			},
		}
	}
</script>

<style>

</style>
