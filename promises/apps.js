// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna collge",
//   () => {
//     console.log("success : data is saved");
//     savetoDb(
//       "hello world",

//       () => {
//         console.log("success 2 : data2");
//         savetoDb("Suraj kumar",()=> {

//           console.log("success 3 : data3");
//         }, ()=>{
//           console.log("failure 3: data3");
//         })
//       },
//       () => {
//         console.log("failure2 :weak connection data2");
//       }
//     );
//   },
//   () => {
//     console.log("failure : weak connection ,data is not save");
//   }
// );

// Promises

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data is saved");
    } else {
      reject("failure :weak connection, data is not save");
    }
  });
}

savetoDb("apna college")
  .then(() => {
    console.log("data1 saved");

    savetoDb("helloworld").then(() => {
      console.log("data2 saved");
    });
  })
  .catch(() => {
    console.log("Promise was rejected");
    // console.log(request);
  });
