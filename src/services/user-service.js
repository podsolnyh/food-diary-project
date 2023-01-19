const UserRepository = require('../repositories/user-repository');
const {
    ConflictException,
    NotFoundException,
} = require('../classes/errors/4xx');

class UserService {
    static async create(personalInfo) {
        const userWithGivenEmail = await UserRepository.readByEMail(
            personalInfo.email,
        );
        const userWithGivenUsername = await UserRepository.readByUsername(
            personalInfo.username,
        );

        if (userWithGivenEmail) {
            throw new ConflictException('This email is already in use');
        }
        if (userWithGivenUsername) {
            throw new ConflictException('This username is already in use');
        }

        return UserRepository.create(personalInfo);
    }

    static async readList() {
        return UserRepository.readList();
    }

    static async readByID(userID) {
        const user = await UserRepository.readByID(userID);
        if (!user) {
            throw new NotFoundException('User is not found');
        }
        return user;
    }

    static async updateCredentialsByID(userID, personalInfo) {
        const user = await UserRepository.readByID(userID);
        if (!user) {
            throw new NotFoundException('User is not found');
        }
        return UserRepository.updateCredentialsByUserID(userID, personalInfo);
    }
    static async updateProfileByID(userID, personalInfo) {
        const user = await UserRepository.readByID(userID);
        if (!user) {
            throw new NotFoundException('User is not found');
        }
        return UserRepository.updateProfileByUserID(userID, personalInfo);
    }

    static async deleteByID(userID) {
        const user = await UserRepository.readByID(userID);
        if (!user) {
            throw new NotFoundException('User is not found');
        }
        await UserRepository.deleteByID(userID);
    }
}

module.exports = UserService;
