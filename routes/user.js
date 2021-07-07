const express = require("express");
const { userRegister, userLogin } = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/register", userRegister);
Router.get("/login", userLogin);

module.exports = Router;
