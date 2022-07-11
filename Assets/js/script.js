async function Options() {
  let dados = {};
  let request = await fetch("Assets/js/colors.json")
    .then((response) => {
      return response.json();
    })
    .then((r) => {
      dados = r;
    })
    .catch((e) => {
      alert(e);
    });

  let elmRadio = document.getElementsByName("color-option");
  elmRadio.forEach((elm) => {
    /* Checando se o Radio está marcado */
    if (elm.checked) {
      /*Verificando qual o elemento está marcado  */
      if (elm.getAttribute("data-color") == "random") {
        /* Formando o número random */
        let randomNumber = Math.floor(
          Math.random() * Object.keys(dados).length
        );
        /* Pegando as informações da cor sorteada */
        let colorObject = dados[randomNumber];

        /* Formando a string da cor sorteada */
        let color = "";

        /* Regra de string para cor HEX */
        if (colorObject.Type == "HEX") {
          color = `#${colorObject.Color}`;
        }

        /* Regra de string para RGB */
        if (colorObject.Type == "RGB") {
          color = `rgb(${colorObject.Color})`;
        }

        /* Acrescentando a cor no background */
        document.querySelector("main").style.backgroundColor = color;

        /* Acrescentando a cor na tela */
        document.querySelector(".color-area .text span").innerHTML =
          color.toUpperCase();

        /* ADICIONAR COLOR NO TEXTO */
        document.querySelector(".text span").style.color = `${color}`;
      } else {
        let hex = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
        ];
        let colorString = "";

        for (let i = 0; i < 6; i++) {
          let randomNumber = Math.floor(Math.random() * hex.length);
          colorString += hex[randomNumber];
        }

        /* Acrescentando a cor no background */
        document.querySelector(
          "main"
        ).style.backgroundColor = `#${colorString}`;

        /* Acrescentando a cor na tela */
        document.querySelector(
          ".color-area .text span"
        ).innerHTML = `#${colorString}`;

        /* ADICIONAR COLOR NO TEXTO */
        document.querySelector(".text span").style.color = `#${colorString}`;
      }
    }
  });
}

document.querySelector(".button").addEventListener("click", () => {
  Options();
});
document.querySelector(".button").addEventListener("touchstart", () => {
  Options();
});
