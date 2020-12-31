<template>
	<div class="Header" style="width:650px" :style="{marginTop:mTOP}">
		<table border="0" cellspacing="0" cellpadding="0" width="100%" :style="{'backgroundColor':bgColor}" :bgcolor="bgColor">
			<tbody>
				<tr>
					<td>
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td style="padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:15px;">
										<table border="0" cellspacing="0" cellpadding="0" width="100%">
											<tbody>
												<tr>
													<td :style="[{'color':textColor},{'fontSize':fontSize},{'textAlign':txtPosition}]"><span>{{LtitleTxt}}</span> <a target="_blank" :href="link" style="color:#cc3366;font-size:13px;font-weight:normal;text-decoration:underline;"><span>{{RtitleTxt}}</span></a></td>
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
	name: 'Header',
	configName: 'c_home_title',
	cname: '头部模块',
	icon: 'el-icon-bank-card',
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
			// 默认初始化数据禁止修改
			defaultConfig: {
				name: 'header',
				timestamp: this.num,
				LConfigText: {
					title: '左边文本',
					value: '内容',
					max: 100,
				},
				RConfigText: {
					title: '右边文本',
					value: '内容',
					max: 100,
				},
				linkConfig: {
					title: '链接',
					value: '',
					max: 100,
				},
				BgColorConfig: {
					title: '背景色',
					value: '',
				},
			},
			LtitleTxt: '',
			RtitleTxt:'',
			link: '',
			txtPosition: '',
			txtStyle: '',
			fontSize: 12,
			textColor:'#000',
			mTOP: 0,
			pageData: {},
			bgColor:''
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
			this.bgColor = data.BgColorConfig.value
			// this.txtPosition =
			// 	data.textPosition.list[data.textPosition.type].style;
			// this.txtStyle = data.textStyle.list[data.textStyle.type].style;
			// this.fontSize = data.fontSize.val;
			// this.mTOP = data.mbConfig.val;
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
.Header{
	margin: 4px 0;
}
.title-box {
	color: #282828;
}
</style>