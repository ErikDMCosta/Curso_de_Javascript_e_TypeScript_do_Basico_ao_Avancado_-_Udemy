// const objetoA = {
// const objetoA: object = {
// const objetoA: {} = {
// const objetoA: Record<string, unknown> = {
// const objetoA = {

const objetoA: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  // [key: string]: any;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
// object {}
