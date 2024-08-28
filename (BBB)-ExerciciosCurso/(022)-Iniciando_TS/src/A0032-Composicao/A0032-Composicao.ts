export class Carro {
//   public readonly motor = new Motor();
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligando...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parando...');
  }

  desligar(): void {
    console.log('Motor está desligando...');
  }
}

const carro = new Carro();
// carro.motor.acelerar();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
