@decorator
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {}
}

// function decorator(target: any): any {
// function decorator<T>(target: any): any {
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  // console.log('OIE... do DECORATOR');
  // return target;
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      // this.cor = args[0];
      // this.cor = args[0].split('');
      // this.cor = args[0].split('').reverse();
      // this.cor = args[0].split('').reverse().join();
      this.nome = this.inverte(args[1]);
      this.cor = this.inverte(args[0]);
    }
    inverte(valor: string): string {
      return valor.split('').reverse().join();
    }
  };
}

// const AnimalDecorator = decorator(Animal);
// const animal = new AnimalDecorator('roxo');
// const animal = new AnimalDecorator('Erik', 'roxo');

const animal = new Animal('Erik', 'roxo');
console.log(animal);
