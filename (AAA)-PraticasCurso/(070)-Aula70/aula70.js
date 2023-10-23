// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa('Érik', 'Costa');
const p2 = new Pessoa('Maria', 'Costa');

console.log(p1);
console.log(p2);
