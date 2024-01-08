const quizModal = require("../Models/QuizModal");

exports.getAdminPage = (req, res, next) => {
  const user = req.cookies.user;
  res.render("Admin.ejs", {
    title: "Admin",
    path: "admin",
    userName: user.name,
  });
};

exports.addQuiz = (req, res, next) => {
  const quizData = [];
  const mainObj = {};
  const quizLength = parseInt(req.body.quizLength);
  for (let index = 0; index < quizLength; index++) {
    const id = index + 1;
    const quizObj = {
      id: index + 1,
      question: req.body.questions[index],
      answer: req.body[`answer${id}`],
      choices: req.body[`choice${id}`],
      score: parseInt(req.body.quizScore),
    };
    quizData.push(quizObj);
  }
  mainObj[req.body.quizTitle] = quizData;
  const quiz = new quizModal(mainObj);
  quiz.addQuiz();
  res.redirect("/");
};
