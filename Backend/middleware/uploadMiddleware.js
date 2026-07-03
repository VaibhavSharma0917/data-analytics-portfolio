import multer from "multer";
import path from "path";

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    if (file.fieldname === "image") {
      cb(null, "uploads/projects");
    }

    else if (file.fieldname === "resume") {
      cb(null, "uploads/resume");
    }

  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
});

export default upload;