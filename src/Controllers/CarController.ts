import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }

  public async createCar(req: Request, res: Response, next: NextFunction) {
    const car: ICar = req.body;
    try {
      const newCar = await this.service.createCar(car);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }
}