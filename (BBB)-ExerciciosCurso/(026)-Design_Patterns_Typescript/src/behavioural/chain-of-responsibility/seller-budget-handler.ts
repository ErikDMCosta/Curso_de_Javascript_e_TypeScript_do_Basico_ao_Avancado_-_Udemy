import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class SellerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('O vendedor tratou a solicitação');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
