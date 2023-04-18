import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public getCategory(): string {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  } 
}