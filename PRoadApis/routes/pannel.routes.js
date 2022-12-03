//const { authJwt } = require("../middleware");
const controller = require("../controllers/pannels.controller");
module.exports = function(app) {

    app.get("/api/pannels/all", controller.getpannels);
    app.get('/api/pannel/:x/:y', controller.getpannel)
        //app.post('/api/vehicle/create', controller.addVehicle)
        //app.put('/api/vehicle/edit/:id', controller.editVehicle)
        //app.delete('/api/vehicle/delete/:id', controller.deleteVehicle)
};