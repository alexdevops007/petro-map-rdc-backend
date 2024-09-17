const express = require("express");
const router = express.Router();
const mapController = require("../controllers/mapController");
const authMiddleware = require("../middlewares/authMiddleware");

// Routes pour la gestion des cartes
router.get("/concessions", authMiddleware, mapController.getAllConcessions);
router.get("/concessions/:id", authMiddleware, mapController.getConcessionById);

module.exports = router;
