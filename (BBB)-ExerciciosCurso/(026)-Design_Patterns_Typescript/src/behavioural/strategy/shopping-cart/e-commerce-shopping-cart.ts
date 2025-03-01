import { ECommerceProductProtocol } from './e-commerce-product-protocol';
import { DiscountStrategy } from './discount-strategy';

export class ECommerceShoppingCart {
  protected products: ECommerceProductProtocol[] = [];
  // private discount = 0;
  protected _discountStrategy: DiscountStrategy = new DiscountStrategy();

  adddProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  // getTotalWithDiscount(): number {
  // const total = this.getTotal();

  // if (total >= 100) {
  //   this.discount = 10;
  // } else if (total >= 200) {
  //   this.discount = 20;
  // } else if (total >= 300) {
  //   this.discount = 30;
  // }

  // if (total >= 150) {
  //   this.discount = 5;
  // }

  // return this.getTotal() - this.getTotal() * (this.discount / 100);
  // }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
