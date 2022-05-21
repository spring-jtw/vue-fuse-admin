<template>
	<el-scrollbar wrap-class="scrollbar-wrapper">
		<el-menu
			:default-active="activeMenu"
			:collapse="isCollapse"
			:text-color="variables.menuText"
			:background-color="variables.menuBg"
			:active-text-color="variables.menuActiveText"
			:unique-opened="false"
			mode="vertical"
		>
			<SidebarItem
				v-for="route in routes"
				:key="route.path"
				:item="route"
				:base-path="route.path"
			/>
		</el-menu>
	</el-scrollbar>
</template>

<script>
	import { mapGetters } from 'vuex'
	import SidebarItem from './SidebarItem.vue'
	import variables from '@/styles/variables.module.scss'
	export default {
		components: {
			SidebarItem,
		},
		computed: {
			...mapGetters(['sidebar','routes']),
			activeMenu() {
				const route = this.$route
				const { meta, path } = route
				if (meta.activeMenu) {
					return meta.activeMenu
				}
				return path
			},
			isCollapse() {
				return !!localStorage.getItem('sidebarStatus')
			},
			variables() {
				return variables
			},
		},
	}
</script>
