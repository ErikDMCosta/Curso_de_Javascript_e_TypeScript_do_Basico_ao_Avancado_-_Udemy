import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

// shoppingCart.addItem({ name: 'Camisa', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });

shoppingCart.addItem(new Product('Camisa', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 49.91));
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
// console.log(order.shoppingCart.orderStatus);
console.log(order.orderStatus);
// shoppingCart.checkout();
order.checkout();
console.log(order.orderStatus);
