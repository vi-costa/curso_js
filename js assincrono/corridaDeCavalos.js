function rand(min, max) {
  min *= 1000;
  max *=1000;
  return Math.floor(Math.random() * (max - min) + min);
}
console.log("E começa a corrida!");

//variaveis do vencedor e do segundo colocado
let vencedor = 0;
let segundo = 0;

function esperaAi(msg, timeout) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("CAI NO ERRO");

    setTimeout(() => {
      resolve(msg + " venceu por ");
    }, timeout);
  });
}

const random1 = rand(1, 10);
const random2 = rand(1, 10);
const random3 = rand(1, 10);

const promises = [
  esperaAi("Cavalo 1", random1),
  esperaAi("Cavalo 2", random2),
  esperaAi("Cavalo 3", random3),
];

//Promise.race puxa o valor mais rápido.
Promise.race(promises)

  .then(function (valor) {
    //o 1 vencendo

    if (random1 >= random2 && random1 >= random3) {
      vencedor = random1;
      if (random2 >= random3) {
        segundo = random2;
      } else {
        segundo = random3;
      }
    }
    //o 2 vencendo
    if (random2 >= random1 && random2 >= random3) {
      vencedor = random2;
      if (random1 >= random3) {
        segundo = random1;
      } else {
        segundo = random3;
      }
    }

    // o 3 vencendo
    if (random3 >= random1 && random3 >= random2) {
      vencedor = random3;
      if (random2 >= random1) {
        segundo = random2;
      } else {
        segundo = random1;
      }
    }
    //variacao é a diferença entre o tempo do vencedor e do segundo
    // é preciso dividir por 1000 para o tempo ficar em segundos
    // 1000 = 1 segundo
    const variacao = Math.round((vencedor - segundo) / 1000);
    console.log(valor + "" + variacao + " segundos de diferença!");
  })
  .catch(function (erro) {
    console.log(erro);
  });
