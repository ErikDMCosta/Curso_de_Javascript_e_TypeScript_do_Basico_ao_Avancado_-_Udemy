import { CartItem } from './cart-items';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): unknown;
  isEmpty(): boolean;
  clear(): void;
}
