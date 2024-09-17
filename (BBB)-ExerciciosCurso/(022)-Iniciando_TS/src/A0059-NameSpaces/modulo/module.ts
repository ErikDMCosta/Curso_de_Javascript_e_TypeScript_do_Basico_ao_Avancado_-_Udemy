/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
  // console.log(11111);
  // const nome = 'Erik';
  export const nomeDoNameSpace = 'Erik';
  // class PessoaNameSpace {

  export class PessoaNameSpace {
    constructor(public nome: string) {}
  }

  const pessoaDoNameSpace = new PessoaNameSpace('Luiz');
  console.log(pessoaDoNameSpace);

  export namespace OutroNameSpace {
    export const nomeDoOutroNameSpace = 'Nome no Outro NameSpace';
  }
}

// const pessoaDoNameSpace = new PessoaNameSpace('Luiz');
// const pessoaDoNameSpace = new MeuNameSpace.PessoaNameSpace('Luiz');
// console.log(pessoaDoNameSpace);
// console.log(MeuNameSpace.nomeDoNameSpace);
// console.log(MeuNameSpace.OutroNameSpace.nomeDoOutroNameSpace);

// export default 1;
