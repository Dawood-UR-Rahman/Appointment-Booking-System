require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve uploaded files as static content
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

//Routes
app.use("/api/v1", routes);

//Error Middleware

app.use(errorMiddleware);

module.exports  = app;

