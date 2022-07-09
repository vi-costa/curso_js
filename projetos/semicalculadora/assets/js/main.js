const valor = document.querySelector(".inputTexto");
const resultado = document.querySelector(".resultado");

const soma = document.querySelector(".soma");
const sub = document.querySelector(".sub");
const multi = document.querySelector(".multi");
const divi = document.querySelector(".divi");

valor.focus();

if (resultado.value == undefined) {
  resultado.value = 0;
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("soma")) {
    if (!valor.value) return;
    resultado.value = parseInt(resultado.value) + parseInt(valor.value);
    resultado.innerHTML = resultado.value;
    valor.focus();
  }
  if (e.target.classList.contains("sub")) {
    if (!valor.value) return;
    resultado.value = parseInt(resultado.value) - parseInt(valor.value);
    resultado.innerHTML = resultado.value;
    valor.focus();
  }
  if (e.target.classList.contains("multi")) {
    if (!valor.value) return;
    resultado.value = parseInt(resultado.value) * parseInt(valor.value);
    resultado.innerHTML = resultado.value;
    valor.focus();
  }
  if (e.target.classList.contains("divi")) {
    if (!valor.value) return;
    resultado.value = parseInt(resultado.value) / parseInt(valor.value);
    resultado.innerHTML = resultado.value;
    valor.focus();
  }
});
