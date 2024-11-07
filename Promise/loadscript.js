let loadScript = (url) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(1);
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript(
  "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
)
  .then((value) => {
    console.log("Script added successfully");
    return loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    );
  })
  .then((value) => {
    console.log("Script added successfully");
  })
  .catch((error) => {
    console.log("Script not loaded");
  })
  .catch((error) => {
    console.log("Script not loaded");
  });

// // connecting to database using promise
// const mysql = require("mysql2/promise");

// Define the function that returns a promise
function connectToDatabase() {
  return mysql.createConnection({
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database",
  });
};

// Invoke the function to get the promise, then handle it with then() and catch()
connectToDatabase()
  .then((connection) => {
    console.log("Connected to the database!");
    // Perform queries or other actions using the connection
    return connection;
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });
