<template>
	<div class="product-container">
		<div>
			<el-dialog title="产品列表" :visible.sync="dialog.show" center width="960px">
				<el-form :inline="true" label-width="100px">
					<div style="float:right">
						<el-form-item>
							<el-button type="primary" class="select_button" @click="create">Create New</el-button>
						</el-form-item>
					</div>
				</el-form>
				<div>
					<el-table :data="tableData" border style="width: 100%">
						<el-table-column fixed prop="productName" label="产品名称" width="200">
						</el-table-column>
						<el-table-column prop="productImg" label="产品图片" width="300">
						</el-table-column>
						<el-table-column prop="productUrl" label="产品地址" width="300">
						</el-table-column>
						<el-table-column prop="price" label="产品价格" width="100">
						</el-table-column>
						<el-table-column prop="marketPrice" label="产品划线价" width="100">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="150">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
								<el-button type="text" size="small">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialog.show = false">取 消</el-button>
					<el-button type="primary" @click="add">确 定</el-button>
				</div>
			</el-dialog>
		</div>
        <createproduct :createDialog ="createDialog" @createData = "createData"></createproduct>
	</div>
</template>
<script>
import createproduct from '../block/createProduct'
export default {
	name: 'product',
	props: {
		dialog: {
			type: Object,
		},
	},
	data() {
		return {
			tableData: [
            ],
            createDialog:{
                show:false
            }
		};
    },
    watch:{
        dialog:{
            handler(nval,oval){
                console.log(nval);
            },
            deep:true
        }
    },

	methods: {
		add() {
            this.dialog.show = false;
            this.$emit('getProductList',this.tableData)
		},
        create() {
            this.createDialog.show = true;
        },
        handleClick(){

        },
        createData(value){
            this.tableData.push(value);
        }
    },
    components:{
        createproduct
    }
};
</script>
<style lang="less" scoped>
.product-container {
}
</style>