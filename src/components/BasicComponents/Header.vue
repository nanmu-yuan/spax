<template>
	<div class="Header">
		<div class="title-box" :style="[
            {'textAlign':txtPosition},
            {'fontStyle':txtStyle!='bold'?txtStyle:''},
            {'fontWeight':txtStyle=='bold'?txtStyle:''},
            {'fontSize':fontSize+'px'},
            {'marginTop':mTOP+'px'}
         ]">
			<a :href="link"><span>{{titleTxt}}</span></a>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'Header',
	configName: 'c_home_title',
	cname: '头部模块',
	icon:'el-icon-bank-card',
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
				titleConfig: {
					title: '标题',
					value: '内容',
					max: 100,
				},
				linkConfig: {
					title: '链接',
					value: '',
					max: 100,
				},
			},
			titleTxt: '',
			link: '',
			txtPosition: '',
			txtStyle: '',
			fontSize: 0,
			mTOP: 0,
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
			if(!data) return;
			this.titleTxt = data.titleConfig.value;
			this.link = data.linkConfig.value;
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
.title-box {
	color: #282828;
}
</style>