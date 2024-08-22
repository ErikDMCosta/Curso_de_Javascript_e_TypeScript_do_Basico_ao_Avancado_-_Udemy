export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('OI');
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    // return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

// const pessoa = new Pessoa('Erik', 'Costa', 24, '123.456.798-00');
const pessoa1 = new Pessoa('Erik', 'Costa', 24, '123.456.798-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Costa');
// pessoa.cpf = '123.456.798-99';
pessoa1.cpf = '123.456.798-99';
console.log(pessoa1);
console.log(pessoa2);

pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
