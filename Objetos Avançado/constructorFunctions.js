function Pessoa(nome,sobrenome) { 
    this.nome = nome;
    this.sobrenome =sobrenome;
}
//
const p1 = new Pessoa ('Luiz' ,'Miranda');
p1.fala = function () { 
    console.log(`${p1.nome} ${p1.sobrenome}`)
}
p1.fala();