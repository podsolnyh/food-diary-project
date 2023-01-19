const User = require('../models/users/user');
const Profile = require('../models/users/profile');
const Role = require('../models/roles/role');
const bcrypt = require('bcryptjs');

class UserRepository {
    static async create(personalInfo) {
        const salt = bcrypt.genSaltSync(3);
        const password = personalInfo.password;

        return User.create({
            username: personalInfo.username,
            email: personalInfo.email,
            password: bcrypt.hashSync(password, salt),
            profile: {
                firstName: personalInfo.profile.firstName,
                age: personalInfo.profile.age,
                gender: personalInfo.profile.gender,
                lifestyle: personalInfo.profile.lifestyle,
                weight: personalInfo.profile.weight,
                height: personalInfo.profile.height,
                desiredHeight: personalInfo.profile.desiredHeight,
            },
        });
    }

    static async readList() {
        return User.findAll({
            attributes: ['id', 'username', 'email'],
            include: [
                {
                    model: Role,
                    as: 'roles',
                    // Excluded UsersRoles mapping object from results, cool!
                    // https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object
                    through: { attributes: [] },
                },
                {
                    model: Profile,
                    as: 'profile',
                    through: { attributes: [] },
                },
            ],
        });
    }

    static async updateCredentialsByUserID(userID, personalInfo) {
        const user = await User.findByPk(userID);
        const salt = bcrypt.genSaltSync(3);
        const password = personalInfo.password;

        return user.update({
            username: personalInfo.username,
            email: personalInfo.email,
            password: bcrypt.hashSync(password, salt),
        });
    }

    static async updateProfileByUserID(userID, personalInfo) {
        const profile = await Profile.findOne({ where: { userID } });
        return profile.update({
            firstName: personalInfo.firstName,
            age: personalInfo.age,
            gender: personalInfo.gender,
            lifestyle: personalInfo.lifestyle,
            weight: personalInfo.weight,
            height: personalInfo.height,
            desiredHeight: personalInfo.desiredHeight,
        });
    }

    static async deleteByID(userID) {
        const user = await User.findByPk(userID);
        await user.destroy();
    }

    static async readByID(userId) {
        return User.findOne({
            attributes: ['id', 'username', 'email'],
            where: { id: userId },
            include: [
                {
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                },
                {
                    model: Profile,
                    as: 'profile',
                    through: { attributes: [] },
                },
            ],
        });
    }

    static async readByEMail(email) {
        return User.findOne({
            attributes: ['id', 'username', 'email', 'password'],
            where: { email: email },
            include: [
                {
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                },
                {
                    model: Profile,
                    as: 'profile',
                    through: { attributes: [] },
                },
            ],
        });
    }

    static async readByUsername(username) {
        return User.findOne({
            attributes: ['id', 'username', 'email', 'password'],
            where: { username: username },
            include: [
                {
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                },
                {
                    model: Profile,
                    as: 'profile',
                    through: { attributes: [] },
                },
            ],
        });
    }
}

module.exports = UserRepository;
