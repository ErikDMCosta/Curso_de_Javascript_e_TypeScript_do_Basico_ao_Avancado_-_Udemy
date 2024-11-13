// import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseFunction } from './db/my-database-function';

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Erik', age: 24 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 30 });
// myDatabaseClassic.remove(1);
// myDatabaseClassic.show();

export { myDatabaseClassic };
