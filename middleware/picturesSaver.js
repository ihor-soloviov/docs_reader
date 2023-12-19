const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const angebotId = req.body.angebot_id;
    const angebotDir = `uploadsPictures/${angebotId}`;
    const mainPictureDir = `${angebotDir}/mainPicture`;

    // Створення піддиректорій, якщо вони не існують
    try {
      if (!fs.existsSync(angebotDir)) {
        fs.mkdirSync(angebotDir, { recursive: true });
      }
      if (!fs.existsSync(mainPictureDir)) {
        fs.mkdirSync(mainPictureDir, { recursive: true });
      }
      cb(null, mainPictureDir);
    } catch (error) {
      console.error("Помилка при створенні директорій:", error);
      cb(error);
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Використання оригінального імені файлу
  },
});

const mainPicStor = multer({ storage });

module.exports = mainPicStor