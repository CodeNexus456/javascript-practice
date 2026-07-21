// async function Greet() {
// AbortController.abc();
// throw "Some random error";
// return "hello";
// }



// Greet().then((result)=> {
//   console.log("Promise successfull");
//   console.log("result was " ,result);
// }).catch((error)=> {
//   console.log("Promise is not successfull",error);
// })

// const demo = async ()=> {
//   return 5;
// }

let h1 = document.querySelector("h1");
function ChangeColor(color, delay) {
  return new Promise((resolve, rejecte) => {
    setTimeout(() => {
      let num = Math.floor(Math.random()*5)+1;
      if(num > 3) {
        rejecte("promise rejected!");
        console.log(num);
      }
      h1.style.color = color;
      console.log(`color change to ${color}`);
      resolve("changed color !");
    }, delay);
  });
}

async function demo() {

  try{
    await ChangeColor("red", 1000);
  await ChangeColor("green", 1000);
  await ChangeColor("orange", 1000);
  await ChangeColor("blue", 1000);
  await ChangeColor("pink", 1000);
  } catch(error){
    console.log("error caught");
    console.log(error)
  }

  let a = 5;
  console.log(a);
  console.log("number is = " + a + 3);
}
// function getNum() {
//   return new Promise((resolve,reject)=> {
//     setTimeout(()=> {
//       let num = Math.floor(Math.random()*10)+1;
//      console.log(num);
//      resolve();
//     },1000);
//   });
// }

// async function demo() {
//  await getNum();
//   await getNum();
//   await getNum();
// }
