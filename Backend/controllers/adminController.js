import pool from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const adminHome = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Admin Controller 🚀",
  });
};

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username exists
    const [rows] = await pool.execute(
      "SELECT * FROM admin WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const admin = rows[0];

    // Compare entered password with hashed password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: admin.id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Login Successful
    res.status(200).json({
      success: true,
      message: "Login Successful ✅",
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Upload Resume
export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume file",
      });
    }

    res.status(200).json({
      success: true,
      message: "Resume Uploaded Successfully ✅",
      file: req.file.filename,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

