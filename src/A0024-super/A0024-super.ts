export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `Isso vem da Pessoa: ${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const resul = super.getNomeCompleto();
    return resul + ' OIEEEEEEE';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Luiz', 'Otavio', 30, '000.000.000-00', 'Sala 0001');
const pessoa = new Pessoa('Luiz', 'Otavio', 30, '000.000.000-00');
const cliente = new Cliente('Luiz', 'Otavio', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
