const express = require("express");
const router = express.Router();
const verifyUser = require("../Middlewares/verifyUser");
const { getAllUsers } = require("../Controller/userController");

router.get("/users", verifyUser(), getAllUsers);

module.exports = router;
