let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

decrease.addEventListener("click", () => {
  let counter = parseInt(document.querySelector(".counter").textContent);
  counter--;
  document.querySelector(".counter").textContent = counter;
  if (counter < 0) {
    document.querySelector(".counter").style.color = "red";
  } else if (counter == 0) {
    document.querySelector(".counter").style.color = "black";
  }
});

reset.addEventListener("click", () => {
  document.querySelector(".counter").textContent = 0;
  document.querySelector(".counter").style.color = "black";
});

increase.addEventListener("click", () => {
  let counter = parseInt(document.querySelector(".counter").textContent);
  counter++;
  document.querySelector(".counter").textContent = counter;
  if (counter > 0) {
    document.querySelector(".counter").style.color = "green";
  } else if (counter == 0) {
    document.querySelector(".counter").style.color = "black";
  }
});
