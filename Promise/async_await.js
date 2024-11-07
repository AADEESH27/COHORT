// const delhiWeather = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 deg");
//     }, 2000);
//   });
// };

// const bangWeather = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21 deg");
//     }, 5000);
//   });
// };

// //if just console.log no need to return, if need data ahead return and work with .then().catch()

// const p2 = async function getWeather() {
//   try {
//     console.log("Getting delhi");
//     let del = await delhiWeather();
//     console.log("Got delhi ", del);

//     console.log("Getting banglore");
//     let bang = await bangWeather();
//     console.log("Got banglore ", bang);

//     return [del, bang];
//   } catch (error) {
//     return error;
//   }
// };

// const data = p2();
// data.then((value) => {
//   console.log(value);
// });

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // // connecting to database using promise using async await
// // const mysql = require("mysql2/promise");

// // Define the function that returns a promise
// let p3 = async function connectToDatabase() {
//   try {
//     let connection = await mysql.createConnection({
//       host: "localhost",
//       user: "your_username",
//       password: "your_password",
//       database: "your_database",
//     });
//     return connection;
//   } catch (error) {
//     throw error;
//   }
// };

// // Invoke the function to get the promise, then handle it with then() and catch()
// let response = p3();
// response
//   .then((connection) => {
//     console.log("Connected to the database!");
//     // Perform queries or other actions using the connection
//     return connection;
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database: ", error);
//   });

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hi I am resolved");
    }, 2000);
  });
};

async function func() {
  const res = await myPromise();
  console.log(res);
}
func();
// let ans = func();
// console.log(ans);
