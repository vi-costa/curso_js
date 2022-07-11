



function soma (x,y) { 
    if (typeof x !== 'number'||
       typeof x !== 'number' ) { 
        throw new
         ReferenceError(
             'x e y precisam ser number'
             )
       } 
       return x + y;
    } 
try { 
    console.log(soma('1',2));
} catch(err) { 
    console.log(err);
}