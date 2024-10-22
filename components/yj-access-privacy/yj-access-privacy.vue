<template>
	<view>
		<view style="padding:10px 0 10px 20px;display:flex;align-items:center;">
		  <view style="">
			  <checkbox-group @click="changDecalation">
				<checkbox style="transform:scale(0.6,0.6);" value="1" :checked="agree_declaration" color="#438DEC"></checkbox>
			  </checkbox-group> 
		  </view>
		  <view style="font-size:12px;color:#666;">我已阅读并同意
			<navigator style="display:inline-block;color:#1e90ff;" url="/pages/article/service_agreement">《用户服务协议》</navigator>
			<navigator style="display:inline-block;color:#1e90ff;" url="/pages/article/privacy">《隐私政策》</navigator>
			等协议
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"yj-access-privacy",
		emits: ['clickCheckBox'],
		data() {
			return {
				agree_declaration:true
			};
		},
		methods:{
			changDecalation(e){
				console.log(e)
				this.$emit("clickCheckBox");
			}
		}
	}
</script>

<style>

</style>