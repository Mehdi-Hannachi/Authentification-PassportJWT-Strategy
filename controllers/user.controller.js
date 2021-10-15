const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/******************************User register********************************* */

exports.userRegister = async (req, res) => {
  const newUser = new User({ ...req.body });
  const email = newUser.email;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(401).json({ msg: "user already exist" });
  }

  try {
    // Hashage algorithm complexity
    const salt = await bcrypt.genSalt(10);
    // Hashed password
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;
    await newUser.save();
    res.status(202).json({ msg: "Register success" });
  } catch (err) {
    res.status(402).json({ msg: "Register failed" });
  }
};

/******************************User Login********************************* */

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

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (err) {
    res.status(400).json({ errors: err });
  }
};

/******************************Reset Password********************************* */
