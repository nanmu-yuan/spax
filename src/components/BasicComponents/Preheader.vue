<template>
	<div class="Preheader" style="width:650px" :style="{marginTop:mTOP+'px'}">
		<div  class="header-justify">
			<table border="0" cellspacing="0" cellpadding="0" width="100%" :style="[{'backgroundColor':bgColor},{'backgroundImage':'url('+bgImgUrl+')'}]" :bgcolor="bgColor">
				<tbody>
					<tr>
						<td style="padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:15px;">
							<table border="0" cellspacing="0" cellpadding="0" width="100%">
								<tbody>
									<tr>
										<td :style="[{'color':textColor},{'fontSize':fontSize+'px'},{'textAlign':txtPosition}]"><span>{{LtitleTxt}}</span></td>
										<td style="text-align:right">
											<a target="_blank" :href="link" :style="[{'color':textColor},{'fontSize':fontSize+'px'},{'fontWeight':'normal'},{'textDecoration':'underline'}]"><span>{{RtitleTxt}}</span></a>
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
		styleType:{
			type:String
		}
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
					title: '左边文本',
					value: 'If you cannot see images, please',
					max: 100,
				},
				RConfigText: {
					title: '右边文本',
					value: 'If you cannot see images, please',
					max: 100,
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
				BgImgConfig:{
					title:'背景图',
					value:''
				}
			},
			LtitleTxt: '',
			RtitleTxt: '',
			link: '',
			txtPosition: '',
			txtStyle: '',
			fontSize: '',
			textColor: '#000000',
			mTOP: 0,
			pageData: {},
			bgColor: '',
			bgImgUrl:''
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
			this.RtitleTxt = data.RConfigText.value;
			this.link = data.linkConfig.value;
			this.bgColor = data.BgColorConfig.value;
			this.textColor = data.fontColorConfig.value;
			// this.txtPosition =
			// 	data.textPosition.list[data.textPosition.type].style;
			// this.txtStyle = data.textStyle.list[data.textStyle.type].style;
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