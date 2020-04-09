require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const trackRouts = require("./routes/trackRoutes");
const requireAuth = require("./midllewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRouts);

const mongoUri =
  "mongodb+srv://admin:rocketman@cluster0-l8a26.mongodb.net/test?retryWrites=true&w=majority";
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

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Lisning on port 3000");
});
