const express = require("express");
const multer = require("multer");

const uploads = multer({ dest: process.env.UPLOAD_DIR });

const router = express.Router();

const climberControllers = require("./controllers/climberControllers");
const adminControllers = require("./controllers/adminControllers");
const fileControllers = require("./controllers/fileControllers");

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
router.get("/admin/:id", verifyToken, adminControllers.read);
router.post("/admin", verifyEmail, hashPassword, adminControllers.add);

// Route for login
router.post(
  "/login",
  adminControllers.getAdminByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Routes for update avatar **********************************
router.post(
  "/climbers/:id/picture",
  verifyToken,
  uploads.single("picture"),
  fileControllers.renamePicture,
  climberControllers.updatePicture
);

router.put(
  "/climbers/:id/picture",
  verifyToken,
  uploads.single("picture"),
  fileControllers.renamePicture,
  climberControllers.updatePicture
);

router.get("/picture/:fileName", fileControllers.sendPicture);

module.exports = router;
