/**
Object.assign(des,any)
Object.getOwnPropertyDescriptor(o,'prop')
... (spread)

//Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
Object.getOwnProperyDescriptor(visualiza as
    propriedades de um objeto
    )
 */

let produto = { nome: "Caneca", preco: 1.8 };
let outraCoisa = produto;
outraCoisa.nome = "Prato";
outraCoisa.preco = 2.5;

console.log("", outraCoisa);
console.log("", produto);
// ao fazer isso, produto sempre apresentará
// as mesmas coisas que outraCoisa

//porém, com spread, a coisa muda:
// agora, produto continuará valendo o que valia antes
//e só outraCoisa mudará de valor
const produto2 = { nome: "Caneca", preco: 1.8 };
outraCoisa = { ...produto2 };
outraCoisa.nome = "Prato";
outraCoisa.preco = 2.5;
console.log("\n", outraCoisa);
console.log("", produto2);

//também é possível fazer com Object.assign():
const produto3 = { nome: "Tênis", preco: 8 };
const caneca = Object.assign({}, produto);
caneca.nome = "Outro nome";
caneca.preco = 2.5;

console.log("\n Object Assign:\n", caneca);
console.log("", produto3);

//também dá pra usar uma forma pior:

const produto4 = { nome: "Tênis", preco: 8 };
const caneca2 = { nome: produto.nome, preco: produto.preco };
console.log(Object.keys(produto4));
console.log(Object.getOwnPropertyDescriptor(produto4, "nome"));
