export class Empresa {
  // public nome: string = 'Erik';
  // public readonly nome: string = 'Erik';
  public readonly nome: string; // public não nescessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

// const empresa1 = new Empresa('Udemy');
const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Erik', 'Costa');
const colaborador2 = new Colaborador('Maria', 'Costa');
const colaborador3 = new Colaborador('João', 'Vieira');

// console.log(empresa1);
// empresa1.nome = 'Facebook';
// console.log(empresa1.nome);

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  nome: 'Erik',
  sobrenome: 'Costa'
});
console.log(empresa1);
empresa1.mostrarColaborador();
