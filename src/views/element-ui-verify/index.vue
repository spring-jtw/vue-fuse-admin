<!-- 
    @title:element-ui校验; 
    @path:/element-ui-verify
-->
<template>
	<div class="mt20">
		<el-row :gutter="10">
			<el-col :span="6" class="p20">
				<el-card>
					<div>
						<img src="https://aweiu.com/assets/logo.png" width="80px" alt="" />
						<span class="f30 fb ml20">element-ui-verify</span>
					</div>
					<div class="mt20" style="color: #6a8bad">
						如果你受够了饿了么 ElementUI 原生的校验方式，那就来试试它吧!
					</div>
					<div class="mt20">
						<el-link
							href="https://aweiu.com/documents/element-ui-verify/"
							type="success"
							target="_blank"
						>
							中文文档
							<i class="el-icon-right"></i>
						</el-link>
						<el-link
							href="https://github.com/aweiu/element-ui-verify"
							type="warning"
							target="_blank"
							class="ml20"
						>
							GitHub
							<i class="el-icon-right"></i>
						</el-link>
					</div>
					<div style="color: #6a8bad" class="mt10 f14">npm install element-ui-verify</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<div class="mb10">表单数据：</div>
				<el-form ref="form" label-width="120px" :model="model">
					<el-form-item
						label="年龄"
						prop="age"
						verify
						int
						:gt="0"
						alias="年龄"
						empty-message="请输入年龄"
					>
						<el-input v-model="model.age"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass1" verify>
						<el-input v-model="model.pass1"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="pass2" :verify="verifyPassword" :watch="model.pass1">
						<el-input v-model="model.pass2"></el-input>
					</el-form-item>
					<el-form-item label="最少参与人数" prop="minNumber" verify int :gt="0">
						<el-input v-model="model.minNumber"></el-input>
					</el-form-item>
					<el-form-item
						label="最多参与人数"
						prop="maxNumber"
						verify
						int
						:gt="model.minNumber"
						:watch="model.minNumber"
					>
						<el-input v-model="model.maxNumber"></el-input>
					</el-form-item>
				</el-form>
				<div class="text-center">
					<el-button type="primary" @click="submit">提交</el-button>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				model: {
					age: '',
					pass1: '',
					pass2: '',
					minNumber:0,
					maxNumber:''
				},
			}
		},
		activated() {},
		methods: {
			verifyPassword(rule, val, callback) {
				if (val !== this.model.pass1) callback(Error('两次输入密码不一致!'))
				else callback()
			},
			submit() {
				this.$refs.form.validate((v) => {
					if (v) {
					}
				})
			},
		},
	}
</script>
