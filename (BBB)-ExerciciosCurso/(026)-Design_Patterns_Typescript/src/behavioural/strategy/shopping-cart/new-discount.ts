import { ECommerceShoppingCart } from './e-commerce-shopping-cart';
import { DiscountStrategy } from './discount-strategy';

export class NewDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discount = 5;
    }
    return total - total * (this.discount / 100);
  }
}
