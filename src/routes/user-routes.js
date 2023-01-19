const Router = require('express').Router;
const router = Router();

const admin = require('../middlewares/is-admin');

const UserController = require('../controllers/user-controller');
const rolesRouter = require('./role-routes');

const validator = require('../middlewares/validator');
const schemas = require('../schemas/user-schemas');

router.use('/roles/', admin, rolesRouter);

router.get('/', admin, validator(schemas.readList), UserController.readList);
router.post('/', admin, validator(schemas.create), UserController.create);

// Me operations is like :id operations, but applies to current authenticated user.
// As you can see in UserController, getMe and updateMe calls getByID and updateByID inside themselves.
router.get('/me', validator(schemas.readMe), UserController.getMe);
router.put(
    '/me/profile',
    validator(schemas.updateProfileMe),
    UserController.updateProfileMe,
);
router.put(
    '/me/credentials',
    validator(schemas.updateProfileMe),
    UserController.updateCredentialsMe,
);

router.get('/:id', admin, validator(schemas.readByID), UserController.readByID);
router.put(
    '/:id/profile',
    admin,
    validator(schemas.updateProfileByID),
    UserController.updateProfileByID,
);
router.put(
    '/:id/credentials',
    admin,
    validator(schemas.updateCredentialsByID),
    UserController.updateCredentialsByID,
);

router.delete('/me', validator(schemas.deleteMe), UserController.deleteMe);
router.delete(
    '/:id',
    admin,
    validator(schemas.deleteByID),
    UserController.deleteByID,
);

router.put(
    '/:id/roles/makeAdmin',
    admin,
    validator(schemas.giveAdminRoleByID),
    UserController.giveAdminRoleByID,
);
router.put(
    '/:id/roles/makeUser',
    admin,
    validator(schemas.revokeAdminRoleByID),
    UserController.revokeAdminRoleByID,
);

module.exports = router;
