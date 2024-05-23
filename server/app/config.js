// Load the express module to create a web application

const express = require("express");

const app = express();

// ...BEAUCOUP de commentaires

// Import the API router
const apiRouter = require("./routers/api/router");

// Mount the API router under the "/api" endpoint
app.use("/api", apiRouter);

// ...BEAUCOUP de commentaires

module.exports = app;