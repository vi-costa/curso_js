const h1 = document.querySelector(".container h1");
const data = new Date();
const horas = data.getTime();
const horario = data.getHours();
const minutos = data.getMinutes();

h1.innerHTML = data.toLocaleDateString("pt-BR", { dateStyle: "full" });

h1.innerHTML += ` ${horario}:${minutos}`;
