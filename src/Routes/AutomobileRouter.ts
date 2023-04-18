import { Router } from 'express'; 
import CarController from '../Controllers/CarController';

const AutomobileRouter = Router();

AutomobileRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).createCar(),
);
AutomobileRouter.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAllCars(),
);

export default AutomobileRouter;