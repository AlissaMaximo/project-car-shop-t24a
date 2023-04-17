import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

export default abstract class AutomobileODM<T> {
  private schema: Schema;
  private model: Model<T>;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
}