// Import necessary packages and modules
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

// User Routes

// Route to create a new user (POST method)
router.post("/users/create", userController.createUser);

// Route to get all users (GET method)
router.get("/users/getAll", userController.getAllUsers);

// Route to get a user by ID (GET method)
router.get("/users/:id", userController.getUserById);

// Route to update a user by ID (PUT method)
router.put("/users/:id", userController.updateUser);

// Route to delete a user by ID (DELETE method)
router.delete("/users/:id", userController.deleteUser);

// Export the router for use in other modules
module.exports = router;
