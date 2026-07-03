import pool from "../config/db.js";

// Add Project
export const addProject = async (req, res) => {
  try {
    const { title, description, github, live_demo } = req.body;

    // Image uploaded by Multer
    const image = req.file ? req.file.filename : null;

    const query = `
      INSERT INTO projects
      (title, description, image, github, live_demo)
      VALUES (?, ?, ?, ?, ?)
    `;

    await pool.execute(query, [
      title,
      description,
      image,
      github,
      live_demo,
    ]);

    res.status(201).json({
      success: true,
      message: "Project Added Successfully ✅",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Projects
export const getAllProjects = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM projects ORDER BY created_at DESC"
    );

    res.status(200).json({
      success: true,
      projects: rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update Project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, github, live_demo } = req.body;

    await pool.execute(
      `UPDATE projects
       SET title = ?, description = ?, image = ?, github = ?, live_demo = ?
       WHERE id = ?`,
      [title, description, image, github, live_demo, id]
    );

    res.status(200).json({
      success: true,
      message: "Project Updated Successfully ✅",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.execute(
      "DELETE FROM projects WHERE id = ?",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Project Deleted Successfully ✅",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};