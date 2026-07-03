import express from "express";
import {
  sendMessage,
  getAllMessages,
  deleteMessage,
} from "../controllers/messageController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Route
router.post("/", sendMessage);

// Protected Routes
router.get("/", authMiddleware, getAllMessages);
router.delete("/:id", authMiddleware, deleteMessage);

export default router;


