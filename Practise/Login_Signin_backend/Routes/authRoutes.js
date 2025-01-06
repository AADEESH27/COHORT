//handles auth related routes
const express = require("express");
const router = express.Router();
const validateSchema = require("../Middlewares/verifySchema");
const { signupSchema, loginSchema } = require("../Schema/schema");
const { userSignUp, userLogin } = require("../Controller/authController");

router.post("/signup", validateSchema(signupSchema), userSignUp);

router.post("/login", validateSchema(loginSchema), userLogin);

module.exports = router;
