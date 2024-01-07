const quizModal = require("../Models/QuizModal");

exports.getQuizPage = (req, res, next) => {
  const title = req.params.title;
  const quiz = new quizModal(title);
  const data = quiz.getCurrentQuiz();
  const user = req.cookies.user;
  res.header("Cache-Control", "no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", "0");
  res.render("quiz.ejs", {
    title: "Quiz",
    path: "quiz",
    userName: user.name,
    data: data[title],
  });
};
