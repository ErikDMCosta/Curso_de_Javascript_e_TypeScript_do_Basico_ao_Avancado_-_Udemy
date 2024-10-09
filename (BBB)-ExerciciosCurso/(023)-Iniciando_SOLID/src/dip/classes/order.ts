// import { ShoppingCart } from './shopping-cart';
// import { Messaging } from '../services/messaging';
// import { Persistency } from '../services/persistency';
import { OrderStatus } from '../interfaces/order-status';
import { CustumerOrder } from '../interfaces/custumer-protocol';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { MessagingProtocol } from '../interfaces/messaging-protocol';
import { PersistencyProtocol } from '../interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    // private readonly cart: ShoppingCart,
    private readonly cart: ShoppingCartProtocol,
    // private readonly messaging: Messaging,
    private readonly messaging: MessagingProtocol,
    // private readonly persistency: Persistency,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustumerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente é:`,
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
