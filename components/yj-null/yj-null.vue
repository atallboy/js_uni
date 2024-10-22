<template>
	<view>
		<view v-if="showNull===0" style="text-align: center;padding-top: 150px;">
			<image style="width: 200px;height: 200px;" src="../../static/images/null.png"></image>
		</view>
	</view>
</template> 

<script> 
	export default {
		name:"yj-null",
		props:{
			showNull:{ type:Number,default:1 },
		},
		data() {
			return {

			};
		},
		created(v) {
			
		},

	}
</script>

<style>

</style>