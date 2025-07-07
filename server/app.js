const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

const startServer = async () => {
  app.listen(5050, console.log("server running.... "));
};

startServer();
