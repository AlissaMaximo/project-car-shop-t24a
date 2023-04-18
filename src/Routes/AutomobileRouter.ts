import { Router } from 'express'; 
import CarController from '../Controllers/CarController';

const AutomobileRouter = Router();

AutomobileRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);
AutomobileRouter.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);
AutomobileRouter.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());

export default AutomobileRouter;