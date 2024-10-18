import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
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
