const { User } = require("../Database/database");
const bcryptjs = require("bcryptjs");
const { generateToken } = require("../Tokens/ownjwtfunctions");
const saltRounds = 10;

const userSignUp = async (request, response) => {
  try {
    const { name, username, password } = request.body;
    const result = await createUser(name, username, password);
    response
      .status(200)
      .json({ message: "User successfully created", user: result });
  } catch (error) {
    response.status(400).json({ message: "Error creating user" });
  }
};

const userLogin = async (request, response) => {
  try {
    const { username, password } = request.body;
    const user = await validUser(username);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return response.status(401).json({ message: "Incorrect password" });
    }
    const token = generateToken(username);
    return response
      .status(200)
      .json({ message: "Successfully logged in", token });
  } catch (error) {
    console.error("Error during user login:", error);
    return response
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const createUser = async (name, username, password) => {
  try {
    const salt = await bcryptjs.genSalt(saltRounds);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });
    const result = await user.save();
    return result;
  } catch (error) {
    console.log(error);
    return;
  }
};

const validUser = async (username) => {
  try {
    const isValidUser = await User.findOne({ username: username });
    return isValidUser;
  } catch (error) {
    console.log("Error", error);
    return;
  }
};
module.exports = { userSignUp, userLogin };
