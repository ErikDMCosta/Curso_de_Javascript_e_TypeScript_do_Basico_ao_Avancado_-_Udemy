// -| Type Predicate (Predicado de tipos) |-
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma(...args: unknown[]): number {
  const returno = args.reduce<number>((sum, value) => {
    if (isNumber(value)) {
      return sum + value;
    }
    return sum; // Se 'value' não for um número, mantemos o valor atual de 'sum'
  }, 0); // Inicializa 'sum' com 0, que é um número
  return returno; // Garante que o retorno será sempre um número
}

console.log(soma(1, 2, 3)); // Saída: 6
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1])); // Saída: 7
console.log(soma('a', 'b', 'c')); // Saída: 0

// -| Utility Types - Generics padrão no TypeScript |-
// Record
const objeto1: Record<string, string | number> = {
  nome: 'Erik',
  sobrenome: 'Costa',
  idade: 24,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaProtocol>;
// Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;
// Pick
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

const objeto2: PessoaProtocol = {
  nome: 'Erik',
  sobrenome: 'Costa',
  idade: 24,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// type TipoExclude = ABC;
type TipoExclude = Exclude<ABC, CDE>;
// type TipoExtract = ABC;
type TipoExtract = Extract<ABC, CDE>;

// -|
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Erik',
  idade: 24,
  sobrenome: 'Costa',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module Mode
export default 1;
