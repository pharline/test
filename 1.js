const botao = document.querySelector(".botao");
const Main = document.querySelector(".Main");
const allDiv = document.querySelector(".allDivs");

function minimizar() {
  botao.addEventListener("click", (e) => {
    console.log("cliquei");

    if (
      Main.classList.contains("active") ||
      allDiv.classList.contains("active")
    ) {
      Main.classList.remove("active");
      allDiv.classList.remove("active");
    } else {
      Main.classList.add("active");
      allDiv.classList.add("active");
    }
  });
}

minimizar();
