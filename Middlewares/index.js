const express = require("express");
const zod = require("zod");
const port = 3000;

const app = express();
// const schema = zod.array(zod.number());

const schema = zod.array(
  zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("USA")),
  })
);

app.use(express.json());

app.post("/health", (request, response) => {
  const data = request.body["arr"];
  const parsedData = schema.safeParse(data);
  response.send(parsedData);
});

app.use((error, request, response, next) => {
  res.status(403).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
