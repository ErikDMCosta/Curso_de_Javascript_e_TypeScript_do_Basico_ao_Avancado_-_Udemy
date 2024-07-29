/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Erik'; // Qualquer tipo de strings: '' "" ``
let idade: number = 24; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol(); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: Array<string> = ['a', 'b'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 24,
  nome: 'Erik',
};

console.log(pessoa.nome);

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(2, 2);
const soma2: (x: number, y: number) => number = (x, y) => x + y;
