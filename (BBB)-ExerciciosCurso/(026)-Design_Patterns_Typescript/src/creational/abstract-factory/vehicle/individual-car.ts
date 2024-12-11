import { VehicleProtocol } from './vehicle-protocol';
import { Customer } from '../customer/customer';

export class IndividualCar implements VehicleProtocol {
  constructor(public nome: string, private readonly constumer: Customer) {}

  pickUp(): void {
    console.log(
      `${this.nome} está buscando ${this.constumer.name} (INDIVIDUAL)`,
    );
  }
}
