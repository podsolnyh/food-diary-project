const UserService = require('../services/user-service');
const RoleService = require('../services/role-service');

const ResponseFormat = require('../helpers/response-format');

class UserController {
    static async create(req, res) {
        const result = await UserService.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profile: {
                firstName: req.body.profile.first_name,
                age: req.body.profile.age,
                gender: req.body.profile.gender,
                lifestyle: req.body.profile.lifestyle,
                weight: req.body.profile.weight,
                height: req.body.profile.height,
                desiredWeight: req.body.profile.desired_weight,
            },
        });
        res.status(200).json(
            ResponseFormat.success(200, 'User is created successfully', result),
        );
    }

    static async deleteByID(req, res) {
        const result = await UserService.deleteByID(req.params.id);
        res.status(200).json(
            ResponseFormat.success(200, 'User is deleted successfully', result),
        );
    }

    static async deleteMe(req, res) {
        req.params.id = req.user;
        return UserController.deleteByID(req, res);
    }

    static async readList(req, res) {
        const result = await UserService.readList();
        res.status(200).json(
            ResponseFormat.success(200, 'Users are got successfully', result),
        );
    }

    static async readProfileByID(req, res) {
        const result = await UserService.readByID(req.params.id);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'User profile is got successfully',
                result,
            ),
        );
    }

    static async readCredentialsByID(req, res) {
        const result = await UserService.readByID(req.params.id);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'User credentials is got successfully',
                result,
            ),
        );
    }

    static async readByID(req, res) {
        const result = await UserService.readByID(req.params.id);
        res.status(200).json(
            ResponseFormat.success(200, 'User is got successfully', result),
        );
    }

    static async getMe(req, res) {
        req.params.id = req.user;
        return UserController.readByID(req, res);
    }

    static async updateProfileByID(req, res) {
        const result = await UserService.updateProfileByID(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json(
            ResponseFormat.success(200, 'User is updated successfully', result),
        );
    }

    static async updateCredentialsByID(req, res) {
        const result = await UserService.updateCredentialsByID(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json(
            ResponseFormat.success(200, 'User is updated successfully', result),
        );
    }

    static async updateProfileMe(req, res) {
        req.params.id = req.user;
        return UserController.readProfileByID(req, res);
    }

    static async updateCredentialsMe(req, res) {
        req.params.id = req.user;
        return UserController.updateCredentialsByID(req, res);
    }

    static async giveAdminRoleByID(req, res) {
        const userID = req.params.id;
        const adminRole = await RoleService.getRoleByName('admin');
        const adminRoleID = adminRole.dataValues.id;

        await RoleService.giveRoleToUser(userID, adminRoleID);

        res.status(200).json(
            ResponseFormat.success(200, 'Role is given to user', {}),
        );
    }

    static async revokeAdminRoleByID(req, res) {
        const userID = req.params.id;
        const adminRole = await RoleService.getRoleByName('admin');
        const adminRoleID = adminRole.dataValues.id;

        await RoleService.revokeRoleFromUser(userID, adminRoleID);

        res.status(200).json(
            ResponseFormat.success(200, 'Role is revoked from user', {}),
        );
    }
}

module.exports = UserController;
