const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.post("/model", (req, res) => {
  console.log("agent", req.body);
  res.status(200).send({
    message: "Success",
  });
});

app.post("/webhook", (req, res) => {
  console.log(req.get("X-LAUNCH-AI-SIG"));
  console.log("webhook", req.body);
  res.status(200).json({ message: "message recieved" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
