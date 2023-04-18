import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import { describe, afterEach } from 'mocha';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('MotorcycleService testing', function () {
  const createdObjects = [
    new Motorcycle({
      id: '641b5cade028df261c85d370',
      model: 'Always',
      year: 2015,
      color: 'Brown',
      status: true,
      buyValue: 20.03,
      category: 'Street',
      engineCapacity: 5,
    }),
  ];

  const createdObject = new Motorcycle({
    id: '641b5cade028df261c85d370',
    model: 'Always',
    year: 2015,
    color: 'Brown',
    status: true,
    buyValue: 20.03,
    category: 'Street',
    engineCapacity: 5,
  });

  const motorcycle: IMotorcycle = {
    model: 'Always',
    year: 2015,
    color: 'Brown',
    status: true,
    buyValue: 20.03,
    category: 'Street',
    engineCapacity: 5,
  };

  const objectsAfterUpdate = [
    new Motorcycle({
      id: '641b5cade028df261c85d370',
      model: 'Lovely',
      year: 1999,
      color: 'Purple',
      status: false,
      buyValue: 50.70,
      category: 'Road',
      engineCapacity: 5,
    }),
  ];

  const objectWithUpdatedInfo: IMotorcycle = {
    model: 'Lovely',
    year: 1999,
    color: 'Purple',
    status: false,
    buyValue: 50.70,
    category: 'Road',
    engineCapacity: 5,
  };

  it('Is motorcycle added', async function () {
    sinon.stub(Model, 'create').resolves(createdObject);

    const service = new MotorcycleService();
    const response = await service.create(motorcycle);

    expect(response).to.deep.equal(createdObject);
  });

  it('Are all motorcycles listed', async function () {
    sinon.stub(Model, 'find').resolves(createdObjects);

    const service = new MotorcycleService();
    const response = await service.findAll();

    expect(response).to.deep.equal(createdObjects);
  });

  it('Is motorcycle found by id', async function () {
    sinon.stub(Model, 'findById').resolves(createdObjects[0]);

    const service = new MotorcycleService();
    const response = await service.findById('641b5cade028df261c85d370');

    expect(response).to.deep.equal(createdObjects[0]);
  });  

  it('Is motorcycle not found by id', async function () {
    sinon.stub(Model, 'findById').resolves(createdObjects[1]);

    const service = new MotorcycleService();
    const response = await service.findById('641b5cade028df261c85d370ruim');

    expect(response).to.deep.equal(null);
  }); 

  it('Is it possible to update motorcycle by id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(objectsAfterUpdate[0]);

    const service = new MotorcycleService();
    const response = await service.updateOne('641b5cade028df261c85d370', objectWithUpdatedInfo);

    expect(response).to.deep.equal(objectsAfterUpdate[0]);
  });
  
  it('Is it not possible to update motorcycle by id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(objectsAfterUpdate[1]);

    const service = new MotorcycleService();
    const response = await service.updateOne('641b5cade028df261c85d370', objectWithUpdatedInfo);

    expect(response).to.deep.equal(null);
  });

  afterEach(sinon.restore);
});