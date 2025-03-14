const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Correct split
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("Access Denied...");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role == "admin") {
      next();
    } else {
      res.status(403).json("You are not permitted to do this operation");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
