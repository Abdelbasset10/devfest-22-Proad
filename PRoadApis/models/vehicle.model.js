const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const vehicle = sequelize.define(
        'vehicle', {
            matricule: {
                type: DataTypes.STRING,
                allowNull: false
            },
            xPosition: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            yPosition: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'available'
            }
        }, {
            timestamps: false
        }
    )
    return vehicle
}