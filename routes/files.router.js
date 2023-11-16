const Router = require("express");
const router = new Router();
const upload = require("../middleware/uploads");
const filesController = require("../controllers/files.controller");

router.post("/sendFile",upload.single('docxFile'), filesController.getDataFromDocx);

module.exports = router;