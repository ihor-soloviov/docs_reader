const Router = require("express");
const router = new Router();
const upload = require("../middleware/uploads");
const picturesStore = require("../middleware/picturesSaver");
const filesController = require("../controllers/files.controller");
const databaseController = require("../controllers/database.controller");
const generatePDF = require("../utils/puppeteer");

router.post(
  "/sendFile",
  upload.single("docxFile"),
  filesController.getDataFromDocx
);

router.post(
  "/mainImage/:angebot_id/:dir",
  picturesStore.single("mainImage"),
  (req, res) => {
    res.send("Файл успішно завантажено");
  }
);

router.post(
  "/additionalImage/:angebot_id/:dir",
  picturesStore.single("additionalImage"),
  (req, res) => {
    res.send("Файл успішно завантажено");
  }
);

router.get("/create", async (req, res) => {
  try {
    await generatePDF("123");

    res.send("done");
  } catch (error) {
    console.log(error);
  }
});

router.post("/dataToGenerator", databaseController.saveAngebotInfo);
router.post("/addRow", databaseController.addRow);
router.get("/getTable", databaseController.getDataFromTable);
router.post("/addDataToColumn", databaseController.addDataToColumn);
router.delete("/deleteRow", databaseController.deleteRow);

module.exports = router;
