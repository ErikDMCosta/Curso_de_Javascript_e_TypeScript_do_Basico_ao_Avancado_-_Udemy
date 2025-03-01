// export interface IMain {
//   title: string;
// }

import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.adddProduct(
  { name: 'Produto 1', price: 50 },
  { name: 'Produto 2', price: 50 },
  { name: 'Produto 3', price: 50 },
);
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
