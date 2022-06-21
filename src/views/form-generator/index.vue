<!-- 
    @title:代代码; 
    @path:/form-generator
-->
<template>
	<div class="mt20">
		<el-row :gutter="10">
			<el-col :span="6" class="p20">
				<el-card>
					<div>
						<img
							src="https://mrhj.gitee.io/form-generator/img/logo.e1bc3747.png"
							width="80px"
							style="vertical-align: middle"
						/>
						<span class="f30 fb ml20">Form Generator</span>
					</div>
					<div class="mt20" style="color: #6a8bad">
						Element
						UI表单设计及代码生成器，可将生成的代码直接运行在基于Element的vue项目中；也可导出JSON表单，使用配套的解析器将JSON解析成真实的表单。
					</div>
					<div class="mt20">
						<el-link href="https://mrhj.gitee.io/form-generator/#/" type="success" target="_blank">
							中文文档
							<i class="el-icon-right"></i>
						</el-link>
						<el-link
							href="https://github.com/JakHuang/form-generator"
							type="warning"
							target="_blank"
							class="ml20"
						>
							GitHub
							<i class="el-icon-right"></i>
						</el-link>
					</div>
					<div style="color: #6a8bad" class="mt10 f14">npm install form-gen-parser</div>
				</el-card>
			</el-col>
			<el-col :span="17">
                <el-card>
                    <iframe src="https://mrhj.gitee.io/form-generator/#/" style="width:100%;height:80vh" frameborder="0"></iframe>
                </el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {}
</script>

<style></style>
