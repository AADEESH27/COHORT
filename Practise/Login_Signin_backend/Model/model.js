const mongoose = require("mongoose");

const User = mongoose.model("users", {
  name: String,
  username: String,
  password: String,
});

module.exports = User;
