const pessoas = [
    {id: 1, nome: 'A'},
    {id: 2, nome: 'b'},
    {id: 3, nome: 'Liz'},
    {id: 4, nome: 'Luiz'},  
];

const novasPessoas = new Map();
for (const pessoa of pessoas) { 
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
}

console.log(novasPessoas);