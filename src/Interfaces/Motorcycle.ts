import Automobile from './Automobile';

export default interface Motorcycle extends Automobile {
  category: string,
  engineCapacity: number,
}