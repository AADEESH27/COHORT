const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const connectToDb = () => {
  return mongoose
    .connect(
      "mongodb+srv://aadeesh_bali_cohort:Haha552615@cohort-cluster.8xqds.mongodb.net/cohort"
    )
    .then((response) => {
      console.log("Successfully connected to MongoDB");
      return response;
    })
    .catch((error) => console.log(error));
};
connectToDb();

const User = mongoose.model("CurrentUsers", {
  name: String,
  email: String,
  password: String,
});

const jwtPassword = "123456";
const PORT = 3001;
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
User.insertMany(ALL_USERS)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

const userExists = (name, password) => {
  return User.findOne({ name: name }) //this return returns the whole promise of User.findOne
    .then((user) => {
      if (user) {
        return true;
      }
      return false; //this returns the result which later is caught by the function in the route
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

const getAllUsers = () => {
  return User.find({})
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

// const getAllUsers = async () => {
//   return await User.find({})
//     .then((response) => {
//       console.log(response);
//       return response;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

app.get("/", async (request, response) => {
  // const result = await getAllUsers();
  // response.status(200).json(result);
  getAllUsers()
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      response.status(404).json({ message: "Error while fetching data" });
    });
});

//Both .then are the same
// .then((response) => {
//       return true; //this returns the result which later is caught by the function in the route if not then when we resolve the query promise we wont have any thing to resolve in the .then
//     })

//this .then uses the the result pass by the above .then
// .then((result) => {
//       response.status(200).json(result);
//     })

app.post("/login", (request, response) => {
  const name = request.body.name;
  const password = request.body.password;
  userExists(name, password)
    .then((result) => {
      if (result) {
        const token = jwt.sign({ name }, jwtPassword);
        response.status(200).json({
          token: token,
        });
      } else {
        response.status(400).json({ message: "User does not exists" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/users", (request, response) => {
  const token = request.headers.authorization;
  const name = jwt.verify(token, jwtPassword).name;
  getAllUsers()
    .then((result) => {
      const users = result.filter((user) => {
        return user["name"] !== name;
      });
      response.status(200).json(users);
    })
    .catch((error) => {
      response.status(404).json({ message: "Error while fetching data" });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
