import path from 'path';
import fs from 'fs';
import Koa from 'koa';
import onerror from 'koa-onerror';
import config from './config';
import middleware from './middleware';
import routes from './router';
import { initDb } from './lib/init'
// 初始化数据库
initDb()
const app = new Koa();

app.keys = ['keys', config.context_path];

// middlewares
app.use(middleware());
app.use(function(ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    });
});
app.use(routes());
// 500 handle
onerror(app, {
    html() {
        this.status = 500;
        this.body = { status: '-1' };
    }
});

// 404 handle
app.use(ctx => {
    ctx.status = 404;
    ctx.body = 'error/404'
});

export default app;