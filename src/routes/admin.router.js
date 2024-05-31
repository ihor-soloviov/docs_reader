const Router = require("express");
const adminController = require("../controllers/admin.controller");

const adminRouter = new Router()

adminRouter.post('/addService', adminController.addService)
adminRouter.patch('/changePrice', adminController.changePrice)
adminRouter.post("/dataToGenerator", adminController.saveToMongo);


module.exports = adminRouter;