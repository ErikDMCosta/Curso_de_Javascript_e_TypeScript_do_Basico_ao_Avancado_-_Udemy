const { texto, arquivos } = require("./base");

// * (opcional) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcional) 0 ou 1
// \ Caractere de Escape
// {n,m} mínimo e máximo
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10}

// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

// const regExp2 = /\./g;
// const regExp2 = /\.jpg/g;
// const regExp2 = /\.jpeg/g;
// const regExp2 = /\.(jpeg)|(jpg)/g;
// const regExp2 = /\.(jpe?g)/g;
// const regExp2 = /\.(jpe*g)/g;

// const regExp2 = /\.jpe{0,}g/gi;
// const regExp2 = /\.jpe{0,1}g/gi;
// const regExp2 = /\.jp(e)?g/gi;
// const regExp2 = /\.jp(e|E)?g/gi;
// const regExp2 = /\.(jp|JP)(e|E)?g/gi;
const regExp2 = /\.(jp|JP)(e|E)?(g|G)/gi;

for (const arquivo of arquivos) {
  // console.log(arquivo);
  //   console.log(arquivo, arquivo.match(regExp2));
  const valido = arquivo.match(regExp2);

  //   if (!valido) continue;
  console.log(arquivo, valido);
}
