// export interface Customer {
//   firstName: string;
//   lastName: string;
//   cpf: string;
//   cnpj: string;
// }

export interface CustumerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndivudualCustumerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustumerProtocol {
  name: string;
  cnpj: string;
}
