// Global
function retornaFuncao(nome) {
  return function(sobrenome) {
    return nome + ' ' + sobrenome;
  };
}

function falaNome(nome) {
  const sobrenome = 'Costa';
  console.log(nome, sobrenome);
}

const funcao = retornaFuncao('Érik');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao('Costa'),
  funcao2('Oliveira'));
