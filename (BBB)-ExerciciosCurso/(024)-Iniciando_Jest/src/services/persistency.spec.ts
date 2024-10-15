// it('descrição de teste (IT)', () => {
//   const numer = 1;
//   // expect(numer).toBe(1);
//   expect(numer).not.toBe(1);
// });

describe('TESTANDO ALGUMA COISA', () => {
  // it('descrição de teste (IT)', () => {
  it('should return one', () => {
    const numer = 1;
    // expect(numer).not.toBe(1);
    expect(numer).toBe(1);
  });
});

// test('descrição de teste (TESTE)', () => {
//   const nome = 'Erik';
//   // expect(nome).toBe('Erik');
//   expect(nome).not.toBe('Erik');
// });

describe('TESTANDO OUTRA ALGUMA COISA', () => {
  // test('descrição de teste (TESTE)', () => {
  test('should return Erik', () => {
    const nome = 'Erik';
    // expect(nome).not.toBe('Erik');
    expect(nome).toBe('Erik');
  });
});
