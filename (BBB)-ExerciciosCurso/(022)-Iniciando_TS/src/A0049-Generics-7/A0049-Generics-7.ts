export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma(...args: unknown[]): number {
  const returno = args.reduce<number>((sum, value) => {
    if (isNumber(value)) {
      return sum + value;
    }
    return sum; // Se 'value' não for um número, mantemos o valor atual de 'sum'
  }, 0); // Inicializa 'sum' com 0, que é um número
  return returno; // Garante que o retorno será sempre um número
}

console.log(soma(1, 2, 3)); // Saída: 6
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1])); // Saída: 7
console.log(soma('a', 'b', 'c')); // Saída: 0
