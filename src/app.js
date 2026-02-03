require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use("/api/v1", routes);

//Error Middleware

app.use(errorMiddleware);

module.exports  = app;

