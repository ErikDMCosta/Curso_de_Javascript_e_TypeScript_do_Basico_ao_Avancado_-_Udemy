// import { AbstractMeal } from './abstract-meal';
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

// export class MealBox extends AbstractMeal {}
export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];
  getPrice(): number {
    // return 1;
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  // add(meal: MealCompositeProtocol): void {
  add(...meal: MealCompositeProtocol[]): void {
    // this._children.push(meal);
    meal.forEach((item) => this._children.push(item));
  }
}
