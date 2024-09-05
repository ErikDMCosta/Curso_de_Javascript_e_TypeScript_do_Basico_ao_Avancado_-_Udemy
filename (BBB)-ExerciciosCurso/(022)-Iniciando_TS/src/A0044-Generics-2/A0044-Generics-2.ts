// type MeuTipo = number | 10;
type MeuTipo = number;

const arraayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arraayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo | number> {
  // return new Promise((resolve, reject) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log( + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
