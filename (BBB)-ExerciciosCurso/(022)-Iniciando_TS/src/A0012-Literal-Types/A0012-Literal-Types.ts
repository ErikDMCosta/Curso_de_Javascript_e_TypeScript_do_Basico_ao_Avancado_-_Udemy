let x = 10; // eslint-disable-line
x = 0b1010;
// x = 'Erik';
const y = 10;
// let a: 100 = 100; // eslint-disable-line
// let a = 100 as const; // eslint-disable-line
const a = 100; // eslint-disable-line
// a = 120;

const pessoa = {
  // nome: 'Erik',
  nome: 'Erik' as const,
  sobrenome: 'Costa',
};
// pessoa.nome = "Erik1";

// function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
//   return cor;
// }

const escolhaCor = (cor: 'Vermelho' | 'Amarelo' | 'Azul'): 'Vermelho' | 'Amarelo' | 'Azul' => cor;
// console.log(escolhaCor);
// console.log(escolhaCor(''));
console.log(escolhaCor('Vermelho'));

// Module Mode
export default 1;
