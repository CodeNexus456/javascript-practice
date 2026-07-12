// let heading = document.getElementById("heading");
// heading.innerText = "Peter Parker";


// let image = document.getElementById("mainImg");
// image.src = "../assets/spider-man1.webp";

// let line = document.querySelectorAll(".box a");

// for(let i=0; i<=line.length; i ++) {
//   line[i].style.color = "green";
// }

// let img = document.querySelector(".images");


// let box = document.querySelector(".box");
// // console.log(box.boxLink);


// let p = document.createElement("p");
// p.innerText = "Hello from apna college";

// document.body.p.appendChild(p);

// let container = document.querySelector(".container");

// container.appendChild(p);

// console.log(container);

// let body = document.querySelector("body");

// let p = document.createElement("p");
// let h3 = document.createElement("h3");
// let div = document.createElement("div");
// let h1 = document.createElement("h1");


// p.innerText = "Hi i am red";
// h3.innerText = "Hi i am blue H3";
// h1.innerText = "Hi i am h1";

// body.appendChild(p);
// p.style.color = "red";

// body.appendChild(h3);
// h3.style.color = "blue";

// div.style.height = "200px";
// div.style.width = "200px";
// div.style.borderSize = "1px";
// div.style.color = "black";
// div.style.border = "solid";
// div.appendChild(h1);




let para = document.createElement("p");
para.innerText = "Hey I am red";

document.querySelector("body").append(para);
para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "Hey I am blue";

document.querySelector("body").append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
div.style.backgroundColor = "green";
div.style.color = "white";
div.classList.add("box");

h1.innerText = "i am inner div Element";
para2.innerText = " ME TOO";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);


// 
let text = document.createElement("input");

document.querySelector("body").appendChild("text");
text.classList.add("input");
