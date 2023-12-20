// Import the dotenv library to load environment variables from a .env file
require("dotenv").config();

// Export an object containing environment variables for use in other modules
module.exports = {
  // Port number for the server
  PORT: process.env.PORT,

  // Database name for MongoDB
  DB_NAME: process.env.DB_NAME,

  // Database user for MongoDB
  DB_USER: process.env.DB_USER,

  // Database password for MongoDB
  DB_PASS: process.env.DB_PASS,
};
