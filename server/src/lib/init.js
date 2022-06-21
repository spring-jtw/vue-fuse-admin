import Sequelize from "./sequelize";
import run from './auto'
import createIndex from './createdModelsExport'
export const initDb = async() => {
    // 创建用户表
    const DB_USERES = `create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
		username VARCHAR(100) NOT NULL COMMENT '账号',
        password VARCHAR(100) NOT NULL COMMENT '密码',
		nickname VARCHAR(100) NOT NULL DEFAULT '普通用户' COMMENT '昵称',
		phone VARCHAR(100) COMMENT '手机号',
        status INT NOT NULL DEFAULT 1,
        PRIMARY KEY ( id,username )
    ) `
    const DB_ROUTES = `create table if not exists routes(
        id INT NOT NULL AUTO_INCREMENT,
        parent_id INT DEFAULT NULL,
		path VARCHAR(100) DEFAULT NULL COMMENT '路径',
        redirect VARCHAR(100) DEFAULT NULL COMMENT '重定向',
		component VARCHAR(100) DEFAULT NULL COMMENT '组件路径',
		title VARCHAR(100) DEFAULT NULL COMMENT '页面标题',
		icon VARCHAR(100) DEFAULT NULL COMMENT '页面图标class',
		active_menu VARCHAR(100) DEFAULT NULL COMMENT '激活的菜单样路径',
		router_key VARCHAR(100) DEFAULT NULL COMMENT 'vue-router-tab路由模式;默认为空同等于path;可填fullpath',
        hidden INT DEFAULT 1 COMMENT '是否隐藏,1显示,2隐藏',
        sort INT DEFAULT NULL COMMENT '排序',
        PRIMARY KEY (id)
    )`
    await Sequelize.query(DB_USERES);
    await Sequelize.query(DB_ROUTES);

    // 判断路由表没数据时 添加路由
    const routes = await Sequelize.query(`select * from routes`)
    if (!routes[0] || !routes[0].length) {
        await Sequelize.query(`
            INSERT INTO routes (id,parent_id,path,component,title,icon,active_menu,router_key,hidden,sort) VALUES 
            (1,NULL,'/','Layout','首页','','','',1,1),
            (2,1,'/','/home/index','首页','home','','',1,2),
            (3,1,'/tab-page','/tab-page/index','vue-router-tab','el-icon-takeaway-box','','',1,3),
            (4,1,'/tab-details','/tab-page/details','编辑商品','','/tab-page','fullpath',2,4),
            (5,1,'/element-ui-verify','/element-ui-verify/index','element-ui-校验','el-icon-finished','','',1,5),
            (6,1,'/umy-ui','/umy-ui/index','虚拟表格umy-ui','el-icon-s-grid','','',1,6),
            (7,1,'/textbus','/textbus/index','富文本TextBus','el-icon-edit-outline','','',1,7),
            (8,1,'/form-generator','/form-generator/index','低代码','el-icon-magic-stick','','',1,8),
            (9,NULL,'/','Layout','权限管理','','','',1,9),
            (10,9,'/router-manage','/router/index','路由管理','el-icon-guide','','',1,10),
            (11,9,'/user-manage','/user/index','用户管理','el-icon-user-solid','','',1,11),
            (12,9,'/role-manage','/role/index','角色管理','el-icon-s-custom','','',1,12)
        `);
    }
    await run()
    await createIndex()

};