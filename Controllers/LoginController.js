const notifier = require("node-notifier");
const Students = require("../Models/StudentModal");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getLoginPage = (req, res, next) => {
  res.render("Login.ejs", { title: "Login", path: "login" });
};

exports.studentLogin = (req, res, next) => {
  const stud = new Students();
  const student = stud.getStudents();
  const isStudent = student.find((std) => std.email === req.body.email);
  if (isStudent) {
    if (isStudent.password === req.body.password) {
      delete isStudent.password;
      const token = jwt.sign(isStudent, process.env.SECRCET_KEY, {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
      });
      res.redirect("/");
    } else {
      notifier.notify("Password Incorrect");
      res.redirect("/login");
    }
  } else {
    notifier.notify("User Not exist.. Please Register");
    res.redirect("/register");
  }
};

exports.studentLogout = (req, res, next) => {
  res.clearCookie("token");
  res.clearCookie("user");
  res.redirect("/login");
};
