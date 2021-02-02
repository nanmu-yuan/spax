<template>
	<div class="c_edit" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
				<quill-editor v-model="configData.value" :options="editorOption" class="ql-snow ql-editor">
				</quill-editor>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor';
import Quill from 'quill';
let fontSizeStyle = Quill.import('attributors/style/size');
fontSizeStyle.whitelist = [
	'12px',
	'14px',
	'16px',
	'18px',
	'20px',
	'22px',
	'24px',
	'26px',
];
Quill.register(fontSizeStyle, true);
export default {
	name: 'c_edit',
	components: {
		quillEditor,
	},
	data() {
		return {
			value: '',
			defaults: {},
			configData: {},
			color2: '',
			editorOption: {
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'], // toggled buttons
						[{ size: fontSizeStyle.whitelist }],
					],
				},
			},
		};
	},
	props: {
		configObj: {
			type: Object,
		},
		configName: {
			type: String,
		},
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
	created() {
		this.defaults = this.configObj;
		this.configData = this.configObj[this.configName];
	},
};
</script>
<style lang="less" scoped>
.c_edit {
	/deep/.ql-container.ql-snow {
		min-height: 250px;
	}
	/deep/ .ql-container.ql-snow {
		min-height: 260px;
	}
	/deep/ .quill-editor.ql-snow.ql-editor {
		padding: 0;
	}

	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='12px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='12px']::before {
		content: '12px';
	}
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='14px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='14px']::before {
		content: '14px';
	}
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='16px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='16px']::before {
		content: '16px';
	}
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='18px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='18px']::before {
		content: '18px';
	}

	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='20px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='20px']::before {
		content: '20px';
	}
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='22px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='22px']::before {
		content: '22px';
	}

	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='24px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='24px']::before {
		content: '24px';
	}

	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-label[data-value='26px']::before,
	/deep/
		.ql-snow
		.ql-picker.ql-size
		.ql-picker-item[data-value='26px']::before {
		content: '26px';
	}
}
</style>