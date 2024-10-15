// import { CustumerProtocol } from '../interfaces/custumer-protocol';
import {
  IndivudualCustumerProtocol,
  EnterpriseCustumerProtocol,
  CustumerOrder,
} from '../interfaces/custumer-protocol';

// export class IndivudualCustumer implements CustumerProtocol {
export class IndividualCustumer
  implements IndivudualCustumerProtocol, CustumerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    // throw new Error('Method not implemented.');
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    // throw new Error('Method not implemented.');
    return this.cpf;
  }
}
// export class EnterpriseCustumer implements CustumerProtocol {
export class EnterpriseCustumer
  implements EnterpriseCustumerProtocol, CustumerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    // throw new Error('Method not implemented.');
    return this.name;
  }
  getIDN(): string {
    // throw new Error('Method not implemented.');
    return this.cnpj;
  }
}
