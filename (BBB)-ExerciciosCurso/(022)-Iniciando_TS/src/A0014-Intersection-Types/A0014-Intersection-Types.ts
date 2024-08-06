// | OU (UNIÃO)
// & AND (INTERSECÇÃO)
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Erik',
  sobrenome: 'Costa',
  idade: 30,
};

console.log(pessoa);

// Module Mode
export { pessoa };
