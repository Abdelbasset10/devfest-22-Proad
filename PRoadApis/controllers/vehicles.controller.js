const db = require("../models");
const vehicle = db.vehicle;

exports.getVehicles = (req, res) => {
  vehicle
    .findAll()
    .then((vehicles) => {
      res.status(200).json({
        status: true,
        data: vehicles,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};

exports.getVehicle = (req, res) => {
  vehicle
    .findOne({ where: { matricule: req.params.matricule } })
    .then((vehicle) => {
      res.status(200).json({
        status: true,
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};

exports.getAmbulance = (req, res) => {
  vehicle
    .findAll({ where: { service: 1 } })
    .then((vehicle) => {
      res.status(200).json({
        status: true,
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};

exports.getFireTrucks = (req, res) => {
  vehicle
    .findAll({ where: { service: 2 } })
    .then((vehicle) => {
      res.status(200).json({
        status: true,
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};

exports.getAirCrafts = (req, res) => {
  vehicle
    .findAll({ where: { service: 3 } })
    .then((vehicle) => {
      res.status(200).json({
        status: true,
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};

exports.getAvailbleVehicule = (req, res) => {
  vehicle
    .findAll({ where: { state: "available" } })
    .then((vehicle) => {
      res.status(200).json({
        status: true,
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};
exports.getOutVehicule = (req, res) => {
  vehicle
    .findAll({ where: { state: "out" }})
    .then((vehicle) => {
      res.status(200).json({
        status: true,
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};
exports.getMissionVehicule = (req, res) => {
  vehicle
    .findAll({ where: { state: "mission" }})
    .then((vehicle) => {
      res.status(200).json({
        status: true,
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to fetch data",
        errors: err,
        status: 400,
      });
    });
};

exports.addVehicle = (req, res) => {
  vehicle
    .create({
      matricule: req.body.matricule,
      localisation: 0,
      service: 2,
    })
    .then((vehicle) => {
      res.status(200).send({
        status: 200,
        message: "Data Save Successfully",
        data: vehicle,
      });
    })
    .catch((err) => {
      return res.status(400).send({
        message: "Cannot create vehicle",
        errors: err,
        status: 400,
      });
    });
};

exports.editVehicle = (req, res) => {
  console.log("updating");
  vehicle
    .update(
      {
        state: req.body.state,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((vehicle) => {
      console.log("Vehicle Updated");
      res.status(200).send({
        message: "Vehicle Updated",
        status: 200,
        data: vehicle,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({
        message: "Cannot Update Vehicle",
        status: 400,
        errors: err,
      });
    });
};

exports.deleteVehicle = (req, res) => {
  console.log("Deleting");
  vehicle
    .destroy({ where: { id: req.params.id } })
    .then((vehicle) => {
      console.log("Vehicle Deleted");
      res.status(200).send({
        message: "Vehicle Deleted",
        status: 200,
        data: vehicle,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({
        message: "Cannot Delete Vehicle",
        status: 400,
        errors: err,
      });
    });
};
