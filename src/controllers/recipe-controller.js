const RecipeService = require('../services/recipe-service');
const ResponseFormat = require('../helpers/response-format');

class RecipeController {
    static async addIngredient(req, res) {
        const result = await RecipeService.addIngredient(
            req.body.dishID,
            {
                ingredientId: req.body.ingredient_id,
                ingredientWeight: req.body.ingredient_weight,
            },
            req.user,
        );
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Dish ingredient is added successfully',
                result,
            ),
        );
    }

    static async deleteIngredient(req, res) {
        await RecipeService.deleteIngredient(req.body.id);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Dish ingredient is deleted successfully',
                {},
            ),
        );
    }

    static async listIngredient(req, res) {
        const result = await RecipeService.listIngredients(req.body.dish_id);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Dish ingredient list is got successfully',
                result,
            ),
        );
    }
}

module.exports = RecipeController;
