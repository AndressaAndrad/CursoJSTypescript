export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidaDeProdutos(): string {
    const resul = `Quantidade de produtos: ${this.produtos.length}`;
    return resul;
  }

  valorTotal(): string {
    const resul = `Valor total: ${this.produtos.reduce(
      (soma, produto) => soma + produto.preco,
      0,
    )}`;
    return resul;
  }
}

export class Produto {
  constructor(private nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 24.9);
const produto3 = new Produto('Caneta', 4.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);

console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidaDeProdutos());
console.log(carrinhoDeCompras.valorTotal());
