// Import mongoose for defining the user schema
const mongoose = require("mongoose");

// Define the user schema with required fields and unique constraints
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

// Create a User model based on the defined schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other modules
module.exports = User;
