const numero = Number(prompt("Digite seu número: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = 
`Raiz quadrada: ${(numero * numero).toFixed(2)} <br />
${numero} é inteiro: ${Number.isInteger(numero)}<br />
É NaN: ${isNaN(numero)}<br />
Só arredondando: ${Math.round(numero)}<br />
Arredondando para baixo: ${Math.floor(numero)}<br />
Arredondando para cima: ${Math.ceil(numero)}<br />
Com duas casas decimais: ${numero.toFixed(2)}<br />`;
