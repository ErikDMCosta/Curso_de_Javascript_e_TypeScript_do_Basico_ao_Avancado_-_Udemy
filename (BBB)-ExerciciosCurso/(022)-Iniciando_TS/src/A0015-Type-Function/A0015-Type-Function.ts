type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: CallableFunction): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    // newArray.push(callbackfn(array[i]));
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function (item: any) {
  return item.toUpperCase();
});
console.log(abc);
console.log(abcMapped);
