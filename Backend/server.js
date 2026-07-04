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

console.log("✅ Loading Admin Routes...");
app.use("/api/admin", adminRoutes);

console.log("✅ Loading Project Routes...");
app.use("/api/project", projectRoutes);

console.log("✅ Loading Message Routes...");
app.use("/api/message", messageRoutes);

// Debug Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Test Successful ✅",
  });
});

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});