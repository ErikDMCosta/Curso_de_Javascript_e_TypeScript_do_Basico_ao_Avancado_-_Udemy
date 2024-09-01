export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = {
  tipo: 'pessoa';
  nome: string;
};
type Animal = {
  tipo: 'animal';
  cor: string;
};
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

// function mostrarNome(obj: PessoaOuAnimal) {
//   console.log(obj.nome);
// }

function mostrarNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log('Isso é uma pessoa', obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostrarNome(new Aluno('João'));
mostrarNome({ tipo: 'animal', cor: 'Rosa' });
