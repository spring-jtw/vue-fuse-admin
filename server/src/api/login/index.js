import Router from 'koa-router';
import * as api from './login.js';
import { Auth } from "../../middleware/auth";
const router = new Router();

router.post('/api/admin/login', api.login);
router.get('/api/admin/getUserInfo', api.getUserInfo);

export default router;