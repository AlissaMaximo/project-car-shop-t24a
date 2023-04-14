import IAutomobile from './IAutomobile';

export default interface IMotorcycle extends IAutomobile {
  category: string,
  engineCapacity: number,
}