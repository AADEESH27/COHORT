const jwt = require("jsonwebtoken");
const jwtPassword = "12345";
//generate
const generateToken = (username, password) => {
  const token = jwt.sign(
    { username: username, password: password },
    jwtPassword
  );
  console.log(token);
  return token;
};

function verifyToken(token) {
  const verified = jwt.verify(token, jwtPassword);
  const username = verified["username"];
  console.log({ username, password });
  return { username, password };
}

module.exports = {
  generateToken,
  verifyToken,
};
// const jwt = require("jsonwebtoken");
// const jwtPassword = "12345";

// // Generate token
// const generateToken = async (username, password) => {
//   const token = jwt.sign(
//     { username: username, password: password },
//     jwtPassword
//   );
//   console.log("Generated Token:", token);
//   return token;
// };

// // Verify token
// function verifyToken(token) {
//   const verified = jwt.verify(token, jwtPassword);
//   const username = verified["username"];
//   const password = verified["password"];
//   console.log({ username, password });
//   return { username, password };
// }

// // Execute asynchronously
// (async () => {
//   const token = await generateToken("aadeesh@gmail.com", "1234");
//   verifyToken(token);
// })();
