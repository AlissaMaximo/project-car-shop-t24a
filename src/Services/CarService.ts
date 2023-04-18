import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

export default class CarService {
  private carModel: CarModel = new CarModel();

  public async createCar(car: ICar) {
    const newCar = await this.carModel.create(car);
    return new Car(newCar);
  }

  public async findAllCars() {
    const allCars = await this.carModel.findAll();
    return allCars.map((car) => new Car(car));
  }
}