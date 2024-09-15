// type Constructor = new () => any;
interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[1]);
        this.cor = this.inverte(args[0]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}
function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador');
    return target;
  };
}

// @outroDecorador // 2
@outroDecorador('O parâmetro do outro decorador') // 2
@inverteNomeECor('Outra coisa', 'Valor2') // 1
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Erik', 'roxo');
console.log(animal);
