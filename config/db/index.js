// Import the mongoose library for MongoDB connection
const mongoose = require("mongoose");

// Destructure the necessary variables for MongoDB connection from the environment or configuration
const { DB_USER, DB_PASS, DB_NAME } = require("../"); // You should replace "../" with the correct path to your configuration file

// Connect to MongoDB using the provided credentials and database name
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster-testapi.gflo5zi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
);

// Export the mongoose instance for use in other modules
module.exports = mongoose;
