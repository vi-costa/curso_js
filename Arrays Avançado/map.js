let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// dobrando os valores do array com map
numeros = numeros.map((valor) => {
  return valor * 2;
});
console.log(numeros);

const pessoas = [
  {
    nome: "Luiz",
    idade: 62,
  },
  {
    nome: "Eduardo",
    idade: 23,
  },
  {
    nome: "Neymar",
    idade: 55,
  },
  {
    nome: "Arthur",
    idade: 19,
  },
  {
    nome: "Andre",
    idade: 32,
  },
  {
    nome: "Santos",
    idade: 42,
  },
];

//para cada elemento
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave nome
//adicione uma chave id em cada objeto

const strings = pessoas.map((obj) => {
  return obj.nome;
});

console.log(strings);
