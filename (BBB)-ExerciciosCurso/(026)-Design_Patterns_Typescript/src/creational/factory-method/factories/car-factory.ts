import { VehicleFactory } from './vehicle-factory';
import { Car } from '../vehicles/car';
import { Vehicle } from '../vehicles/vehicle';

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
