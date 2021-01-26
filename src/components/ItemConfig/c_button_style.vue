<template>
	<div class="box" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
				<el-popover placement="left" width="280" trigger="click">
					<el-form label-width="100px">
						<el-form-item :label="configData.textColor.title">
							<el-color-picker v-model="configData.textColor.value" size="small"></el-color-picker>
						</el-form-item>
						<el-form-item :label="configData.fontSize.title">
							<el-input-number v-model="configData.fontSize.value" :min="10" :max="36" :step="1"></el-input-number>
						</el-form-item>
						<el-form-item :label="configData.fontWeight.title">
							<el-select v-model="configData.fontWeight.value" placeholder="请选择">
								<el-option v-for="item in configData.fontWeight.options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
                        <el-form-item :label="configData.borderColor.title">
							<el-color-picker v-model="configData.borderColor.value" size="small"></el-color-picker>
						</el-form-item>
                        <el-form-item :label="configData.borderWidth.title">
							<el-input-number v-model="configData.borderWidth.value" :min="1" :max="36" :step="1"></el-input-number>
						</el-form-item>

                        <el-form-item :label="configData.borderStyle.title">
							<el-select v-model="configData.borderStyle.value" placeholder="请选择">
								<el-option v-for="item in configData.borderStyle.options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-form>
					<div class="button-style-box" slot="reference" style="[{background:}]"></div>
				</el-popover>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'c_button_style',
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
.box {
	font-size: 12px;
}
/deep/ .button-style-box {
	width: 50px;
	height: 50px;
	border: 1px solid #dcdfe6;
	border-radius: 50%;
	line-height: 50px;
	text-align: center;
}
</style>
