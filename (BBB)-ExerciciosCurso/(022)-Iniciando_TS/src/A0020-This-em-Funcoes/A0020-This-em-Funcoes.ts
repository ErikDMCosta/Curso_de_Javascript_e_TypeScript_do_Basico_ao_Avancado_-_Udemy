// export function funcao(): void {
// export function funcao(this: Date, argumento1: string): void {
export function funcao(this: Date, nome: string, age: number): void {
  // this: Date;
  console.log(this);
  // console.log(argumento1, age);
  console.log(nome, age);
}

// funcao('Erik');
// funcao.call(new Date(), 'Erik');
funcao.call(new Date(), 'Erik', 24);
funcao.apply(new Date(), ['Erik', 24]);
