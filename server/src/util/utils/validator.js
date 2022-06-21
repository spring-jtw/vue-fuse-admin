/** 参数校验器 */


// 必传参数，params是一个必传参数名+传参方式组成的二维数组，例如：[['id', 'params'], ['uname', 'body'], ['type', 'query'], ['token', 'header']]

const requireParams = function(ctx, params, res) {
    let body = null
    if (ctx.method === 'GET') {
        body = ctx.query
    } else {
        body = ctx.request.body
    }
    params.forEach(item => {
        if (body[item] === undefined || body[item] === null || body[item] === '') {
            res.message = '缺少必填参数:' + item
            res.status = -2
            throw new Error
        }
    });
}
export default requireParams