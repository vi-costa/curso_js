const data = new Date();

let diaSemana = data.getDay();

let diaSemanaTexto;
switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda";
    break;
  case 2:
    diaSemanaTexto = "Terça";
    break;
  case 3:
    diaSemanaTexto = "Quarta";
    break;
  case 4:
    diaSemanaTexto = "Quinta";
    break;
  case 5:
    diaSemanaTexto = "Sexta";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "Não foi escolhido um dia!";
}

console.log(`${diaSemanaTexto + 1}° dia da semana > ${diaSemanaTexto}`);

const msg = `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${horario}`;

function criaP() {
    const p = document.createElement("p");
    return p;
  }
  
  function setResultado(msg) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
  }