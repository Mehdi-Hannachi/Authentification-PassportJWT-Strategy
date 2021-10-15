const express = require("express");
const { userRegister, userLogin } = require("../controllers/user.controller");
const { registerRules, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

Router.post("/register", registerRules(), validator, userRegister);
Router.post("/login", userLogin);
Router.get("/currentUser", isAuth(), (req, res) => res.send(req.user));

module.exports = Router;
