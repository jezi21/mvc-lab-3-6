const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const errorRoutes = require("./routes/error");

const PORT = 3000;
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

// Skonfiguruj sesję

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("*", errorRoutes);

app.listen(PORT, () => {
  console.log(`Server
      is running on http://localhost:${PORT}`);
});
