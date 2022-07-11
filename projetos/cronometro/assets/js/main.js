function relogio() {
  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;

  let contador = false;

  function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  let myInterval = 0;
  function iniciarRelogio() {
    if (contador == false) {
      myInterval = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
      }, 1000);
      contador = true;
    }
  }

  function pausarRelogio() {
    contador = false;
    clearInterval(myInterval);
  }

  function zerarRelogio() {
    contador = false;
    clearInterval(myInterval);
    relogio.innerHTML = criaSegundos(0);
    segundos = 0;
  }

  iniciar.addEventListener("click", function () {
    iniciarRelogio();
  });

  pausar.addEventListener("click", function () {
    pausarRelogio();
  });
  zerar.addEventListener("click", function () {
    zerarRelogio();
  });
}
relogio();