/* 自动生成sequelize models映射 */
var fs = require('fs') //引入文件读写模块
var util = require('util')
var SequelizeAuto = require('sequelize-auto')
var path = require("path");
var config = require('../config/index').default;

var auto = new SequelizeAuto(config.database.DATABASE, config.database.USER, config.database.PASSWORD, {
    host: config.database.HOST,
    port: config.database.PORT,
    dialect: 'mysql',
    directory: path.resolve(__dirname + '/models'), //生成的模块放到的目录
    additional: {
        timestamps: false,
        raw: true
    }
})
async function run() {
    try {
        var index = path.resolve(__dirname, './models/index.js')
        await util.promisify(fs.readFile)(index, { encoding: 'utf-8' });
    } catch (e) {
        auto.run(function(err) {
            if (err) throw err;
            console.log(auto.tables); // table list
            console.log(auto.foreignKeys); // foreign key list
        });
    }

}
export default run;