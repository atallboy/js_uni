<template>
	<view>
		<view style="padding: 14px;" v-if="data.status!=2">
<!-- 			<view class="fast-wrap-label">
				<view class="fast-wrap-label-dot"></view> 分销商
			</view>	 -->
			<view class="yj-rectangle-form-container">
				<form @submit="submit">
					<view class="yj-rectangle-form-wrap">
						<view class="yj-rectangle-form-item">
							<view class="yj-rectangle-form-label">
								名<text style="color: #fff;">一一</text>称<text>*</text>
							</view> 
							<view class="yj-rectangle-form-value">
								<input type="text" name="name" :value="data.name" placeholder="请输入名称" placeholder-class="yj-rectangle-form-placeholder" />
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
						<picker :value="roleIndex" :range="roleArray" @change="bindRoleChange" v-if="!data.id">
							<view class="yj-rectangle-form-item">
								<view class="yj-rectangle-form-label">角色身份</view>
								<view class="yj-rectangle-form-value service-time">
									<text v-if="roleIndex==-1">请选择角色身份</text>
									<text v-else>{{roleArray[roleIndex]}}</text>
								</view>
								<view class="order-param-icon">
									<uni-icons type="forward" size="15" color="#24C373"></uni-icons>
								</view>
							</view>
						</picker>
						<view class="yj-rectangle-form-item" v-else>
							<view class="yj-rectangle-form-label">
								角色身份<text>*</text>
							</view> 
							<view class="yj-rectangle-form-value">
								<input type="text" :value="data.role" disabled placeholder="" placeholder-class="yj-rectangle-form-placeholder" />
							</view>
						</view>
						<view class="yj-rectangle-form-item" @click="selAddr">
							<view class="yj-rectangle-form-label">
								所在地区<text>*</text>
							</view> 
							<view class="yj-rectangle-form-value">
								{{region[0]}} {{region[1]}} {{region[2]}}
							</view>
						</view>
						<view class="yj-rectangle-form-item">
							<view class="yj-rectangle-form-label">
								申请理由
							</view> 
							<view class="yj-rectangle-form-value">
								<input type="text" name="apply_reason" :value="data.apply_reason" placeholder="请输入" placeholder-class="yj-rectangle-form-placeholder" />
							</view>
						</view>	
						<view class="yj-rectangle-form-item" v-if="!data.id">
							<view class="yj-rectangle-form-label">
								分销码编号
							</view> 
							<view class="yj-rectangle-form-value">
								<input type="text" name="serial_number" :value="e.serial_number" disabled placeholder="若无分销码编号请留空" placeholder-class="yj-rectangle-form-placeholder" />
							</view>
						</view>							
						<view>
							<yj-access-privacy @clickCheckBox="clickCheckBox"></yj-access-privacy>
						</view>
						<view class="yj-rectangle-btn">
							<view class="yj-rectangle-btn-item">
								<button  v-if="data.status!=0 && data.status!=1" form-type="submit">同意并提交</button>
								<button  v-if="data.status==0" disabled>平台审核中</button>
								<button  v-if="data.status==1" form-type="submit">保存</button>
							</view>
						</view>																
					</view>
				</form>

			</view>
		</view>		
		<view  v-if="data.status==2">
			<view style="padding-top: 50px;text-align: center;">
				你的分销商申请已被拒绝，可重新申请 <view @click="reApply()" style="color: green;font-weight: bold;margin-top: 10px;">点击重新申请</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {editDistributeMch, distributeMchInfo} from '@/utils/api.js'
	export default {

		data() {
			return {
				e:{},
			   region:['','',''],
			   data:{},
			   agree_declaration:true,
			   roleArray: ['酒店', '普通用户', '其它'],
			   roleIndex: -1,
			}
		},
		created() {
			this.initData()
		},
		
		onLoad(e) {
			this.e = e
		},
		
		methods: {
			bindRoleChange(e) {
				this.roleIndex = e.detail.value
			},
			reApply(){
				this.data = {}
			},
			clickCheckBox(e){
				this.agree_declaration = !this.agree_declaration
			},
			async initData(){
				const res = await distributeMchInfo()
				console.log(res)
				this.data = res.data.data
				if(this.data){
					this.region = [res.data.data.province,res.data.data.city,res.data.data.district]
					if(this.data.role=='酒店')this.roleIndex=0
					if(this.data.role=='普通用户')this.roleIndex=1
					if(this.data.role=='其它')this.roleIndex=2
				}


			},
			async submit(e){
				console.log(e)
				if(!e.detail.value.name){uni.showToast({title:'请输入姓名',icon:'none'});return ;}
				if(!e.detail.value.tel){uni.showToast({title:'请输入正确的电话号码',icon:'none'});return ;}
				if(!this.roleIndex==-1){uni.showToast({title:'请选择角色身份',icon:'none'});return ;}
				e.detail.value.role = this.roleArray[this.roleIndex]
				if(!this.region[0]){uni.showToast({title:'请选择所在地区',icon:'none'});return ;}
				e.detail.value.province =this.region[0],e.detail.value.city =this.region[1],e.detail.value.district =this.region[2]
				if(!this.agree_declaration){uni.showToast({title:'请同意服务协议',icon:'none'});return ;}
				if(this.data.id)e.detail.value.id = this.data.id
				const res = await editDistributeMch(e.detail.value)
				if(res.data.status==20000){					
					uni.showToast({title:res.data.message})
					if(res.data.data==1){
						setTimeout(function(){ 
							uni.redirectTo({url:'console'})
						},1500)						
					}else{
						setTimeout(function(){
							uni.switchTab({
								url:'/pages/mine/index'
							})
						},1500)	
					}
					this.initData()
				
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
