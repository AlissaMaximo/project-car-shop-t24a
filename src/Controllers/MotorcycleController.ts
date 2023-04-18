import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const allMotorcycles = await this.service.findAll();

    return this.res.status(200).json(allMotorcycles);
  }

  public async findById() {
    const { id } = this.req.params;

    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    try {
      const motorcycle = await this.service.findById(id);

      if (motorcycle) {
        return this.res.status(200).json(motorcycle);
      }

      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (error) {
      this.next(error);
    }
  }

  public async updateOne() {
    const { id } = this.req.params;

    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const updatedMotorcycle = await this.service.updateOne(id, motorcycle);

      if (updatedMotorcycle) {
        return this.res.status(200).json(updatedMotorcycle);
      }

      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (error) {
      this.next(error);
    }
  }
}