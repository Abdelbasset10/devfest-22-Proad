const db = require('../models')
const pannel = db.pannel

exports.getpannels = (req, res) => {
    pannel.findAll()
        .then(pannels => {
            res.status(200).json({
                status: true,
                data: pannels
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

exports.getpannel = (req, res) => {
    pannel.findOne({ where: { xPosition: req.params.x, yPosition: req.params.y } })
        .then(pannel => {
            res.status(200).json({
                status: true,
                data: pannel
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