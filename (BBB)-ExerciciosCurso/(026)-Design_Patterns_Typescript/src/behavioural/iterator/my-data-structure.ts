import { MyIteratorProtocol } from './my-iterator-protocol';
import { MyDefaultIterator } from './my-default-iterator';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this._items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    // this.iterator.reset();
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
