// const n = require('./mod');
// console.log(n(2, 2));
// const Cachorro = require('./SubA-1/SubB/SubC/mod1');
// const cachorrinho = new Cachorro('Dog');
// cachorrinho.latir();

// console.log(__filename);
// console.log(__dirname);

const path = require('path');
// console.log(path.resolve(__dirname));
// console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));
