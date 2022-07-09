//colchetes "[" é array, chaves "{" é objeto!
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },
  incrementaIdade() {
    this.idade++;
  },
};

pessoa.fala();

for (let i = 0; i < 10; i++) {
  pessoa.incrementaIdade();
} //mais 10 anos de idade pro nosso amigo

pessoa.fala();
