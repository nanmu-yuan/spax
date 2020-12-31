<template>
	<div class="box" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
               <el-input v-model="configData.value" placeholder="选填不超过10个字" :maxlength="configData.max" type=""></el-input>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
export default {
	name: 'c_input_item',
	props: {
		configObj: {
			type: Object,
		},
		configNme: {
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

		this.configData = this.configObj[this.configNme];
		console.log(this.configData);
	},
	watch: {
		configObj: {
			handler(nVal, oVal) {
				this.defaults = nVal;
				this.configData = nVal[this.configNme];
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
