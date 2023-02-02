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
router.get("/admin/byname", adminControllers.browseByName);
router.get("/admin/:id", verifyToken, adminControllers.read);
router.post("/user", verifyEmail, hashPassword, adminControllers.add);

// Route for login
router.post(
  "/login",
  adminControllers.getAdminByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Routes for update avatar **********************************
router.post(
  "/picture",
  verifyToken,
  uploads.single("picture"),
  fileControllers.renamePicture,
  adminControllers.updatePicture
);
router.post(
  "/avatar",
  verifyToken,
  uploads.single("avatar"),
  fileControllers.renameAvatar,
  adminControllers.updateAvatar
);

router.get("/avatar/:fileName", fileControllers.sendAvatar);
router.get("/picture/:fileName", fileControllers.sendPicture);

module.exports = router;
