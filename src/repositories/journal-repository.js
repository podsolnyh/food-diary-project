const JournalRecord = require('../models/general/journal-record');
const { Op } = require('sequelize');

class JournalRepository {
    static async getList(userID, fromTimestamp, toTimestamp) {
        return JournalRecord.findAll({
            where: {
                date: {
                    [Op.between]: (fromTimestamp, toTimestamp),
                },
                userId: userID,
            },
        });
    }

    static async create(userID, personalInfo) {
        return JournalRecord.create({
            weight: personalInfo.weight,
            mealType: personalInfo.mealType,
            userId: userID,
        });
    }

    static async deleteByID(entryID) {
        const ingredient = await JournalRecord.findByPk(entryID);
        return ingredient.destroy();
    }
}

module.exports = JournalRepository;
