const express = require("express");
const registerController = require("../Controllers/RegisterController");
const loginController = require("../Controllers/LoginController");
const DashboardController = require("../Controllers/DashboardController");
const QuizController = require("../Controllers/QuizController");
const Auth = require("../Middlewares/AuthGuard");
const AdminController = require("../Controllers/AdminController");
const validate = require("../Models/ValidateModal");

const router = express.Router();

router.get("/register", registerController.getRegisterPage);

router.get("/login", loginController.getLoginPage);

router.post("/register", registerController.studentRegister);

router.post("/login", loginController.studentLogin);

router.get("/", Auth.authGuard, DashboardController.getDashBoard);

router.get("/logout", loginController.studentLogout);

router.get("/admin", Auth.authGuard, AdminController.getAdminPage);

router.post("/add", AdminController.addQuiz);

router.post("/validate", (req, res, next) => {
  req.body.userId = req.cookies.user.stud_id;
  const ValidateQuiz = new validate(req.body);
  const currentScore = ValidateQuiz.getQuizScore();
  console.log(currentScore);
});

router.get("/:title", Auth.authGuard, QuizController.getQuizPage);

module.exports = router;
