const express = require("express");
const registerController = require("../Controllers/Register");
const loginController = require("../Controllers/Login");

const router = express.Router();

router.get("/register", registerController.getRegisterPage);

router.get("/login", loginController.getLoginPage);

router.post("/register", registerController.studentRegister);

router.post("/login", loginController.studentLogin);

module.exports = router;
