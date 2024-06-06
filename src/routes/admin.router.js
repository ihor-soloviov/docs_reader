const Router = require("express");
const adminController = require("../controllers/admin.controller");

const adminRouter = new Router()

adminRouter.post('/addService', adminController.addService);
adminRouter.post('/addServices', adminController.addServices)
adminRouter.patch('/changePrice', adminController.changePrice)
adminRouter.post("/saveAngebotData", adminController.saveAngebotData);
adminRouter.get('/getAngebotData', adminController.getAngebotData)
adminRouter.get('/getProjectVersion', adminController.getNextAngebotVersion)


module.exports = adminRouter;