# Pacefin Assignment CRUD APIs

## Description

This repository marks my submission for the Pacefin Assignment for the Bckend develper role.

Deployment Link For Testing Purposes - 
https://pacefin-assignment-crud-apis.onrender.com

I have also included the postman testing .json file for testing refrence purposes.

Here I have develop a basic RESTful API allowing CRUD (Create, Read, Update, Delete) operations on a simple
data model and integrated it with a database.

I have given special emphasis on error handling and has implement it for scenarios like invalid requests, missing data, or database
errors by using express-async-handler: Simplifies error handling in asynchronous express routes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [API Endpoints](#api-endpoints)
- [dotenv file](#dotenv-file)
- [Dependencies](#dependencies)

## Prerequisites

Ensure that you have the following prerequisites installed on your machine:

- Node.js and npm
- MongoDB
- Other dependencies...


# dotenv file

PORT=3000

DB_NAME="your-database-name"

DB_USER="your-username"

DB_PASS="your-password"


# API Endpoints
A list of the available API endpoints and a brief description of each -

POST /api/users/create: Create a new user.

GET /api/users/getAll: Retrieve a list of all users.

GET /api/users/:id: Retrieve details of a specific user by ID.

PUT /api/users/:id: Update details of a specific user.

DELETE /api/users/:id: Delete a user by ID.

# Dependencies
I have used the following dependencies to build this project - 

body-parser: Middleware to parse HTTP request bodies.

cors: Middleware for enabling Cross-Origin Resource Sharing.

dotenv: Loads environment variables from a .env file.

express: Web framework for building APIs.

express-async-handler: Simplifies error handling in asynchronous express routes.

mongoose: MongoDB object modeling for Node.js.

morgan: HTTP request logger middleware.

nodemon: Utility that monitors for changes and restarts the server.
