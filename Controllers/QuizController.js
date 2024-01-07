const quizModal = require("../Models/QuizModal");

exports.getQuizPage = (req, res, next) => {
  const title = req.params.title;
  const quiz = new quizModal(title);
  const data = quiz.getCurrentQuiz();
  const user = req.cookies.user;
  res.render("quiz.ejs", {
    title: "Quiz",
    path: "quiz",
    userName: user.name,
    data: data[title],
  });
};
