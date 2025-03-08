const express = require("express");
const { deleteUser, getAllUsers } = require("../controllers/user");
const router = express.Router();

//DELETING user

router.delete("/:id", deleteUser);

//GET all users

router.get("/", getAllUsers);

module.exports = router;
