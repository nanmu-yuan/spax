<template>
	<div class="c_color" v-if="configData">
		<el-collapse accordion v-model="activeNames">
			<el-collapse-item v-for="(item,index) of configData" :key="index" :name="index">
				<template slot="title">
					<div class="tip">
						<div>
							<span>{{item.text.value}}</span>
						</div>
						<div>
							<i class="dele-icon el-icon-delete" @click.stop="dele(item,index)"></i>
						</div>
					</div>
				</template>
				<el-form ref="form" label-width="80px">
					<el-form-item :label="item.text.title">
						<el-input v-model="item.text.value" placeholder=""></el-input>
					</el-form-item>
					<el-form-item :label="item.link.title">
						<el-input placeholder="请输入内容" v-model="item.link.value">
							<template slot="prepend">Http://</template>
						</el-input>
					</el-form-item>
				</el-form>
			</el-collapse-item>
		</el-collapse>
		<div style="padding:20px 20px">
			<el-button type="" style="width:100%" @click="add()" :disabled="isDisabled">Add Button</el-button>
		</div>

	</div>
</template>
<script>
export default {
	name: 'c_add_button',
	data() {
		return {
			value: '',
			defaults: {},
			configData: {},
			color2: '',
			activeNames: 0,
			isDisabled: false,
		};
	},
	methods: {
		dele(value, index) {
			if (this.configData.length <= 1) {
				return;
			}
			this.configData.splice(index, 1);
		},
		add() {
			if (this.configData.length == 3) {
				this.isDisabled = true;
			}
			if (this.configData.length >= 4) {
				return;
			}
			this.configData.push({
				text: {
					title: 'TEXT',
					value: 'READ MORE',
				},
				link: {
					title: 'LINK',
					value: '',
				},
			});
			this.activeNames = this.configData.length - 1;
			console.log(this.activeNames);
		},
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
.tip {
	position: relative;
	width: 100%;
}
.dele-icon {
	position: absolute;
	right: 24px;
	top: 19px;
}
</style>