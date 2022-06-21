import jwt from 'jwt-simple'
import config from '../../config/index'
import model from '../../lib/models/index'
import Sequelize from "sequelize"
import requireParams from '../../util/utils/validator'
const Op = Sequelize.Op;
const User = model.users;
// 用户登录
export const login = async(ctx) => {
        const res = { status: -1, message: "" };
        try {
            requireParams(ctx, ['username', 'password'], res)
            let username = ctx.request.body.username;
            let password = ctx.request.body.password;
            let user = await User.findOne({
                where: {
                    username
                }
            });
            //此处没有md5加密
            if (user && user.password === password) {
                let payload = {
                    exp: Date.now() + config.token_expires, //token过期时间
                    username,
                    id: user.id
                };
                let token = jwt.encode(payload, config.jwt_secret);
                res.status = 0;
                res.message = "成功";
                res.data = {
                    token,
                    nickname: user.nickname
                }
            } else {
                res.message = "账号密码错误";
            }
        } catch (err) {
            console.log("err login.js [login]:", err);
        }
        ctx.body = res;
    }
    // 根据token获取用户信息
export const getUserInfo = async(ctx) => {
    const res = { status: -1, message: "" };
    try {
        const token = ctx.header.authorization;
        //使用jwt-simple自行解析数据
        const payload = jwt.decode(token.split(" ")[1], config.jwt_secret);
        if (payload.exp && Date.now() < payload.exp) {
            let user = await User.findOne({
                where: {
                    username: payload.username
                }
            });
            if (user) {
                res.status = 0;
                res.data = {
                    username: user.username
                }
            }
        } else {
            res.status = -2
            res.message = 'token过期,请重新登录'
        }
    } catch (err) {
        console.log("err login.js [getUserInfo]:", err);
    }
    ctx.body = res;
}