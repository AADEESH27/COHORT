const { User } = require("../Database/database");

const getAllUsers = async (request, response) => {
  try {
    const currentUser = request.username;
    const allUsers = await User.find({ username: { $ne: currentUser } });
    if (!allUsers) {
      response.status(200).json({ message: "No users found" });
    }
    response.status(200).json({ message: "Users", users: allUsers });
  } catch (error) {
    console.log("Error while fetching users", error);
    response.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllUsers };
