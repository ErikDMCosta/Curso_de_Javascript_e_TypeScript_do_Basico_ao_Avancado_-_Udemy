// import { CustumerProtocol } from '../interfaces/custumer-protocol';
import {
  IndivudualCustumerProtocol,
  EnterpriseCustumerProtocol,
} from '../interfaces/custumer-protocol';

// export class IndivudualCustumer implements CustumerProtocol {
export class IndivudualCustumer implements IndivudualCustumerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}
// export class EnterpriseCustumer implements CustumerProtocol {
export class EnterpriseCustumer implements EnterpriseCustumerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
