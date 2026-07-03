import pool from "../config/db.js";

// Send Message
export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const query = `
      INSERT INTO messages
      (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;

    await pool.execute(query, [
      name,
      email,
      subject,
      message,
    ]);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully ✅",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Messages
export const getAllMessages = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM messages ORDER BY created_at DESC"
    );

    res.status(200).json({
      success: true,
      messages: rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Message
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.execute(
      "DELETE FROM messages WHERE id = ?",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Message Deleted Successfully ✅",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};