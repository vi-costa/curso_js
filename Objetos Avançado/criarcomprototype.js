




function Produto(nome, preco) { 
    this.nome =nome;
    this.preco=preco;
}
Produto.prototype.desconto = function(percentual) { 
    this.preco = this.preco - (this.preco * (percentual/100))
}

const p1 = new Produto('Camiseta',100);
p1.desconto(10);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 100
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(20);
console.log(p2);