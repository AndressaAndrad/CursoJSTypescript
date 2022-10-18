export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    console.log('SETTER');
    this._cpf = cpf;
  }
  get cpf(): string {
    console.log('GETTER');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Otavio', 30, '123.456.789-00');
pessoa.cpf = '123.456.789-99';

console.log(pessoa.cpf);
