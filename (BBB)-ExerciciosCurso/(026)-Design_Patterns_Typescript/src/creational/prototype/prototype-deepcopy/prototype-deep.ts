export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  // private addresses: Address[] = [];
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}
  clone(): Person {
    const newObj = new Person(this.name, this.age);
    // newObj.addresses = [...this.addresses];
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}
  // clone(): Prototype {
  clone(): Address {
    return new Address(this.street, this.number);
  }
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

console.log();
console.log(person1);
console.log(person1.addresses);

// obj = _.cloneDeep(objPrototype);
