// Produto -< aumento,desconto
//Camiseta = cor, caneca = material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (valor) {
  this.preco += valor;
};
Produto.prototype.desconto = function (valor) {
  this.preco -= valor;
};

/**
 A herança faz o filho (camiseta) herdar
 nome e preco do pai (Produto), mas camiseta
  também pode ter as próprias chaves
*/
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  //this vazio ^
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
//criando um objeto e setando como Produto

function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Gen", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Caneca Estilosa", 35, "Porcelana", 5);

camiseta.aumento(10);
console.log(camiseta);
console.log(produto);

caneca.aumento(30);
console.log(caneca);
