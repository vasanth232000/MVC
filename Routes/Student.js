const express = require("express");
const registerController = require("../Controllers/RegisterController");
const loginController = require("../Controllers/LoginController");
const DashboardController = require("../Controllers/DashboardController");
const Auth = require("../Middlewares/AuthGuard");

const router = express.Router();

router.get("/register", registerController.getRegisterPage);

router.get("/login", loginController.getLoginPage);

router.post("/register", registerController.studentRegister);

router.post("/login", loginController.studentLogin);

router.get("/", Auth.authGuard, DashboardController.getDashBoard);

module.exports = router;
