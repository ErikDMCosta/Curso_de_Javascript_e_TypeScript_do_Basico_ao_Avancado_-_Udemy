// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}

  remove(product: ProductComponent): void {}

  // getChild(): ProductComponent {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public nome: string, public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  // add(product: ProductComponent): void {
  add(...products: ProductComponent[]): void {
    // this.children.push(product);
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const pen = new ProductLeaf('Pen', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tShirt = new ProductLeaf('TShirt', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);
// console.log(productBox);
// console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 1_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
console.log(anotherProductBox);
// console.log(anotherProductBox.getPrice());

console.log(productBox);
console.log(productBox.getPrice());
