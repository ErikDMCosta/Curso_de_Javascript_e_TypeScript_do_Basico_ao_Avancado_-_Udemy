// interface Pessoa {
//   nome: string;
// }

// interface Pessoa {
//   readonly sobrenome: string;
// }

// interface Pessoa {
//   readonly enderecos: readonly string[];
// }

// interface Pessoa {
//   idade?: number;
// }

// Declaration Merging
interface Pessoa {
  nome: string;
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Erik',
  sobrenome: 'Costa',
  enderecos: ['Av. Brasil'],
  idade: 24,
};

pessoa.idade = 25;
console.log(pessoa);
