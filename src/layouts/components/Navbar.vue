<!-- 顶部导航栏 -->
<template>
	<div class="navbar">
		<!-- 面包屑 -->
		<Breadcrumb class="breadcrumb-container"></Breadcrumb>
		<!-- 右侧下拉菜单 -->
		<div class="right-menu">
			<el-dropdown class="avatar-container" trigger="click">
				<div class="avatar-wrapper f16">
					<span class='f16'>游客</span>
					<i class="el-icon-caret-bottom" />
				</div>
				<el-dropdown-menu class="user-dropdown">
					<div @click="loginOut">
						<el-dropdown-item>退出</el-dropdown-item>
					</div>					
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<script>
	import Breadcrumb from './Breadcrumb.vue'
	export default {
		components: {
			Breadcrumb,
		},
		methods:{
			loginOut(){
				this.$store.dispatch('user/loginOut')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.navbar {
		height: 50px;
		overflow: hidden;
		position: relative;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
		.breadcrumb-container {
			float: left;
			user-select: none;
		}
		.right-menu {
			float: right;
			height: 100%;
			line-height: 50px;
			&:focus {
				outline: none;
			}
			.avatar-container {
				margin-right: 30px;
				.avatar-wrapper {
					position: relative;
					.el-icon-caret-bottom {
						cursor: pointer;
						position: absolute;
						top: 16px;
					}
				}
			}
		}
	}
</style>
