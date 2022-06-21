import model from '../../lib/models/index'
import Sequelize from "sequelize"
import requireParams from '../../util/utils/validator'
const Op = Sequelize.Op;
const Routes = model.routes;

// 获取所有路由表
export const getAllRoutes = async(ctx) => {
        const res = { status: -1, message: "" };
        try {
            // const list = await Routes.findAll()
            // const arr = []
            // list.forEach(item => {
            //     const parent = arr.find(obj => obj.id === item.parent_id)
            //     if (parent) {
            //         parent.children = parent.children || [];
            //         parent.children.push(item);
            //     } else {
            //         // 注释掉没有parent 但有parent_id的情况
            //         // if (!item.parent_id) {
            //         arr.push(item)
            //             // }
            //     }
            // });
            res.status = 0
            res.message = '获取成功'
            res.data = await Routes.findAll()
        } catch (err) {
            console.log("err routes.js [getAllRoutes]:", err);
        }
        ctx.body = res;
    }
    // 修改单个路由信息
export const editRoute = async(ctx) => {
    const res = { status: -1, message: "" };
    try {
        let id = ctx.params.id
        let body = ctx.request.body
        requireParams(ctx, ['id', 'path', 'component', 'title', 'hidden'], res)
        const route = await Routes.findOne({
            where: { id }
        })
        if (route) {
            delete body.id
            await Routes.update(body, {
                where: { id }
            })
            res.status = 0
            res.message = '编辑成功'
        } else {
            res.message = '没有找到路由'
        }
    } catch (err) {
        console.log("err routes.js [editRoute]:", err);
    }
    ctx.body = res;
}