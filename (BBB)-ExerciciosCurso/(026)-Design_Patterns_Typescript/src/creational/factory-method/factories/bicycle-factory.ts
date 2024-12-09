import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicles/vehicle';
import { Bicycle } from '../vehicles/bicycle';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
