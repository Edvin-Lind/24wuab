document.querySelector(".fade-layer").addEventListener("click", showMenu);

document.querySelector(".menu-button").addEventListener("click", showMenu);

function showMenu() {
  let menu = document.querySelector("nav.menu");
  menu.classList.toggle("show");

  let layer = document.querySelector(".fade-layer");
  layer.classList.toggle("visible");
}

document.querySelectorAll(".content").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("expanded");
  });
});
