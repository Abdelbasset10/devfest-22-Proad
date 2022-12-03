//const { authJwt } = require("../middleware");
const controller = require("../controllers/vehicles.controller");
module.exports = function (app) {
  app.get("/api/vehicles/all", controller.getVehicles);
  app.get("/api/vehicle/:matricule", controller.getVehicle);
  app.get("/api/ambulance", controller.getAmbulance);
  app.get("/api/firetruck", controller.getFireTrucks);
  app.get("/api/availableVehicule",controller.getAvailbleVehicule)
  app.get("/api/missionVehicule",controller.getMissionVehicule)
  app.get("/api/outVehicule",controller.getOutVehicule)
  app.get("/api/aircraft", controller.getAirCrafts);
  app.post("/api/vehicle/create", controller.addVehicle);
  app.put("/api/vehicle/edit/:id", controller.editVehicle);
  app.delete("/api/vehicle/delete/:id", controller.deleteVehicle);
};
