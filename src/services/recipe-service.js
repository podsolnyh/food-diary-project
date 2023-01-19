const RecipeRepository = require('../repositories/recipe-repository');
const DishRepository = require('../repositories/dish-repository');
const { ForbiddenException } = require('../classes/errors/4xx');

class RecipeService {
    static async addIngredient(dishID, personalInfo, userID = null) {
        const dish = await DishRepository.readByID(dishID);
        if (dish.isRequest && dish.requestedBy !== userID) {
            throw new ForbiddenException('Not your request');
        }
        return RecipeRepository.addIngredient(dishID, {
            ingredientId: personalInfo.ingredientId,
            ingredientWeight: personalInfo.ingredientWeight,
        });
    }

    static async listIngredients(dishId) {
        return RecipeRepository.readEIngredients(dishId);
    }

    static async deleteIngredient(entryID) {
        RecipeRepository.removeIngredient(entryID);
    }
}

module.exports = RecipeService;
