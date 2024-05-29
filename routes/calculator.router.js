const Router = require("express");
const calcController = require("../controllers/database.controller");

const calcRouter = new Router()

calcRouter.get("/getModules", calcController.getModules);
calcRouter.get("/getModulesByTable", calcController.getModulesByTable);
calcRouter.get('/getServices', calcController.getServices)
calcRouter.get('/getServicesBySection/:section', calcController.getServicesBySection)
calcRouter.post("/dataToGenerator", calcController.saveAngebotInfo);

module.exports = calcRouter