const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const Role = sequelize.define(
    'role',
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
    },
    {
        tableName: 'role',
        indexes: [{ unique: true, fields: ['name'] }],
        timestamps: false,
    },
);

module.exports = Role;
