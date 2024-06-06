const Router = require("express");
const fileRouter = new Router();
const upload = require("../middleware/uploads");
const picturesStore = require("../middleware/picturesSaver");
const filesController = require("../controllers/files.controller");
const databaseController = require("../controllers/modules.controller");


fileRouter.post("/sendFile", upload.single("docxFile"), filesController.pvSolFileParser);

fileRouter.post(
  "/mainImage/:angebot_id/:dir",
  picturesStore.single("mainImage"), filesController.fileSaver);

fileRouter.post(
  "/additionalImage/:angebot_id/:dir", picturesStore.single("additionalImage"), filesController.fileSaver);

fileRouter.get("/create", filesController.generateAngebot);




fileRouter.post("/addComponent", databaseController.addComponent);


module.exports = fileRouter;