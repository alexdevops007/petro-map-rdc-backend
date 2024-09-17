const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Routes pour l'authentification
router.post("/login", authController.login);
router.post("/logout", authMiddleware, authController.logout);

module.exports = router;
