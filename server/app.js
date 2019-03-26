const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const errorhandler = require("errorhandler");
var notifier = require("node-notifier");

mongoose.promise = global.Promise;

const app = express();

//Configure production env/error handler
if (process.env.NODE_ENV !== "production") {
  // only use in development
  app.use(errorhandler({ log: errorNotification }));
}

function errorNotification(err, str, req) {
  const title = "Error in " + req.method + " " + req.url;

  notifier.notify({
    title: title,
    message: str
  });
}

app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "auth",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

//Configure Mongoose
mongoose.connect("mongodb://localhost/authentication");
mongoose.set("debug", true);

//Models/routes
require("./models/Users");
require("./models/Posts");
require("./models/Feed");
require("./models/Participants");
require("./models/Comment");
require("./config/passport");
app.use(require("./routes"));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
