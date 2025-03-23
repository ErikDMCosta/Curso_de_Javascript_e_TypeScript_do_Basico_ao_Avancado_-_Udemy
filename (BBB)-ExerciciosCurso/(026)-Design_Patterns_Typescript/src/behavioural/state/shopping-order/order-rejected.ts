import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('The order is already in the approved state.');
  }

  rejectPayment(): void {
    console.log('The order is already in the rejected state.');
  }

  waitPayment(): void {
    console.log('Waiting for payment.');
  }

  shipOrder(): void {}
}
