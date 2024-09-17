const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const concessionRoutes = require("./concessionRoutes");
const userRoutes = require("./userRoutes");

router.use("/auth", authRoutes);
router.use("/concessions", concessionRoutes);
router.use("/users", userRoutes);

module.exports = router;
