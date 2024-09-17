const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const authMiddleware = require("../middlewares/authMiddleware");
// const roleMiddleware = require("../middlewares/roleMiddleware");

// Routes for user management
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

/*

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["Admin"]),
  userController.createUser
);
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["Admin", "Supervisor"]),
  userController.getAllUsers
);
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(["Admin", "Supervisor"]),
  userController.getUserById
);
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  userController.updateUser
);
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  userController.deleteUser
);

*/

module.exports = router;
