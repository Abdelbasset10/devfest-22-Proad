const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const destination = sequelize.define(
        'destination', {
            localisation: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false
        }
    )
    return destination
}