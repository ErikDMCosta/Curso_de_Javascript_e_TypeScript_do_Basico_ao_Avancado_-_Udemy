import { Product } from './product';

const createSut = (nome: string, price: number): Product => {
  return new Product(nome, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    // System under test
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    // expect(sut).toHaveProperty('name', 'Camiseta1');
    // expect(sut).toHaveProperty('price', 49.9);
    // expect(sut).toHaveProperty('price', 49.91);
    expect(sut.price).toBeCloseTo(49.9);
  });
});
