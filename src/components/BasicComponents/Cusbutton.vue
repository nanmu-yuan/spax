<template>
	<div>
		<table border="0" cellspacing="0" cellpadding="0" width="100%">
			<tbody>
				<tr>
					<td class="mobile-desktop" :bgcolor="bgColor" :style="[{background:bgColor},{'backgroundImage':'url('+bgImgUrl+')'}]">
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td :style="[{paddingBottom:padBottom+'px'},{paddingTop:padTop+'px'},{paddingLeft:padLeft+'px'},{paddingRight:padRight+'px'}]">
										<div class="mobile-buttons-table" style="display: table; width: 100%;">
											<div class="mobile-buttons-row" style="display: table-row;">
												<div class="mobile-buttons-cell" style="display: table-cell; width: 184px; vertical-align: top;" v-for="(item,index) of buttonList" :key="index">
													<table border="0" cellpadding="0" cellspacing="0" width="" align="center" style="margin: 0 auto; border-collapse: separate !important;">
														<tbody>
															<tr>
																<td class="webfont-fallback-1" :style="[{borderRadius:borderRadius+'px'},{fontFamily:'Arial, sans-serif'},{fontWeight:fontWeight},{paddingBottom:'7px'},{paddingLeft:'20px'},{paddingRight:'20px'},{paddingTop:'7px'},{textAlign:'center'},{verticalAlign:'middle'},{borderColor:borderColor},{borderWidth:borderWidth+'px'},{borderStyle:borderStyle}]">
																	<div style="line-height: 17px; text-align: center;">
																		<a class="webfont-fallback-1" target="_blank" :style="[{lineHeight: '17px'},
																		{fontFamily:'Arial, sans-serif'},{fontSize:fontSize+'px'},{color:textColor},{textAlign:'center'},{textDecoration:'none'}]" :href="item.link.value"><span style="line-height: 17px;">{{item.text.value}}</span></a>
																	</div>
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
	name: 'cusbutton',
	configName: 'c_cusbutton',
	cname: 'button',
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
				name: 'c_cusbutton',
				timestamp: this.num,
				addButtonConfig: [
					{
						text: {
							title: 'TEXT',
							value: 'READ MORE',
						},
						link: {
							title: 'LINK',
							value: '',
						},
					},
				],
				positionConfig: [
					{
						title: 'LEFT PADDING',
						value: 0,
					},
					{
						title: 'RIGHT PADDING',
						value: 0,
					},
					{
						title: 'TOP PADDING',
						value: 10,
					},
					{
						title: 'BOTTOM PADDING',
						value: 10,
					},
				],
				BgColorConfig: {
					title: '背景色',
					value: '#ffffff',
				},
				BgImgConfig: {
					title: '背景图',
					value: '',
				},
				fontConfig: {
					title: 'button',
					textColor: {
						title: 'font color',
						value: '',
					},
					fontSize: {
						title: 'font size',
						value: 12,
					},
					fontWeight: {
						title: 'font weight',
						value: 'Normal',
						options: [
							{
								value: 'Bold',
								label: 'Bold',
							},
							{
								value: 'Normal',
								label: 'Normal',
							},
						],
					},
					borderColor: {
						title: 'border color',
						value: '',
					},
					borderWidth: {
						title: 'border width',
						value: '',
					},
					borderStyle: {
						title: 'border style',
						value: 'None',
						options: [
							{
								value: 'None',
								label: 'None',
							},
							{
								value: 'Solid',
								label: 'Solid',
							},
							{
								value: 'Dashed',
								label: 'Dashed',
							},
							{
								value: 'Dotted',
								label: 'Dotted',
							},
						],
					},
					borderRadius:{
						title: 'border radius',
						value: 0,
					}
				},
			},
			buttonList: [],
			padLeft: '',
			padRight: '',
			padRight: '',
			padTop: '',
			padBottom: '',
			pageData: {},
			bgColor: '',
			bgImgUrl: '',
			textColor: '',
			fontSize:'',
			fontWeight:'',
			borderColor:'',
			borderWidth:'',
			borderStyle:'',
			borderRadius:'',
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
			this.buttonList = data.addButtonConfig;
			this.padLeft = data.positionConfig[0].value;
			this.padRight = data.positionConfig[1].value;
			this.padTop = data.positionConfig[2].value;
			this.padBottom = data.positionConfig[3].value;
			this.bgColor = data.BgColorConfig.value;
			this.bgImgUrl = data.BgImgConfig.value;
			this.textColor =  data.fontConfig.textColor.value;
			this.fontSize =  data.fontConfig.fontSize.value;
			this.fontWeight =  data.fontConfig.fontWeight.value;
			this.borderColor =  data.fontConfig.borderColor.value;
			this.borderWidth =  data.fontConfig.borderWidth.value;
			this.borderStyle =  data.fontConfig.borderStyle.value;
			this.borderRadius = data.fontConfig.borderRadius.value;
			// this.textColor = data.fontConfig.value;
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