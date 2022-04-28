// Menu expanded

const expandButton = document.querySelector(".navbar-hamburguer");
const menu = document.querySelector(".navigation");
const mainContent = document.querySelector(".main")

expandButton.addEventListener("click", () => {
  if (menu.classList.contains("collapsed")){
    menu.classList.remove("collapsed")
  mainContent.classList.add("main-expand")
  }else {
    menu.classList.add("collapsed");
    mainContent.classList.remove("main-expand")
  }
});
