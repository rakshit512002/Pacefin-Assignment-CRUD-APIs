// Import necessary packages and modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/db"); // this file contains the database configuration
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/user.routes.js");
const app = express();

// Database connection setup
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected!");
});

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Body Parser middleware for handling JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Morgan middleware for logging HTTP requests
app.use(morgan("short"));

// API routes setup
app.use("/api", routes);

// Default route for the root URL
app.get("/", (req, res) => {
  console.log("Pacefin Assignment");
  res.send("Pacefin Assignment");
});

// Catch-all route for undefined routes
app.use("*", (req, res) => {
  res.send("Route not found");
});

// Define the port for the server to listen on, use environment variable PORT or default to 3000
let PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
