import * as CocktailAPI from '../../data/api'
import {Cocktail} from "../model/Cocktail";
import DrinkCategory from "../model/DrinkCategory";

export default class CocktailRepository{

    async getRandomCocktail(){ // Cocktail
        const res = await CocktailAPI.getRandomCocktail();
        const cocktail = new Cocktail(res.drinks[0]);
        return cocktail;
    }
    async getCategories(){ // DrinkCategory[]
        const res = await CocktailAPI.getCategories();
        const categories = res.drinks.map((jsonItem)=>{
            return new DrinkCategory(jsonItem)
        });
        return categories;
    }
}