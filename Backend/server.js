import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/adminRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

// Debug Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Test Successful ✅",
  });
});

// ===============================
// ORIGINAL ROUTES (RESTORED)
// ===============================

app.use("/api/admin", adminRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});