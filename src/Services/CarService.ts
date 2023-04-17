import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

export default class CarService {
  private carModel: CarModel = new CarModel();

  public async createCar(car: ICar) {
    const newCar = await this.carModel.create(car);
    const createdNewCar = new Car(newCar);
    return createdNewCar;
  }
}