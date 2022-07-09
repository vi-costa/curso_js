function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, timeout) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("CAI NO ERRO");

    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }

      resolve(msg + " venceu por ");
      return;
    }, timeout);
  });
}

esperaAi("Fase 1 ", rand())
  .then((valor) => {
    console.log(valor);
    return esperaAi("Fase 2", rand());
  })
  .then((fase) => {
    console.log(fase);
    return esperaAi("Fase 3"), rand();
  })
  .then((fase) => {
    console.log(fase);
  })
  .catch((e) => {
    console.log(e);
  });
