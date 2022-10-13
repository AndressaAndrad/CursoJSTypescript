//Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(3, 2, 4);
const concatenacao = concatenaString('b', 'o', 'r', 'a');
const upper = toUpperCase('b', 'o', 'r', 'a');

console.log(result);
console.log(concatenacao);
console.log(upper);
