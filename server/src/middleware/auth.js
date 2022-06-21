import jwt from "jwt-simple"
import config from '../config'

// import model from "../../lib/models/index";
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
// const User = model.cpusers;

class Auth {
    static async admin(ctx, next) {
        let token = ctx.header.authorization;
        if (!token) {
            ctx.body = { status: -2, message: "登录失败!" };
            return
        }
        //使用jwt-simple自行解析数据
        const payload = jwt.decode(token.split(" ")[1], config.jwt_secret);
        if (payload.exp && Date.now() < payload.exp) {
            // var user = await User.findOne({
            //     where: {
            //         username: payload.name
            //     }
            // });
            // if (user && user.role == 'admin') {
            //     await next()
            // } else {
            //     ctx.body = { status: -1, message: "此操作需要管理员权限!" };
            //     return
            // }
        } else {
            ctx.body = { status: -2, message: 'token过期,请重新登录!' }
            return
        }
    }
}

export default Auth