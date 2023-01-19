const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const Profile = sequelize.define(
    'profile',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'first_name',
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false,
        },
        lifestyle: {
            type: DataTypes.ENUM(
                'passive',
                'moderate',
                'average',
                'high',
                'athlete',
            ),
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        desiredWeight: {
            type: DataTypes.FLOAT,
            field: 'desired_weight',
            allowNull: false,
        },
    },
    {
        tableName: 'profile',

        paranoid: true,

        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: true,
    },
);

module.exports = Profile;
