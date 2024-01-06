exports.getLoginPage = (req, res, next) => {
  res.render("Login.ejs", { title: "Login", path: "login" });
};

exports.studentLogin = (req, res, next) => {
  console.log(req.body);
};
