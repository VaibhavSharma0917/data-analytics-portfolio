import express from "express";

import {
  addProject,
  getAllProjects,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Route
router.get("/", getAllProjects);

// Protected Routes
router.post("/", authMiddleware, addProject);

router.put("/:id", authMiddleware, updateProject);

router.delete("/:id", authMiddleware, deleteProject);

export default router;


