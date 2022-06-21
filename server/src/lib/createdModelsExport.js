// !自动 生成 models/index.js  导出数据库ORM映射模块

import fs from 'fs' //引入文件读写模块
import util from 'util'
import path from "path";
import config from '../config/index'
let files = fs.readdirSync(path.resolve(__dirname, './models')) //读取所有的生成模块文件
let models = []
files.forEach(item => {
        if (item != 'index.js') { //除了这个index.js
            /**下面这段代码结果是将： user.js  转换为name为 User  **/
            let names = item.split('.')[0]
            models.push({ name: names, path: "./" + item })
        }
    })
    /**视情况未定**/
const template = `
var Sequelize =  require('sequelize');
/* 创建数据库连接 */
var sequelize = new Sequelize("${config.database.DATABASE}","${config.database.USER}","${config.database.PASSWORD}",{
    host:"${config.database.HOST}",
    port:${config.database.PORT},
    dialect:"mysql",
    underscored:true,
    query: { raw:true }
})
/* 数据库模型名称配置及路径 */
const models=${JSON.stringify(models, null, 4)}
/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path)(sequelize,Sequelize);
})
`
async function createIndex() {
    try {
        var index = path.resolve(__dirname, './models/index.js')
        await util.promisify(fs.readFile)(index, { encoding: 'utf-8' });
        console.log('已经存在 models/index.js');
    } catch (e) {
        fs.writeFile(index, template, function() {
            console.log('生成 models/index.js  导出数据库ORM映射模块 success!')
        })
    }
}
export default createIndex;