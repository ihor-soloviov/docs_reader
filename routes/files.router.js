const Router = require("express");
const router = new Router();
const upload = require("../middleware/uploads");
const mainPicStor = require("../middleware/picturesSaver");
const filesController = require("../controllers/files.controller");
const databaseController = require("../controllers/database.controller");

router.post(
  "/sendFile",
  upload.single("docxFile"),
  filesController.getDataFromDocx
);
router.post("/mainImage", mainPicStor.single("mainImage"), (req, res) => {
  res.send("Файл успішно завантажено");
});
router.post("/addRow", databaseController.addRow);
router.get("/getTable", databaseController.getDataFromTable);
router.post("/addDataToColumn", databaseController.addDataToColumn);
router.delete("/deleteRow", databaseController.deleteRow);

module.exports = router;
