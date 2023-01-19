const DishService = require('../services/dish-service');
const ResponseFormat = require('../helpers/response-format');

class DishController {
    static async createDish(req, res) {
        const dishObject = {
            name: req.body.name,
        };
        const dish = await DishService.createDish(dishObject);
        res.status(200).json(
            ResponseFormat.success(200, 'Dish is created successfully', dish),
        );
    }

    static async createDishRequest(req, res) {
        const dishObject = {
            name: req.body.name,
        };
        const dish = await DishService.createDishRequest(req.user, dishObject);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Dish request is created successfully',
                dish,
            ),
        );
    }

    static async acceptDishRequest(req, res) {
        const dish = await DishService.acceptRequest(req.body.dishId);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Dish request is created successfully',
                dish,
            ),
        );
    }

    static async getListOfDishes(req, res) {
        const dishes = await DishService.readDishList();
        res.status(200).json(
            ResponseFormat.success(
                200,
                'List of dishes is got successfully',
                dishes,
            ),
        );
    }

    static async deleteRoleByID(req, res) {
        const dishID = req.params.id;
        await DishService.deleteDish(dishID);
        res.status(200).json(
            ResponseFormat.success(200, 'Dish is deleted successfully', {}),
        );
    }
}

module.exports = DishController;
