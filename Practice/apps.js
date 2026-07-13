// let age = 23;
// age = age + 3;
// console.log(age);





// const { useReducer } = require("react");

// Average 

// let hindi = 30;
// let english = 70;
// let math = 90;

// let Average = (hindi + english + math) / 3;
// console.log("Average of Marks : " + Average);


// template literal 

// let PencilePrice = 5;
// let eresiorPrice = 10; 
// // let output =" sum of total price is " + (PencilePrice + eresiorPrice) + " rupeese. ";

// let output = `sum of total price is ${PencilePrice + eresiorPrice} rupess.`;
// console.log(output);


// If Statement 

// let color = "red";

// if(color === "red") {
//   console.log("Stop");
// }
// if(color === "yellow"){
//   console.log("Slow down");
// }

// if(color === "green") {
//    console.log("go");
// }

// practice Question

// let size = "M";

// if(size === "XL") {
//   console.log("Price is 250₹");

// } else if (size === "L") {
//   conaole.log("Price is 200₹")
// } else if(size === "M") {
//   console.log("Price is 100₹");
// } else if(size === "S") {
//   console.log("Price is 50₹");
// } else {
//   conaole.log("inavalid");
// }




// nested idf -else 

// let marks = 99;

// if(marks >= 33) {
//   console.log("Pass");
//   if(marks >=80 ) {
//     console.log("Grade A");
//   } else {
//     console.log("Grade O");
//   }
// } else {
//   console.log("Better Luck tyr next time !");
// }

// Question = 1

// let str = "apple";
// for(let i=0; i<=str.length; i++) {
//   if(str[0] === "a" && str.length === 3) {
//     console.log("Good String");
//   } else {
//     console.log("Not Good String");
//   }
// }



// if(str[0] == "a" && str.length >= 3) {
//   console.log("Good String");
// } else {
//   console.log("Not Good String");
// }


// switch statement 

// let day = "10";

// switch(day) {
//   case "1" : 
//   console.log("Monday");
//   break;

//   case "2" : 
//   console.log("Tuesday");
//   break;

//   case "3" : 
//   console.log("Wednesday");
//   break;

//   case "4" : 
//   console.log("thirsday");
//   break;

//   case "5" : 
//   console.log("friday");
//   break;

//   case "6" : 
//   console.log("Saturday");
//   break;

//   case "7" : 
//   console.log("Sunday");
//   break;

//   default :
//   console.log("Wrong day");
// }

// Alert and prompt

// let firstName = prompt("Enter your first name :");
// let lastName = prompt("Enter your last name : ");

// let username = `My first name ${firstName} and last name ${lastName} : name is ${firstName}  ${lastName}`;

// console.log(alert(username));

// replace and repeate method

// let msg = "I love Coding";

// console.log(msg.replace("Coding" , "javascript"));

// let msg1 = "help!";

// console.log(msg1.trim());

// //  or

// console.log(msg1.trim().toUpperCase());


// nested array 

// for loop

// for (let i=1; i<=100; i++) {
//   if(i%2==1) {
//     console.log("Odd number:" , i);
//   } else{
//     console.log("even number :" , i);
//   }
// } 

// gauss Movie 

// let movie = "Avatar";

// let guess = prompt("Guess movie name ?");

// while(guess!=movie) {
//   console.log("try again");


// }


// let student = [["aman",94],["Suraj",92],["Shiva",90]];

// for(let i=0; i<=student.length; i++) {
//   console.log(`info of Student #${i+1}`);
//   for(let j=0; j<=student[i].length; j++) {
//     console.log( student[i][j]);
//   }
// }


// object Literal

// const Student = {
//   name : "Suraj kumar",
//   age : 36,
//   cource : "Btech",
//   branch : "CSE"
// }

// console.log(Student);

// const TwiterPost = {
//   username : "Suraj_kumar897",
//   content : ["Photo , video"],
//   likes : 764,
//   reposte : "3 Account",
//   tag: "4 Account"
// }



// Nested Object 

// let Student = {
//   name : {
//     grade : "A+",
//     name : "Suraj kumar",
//   },
//   age : 64,
//   address : {
//     city : "Lucknow",
//     sector : 1,
//   },
//   college : {
//     collegeName : "University of Lucknow",
//     campusename : "Old campus"
//   }
// }


// Array of object 

// let CalssInfo  = [
//   {
//     name : "Suraj",
//     age : 64,
//     grade : "A+"
//   },
//   {
//     name : "Shiva",
//     age : 73,
//     grade : "B+"
//   },
//   {
//     name : "Shiva Paswan",
//     age : "22",
//     grade : "C+"
//   }
// ]

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(63));
// console.log(Math.round(7.8937));
// console.log(Math.random());

// // generate random number from 1 to 10 

// let randomNum = Math.floor(Math.random()*10)+1;
// console.log("random Number from 1to 10 : " + randomNum);

// // generate otp

// let opt = Math.floor(1000+Math.random()*9000);
// console.log("My otp is : ",opt);

// // generate 6-digit otp 

// let randomOtp = Math.floor(100000 + Math.random()*900000);
// console.log("6-digit otp : " + randomOtp);



// Function 

// function hello() {
//   console.log("Hello World");
// }

// hello();
// hello();

// function RollDisc() {
//   let random = Math.floor(Math.random()*6)+1;
//   console.log(random);
// }

// RollDisc();

// Functio with argument 

// function hello(name) {
//   console.log("Hello "+name);
// }

// hello("Suraj");

// function hello(name , age) {
//   console.log(`my name is ${name} and my age is ${age}`);
// }

// hello("Suraj kumar", 22);
// hello("Shiva paswan",23);

// Sum of two number 

// function sum( a , b) {
//   console.log("Sum of two number is : ", a+b);
// }

// sum(3,6);

// Average of three number 

// function Average(a,b,c) {
//   let avg = (a+b+c)/3;
//   console.log("Average of three number is : " ,avg);
// }

// Average(3,4,5);
// Average(2,29,5);
// Average(28,22,5);
// Average(83,4,5);

// Multiplication table 

// function MultiTable(a){
//   for(let i=1; i<=10; i++) {
//     console.log(i*a);
//   }
// }

// MultiTable(2);
// console.log("-------------")
// MultiTable(3);
// console.log("-------------")
// MultiTable(4);


// Function Exporession

// let sum = function(a,b) {
//   return a+b;
// }
// console.log(sum(4,6));

// higher order function

// function multiGreet(func,n) {
//   for (let i=0; i<=n; i++) {
//     func();
//   }
// }
//   let greet = function() {
//     console.log("hellow world");

//   }

// multiGreet(greet,2);



// method

// const calculator = {

//   num : 55,
//   add : function(a,b) {
//     return a + b;
//   },

//   sub : function (a,b) {
//     return a - b;
//   },

//   division : function(a,b) {
//     return a / b;
//   },

//   mode : function(a,b) {
//     return a%b;
//   },

//   multi : function(a,b) {
//     return a*b;
//   }
// };

// or shorthand method 


// const calculator = {


//   add(a,b) {
//     return a + b;
//   },

//   sub(a,b) {
//     return a - b;
//   },

//   division(a,b) {
//     return a / b;
//   },

//   mode(a,b) {
//     return a%b;
//   },

//   multi(a,b) {
//     return a*b;
//   }
// };


// this keyword 

// const Student = {
//   name : "Suraj kumar",
//   age : 53,
//   phy : 73,
//   chem : 98,
//   math : 98,
//   letAvg (){
//     getAvg = (this.phy + this.chem + this.math )/3,
//   console.log(`name ${name}` );
//   }
 
// }


// try and catch 

// console.log("Start");
// // console.log(User.name);

// try{
//   console.log(user.name)
// } catch(error) 
//  {
//   console.log("Somthing went wrong");
// }
// console.log("end");


// console.log(a);

// try {
//   console.log(a);
// } catch(error) {
//   console.log("veriable is defined");
// }

// try {
//   console.log(error);
// } catch(error) {
//   console.log(error);
// }



// Arrow Function

// let greet = ()=> {
//   console.log("Hello world");
// }
// greet();
// greet();

// const Student = {
//   name : "Suraj kumar",
//   age : 21,

//    greet() {
//     console.log(`My name is ${this.name} and age is ${this.age}`);
//   }

// }
// Student.greet();


// Arrow function 

// const greet = (a,b)=> {
//   console.log(a+b);
// }

// greet(873,983);

// Implicit return

// let greet = (a,b) => a + b;
// console.log(greet(73,9));



// console.log("Start");
// setTimeout(()=>{
//   console.log("running function .....");
// },3000)
// console.log("end");


// console.log("Start");
// let id = setInterval(()=>{
//   console.log("Apna ollege ");
// },2000)
// // console.log("end");

// console.log(id);

// // console.log("Start");
// let id2 = setInterval(()=>{
//   console.log("hello world");
// },3000)
// // console.log("end");

// console.log(id2);


// this with arrow function

// let student = {
//   name: "Suraj kumar",
//   age : 36,
//   prop : this ,

//   getNam: function() {
//     console.log(this); // global scop
//     return this.name;
//   },

//   getAge : ()=> {
//     console.log(this);// parent's scop -> window
//     return this.age;
//   },

//   getInfo1: function(){
//     setTimeout(()=>{
//       console.log(this);
//     },2000);
//   } ,

//   getInfo2 : function() {
//     setTimeout(function() {
//       console.log(this);
//     },2000)
//   }
// }




// Squar of a number 

// let sqr = (a)=> {
//   return a * a;
// }

// console.log(sqr(3));
// let 


// q=2

// let id = setInterval(()=> {
//   console.log("Hello world");
// },2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("Clear interval");
// }, 10000);

// q=1 

// let arrayAverage = ()=> {
//   let arr = [2,3,4,6,6];
//   for(let i=0; i<=arr.length; ++i){
//     let avg = (arr[0]+arr[1]+arr[2]+arr[3]+arr[4])/arr.length;
//     console.log(avg);
//   }
// }

// ForEach method

// let arr = [1,3,4,6,7,9];

// let print = function(el) {
//   console.log(el);
// };

// arr.forEach(print);

// or 

// arr.forEach(function(el) {
//   console.log(el);
// })



// let arr = [{
//   name : "Suraj kumar",
//   age : 23
// },
// {
//   name : "Shiva",
//   age : 24
// },
// {
//   name : "Vivek kumar" ,
//   age : 34
// }]

// arr.forEach((student)=> {
//   console.log(student.age);
// })

// map fucntion 

// let arr = [1,3,5,6,7,8,9];

// let double = arr.map((el)=> {
//   return el * 2;
// })

// filter function

// let num = [1,3,3,4,5,67,8,8,9,9,99,,34,6,8,99,55,432,22,2];

// let ans = num.filter((el)=> {
//   return el % 2 == 0;  // even number
// })



// every function

// let arr = [2,4,6,8,4];

// arr.every((el)=> {
//   return el % 2 ==0;
// })


// reduce function

// let arr = [2,4,6,8,9,3];

// let Finalvalue = arr.reduce((res,el)=> res + el);

// console.log(Finalvalue);



// find maximum elemnt in array 

//  let arr = [3,5,6,8,9,0,2];
// 
// let max = -1;

// for(let i=0; i<=arr.length; i++) {
//   if(max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);


// or 


// let max = arr.reduce((max,el) => {
//   if(max < el) {
//     return el
//   } else {
//     return max;
//   }
// });

// console.log(max);

// multivple of 10

// let arr = [10,20,30,40];
// let ans = arr.every((el) => {
//   return el % 10 == 0;
// })

// console.log(ans);


// find minimum number 

// let arr = [2,3,4,6,8,9];

// let min = arr.reduce((min,el)=> {
//   if(min < el) {
//     return min;
//   } else {
//     return el;
//   }
// })

// console.log(min);



// defaulte parameter 

// function add( a = 0, b = 0) {
//   return a+b;
// }

// console.log(add());
// console.log(add(10));
// console.log(add(10,20));


// function CreateUser(name = "Anonymouse", role = "Student") {
//   console.log(name + "_" + role);
// }
// CreateUser();
// CreateUser("Suraj");
// CreateUser("Suraj", "Developer");


// Spreade operator

// let arr = [1,3,4];
// let arr2 = [...arr];
// // console.log(...arr);

// console.log(...arr2);


// merge array

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8,9];

// let arr3 = [...arr1, ...arr2];

// console.log(arr3);


// rest 

// function sum (...number) {
//   console.log(number);
// }

// sum(20,30,40,50);


// let p = document.createElement("p");
// p.innerText = " hello world !";
// document.body.appendChild(p);

// p.addEventListener("click", ()=> {
//   p.style.color = "red";
// })



// let heading = document.getElementById("para");
// let btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//   heading.innerText = "Hello World";
// });

// this event 

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("#btn");
// function changeColor () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);



// let btn = document.querySelector("#btn");
// let input = document.querySelector("input");

// input.addEventListener("keydown",function(event){
//   // console.log(input);
  
//   // console.log(" key press  = " + event.key);
//   console.log("key code  = " + event.code);
//   // console.log("input was pressed");
//   if(event.code == "KeyU") {
//     console.log("Character move up");
//   } else if(event.code == "KeyH") {
//     console.log("Character move left");
//   } else if(event.code == "KeyK") {
//     console.log("Character move Arrow right");
//   } else if(event.code == "KeyN") {
//     console.log("Character move down");
//   }


// });

// let form = document.querySelector("form");
// let username = document.querySelector("#name");
// let password = document.querySelector("#pass");

// form.addEventListener("submit",(event)=> {
//   event.preventDefault();
//   console.log(username.value);
//   console.log(password.value);
//   alert(`hi ${username.value} , your password is set to ${password.value}`);
  
// });



// let input = document.querySelector("input");
// let para = document.querySelector("p");

// input.addEventListener("input",function() {
//   console.log(input.value);
//   para.innerText = input.value;
// })


// let input = document.querySelector("input");
// let h2 = document.querySelector("h2");

// input.addEventListener("input",function(){
//   console.log(input.value);
//   h2.innerText = input.value;
// })



// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");


// div.addEventListener("click",function() {
//   console.log("Div was clicked");
// });


// ul.addEventListener("click",function(event) {
//   event.stopPropagation;
//   console.log("ul was clicked");
// });


// for(li of lis) {
//   lis.addEventListener("click",function(event) {
//   event.stopPropagation;
//   console.log("li was clicked");
// });
// }

let input = document.querySelector("input");
let btn = document.querySelector("button");

let li = document.querySelector("li");
let ul = document.querySelector("ul");

btn.addEventListener("click",function() {

  let items = document.createElement("li");
  let delbtn = document.createElement("button");
  items.innerText = input.value;
  delbtn.innerText = "delete";
delbtn.classList.add("delete");

 items.appendChild(delbtn);
  
   ul.appendChild(items);
  input.value = "";
});


 let delbtns = document.querySelector(".delete");
for(delbtn of  delbtns) {
  delbtn.addEventListener("click",function() {
    console.log("button dleleted");
  });
};