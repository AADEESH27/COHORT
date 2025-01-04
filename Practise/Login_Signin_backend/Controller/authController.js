const { User } = require("../Database/database");
const bcryptjs = require("bcryptjs");
const { generateToken } = require("../Tokens/ownjwtfunctions");
const saltRounds = 10;

const userSignUp = async (request, response) => {
  try {
    const { name, username, password } = request.body;
    const result = await createUser(name, username, password);
    const token = generateToken(name, password);
    response
      .status(200)
      .json({ message: "User successfully created", token: token });
  } catch (error) {
    response.status(400).json({ message: "Error creating user" });
  }
};

const createUser = async (name, username, password) => {
  try {
    //hashing password before storing
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

module.exports = { userSignUp };
