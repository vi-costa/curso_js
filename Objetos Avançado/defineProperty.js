

//define property

function Produto (nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', { 
        enumerable: true,
        //mostra a chave
        
        value: estoque, //valor
        
        writable: false, //alterável
        configurable: false, 
        // apagável, reconfiguravel 
    });

    Object.defineProperties(this, {
        nome: { 
            enumerable: true,
            //mostra a chave
            
            value: estoque, //valor
            
            writable: false, //alterável
            configurable: false, 
            // apagável, reconfiguravel 
        },
        preco: { 
            enumerable: true,
            //mostra a chave
            
            value: estoque, //valor
            
            writable: false, //alterável
            configurable: false, 
            // apagável, reconfiguravel 
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

