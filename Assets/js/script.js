/* Pegando as infomações de cores */
const request = fetch("/Assets/json/colors.json")
  .then((req) => {
    return req.json();
  })
  .then((req) => {
    document.querySelector(".button").addEventListener("click", Options(req));
  });

/* Adicionando evento ao botão */

//Functions

function Options(lista) {
  let elmRadio = document.getElementsByName("color-option");

  elmRadio.forEach((el) => {
    if (el.checked) {
      if (el.getAttribute("data-color") == "random") {
        randomColor();
      } else if (el.getAttribute("data-color") == "hex") {
        hexColor();
      } else {
        alert("Selecione uma opção para gerar cores!");
      }
    }
  });
}

function randomColor() {
  let randomNumber = Math.floor(Math.random() * lista.length);
  console.log("random");
}

function hexColor() {}
