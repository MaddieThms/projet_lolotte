const express = require("express");

const router = express.Router();

const climberControllers = require("./controllers/climberControllers");
const adminControllers = require("./controllers/adminControllers");
const {
  verifyPassword,
  verifyToken,
  verifyEmail,
  hashPassword,
} = require("./middlewares/login");

router.get("/climbers", climberControllers.browse);
router.get("/climbers/:id", climberControllers.read);
router.put("/climbers/:id", climberControllers.edit);
router.post("/climbers", climberControllers.add);
router.delete("/climbers/:id", climberControllers.destroy);

// Routes for admin
router.get("/admin", verifyToken, adminControllers.browse);
router.get("/admin/bytoken", verifyToken, adminControllers.findByToken);
router.get("/admin/byname", adminControllers.browseByName);
router.get("/admin/:id", verifyToken, adminControllers.read);
router.post("/user", verifyEmail, hashPassword, adminControllers.add);

// Route for login
router.post(
  "/login",
  adminControllers.getAdminByEmailWithPasswordAndPassToNext,
  verifyPassword
);

module.exports = router;
