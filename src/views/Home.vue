<template>
	<div class="home-container">
		<el-row>
			<el-col :span="5">
				<div class="grid-content bg-purple">
					<div class="l-menu-container">
						<div class="Lmenu">
							<div class="warp">
								<div>组件库</div>
								<div v-for="(item,index) of Lmenu" :key="index">
									<div>{{item.title}}</div>
									<draggable :list="item.list" class="dragArea list-group" :options="{group:{name: 'people',pull:'clone', put: false},sort: false}" :clone="cloneDog" @change="log">
										<div class="list-group-item " v-for="(element,index) of item.list" :key='index' @click="addDom(element,index)">
											<span class="icon" :class="element.icon"></span>
											{{element.name}}
										</div>
									</draggable>
								</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<div class="m-content-container">
						<div class="Mpage">
							<draggable class="drag-Mpage" group="people" :list="mConfig" @change="log">
								<div class="mConfig-item" :class="{on:activeIndex == key}" v-for="(item,key) in mConfig" :key="key" @click="bingConfig(item,key)">
									<component :is="item.name" ref="getComponentData" :configData="propsObj" :index="key" :num="item.num"></component>
									<div class="delete-box">
										<span @click.stop="bindDelete(item,key)">删除</span>
									</div>
								</div>
							</draggable>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="7">
				<div class="grid-content bg-purple-light">
					<div class="r-pop-container">
						<div class="right-box">
							<div v-for="(item,key) in rConfig" :key="key">
								<div class="title-bar">{{item.cname}}</div>
								<component :is="item.configName" :activeIndex="activeIndex" :num="item.num" :index="key"></component>
							</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import vuedraggable from 'vuedraggable';
import MenuConfig from '../components/BasicComponents';
import RpopConfig from '../components/RpopConfig';

export default {
	name: 'Home',
	data() {
		return {
			Lmenu: [],
			lconfig: [],
			mConfig: [], // 中间组件渲染
			rConfig: [], // 右侧组件配置
			propsObj: {},
			activeIndex: -99, // 选中的下标
		};
	},
	components: {
		draggable: vuedraggable,
		...MenuConfig,
		...RpopConfig,
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
				list: [],
			};
			this.lconfig.map((item) => {
				if (item.type == '1') {
					basic.list.push(item);
				}
			});
			temp.push(basic);
			this.Lmenu = temp;
		},
		cloneDog(data) {
			return {
				...data,
			};
		},
		log(evt) {
			// 中间拖拽排序
			if (evt.moved) {
				this.$store.commit(
					'admin/mobildConfig/defaultArraySort',
					evt.moved
				);
			}
			// 从左向右拖拽排序
			if (evt.added) {
				let data = evt.added.element;
				let obj = {};
				let timestamp = new Date().getTime() * 1000;
				data.num = timestamp;
				this.activeConfigName = data.name;
				let tempItem = JSON.parse(JSON.stringify(data));
				this.rConfig = [];
				this.rConfig.push(tempItem);
				// 保存组件名称
				this.$store.commit(
					'admin/mobildConfig/SETCONFIGNAME',
					data.name
				);
				this.$store.commit(
					'admin/mobildConfig/defaultArraySort',
					evt.added
				);
			}
		},
		addDom(item, index) {
			let obj = {};
			let timestamp = new Date().getTime() * 1000;
			item.num = `${timestamp}`;
			//this.activeConfigName = item.name
			let tempItem = JSON.parse(JSON.stringify(item));
			this.rConfig = [];
			this.mConfig.push(tempItem);
			this.rConfig.push(tempItem);
			this.activeIndex = this.mConfig.length - 1;
			this.$store.commit('admin/mobildConfig/ADDARRAY', {
				num: item.num,
				val: item.data().defaultConfig,
			});
		},
		bingConfig(item, index) {
			this.rConfig = [];
			let tempItem = JSON.parse(JSON.stringify(item));
			this.rConfig.push(tempItem);
			this.activeIndex = index;
		},
		bindDelete(item, index) {
			this.mConfig.splice(index, 1);
			this.rConfig.splice(0, 1);
		},
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
.icon {
	font-size: 24px;
}
.mConfig-item {
	position: relative;
	.delete-box {
		display: none;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border: 2px dashed #00a0e9;
		padding: 0;
		span {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 32px;
			height: 16px;
			line-height: 16px;
			display: inline-block;
			text-align: center;
			font-size: 10px;
			color: #fff;
			background: rgba(0, 0, 0, 0.4);
			margin-left: 2px;
			cursor: pointer;
			z-index: 11;
		}
	}
	&:hover,
	&.on {
		cursor: move;
		.delete-box {
			display: block;
		}
	}
}
.m-content-container {
	width: 650px;
	height: 20px;
	margin: 0 auto;
}
.r-pop-container {
	width: 100%;
}
.right-box {
	width: 400px;
	border: 1px solid #ddd;
	border-radius: 4px;
	min-height: 500px;

	.title-bar {
		width: 100%;
		height: 38px;
		line-height: 38px;
		padding-left: 24px;
		color: #333;
		border-radius: 4px;
		border-bottom: 1px solid #eee;
	}
}
</style>