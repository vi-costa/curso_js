const elementos = [
  { tag: "p", texto: "Frase 1" }, // 0
  { tag: "div", texto: "Frase 2" }, // 1
  { tag: "footer", texto: "Frase 3" }, // 2
  { tag: "section", texto: "Frase 4" }, // 3
];

const container = document.querySelector(".container");
const div = document.createElement("div");
container.appendChild(div);

for (var i = 0; i < elementos.length; i++) {
 // const tags = document.createElement(elementos[i].tag);
  //const texto = document.createTextNode(elementos[i].texto);
  let {tag, texto} = elementos[i]; //desconstrução
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);
  //div.appendChild(tags);
  //frase.appendChild(texto);
}
