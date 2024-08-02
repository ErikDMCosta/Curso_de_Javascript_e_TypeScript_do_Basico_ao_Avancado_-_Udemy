// string | number | boolean
// function add(a: number, b: number) {
// return a + b;
// }

function addOrCocat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a}${b}`;
}

console.log(addOrCocat(10, 20));
console.log(addOrCocat('10', '20'));
console.log(addOrCocat(10, '20'));
console.log(addOrCocat('10', 20));
// console.log(true + true);
console.log(addOrCocat(true, true));
