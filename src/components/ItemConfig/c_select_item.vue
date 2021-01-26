<template>
	<div class="box" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
				<el-select v-model="configData.value" placeholder="请选择">
					<el-option v-for="item in configData.options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
export default {
	name: 'c_select_item',
	props: {
		configObj: {
			type: Object,
		},
		configName: {
			type: String,
		},
	},
	data() {
		return {
			value: '',
			defaults: {},
			configData: {},
		};
	},
	created() {
		this.defaults = this.configObj;
		this.configData = this.configObj[this.configName];
	},
	watch: {
		configObj: {
			handler(nVal, oVal) {
				this.defaults = nVal;
				this.configData = nVal[this.configName];
			},
			immediate: true,
			deep: true,
		},
	},
};
</script>

<style scoped lang="less">
.c_row-item {
	margin-bottom: 13px;
}
</style>
