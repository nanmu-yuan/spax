<template>
	<div class="bg_color">
		 <el-color-picker v-model="color2"></el-color-picker>
	</div>
</template>
<script>
export default {
    name: 'bg_color',
    data(){
        return {
            color2:null
        }
    },
	props: {
		configObj: {
			type: Object,
		},
		configNme: {
			type: String,
		},
	},
};
</script>
<style lang="less" scoped>
.bg_color {
}
</style>