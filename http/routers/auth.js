const router = require("express").Router();
const authController = require("../controllers/authController");
const authUser = require("../middlewares/authUser");

// Register
router.post("/register", authController.register);
// Login
router.post("/login", authController.login);
router.delete("/:id", authController.userDelete);
router.get("/logout", authUser, authController.logout);

// Change Password
router.post("/changepassword", authUser, authController.changePassword);

module.exports = router;
