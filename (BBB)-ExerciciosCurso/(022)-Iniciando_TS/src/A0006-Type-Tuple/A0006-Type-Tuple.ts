// Tuple
// const dadosCliente1: [number, string] = [1, 'Erik']
// const dadosCliente1: [number] = [1];
// const dadosCliente1: readonly [number, string] = [1, 'Erik']
const dadosCliente1: [number, string] = [1, "Erik"];
const dadosCliente2: [number, string, string] = [1, "Erik", "Costa"];
const dadosCliente3: [number, string, string?] = [1, "Erik"];
const dadosCliente4: [number, string, ...string[]] = [1, "Erik", "Moraes"];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = "Carlos";
// dadosCliente1[2] = 'Vieira';
// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Luiz', 'Otávio']
const array2: ReadonlyArray<String> = ['Luiz', 'Otávio']

// console.log(array1.pop());
// console.log(array1.push());
console.log(array1);
console.log(array2);
