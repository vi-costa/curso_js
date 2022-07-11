const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");
function criaLi() {
  const li = document.createElement("li");
  return li;
}
function tarefasSalvas() { 
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas) { 
        criaTarefa(tarefa);
    }
}
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  //botaoApagar.classList.add('apagar);
  botaoApagar.setAttribute("class", "apagar");
  li.appendChild(botaoApagar);
}
function criaTarefa(texto) {
  const li = criaLi();
  li.innerText = texto;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefas();
}

inputTarefa.addEventListener("keypress", function (e) {
    
  if (e.keyCode === 13) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});
function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}
btnTarefa.addEventListener("click", function () {
    if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
  limpaInput();
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("apagar")) {
    e.target.parentElement.remove();
    salvarTarefas();
  }
});

tarefasSalvas();