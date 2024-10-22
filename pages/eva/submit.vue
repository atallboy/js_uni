<template>
	<view>
		<view class="yj-container">


			<view style="padding: 20px 0;">
				<uni-rate size="38" margin="20" allow-half v-model="score" />
			</view>

			<view style="padding-bottom: 20px;">
				<checkbox-group @change="changeTag">
					<label v-for="item in tag" style="margin-right: 10px;">
						<checkbox :value="item" style="transform:scale(0.7)" />{{item}}
					</label>
				</checkbox-group>
			</view>

			<view class="form-textarea">
				<textarea @input="bindInput" placeholder-class="form-textarea-placeholder" auto-height
					placeholder="输入评价内容" />
			</view>


			<view class="btn-container">
				<view class="btn-item btn-confirm" @click="submit()">确定</view>

			</view>




		</view>
	</view>
</template>

<script>
	import {
		evaSubmit
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				e: {},
				imgArr: [],
				host: '',
				content: '',
				score: 0,
				tag: uni.getStorageSync('settingInfo').eva_tag,
				selTag: []
			}
		},
		onLoad(e) {
			this.e = e
		},
		onShow() {
			this.host = uni.getStorageSync('siteroot')
		},
		methods: {
			changeTag(e) {
				console.log(e)
				this.selTag = e.detail.value
			},
			async submit() {
				if (!this.score) {
					uni.showToast({
						title: '请点击星星评分',
						icon: 'none'
					});
					return
				}
				if (!this.content) {
					uni.showToast({
						title: '请输入评价内容',
						icon: 'none'
					});
					return
				}
				console.log(this.selTag)
				const res = evaSubmit({
					cate: 1,
					content: this.content,
					score: this.score,
					tag: this.selTag.join('&'),
					order_id: this.e.order_id
				})
				uni.showToast({
					title: '提交成功'
				})
				setTimeout(function() {
					uni.navigateBack()
				}, 1500)
			},
			bindInput(e) {
				console.log(e);
				this.content = e.detail.value;
			},
			navigateBack() {
				uni.navigateBack()
			},
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.yj-container {
		padding: 10px;
	}

	.uni-rate {
		justify-content: center;
	}

	.form-textarea {
		padding: 10px;
		padding: 10px;
		border-radius: 4px;
		background-color: rgb(242, 247, 248);
	}

	.form-textarea textarea {
		min-height: 100px;
		width: 100%;
	}

	.form-textarea .form-textarea-placeholder {
		font-size: 13px;
	}

	.btn-container {
		padding: 50px 10px 0;
	}

	.btn-item {
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 42px;
		font-weight: 600;
	}

	.btn-confirm {
		background-color: var(--mainColor);
		color: #fff;
		margin-bottom: 30px;
	}

	.btn-cancel {
		background-color: rgb(242, 247, 248);
		color: #444;
	}

	.yj-footer {
		margin-top: 50px;
		display: flex;
		color: #bbb;
		padding: 10px 30px 50px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.yj-footer-title {
		display: flex;
		align-items: center;
		height: 30px;
	}

	.yj-footer-blk {
		display: flex;
		flex: 1;
	}

	.yj-footer-blk-line {
		width: 50px;
		height: 1px;
		background-color: #f1f1f1;
	}

	.yj-footer-title-txt {
		display: flex;
		padding: 0 20px;
	}

	.yj-footer-desc {
		font-size: 11px;
		margin-top: 10px;
	}
</style>