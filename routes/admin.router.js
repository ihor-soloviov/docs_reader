const Router = require("express");

const adminRouter = new Router()

adminRouter.get('/usual_service/:angebot_section', adminController.getUsualServiceBySection)
