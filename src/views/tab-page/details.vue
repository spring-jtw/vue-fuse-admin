<template>
	<div class="p20">
		<el-alert type="success">
			<div slot="title">
				切换页面此处的值会被保留,
				你在
				<span class="fb" style="color:#f50">{{ time }}</span>
				秒前打开本页面
			</div>
		</el-alert>
		<br />
		<br />
		<el-row :gutter="10">
			<el-col :span="6">
				<el-form ref="form" :model="form" label-width="100px">
					<el-form-item label="修改价格：" prop="price" verify>
						<el-input v-model="form.price" placeholder="请输入"></el-input>
					</el-form-item>
				</el-form>
				<el-button type="primary" @click="submit">提交</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				id: Number(this.$route.query.id),
				time: 0,
				timer:null
			}
		},
		mounted() {
			var list = JSON.parse(localStorage.getItem('list'))
			var page_data = list.find((item) => item.id === this.id)
			this.form = page_data
			this.setTime()
		},
		beforePageLeave(){
			clearInterval(this.timer)
			Promise.resolve()
		},
		methods: {
			submit() {
				this.$refs.form.validate((v) => {
					if (v) {
						var list = JSON.parse(localStorage.getItem('list'))
						list.find((item) => item.id === this.id).price = this.form.price
						localStorage.setItem('list', JSON.stringify(list))
						this.$message.success('修改成功')
						this.$tabs.close(null, '/tab-page')
					}
				})
			},
			setTime(){
				this.timer = setInterval(() => {
					this.time++
				}, 1000);
			}
		},
	}
</script>

<style></style>
