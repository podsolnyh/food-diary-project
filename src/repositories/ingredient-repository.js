const Ingredient = require('../models/food/ingredient');

class IngredientRepository {
    static async create(personalInfo) {
        return Ingredient.create({
            name: personalInfo.name,
            calories: personalInfo.calories,
            proteins: personalInfo.proteins,
            fats: personalInfo.fats,
            carbohydrates: personalInfo.carbohydrates,
        });
    }

    static async readList() {
        return Ingredient.findAll();
    }

    static async updateByID(ingredientID, personalInfo) {
        const ingredient = await Ingredient.findByPk(ingredientID);
        return ingredient.update({
            name: personalInfo.name,
            calories: personalInfo.calories,
            proteins: personalInfo.proteins,
            fats: personalInfo.fats,
            carbohydrates: personalInfo.carbohydrates,
        });
    }

    static async deleteByID(ingredientID) {
        const ingredient = await Ingredient.findByPk(ingredientID);
        return ingredient.destroy();
    }
}

module.exports = IngredientRepository;
