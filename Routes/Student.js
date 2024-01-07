const express = require("express");
const registerController = require("../Controllers/RegisterController");
const loginController = require("../Controllers/LoginController");
const DashboardController = require("../Controllers/DashboardController");
const QuizController = require("../Controllers/QuizController");
const Auth = require("../Middlewares/AuthGuard");
const AdminController = require("../Controllers/AdminController");

const router = express.Router();

router.get("/register", registerController.getRegisterPage);

router.get("/login", loginController.getLoginPage);

router.post("/register", registerController.studentRegister);

router.post("/login", loginController.studentLogin);

router.get("/", Auth.authGuard, DashboardController.getDashBoard);

router.get("/logout", loginController.studentLogout);

router.get("/admin", Auth.authGuard, AdminController.getAdminPage);

router.post("/add", (req, res, next) => {
  console.log(req.body);
});

router.get("/:title", Auth.authGuard, QuizController.getQuizPage);

module.exports = router;
