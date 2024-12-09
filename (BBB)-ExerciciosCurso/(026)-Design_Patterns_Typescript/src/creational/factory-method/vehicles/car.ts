import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(custumerNome: string): void {
    console.log(`${this.name} está buscando ${custumerNome}`);
  }

  stop(): void {
    console.log(`${this.name} parou`);
  }
}
