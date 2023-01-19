const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const Recipe = sequelize.define(
    'recipe',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        ingredientWeight: {
            type: DataTypes.FLOAT,
            field: 'ingredient_weight',
            allowNull: false,
        },
    },
    {
        tableName: 'recipe',
        paranoid: true,
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: true,
    },
);

module.exports = Recipe;
