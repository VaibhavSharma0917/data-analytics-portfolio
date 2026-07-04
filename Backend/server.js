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

// ========================
// HOME ROUTE
// ========================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

// ========================
// DEBUG ROUTE
// ========================
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Test Successful ✅",
  });
});

// ========================
// DIRECT ROUTE TESTS
// ========================
app.get("/api/admin", (req, res) => {
  res.json({
    success: true,
    message: "Direct Admin Route Working ✅",
  });
});

app.get("/api/project", (req, res) => {
  res.json({
    success: true,
    message: "Direct Project Route Working ✅",
  });
});

app.get("/api/message", (req, res) => {
  res.json({
    success: true,
    message: "Direct Message Route Working ✅",
  });
});

// ========================
// ORIGINAL ROUTERS
// ========================

// COMMENT THESE OUT FOR NOW

// app.use("/api/admin", adminRoutes);
// app.use("/api/project", projectRoutes);
// app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});