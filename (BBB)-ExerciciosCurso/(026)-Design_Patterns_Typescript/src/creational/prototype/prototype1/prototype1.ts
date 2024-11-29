export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}
  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('João', 24);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Bla Bla Bla';

// person2.name = 'Joana';
person2.name = 'Person2';
console.log(person2);
// console.log(person2.name);
console.log(person2.addresses);
