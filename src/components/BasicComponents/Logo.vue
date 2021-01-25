<template>
	<div style="width:650px">
		<table border="0" cellspacing="0" cellpadding="0" width="100%">
			<tbody>
				<tr>
					<td bgcolor="" :style="{background:bgColor}">
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td :style="[{'paddingLeft':padLeft+'px'},{'paddingRight':padRight+'px'}]">
										<table border="0" cellspacing="0" cellpadding="0" width="100%">
											<tbody>
												<tr>
													<td :style="[{borderTop:'1px solid #666666'},{borderBottom:'1px solid #666666'}]">
														<table border="0" cellspacing="0" cellpadding="0" width="100%">
															<tbody>
																<tr>
																	<td style="">
																		<table border="0" cellspacing="0" cellpadding="0" width="100%">
																			<tbody>
																				<tr>
																					<td :style="[{'paddingBottom':padBottom+'px'},{'paddingTop':padTop+'px'}]">
																						<table border="0" cellpadding="0" cellspacing="0" width="100%" style="">
																							<tbody>
																								<tr>
																									<td style="text-align: center;">
																										<a target="_blank" :href="alink">
																											<img v-if="imgUrl" :src="imgUrl" alt="" :style="[{'width': 650-(padLeft+padRight)+'px'}]">
																											<span v-else class="image-placeholder" style="">
																												<span class="placeholder-style" :style="[{'width': 650-(padLeft+padRight)+'px'}, {'height': '100px'}]">
																													<span class="placeholder-inner">
																														<img src="../../assets/imgs/placeholder-img80.png" width="40">
																													</span>
																												</span>
																											</span>
																										</a>
																									</td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
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
	name: 'logo',
	configName: 'c_logo',
	cname: 'logo',
	icon: 'el-icon-s-promotion',
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
</style>