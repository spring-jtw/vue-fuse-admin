<template>
	<el-scrollbar wrap-class="scrollbar-wrapper">
		<el-menu
			:default-active="active_menu"
			:collapse="isCollapse"
			:text-color="variables.menuText"
			:background-color="variables.menuBg"
			:active-text-color="variables.menuActiveText"
			:unique-opened="false"
			mode="vertical"
		>
			<SidebarItem
				v-for="(route,i) in routes"
				:key="i"
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
			active_menu() {
				const route = this.$route
				const { meta, path } = route
				if (meta.active_menu) {
					return meta.active_menu
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
