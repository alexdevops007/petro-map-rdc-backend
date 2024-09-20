const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const authMiddleware = require("../middlewares/authMiddleware");

// Route pour récupérer les activités d'une concession
router.get("/", authMiddleware, activityController.getAllActivities);

module.exports = router;
