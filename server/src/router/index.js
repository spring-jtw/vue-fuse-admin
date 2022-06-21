import compose from 'koa-compose';
import Router from 'koa-router';

import apiRouter from '../api';
import config from '../config';

// The default load file in the folder below the index.js
const index = 'index';

// Router default prefix or context path
const router = new Router();

// Set router
Object.keys(apiRouter).forEach(name => router.use('', apiRouter[name][index].routes(), apiRouter[name][index].allowedMethods()));
// console router list
/* eslint-disable no-console */
if (config.isDev) {
    for (const layer of router.stack) {
        console.log(`path: ${layer.path}, methods: ${layer.methods}`);
    }
}
/* eslint-enable */

export default function api() {
    return compose([
        router.routes(),
        router.allowedMethods()
    ]);
}