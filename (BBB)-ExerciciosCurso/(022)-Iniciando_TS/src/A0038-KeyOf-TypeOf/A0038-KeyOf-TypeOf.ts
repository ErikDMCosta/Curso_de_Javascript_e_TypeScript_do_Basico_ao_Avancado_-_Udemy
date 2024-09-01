// type CoresObj = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

// const coresObj: CoresObj = {
const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

// function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj) {
function traduzirCor(
  // cor: 'vermelho' | 'verde' | 'azul',
  cor: CoresChaves,
  cores: typeof coresObj,
) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));

console.log(traduzirCor('roxo', coresObj));
