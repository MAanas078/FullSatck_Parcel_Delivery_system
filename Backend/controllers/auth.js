const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

// ✅ Register User
const registerUser = async (req, res) => {
  try {
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email.toLowerCase(), // Store email in lowercase
      age: req.body.age,
      country: req.body.country,
      address: req.body.address,
      password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS).toString(),
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("❌ Registration Error:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// ✅ Login User
const loginUser = async (req, res) => {
  try {
    console.log("🔍 Login Attempt:", req.body.email);

    const user = await User.findOne({ email: req.body.email.toLowerCase() });

    if (!user) {
      console.log("🚨 User not found in database");
      return res.status(401).json({ message: "You have not registered" });
    }

    const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS);
    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    console.log("🔑 Decrypted Password:", originalPassword); // Debugging

    if (originalPassword !== req.body.password) {
      console.log("🚨 Incorrect password entered");
      return res.status(401).json({ message: "Wrong Password" });
    }

    console.log("✅ Login Successful:", user.fullname);

    const { password, ...info } = user._doc;

    // ✅ Ensure role exists for JWT
    const userRole = user.role || "user"; // Default role if missing

    const accessToken = jwt.sign(
      { id: user._id, role: userRole },
      process.env.JWT_SEC,
      { expiresIn: "5d" }
    );

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    console.error("❌ Internal Server Error:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// ✅ Export the functions
module.exports = { registerUser, loginUser };
