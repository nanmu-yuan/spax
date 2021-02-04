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
		<product  :dialog ="dialogData" @getProductList ="getProductList" ></product>
	</div>

</template>

<script>
import {product} from'../block'
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
			dialogData:{
				show:false,
				spu:''
			}
		};
	},
	methods: {
		submit() {
			this.dialogData.show = true;
			this.dialogData.spu = this.configData.value;
		},
		getProductList(value){
			console.log(value);
			this.configData.list = value;
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
	components:{
		product
	}
};
</script>

<style scoped lang="less">
.c_row-item {
	margin-bottom: 13px;
}
</style>
