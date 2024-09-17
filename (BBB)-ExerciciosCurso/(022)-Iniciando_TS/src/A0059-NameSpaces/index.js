/* eslint-disable @typescript-eslint/no-namespace */
var MeuNameSpace;
(function (MeuNameSpace) {
    // console.log(11111);
    // const nome = 'Erik';
    MeuNameSpace.nomeDoNameSpace = 'Erik';
    // class PessoaNameSpace {
    var PessoaNameSpace = /** @class */ (function () {
        function PessoaNameSpace(nome) {
            this.nome = nome;
        }
        return PessoaNameSpace;
    }());
    MeuNameSpace.PessoaNameSpace = PessoaNameSpace;
    var pessoaDoNameSpace = new PessoaNameSpace('Luiz');
    console.log(pessoaDoNameSpace);
    var OutroNameSpace;
    (function (OutroNameSpace) {
        OutroNameSpace.nomeDoOutroNameSpace = 'Nome no Outro NameSpace';
    })(OutroNameSpace = MeuNameSpace.OutroNameSpace || (MeuNameSpace.OutroNameSpace = {}));
})(MeuNameSpace || (MeuNameSpace = {}));
// const pessoaDoNameSpace = new PessoaNameSpace('Luiz');
var pessoaDoNameSpace = new MeuNameSpace.PessoaNameSpace('Luiz');
console.log(pessoaDoNameSpace);
console.log(MeuNameSpace.nomeDoNameSpace);
console.log(MeuNameSpace.OutroNameSpace.nomeDoOutroNameSpace);
// export default 1;
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MeuNameSpace.nomeDoNameSpace);
