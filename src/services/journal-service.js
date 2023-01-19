const JournalRepository = require('../repositories/journal-repository');

class JournalService {
    static async getList(userID, fromTimestamp, toTimestamp) {
        return JournalRepository.getList(userID, fromTimestamp, toTimestamp);
    }

    static async create(userID, personalInfo) {
        return JournalRepository.create(userID, personalInfo);
    }

    static async deleteByID(entryID) {
        return JournalRepository.deleteByID(entryID);
    }
}

module.exports = JournalService;
