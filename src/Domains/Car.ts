import ICar from '../Interfaces/ICar';
import AutomobileDomain from './AutomobileDomain';

export default class Car extends AutomobileDomain {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super({
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      buyValue: car.buyValue,
      status: car.status || false,
    });
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public setDoorsQty(doorsQty: number): void {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number): void {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }
}