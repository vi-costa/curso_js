// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
//Getter com Setter
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" "); //divide o valor em espaços
      this.nome = valor.shift(); //retorna o primeiro elemento
      this.sobrenome = valor.join(" "); //junta o sobrenome 
                                        // ao nome
    },
    //metodo normal
    fala(assunto = "falando sobre NADA") {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Só Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
const p2 = criaPessoa("João", "Otávio", 1.9, 57);
const p3 = criaPessoa("Junior", "Otávio", 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
