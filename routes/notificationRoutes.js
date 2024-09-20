const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const authMiddleware = require("../middlewares/authMiddleware");

// Routes pour récupérer toutes les notifications et marquer comme lu
router.get("/", authMiddleware, notificationController.getNotifications);
router.put("/:id", authMiddleware, notificationController.markAsRead);

module.exports = router;
