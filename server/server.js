const express = require("express");

const app = express();
const Article = require("./models/Article");
const User = require("./models/User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  if (req.headers.authorization) {
    req.user = await User.getUserById(parseInt(req.headers.authorization));
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(require("./routes/security"));
app.use(require("./routes/article"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
