const Router = require("express");
const modulesController = require("../controllers/modules.controller");

const modulesRouter = new Router()

modulesRouter.get("/getModules", modulesController.getModules);
modulesRouter.get("/getModulesByTable", modulesController.getModulesByTable);
modulesRouter.get('/getServices', modulesController.getServices)
modulesRouter.get('/getServicesBySection/:section', modulesController.getServicesBySection)
modulesRouter.post("/dataToGenerator", modulesController.saveAngebotInfo);

module.exports = modulesRouter