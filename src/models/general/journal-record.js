const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const JournalRecord = sequelize.define(
    'journalRecord',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        mealType: {
            type: DataTypes.ENUM('breakfast', 'lunch', 'dinner', 'snack'),
            field: 'meal_type',
            allowNull: false,
        },
        date: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
    },
    {
        tableName: 'journal_record',
        timestamps: false,
    },
);

module.exports = JournalRecord;
