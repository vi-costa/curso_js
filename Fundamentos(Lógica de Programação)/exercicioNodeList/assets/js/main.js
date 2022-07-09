const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
//isso junta todos os p


//isso de baixo pega a cor rgb do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) { 

        p.style.backgroundColor = backgroundColorBody;
        p.style.color = 'white';
        p.style.padding = '1em';
}   //isso mostra todos os ps

