/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
// import { FiftyPercentDiscount, TenPercentDiscount } from './classes/discount';
// import { NoDiscount, TenPercentDiscount } from './classes/discount';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustumer, IndividualCustumer } from './classes/custumer';
// import { FiftyPercentDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
// const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
// const shoppingCart = new ShoppingCart(tenPercentDiscount);
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustumer(
  'Erik',
  'Costa',
  '111.111.111-11',
);

const enterpriseCustumer = new EnterpriseCustumer(
  'Empresa Gigante',
  '11.111.111/1111-11',
);

// const order = new Order(shoppingCart, messaging, persistency);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  // individualCustomer,
  enterpriseCustumer,
);

// shoppingCart.addItem({ name: 'Camisa', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });

shoppingCart.addItem(new Product('Camisa', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 49.91));
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
// console.log(order.shoppingCart.orderStatus);
console.log(order.orderStatus);
// shoppingCart.checkout();
order.checkout();
console.log(order.orderStatus);
