<template>
	<div class="Lmenu">
		<div class="warp">
            <div>组件库</div>
			<div v-for="(item,index) of Lmenu" :key="index">
				<div>{{item.title}}</div>
				<draggable :list = "item.list" class="dragArea list-group" :options="{group:{name: 'people',pull:'clone', put: false},sort: false}" :clone="cloneDog" @change = "log">
					<div class="list-group-item" v-for="(element,index) of item.list" :key='index'>
						{{element.name}}
					</div>
				</draggable>
			</div>

		</div>
	</div>
</template>
<script>
import MenuConfig from '../components/MpageShow';
import vuedraggable from 'vuedraggable';
export default {
	name: 'Lmenu',
	data() {
		return {
			// menu 配置文件
			Lmenu: [],
			lconfig: [],
		};
	},
	components: {
		draggable:vuedraggable
	},
	created() {
		this.lconfig = this.objToArry(MenuConfig);
		this.arraySort();
	},
	methods: {
		objToArry(data) {
			let obj = Object.keys(data);
			let m = obj.map((key) => data[key]);
			return m;
		},
		arraySort() {
			let temp = [];
			let basic = {
				title: '基础组件',
				list:[]
			};
			this.lconfig.map((item) => {
				if (item.type == '1') {
					basic.list.push(item);
				}
            });
			temp.push(basic);
            this.Lmenu = temp;
		},
		cloneDog(data){
			console.log(data);
			return {
				...data
			}
		},
		log(evt){
			console.log(evt)
		},
		addEm(ele,index){
			console.log(ele);
		}

	},
};
</script>
<style lang="less" scoped>
.dragArea.list-group {
	display: flex;
	flex-wrap: wrap;

	.list-group-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 74px;
		height: 66px;
		margin-right: 10px;
		margin-bottom: 10px;
		background: #f7f7f7;
		font-size: 12px;
		color: #666;
		cursor: pointer;

		&:nth-child(3n) {
			margin-right: 0;
		}
	}
}
</style>