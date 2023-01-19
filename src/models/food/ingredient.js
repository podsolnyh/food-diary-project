const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const Ingredient = sequelize.define(
    'ingredient',
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
        calories: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        proteins: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fats: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        carbohydrates: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: 'ingredient',
        paranoid: true,
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: true,
    },
);

module.exports = Ingredient;
