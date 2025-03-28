import { CustomerBudget } from './customer-budget';
import { SellerBudgetHandler } from './seller-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { DirectorBudgetHandler } from './director-budget-handler';
import { CEOBudgetHandler } from './ceo-budget-handler';

// const custumerBudget = new CustomerBudget(10);
// const custumerBudget = new CustomerBudget(1001);
// const custumerBudget = new CustomerBudget(5001);
const custumerBudget = new CustomerBudget(50001);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(custumerBudget);
console.log(custumerBudget);
