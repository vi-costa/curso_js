/*
    Luiz Otávio Miranda tem 30 anos
    pesa, 84kg
    tem 1,8 de altura e seu imc é de 25,92...
    Luiz Otávio nasceu em 1980

*/

const anoAtual = new Date().getFullYear();

const nome = "Mario Kart";
const idade = 30;
const peso = 84;
const altura = 1.8;

const imc = peso / (altura * altura);
const anoNascimento = anoAtual - 30;

console.log(
  nome , "tem" , idade , "anos, pesa" , 
  peso , "kg,",  
  "seu ano de nascimento é" , anoNascimento ,
  "\ne seu IMC é" , imc.toFixed(1)
  //toFixed serve para definir a quantidade de
  //numeros depois da virgula
);

//a primeira forma desconsidera a identação na hora
// do console log aparecer no output (o que é melhor)

console.log(
    `${nome}  tem  ${idade} anos pesa ${peso}
     kg, seu ano de nascimento é ${anoNascimento} 
     e seu IMC é  ${imc.toFixed(1)}`)


    //toFixed serve para definir a quantidade de
    //numeros depois da virgula

  