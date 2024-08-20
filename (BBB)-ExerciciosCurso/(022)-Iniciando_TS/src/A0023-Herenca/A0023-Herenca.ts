export class Pessoa {
  constructor(
    public nome: String,
    public sobrenome: String,
    private idade: number,
    protected cpf: String,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): String {
    return this.cpf;
  }
  getNomeCompleto(): String {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): String {
    return 'Nome completo do Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): String {
    return 'Nome completo do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Erik', 'Costa', 24, '000.000.000-00');
const aluno = new Aluno('Erik', 'Costa', 24, '000.000.000-00');
const cliente = new Cliente('Erik', 'Costa', 24, '000.000.000-00');

// console.log(pessoa);
// // console.log(aluno.getIdade());
// console.log(aluno);
// console.log(cliente);

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
