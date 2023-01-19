const Role = require('../models/roles/role');
const UsersRoles = require('../models/roles/users-roles');

class RoleRepository {
    static async createRole(roleObject) {
        return Role.create({
            name: roleObject.name,
        });
    }

    static async readListOfRoles() {
        return Role.findAll({
            raw: true,
        });
    }

    static async readRoleByID(roleID) {
        return Role.findOne({
            attributes: ['id', 'name'],
            where: {
                id: roleID,
            },
        });
    }

    static async readRoleByName(roleName) {
        return Role.findOne({
            attributes: ['id', 'name'],
            where: {
                name: roleName,
            },
        });
    }

    static async updateRoleByID(roleID, roleObject) {
        const role = await Role.findByPk(roleID);
        return role.update({
            name: roleObject.name,
        });
    }

    static async deleteRoleByID(roleID) {
        await Role.destroy({
            where: {
                id: roleID,
            },
        });
    }

    static async isRoleGivenToUser(userID, roleID) {
        const entry = await UsersRoles.findOne({
            with: {
                userId: userID,
                roleId: roleID,
            },
        });
        return !!entry;
    }

    static async giveRoleToUser(userID, roleID) {
        await UsersRoles.create({
            userId: userID,
            roleId: roleID,
        });
    }

    static async revokeRoleFromUser(userID, roleID) {
        await UsersRoles.destroy({
            where: {
                userId: userID,
                roleId: roleID,
            },
        });
    }
}

module.exports = RoleRepository;
