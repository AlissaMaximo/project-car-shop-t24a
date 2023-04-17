import IAutomobile from '../Interfaces/IAutomobile';

export default abstract class AutomobileDomain {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(automobile: IAutomobile) {
    this.id = automobile.id;
    this.model = automobile.model;
    this.year = automobile.year;
    this.color = automobile.color;
    this.buyValue = automobile.buyValue;
    this.status = automobile.status;
  }

  public setID(id: string): void {
    this.id = id;
  }

  public getID(): string | undefined {
    return this.id;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public getModel(): string {
    return this.model;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public getYear(): number {
    return this.year;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public getColor(): string {
    return this.color;
  }
  
  public setBuyValue(buyValue: number): void {
    this.buyValue = buyValue;
  }
  
  public getBuyValue(): number {
    return this.buyValue;
  }
  
  public setStatus(status: boolean): void {
    this.status = status;
  }
  
  public getStatus(): boolean | undefined {
    return this.status;
  }
}
