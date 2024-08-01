enum Cores {
  // VERMELHO = 1,         // 1
  // AZUL,                 // 2
  // AMARELO               // 3
  // VERMELHO, // 0
  // AZUL, // 1
  // AMARELO, // 2
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
  // ROXO = 'ROXO', // ROXO
  // VERDE = 201, // 201
  // ROSA, // 202
}

enum Cores {
  ROXO = 'ROXO', // ROXO
  VERDE = 201, // 201
  ROSA, // 202
}

// console.log(Cores);
console.log(Cores.VERMELHO);
// console.log(Cores[0]);
console.log(Cores[10]);
console.log(Cores.ROXO);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

// escolhaACor(123456);
escolhaACor(Cores.ROXO);
