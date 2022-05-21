<template>
	<div class="login-page">
		<div class="page_left flex-center">
			<div class="text-center">
				<h1>vue-fuse-admin</h1>
				<div class="mt5">vue2+vite+element-ui</div>
				<div class="mt15">融合vue2丰富开源插件的管理后台</div>
				<div class="mt15">融合vue2丰富开源插件的管理后台</div>
			</div>
		</div>
		<div class="page_right flex-center">
			<div>
				<el-form ref="form" :model="form" label-width="80px" size="medium">
					<el-form-item label="用户名:" verify prop="username" alias="用户名" empty-message="请填写用户名" class="form-item">
						<el-input v-model="form.username" placeholder="随便输入">
							<i slot="suffix" class="el-icon-user"></i>
						</el-input>
					</el-form-item>
					<el-form-item label="密码:" verify prop="password" alias="密码" empty-message="请填写密码">
						<el-input
							v-model="form.password"
							:type="show_password ? 'text' : 'password'"
							autocomplete="new-password"
							maxlength="12"
							placeholder="请输入密码"
							@keyup.enter.native="submit"
						>
							<i
								slot="suffix"
								:class="show_password ? 'el-icon-unlock' : 'el-icon-lock'"
								@click="show_password = !show_password"
							></i>
						</el-input>
					</el-form-item>
				</el-form>
				<div class="text-right">
					<el-button type="primary" @click="submit" :loading="login_loading" class="lgoin-btn">
						登录
					</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import api from '@/api'
	export default {
		name: 'Login',
		data() {
			return {
				login_loading: false,
				show_password: false,
				form: {
					username: '',
					password: '',
				},
				redirect:''
			}
		},
		watch: {
			$route: {
			handler(route) {
				this.redirect = (route.query && route.query.redirect) || '/'
			},
			immediate: true,
			},
		},
		methods: {
			submit() {
				this.$refs.form.validate(async (v) => {
					if (v) {
						this.login_loading = true
						try {
							await this.$store.dispatch('user/login',this.form)
							const routerPath = this.redirect === '/404' || this.redirect === '/401'? '/': this.redirect
							this.$router.push(routerPath)				
						} catch (error) {}
						this.login_loading = false
					}
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	$width: 360px;
	.login-page {
		display: flex;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.page_left {
		width: 38.2%;
		background: #009fff;
	}
	.page_right {
		width: 61.8%;
		background: #fff;
	}
	.form-item {
		width: $width;
	}
	.lgoin-btn {
		width: calc(100% - 80px);
	}
	::v-deep .el-form-item__label:before {
		display: none;
	}
</style>
