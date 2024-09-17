const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Routes pour l'authentification
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
