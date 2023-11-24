const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

/**
 * 
const pessoas = [
  { nome: 'João' },
  { nome: 'Maria' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' }
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);
 * 
*/

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  // console.log(dados);
  // return dados;
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  // console.log(dados);
  dados.forEach(val => { console.log(val.nome) });
}

leArquivo(caminhoArquivo);

/**
 * 
const dadosArquivos = leArquivo(caminhoArquivo)
// console.log(dadosArquivos);
.then(dados => console.log(dados));
* 
*/
