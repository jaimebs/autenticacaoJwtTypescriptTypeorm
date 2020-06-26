import {Router} from 'express'

const routes = Router();
import authMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import sessionController from './app/controllers/sessionController';

routes.post('/session', sessionController.authenticate)

routes.get('/users', authMiddleware, UserController.index);
routes.post('/users', authMiddleware, UserController.store);

export default routes;