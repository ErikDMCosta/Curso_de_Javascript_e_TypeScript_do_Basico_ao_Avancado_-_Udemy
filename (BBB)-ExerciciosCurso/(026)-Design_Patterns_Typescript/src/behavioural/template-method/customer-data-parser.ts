import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  async fixCustumerData(): Promise<void> {
    this.customerData = await this.parseDate();
    this.hock();
    this.customerData = this.fixCpf();
  }

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => ({
      ...customer,
      cpf:
        typeof customer.cpf === 'string' ? customer.cpf.replace(/\D/g, '') : '',
    }));
  }

  protected hock(): void {}

  protected abstract parseDate(): Promise<CustomerData[]>;
}
