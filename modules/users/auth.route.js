const router = require("express").Router;
const { register } = require("./auth.controller");

const authRouter = router();

authRouter.post("/register", register);

module.exports = { authRouter };
