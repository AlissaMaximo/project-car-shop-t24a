import { Router } from 'express'; 
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const AutomobileRouter = Router();

AutomobileRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);
AutomobileRouter.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAll(),
);
AutomobileRouter.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);
AutomobileRouter.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateOne(),
);

AutomobileRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);
AutomobileRouter.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);
AutomobileRouter.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);
AutomobileRouter.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateOne(),
);

export default AutomobileRouter;