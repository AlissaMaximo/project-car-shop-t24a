import Automobile from './Automobile';

export default interface Car extends Automobile {
  doorsQty: number,
  seatsQty: number,
}