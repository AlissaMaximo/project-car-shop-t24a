import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

export default class CarService {
  private model: CarModel = new CarModel();

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    
    return new Car(newCar);
  }

  public async findAll() {
    const allCars = await this.model.findAll();
    return allCars.map((car) => new Car(car));
  }

  public async findById(id: string) {
    const car = await this.model.findById(id);

    if (car) return new Car(car);

    return null;
  }

  public async updateOne(id: string, newData: ICar) {
    const result = await this.model.updateOne(id, newData);
    
    if (result) return new Car(result);

    return null;
  }
}