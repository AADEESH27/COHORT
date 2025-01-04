const express = require("express");
const router = require("./Routes/authRoutes");
const { connectToDb } = require("./Database/database");

const app = express();
const PORT = 3001;

//db connection
connectToDb();

//middleware
app.use(express.json());

//routes
app.use("/auth", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
