const Router = require("express");
const router = new Router();
const upload = require("../middleware/uploads");
const filesController = require("../controllers/files.controller");
const databaseController = require("../controllers/database.controller");

router.post(
  "/sendFile",
  upload.single("docxFile"),
  filesController.getDataFromDocx
);
router.post("/addRow", databaseController.addRow);

module.exports = router;
