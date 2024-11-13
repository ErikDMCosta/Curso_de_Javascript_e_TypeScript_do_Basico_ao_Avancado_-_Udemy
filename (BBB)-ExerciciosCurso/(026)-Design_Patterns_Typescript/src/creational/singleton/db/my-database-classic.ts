import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  // private static _instance?: MyDatabaseClassic;
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

// const db1 = MyDatabaseClassic.getInstance();
// const db2 = MyDatabaseClassic.getInstance();

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// myDatabaseClassic.add({ name: 'Erik', age: 24 });
// myDatabaseClassic.add({ name: 'Maria', age: 50 });
// myDatabaseClassic.add({ name: 'Eduardo', age: 30 });
// // myDatabaseClassic.remove(1);
// myDatabaseClassic.show();
