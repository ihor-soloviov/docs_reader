const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = path.resolve(__dirname, "../../uploads/uploadsDocx");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports = multer({ storage });
