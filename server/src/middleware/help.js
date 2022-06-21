// var fs = require('fs')
// var path = require("path");
// var util = require('util')
var models = require('../lib/models/index')

const strTrim = str => (str || "").replace(/(^\s*)|(\s*$)/g, "")
    // 去掉参数空格
export const trim = async(ctx, next) => {
    let params = ctx.request.method == "GET" ? ctx.request.query : ctx.request.body;
    let run = param => {
        for (let p in param) {
            if (typeof param[p] == "string") {
                param[p] = strTrim(param[p])
            } else if (typeof param[p] == "object") {
                run(param[p])
            }
        }
    }
    run(params);
    await next();
}
export const model = async(ctx, next) => {
    ctx.models = models
    await next();
}