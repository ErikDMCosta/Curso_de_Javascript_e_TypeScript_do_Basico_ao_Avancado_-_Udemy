// import { MyDatabaseClassic } from './db/my-database-classic';
// import './module_a';
// import { myDatabaseClassic as myDatabaseClassicFromModulA } from './module_a';
import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModulA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 24 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 30 });
// myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModulA);
