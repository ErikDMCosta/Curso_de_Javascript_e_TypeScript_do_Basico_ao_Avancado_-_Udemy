/*
const nome = 'Érik'
const sobrenome = 'Costa'

// const falaNome = () => {
  //   console.log(nome, sobrenome);
  // };
  
  const falaNome = () => nome + ' ' + sobrenome;
  
  // console.log(module);
  
  // module.exports.nome = nome;
  // module.exports.sobrenome = sobrenome;
  // module.exports.falaNome = falaNome;
  
  // console.log(module.exports);
  
  exports.nome = nome;
  exports.sobrenome = sobrenome;
  exports.falaNome = falaNome;
  this.qualquerCoisa = 'O que eu quiser exportar';
  
  // console.log(exports);
*/

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// exports.Pessoa = Pessoa;
// module.exports.nome = 'Erik';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'O que eu quiser exportar';

const nome = 'Érik'
const sobrenome = 'Costa'

module.exports = {
  nome, sobrenome, Pessoa
};

exports.outraCoisa = 'Outra coisa';
