const config = require('../config/db.config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
})

sequelize.authenticate()
    .then(console.log('Connection established successfully'))
    .catch(err => console.log(err))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.destination = require('./destination.model')(sequelize, Sequelize)
db.pannel = require('./pannel.model')(sequelize, Sequelize)
db.vehicle = require('./vehicle.model')(sequelize, Sequelize)
db.driver = require('./driver.model')(sequelize, Sequelize)
db.category = require('./category.model')(sequelize, Sequelize)

db.category.hasMany(db.vehicle, {
    foreignKey: 'service'
})
db.vehicle.hasMany(db.driver, {
    foreignKey: 'vehicleDriving'
})
db.vehicle.hasOne(db.destination, {
    foreignKey: 'vehicleResponsible'
})
db.category.hasOne(db.destination, {
    foreignKey: 'EmergencyType'
})


module.exports = db