import multer from "multer";
import path from "path";
import fs from "fs";

// Create folders if they don't exist
fs.mkdirSync("uploads/projects", { recursive: true });
fs.mkdirSync("uploads/resume", { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, "uploads/projects");
    } else if (file.fieldname === "resume") {
      cb(null, "uploads/resume");
    }
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

export default multer({ storage });