<template>
	<span>
		<i :class="icon" class="sub-el-icon"></i>
		<span>{{title}}</span>
	</span>
</template>
<script>
export default {
	props: {
		icon: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped>
.sub-el-icon {
	width: 1em;
	height: 1em;
}
</style>
