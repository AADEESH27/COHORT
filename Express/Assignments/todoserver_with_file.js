const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let idCounter = 1;
function generateUniqueIdManually() {
  return idCounter++;
}
const path = "./files/todos.json";

function generateUniqueId() {
  return uuidv4();
}

function getToDoFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function insertTodoInFile(todo) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      let todos = new Array();
      if (!error) {
        const lines = data.split("\n").filter(Boolean);
        const lastLine = lines[lines.length - 1];
        const lastTodo = JSON.parse(lastLine);
        todos = data ? JSON.parse(data) : [];
      }
      todos.push(todo);
      fs.writeFile(path, JSON.stringify(todos, null, 2), (error) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  });
}

app.get("/todos", async (request, response) => {
  try {
    const data = await getToDoFromFile();
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error);
  }
});

app.get("/todos/:requestedID", async (request, response) => {});

app.post("/todos", async (request, response) => {
  const id = generateUniqueIdManually();

  let todo = request.body;
  todo = { id, ...todo };
  try {
    await insertTodoInFile(todo);
    response.status(201).json({ id: todo["id"] });
  } catch (error) {
    response.status(404);
  }
});

app.put("/todos/:requestedID", (request, response) => {});

app.delete("/todos/:requestedID", (request, response) => {});

app.use((request, response) => {
  response.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
