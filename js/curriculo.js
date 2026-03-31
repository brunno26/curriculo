document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("toggle");

  if (botao) {
    botao.addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });
  }
});