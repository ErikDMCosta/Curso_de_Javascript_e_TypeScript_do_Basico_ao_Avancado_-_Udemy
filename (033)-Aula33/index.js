const pessoa = {
  nome: 'Érik',
  sobrenome: ' de Moraes Costa',
  idade: 23,
  endereco: {
    rua: 'Santo Antão',
    numero: 320
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
