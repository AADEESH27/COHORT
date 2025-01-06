const { verifyToken } = require("../Tokens/ownjwtfunctions");

const verifyUser = () => {
  return (request, response, next) => {
    try {
      const authHeader = request.headers.authorization;
      if (!authHeader) {
        return response
          .status(401)
          .json({ message: "Authorization token missing" });
      }
      const userVerified = verifyToken(authHeader);
      if (!userVerified) {
        return response
          .status(401)
          .json({ message: "Invalid or expired token" });
      }
      request.username = userVerified;
      next();
    } catch (error) {
      console.error("Error during token verification:", error);
      response
        .status(401)
        .json({ message: "Unauthorized Access", error: error.message });
    }
  };
};

module.exports = verifyUser;
