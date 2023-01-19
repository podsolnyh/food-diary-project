const Dish = require('../models/food/dish');

class DishRepository {
    static async create(personalInfo, isRequest = false, requestedBy = null) {
        return Dish.create({
            name: personalInfo.name,
            isRequest,
            requestedBy,
        });
    }

    static async readByID(dishID) {
        return Dish.findByPk(dishID);
    }

    static async acceptRequest(dishID) {
        const dish = await Dish.findByPk(dishID);
        return dish.update({
            isRequest: false,
        });
    }

    static async readList(isRequest = false) {
        return Dish.findAll({
            where: { isRequest },
            include: ['id', 'name'],
        });
    }

    static async updateByID(dishID, personalInfo) {
        const dish = await Dish.findByPk(dishID);
        const result = dish.update({
            name: personalInfo.name,
        });
        delete result.isRequest;
        delete result.requestedBy;
        return result;
    }

    static async deleteByID(dishID) {
        const dish = await Dish.findByPk(dishID);
        dish.destroy();
    }
}

module.exports = DishRepository;
