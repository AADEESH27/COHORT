const express = require("express");
const { countRequests, getCount } = require("./counter");
const { rateLimiter } = require("./rateLimiter");
const app = express();

app.use(countRequests);
app.use(rateLimiter);

app.get("/user", function (request, response) {
  response.status(200).json({ name: "john" });
});

app.post("/user", function (request, response) {
  response.status(200).json({ msg: "created dummy user" });
});

app.get("/requests", function (request, response) {
  const requests = getCount();
  response.status(200).json({ requests: requests });
});

app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
