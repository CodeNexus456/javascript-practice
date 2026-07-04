let max = prompt("Enter the maximum Number ?");

const random = Math.floor(Math.random()*max);

let guess = prompt("Guess the Number");

while(true) {
  if(guess == "quite") {
    console.log("Quiting game");
    break;
  }
  if(guess == random) {
    console.log("You are right ! congrates !! random number was" ,random);
    break;
  } else if(guess < random) {
    guess = prompt("your geuss is too small .Please try again!");
  } else {
    guess = prompt("your geuss is too large .Please try again!");
  }
}