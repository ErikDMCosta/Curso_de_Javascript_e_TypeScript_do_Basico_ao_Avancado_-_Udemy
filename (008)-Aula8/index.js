/*
Érik de Moraes Costa tem 23 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Érik Érik nasceu em 1980
*/
const nome = 'Érik';
const sobrenome = ' de Moraes Costa';
const idade = 23;
const peso = 84;
const alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;


// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
