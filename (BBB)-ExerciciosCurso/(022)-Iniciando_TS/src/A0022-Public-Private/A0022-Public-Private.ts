export class Empresa {
  // public readonly nome: string; // public não nescessário
  readonly nome: string;
  // private readonly colaboradores: Colaborador[] = [];
  // colaboradores: Colaborador[] = [];
  // private colaboradores: Colaborador[] = [];
  private readonly colaboradores: Colaborador[] = [];
  // protected readonly cnpj: string;
  readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  //  adicionaColaborador(colaborador: Colaborador): void {
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  // public mostrarColaboradores(): void {
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  // public getNome(): string {
  // getNome(): string {
  //   return this.nome;
  // }
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
// console.log(empresa1);
// console.log(empresa1.getNome());
// console.log(empresa1.getNome(), empresa1.nome); // Redundante
// empresa1.colaboradores = [];
// empresa1.colaboradores.pop();
// empresa1.colaboradores.pop();
// empresa1.colaboradores.pop();
// empresa1.colaboradores = [];
// console.log(empresa1.nome);
console.log(empresa1);
