import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder(); // Aprovado
order.rejectPayment(); // Daqui não altera
order.approvePayment(); // N
order.waitPayment(); // N
order.approvePayment(); // N
order.shipOrder(); // N
