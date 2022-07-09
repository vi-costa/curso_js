const pessoa1 = new Object();

pessoa1.nome = "Liz";
pessoa1.sobrenome = "Otavio";
pessoa1.idade = 30;

pessoa1.falarNome = function () {
  //this usado ao invés de pessoa1
  return `${this.nome} está falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

console.log();
for (let chave in pessoa1) {
  console.log(chave, " >> ", pessoa1[chave]);
}
