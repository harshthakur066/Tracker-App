const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://admin:homealone@cluster0-gpnce.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connenting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("Lisning on port 3000");
});
