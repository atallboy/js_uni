<template>
	<view>
		<view style="padding: 14px;">
			<view class="fast-wrap-label">
				<view class="fast-wrap-label-dot"></view> 区域代理 
			</view>	
			<view class="yj-rectangle-form-container">
				<form @submit="submit">
					<view class="yj-rectangle-form-wrap">
						<view class="yj-rectangle-form-item">
							<view class="yj-rectangle-form-label">
								姓<text style="color: #fff;">一一</text>名<text>*</text>
							</view> 
							<view class="yj-rectangle-form-value">
								<input type="text" name="name" :value="data.name" placeholder="请输入姓名" placeholder-class="yj-rectangle-form-placeholder" />
							</view>
						</view>
						<view class="yj-rectangle-form-item">
							<view class="yj-rectangle-form-label">
								联系方式<text>*</text>
							</view> 
							<view class="yj-rectangle-form-value">
								<input type="number" name="tel" :value="data.tel" placeholder="请输入联系电话" placeholder-class="yj-rectangle-form-placeholder" />
							</view>
						</view>
						<view class="yj-rectangle-form-item" @click="selAddr" v-if="agentcate=='gzh'">
							<view class="yj-rectangle-form-label">
								代理地区<text>*</text>
							</view> 
							<view class="yj-rectangle-form-value">
								{{region[0]}} {{region[1]}} {{region[2]}}
							</view>
						</view>
						<picker mode="region" @change="changeRegion" v-if="agentcate=='micro' && !data.id">
							<view class="yj-rectangle-form-item">
								<view class="yj-rectangle-form-label">
									代理地区
								</view> 
								<view class="yj-rectangle-form-value">
									{{region[0]}} {{region[1]}} {{region[2]}}
									<!-- <input type="hidden" name="province" :value="region[0]"  /> -->
									
									<!-- <input type="text" name="" value="" placeholder="" disabled placeholder-class="yj-rectangle-form-placeholder" /> -->
								</view>
								<view class="yj-rectangle-form-btn-icon">
									<uni-icons type="forward" color="#999" size="15"></uni-icons>
								</view>
							</view>
						</picker>
						<view class="yj-rectangle-form-item">
							<view class="yj-rectangle-form-label">
								备<text style="color: #fff;">一一</text>注
							</view> 
							<view class="yj-rectangle-form-value">
								<input type="text" name="remark" :value="data.remark" placeholder="请输入" placeholder-class="yj-rectangle-form-placeholder" />
							</view>
						</view>	
						<view>
							<yj-access-privacy @clickCheckBox="clickCheckBox"></yj-access-privacy>
						</view>
						<view class="yj-rectangle-btn">
							<view class="yj-rectangle-btn-item">
								<button v-if="data.id" form-type="submit">保存</button>
								<button v-else form-type="submit">同意并提交</button>
							</view>
						</view>																
					</view>
				</form>

			</view>
		</view>		
	</view>
</template>

<script>
	import {agentRegister, agentInfo} from '@/utils/api.js'
	export default {

		data() {
			return {
			   region:['','',''],
			   data:{},
			   agree_declaration:true,
			   agentcate:'',
			}
		},
		created() {
			this.agentcate = uni.getStorageSync('agent_cate');
			this.initData()
		},
		
		methods: {
			clickCheckBox(e){
				this.agree_declaration = !this.agree_declaration
			},
			async initData(){
				const res = await agentInfo()
				console.log(res)
				this.data = res.data.data
				if(this.data.id)this.region = [res.data.data.province,res.data.data.city,res.data.data.district]
			},
			async submit(e){
				console.log(e)
				if(!e.detail.value.name){uni.showToast({title:'请输入姓名',icon:'none'});return ;}
				if(!e.detail.value.tel){uni.showToast({title:'请输入正确的电话号码',icon:'none'});return ;}
				// if(!this.region[0]){uni.showToast({title:'请选择加盟地区',icon:'none'});return ;}
				// if(!e.detail.value.remark){uni.showToast({title:'请输入留言',icon:'none'});return ;}
				e.detail.value.province =this.region[0],e.detail.value.city =this.region[1],e.detail.value.district =this.region[2]
				if(!this.agree_declaration){uni.showToast({title:'请同意服务协议',icon:'none'});return ;}
				const res = await agentRegister(e.detail.value)
				if(res.data.status==20000){
					uni.showToast({title:'提交成功'})
					this.initData()
					setTimeout(function(){ uni.navigateBack() },1500)
				}else{
					uni.showToast({title:res.data.message,icon:'none'})
				}
			},
			changeRegion(e){
				console.log(e)
				this.region = e.detail.value
			},
			selAddr(){
						   console.log('---')
							uni.chooseLocation({
								success: (res)=> {
									// this.data.area = res.name
									// this.data.address = res.address
									console.log(res);
									// this.data.latitude = res.latitude
									// this.data.longitude = res.longitude
									this.getLocal(res.latitude,res.longitude)
								},
								fail(error) {
									console.log(error);
								}
							})				
			},
			getLocal(latitude, longitude){
						let vm = this;
						let url = 'https://apis.map.qq.com/ws/geocoder/v1/'
						let data = {
						    key: uni.getStorageSync('qqmapKey'),
						    location: latitude + ',' + longitude,
						    output: 'jsonp'
						}
						this.$jsonp(url,data).then(res => {
							console.log('---------------------------')	
							console.log(res)		
							vm.region = [res.result.ad_info.province,res.result.ad_info.city,res.result.ad_info.district]		
							vm.data.province = res.result.ad_info.province
							vm.data.city = res.result.ad_info.city
							vm.data.district = res.result.ad_info.district
				 			console.log(vm.data)			
						})  
			},
		}
	}
</script>

<style>

page{background-color: #fff;}

.yj-rectangle-btn-item{display: flex;
    align-items: center;
    justify-content: center;}

	.yj-rectangle-form-container{padding: 5px;}
	.yj-rectangle-form-wrap{display: flex;flex-direction: column;}
	.yj-rectangle-form-item{display: flex;border: 1rpx solid #EEEEEE;border-radius: 4px;height: 45px;align-items: center;padding: 0 10px;margin-bottom: 20px;}
	.yj-rectangle-form-label{display: flex;width: 80px;color: var(--mainFontColor);}
	.yj-rectangle-form-label text{color: #EF7375;margin-left: 5px;}
	.yj-rectangle-form-value{display: flex;flex: 1;justify-content: flex-end;}
	.yj-rectangle-form-value input{width: 100%;text-align: right;}
	.yj-rectangle-form-placeholder{color: #91A4B7;}
	.yj-rectangle-form-btn-icon{display: flex;width: 30px;justify-content: flex-end;}
	.yj-rectangle-btn{padding-top: 200px;}
	.yj-rectangle-btn-item{}
	.yj-rectangle-btn button{background-color: var(--mainColor);color: #fff;border-radius: 100px;height: 40px;line-height: 40px;width: 260px;font-size: 14px;}
	


</style>
