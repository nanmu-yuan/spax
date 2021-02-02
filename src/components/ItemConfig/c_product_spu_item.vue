<template>
	<div class="c_product_spu_item" v-if="configData">
		<el-form ref="form" label-width="80px">
			<el-form-item :label="configData.title">
				<el-input type="textarea" v-model="configData.value"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="width:100%" @click="submit">配置产品数据</el-button>
			</el-form-item>
		</el-form>
		<div>
			<el-dialog title="产品列表" :visible.sync="dialogTableVisible" center>
				<div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="productName" label="产品名称" width="180">
						</el-table-column>
                        <el-table-column prop="productImg" label="产品图片" width="180">
						</el-table-column>
                        <el-table-column prop="productUrl" label="产品地址" width="180">
						</el-table-column>
                        <el-table-column prop="price" label="产品价格" width="180">
						</el-table-column>
                         <el-table-column prop="marketPrice" label="产品划线价" width="180">
						</el-table-column>
					</el-table>
				</div>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogTableVisible = false">取 消</el-button>
					<el-button type="primary" @click="add">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>

</template>

<script>
export default {
	name: 'c_product_spu_item',
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
			dialogTableVisible: false,
			tableData: [
				{
					productName: 'Short High Collar Brief Plain Long Sleeve T-Shirt',
                    productUrl:'https://www.berrylook.com/en/Products/short-high-collar-brief-plain-long-sleeve-t-shirt-232100.html',
                    productImg:'https://bl.aopcdn.com/goods/FFA9AA6BA723/3618153_8602d27b73.jpg@!h400-w300',
                    price:'$20.74',
                    marketPrice:'$51.85'
                },
               {
					productName: 'Short High Collar Brief Plain Long Sleeve T-Shirt',
                    productUrl:'https://www.berrylook.com/en/Products/short-high-collar-brief-plain-long-sleeve-t-shirt-232100.html',
                    productImg:'https://bl.aopcdn.com/goods/SP46KXYHCHY/ae7f37f0-fc8f-4e6c-ab4a-f30fab413921.jpg@!h400-w300',
                    price:'$20.74',
                    marketPrice:'$51.85'
                },
               {
					productName: 'Short High Collar Brief Plain Long Sleeve T-Shirt',
                    productUrl:'https://www.berrylook.com/en/Products/short-high-collar-brief-plain-long-sleeve-t-shirt-232100.html',
                    productImg:'https://bl.aopcdn.com/goods/FFA9AA6BA723/3618153_8602d27b73.jpg@!h400-w300',
                    price:'$20.74',
                    marketPrice:'$51.85'
                },
                {
					productName: 'Short High Collar Brief Plain Long Sleeve T-Shirt',
                    productUrl:'https://www.berrylook.com/en/Products/short-high-collar-brief-plain-long-sleeve-t-shirt-232100.html',
                    productImg:'https://bl.aopcdn.com/goods/FFA9AA6BA723/3618153_8602d27b73.jpg@!h400-w300',
                    price:'$20.74',
                    marketPrice:'$51.85'
                },
			],
		};
	},
	methods: {
		submit() {
            this.dialogTableVisible = true;
        },
        add(){
            this.dialogTableVisible = false;
            this.configData.list = this.tableData;
        }
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
