const Role = require('./roles/role');
const UsersRoles = require('./roles/users-roles');
const User = require('./users/user');
const Dish = require('./food/dish');
const Ingredient = require('./food/ingredient');
const Recipe = require('./food/recipe');
const JournalRecord = require('./general/journal-record');
const Profile = require('./users/profile');

const models = {
    // Food models
    Dish,
    Ingredient,
    Recipe,

    // General models
    JournalRecord,

    // Roles models
    Role,
    UsersRoles,

    // Users models
    Profile,
    User,
};

const associate = () => {
    // Users and roles
    models.User.belongsToMany(models.Role, {
        through: models.UsersRoles,
        onDelete: 'cascade',
    });
    models.Role.belongsToMany(models.User, {
        through: models.UsersRoles,
        onDelete: 'cascade',
    });

    // Users and profiles
    models.User.hasOne(models.Profile, { onDelete: 'cascade' });
    models.Profile.belongsTo(models.User);

    // Dishes and ingredients
    models.Dish.belongsToMany(models.Ingredient, {
        through: models.Recipe,
        onDelete: 'cascade',
    });
    models.Ingredient.belongsToMany(models.Dish, {
        through: models.Recipe,
        onDelete: 'cascade',
    });

    // Journal records
    models.User.hasMany(models.JournalRecord);
    models.JournalRecord.hasOne(models.Dish);
};

module.exports = {
    ...models,
    associate,
};
