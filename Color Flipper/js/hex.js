let hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let mainPage = document.querySelector("main");
let colorText = document.getElementById("color");
btn.addEventListener("click", () => {
  let randomColor = generateRandomHex();
  mainPage.style.backgroundColor = `${randomColor}`;
  colorText.innerText = `${randomColor}`;
});

function generateRandomHex() {
  let hex = new Array("#");
  for (let index = 0; index < 6; index++) {
    hex.push(hexArr[Math.floor(Math.random() * hexArr.length)]);
  }
  return hex.join("");
}
