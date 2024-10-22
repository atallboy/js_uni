<template>
	<view>
		<view v-if="!list[0]" style="text-align: center;padding-top: 100px;">
			<image src="../../static/images/null.png" style="width: 200px;height: 200px;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{background-color: #fff;}
</style>
