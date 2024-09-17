const express = require("express");
const router = express.Router();
const concessionController = require("../controllers/concessionController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// Routes pour la gestion des concessions
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["Admin", "Supervisor"]),
  concessionController.createConcession
);
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["Admin", "Supervisor", "Investor"]),
  concessionController.getAllConcessions
);
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(["Admin", "Supervisor", "Investor"]),
  concessionController.getConcessionById
);
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["Admin", "Supervisor"]),
  concessionController.updateConcession
);
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  concessionController.deleteConcession
);

module.exports = router;
