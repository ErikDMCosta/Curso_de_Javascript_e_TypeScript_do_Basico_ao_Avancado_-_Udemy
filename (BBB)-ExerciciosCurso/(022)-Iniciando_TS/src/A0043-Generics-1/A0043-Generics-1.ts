type FilterCallBack<U> = (
  // value: unknown,
  value: U,
  // index?: number,
  index?: number,
  // array?: unknown[],
  array?: U[]
) => boolean;

// function meuFilter(array: unknown[], callbackfn: FilterCallBack) {
export function meuFilter<T>(array: T[], callbackfn: FilterCallBack<T>): T[] {
  const novoArray: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i], i, array)) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a"];

// console.log(array.filter((value) => value < 5));
const arrayFiltradoOriginal = array.filter((value) => {
  if (typeof value === "number") return value < 5;
  return false;
});
console.log(arrayFiltradoOriginal);

// const arrayFiltrado = array.filter((value) => {
//   if (typeof value === 'number') return value < 5;
//   return false;
// });
// console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => {
  if (typeof value === "number") return value < 5;
  return false;
});
console.log(arrayFiltrado);
