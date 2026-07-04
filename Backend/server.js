import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/adminRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

// API Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Test Successful ✅",
  });
});

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/message", messageRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});