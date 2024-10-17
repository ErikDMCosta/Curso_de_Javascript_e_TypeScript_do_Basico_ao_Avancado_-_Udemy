import { Persistency } from './persistency';

describe('Persistency', () => {
  it('should return undefined', () => {
    // System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});

// it('descrição de teste (IT)', () => {
// //   const numer = 1;
// //   // expect(numer).toBe(1);
// //   expect(numer).not.toBe(1);
// // });

// describe('TESTANDO ALGUMA COISA', () => {
//   // it('descrição de teste (IT)', () => {
//   it('should return one', () => {
//     const number = 1;
//     // expect(numer).not.toBe(1);
//     expect(number).toBe(1);
//   });
// });

// // test('descrição de teste (TESTE)', () => {
// //   const nome = 'Erik';
// //   // expect(nome).toBe('Erik');
// //   expect(nome).not.toBe('Erik');
// // });

// describe('TESTANDO OUTRA ALGUMA COISA', () => {
//   // test('descrição de teste (TESTE)', () => {
//   test('should return Erik', () => {
//     const nome = 'Erik';
//     // expect(nome).not.toBe('Erik');
//     expect(nome).toBe('Erik');
//   });
// });
