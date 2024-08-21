export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    // private cpf: string,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  // getNome(): string {
  //   return this.nome;
  // }

  // setCpf(valor: string): void {
  set cpf(valor: string) {
    // this.cpf = valor;
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  // getCpf(): string {
    get cpf(): string {
      // return this.cpf;
      // return this.cpf.replace(/\D/g, '');
      console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

// const pessoa = new Pessoa('Erik', 'Costa', 24, '000.000.000-00');
const pessoa = new Pessoa('Erik', 'Costa', 24, '123.456.798-00');
// console.log(pessoa.getNome());
// pessoa.setCpf('123.456.798-99');
// console.log(pessoa.getCpf());
pessoa.cpf = '123.456.798-99';
console.log(pessoa.cpf);
