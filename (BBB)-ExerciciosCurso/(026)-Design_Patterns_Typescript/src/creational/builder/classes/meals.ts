// import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';
import { AbstractMeal } from './abstract-meal';

// export class Rice implements MealCompositeProtocol {
// export class Rice extends AbstractMeal {
// export class Meals extends AbstractMeal {
// constructor(private name: string, private price: number) {}
// getPrice(): number {
//   return this.price;
// }
// }

// const rice = new Rice('Arroz', 50);
// console.log(rice);
// const meals = new Meals('Arroz', 50);
// console.log(meals);

export class Rice extends AbstractMeal {}
export class Beans extends AbstractMeal {}
export class Meat extends AbstractMeal {}
export class Beverage extends AbstractMeal {}
export class Dessert extends AbstractMeal {}
