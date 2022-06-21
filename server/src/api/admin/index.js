import Router from 'koa-router';
import * as api from './user.api.js';
import { Auth } from "../../middleware/auth";
const router = new Router();



export default router;