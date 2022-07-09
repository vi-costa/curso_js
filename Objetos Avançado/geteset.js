function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    //mostra a chave
    configurable: true,
    // apagável, reconfiguravel
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Bad value");
        return;
      }
      estoquePrivado = valor;
    },
  });
}

//get só obtem o valor
//set seta(atribui a algo) o valor
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa.", "");
      nome = valor;
    },
  };
}

const p2= criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.'
console.log(p2.nome);
