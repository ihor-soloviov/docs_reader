const Router = require("express");
const modulesController = require("../controllers/modules.controller");

const modulesRouter = new Router()

modulesRouter.get("/getComponents", modulesController.getComponents);
modulesRouter.get("/getComponentsBySection", modulesController.getComponentsBySection);
modulesRouter.get('/getServices', modulesController.getServices)
modulesRouter.get('/getServicesBySection/:section', modulesController.getServicesBySection)


module.exports = modulesRouter