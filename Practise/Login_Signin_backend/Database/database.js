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

module.exports = { connectToDb };
