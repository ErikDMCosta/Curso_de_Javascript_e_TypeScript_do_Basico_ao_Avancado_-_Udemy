function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Erik',
  sobrenome: 'Costa',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};

semRetorno('Erik', 'Costa');
pessoa.exibirNome();

export { pessoa };
