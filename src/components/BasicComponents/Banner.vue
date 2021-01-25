<template>
	<div class="banner" :style="{marginTop:mTOP+'px'}">
		<table border="0" cellpadding="0" cellspacing="0" width="100%" style="">
			<tbody>
				<tr>
					<td>
						<table border="0" cellpadding="0" cellspacing="0" width="100%" style="">
							<tbody>
								<tr>
									<td  v-if="imgType=='1'"  :style="[{background:'#ffffff'}]">
										<div>
											<table border="0" cellpadding="0" cellspacing="0" width="100%" style="">
												<tr>
													<td style="text-align: center;font-size:0;line-height:0;">
														<a target="_blank" :href="link">
															<img v-if="imgUrl" :src="imgUrl" width="650" alt="" border="0">
															<span class="image-placeholder" v-if="!imgUrl">
																<span class="placeholder-style" style="width: 650px; height: 300px;">
																	<span class="placeholder-inner">
																		<img class="placeholder-img-large" src="../../assets/imgs/placeholder-img200.png" width="100"><br>
																	</span>
																</span>
															</span>
														</a>
													</td>
												</tr>
											</table>
										</div>
									</td>
									<td v-if="imgType=='2'" :style="[{paddingBottom:'20px'},{paddingTop:'20px'},{background:'#ffffff'}]">
										<div>
											<table border="0" cellpadding="0" cellspacing="0" width="100%" style="">
												<tr>
													<td style="text-align: center; padding-left:20px;padding-right:20px;font-size:0;line-height:0;">
														<a target="_blank" :href="link">
															<img v-if="imgUrl" :src="imgUrl" width="610" alt="" border="0">
															<span class="image-placeholder" v-if="!imgUrl">
																<span class="placeholder-style" style="width: 610px; height: 300px;">
																	<span class="placeholder-inner">
																		<img class="placeholder-img-large" src="../../assets/imgs/placeholder-img200.png" width="100"><br>
																	</span>
																</span>
															</span>
														</a>
													</td>
												</tr>
											</table>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'banner',
	configName: 'c_banner',
	cname: 'banner',
	icon: 'el-icon-picture',
	type: '1',
	props: {
		index: {
			type: null,
		},
		num: {
			type: null,
		},
	},
	computed: {
		...mapState('admin/mobildConfig', ['defaultArray']),
	},
	data() {
		return {
			defaultConfig: {
				name: 'c_home_title',
				timestamp: this.num,
				LConfigImg: {
					title: '图片',
					value: '',
				},
				linkConfig: {
					title: '链接',
					value: '',
					max: 100,
				},
				positionConfig: {
					title: '顶部距离',
					value: 0,
				},
				imgShowConfig: {
					title: '显示类型',
					options: [
						{
							value: '1',
							label: 'Full width',
						},
						{
							value: '2',
							label: 'original size',
						}
					],
					value:'1'
				},
			},
			imgUrl: '',
			link: '',
			mTOP: 10,
			pageData: {},
			imgType:''
		};
	},
	watch: {
		pageData: {
			handler(nVal, oVal) {
				this.setConfig(nVal);
			},
			deep: true,
		},
		num: {
			handler(nVal, oVal) {
				let data = this.$store.state.admin.mobildConfig.defaultArray[
					nVal
				];
				this.setConfig(data);
			},
			deep: true,
		},
		defaultArray: {
			handler(nVal, oVal) {
				let data = this.$store.state.admin.mobildConfig.defaultArray[
					this.num
				];
				this.setConfig(data);
			},
			deep: true,
		},
	},
	methods: {
		setConfig(data) {
			if (!data) return;
			this.imgUrl = data.LConfigImg.value;
			this.link = data.linkConfig.value;
			this.mTOP = data.positionConfig.value;
			this.imgType = data.imgShowConfig.value;
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.pageData = this.$store.state.admin.mobildConfig.defaultArray[
				this.num
			];
			this.setConfig(this.pageData);
		});
	},
};
</script>
<style lang="less" scoped>
.banner {
	.image-placeholder {
		display: inline-block;
		.placeholder-style {
			background-color: #f2f2f2;
			color: #b6b6b6;
			font-family: Arial, sans-serif;
			text-align: center;
			font-size: 12px;
			position: relative;
			min-width: 40px;
			min-height: 40px;
			display: inline-block;
			vertical-align: top;
			.placeholder-inner {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				-webkit-transform: translate(-50%, -50%);
				margin: auto;
				width: 100%;
			}
		}
	}
}
.title-box {
	color: #282828;
}
</style>