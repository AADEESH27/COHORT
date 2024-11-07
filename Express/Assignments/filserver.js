/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.json());

function listFiles() {
  return new Promise((resolve, reject) => {
    fs.readdir("./files", (error, files) => {
      if (error) {
        reject(error);
      } else {
        resolve(files);
      }
    });
  });
}

function checkIfFileExists(filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join("./files/", filename);
    if (fs.existsSync(filePath)) {
      resolve(filePath);
    } else {
      reject(false);
    }
  });
}

function readContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

app.get("/files", (request, response) => {
  listFiles()
    .then((files) => {
      response.status(200).json(files);
    })
    .catch((error) => {
      response.status(401).send(error);
    });
});

// app.get("/file/:filename", (request, response) => {
//   const fileName = request.params["filename"];
//   checkIfFileExists(fileName)
//     .then((filePath) => {
//       console.log(filePath);
//       return readContent(filePath);
//     })
//     .then((data) => {
//       response.status(200).json(data);
//     })
//     .catch((error) => {
//       response.status(404).send("File Not Found");
//     });
// });

app.get("/file/:filename", async (request, response) => {
  const fileName = request.params["filename"];
  try {
    const filePath = await checkIfFileExists(fileName);
    if (filePath) {
      try {
        const data = await readContent(filePath);
        if (data) {
          response.status(200).json(data);
        }
      } catch (error) {
        response.status(404).send(error);
        console.log(error);
      }
    }
  } catch (error) {
    response.status(404).send(error);
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
