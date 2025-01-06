const express = require("express");
const authRouter = require("./Routes/authRoutes");
const userRouter = require("./Routes/userRoutes");
const { connectToDb } = require("./Database/database");

const app = express();
const PORT = 3001;

//db connection
connectToDb();

//middleware
app.use(express.json());

//routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
