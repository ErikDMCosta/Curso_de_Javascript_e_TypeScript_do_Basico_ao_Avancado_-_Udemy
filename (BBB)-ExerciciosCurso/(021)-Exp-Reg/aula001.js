// g  - global (ecnontra todas as ocorrência)
// i  - insensitive
// () - grupos
// |  - ou

const { texto } = require("./base");

// const regExp1 = /João/g;
// const regExp1 = /João/gi;
// const regExp1 = /João/i;
// const regExp1 = /Teve 5 filhos/i;
// const regExp1 = /Teve 5   filhos/i;
// const regExp1 = /Teve 5 filhos/i;
// const regExp1 = /(Teve )(5 filhos)/i;
// const regExp1 = /(maria)(, hoje sua esposa)/i;
const regExp1 = /(maria|joão|erik)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

// console.log(regExp1.test(texto));
// console.log(regExp1.exec(texto));
if (found) {
  console.log(found[0]); // maria, hoje sua esposa
  console.log(found[1]); // maria
  console.log(found[2]); // , hoje sua esposa
}
