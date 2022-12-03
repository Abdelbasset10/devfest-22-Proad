const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const pannel = sequelize.define(
        'pannel', {
            xPosition: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            yPosition: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            }
        }, {
            timestamps: false
        }
    )
    return pannel
}