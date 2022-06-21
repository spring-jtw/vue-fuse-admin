<!--
    @title:路由管理
    @path:/router-manage
-->
<template>
	<div class="p20">
		<div class="mb10">
			<el-button type="primary" @click="addMenu()">新增</el-button>
		</div>
		<el-row :gutter="10">
			<el-col :span="16">
				<el-card shadow="always" :body-style="{ padding: '20px' }">
					<el-table
						v-loading="tableLoading"
						:data="tableData"
						border
						stripe
						row-key="id"
						:tree-props="{ children: 'children' }"
						max-height="80vw"
						default-expand-all
						tooltip-effect
					>
						<el-table-column width="150" label="菜单名称" :formatter="row=>row.title" />
						<el-table-column label="id" width="80" :formatter="row=>row.id" />
						<el-table-column prop="icon" align="center" label="图标">
							<template slot-scope="scope">
								<i v-if="scope.row.icon" :class="scope.row.icon"></i>
							</template>
						</el-table-column>
						<el-table-column prop="path" label="路由地址" />
						<el-table-column prop="redirect" label="重定向路径" width="100" />
						<el-table-column label="是否隐藏" :formatter="row=>row.hidden===2?'是':'否'" />
						<el-table-column prop="component" label="组件路径" />
						<el-table-column align="center" width="140" label="操作">
							<template slot-scope="scope">
								<el-link type="primary" size="small" :underline="false" @click="addMenu(scope.row)">添加</el-link>
								<el-link
									class="ml10"
									type="primary"
									size="small"
									:underline="false"
									@click="editMenu(scope.row)"
								>编辑</el-link>
								<el-popconfirm
									class="ml10"
									title="是否确认删除？"
									confirm-button-text="确认"
									:hide-icon="true"
									@confirm="deleteMenu(scope.row.id)"
								>
									<el-link slot="reference" type="danger" :underline="false">删除</el-link>
								</el-popconfirm>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card shadow="always" v-show="open" :body-style="{ padding: '20px' }">
					<el-form ref="form" :model="form" label-width="100px" v-loading="loading">
						<el-form-item label="菜单名称:" verify prop="title">
							<el-input v-model="form.title"></el-input>
						</el-form-item>
						<el-form-item label="图标class:">
							<el-input v-model="form.icon"></el-input>
						</el-form-item>
						<el-form-item label="路由地址:" verify prop="path">
							<el-input v-model="form.path"></el-input>
						</el-form-item>
						<el-form-item label="重定向路径:">
							<el-input v-model="form.redirect"></el-input>
						</el-form-item>
						<el-form-item label="父级id:">
							<el-input v-model.number="form.parent_id"></el-input>
						</el-form-item>
						<el-form-item label="组件路径:" verify prop="component">
							<el-input v-model="form.component"></el-input>
						</el-form-item>
						<el-form-item label="是否隐藏:" verify prop="hidden">
							<el-select v-model="form.hidden" placeholder="请选择">
								<el-option label="否" :value="1"></el-option>
								<el-option label="是" :value="2"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="排序:">
							<el-input v-model.number="form.sort"></el-input>
						</el-form-item>
					</el-form>
					<el-button type="primary" :loading="loading" @click="submit">确定</el-button>
					<el-button @click="close">取消</el-button>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
// import Created from './components/created.vue'

export default {
	name: 'MenuManagementList',
	// components: { Created },
	data() {
		return {
			// 菜单数量列表
			tableData: [],
			isEdit: false,
			form: {
				active_menu: '',
				component: '',
				hidden: 1,
				icon: '',
				id: '',
				parent_id: '',
				path: '',
				redirect: null,
				router_key: '',
				sort: '',
				title: '',
			},
			tableLoading: false,
			loading: false,
			open: false,
		}
	},
	mounted() {
		this.getMenuList()
	},
	methods: {
		//删除操作
		async deleteMenu(id) {
			await this.$api.menu.menuManage.delPermissions(id)
			this.getMenuList()
		},
		//编辑 row:当前行数据
		editMenu(row) {
			this.form = Object.assign({}, row)
			this.open = true
		},
		// 新增
		addMenu(data) {
			this.$refs.form.clearValidate()
			this.form = this.$options.data().form
			if (data) {
				this.form.parent_id = data.id
			}
			this.open = true
		},
		// 获取页面数据
		async getMenuList() {
			const res = await this.$api.api.getAllRoutes()
			const arr = []
			// 多维数组转成一维数组
			res.data.forEach(item => {
                const parent = arr.find(obj => obj.id === item.parent_id)
                if (parent) {
                    parent.children = parent.children || [];
                    parent.children.push(item);
                } else {
                    arr.push(item)
                }
            });
			this.tableData = arr
		},
		submit() {
			this.$refs.form.validate(async (v) => {
				if (v) {
					this.loading = true
					try {
						if (this.form.id) {
							//编辑
							await this.$api.api.editRoute(this.form.id, this.form)
							this.open = false
							this.getMenuList()
						} else {
							//添加
						}
					} catch (e) {
						console.log(e)
					}
					this.loading = false
				}
			})
		},
		// 关闭编辑框
		close() {
			this.$refs.form.clearValidate()
			this.open = false
		},
	},
}
</script>


<style lang="scss" scoped>
.created-dialog {
	.el-dialog__body {
		max-height: 80vh;
	}
}
</style>
