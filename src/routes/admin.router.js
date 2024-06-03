const Router = require("express");
const adminController = require("../controllers/admin.controller");
const modulesController = require("../controllers/modules.controller");

const adminRouter = new Router()

adminRouter.post('/addService', adminController.addService);
adminRouter.post('/addServices', modulesController.addServices)
adminRouter.patch('/changePrice', adminController.changePrice)
adminRouter.post("/saveAngebotData", adminController.saveAngebotData);
adminRouter.get('/getAngebotData', adminController.getAngebotData)


module.exports = adminRouter;