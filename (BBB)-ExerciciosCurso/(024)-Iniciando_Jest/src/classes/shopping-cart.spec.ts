import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from '../interfaces/cart-items';

const createSut = () => {
  // class DiscountMock extends Discount {}
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const CartItem1 = createCartItem('Camisa', 40);
  const CartItem2 = createCartItem('Caneta', 1);
  sut.addItem(CartItem1);
  sut.addItem(CartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    // class DiscountMock extends Discount {}
    // const sut = new ShoppingCart(new DiscountMock());
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    // const { sut } = createSut();
    // expect(sut.items.length).toBe(0);
    // const CartItem1 = createCartItem('Camisa', 40);
    // const CartItem2 = createCartItem('Caneta', 1);
    // sut.addItem(CartItem1);
    // sut.addItem(CartItem2);
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should teste total and totalWithDiscount', () => {
    // const { sut } = createSut();
    // const CartItem1 = createCartItem('Camisa', 40);
    // const CartItem2 = createCartItem('Caneta', 1);
    // sut.addItem(CartItem1);
    // sut.addItem(CartItem2);
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDiscount()).toBe(41);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });
});
