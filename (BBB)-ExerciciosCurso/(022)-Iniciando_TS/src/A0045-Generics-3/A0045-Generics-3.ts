// interface PessoaProtocolo1 {
// interface PessoaProtocolo1<T> {
// interface PessoaProtocolo1<T, U> {
interface PessoaProtocolo1<T = string, U = number> {
  // nome: string;
  nome: T;
  sobrenome: T;
  idade: U;
}

// type PessoaProtocolo2<T, U> = {
type PessoaProtocolo2<T = string, U = number> = {
  // nome: string;
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo1<string, number> = {
  nome: 'Erik',
  sobrenome: 'Costa',
  idade: 24,
};

const aluno2: PessoaProtocolo1<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 24,
};

const aluno3: PessoaProtocolo2<string, number> = {
  nome: 'Erik',
  sobrenome: 'Costa',
  idade: 24,
};

// console.log(aluno1);
// console.log(aluno1, aluno2);
// console.log(aluno1, aluno2, aluno3);
console.log('', aluno1, '\n', aluno2, '\n', aluno3);
