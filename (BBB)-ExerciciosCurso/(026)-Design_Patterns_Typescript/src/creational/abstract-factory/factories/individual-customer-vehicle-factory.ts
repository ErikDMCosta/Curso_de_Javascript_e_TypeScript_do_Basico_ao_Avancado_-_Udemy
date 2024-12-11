import { IndividualCar } from '../vehicle/individual-car';
import { Customer } from '../customer/customer';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { IndividualCustomer } from '../customer/individual-customer';

export class IndividualCustumerVehicleFactory {
  createCustumer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustumer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
