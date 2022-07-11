//factory, functions // construtorfunctions

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
  };
}
//const p1 = criaPessoa('Luiz', 'Otavio')
 //  console.log(p1.nomeCompleto); 
 // ou: 
console.log(criaPessoa('Luiz','Otavio').nomeCompleto);