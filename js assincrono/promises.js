function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, timeout) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);
    setTimeout(() => {
      resolve(msg);
    }, timeout);
  });
}

//cadeia de frases

esperaAi("Conectando com o BD....", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados...", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Tratando os Dados...", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Exibindo na tela", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })

  .catch(e => {
    console.log("ERRO:", e);
  });
console.log("Isso aqui vai ser exibido antes de qualquer promise.");
