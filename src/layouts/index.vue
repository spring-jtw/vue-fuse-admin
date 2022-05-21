<template>
	<div class="app-wrapper">
		<!-- 侧边栏 -->
		<Sidebar class="sidebar-container"></Sidebar>
		<div class="main-container">
			<!-- 顶部导航栏 -->
			<Navbar />
			<!-- 内容区 -->
			<router-tab />
		</div>
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue'
	import Sidebar from './components/Sidebar/index.vue'
	export default {
		components: {
			Navbar,
			Sidebar,
		},
	}
</script>

<style lang="scss" scoped>
	.app-wrapper {
		position: relative;
		height: 100%;
		width: 100%;
		&:after {
			content: '';
			display: table;
			clear: both;
		}
	}
	.sidebar-container {
		transition: width 0.28s;
		width: var(--sideBarWidth) !important;
		height: 100%;
		position: fixed;
		font-size: 0px;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
	}
	.main-container {
		min-height: 100%;
		height: 100%;
		transition: margin-left 0.28s;
		margin-left: var(--sideBarWidth);
		background-color: var(--mainBG);
		position: relative;
	}
</style>
