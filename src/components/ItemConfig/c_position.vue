<template>
	<div class="box" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
               <el-slider v-model="configData.value" ></el-slider>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
export default {
	name: 'c_position',
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
