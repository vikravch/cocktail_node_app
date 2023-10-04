export default class DrinkCategory {
    constructor(data) {
        this._id = Date.now() + Math.floor(Math.random() * 1000); // Generates a unique ID
        this._category = data.strCategory;
    }

    get id() {
        return this._id;
    }

    get category() {
        return this._category;
    }

    toJSON() {
        return {
            idCategory: this.id,
            strCategory: this.category
        };
    }
}