
//class
class Pessoa { 
    constructor(nome, sobrenome){
        this.nome =nome;
        this.sobrenome = sobrenome;
    }

    comer() { 
        console.log(`${this.nome} está comendo.`);
    }
}
const p1 = new Pessoa ('Luiz','Miranda');
console.log(p1);
p1.comer();

// function construtora com prototype
function Pessoa2 (nome, sobrenome){
        this.nome =nome;
        this.sobrenome = sobrenome;
    }
    Pessoa2.prototype.comer = function() { 
        console.log(`${this.nome} está comendo.`);
 
    };
const p2 = new Pessoa2 ('Andre','Miranda');
p2.comer();