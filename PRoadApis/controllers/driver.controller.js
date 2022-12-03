const db = require('../models')
const driver = db.driver
var bcrypt = require("bcryptjs");

exports.getDrivers = (req, res) => {
    driver.findAll()
        .then(drivers => {
            res.status(200).json({
                status: true,
                data: drivers
            })
        })
        .catch(err => {
            res.status(400).send({
                message: 'Unable to fetch data',
                errors: err,
                status: 400
            })
        })
}

exports.getDriver = (req, res) => {
    driver.findOne({ where: { id: req.params.id } })
        .then(driver => {
            res.status(200).json({
                status: true,
                data: driver
            })
        })
        .catch(err => {
            res.status(400).send({
                message: 'Unable to fetch data',
                errors: err,
                status: 400
            })
        })
}

exports.addDriver = (req, res) => {
    console.log("before*****")
    driver.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        license: req.body.license,
        phoneNumber: req.body.phoneNumber,
        username: `${req.body.firstName}_${req.body.lastName}`,
        password: bcrypt.hashSync(req.body.password, 8),
        vehicleDriving: req.body.vehicleDriving
    }).then((driver) => {
        console.log("created")
        res.status(200).send({
            status: 200,
            message: 'Data Save Successfully',
            data: driver
        })
    }).catch(err => {
        return res.status(400).send({
            message: 'Cannot create vehicle',
            errors: err,
            status: 400
        })
    })
}

exports.editDriver = (req, res) => {
    console.log("updating")
    driver.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            license: req.body.license,
            phoneNumber: req.body.phoneNumber,
            password: bcrypt.hashSync(req.body.password, 8),
            vehicleDriving: req.body.vehicleDriving
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(driver => {
            console.log("Driver Updated")
            res.status(200).send({
                message: 'Driver Updated',
                status: 200,
                data: driver
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({
                message: 'Cannot Update Driver',
                status: 400,
                errors: err
            })
        })
}

exports.deleteDriver = (req, res) => {
    console.log("Deleting")
    driver.destroy({ where: { id: req.params.id } })
        .then(driver => {
            console.log("Driver Deleted")
            res.status(200).send({
                message: 'Driver Deleted',
                status: 200,
                data: driver
            })
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({
                message: 'Cannot Delete Driver',
                status: 400,
                errors: err
            })
        })
}