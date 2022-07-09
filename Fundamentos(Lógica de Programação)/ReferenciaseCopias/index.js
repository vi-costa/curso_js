
//em valores por referencia, se eu mudo a copia
//eu também mudo o original!

let a = [1,2,3];
let b =a;

console.log(a,b);

b.pop();
//mesmo mudando b, que seria a cópia 
//"a" também será mudado!
// ------------------------------------------//
console.log(a,b);

let c = 2;
let d = c;

console.log(c,d);

//mas com primitivos, isso não acontece!
//mudando d, eu não mudo c, já que d é
// uma cópia!

