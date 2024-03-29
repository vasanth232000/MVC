const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authGuard = (req, res, next) => {
  const token = req.cookies.token;
  //   if (token == null) return res.redirect("/login");
  jwt.verify(token, process.env.SECRCET_KEY, (err, user) => {
    if (err) {
      res.clearCookie("token");
      res.clearCookie("user");
      return res.redirect("/login");
    } else {
      req.user = user;
      res.cookie("user", user, { httpOnly: true });
      next();
    }
  });
};
