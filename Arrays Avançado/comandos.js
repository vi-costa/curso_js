const nomes = ["A", "B", "C"];
nomes.push("D"); //adiciona elemento novo ao array
nomes.shift(); // exclui o primeiro elemento do vetor

nomes.unshift("AA"); //adiciona um novo primeiro elemento
nomes.pop(); // exclui o ultimo elemento do vetor
console.log(nomes);

const numeros = ["1", "2", "3"];
console.log(numeros.join(' '));
//join transforma um array em string

const novo = numeros.slice(1, 2); //recorta uma parte
//(1,2) retorna do inicio do vetor 1
// ao final dele
const numerosString = '1, 2, 3, 4';
 
//split transforma uma string em um array
//a virgula é o agente divisor do array

console.log(numerosString.split(','));
// 1,2,3 (perde o 2 e o 3, ganha o 4)

const removidos = numeros.splice(1,1, "4");
console.log(numeros,removidos);
