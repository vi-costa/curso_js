const data = new Date();

let diaSemana = data.getDay();
let diaSemanaTexto;
const diaMes = data.getDate();
let mes = data.getMonth();
const ano = data.getFullYear();
const horario = data.getHours();
const minutos = data.getMinutes();

function dia(diaSemana) {
  switch (diaSemana) {
    case 0:
      return (diaSemanaTexto = "Domingo");
    case 1:
      return (diaSemanaTexto = "Segunda");

    case 2:
      return (diaSemanaTexto = "Terça");

    case 3:
      return (diaSemanaTexto = "Quarta");

    case 4:
      return (diaSemanaTexto = "Quinta");

    case 5:
      return (diaSemanaTexto = "Sexta");

    case 6:
      return (diaSemanaTexto = "Sábado");

    default:
      return (diaSemanaTexto = "Não foi escolhido um dia!");
  }
}

function mesDoAno(mes) {
  switch (mes) {
    case 0:
      return (mesDoAno = "Janeiro");

    case 1:
      return (mesDoAno = "Fevereiro");

    case 2:
      return (mesDoAno = "Março");

    case 3:
      return (mesDoAno = "Abril");

    case 4:
      return (mesDoAno = "Maio");

    case 5:
      return (mesDoAno = "Junho");

    case 6:
      return (mesDoAno = "Julho");

    case 7:
      return (mesDoAno = "Agosto");

    case 8:
      return (mesDoAno = "Setembro");

    case 9:
      return (mesDoAno = "Outubro");

    case 10:
      return (mesDoAno = "Novembro");

    case 11:
      return (mesDoAno = "Dezembro");

    default:
      return (mesDoAno = "Não foi escolhido um mês!");
  }
}

const msg = `${dia(diaSemana)}, ${diaMes} de ${mesDoAno(
  mes
)} de ${ano} ${horario}:${minutos}`;
setResultado(msg);

function criaP() {
  const p =document.createElement("p");
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);
}
