import Router from 'koa-router';
import * as routes from './routes';
import { Auth } from "../../middleware/auth";
const router = new Router();

router.get('/api/admin/getAllRoutes', routes.getAllRoutes);
router.post('/api/admin/editRoute/:id', routes.editRoute);

export default router;