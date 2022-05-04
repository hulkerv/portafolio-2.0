// Menu expanded

const expandButton = document.querySelector(".navbar-hamburguer");
const menu = document.querySelector(".navigation");
const mainContent = document.querySelector(".main")

expandButton.addEventListener("click", () => {
  menu.classList.toggle('collapsed')
  mainContent.classList.toggle('main-expand')
});
