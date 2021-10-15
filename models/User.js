const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },

  email: {
    type: String,
  },

  adress: {
    type: String,
  },

  password: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", userSchema);
