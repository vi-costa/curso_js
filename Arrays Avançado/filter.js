

{function callback(value) { 
    return value >= 10;
}

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const maiorde10 = numeros.filter(callback);

console.log('Array inteiro:' , numeros);
console.log('Array filtrado:' , maiorde10);
}


const nomes = [ 
    { 
        nome: 'Luiz', idade: 62
    },
    {
        nome: 'Mary', idade: 30
    },
    {
        nome: 'Eduardo', idade: 19
    },
    {
        nome: 'Wallace', idade: 23
    }
];


const pessoasComNomeGrande = nomes.filter(obj => { 
    return obj.nome.length >= 5;
});

const pessoasIdosas= nomes.filter(obj => { 
    return obj.idade >= 60;
});

const pessoaTerminaComO= nomes.filter(obj => { 
    return obj.nome.toLowerCase().endsWith('o');
}); //endsWith() > nova função



console.log('\n', pessoasComNomeGrande);
console.log('\n', pessoasIdosas);
console.log('\n', pessoaTerminaComO);