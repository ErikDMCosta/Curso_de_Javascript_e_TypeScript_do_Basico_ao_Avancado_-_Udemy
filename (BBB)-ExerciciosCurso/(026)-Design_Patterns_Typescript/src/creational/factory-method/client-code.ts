// import { Car } from './vehicles/car';

// const fusca = new Car('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

// const celta = new Car('Celta');
// celta.pickUp('Pedro');
// celta.stop();

// import { CarFactory } from './factories/car-factory';

// const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const custumerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  // const car = randomCarAlgorithm();
  // console.log(car);
  const vehicle = randomCarAlgorithm();
  const name = custumerNames[randomNumbers(custumerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
