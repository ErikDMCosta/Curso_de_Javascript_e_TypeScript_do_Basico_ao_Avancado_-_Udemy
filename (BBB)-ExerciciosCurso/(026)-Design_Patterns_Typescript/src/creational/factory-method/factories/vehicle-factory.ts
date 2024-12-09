import { Vehicle } from '../vehicles/vehicle';

export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(custumerNome: string, vehicleNome: string): Vehicle {
    const car = this.getVehicle(vehicleNome);
    car.pickUp(custumerNome);
    return car;
  }
}
