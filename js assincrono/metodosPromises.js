function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, timeout) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject('CAI NO ERRO');
    setTimeout(() => {
      resolve(msg.toUpperCase() + '- Passei na promise');
    }, timeout);
  });
}

const promises = [
  "Primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  esperaAi(1000,1000),
  "Outro valor",
];
Promise.all(promises)
    .then(function(valor) { 
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });