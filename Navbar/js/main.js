let getLinks = document.querySelector(".links");
let button = document.querySelector(".nav-toggle");

button.addEventListener("click", () => {
  getLinks.classList.toggle("show-links");
});
