import { Customer } from '../customer/customer';
import { Vehicle } from '../../factory-method/vehicles/vehicle';

export interface CreateVehicleCustumer {
  createCustumer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
