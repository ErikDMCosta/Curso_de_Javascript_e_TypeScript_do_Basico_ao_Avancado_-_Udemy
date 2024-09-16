function decorator(
  classPrototype: any,
  nomeMetodo: string,
  decriptor: PropertyDescriptor,
  // ): any {
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(decriptor);
  // return { writable: false, enumerable: false, configurable: false };
  return {
    value: function (...args: string[]) {
      // return 1;
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Erik', 'Costa', 24);
const metodo = pessoa.metodo('Olá MUndo!');
pessoa.metodo = () => 'EIIIIIIIIIII';
console.log(metodo);
