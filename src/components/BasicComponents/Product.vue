<template>
	<div class="banner">
		<table border="0" cellspacing="0" cellpadding="0" width="100%">
			<tbody>
				<tr>
					<td class="mobile-desktop" style="" bgcolor="" background="">
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:20px;">
										<colum1view v-if="columns == 1" :list = "list"></colum1view>
										<colum2view v-if="columns == 2" :list = "list"></colum2view>
										<colum3view v-if="columns == 3" :list = "list"></colum3view>
										<colum4view v-if="columns == 4" :list = "list"></colum4view>
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
import { colum1view, colum2view, colum3view, colum4view } from '../block';
export default {
	name: 'product',
	configName: 'c_product',
	cname: 'product',
	icon: 'el-icon-s-cooperation',
	type: '1',
	props: {
		index: {
			type: null,
		},
		num: {
			type: null,
		},
	},
	components: {
		colum1view,
		colum2view,
		colum3view,
		colum4view,
	},
	computed: {
		...mapState('admin/mobildConfig', ['defaultArray']),
	},
	data() {
		return {
			defaultConfig: {
				name: 'c_product',
				timestamp: this.num,
				productContentConfig:{
					title:'产品数据',
					value:'',
				    list: [],
				
				},
				productShowTypeConfig: {
					title: 'TYPE',
					value: '1',
					options: [
						{
							value: '1',
							label: '1 product in row',
						},
						{
							value: '2',
							label: '2 product in row',
						},
						{
							value: '3',
							label: '3 product in row',
						},
						{
							value: '4',
							label: '4 product in row',
						},
					],
				},
			},
			pageData: {},
			columns: '1',
			list:[]
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
			this.columns = data.productShowTypeConfig.value;
			this.list = data.productContentConfig.list;
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