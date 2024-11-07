const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let todos = [];

function generateUniqueId() {
  return uuidv4();
}

let idCounter = 1;

function generateUniqueIdManually() {
  return idCounter++;
}

app.get("/todos", (request, response) => {
  JSON.stringify(todos);
  response.status(200).json(todos);
});

app.get("/todos/:requestedID", (request, response) => {
  const requestedID = Number(request.params["requestedID"]);
  const result = todos.find((todo) => {
    return todo["id"] === requestedID;
  });
  result;
  if (result) {
    requestedID;
    response.status(200).json(result);
  } else {
    response.status(404).send("Requested id does not exists");
  }
});

app.post("/todos", (request, response) => {
  let data = request.body;
  data = { id: generateUniqueIdManually(), ...data };
  todos.push(data);
  data;
  response.status(201).json({ id: data["id"] });
});

app.put("/todos/:requestedID", (request, response) => {
  const requestedID = Number(request.params["requestedID"]);
  const data = request.body;
  const ifIdExists = todos.filter((todo) => {
    return todo["id"] == requestedID;
  });
  if (ifIdExists.length > 0) {
    ifIdExists.forEach((todo) => {
      todo["title"] = data["title"];
      todo["completed"] = data["completed"];
    });
    response.status(200).send("OK");
  } else {
    response.status(404).send("NOT OK");
  }
});

app.delete("/todos/:requestedID", (request, response) => {
  const requestedID = Number(request.params["requestedID"]);
  const index = todos.findIndex((todo) => {
    if (todo["id"] === requestedID) {
      return todo;
    }
  });
  index;
  if (index != -1) {
    todos.splice(index, 1);
    response.status(200).send("OK");
  } else {
    response.status(404).send("Requested id does not exists");
  }
});

app.use((request, response) => {
  response.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
