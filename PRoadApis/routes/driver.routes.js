//const { authJwt } = require("../middleware");
const controller = require("../controllers/driver.controller");
module.exports = function(app) {

    app.get("/api/drivers/all", controller.getDrivers)
    app.get('/api/driver/:id', controller.getDriver)
    app.post('/api/driver/create', controller.addDriver)
    app.put('/api/driver/edit/:id', controller.editDriver)
    app.delete('/api/driver/delete/:id', controller.deleteDriver)
};