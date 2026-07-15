// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans =  two() + one();
//   console.log(ans);
// }

// three();


// js is a single threaded


// console.log("hello");
// setTimeout(() => {
//   console.log("Apna college");
// }, 2000);

// console.log("hi");







// callback hell 

let h1 = document.querySelector("h1");

setTimeout(function() {
  h1.style.color = "red";
},1000)

setTimeout(function() {
  h1.style.color = "orange";
},2000)
setTimeout(function() {
  h1.style.color = "blue";
},3000)
setTimeout(function() {
  h1.style.color = "lightblue";
},4000)
setTimeout(function() {
  h1.style.color = "green";
},5000)