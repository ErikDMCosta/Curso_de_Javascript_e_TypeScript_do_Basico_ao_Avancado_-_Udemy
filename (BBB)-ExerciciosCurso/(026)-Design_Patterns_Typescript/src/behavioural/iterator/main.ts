import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
// console.log(dataStructure);

const [a, b] = dataStructure;
console.log('STOLENS: ', a, b);
console.log('Executed various things and later use the Iterator');
const [c, d, ...rest] = dataStructure;
console.log(c, d, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
// console.log('No have more values');
console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('Here needed reset the Iterator');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
