import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

export default class CarService {
  private carModel: CarModel;

  constructor() {
    this.carModel = new CarModel();
  }

  public async createCar(car: ICar) {
    const newCar = await this.carModel.create(car);
    return new Car(newCar);
  }
}