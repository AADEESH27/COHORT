const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let data = [
  {
    name: "user1",
    kidney: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
  {
    name: "user2",
    kidney: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

async function addIntoData(name, kidneyData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < data.length; ++i) {
        if (data[i]["name"] == name) {
          data[i]["kidney"].push(kidneyData);
          break;
        }
      }
      resolve(data);
    }, 3000);
  });
}

async function findAndUpdate(name, index, kidneyData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < data.length; ++i) {
        if (data[i]["name"] == name) {
          data[i]["kidney"][index]["healthy"] = kidneyData;
          break;
        }
      }
      resolve(data);
    }, 3000);
  });
}

app.get("/", (req, res) => {
  res.status(200);
  res.send(data);
});
app.get("/get-user-data", (req, res) => {
  const user = req.query["name"];
  const result = data.filter((item) => {
    return item["name"] == user;
  });
  console.log(result);
  res.send(result);
  // res.json({
  //   name: user,
  // });
});

app.post("/add-data", (req, res) => {
  const name = req.body["name"];
  const kidneyData = req.body["kidney"];
  addIntoData(name, kidneyData)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
  res.status(200);
  res.send(data);
});

app.put("/update-data", (req, res) => {
  const { name, index, kidneyData } = req.body;
  findAndUpdate(name, index, kidneyData)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server connected at PORT:${port}`);
});
