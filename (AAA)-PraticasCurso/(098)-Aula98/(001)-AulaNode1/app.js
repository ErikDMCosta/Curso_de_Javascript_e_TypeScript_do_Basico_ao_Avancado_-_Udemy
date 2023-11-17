/*
const mod1 = require('./mod1');
const { nome, sobrenome, falaNome } = require('./mod1');

console.log(mod1);
console.log(mod1.falaNome());
const falaNome = mod1.falaNome;
console.log(falaNome());
*/

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Jão');
console.log(mod1);
console.log(p1);

// const p1 = new Pessoa('Erik');
// console.log(p1);

/*
axios('https://tools.learningcontainer.com/sample-json.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
*/
