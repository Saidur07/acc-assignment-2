const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());

//routes
const mainRoute = require("./routes/tour.route");

app.get("/", (req, res) => {
  res.send("Welcome to my assignment 2");
});

// posting to database

app.use("/api/v1", mainRoute);

module.exports = app;
