import Sequelize from 'sequelize'
import config from '../config/index.js'
const sequelize = new Sequelize(config.database.DATABASE, config.database.USER, config.database.PASSWORD, {
    dialect: 'mysql',
    host: config.database.HOST,
    port: config.database.PORT,
    logging: false,
    timezone: '+08:00',
    define: {
        timestamps: false,
        // delete_time
        // paranoid: true,
        // createdAt: 'create_at',
        // updatedAt: 'update_at',
        // deletedAt: 'delete_at',
        // 把驼峰命名转换为下划线
        // underscored: true,
        dateStrings: true,
        freezeTableName: true,
        scopes: {
            bh: {
                attributes: {
                    exclude: ['updated_at', 'deleted_at', 'created_at']
                }
            }
        }
    }
})

// 创建模型
sequelize.sync({
    force: false
})
export default sequelize