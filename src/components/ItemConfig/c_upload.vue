<template>
	<div class="box" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
				<el-upload class="avatar-uploader" action="https://admin.fashionmia.net/opbm.php?a=EdmImages&m=Api" :show-file-list="false" :on-success="handleAvatarSuccess">
					<img v-if="configData.value" style="width:50px;height:50px" :src="configData.value" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
		</el-form>

	</div>

</template>

<script>
export default {
	name: 'c_upload',
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
	methods: {
		handleAvatarSuccess(res, file) {
			console.log(file)
			this.configData.value = file.response.data.img;
		},
	},
};
</script>

<style scoped lang="less">
.c_row-item {
	margin-bottom: 13px;
}
/deep/ .avatar-uploader .el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}
/deep/ .avatar-uploader .el-upload:hover {
	border-color: #409eff;
}
/deep/ .avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
}
/deep/.avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>
