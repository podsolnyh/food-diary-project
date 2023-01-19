const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const Dish = sequelize.define(
    'dish',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isRequest: {
            type: DataTypes.BOOLEAN,
            field: 'is_request',
            allowNull: false,
        },
        requestedBy: {
            type: DataTypes.INTEGER,
            field: 'requested_by',
            allowNull: true,
        },
    },
    {
        tableName: 'dish',
        timestamps: true,
        createdAt: true,
        updatedAt: false,
    },
);

module.exports = Dish;
