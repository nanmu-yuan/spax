<template>
	<div class="create-product">
		<el-dialog title="产品列表" :visible.sync="createDialog.show" center width="560px">
			<el-form label-width="100px" class="demo-ruleForm">
				<el-form-item label="产品名称">
					<el-input v-model="from.productName"></el-input>
				</el-form-item>
				<el-form-item label="图片链接">
					<el-upload class="avatar-uploader" action="https://admin.fashionmia.net/opbm.php?a=EdmImages&m=Api" :show-file-list="false" :on-success="handleAvatarSuccess">
						<img v-if="from.productImg" style="width:50px;height:50px" :src="from.productImg" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-input v-model="from.productImg"></el-input>
				</el-form-item>
				<el-form-item label="url">
					<el-input v-model="from.productUrl"></el-input>
				</el-form-item>
				<el-form-item label="价格">
					<el-input v-model="from.price"></el-input>
				</el-form-item>
				<el-form-item label="划线价">
					<el-input v-model="from.marketPrice"></el-input>
				</el-form-item>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="createDialog.show = false">取 消</el-button>
				<el-button type="primary" @click="submit">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
export default {
	name: 'createProduct',
	props: {
		createDialog: {
			type: Object,
		},
	},
	data() {
		return {
			from: {
				productName: '',
				productImg: '',
				productUrl: '',
				price: '',
				marketPrice: '',
			},
		};
	},
	methods: {
		submit() {
			this.createDialog.show = false;
			this.$emit('createData', this.from);
        },
        handleAvatarSuccess(res, file) {
			this.from.productImg = URL.createObjectURL(file.raw);
		},
	},
};
</script>
<style lang="less" scoped>
</style>