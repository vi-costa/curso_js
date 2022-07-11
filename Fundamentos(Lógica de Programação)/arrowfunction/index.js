const aoQuadrado = function (n) { 
    return n ** 2;
}
let x = parseInt(Math.random() * (10 - 1) + 1);
console.log(`${x} ao quadrado é igual a`, aoQuadrado(x));



//a arrow function 
//substitui o "function (n)"" por "(n)=>"

const raizArrow = (n) => { 
    return n ** 2;
}
let y = parseInt(Math.random() * (10 - 1) + 1);
console.log(`${y} ao quadrado é igual a`, aoQuadrado(y));


