const notifier = require("node-notifier");
const studentRegister = require("../Models/RegisterModal");

exports.getRegisterPage = (req, res, next) => {
  res.render("Register.ejs", { title: "Register", path: "register" });
};

exports.studentRegister = (req, res, next) => {
  if (req.body.password === req.body.rePassword) {
    const student = new studentRegister(req.body);
    student.save();
    res.redirect("/login");
    notifier.notify("Registered Successfully");
  } else {
    notifier.notify("Password Not Match");
    res.redirect("/register");
  }
};
