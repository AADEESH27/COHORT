const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const PORT = 3000;
const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

const userExists = (username, password) => {
  return ALL_USERS.some((user) => {
    return user.username === username && user.password === password;
  });
};

app.get("/", (request, response) => {
  response.send("<h1>Hello</h1>");
});

app.post("/login", (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  if (!userExists(username, password)) {
    response.status(403).json({
      message: "User does not exists",
    });
  }
  const token = jwt.sign(username, jwtPassword);
  response.status(200).json({
    token: token,
  });
});

app.get("/users", (request, response) => {
  const token = request.headers.authorization;
  const username = jwt.verify(token, jwtPassword);
  const result = ALL_USERS.filter((user) => {
    return user["username"] !== username;
  });
  response.status(200).json({
    users: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
