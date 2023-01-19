const AuthService = require('../services/auth-service');
const UserService = require('../services/user-service');

const ResponseFormat = require('../helpers/response-format');

class AuthController {
    // #swagger.description = 'registers a user'
    // #swagger.parameters['username'] = {
    //  in: 'query',
    //  required: true,
    //  type: 'string'
    // }
    // #swagger.parameters['email'] = {
    //  in: 'query',
    //  required: true,
    //  type: 'string'
    // }
    // #swagger.parameters['password'] = {
    //  in: 'query',
    //  required: true,
    //  type: 'string'
    // }
    // #swagger.parameters['profile'] = {
    //  in: 'query',
    //  required: true,
    //  type: 'object'
    // }
    // #swagger.responses[200] = {
    //  description: 'user registrated successfully'
    // }
    static async register(req, res) {
        const userObject = await UserService.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json(
            ResponseFormat.success(200, 'Registered successfully', userObject),
        );
    }

    // #swagger.description = 'authorizes a user'
    // #swagger.parameters['username'] = {
    //  in: 'query',
    //  required: true,
    //  type: 'string'
    // }
    // #swagger.parameters['email'] = {
    //  in: 'query',
    //  required: true,
    //  type: 'string'
    // }
    // #swagger.parameters['password'] = {
    //  in: 'query',
    //  required: true,
    //  type: 'string'
    // }
    // #swagger.responses[200] = {
    //  description: 'user auth successfully'
    // }
    static async login(req, res) {
        const loginFunction = req.body.email
            ? AuthService.loginWithEmailAndPassword
            : AuthService.loginWithUsernameAndPassword;
        const login = req.body.email ? req.body.email : req.body.username;

        const token = await loginFunction(login, req.body.password);

        const sec = 1000;
        const min = 60 * sec;
        const hour = 60 * min;

        res.cookie('jwt', token, {
            maxAge: 2 * hour,
        });

        res.status(200).json(
            ResponseFormat.success(200, 'Logged in successfully', { token }),
        );
    }

    // #swagger.description = 'logs out a user'
    // #swagger.responses[200] = {
    //  description: 'user logged out successfully'
    // }
    static async logout(req, res) {
        req.logout();
        res.clearCookie('jwt');
        res.status(200).json(
            ResponseFormat.success(200, 'Logged out successfully', {}),
        );
    }
}

module.exports = AuthController;
