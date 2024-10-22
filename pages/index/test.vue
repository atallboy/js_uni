<template>
  <view class="container">
    <button @click="showDialog()">获取手机号码</button>


		<uni-popup ref="popupPhoneNumber" type="center">
			<view style="width: 90%;background-color: #fff;padding: 10px;border-radius: 4px;">
			  <view style="width: 100%;">
				<view style="text-align: center;line-height: 50px;font-size: 17px;font-weight: bold;">填写手机号码</view>
				<view style="height: 40px;">
					<input v-model="phoneNumber" placeholder="请输入手机号码" style="padding-left: 10px;margin-right: 0;padding: 5px;border: 1px solid #ccc;border-radius: 4px;" placeholder-style="font-size:13px;text-indent: 10px;" />
				</view>
				
				<view style="height: 40px;display: flex;align-items: center;">
				  <input v-model="verificationCode" placeholder="验证码" style="padding-left: 10px;padding: 5px;border: 1px solid #ccc;border-radius: 4px;margin-right: 10px;" placeholder-style="font-size:13px;text-indent: 10px;" />
				  <button @click="getVerificationCode" :disabled="isCountingDown" class="main-bg-color" style="font-size: 12px;padding:0;width: 80px;height: 30px;line-height: 30px;color: white;border: none;border-radius: 4px;">{{ countdownText }}</button>
				</view>
			  </view>
			  <view style="width: 100%;padding-top: 20px;">
				<button @click="confirm" class="main-bg-color" style="padding: 5px 10px;color: white;border: none;border-radius: 4px;font-size: 15px;">确定</button>
			  </view>					
			</view>	
		</uni-popup>	

  </view>
</template>

<script>
import {sendSms,verifySms} from '@/utils/api.js'
export default {
  data() {
    return {
      phoneNumber: '',
      verificationCode: '',
      isCountingDown: false,
      countdown: 60,
      countdownText: '获取验证码',
    };
  },
  methods: {
	showDialog(){
		this.$refs.popupPhoneNumber.open('center')
	},
    validatePhoneNumber(number) {
      const reg = /^[1][3-9][0-9]{9}$/; // 简单的手机号码正则
      return reg.test(number);
    },
    async getVerificationCode() {
      if (!this.phoneNumber || !this.validatePhoneNumber(this.phoneNumber)) {
        uni.showToast({title: '手机号码格式错误',icon: 'none',});return;
      }
	  uni.showLoading({title:'正在发送短信'})
	  await sendSms({phone_numbert:this.phoneNumber})
	  uni.hideLoading()
      this.isCountingDown = true;
      this.countdownText = `${this.countdown}秒`;

      const timer = setInterval(() => {
        this.countdown--;
        this.countdownText = `${this.countdown}秒`;
        if (this.countdown <= 0) {
          clearInterval(timer);
          this.isCountingDown = false;
          this.countdown = 60;
          this.countdownText = '获取验证码';
        }
      }, 1000);
    },
    async confirm() {
      if(!this.phoneNumber){uni.showToast({title: '手机号不能为空',icon: 'none',});return;}
	  if(!this.verifySms){uni.showToast({title: '验证码不能为空',icon: 'none',});return;}
	  uni.showLoading({title:'验证中'})
	  await verifySms({phone_numbert:this.phoneNumber,code:this.verificationCode})
	  uni.hideLoading()
	  this.$refs.popupPhoneNumber.close()
    },
  },
};
</script>

<style>


</style>
