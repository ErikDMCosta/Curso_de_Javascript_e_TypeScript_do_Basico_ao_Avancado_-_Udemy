import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustumerDataParseJson extends CustomerDataParser {
  protected async parseDate(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      // customerData.push({ name, age, cpf, nova: 'só pra gente ver' });
      customerData.push({ name, age, cpf });
    }
    return customerData;
  }

  protected hock(): void {
    console.log('hock have executed');
  }
}
