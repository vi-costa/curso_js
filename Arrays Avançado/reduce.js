

const numeros = [5,40,50,3,20,10];

//reduz o array a um unico elemento
//utiliza um contador ou acumulador

const maiorNumero = numeros.reduce(function (maiorNum, numAtual) { 

    if (maiorNum>numAtual) return maiorNum;
    return numAtual;

});
console.log('O maior número é:]' , maiorNumero);