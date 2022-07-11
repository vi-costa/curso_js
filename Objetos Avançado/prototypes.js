/**
 
 */

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
 }
//o prototype adiciona algo a uma função

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};
const pessoa1 = new Pessoa("Luiz", "O.");

console.log(pessoa1.nomeCompleto());
