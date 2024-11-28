// import { Rice, Beans, Meat } from './classes/meals';
// import { MealBox } from './classes/meal-box';

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 10);
// const meat = new Meat('Carne', 10);
// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat);
// console.log(mealBox);
// console.log(mealBox.getPrice());

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
// mainDishBuilder.makeMeal().makeDessert();
mainDishBuilder.makeMeal();
// console.log(mainDishBuilder.getMeal().getPrice());
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
