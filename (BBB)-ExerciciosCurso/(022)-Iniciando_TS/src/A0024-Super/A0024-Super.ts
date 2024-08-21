export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  // sala: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    // public sala: string,
    // sala: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    // this.sala = sala;
  }
  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    // return super.getNomeCompleto();
    return result + ' HEYYYYYYYY!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Nome completo do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Erik', 'Costa', 24, '000.000.000-00');
// const aluno = new Aluno('Erik', 'Costa', 24, '000.000.000-00');
const aluno = new Aluno('Erik', 'Costa', 24, '000.000.000-00', '001');
const cliente = new Cliente('Erik', 'Costa', 24, '000.000.000-00');

// console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
// console.log(cliente.getNomeCompleto());
