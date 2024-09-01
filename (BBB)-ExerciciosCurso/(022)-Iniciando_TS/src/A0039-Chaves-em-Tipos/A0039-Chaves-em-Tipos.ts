type Veiculo = {
  marca: string;
  // ano: string;
  ano: number;
};

type car = {
  // brand: string;
  brand: Veiculo['marca'];
  // year: string;
  year: Veiculo['ano'];
  name: string;
};

const carro: car = {
  brand: 'Ford',
  // year: '2020',
  year: 2020,
  name: 'Palio',
};

console.log(carro);
