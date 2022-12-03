const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define(
        'category', {
            nameCategory: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false
        }
    )
    return category
}