<template>
	<div class="Preheader" style="width:650px" :style="{marginTop:mTOP+'px'}">
		<div class="header-justify">
			<table border="0" cellspacing="0" cellpadding="0" width="100%" :style="[{'backgroundColor':bgColor},{'backgroundImage':'url('+bgImgUrl+')'}]" :bgcolor="bgColor">
				<tbody>
					<tr>
						<td :style="[{paddingBottom:'15px'},{paddingLeft:'20px'},{paddingRight:'20px'},{paddingTop:'15px'}]">
							<table border="0" cellspacing="0" cellpadding="0" width="100%">
								<tbody>
									<tr>
										<td :style="[{'color':textColor},{'fontSize':fontSize+'px'},{'textAlign':txtPosition}]"><span>{{LtitleTxt}}</span>
											<a target="_blank" href="" style="color:#cc3366;font-family:Arial, sans-serif;font-size:13px;font-weight:normal;line-height:115%;text-decoration:none;"><span>click here</span></a>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'Preheader',
	configName: 'c_home_title',
	cname: 'Preheader',
	icon: 'el-icon-bank-card',
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
			// 默认初始化数据禁止修改
			defaultConfig: {
				name: 'c_home_title',
				timestamp: this.num,
				LConfigText: {
					title: '文本',
					value: 'If you cannot see images, please',
					max: 100,
				},
				typeConfig: {
					title: '显示类型',
					options: [
						{
							value: 'left',
							label: 'left',
						},
						{
							value: 'right',
							label: 'right',
						},
						{
							value: 'center',
							label: 'center',
						},
					],
					value: 'center',
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
				fontColorConfig: {
					title: '字体样色',
					value: '#000000',
				},
				positionConfig: {
					title: '顶部距离',
					value: 0,
				},
				fontSizeConfig: {
					title: '字体大小',
					value: 12,
				},
				BgImgConfig: {
					title: '背景图',
					value: '',
				},
			},
			LtitleTxt: '',
			txtPosition: '',
			txtStyle: '',
			fontSize: '',
			textColor: '#000000',
			mTOP: '',
			pageData: {},
			bgColor: '',
			bgImgUrl: '',
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
			this.LtitleTxt = data.LConfigText.value;
			this.link = data.linkConfig.value;
			this.bgColor = data.BgColorConfig.value;
			this.textColor = data.fontColorConfig.value;
			this.txtPosition = data.typeConfig.value;
			this.fontSize = data.fontSizeConfig.value;
			this.mTOP = data.positionConfig.value;
			this.bgImgUrl = data.BgImgConfig.value;
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