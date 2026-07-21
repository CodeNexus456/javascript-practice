let jsonRes = '{"activity":"Hold a yard sale","availability":0.1,"type":"social","participants":1,"price":0,"accessibility":"Minor challenges","duration":"days","kidFriendly":true,"link":"","key":"1432113"}';

console.log(jsonRes);
let jsonRsp = JSON.parse(jsonRes);
console.log(jsonRsp.key);

// let student = {
//   name : "Suraj kumar",
//   age : 53,
// };

// let res = JSON.stringify(student);
// console.log(res);