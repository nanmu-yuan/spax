<template>
	<div class="c_color" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
				<el-color-picker v-model="configData.value"></el-color-picker>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
	name: 'c_color',
	data() {
		return {
			value: '',
			defaults: {},
			configData: {},
			color2: '',
		};
	},
	props: {
		configObj: {
			type: Object,
		},
		configNme: {
			type: String,
		},
	},
	watch: {
		configObj: {
			handler(nVal, oVal) {
				console.log(nVal)
				this.defaults = nVal;
				this.configData = nVal[this.configNme];
			},
			immediate: true,
			deep: true,
		},
	},
	created() {
		this.defaults = this.configObj;
		this.configData = this.configObj[this.configNme];
		console.log(this.configData);
	},
};
</script>
<style lang="less" scoped>
.bg_color {
}
</style>