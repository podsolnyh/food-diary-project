const DishRepository = require('../repositories/dish-repository');

class DishService {
    static async readDishList() {
        return DishRepository.readList();
    }

    static async createDish(personalInfo) {
        return DishRepository.create({
            name: personalInfo.name,
        });
    }

    static async createDishRequest(userID, personalInfo) {
        return DishRepository.create(
            {
                name: personalInfo.name,
            },
            true,
            userID,
        );
    }

    static async deleteDish(dishID) {
        return DishRepository.deleteByID(dishID);
    }

    static async acceptRequest(dishID) {
        return DishRepository.acceptRequest(dishID);
    }
}

module.exports = DishService;
