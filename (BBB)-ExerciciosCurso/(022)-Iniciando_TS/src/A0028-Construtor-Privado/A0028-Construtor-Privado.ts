// Singleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  // constructor(
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    // if (Database.database) return Database.database;
    if (Database.database) {
      console.log('Retornando instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

// const db1 = new Database('localhost', 'root', '123456');
const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

// const db2 = new Database('localhost', 'root', '123456');
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();

console.log(db1 === db2);
