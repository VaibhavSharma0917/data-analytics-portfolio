import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/adminRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Uploaded Files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/message", messageRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});