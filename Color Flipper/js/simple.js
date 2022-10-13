let colorsArr = ["#F1f5f8", "Green", "Rgba(133,122,200)", "Red"];
let btn = document.getElementById("btn");
let mainPage = document.querySelector("main");
let colorText = document.getElementById("color");
btn.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * colorsArr.length);
  mainPage.style.backgroundColor = `${colorsArr[randomColor]}`;
  colorText.innerText = `${colorsArr[randomColor]}`;
});
