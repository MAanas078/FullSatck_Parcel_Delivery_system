const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

// Register User
const registerUser = async (req, res) => {
  const newUser = User({
    fullname: req.body.fullname,
    email: req.body.email,
    age: req.body.age,
    country: req.body.country,
    address: req.body.address,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }); // Fix: findOne
    if (!user) {
      return res.status(401).json("You have not registered");
    }
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS
    );
    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8); // Fix: originalPassword
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong Password");
    }

    const { password, ...info } = user._doc;
    const accessToken = jwt.sign( // Fix: accessToken
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "5d" } // Fix: expiresIn
    );
    res.status(200).json({ ...info, accessToken, fullname: user.fullname });
  }catch (error) {
    res.status(500).json(error);
  }
};

// Export the functions
module.exports = { registerUser, loginUser };