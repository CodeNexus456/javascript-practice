let div = document.querySelector(".div");
let btn = document.querySelector("button");

btn.addEventListener("click",()=> {
  let h2 = document.querySelector("h2");
  let random = randomColor();

  div.style.backgroundColor = "red";
  div.innerText = "This is your new color";
  div.style.fontSize = "1.5rem";
  div.style.color = "white";
  h2.innerText = random;
  h2.style.color = "blue";
  div.style.backgroundColor = random;
});

function randomColor() {
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  let color = `rgb(${red},${green},${blue})`;
  return color ;
}