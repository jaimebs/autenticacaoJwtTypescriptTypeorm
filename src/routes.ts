import {Router} from 'express'
const routes = Router();

import UserController from './app/controllers/UserController';

routes.get('/users', (req, res) => {
  return res.send('Chegou');
})

routes.post('/users', UserController.store);

export default routes;