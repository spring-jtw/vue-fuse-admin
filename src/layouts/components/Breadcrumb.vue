<template>
	<el-breadcrumb class="app-breadcrumb" separator="/">
		<transition-group name="breadcrumb">
			<el-breadcrumb-item v-for="(item,index) in levelList" :key="item.meta.title">
				<span
					v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
					class="no-redirect"
				>
					{{ item.meta.title }}
				</span>
				<a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<script>
	import * as pathToRegexp from 'path-to-regexp'

	export default {
		data() {
			return {
				levelList: null,
			}
		},
		watch: {
			$route() {
				this.getBreadcrumb()
			},
		},
		mounted() {
			this.getBreadcrumb()
		},
		methods: {
			getBreadcrumb() {
				let matched = this.$route.matched.filter((item) => item.meta && item.meta.title && !item.meta.hidden)
				this.levelList = matched.filter(
					(item) => item.meta && item.meta.title && !item.meta.hidden
				)
			},
			handleLink(item) {
				const { redirect, path } = item
				if (redirect) {
					router.push(redirect)
					return
				}
				this.$router.push(this.pathCompile(path))
			},
			pathCompile(path) {
				var toPath = pathToRegexp.compile(path)
				return toPath(route.params)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.app-breadcrumb.el-breadcrumb {
		display: inline-block;
		font-size: 14px;
		line-height: 50px;
		margin-left: 8px;

		.no-redirect {
			color: #97a8be;
			cursor: text;
		}
	}
</style>
