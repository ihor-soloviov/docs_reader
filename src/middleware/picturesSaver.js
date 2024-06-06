const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, _file, cb) {
    const angebotId = req.params.angebot_id;
    const typeOfDirectory = req.params.dir; // Переконайтеся, що цей параметр передається у маршруті

    const angebotDir = `uploadsPictures/${angebotId}`;
    const pictureDir = `${angebotDir}/${typeOfDirectory}`;

    try {
      if (!fs.existsSync(pictureDir)) {
        fs.mkdirSync(pictureDir, { recursive: true });
      }
      cb(null, pictureDir);
    } catch (error) {
      console.error("Помилка при створенні директорій:", error);
      cb(error);
    }
  },
  filename: function (_req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports = multer({ storage });
