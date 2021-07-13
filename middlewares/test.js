const { body, validationResult } = require("express-validator");
const User = require("../models/User");

exports.test = () => {
  body("email").custom((value) => {
    console.log("email : ", value);
    const user = User.findOne({ value });

    try {
      if (user) {
        return Promise.reject("E-mail already in use");
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.json({ errors: errors.array() });
};
