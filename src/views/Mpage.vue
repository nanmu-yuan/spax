<template>
	<div class="Mpage">
        asdasdasdsa
		<draggable class="drag-Mpage" group="people" @change="log">
			<!-- <div v-for="(item,index) of mProject" :key="index">
				<component :is="item.name"></component>
			</div> -->
		</draggable>
	</div>
</template>
<script>
import vuedraggable from 'vuedraggable';
export default {
	name: 'Mpage',
	data() {
		return {};
	},
	components: {
		draggable: vuedraggable,
	},
	methods: {
		log(evt) {
			console.log(evt);
		},
	},
};
</script>
<style lang="less" scoped>
.drag-Mpage{
    height: 800px;
    width: 100%;
    background:#fcfcfe;
}
</style>