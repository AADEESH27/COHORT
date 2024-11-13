const express = require("express");
const { pool } = require("./db");
const app = express();
const port = 3001;
app.use(express.json());

app.get("/", async (request, response) => {
  try {
    await pool.query(`insert into test_table (id, name) values (3, 'fat');`);
    const result = await pool.query("SELECT * FROM test_table;"); // array of object
    response.send(
      `<div>${result["rows"]
        .map((item) => {
          return `<h1>${item["id"]}</h1><h2>${item["name"]}</h2>`;
        })
        .join("")}</div>`
    );
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
