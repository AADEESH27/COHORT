const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

const generateToken = (username, password) => {
  const token = jwt.sign({ username: username }, jwtPassword);
  return token;
};

function verifyToken(token) {
  const verified = jwt.verify(token, jwtPassword);
  const username = verified["username"];
  return username;
}

module.exports = {
  generateToken,
  verifyToken,
};
