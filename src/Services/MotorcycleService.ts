import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private model: MotorcycleModel = new MotorcycleModel();

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    
    return new Motorcycle(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycles = await this.model.findAll();
    return allMotorcycles.map((motorcycle) => new Motorcycle(motorcycle));
  }

  public async findById(id: string) {
    const motorcycle = await this.model.findById(id);

    if (motorcycle) return new Motorcycle(motorcycle);

    return null;
  }

  public async updateOne(id: string, newData: IMotorcycle) {
    const result = await this.model.updateOne(id, newData);

    if (result) return new Motorcycle(result);

    return null;
  }
}