import { Food } from './food';
import { Cigarette } from './cigarette';
import { AlcoholicDrink } from './alcoholic-drink';

import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { USTaxVisitor } from './us-tax-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(20);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((total, item) => total + item.getPrice(), 0);
const totalWithTaxesBrazil = cart.reduce(
  (total, item) => total + item.getPriceWithTaxes(brazilTaxVisitor),
  0,
);
const totalWithTaxesUS = cart.reduce(
  (total, item) => total + item.getPriceWithTaxes(usTaxVisitor),
  0,
);
console.log(`Total: ${total}`);
console.log(`Total no Brasil: ${totalWithTaxesBrazil}`);
console.log(`Total nos EUA: ${totalWithTaxesUS}`);
