document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("darkTema");

  if (botao) {
    botao.addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });
  }
});