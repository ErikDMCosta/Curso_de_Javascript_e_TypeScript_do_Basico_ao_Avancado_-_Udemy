const personPrototype = {
  firstName: 'Erik',
  lastName: 'Costa',
  age: '24',

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
