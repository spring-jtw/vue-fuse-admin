<template>
	<div class="mt20">
		<el-row :gutter="10">
			<el-col :span="6" class="p20">
				<el-card>
					<div>
						<img src="https://textbus.io/img/logo.c774c841.png" width="80px" />
						<span class="f30 fb ml20">TextBus</span>
					</div>
					<div class="mt20" style="color: #6a8bad">一个组件化、高性能的富文本开发框架</div>
					<div class="mt20">
						<el-link href="https://textbus.io/" type="success" target="_blank">
							中文文档
							<i class="el-icon-right"></i>
						</el-link>
						<el-link
							href="https://github.com/textbus/textbus"
							type="warning"
							target="_blank"
							class="ml20"
						>
							GitHub
							<i class="el-icon-right"></i>
						</el-link>
					</div>
					<div style="color: #6a8bad" class="mt10 f14">npm install @textbus/editor</div>
				</el-card>
			</el-col>
			<el-col :span="17">
				<div id="editor"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import '@textbus/editor/bundles/textbus.min.css'
	import { createEditor } from '@textbus/editor'
	export default {
		mounted() {
            const options = {
                theme: 'darkline'
            }
			const editor = createEditor()
			editor.mount(document.getElementById('editor'),options)

			// 监听数据变化，并获取编辑结果
			editor.onChange.subscribe(() => {
				const contents = editor.getContents()
				console.log(contents)
			})
		},
	}
</script>

<style></style>
