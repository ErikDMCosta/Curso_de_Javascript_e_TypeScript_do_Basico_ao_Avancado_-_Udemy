export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    // console.log(`${this.nome} está atacando...`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  // bordao(): void {
  //   console.log('BORDAO');
  // }
  abstract bordao(): void;
  // abstract outraCoisa(a, b, c): Personagem;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    // console.log('GGUERREIRAAAAAA AOOOOOO ATAAAQUEEE!!');
    console.log(this.emoji + ' GUERREIRAAAAAA AOOOOOO ATAAAQUEEE!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    // console.log('MONNNNNNNNNNNSSSTERRRRRRRRRRRRRR!!!!');
    console.log(this.emoji + ' MONNNNNNNNNNNSSSTERRRRRRRRRRRRRR!!!!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 100, 1000);
// const personagem = new Personagem('Monstro', 100, 1000);

console.log('Guerreira ataca!');
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

console.log('\nMonstro ataca!');
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
