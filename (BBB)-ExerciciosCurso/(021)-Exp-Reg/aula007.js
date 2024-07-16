const { cpfs, cpfs2 } = require("./base");

// ^   -> Começa com
// $   -> Termina com
// [^] -> Negação
// m   -> Multiline

// console.log(cpfs2);

const cpf = '254.224.877-45';
const cpfRegExp = /(\d{3}\.){2}\d{3}\-\d{2}/g;
// console.log(cpfs.match(cpfRegExp));
// console.log(cpf.match(cpfRegExp));
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
