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

function multiGreet(func,n) {
  for (let i=0; i<=n; i++) {
    func();
  }
}
  let greet = function() {
    console.log("hellow world");

  }

multiGreet(greet,2);