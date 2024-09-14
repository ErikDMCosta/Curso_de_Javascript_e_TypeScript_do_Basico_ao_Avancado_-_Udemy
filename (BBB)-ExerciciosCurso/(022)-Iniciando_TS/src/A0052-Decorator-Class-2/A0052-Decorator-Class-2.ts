function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);

  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[1]);
      this.cor = this.inverte(args[0]);
    }
    inverte(valor: string): string {
      return valor.split('').reverse().join();
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {
    console.log('Sou a classe');
  }
}

// inverteNomeECor(Animal);

const animal = new Animal('Erik', 'roxo');
console.log(animal);
