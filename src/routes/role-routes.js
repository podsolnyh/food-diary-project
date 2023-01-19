const Router = require('express').Router;
const router = Router();

const RoleController = require('../controllers/role-controller');

const validator = require('../middlewares/validator');
const schemas = require('../schemas/role-schemas');

router.post('/', validator(schemas.create), RoleController.createRole);
router.get(
    '/',
    validator(schemas.getListOfRoles),
    RoleController.getListOfRoles,
);

router.get('/:id', validator(schemas.readByID), RoleController.getRoleByID);
router.put('/:id', validator(schemas.updateByID), RoleController.editRoleByID);
router.delete(
    '/:id',
    validator(schemas.deleteByID),
    RoleController.deleteRoleByID,
);

module.exports = router;
