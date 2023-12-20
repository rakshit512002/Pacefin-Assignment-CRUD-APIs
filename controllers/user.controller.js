// Import the User model and the express-async-handler package
const User = require("../models/user.model.js");
const asyncHandler = require("express-async-handler");

// Controller functions for user CRUD operations

// Create a new user
exports.createUser = asyncHandler(async (req, res) => {
  console.log("Create function is hit");
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    // Handle server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all users
exports.getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    // Handle server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a user by ID
exports.getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      // Handle user not found
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    // Handle server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a user by ID
exports.updateUser = asyncHandler(async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      // Handle user not found
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    // Handle server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a user by ID
exports.deleteUser = asyncHandler(async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      // Handle user not found
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted" });
  } catch (error) {
    // Handle server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});
