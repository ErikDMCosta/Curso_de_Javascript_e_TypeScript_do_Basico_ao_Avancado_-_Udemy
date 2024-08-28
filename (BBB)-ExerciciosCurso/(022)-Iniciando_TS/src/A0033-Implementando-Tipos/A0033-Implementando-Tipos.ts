// export abstract class TipoPessoa {
type TipoPessoa = {
  // protected abstract nome: string;
  nome: string;
  // protected abstract sobrenome: string;
  sobrenome: string;
  // protected abstract nomeCompleto(): string;
  // nomeCompleto(): string;
  nomeCompleto: () => string;
};

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

// export class Pessoa extends TipoPessoa {
//   constructor(
//     protected nome: string,
//     protected sobrenome: string,
//   ) {
//     super();
//   }

// export class Pessoa implements TipoPessoa {
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  // protected nomeCompleto(): string {
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Erik', 'Costa');
console.log(pessoa.nomeCompleto());
