const User = require("../models/User"); // Fix: Corrected typo in "require"

// Deleting User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("The User has been deleted successfully"); // Fix: Changed status code to 200
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error: error.message }); // Improved error response
  }
};

// Get all Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); // Fix: Corrected method call
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message }); // Improved error response
  }
};

// Export the functions
module.exports = { deleteUser, getAllUsers };