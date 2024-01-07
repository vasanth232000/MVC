const quizModal = require("../Models/QuizModal");

exports.getDashBoard = (req, res, next) => {
  const quiz = new quizModal();
  const data = quiz.getDetails();
  const user = req.cookies.user;
  res.render("Dashboard.ejs", {
    title: "Dashboard",
    path: "dashboard",
    userName: user.name,
    quiz: data,
  });
};
