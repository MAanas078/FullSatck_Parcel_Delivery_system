const express = require("express");
const router = express.Router();
const crypyoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

//Registration

router.post("/register", async (req, res) => {
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
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findone({ email: req.body.email });
    if (!user) {
      return res.status(401).json("You have not register");
    }
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS
    );
    const orignalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    if (orignalPassword !== req.body.password) {
      return res.status(500).json("Wrong Passwod");
    }

    const { password, ...info } = user._doc;

    const accesstoken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expireIn: "10d" }
    );

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
