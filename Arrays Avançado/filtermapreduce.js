//retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = 
numeros.filter(valor =>{
  if (valor % 2 == 0) {
    return valor;
  }
});

const numerosDobrados = 
numerosPares.map(valor => {
  valor = valor * 2;
  return valor;
});

const numerosSomados =
 numerosDobrados.reduce((soma, valor) => {
    soma += valor;
    return soma;
});
console.log(numerosPares);
console.log(numerosDobrados);
console.log(numerosSomados);
