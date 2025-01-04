const zod = require("zod");

const signupSchema = zod.object({
  name: zod.string(),
  username: zod.string().email(),
  password: zod.string().min(8),
});

const loginSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
});

module.exports = { signupSchema, loginSchema };
