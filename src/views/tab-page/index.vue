<template>
	<div class="mt20">
		<el-row :gutter="10">
			<el-col :span="8" class="p20">
				<el-card>
					<div>
						<img
							src="https://bhuh12.github.io/vue-router-tab/demo/img/logo.png"
							width="50px"
							alt=""
							style="vertical-align: middle"
						/>
						<span class="f30 fb ml20">vue-router-tab</span>
					</div>
					<div class="mt20" style="color: #6a8bad">基于 Vue Router 的路由页签组件</div>
					<div class="mt20">
						<el-link
							href="https://bhuh12.github.io/vue-router-tab/zh/"
							type="success"
							target="_blank"
						>
							中文文档
							<i class="el-icon-right"></i>
						</el-link>
						<el-link
							href="https://github.com/bhuh12/vue-router-tab"
							type="warning"
							target="_blank"
							class="ml20"
						>
							GitHub
							<i class="el-icon-right"></i>
						</el-link>
					</div>
					<div style="color: #6a8bad" class="mt10 f14">
						点击表格操作按钮进行体验，页面导航可缓存多个详情页面，每个详情面数据都会缓存
					</div>
					<el-alert class="mt10" title="注意" type="warning" effect="light" show-icon :closable="false">
						<div>
							📣 RouterTab 不支持多层嵌套路由生成页签 (
							<a
								href="https://bhuh12.github.io/vue-router-tab/zh/guide/meta/faqs.html"
								target="_blank"
								rel="noopener noreferrer"
								style="color: #3eaf7c;"
							>
								issues 32
							</a>
							)
						</div>
					</el-alert>
				</el-card>
			</el-col>
			<el-col :span="12">
				<div class="mb10">表格数据：</div>
				<el-table :data="list" stripe border style="width: 100%">
					<el-table-column prop="name" label="商品"></el-table-column>
					<el-table-column prop="price" label="价格"></el-table-column>
					<el-table-column label="详情">
						<template slot-scope="scope">
							<router-link :to="`/tab-details?id=${scope.row.id}`">
								<el-link type="primary">操作</el-link>
							</router-link>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list: [],
			}
		},
		activated() {
			const list = localStorage.getItem('list')
			if (!list) {
				const data = [
					{ id: 1, name: '商品1', price: 10 },
					{ id: 2, name: '商品2', price: 20 },
					{ id: 3, name: '商品2', price: 30 },
				]
				this.list = data
				localStorage.setItem('list', JSON.stringify(data))
			} else {
				this.list = JSON.parse(list)
			}
		},
	}
</script>
