const Router = require("express");
const router = new Router();
const upload = require("../middleware/uploads");
const picturesStore = require("../middleware/picturesSaver");
const filesController = require("../controllers/files.controller");
const databaseController = require("../controllers/database.controller");
const adminController = require("../controllers/admin.controller");
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

router.get("/getCalculatorModules", databaseController.getCalculatorModules);
router.get("/getAllModules", databaseController.getAllModules)
router.post("/dataToGenerator", databaseController.saveAngebotInfo);
router.post("/addModule", databaseController.addModule);
router.post("/addDataToColumn", databaseController.addDataToColumn);
router.delete("/deleteRow", databaseController.deleteRow);

//admin
router.get('/usual_services', adminController.getUsualServices)
router.get('/usual_service/:section', adminController.getUsualServiceBySection)
router.post('/add_usual_service', adminController.addUsualService)
router.patch('/update_usual_service', adminController.updateUsualService)

module.exports = router;