<template>
	<div class="box" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
                <el-input-number v-model="configData.value" @change="handleChange" :min="0"></el-input-number>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
export default {
	name: 'c_input_number',
	ctype:'style',
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
    },
    methods: {
        handleChange(value){
            this.configData.value = value;
        }
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
