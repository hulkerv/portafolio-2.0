// Menu expanded

const expandButton = document.querySelector(".navbar-hamburguer");
const menu = document.querySelector(".navigation");
const mainContent = document.querySelector(".main");
const workSection = document.querySelectorAll(".slider");
const container = document.querySelectorAll(".container");

expandButton.addEventListener("click", () => {
  menu.classList.toggle("collapsed");
  mainContent.classList.toggle("main-expand");
});
