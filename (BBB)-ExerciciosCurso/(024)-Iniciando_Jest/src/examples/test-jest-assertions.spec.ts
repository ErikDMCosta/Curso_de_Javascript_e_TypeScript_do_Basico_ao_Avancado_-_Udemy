describe('Primative Values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    // expect(number).not.toBe(null);
    expect(number).not.toBeNull();

    // expect(number).toBeFalsy();
    expect(number).not.toBeFalsy();

    expect(number).toBeTruthy();
    // expect(number).not.toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);

    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10, 1);
    // expect(number).toBeCloseTo(10.1, 1);
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    // expect(number).toBeNull();
    expect(number).not.toBeNull();

    // expect(number).toHaveProperty('toString1');
    expect(number).toHaveProperty('toString');
  });

  it('should split test', () => {
    const number = 10;

    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Erik', age: 24 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty('age');
    // expect(person).toHaveProperty('age', 25);
    expect(person).toHaveProperty('age', 24);

    // expect(person).not.toHaveProperty('age');
    // expect(person).not.toHaveProperty('age', 25);
    // expect(person).not.toHaveProperty('age', 24);

    expect(person).not.toHaveProperty('lastname');
    expect(person.name).toBe('Erik');
  });
});
