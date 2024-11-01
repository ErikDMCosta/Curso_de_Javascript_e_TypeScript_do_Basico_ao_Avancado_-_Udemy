import { IndividualCustumer, EnterpriseCustumer } from './custumer';

const createIndividualCustumer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustumer => {
  return new IndividualCustumer(firstName, lastName, cpf);
};

const createEnterpriseCustumer = (
  name: string,
  cnpj: string,
): EnterpriseCustumer => {
  return new EnterpriseCustumer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustumer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustumer('Erik', 'Costa', '000.000.000-00');
    expect(sut).toHaveProperty('firstName', 'Erik');
    expect(sut).toHaveProperty('lastName', 'Costa');
    expect(sut).toHaveProperty('cpf', '000.000.000-00');
  });

  it('should have methods to get name and idn for individual custumer', () => {
    const sut = createIndividualCustumer('Erik', 'Costa', '000.000.000-00');
    expect(sut.getName()).toBe('Erik Costa');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});

describe('EnterpriseCustumer', () => {
  it('should have name and cnpj for enterprise custumers', () => {
    const sut = createEnterpriseCustumer(
      'Empresa Gigante',
      '11.111.111/1111-11',
    );
    // expect(sut).toHaveProperty('name', 'Erik');
    expect(sut).toHaveProperty('name', 'Empresa Gigante');
    expect(sut).toHaveProperty('cnpj', '11.111.111/1111-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustumer(
      'Empresa Gigante',
      '11.111.111/1111-11',
    );
    expect(sut.getName()).toBe('Empresa Gigante');
    expect(sut.getIDN()).toBe('11.111.111/1111-11');
  });
});
