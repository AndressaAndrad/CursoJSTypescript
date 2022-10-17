import { runInThisContext } from 'vm';

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Miranda');
const colaborador2 = new Colaborador('Andressa', 'Andrade');
const colaborador3 = new Colaborador('Maria', 'João');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
console.log(empresa1);
console.log('-----------------------------------------------------------');
empresa1.mostrarColaborador();
