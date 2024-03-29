const bodyParser = require("body-parser");
const express = require("express");
const studentRouter = require("./Routes/Student");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//Intializing
const app = express();
const port = 3001;

//Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use(studentRouter);

//
app.use("/", (req, res, next) => {
  res.render("404.ejs", {
    title: "Page not found",
    path: "404",
  });
});

//Server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
