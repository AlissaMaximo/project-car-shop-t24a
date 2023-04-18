import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import { describe, afterEach } from 'mocha';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('CarService testing', function () {
  const createdObjects = [
    new Car({
      id: '641b5cade028df261c85d370',
      model: 'Always',
      year: 2015,
      color: 'Brown',
      status: true,
      buyValue: 20.03,
      doorsQty: 4,
      seatsQty: 5,
    }),
  ];

  const createdObject = new Car({
    id: '641b5cade028df261c85d370',
    model: 'Always',
    year: 2015,
    color: 'Brown',
    status: true,
    buyValue: 20.03,
    doorsQty: 4,
    seatsQty: 5,
  });

  const car: ICar = {
    model: 'Always',
    year: 2015,
    color: 'Brown',
    status: true,
    buyValue: 20.03,
    doorsQty: 4,
    seatsQty: 5,
  };

  const objectsAfterUpdate = [
    new Car({
      id: '641b5cade028df261c85d370',
      model: 'Lovely',
      year: 1999,
      color: 'Purple',
      status: false,
      buyValue: 50.70,
      doorsQty: 2,
      seatsQty: 5,
    }),
  ];

  const objectWithUpdatedInfo: ICar = {
    model: 'Lovely',
    year: 1999,
    color: 'Purple',
    status: false,
    buyValue: 50.70,
    doorsQty: 2,
    seatsQty: 5,
  };

  it('Is car added', async function () {
    sinon.stub(Model, 'create').resolves(createdObject);

    const service = new CarService();
    const response = await service.create(car);

    expect(response).to.deep.equal(createdObject);
  });

  it('Are all cars listed', async function () {
    sinon.stub(Model, 'find').resolves(createdObjects);

    const service = new CarService();
    const response = await service.findAll();

    expect(response).to.deep.equal(createdObjects);
  });

  it('Is car found by id', async function () {
    sinon.stub(Model, 'findById').resolves(createdObjects[0]);

    const service = new CarService();
    const response = await service.findById('641b5cade028df261c85d370');

    expect(response).to.deep.equal(createdObjects[0]);
  });  

  it('Is car not found by id', async function () {
    sinon.stub(Model, 'findById').resolves(createdObjects[1]);

    const service = new CarService();
    const response = await service.findById('641b5cade028df261c85d370ruim');

    expect(response).to.deep.equal(null);
  }); 

  it('Is it possible to update car by id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(objectsAfterUpdate[0]);

    const service = new CarService();
    const response = await service.updateOne('641b5cade028df261c85d370', objectWithUpdatedInfo);

    expect(response).to.deep.equal(objectsAfterUpdate[0]);
  });
  
  it('Is it not possible to update car by id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(objectsAfterUpdate[1]);

    const service = new CarService();
    const response = await service.updateOne('641b5cade028df261c85d370', objectWithUpdatedInfo);

    expect(response).to.deep.equal(null);
  });

  afterEach(sinon.restore);
});