import IAutomobile from './IAutomobile';

export default interface ICar extends IAutomobile {
  doorsQty: number,
  seatsQty: number,
}