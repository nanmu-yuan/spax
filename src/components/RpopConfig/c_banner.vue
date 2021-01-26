<template>
	<div class="mobile-config">
		<el-tabs type="card" v-model="activeName">
			<el-tab-pane label="内容" name="first">
				<div v-for="(item,key) in rComContent" :key="key">
					<component :is="item.components.name" :configObj="configObj" ref="childData" :configName="item.configName" :key="key" @getConfig="getConfig" :index="activeIndex" :num="item.num"></component>
					<el-divider></el-divider>
				</div>
			</el-tab-pane>
			<el-tab-pane label="样式" name="second">
				<div v-for="(item,key) in rComStyle" :key="key">
					<component :is="item.components.name" :configObj="configObj" ref="childData" :configName="item.configName" :key="key" @getConfig="getConfig" :index="activeIndex" :num="item.num"></component>
					<el-divider></el-divider>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import toolCom from '../ItemConfig';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
	name: 'c_home_bargain',
	componentsName: 'home_bargain',
	components: {
		...toolCom,
	},
	props: {
		activeIndex: {
			type: null,
		},
		num: {
			type: null,
		},
		index: {
			type: null,
		},
	},
	data() {
		return {
			activeName:'first',
			configObj: {},
			rComContent: [
				{
					components: toolCom.c_upload,
					configName: 'LConfigImg',
				},
				{
					components: toolCom.c_input_item,
					configName: 'linkConfig',
				},
			],
			rComStyle: [
				{
					components: toolCom.c_input_number,
					configName: 'positionConfig',
				},
				{
					components: toolCom.c_select_item,
					configName: 'imgShowConfig',
				},
			],
		};
	},
	watch: {
		num(nVal) {
			let value = JSON.parse(
				JSON.stringify(
					this.$store.state.admin.mobildConfig.defaultArray[nVal]
				)
			);
			this.configObj = value;
		},
		configObj: {
			handler(nVal, oVal) {
				this.$store.commit('admin/mobildConfig/UPDATEARR', {
					num: this.num,
					val: nVal,
				});
			},
			deep: true,
		},
	},
	mounted() {
		this.$nextTick(() => {
			let value = JSON.parse(
				JSON.stringify(
					this.$store.state.admin.mobildConfig.defaultArray[this.num]
				)
			);
			this.configObj = value;
		});
	},
	methods: {
		// 获取组件参数
		getConfig(data) {},
	},
};
</script>

<style scoped lang="less">
.title-tips {
	padding-bottom: 10px;
	font-size: 14px;
	color: #333;
	span {
		margin-right: 14px;
		color: #999;
	}
}
</style>
