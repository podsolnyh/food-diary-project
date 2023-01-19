const Recipe = require('../models/food/recipe');
const Ingredient = require('../models/food/ingredient');

class RecipeRepository {
    static async readEIngredients(dishID) {
        return Recipe.findAll({
            where: { dishID },
            include: [Ingredient],
        });
    }

    static async addIngredient(dishId, personalInfo) {
        return Recipe.create({
            dishId,
            ingredientId: personalInfo.ingredientId,
            ingredientWeight: personalInfo.ingredientWeight,
        });
    }

    static async removeIngredient(entryId) {
        const entry = await Recipe.findByPk(entryId);
        return entry.destroy();
    }
}

module.exports = RecipeRepository;
