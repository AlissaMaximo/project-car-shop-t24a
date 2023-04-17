import { Router } from 'express'; 
import CarController from '../Controllers/CarController';

const AutomobileRouter = Router();

AutomobileRouter.post(
  '/cars',
  (req, res, next) => new CarController().createCar(req, res, next),
);

export default AutomobileRouter;