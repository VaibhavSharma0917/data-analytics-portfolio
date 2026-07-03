import express from "express";
import {
  adminHome,
  loginAdmin,
  uploadResume,
} from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", adminHome);
router.post("/login", loginAdmin);

// Protected Routes
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Admin Dashboard 🚀",
    admin: req.admin,
  });
});

// Upload Resume
router.post(
  "/upload-resume",
  authMiddleware,
  upload.single("resume"),
  uploadResume
);

export default router;