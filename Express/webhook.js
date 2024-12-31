const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "message recieved" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
