
var Sequelize =  require('sequelize');
/* 创建数据库连接 */
var sequelize = new Sequelize("vueadmin","root","123456",{
    host:"localhost",
    port:3306,
    dialect:"mysql",
    underscored:true,
    query: { raw:true }
})
/* 数据库模型名称配置及路径 */
const models=[
    {
        "name": "init-models",
        "path": "./init-models.js"
    },
    {
        "name": "routes",
        "path": "./routes.js"
    },
    {
        "name": "users",
        "path": "./users.js"
    }
]
/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path)(sequelize,Sequelize);
})
