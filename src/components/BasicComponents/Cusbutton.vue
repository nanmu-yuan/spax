<template>
	<div>
		<table border="0" cellspacing="0" cellpadding="0" width="100%">
			<tbody>
				<tr>
					<td class="mobile-desktop" style="" bgcolor="" background="">
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:20px;">
										<div class="mobile-buttons-table" style="display: table; width: 100%;">
											<div class="mobile-buttons-row" style="display: table-row;">
												<!--[if (mso)|(IE)]><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><![endif]-->
												<!--[if (mso)|(IE)]><td style="width: 184px; vertical-align: top;"><![endif]-->
												<div class="mobile-buttons-cell" style="display: table-cell; width: 184px; vertical-align: top;">
													<table border="0" cellpadding="0" cellspacing="0" width="" align="center" style="margin: 0 auto; border-collapse: separate !important;">
														<tbody>
															<tr>
																<td class="webfont-fallback-1" style="border-radius:0px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding-bottom:7px;padding-left:20px;padding-right:20px;padding-top:7px;text-align:center;vertical-align:middle;">
																	<!--[if (mso)|(IE) ]><table border="0" cellpadding="0" cellspacing="0"><tr><td style="line-height: 17px;text-align: center;"><![endif]-->
																	<!--[if !mso]><!-->
																	<div style="line-height: 17px; text-align: center;">
																		<!--<![endif]--><a class="webfont-fallback-1" target="_blank" style="line-height: 17px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-align:center;text-decoration:none;" href=""><span style="line-height: 17px;">READ MORE</span></a>
																		<!--[if !mso]><!-->
																	</div>
																	<!--<![endif]-->
																	<!--[if (mso)|(IE) ]></td></tr></table><![endif]-->
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
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
	name: 'Cusbutton',
	configName: 'c_cusbutton',
	cname: 'Cusbutton',
	icon: 'el-icon-switch-button',
	type: '1',
	props: {
		index: {
			type: null,
		},
		num: {
			type: null,
		},
		styleType: {
			type: String,
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
				BgColorConfig: {
					title: '背景色',
					value: '#ffffff',
				},
				positionConfig: [
					
						{
							title: 'LEFT PADDING',
							value: 200
						},
						{
							title:'RIGHT PADDING',
							value:200
						},
						{
							title:'TOP PADDING',
							value:0
						},
						{
							title:'BOTTOM PADDING',
							value:0
						}
				],
			},
			imgUrl: '',
			alink: '',
			padLeft: '',
			padRight: '',
			padTop:'',
			bgColor:'',
			padBottom:'',
			pageData: {},
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
			this.alink = data.linkConfig.value;
			this.padLeft = data.positionConfig[0].value;
			this.padRight = data.positionConfig[1].value;
			this.padTop =  data.positionConfig[2].value;
			this.padBottom =  data.positionConfig[3].value;
			this.bgColor = data.BgColorConfig.value;
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
.title-box {
	color: #282828;
}
</style>