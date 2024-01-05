const bodyParser = require("body-parser");
const express = require("express");
const studentRouter = require("./Routes/Student");

//Intializing
const app = express();
const port = 3001;

//Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(studentRouter);

//Server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
