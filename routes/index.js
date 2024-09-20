const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const concessionRoutes = require("./concessionRoutes");
const mapRoutes = require("./mapRoutes");
const userRoutes = require("./userRoutes");
const notificationRoutes = require("./notificationRoutes");

router.use("/auth", authRoutes);
router.use("/concessions", concessionRoutes);
router.use("/maps", mapRoutes);
router.use("/users", userRoutes);
router.use("/notifications", notificationRoutes);  

module.exports = router;
