// Menu expanded

const expandButton = document.querySelector(".expand-button");
const menu = document.querySelector(".navigation");

expandButton.addEventListener("click", () => {
  
  menu.classList.contains("collapsed")
    ? menu.classList.remove("collapsed")
    : menu.classList.add("collapsed");
  
  if (expandButton.classList.contains("to-expand")) {
    expandButton.classList.remove("to-expand");
    expandButton.innerHTML = `
      <img
          src="./public/img/collapse.png"
          alt="expand button icon"
      />`;
  } else {
    expandButton.classList.add("to-expand");
    expandButton.innerHTML = `
      <img
          src="./public/img/expand.png"
          alt="expand button icon"
      />`;
  }
});
