// Array<T> - T[]
export function multiplivaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

// export function concatenaStrings(...args: Array<string>): string {
export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplivaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
