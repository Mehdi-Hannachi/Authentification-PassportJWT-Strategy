const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.userRegister = async (req, res) => {
  console.log("1", req.body);
  const newUser = new User({ ...req.body });
  console.log("2", newUser);

  const email = newUser.email;
  console.log("3", email);
  const user = await User.findOne({ email });

  console.log("4", user);

  if (user) {
    return res.status(401).json({ msg: "user already exist" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    console.log("hash :", hash);

    newUser.password = hash;

    await newUser.save();
    res.status(202).json({ msg: "Register success" });
  } catch (err) {
    console.error("Register failed", err);
    res.status(402).json({ msg: "Register failed" });
  }
};
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ msg: "Bad credentiel" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).json({ msg: "Bad credentiel" });

  try {
    const payload = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      adress: user.adress,
    };

    const token = await jwt.sign(payload, process.env.secretOrKey);

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (err) {
    console.log(err);
    res.status(400).json({ errors: err });
  }
};
