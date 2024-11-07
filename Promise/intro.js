// //Used to handle code execution parallely, mostly used in network calls, API calls, DB calls.

// //function returning a promise
// function myOwnPromise() {
//   return new Promise(function (resolve, reject) {
//     console.log("Promise Pending");
//     setTimeout(() => {
//       console.log("Promise Fullfilled");
//       reject("Failed");
//     }, 4000);
//   });
// }

// //async version of above code
// async function firstAsync() {
//   const p = await myOwnPromise();
//   return p;
// }

// let ansFromPromise = myOwnPromise();
// ansFromPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let ansFromAsync = firstAsync();
// console.log(ansFromAsync);
// ansFromAsync
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //callback
// function sum(a, b, callback) {
//   callback(a + b);
// }

// function log(val) {
//   console.log(val);
// }

// sum(10, 10, log);

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 5000);
});

let q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

let r = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 8000);
});

const ans = Promise.all([p, q, r]);
ans.then((value) => {
  console.log(value);
});

Promise.allSettled([p, q, r]).then((result) => {
  result.forEach((item) => {
    console.log(`${item.status} : ${item.value}`);
  });
});

Promise.race([p, q, r]).then((result) => {
  console.log(result);
});

// p.then((value) => {
//   console.log(value);
//   return ++value;
// })
//   .catch((error) => console.log(error))
//   .then((value) => {
//     console.log(value);
//     return ++value;
//   })
//   .catch((error) => console.log(error));
