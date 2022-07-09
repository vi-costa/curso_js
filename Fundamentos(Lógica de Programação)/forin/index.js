const frutas = ['Pera', 'Maçã', 'Uva'];


for (let i in frutas) { 
    console.log(frutas[i]);
} //for in lê os indices ou chaves de um vetor/objeto

const pessoa = { 
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
    console.log("")
for (let chaves in pessoa) { 
    console.log(chaves, pessoa[chaves])
    //retorna o nome do indice, retorna oq tem no indice
}