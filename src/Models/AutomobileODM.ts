import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

export default abstract class AutomobileODM<T> {
  private schema: Schema;
  private model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(id: string) : Promise<T | null> {
    const result = await this.model.findById(id);
    return result;
  }

  public async updateOne(id: string, newData: Partial<T>): Promise<T | null> {
    return this.model.findOneAndUpdate({ _id: id }, newData, { new: true });
  }
}